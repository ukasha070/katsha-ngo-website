from django_filters import rest_framework as filters
from .models import Article

class ArticleFilter(filters.FilterSet):
    tags = filters.CharFilter(method="filter_tags")
    is_fundraise = filters.CharFilter(method="filter_is_fundraise")

    class Meta:
        model = Article
        fields = ["category", "tags", "success", "is_featured", "is_fundraise"]

    def filter_tags(self, queryset, name, value):
        # Look for tags that contain the requested tag (case insensitive)
        return queryset.filter(tags__icontains=value)
    
    def is_fundraise(self, queryset, name, value):
        val = str(value).lower()
        if val == "true":
            return queryset.filter(is_fundraise=True)
        elif val == "false":
            return queryset.filter(is_fundraise=False)
        # If value is invalid or empty, return unfiltered queryset
        return queryset
