# serializers.py
from .models import PrivacyPolicy, TermsOfUse
from rest_framework import serializers

class PrivacyPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivacyPolicy
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'is_active']

class TermsOfUseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsOfUse
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'is_active']