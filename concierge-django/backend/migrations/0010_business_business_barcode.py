# Generated by Django 5.0.2 on 2024-03-14 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_alter_business_business_pictures'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='business_barcode',
            field=models.ImageField(blank=True, null=True, upload_to='business_barcodes'),
        ),
    ]
