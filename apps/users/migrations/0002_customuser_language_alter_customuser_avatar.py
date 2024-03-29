# Generated by Django 4.2.1 on 2023-05-19 13:15

import apps.users.helpers
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='language',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='avatar',
            field=models.FileField(blank=True, upload_to='profile-pictures/', validators=[apps.users.helpers.validate_profile_picture]),
        ),
    ]
