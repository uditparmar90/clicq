from django.urls import path
from api import views
from .views import BrandRetriveUpdateDestroyAPIView

urlpatterns = [
    path('regUser/', views.RegUsersList.as_view()),
	path('brands/', BrandRetriveUpdateDestroyAPIView.as_view(), name='brand-detail'),
]
