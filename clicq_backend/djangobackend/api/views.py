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
    # print(queryset)
    serializer_class=ProductSerializers
    def get_Obj(self):
        brandId=self.kwargs['pk']
        print(self.kwargs)
        if(brandId):
            resp=Product.objects.filter(brand=brandId)
            print(resp)
            return Product.objects.filter(brand=brandId)
        return super.get_queryset()
    # def get(self, request, *args, **kwargs):
    #     try:
    #         # Fetch filtered queryset
    #         products = self.get_queryset()
    #         serializer = self.get_serializer(products, many=True)
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     except Brand.DoesNotExist:
    #         return Response({"error": "Brand not found"}, status=status.HTTP_404_NOT_FOUND)
    

class Product_Graphical_UI(ListAPIView):
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
