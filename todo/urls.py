from django.urls import path
from . import views



urlpatterns = [
    path('', views.todo),
    path('action/<int:id>/', views.action, name='action'),
    path('customers/', views.customers, name='customers'),
    path('customer/<int:id>', views.customer, name='customer'),
    path('addnewcustomer/', views.addnewcustomer, name='addnewcustomer')
]