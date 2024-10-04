from django.shortcuts import render

# Create your views here.
def quiz_qus(request):
    return render(request, 'quizeapp/quiz.html')

def login_fid(request):
    return render(request, 'quizeapp/login.html')
