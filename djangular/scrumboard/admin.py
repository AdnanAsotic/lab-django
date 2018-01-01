from django.contrib import admin


# display in interface
from .models import List, Card

admin.site.register(List)
admin.site.register(Card)
