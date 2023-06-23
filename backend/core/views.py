import os.path

from rest_framework.generics import GenericAPIView
from rest_framework.parsers import MultiPartParser

from .models import File
from .serializer import FileSerializer
from django.http import JsonResponse
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import IsAuthenticated
from core.utils.util import extract_colors
from api.config import project_config


class FileUploadView(GenericAPIView):
    serializer_class = FileSerializer
    parser_classes = (MultiPartParser,)
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        tags=['upload'],
        operation_summary='Upload a file and extract color'
    )
    def post(self, request):
        file = request.FILES.get('file')
        res = File.objects.create(file=file)
        colors = extract_colors(os.path.join(project_config.BASE_DIR, 'media', res.file.name))
        return JsonResponse({
            "success": "true",
            "code": 200,
            "result": {
                'URO': colors[0],
                'BIL': colors[1],
                'KET': colors[2],
                'BLD': colors[3],
                'PRO': colors[4],
                'NIT': colors[5],
                'LEU': colors[6],
                'GLU': colors[7],
                'SG': colors[8],
                'PH': colors[9]
            }
        }, status=status.HTTP_200_OK)
