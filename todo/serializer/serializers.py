from rest_framework import  serializers
from todo.models import Actions, Customer


class ActionsSerializer(serializers.ModelSerializer):
    class  Meta:
        model = Actions
        fields = '__all__'


class CustomerSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class CustomerSerilaizer(serializers.ModelSerializer):
    class Meta:
        model= Customer
        fields= '__all__'
        # fields= ['id', 'name', 'ctype']
