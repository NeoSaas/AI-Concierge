from django.db import models

# Create your models here.
class Business(models.Model):
    business_name = models.CharField(max_length=100)
    business_rating = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    business_reviews = models.JSONField(default=dict)
    business_pictures = models.ImageField(upload_to='business_pictures')
    def __str__(self):
        return self.business_name  
    
class Hotel(models.Model):
    hotel_name = models.CharField(max_length=100)
    hotel_picture = models.ImageField(upload_to='hotel_pictures')
    hotel_map = models.ImageField(upload_to='hotel_maps')
    def __str__(self):
        return self.hotel_name