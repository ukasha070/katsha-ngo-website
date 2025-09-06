import uuid
from django.db import models
from django.utils.text import slugify
from django.utils import timezone
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField


class Article(models.Model):
    CATEGORY_CHOICES = [
        ("office", "Office"),
        ("life", "Life"),
        ("fundraise", "Fundraise"),
        ("others", "Others"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500, blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)
    location = models.CharField(blank=True, null=True)
    content = RichTextUploadingField()
    tags = models.CharField(max_length=50, default="list")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default="others")
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    is_fundraise = models.BooleanField(default=False)
    success = models.BooleanField(default=False)  # auto-updated for fundraises
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        # Auto-generate slug
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Fundraise(models.Model):
    CURRENCY_CHOICES = [
        ("UGX", "Ugandan Shillings"),
        ("USD", "US Dollars"),
    ]

    article = models.OneToOneField(Article, on_delete=models.CASCADE, related_name="fundraise")
    target_amount = models.DecimalField(max_digits=12, decimal_places=2)
    raised_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES, default="UGX")
    deadline = models.DateTimeField(blank=True, null=True)  # optional fundraising end date
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        # Update success on article if target is reached
        if self.raised_amount >= self.target_amount:
            self.article.success = True
            self.article.save()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Fundraise for {self.article.title}"
