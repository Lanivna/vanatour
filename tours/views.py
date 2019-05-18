from rest_framework import generics
from rest_framework.permissions import AllowAny

from tours.models import Tour
from tours.serializers import TourSerializer


class TourList(generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = (AllowAny,)
