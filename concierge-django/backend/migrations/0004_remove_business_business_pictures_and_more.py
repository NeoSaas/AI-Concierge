# Generated by Django 5.0.2 on 2024-03-03 17:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_remove_business_business_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='business',
            name='business_pictures',
        ),
        migrations.RemoveField(
            model_name='business',
            name='business_rating',
        ),
        migrations.RemoveField(
            model_name='business',
            name='business_reviews',
        ),
    ]
