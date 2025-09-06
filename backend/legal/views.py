from rest_framework import generics
from .models import PrivacyPolicy, TermsOfUse
from .serializers import PrivacyPolicySerializer, TermsOfUseSerializer


class GetPrivacyPolicy(generics.RetrieveAPIView):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer

    def get_object(self):
        return self.queryset.first()
    
class GetTermsOfUse(generics.RetrieveAPIView):
    queryset = TermsOfUse.objects.all()
    serializer_class = TermsOfUseSerializer

    def get_object(self):
        return self.queryset.first()