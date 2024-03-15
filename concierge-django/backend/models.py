from django.db import models

# Create your models here.
class Business(models.Model):
    business_name = models.CharField(max_length=100, default='')
    business_tags = models.JSONField(default=dict)
    business_rating = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    # business_reviews = models.JSONField(default=dict)
    business_place_id = models.CharField(max_length=100, default='')
    business_address = models.CharField(max_length=100, default='')
    business_pictures = models.JSONField(default=dict, blank=True, null=True)
    walk_time = models.CharField(max_length=100, default='')
    drive_time = models.CharField(max_length=100, default='')
    transit_time = models.CharField(max_length=100, default='')
    directions_url = models.CharField(max_length=100, default='')
    hours_of_operation = models.JSONField(default=dict, blank=True, null=True)
    business_barcode = models.ImageField(upload_to='business_barcodes', blank=True, null=True)
    def __str__(self):
        return self.business_name  
    
class Hotel(models.Model):
    hotel_name = models.CharField(max_length=100)
    hotel_picture = models.ImageField(upload_to='hotel_pictures')
    hotel_map = models.ImageField(upload_to='hotel_maps')
    def __str__(self):
        return self.hotel_name
