from django.db import models


class Country(models.Model):
    country_name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.country_name

    class Meta:
        verbose_name_plural = "countries"


class Hotel(models.Model):
    hotel_name = models.CharField(max_length=255)
    stars = models.PositiveSmallIntegerField(blank=True, null=True)

    def __str__(self):
        return self.hotel_name


class Tour(models.Model):
    tour_name = models.CharField(max_length=255)
    price = models.FloatField()
    country = models.ManyToManyField(Country)
    place = models.CharField(max_length=255, blank=True, null=True)
    hotel = models.ManyToManyField(Hotel)
    departure_date = models.DateField()
    days_count = models.PositiveSmallIntegerField()
    departure_place = models.CharField(max_length=255)

    def __str__(self):
        return self.tour_name
