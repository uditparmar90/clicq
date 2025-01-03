from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView

from .models import UserDetail,Product,Brand,Category
from .serializers import UserDetailsSerializers,BrandSerializers,CategorySerializers,ProductSerializers

class RegUsersList(ListAPIView):
    queryset=UserDetail.objects.all()
    serializer_class=UserDetailsSerializers

class ProductsListCreateApliView(ListAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers
class ProductsRetriveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers


class BrandListCreateAPIView(ListAPIView):
    queryset=Brand.objects.all()
    serializer_class=BrandSerializers
class BrandRetriveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset=Brand.objects.all()
    serializer_class=BrandSerializers

class CategoryCreateAPLIView(ListAPIView):                              
    queryset=Category.objects.all()
    serializer_class=CategorySerializers
