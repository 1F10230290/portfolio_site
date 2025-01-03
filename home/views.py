from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def Works_game(request):
    return render(request, 'Works_game.html')