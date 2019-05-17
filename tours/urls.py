from django.urls import path

from tours.views import TourList

urlpatterns = [
    path("api/v1/", TourList.as_view())
    ]
