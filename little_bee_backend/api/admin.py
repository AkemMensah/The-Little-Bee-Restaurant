from django.contrib import admin
from api.models import Menu, Reservation, Order

# Register your models here.
admin.site.register(Menu)
admin.site.register(Reservation)
admin.site.register(Order)