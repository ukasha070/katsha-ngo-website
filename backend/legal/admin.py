# Register your models here.
from django.contrib import admin
from .models import PrivacyPolicy, TermsOfUse

@admin.register(PrivacyPolicy)
class PrivacyPolicyAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_active')
    search_fields = ('title',)
    list_filter = ('is_active',)


@admin.register(TermsOfUse)
class TermsOfUseAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_active')
    search_fields = ('title',)
    list_filter = ('is_active',)
