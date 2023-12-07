
from django.contrib import admin
from django.urls import path
from api.views import homeview, menuview, reservationview,ordersview

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homeview),
    path("menu/", menuview),
    path("reservation/", reservationview),
    path("order/", ordersview)
]
