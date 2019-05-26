from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from tours.models import Tour
from tours.serializers import TourSerializer
import django_filters.rest_framework


class TourList(generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = (AllowAny,)
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filterset_fields = ("place__country__country_name",)


class ListAvailableCountries(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request):
        countries = {
            place.country.country_name
            for tour in Tour.objects.only("place")
            for place in tour.place.only("country__country_name")
        }

        return Response(countries)
