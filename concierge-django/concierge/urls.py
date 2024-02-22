from django.contrib import admin
from django.urls import path, include
from . import views
from backend.urls import urlpatterns 

urlpatterns = [
    path('api/', include('backend.urls')),
    path('', views.index),
    path('admin/', admin.site.urls),
]
