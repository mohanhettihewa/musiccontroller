from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id", "code", "host", "guest_can_pause", "votes_to_skip", "created_at")
        model = Room
        
        
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("guest_can_pause", "votes_to_skip")
        model = Room