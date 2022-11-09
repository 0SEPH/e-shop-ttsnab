from django.contrib import admin
from .models import Product, Type

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "price", "type")
    list_display_links = ("title", "description")
    search_fields = ("title", "description", )


admin.site.register(Product, ProductAdmin)
admin.site.register(Type)