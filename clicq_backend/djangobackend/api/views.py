from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import generics

from .models import UserDetail,Product,Brand,Category
from .serializers import UserDetailsSerializers,BrandSerializers,CategorySerializers,ProductSerializers

class RegUsersList(ListAPIView):
    queryset=UserDetail.objects.all()
    serializer_class=UserDetailsSerializers



class ProductsRetriveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers

class Product_Graphical_UI(generics.ListCreateAPIView):
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
