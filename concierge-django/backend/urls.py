from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('bot-action/', views.bot_action, name='bot-action'),
    # path('login/', views.login_view, name='login'),
    # path('logout/', views.logout_view, name='logout'),
    # path('conversations/', views.conversation_list, name='conversation-list'),
    # path('get-statistics/', views.conversation_stats, name='conversation-stats'),
    # path('invoke-endpoint/', views.invoke_endpoint, name='response-creation'),
    path('OPAICreateConvo/', views.OPAIEndpointCreate, name='OPAI-create'),
    path('OPAIInference/', views.OPAIEndpointExisting, name='Inference'),
]