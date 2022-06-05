from django.db import models

# Create your models here.

class Songs(models.Model):
    song_name = models.CharField(max_length=40)
    song_image = models.CharField(max_length = 200)
    artist_name = models.CharField(max_length = 30)
    pr_url = models.CharField(max_length = 200)

    def __str__(self):
        return "Song Name : "+self.song_name + "Song Image : " + self.song_image + "Artist Name : " + self.artist_name + "Preview url : " 



