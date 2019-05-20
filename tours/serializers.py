from rest_framework import serializers

from tours.models import Tour, Hotel, Country, Place


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = "__all__"


class PlaceSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only=True)

    class Meta:
        model = Place
        fields = "__all__"


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = "__all__"


class TourSerializer(serializers.ModelSerializer):
    hotel = HotelSerializer(many=True, read_only=True)
    place = PlaceSerializer(many=True, read_only=True)

    class Meta:
        model = Tour
        fields = "__all__"
