from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework import status
from django.core.management import call_command
import requests
import json
import sys, os, base64, datetime, hashlib, hmac 
from .models import Business, Hotel, Image
from .serializers import BusinessSerializer, HotelSerializer, ImageSerializer
from openai import OpenAI
import googlemaps
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.decorators import parser_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token

def index(request):
    tag_to_monitor = 'your_tag_name'
    # conversations = fetch_conversations(tag_to_monitor)
    
    return JsonResponse({'conversations': 'test'})

@api_view(['POST'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def signup(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        business = request.data.get('business')
        if not (username and email and password):
            return Response({'error': 'Please provide username, email, and password.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = User.objects.create_user(username=username, email=email, password=password, business=business)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def login_view(request):
    #login 
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        token, _ = Token.objects.get_or_create(user=user)
        return JsonResponse({'token': token.key})
    else:
        return JsonResponse({'message': 'Login failed'}, status=401)

@api_view(['POST'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def logout_view(request):
    #logout
    logout(request)
    return JsonResponse({'message': 'Logout successful'})

@api_view(['GET'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def getBusinessData(request):
    businesses = Business.objects.all()
    serializer = BusinessSerializer(businesses, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def getUserBusinessData(request):
    businesses = Business.objects.filter(author=request.user)
    serializer = BusinessSerializer(businesses)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
@api_view(['POST'])
@parser_classes([MultiPartParser])
@permission_classes([AllowAny])
def addBusinessData(request):
    parser_classes = (MultiPartParser,FormParser,JSONParser)
    # print(request.FILES)
    # print(request.user.id)
    # print(request.data.get('google_reviews_summary'))

    new_business_data = {
        'business_name': request.data.get('business_name'),
        'business_rating': request.data.get('business_rating'),
        'business_tags': request.data.get('business_tags').split(','),
        'business_address': request.data.get('business_address'),
        'business_barcode': request.data.get('business_barcode'),
        'business_image_1': request.FILES['business_picture1'],
        'business_image_2': request.FILES['business_picture2'],
        'business_image_3': request.FILES['business_picture3'],
        'business_image_4': request.FILES['business_picture4'],
        'business_video_1': request.FILES['business_video1'],
        'business_description': request.data.get('business_description'),
        'm_hours_of_operation': request.data.get('m_hours_of_operation'),
        'tu_hours_of_operation': request.data.get('tu_hours_of_operation'),
        'w_hours_of_operation': request.data.get('w_hours_of_operation'),
        'th_hours_of_operation': request.data.get('th_hours_of_operation'),
        'f_hours_of_operation': request.data.get('f_hours_of_operation'),
        'sa_hours_of_operation': request.data.get('sa_hours_of_operation'),
        'su_hours_of_operation': request.data.get('su_hours_of_operation'),
        'business_barcode_date': request.data.get('business_barcode_date'),
        'google_reviews_summary': request.data.get('google_reviews_summary')
    }
    
    hours_dict = {
        "Monday": new_business_data['m_hours_of_operation'],
        "Tuesday": new_business_data['tu_hours_of_operation'],
        "Wednesday": new_business_data['w_hours_of_operation'],
        "Thursday": new_business_data['th_hours_of_operation'],
        "Friday": new_business_data['f_hours_of_operation'],
        "Satuday": new_business_data['sa_hours_of_operation'],
        "Sunday": new_business_data['su_hours_of_operation'],
    }
    
    new_business = Business(
        business_name=new_business_data['business_name'],
        business_rating=new_business_data['business_rating'],
        business_tags=new_business_data['business_tags'],
        business_address=new_business_data['business_address'],
        business_barcode=new_business_data['business_barcode'],
        business_description=new_business_data['business_description'],
        business_image_1=new_business_data['business_image_1'],
        business_image_2=new_business_data['business_image_2'],
        business_image_3=new_business_data['business_image_3'],
        business_image_4=new_business_data['business_image_4'],
        business_video_1=new_business_data['business_video_1'],
        business_place_id='NULL',
        drive_time=0,
        walk_time=0,
        transit_time=0,
        hours_of_operation=hours_dict,
        business_barcode_dates=new_business_data['business_barcode_date'],
        google_reviews_summary=new_business_data['google_reviews_summary'],
        author=request.user
    )
    
    new_business.save()
        
    serializer = BusinessSerializer(new_business)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def updateBusinessData(request):
    business = Business.objects.filter(author=request.user)
    for key, value in request.data.items():
        setattr(business, key, value)
    business.save()
    serializer = BusinessSerializer(business)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def OPAIEndpointCreate(request):
    client = OpenAI(organization='org-2oZsacQ1Ji3Xr0uveLpwg50m', api_key=settings.OPEN_AI_KEY)
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant. "},
            {"role": "user", "content": f"{request.data.get('query')}"}
        ]
    )
    return JsonResponse({'response-payload': response.choices[0].message.content})

@api_view(['POST'])
@parser_classes([JSONParser])
@permission_classes([AllowAny])
def querySpecifcBusinessData(request):
    businessesList = []
    api_key = settings.GOOGLE_API_KEY
    map_client = googlemaps.Client(api_key)
    hotel_location = "300 E New England Ave, Winter Park, FL 32789"
    location = "Winter Park, Florida, United States"
    
    for business in request.data.get('business'):
        try:
            busQuery = business + 'in' + location
            response = map_client.places(query=busQuery)
            results = response.get('results')[0]
            bus_name = results['name']
            bus_address = results['formatted_address']
            bus_place_id = results['place_id']
            bus_rating = results['rating']
            bus_photos = results['photos']
            bus_lat_long = results['geometry']
            bus_photo_urls = []
            # business = Business.objects.filter(business_name=business)

            # Build the directions URL
            destination = bus_name.replace(' ', '+') + '+' + bus_address.replace(' ', '+') + '+' + 'Winter+Park%2c+Florida+United+States'
            directions_url = f"https://www.google.com/maps/dir/?api=1&destination={destination}&dir_action=navigate&origin=300+E+New+England+Ave%2c+Winter+Park%2c+FL+32789"

            wRequest = map_client.distance_matrix(hotel_location, bus_lat_long['location'], mode="walking", units="imperial", departure_time='now', traffic_model="optimistic")
            dRequest = map_client.distance_matrix(hotel_location, bus_lat_long['location'], mode="driving", units="imperial", departure_time='now', traffic_model="optimistic")
            tRequest = map_client.distance_matrix(hotel_location, bus_lat_long['location'], mode="transit", units="imperial", departure_time='now', traffic_model="optimistic")
            walk_time = wRequest['rows'][0]['elements'][0]['duration']['text']
            drive_time = dRequest['rows'][0]['elements'][0]['duration']['text']
            transit_time = tRequest['rows'][0]['elements'][0]['duration']['text']

            business_db_object = Business.objects.filter(business_name=business)
            
            # # Get photo URLs
            # images = Image.objects.filter(business=business_db_object)
            # image_urls = [image.image.url for image in images]
            # print(image_urls)
            
            business_db_object.update(business_place_id=bus_place_id, walk_time=walk_time, drive_time=drive_time, transit_time=transit_time, directions_url=directions_url)
            
        except Exception as e:
            print(e)
            return None
        # businessesList.append(Business.objects.filter(business_name=business))
        
        serializer = BusinessSerializer(Business.objects.filter(business_name=business), many=True)
        # data = serializer.data
        # data['business_pictures'] = image_urls
        businessesList.append(serializer.data)
    return JsonResponse(businessesList, safe=False)