from django.urls import path

from tours.views import TourList

urlpatterns = [
    path("tours/", TourList.as_view())
]
