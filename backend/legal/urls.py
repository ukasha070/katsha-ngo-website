from django.urls import path
from . import views

urlpatterns = [
    path('privacy-policy/', view=views.GetPrivacyPolicy.as_view(), name='privacy_policy'),
    path('terms-of-use/', view=views.GetTermsOfUse.as_view(), name='get_terms_of_use'),
]
