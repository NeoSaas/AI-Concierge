# Generated by Django 5.0.2 on 2024-03-12 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_business_directions_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='hours_of_operation',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='business',
            name='business_pictures',
            field=models.JSONField(default=dict),
        ),
    ]
