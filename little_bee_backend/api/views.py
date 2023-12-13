from multiprocessing.forkserver import read_signed
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
import json
from django.forms import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from api.models import Menu
from api.models import Reservation
# from api.models import Customer
from api.models import Order
from pprint import pprint




# Create your views here.


def homeview(request):
    # return HttpResponse("<h1>Hello world</h1>")
    return render(request,"homepage.html",{})

@csrf_exempt
def menuview(request):
    if request.method == "GET":
        menu_items= Menu.objects.all()
        data = serialize("json",menu_items)
        return JsonResponse(data, safe=False)
    if request.method == "POST":
        try:
            body=request.body.decode("utf-8")
            data=json.loads(body)
            Menu(**data).save()
            return JsonResponse({"message":"menu saved successfully"},status=201)
        except Exception as e:
            print(e)
            return ({"message":"Failed to save menu"})
    if request.method == "DELETE":
        try:
            body = request.body.decode("utf-8")
            data = json.loads(body)
            menu_id = data.get('menu_id')
            if menu_id:
                Menu.objects.filter(id=menu_id).delete()
                return JsonResponse({"message":"Menu deleted successfully"})
            else:
                return JsonResponse({"message":"Menu ID not provided"})
        except Exception as e:
            print(e)
            return JsonResponse({"message":"Failed to delete menu"})
    return HttpResponse(request.method)

@csrf_exempt
def reservationview(request):
    if request.method == "GET":
        reserv_items = Reservation.objects.all()
        # data = serialize("json", reserv_items)
        data = [model_to_dict(item) for item in reserv_items]
        
        return JsonResponse(data, safe=False)
    if request.method == "POST":
        try:
            body = request.body.decode("utf-8")
            data = json.loads(body)
            print("\nRAW DATA: \n")
            pprint(data)
            reservation = Reservation(**data)
            reservation.save()
            reservation.refresh_from_db()
            print("\nDATABASE COPY: \n\n")
            pprint(model_to_dict(reservation))

            return JsonResponse({"message":"Reservation saved successfully"})
        except Exception as e:
            print(e)
            return JsonResponse({"message":"Failed to save reservation"})
    if request.method == "DELETE":
        try:
            body = request.body.decode("utf-8")
            data = json.loads(body)
            reservation_id = data.get('reservation_id')
            if reservation_id:
                Reservation.objects.filter(id=reservation_id).delete()
                return JsonResponse({"message":"Reservation deleted successfull"})
            else:
                return JsonResponse({"message":"Reservaiton is not found"})
        except Exception as e:
            print(e)
            return JsonResponse({"message":"Failed to delete Reservation"})
    return HttpResponse(request.method)

@csrf_exempt
def ordersview(request):
    if request.method == "GET":
        order_items = Order.objects.all()
        data = serialize("json",order_items)
        return JsonResponse(data, safe=False)
    if request.method == "POST":
        try:
            body = request.body.decode("utf-8")
            data = json.loads(body)
            Order(**data).save()
            return JsonResponse({"message":"order saved successfully"})
        except Exception as e:
            print(e)
            return JsonResponse({"message":"Failed to save order"})
    if request.method == "DELETE":
        try:
            body = request.body.decode("utf-8")
            data = json.loads(body)
            order_id = data.get('order_id')
            if order_id:
                Order.objects.filter(id="order_id").delete()
                return JsonResponse({"message":"Order successfully deleted"})
            else:
                return JsonResponse({"message":"Order id not found"})
        except Exception as e:
            print(e)
            return JsonResponse({"message":"Failed to delete Order"})
            
        
        
        
