from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class ComicBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComicBook
        fields = '__all__'
