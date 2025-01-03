from django.contrib import admin
from .models import Category,Product,Brand
from .models import  UserDetail

# Register your models here.
@admin.register(UserDetail)
class RegisterUser(admin.ModelAdmin):
    list_display=['id','name','password','email','phone_number']
    search_fields = ['name', 'email', 'phone_number']
    list_filter = ['name'] #Example filter, could be based on other fields or custom logic
    ordering = ['name'] #Orders the list by name by default

@admin.register(Brand)
class DispAPIBrand(admin.ModelAdmin):
    listDisplay=['brand','country','country']
    
@admin.register(Category)
class DispAPICategory(admin.ModelAdmin):
    listDisplay=['name','Category_id']

@admin.register(Product)
class DispAPIPRoduct(admin.ModelAdmin):
    list_display=['category','name','desc','brand','img']




