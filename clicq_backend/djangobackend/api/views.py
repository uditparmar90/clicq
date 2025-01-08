from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import generics

from .models import UserDetail,Product,Brand,Category
from .serializers import UserDetailsSerializers,BrandSerializers,CategorySerializers,ProductSerializers
from rest_framework.response import Response
from rest_framework import status



class RegUsersList(ListAPIView):
    queryset=UserDetail.objects.all()
    serializer_class=UserDetailsSerializers

class ProductsRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers

    def get_queryset(self):
        brand_id = self.kwargs.get('brandId')  # Fetch 'brandId' from kwargs
        if brand_id:
            return Product.objects.filter(brand_id=brand_id)  # Filter by brand_id
        return super().get_queryset()

    def get(self, request, *args, **kwargs):
        try:
            # Fetch filtered queryset
            products = self.get_queryset()
            serializer = self.get_serializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Brand.DoesNotExist:
            return Response({"error": "Brand not found"}, status=status.HTTP_404_NOT_FOUND)
    

class ProductGraphicalUI(ListAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers


class BrandListCreateAPIView(ListAPIView):
    queryset=Brand.objects.all()
    serializer_class=BrandSerializers
class BrandRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializers
class BrandRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializers

class CategoryCreateAPIView(ListAPIView):                              
    queryset=Category.objects.all()
    serializer_class=CategorySerializers
