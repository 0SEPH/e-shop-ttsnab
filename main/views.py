from django.shortcuts import render
from django.http import HttpResponse
from .models import Product, Type

# Create your views here.

# def index(request):
#     type = Type.objects.all()
#     products = Product.objects.all()
#     context = {"type": type, "products": products}
#     return render(request, 'index.html', context)

def index(request):
    type = Type.objects.all()
    products = Product.objects.all()
    context = {"type": type, "products": products}
    return render(request, 'product_card.html', context)