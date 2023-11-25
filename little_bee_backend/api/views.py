from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
import json
from django.forms import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from api.models import Menu

# Create your views here.
def testview(request):

    return HttpResponse("<h1>Hello world</h1>")

@ csrf_exempt
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
    return HttpResponse(request.method)
