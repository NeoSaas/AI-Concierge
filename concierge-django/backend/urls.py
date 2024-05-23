from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('OPAICreateConvo/', views.OPAIEndpointCreate, name='OPAI-create'),
    path('getBusiness/', views.getBusinessData, name='get business query'),
    path('queryBusinessData/', views.querySpecifcBusinessData, name='get business query specific'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.signup, name='signup'),
    path('addBusiness/', views.addBusinessData, name='add business query'),
    path('getUserBusinessData/', views.getUserBusinessData, name='get user business query'),
    path('updateBusinessData/', views.updateBusinessData, name='update business query'),
]