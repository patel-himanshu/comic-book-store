from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('comicbooks/', views.get_comicbooks, name='comicbooks'),
    path('comicbooks/<str:pk>/', views.get_comicbook, name='comicbook'),
]
