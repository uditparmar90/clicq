from django.contrib import admin
from .models import UserDetails

# Register your models here.
@admin.register(UserDetails)
class RegisterUser(admin.ModelAdmin):
    list_display=['id','name','password','email','phone_number']