from django.db import models
from datetime import datetime

# Create your models here.
class Customer(models.Model):
    class Meta:
        db_table="Customer"

class Reservation(models.Model):
    time = models.TimeField(null=False,blank=False, default=datetime.now)
    class Meta:
        db_table="Reservation"



class Menu(models.Model):
    name = models.CharField(null=False, blank=False, max_length=30)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to="menu_images/")
    description = models.TextField(null= False, blank=False)
    class Meta:
        db_table="Menu"


class Order(models.Model):
    class Meta:
        db_table="Order"
