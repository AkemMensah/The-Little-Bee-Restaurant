from django.db import models
from datetime import datetime
from django import forms


occasion_choices = [('Birthday','birthday'),('Wedding','wedding'),('Anniversary','anniversay'),('Business','business'),('Other','other')]


class Reservation(models.Model):
    customer_name = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()
    phone = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    occasion = models.CharField(choices=occasion_choices, max_length=50)
    no_of_guests = models.CharField(max_length=50)
    special = models.CharField(max_length=50, default="No request")
    class Meta:
        db_table="Reservation"


class Menu(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    image = models.ImageField(upload_to="menu_images/")
    description = models.TextField()
    class Meta:
        db_table="Menu"


class Order(models.Model):
    name = models.CharField(max_length=50)
    menu = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    request = models.CharField(max_length=50)
    address = models.TextField()
    class Meta:
        db_table="Order"
