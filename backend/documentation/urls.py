from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="Urine Strip Color Extraction API",
      default_version='v1',
      description="""
        The Urine Strip Color Extraction API is a web service that provides functionality to extract colors from the
        uploaded images by the user. It allows users to retrieve information from their test, and take appropriate 
        action.
      """,
      terms_of_service="https://github.com/shuklaritvik06/alemeno-assignment/blob"
                       "/dev/LICENSE",
      contact=openapi.Contact(email="ritvikshukla261@gmail.com"),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny]
)

urlpatterns = [
   re_path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]