from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
        path('',views.Home,name="Home"),
        path('api/',views.Api,name="Api"),
        path('api/songs/',views.Sl,name="Songslist"),
        path('api/search/<str:sn>/',views.Apis,name="Apis"),
        path('song/',views.Hm,name= "song"),
        ]

