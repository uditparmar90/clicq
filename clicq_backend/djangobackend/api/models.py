from django.db import models

class UserDetail(models.Model):
    name=models.CharField(max_length=100)
    password=models.CharField(max_length=50)
    email=models.EmailField(max_length=200)
    phone_number = models.CharField(max_length=12)
    def __str__(self):
        return self.name

class Category(models.Model):
    Category_id=models.CharField(max_length=200,default='')
    name=models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Brand(models.Model):
    brand=models.CharField(max_length=15)
    country=models.CharField(max_length=200,blank=True,null=True)
    # url=models.URLField(max_length=200)
    def __str__(self):
        return self.brand

class Product(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    name=models.CharField(max_length=200)
    brand=models.ForeignKey(Brand,on_delete=models.CASCADE)
    desc=models.CharField(max_length=200,null=True,blank=True)
    img=models.CharField(max_length=300)
    # url=models.URLField(max_length=300,blank=True,null=True)
    def __str__(self):
        return f"{self.brand}-{self.name}-{self.category}"
