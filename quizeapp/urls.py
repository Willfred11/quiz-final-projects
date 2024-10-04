
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('quiz/', views.quiz_qus, name='quiz'),
    path('login/', views.login_fid, name='login'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




