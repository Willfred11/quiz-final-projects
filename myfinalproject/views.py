from django.shortcuts import render

def homepage(request):
    return render(request, 'index.html')
def contactpage(request):
    return render(request, 'contactus.html')