from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)

    def get_name(self, obj):
        name = obj.first_name + " " + obj.last_name
        if name == '':
            name = obj.email
        return name

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'is_staff']


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'is_staff', 'token']


class ComicBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComicBook
        fields = '__all__'
