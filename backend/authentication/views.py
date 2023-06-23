from rest_framework.generics import GenericAPIView
from .serializer import RegisterSerializer, LoginSerializer
from django.http import JsonResponse
from django.contrib.auth import authenticate
from .token import create_jwt_pair_for_user
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema


class RegisterView(GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = []

    @swagger_auto_schema(
        tags=['authentication'],
        operation_summary='Register a user',
    )
    def post(self, request):
        serialized_data = self.serializer_class(data=request.data)
        if serialized_data.is_valid():
            serialized_data.save()
            return JsonResponse({
                "status": "success",
                "code": 201,
                "message": "User registered successfully",
                "data": serialized_data.data
            }, status=status.HTTP_201_CREATED)
        return JsonResponse({"error": {
            "code": 400,
            "message": "Bad Request",
            "details": serialized_data.errors
        }}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = []

    @swagger_auto_schema(
        tags=['authentication'],
        operation_summary='Login a user',
    )
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(email=email, password=password)
        if user is not None:
            tokens = create_jwt_pair_for_user(user=user)
            user_data = LoginSerializer(user).data
            return JsonResponse({
                "status": "success",
                "message": "Login successful",
                "data": {
                    "user": {
                        "email": user_data.get("email"),
                        "first_name": user_data.get("first_name"),
                        "last_name": user_data.get("last_name"),
                        "registration_date": user_data.get("registration_date"),
                        "registration_time": user_data.get("registration_time")
                    },
                    "auth_token": tokens
                }
            }, status=status.HTTP_200_OK)
        return JsonResponse({
            "code": 400,
            "status": "error",
            "message": "Invalid credentials"
        }, status=status.HTTP_400_BAD_REQUEST)
