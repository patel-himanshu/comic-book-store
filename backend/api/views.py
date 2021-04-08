from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .comicbooks import comicbooks

# Create your views here.


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/comic/',
        '/api/comic/create/',
        '/api/comic/upload/',
        '/api/comic/<id>/reviews/',
        '/api/comic/top/',
        '/api/comic/<id>/',
        '/api/comic/delete/<id>/',
        '/api/comic/<update>/<id>/',
    ]
    return Response(routes)


@api_view(['GET'])
def get_comicbooks(request):
    return Response(comicbooks)


@api_view(['GET'])
def get_comicbook(request, pk):
    comicbook = None

    for item in comicbooks:
        if item['id'] == pk:
            comicbook = item
            break

    return Response(comicbook)
