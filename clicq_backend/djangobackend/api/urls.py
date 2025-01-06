from django.urls import path
from api import views
from .views import BrandRetriveUpdateDestroyAPIView,Product_Graphical_UI,ProductsRetriveUpdateDestroyAPIView

urlpatterns = [
    path('regUser/', views.RegUsersList.as_view()),
	path('Product/', Product_Graphical_UI.as_view(), name='product-list-create'),
	path('Product/<int:pk>', ProductsRetriveUpdateDestroyAPIView.as_view(), name='product-list-create'),                   
	path('brands/', BrandRetriveUpdateDestroyAPIView.as_view(), name='brand-detail'),
]
