from django.urls import path
from api import views

urlpatterns = [
    path('regUser/', views.RegUsersList.as_view()),
]
