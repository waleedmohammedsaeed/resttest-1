from django.db import models

# Create your models here.

class Actions(models.Model):
    name = models.CharField(max_length=50)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
class Customer(models.Model):
    name = models.CharField(max_length=40)
    ctype = models.CharField(max_length=20)
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Customer'
        verbose_name_plural = 'Customers'

