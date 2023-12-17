from django.db import models
from datetime import datetime
from django import forms

# Defining options for occasion field
occasion_choices = [('Birthday','birthday'),('Wedding','wedding'),('Anniversary','anniversay'),('Business','business'),('Other','other')]

# Define the Reservation class
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

# Define the 'Menu' class
class Menu(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    image = models.ImageField(upload_to="menu_images/")
    description = models.TextField()
    class Meta:
        db_table="Menu"

# Define the 'orders' class
class Order(models.Model):
    name = models.CharField(max_length=50)
    menu = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    request = models.CharField(max_length=50)
    address = models.TextField()
    class Meta:
        db_table="Order"

# testing forms
class OrdersForm(models.Model):
    name = models.CharField(max_length=50)
    menu = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    request = models.CharField(max_length=50)
    address = models.TextField()
    class Meta:
        db_table="OrdersForm"


# testing rawhtmlforms
class RawhtmlForms(models.Model):
    username = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    class Meta:
        db_table="RawhtmlForms"

