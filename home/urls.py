from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('Works_game',views.Works_game, name="Works_game"),
    path('Harusion', views.Harusion, name='Harusion'),
    path('GBW', views.GBW, name='GBW'),
    path('Collider', views.Collider, name='Collider'),
    path('E_Racer', views.E_Racer, name='E_Racer'),
    path('Achievements', views.Achievements, name='Achievements'),
    path('Profile', views.Profile, name='Profile'),
    path('Booscuit', views.Booscuit, name='Booscuit'),
    path('Imagination_Hat', views.Imagination_Hat, name='Imagination_Hat'),
    path('BERRY',views.BERRY, name='BERRY'),
]