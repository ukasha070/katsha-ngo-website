from django.contrib import admin
from .models import Article, Fundraise


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_published", "success", "created_at")
    list_filter = ("category", "is_published", "success", "created_at")
    search_fields = ("title", "subtitle", "content")
    prepopulated_fields = {"slug": ("title",)}


@admin.register(Fundraise)
class FundraiseAdmin(admin.ModelAdmin):
    list_display = ("article", "target_amount", "raised_amount", "currency", "created_at")
    list_filter = ("currency", "created_at")
    search_fields = ("article__title",)