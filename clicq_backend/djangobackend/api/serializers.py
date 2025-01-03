from rest_framework import serializers
from .models import UserDetail,Product,Brand,Category

class UserDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model=UserDetail
        fields=('__all__')

class BrandSerializers(serializers.ModelSerializer):
    class Meta:
        model=Brand
        fields=('__all__')

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=('__all__')

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields=('__all__')

