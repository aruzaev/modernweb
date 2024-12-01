from django.shortcuts import render
from django.http import HttpResponse
import datetime

# Create your views here.

def greetings(request):
    return HttpResponse("<h1>Artem Ruzaev - n01497403</h1>")

def currentTime(request):
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return HttpResponse(f"<h1>Current Date and Time: {time}</h1>")

def homepage(request):
    return render(request, 'main.html')