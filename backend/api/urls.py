from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include("allauth.urls")),
    path('api/v1/auth/', include("authentication.urls")),
    path('api/v1/file/', include("core.urls")),
    path('docs/', include("documentation.urls")),
]
