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
from .models import Business, Hotel
from .serializers import BusinessSerializer, HotelSerializer

from openai import OpenAI

def index(request):
    tag_to_monitor = 'your_tag_name'
    # conversations = fetch_conversations(tag_to_monitor)
    
    return JsonResponse({'conversations': 'test'})


@api_view(['GET'])
def getBusinessData(request):
    businesses = Business.objects.all()
    serializer = BusinessSerializer(businesses, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def addBusinessData(request):
    new_business_data = {
        'business_name': request.data.get('business_name'),
        'business_pictures': request.data.get('business_pictures')
    }
    new_business = Business(
        business_name=new_business_data['business_name'],
        business_pictures=new_business_data['business_pictures']
    )
    
    new_business.save()
    serializer = BusinessSerializer(new_business)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@csrf_exempt
@api_view(['GET'])
def getBusinessDataGoogle(request):
    data = json.loads(request.body)
    selected_businesses = data.get('businesses', [])

    places_api_endpoint = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
    api_key = settings.GOOGLE_API_KEY

    business_details = {}

    for business_name in selected_businesses:
        params = {
            'key': api_key,
            'query': business_name,
            'fields': 'name,rating,formatted_address,formatted_phone_number,reviews',
        }

        response = requests.get(places_api_endpoint, params=params)
        if response.status_code == 200:
            results = response.json().get('results')
            if results:
                # Assuming the first result is the most relevant
                place_id = results[0]['place_id']
                # Now we fetch details for the specific place using its place_id
                details_params = {
                    'key': api_key,
                    'place_id': place_id,
                    'fields': 'name,rating,formatted_address,formatted_phone_number,reviews',
                }
                details_response = requests.get('https://maps.googleapis.com/maps/api/place/details/json', params=details_params)
                if details_response.status_code == 200:
                    business_data = details_response.json().get('result')
                    business_details[business_name] = business_data
                else:
                    print(f"Error fetching details for {business_name}")
            else:
                print(f"No results found for {business_name}")
        else:
            print(f"Error fetching data for {business_name}")

    return JsonResponse(business_details)


@api_view(['POST'])
def OPAIEndpointCreate(request):
    client = OpenAI(organization='org-2oZsacQ1Ji3Xr0uveLpwg50m', api_key=settings.OPEN_AI_KEY)
    
    response = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-1106:personal::8Lj9L3WV",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"{request.data.get('query')}"}
        ]
    )
    print(response.choices[0].message.content)
    return JsonResponse({'response-payload': response.choices[0].message.content})

@api_view(['POST'])
def queryBusinessData(request):
    return JsonResponse({'response-payload': 'test'})