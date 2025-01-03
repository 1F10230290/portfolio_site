from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def Works_game(request):
    return render(request, 'Works_game.html')

def Harusion(request):
    return render(request, 'Harusion.html')

def GBW(request):
    return render(request, 'Get-Back-Winter.html')

def Collider(request):
    return render(request, 'Collider.html')

def E_Racer(request):
    return render(request, 'E_Racer.html')