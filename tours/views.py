from rest_framework import generics
from rest_framework.permissions import AllowAny

# Create your views here.
from rest_framework.response import Response

from tours.models import Tour
from tours.serializers import TourSerializer


class TourList(generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = (AllowAny,)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = TourSerializer(queryset, many=True)
        return Response(serializer.data)
