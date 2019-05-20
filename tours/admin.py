from django.contrib import admin

# Register your models here.
from tours.models import *

admin.site.register(Country)
admin.site.register(Place)
admin.site.register(Hotel)
admin.site.register(Tour)
