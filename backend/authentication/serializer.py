from rest_framework.serializers import ModelSerializer, CharField, TimeField, DateField, Serializer
from .models import AlemenoUser
from rest_framework.validators import ValidationError
from rest_framework.authtoken.models import Token
from django.utils import timezone


class RegisterSerializer(ModelSerializer):
    email = CharField(max_length=100)
    username = CharField(max_length=45)
    password = CharField(min_length=8, write_only=True)
    registration_time = TimeField(required=False, read_only=True)
    first_name = CharField(required=False)
    last_name = CharField(required=False)

    class Meta:
        model = AlemenoUser
        fields = ["username", "email", "password", "registration_date",
                  "registration_time", "first_name", "last_name"]

    def validate(self, attrs):
        email_exists = AlemenoUser.objects.filter(email=attrs["email"])
        if email_exists:
            raise ValidationError("Email is already registered")
        return super().validate(attrs)

    def create(self, validated_data):
        password = validated_data.pop("password")
        validated_data["registration_time"] = timezone.now().time()
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        Token.objects.create(user=user)
        return user


class LoginSerializer(ModelSerializer):
    email = CharField(max_length=100)
    first_name = CharField(read_only=True)
    last_name = CharField(read_only=True)
    registration_date = DateField(read_only=True)
    registration_time = TimeField(read_only=True)

    class Meta:
        model = AlemenoUser
        fields = ["email", "password", "first_name", "last_name", "registration_date", "registration_time"]

    def validate(self, attrs):
        email_exists = AlemenoUser.objects.filter(email=attrs["email"])
        if email_exists is None:
            raise ValidationError("Email does not exist")
        return super().validate(attrs)
