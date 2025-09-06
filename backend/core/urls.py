from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

DEBUG = getattr(settings, "DEBUG", False)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/legal/", include("legal.urls")),
    path("api/articles/", include("article.urls")),
    path("editor/", include("ckeditor_uploader.urls")),
]

# Serve media files during development
if DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)
