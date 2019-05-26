from django.urls import path

from tours.views import TourList, ListAvailableCountries

urlpatterns = [
    path("tours/", TourList.as_view()),
    path("tours/available_countries/", ListAvailableCountries.as_view())
]
