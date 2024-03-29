# Generated by Django 5.0.3 on 2024-03-09 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_remove_business_business_name_and_tags_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='business_address',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='business',
            name='business_place_id',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='business',
            name='drive_time',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='business',
            name='transit_time',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='business',
            name='walk_time',
            field=models.CharField(default='', max_length=100),
        ),
    ]
