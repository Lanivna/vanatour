from rest_framework import serializers

from tours.models import Tour, Hotel, Country


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = "__all__"


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = "__all__"


class TourSerializer(serializers.ModelSerializer):
    country = CountrySerializer(many=True, read_only=True)
    hotel = HotelSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = "__all__"
