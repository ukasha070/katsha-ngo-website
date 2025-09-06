# Create your models here.
from django.db import models
from ckeditor.fields import RichTextField

class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=255, unique=True)
    content = RichTextField()  # CKEditor field for rich text content
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)  # To manage active/inactive policies

    class Meta:
        ordering = ['-created_at']  # Order by the most recent first

    def __str__(self):
        return self.title

class TermsOfUse(models.Model):
    title = models.CharField(max_length=255, unique=True)
    content = RichTextField()  # CKEditor field for rich text content
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)  # To manage active/inactive policies

    class Meta:
        ordering = ['-created_at']  # Order by the most recent first

    def __str__(self):
        return self.title
