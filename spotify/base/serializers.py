from rest_framework.serializers import ModelSerializer
from .models import Songs

class SongSerialization(ModelSerializer):
    class Meta:
        model = Songs
        fields = '__all__'
