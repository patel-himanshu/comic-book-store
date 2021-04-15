from django.urls import path
from . import views

urlpatterns = [
    path('comicbooks/', views.get_comicbooks, name='comicbooks'),
    path('comicbooks/<str:pk>/', views.get_comicbook, name='comicbook'),
    path('orders/add/', views.add_order_items, name='add_orders'),
    path('user/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('user/profile/', views.get_user_profile, name='user_profile'),
    path('user/profile/update/', views.update_user_profile,
         name='user_PROFILE_DETAILS_update'),
    path('user/register/', views.user_register, name='user_register'),
    path('users/', views.get_users, name='users'),
]
