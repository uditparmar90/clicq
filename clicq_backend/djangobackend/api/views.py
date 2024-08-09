from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .models import UserDetails
from .serializers import UserDetailsSerializers

class RegUsersList(ListAPIView):
    queryset=UserDetails.objects.all()
    serializer_class=UserDetailsSerializers
