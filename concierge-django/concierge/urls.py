from django.contrib import admin
from django.urls import path, include
from . import views
from backend.urls import urlpatterns 
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/', include('backend.urls')),
    path('', views.index),
    path('admin/', admin.site.urls),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
