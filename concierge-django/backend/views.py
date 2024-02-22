from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework import status
from django.core.management import call_command
import requests
import json
import sys, os, base64, datetime, hashlib, hmac 
from openai import OpenAI

def index(request):
    tag_to_monitor = 'your_tag_name'
    # conversations = fetch_conversations(tag_to_monitor)
    
    return JsonResponse({'conversations': 'test'})


@api_view(['POST'])
def OPAIEndpointExisting(request):
    # client = OpenAI(organization='org-2oZsacQ1Ji3Xr0uveLpwg50m', api_key=settings.OPEN_AI_KEY)
    # conversation = Conversation.objects.filter(id=request.data.get('convo_id'))
    
    # convo_messages = conversation[0].messages
    # messages = []
    
    # for message in convo_messages:
    #     lines_message = {"role": message.get('sender'), "content": message.get('content')}
    #     messages.append(lines_message)
    
    # user_message = {"role": "user", "content": request.data.get('query')}
    # messages.append(user_message)
    
    # response = client.chat.completions.create(
    #     model="ft:gpt-3.5-turbo-1106:personal::8Lj9L3WV",
    #     messages=messages
    # )
    
    # return JsonResponse({'response-payload': response.choices[0].message.content})
    return JsonResponse({'response-payload': 'test'})


@api_view(['POST'])
def OPAIEndpointCreate(request):
    client = OpenAI(organization='org-2oZsacQ1Ji3Xr0uveLpwg50m', api_key=settings.OPEN_AI_KEY)
    
    response = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-1106:personal::8Lj9L3WV",
        messages=[
            {"role": "system", "content": "You are a helpful assistant. Your main job is creative direction. I.e. the creation of video scripts and skits as well as ads for products"},
            {"role": "user", "content": f"{request.data.get('query')}"}
        ]
    )
    print(response.choices[0].message.content)
    return JsonResponse({'response-payload': response.choices[0].message.content})