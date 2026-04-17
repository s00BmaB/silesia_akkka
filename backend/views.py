from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view(['GET'])
# @permission_classes([AllowAny]) # Jeśli chcesz, żeby to było publiczne
@permission_classes([AllowAny])
def hello(request):
    user = request.user

    message = (
        f"Cześć {user.username} 🚀"
        if user.is_authenticated
        else "Cześć niezalogowany użytkowniku 👋"
    )

    return Response({"message": message})
