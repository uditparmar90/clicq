from django.urls import path
from .views import (
    RegUsersList,
    ProductsRetrieveUpdateDestroyAPIView,
    ProductGraphicalUI,
    BrandListCreateAPIView,
    BrandRetrieveUpdateDestroyAPIView,
    CategoryCreateAPIView,
)

urlpatterns = [
    path('users/', RegUsersList.as_view(), name='user-list'),
    path('products/<int:brandId>/', ProductsRetrieveUpdateDestroyAPIView.as_view(), name='product-by-brand'),
    path('products/', ProductGraphicalUI.as_view(), name='product-list'),
    path('brands/', BrandListCreateAPIView.as_view(), name='brand-list'),
    path('brands/<int:pk>/', BrandRetrieveUpdateDestroyAPIView.as_view(), name='brand-detail'),
    path('categories/', CategoryCreateAPIView.as_view(), name='category-list'),
]
