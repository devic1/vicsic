from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .spo import Artist,Song,Songli
from .serializers import SongSerialization
from .models import Songs

def Home(request):
    return render(request,"index.html")

@api_view(['GET'])
def Api(request):
    return Response("hello")

@api_view(['GET'])
def Apis(request,sn):
    t = Songli(sn)
    return Response(t)

@api_view(['GET'])
def Sl(request):
    son = Songs.objects.all()[:10]
    ser = SongSerialization(son,many=True)
    return Response(ser.data)

def Add(request):
    print(request)
    tr = request.POST['song']
    print(tr)
    if tr is None:
        s = Song('oru naalil')
    else:
        s = Song(tr)
    s_name = s[0]
    s_link = s[1]
    s_img = s[2]
    ar_name = s[3]
    ar_pr = s[5]
    ar_img = s[6]
    pr_url = s[7]

    return render(request,"room.html",{                                                                                         "ar_name":ar_name,                                                                                                      "ar_img": ar_img,                                                                                                       "ar_pr" : ar_pr,                                                                                                        "song_name":s_name,                                                                                                     "song_link":s_link,                                                                                                     "song_image" : s_img,                         
        "pr_url":pr_url,
        })

def Hm(request):
    songs = Songs.objects.all()
    return render(request,"hm.html",{"Songs":songs})
