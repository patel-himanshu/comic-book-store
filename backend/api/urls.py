from django.urls import path
from . import views

urlpatterns = [
    path('user/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('user/profile/', views.get_user_profile, name='user_profile'),
    path('user/register/', views.user_register, name='user_register'),
    path('users/', views.get_users, name='users'),
    path('comicbooks/', views.get_comicbooks, name='comicbooks'),
    path('comicbooks/<str:pk>/', views.get_comicbook, name='comicbook'),
]
