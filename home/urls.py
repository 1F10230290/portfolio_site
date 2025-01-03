from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('Works_game',views.Works_game, name="Works_game"),
]