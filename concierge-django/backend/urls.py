from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('OPAICreateConvo/', views.OPAIEndpointCreate, name='OPAI-create'),
    path('getBusiness/', views.getBusinessData, name='get business query'),
    path('getBusinessDataGoogle/', views.getBusinessDataGoogle, name='get business query google'),
    path('addBusiness/', views.addBusinessData, name='add business query'),
]