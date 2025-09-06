from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics, filters

from .models import Article
from .serializers import ArticleListSerializer, ArticleDetailSerializer
from .filters import ArticleFilter


class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.filter(is_published=True)
    serializer_class = ArticleListSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    filterset_class = ArticleFilter
    search_fields = ["title", "subtitle"]


class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.filter(is_published=True)
    serializer_class = ArticleDetailSerializer
    lookup_field = "slug"
