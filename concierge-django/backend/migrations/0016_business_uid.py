# Generated by Django 5.0.2 on 2024-03-29 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0015_remove_business_business_pictures_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='uid',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
    ]
