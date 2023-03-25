from django.shortcuts import render
from django.http import  JsonResponse, Http404, HttpResponse
from .models import Actions, Customer
from .serializer.serializers import ActionsSerializer, CustomerSerilaizer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
# Create your views here.

@api_view(['GET', 'POST']) 
def todo(request):
    if request.method == 'GET':
        tasks = Actions.objects.all()
        serializer =  ActionsSerializer(tasks, many=True)
        return JsonResponse({'todos': serializer.data})
    if request.method == 'POST':
        serializer = CustomerSerilaizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer':serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def action(request, id):
    task = Actions.objects.get(id=id)
    serializer = ActionsSerializer(task, many=False)
    return JsonResponse({'task': serializer.data})

def customers(request):
    customers = Customer.objects.all()
    cust = CustomerSerilaizer(customers, many=True)
    return JsonResponse({'customersdata': cust.data})

@api_view(['GET', 'POST', 'DELETE'])
def customer(request, id):
    try:
        customer = Customer.objects.get(id = id)
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND) 
        # raise Http404('Custome not exist')

    if request.method == 'GET':     
        cus = CustomerSerilaizer((customer), many=False)
        return Response({'customer': cus.data})
    elif request.method == 'DELETE':
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'POST':
        serializer = CustomerSerilaizer(customer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'{customer': serializer.data})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def addnewcustomer(request):
    if request.method  == 'GET':
        customer = Customer.objects.all()
        serializer = CustomerSerilaizer(customer, many=True)
        return Response({'customer':serializer.data})
    elif request.method == 'POST':
        serializer = CustomerSerilaizer(data=request.data)
        print('waleed django')
        if serializer.is_valid():
            serializer.save()
            return Response({'{customer': serializer.data})
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

