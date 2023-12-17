from django.contrib import admin
from api.models import Menu, Reservation, Order,  OrdersForm
from api.models import  RawhtmlForms

# Register your models here.
admin.site.register(Menu)
admin.site.register(Reservation)
admin.site.register(Order)
admin.site.register(OrdersForm)
admin.site.register(RawhtmlForms)
