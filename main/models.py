from django.db import models
from django.core import validators

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=20, verbose_name='Название товара')
    description = models.TextField(max_length=200, null=True, blank=True, verbose_name='Описание товара')
    product_id = models.SmallIntegerField(default=0, db_index=True)
    price = models.FloatField(null=True, blank=True, validators=[validators.MinValueValidator(1)], verbose_name='Цена')
    type = models.ForeignKey('Type',on_delete=models.PROTECT, verbose_name='Тип товара')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Товары"
        verbose_name = "Товар"

class Type(models.Model):
    name = models.CharField(max_length=20, verbose_name="Наименование типа товара")

    def get_absolute_url(self):
        return "eshop/type/{}".format(self.pk)
    
    def __str__(self):
        return self.name
