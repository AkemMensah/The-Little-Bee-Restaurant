
from django.contrib import admin
from django.urls import path
from api.views import homeview, menuview,reservationview,ordersview,aboutview,contactview
from api.views import ordersFormview
from api.views import raw_htmlFormsview, dynamic_lookupview

# adding apis
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homeview),
    path('about/', aboutview),
    path('contact/', contactview),
    path('form/', ordersFormview),
    path('htmlforms/', raw_htmlFormsview),
    path('lookup/<int:id>', dynamic_lookupview),
    path("menu/", menuview),
    path("reservation/", reservationview),
    path("order/", ordersview)
]
