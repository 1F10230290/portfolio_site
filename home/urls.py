from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('Works_game',views.Works_game, name="Works_game"),
    path('Harusion', views.Harusion, name='Harusion'),
    path('GBW', views.GBW, name='GBW'),
    path('Collider', views.Collider, name='Collider'),
    path('E_Racer', views.E_Racer, name='E_Racer'),
]