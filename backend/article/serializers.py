from bs4 import BeautifulSoup

from rest_framework import serializers
from .models import Article, Fundraise


class FundraiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fundraise
        fields = [
            "target_amount",
            "raised_amount",
            "currency",
            "deadline",
            "created_at",
            "updated_at",
        ]


class ArticleListSerializer(serializers.ModelSerializer):
    fundraise = FundraiseSerializer(read_only=True)
    thumbnail = serializers.SerializerMethodField()
    category_display = serializers.CharField(source="get_category_display", read_only=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "subtitle",
            "location",
            "thumbnail",
            "slug",
            "is_featured",
            "category",
            "category_display",
            "is_published",
            "success",
            "created_at",
            "fundraise"
        ]


    def get_thumbnail(self, obj):
        """
        Extract the first image src from CKEditor content as thumbnail.
        """
        if not obj.content:
            return None

        soup = BeautifulSoup(obj.content, "html.parser")
        img_tag = soup.find("img")
        if img_tag and img_tag.get("src"):
            return img_tag["src"]

        return None


class ArticleDetailSerializer(serializers.ModelSerializer):
    fundraise = FundraiseSerializer(read_only=True)
    category_display = serializers.CharField(source="get_category_display", read_only=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "subtitle",
            "slug",
            "content",
            "location",
            "tags",
            "is_featured",
            "category",
            "category_display",
            "is_published",
            "success",
            "created_at",
            "updated_at",
            "fundraise",
        ]
