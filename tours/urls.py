from django.urls import path

from tours.views import TourList

urlpatterns = [
    path("", TourList.as_view())
    ]
