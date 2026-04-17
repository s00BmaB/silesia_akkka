from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET'])
# @permission_classes([AllowAny]) # Jeśli chcesz, żeby to było publiczne
@permission_classes([IsAuthenticated]) # Tylko dla zalogowanych z ważnym tokenem JWT
def hello(request):
    return Response({"message": f"Cześć {request.user.username}, backend działa! 🚀"})