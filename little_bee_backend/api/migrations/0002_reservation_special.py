# Generated by Django 4.2.7 on 2023-11-29 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='special',
            field=models.CharField(default='No request', max_length=50),
        ),
    ]
