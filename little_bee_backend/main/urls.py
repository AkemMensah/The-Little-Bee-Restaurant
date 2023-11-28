
from django.contrib import admin
from django.urls import path
from api.views import testview, menuview, reservationview,customerview, ordersview

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/', testview),
    path("menu/", menuview),
    path("reservation/", reservationview),
    path("order/", ordersview)
]
