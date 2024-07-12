from django.urls import path
from . import views

urlpatterns = [
    path('users', views.get_users),
    path('add', views.add_user),
    path('update/<int:id>', views.update_user),
    path('user/<int:id>', views.get_user),
]
