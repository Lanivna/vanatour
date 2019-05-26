from django.db import models


class Country(models.Model):
    country_name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.country_name

    class Meta:
        verbose_name_plural = "countries"


class Place(models.Model):
    place_name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return self.place_name


class Hotel(models.Model):
    hotel_name = models.CharField(max_length=255)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    stars = models.PositiveSmallIntegerField(blank=True, null=True)

    def __str__(self):
        return self.hotel_name


class Tour(models.Model):
    tour_name = models.CharField(max_length=255)
    price = models.FloatField()
    place = models.ManyToManyField(Place, blank=True)
    hotel = models.ManyToManyField(Hotel, blank=True)
    departure_date = models.DateField()
    days_count = models.PositiveSmallIntegerField()
    departure_place = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.tour_name
