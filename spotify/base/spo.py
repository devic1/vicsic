import spotipy 
from spotipy.oauth2 import SpotifyClientCredentials
spotify = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="6ec579cc42f340a5a6416af4502c2b5c",client_secret="2981891407524daea7c2f6556ff99f4d"))
def Artist(name):
    arti = spotify.search(q=name,limit=2,offset=0,type='artist',market=None)
    na = arti['artists']['items'][0]
    sa = na['images'][0]['url']
    return sa

def Song(n):
    s = spotify.search(q=n,limit = 2,offset=0,type='track',market=None)
    sn = s['tracks']['items'][0]
    pr_url = sn['preview_url']
    sni = sn['album']['images'][0]['url']
    snn = sn['name']
    snl = sn['external_urls']['spotify']
    arn = sn['album']['artists'][0]
    arna = arn['name']
    arnur = arn['uri']
    arpr = arn['external_urls']['spotify']
    arim = Artist(arna)
    return [snn,snl,sni,arna,arnur,arpr,arim,pr_url]
    
def Songli(songname):
    s = spotify.search(q=songname,limit=4,type='track',market=None)
    tei = len(s['tracks']['items'])
    if tei == 0:
        return [None]
    ls = []
    ret = []
    for i in range(0,tei):
        sn = s['tracks']['items'][i]
        prul = sn['preview_url']
        arn = sn['album']['artists'][0]
        arna = arn['name']
        arnur = arn['uri']
        arpr = arn['external_urls']['spotify']
        sni = sn['album']['images'][0]['url']
        snn = sn['name']
        snl = sn['external_urls']['spotify']

        if snn in ls:
            pass
        else:
            ls.append(snn)
            if prul is None:
                ret.append([snn,snl,sni,"None"])
            else:
                ret.append([snn,snl,sni,prul])
    return ret







