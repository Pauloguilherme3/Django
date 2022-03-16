from django.urls import path
from .views import IndexView

urlpatterns = [
    # path('endereço/', MinhaView.as_view(), name='inicio')
    path('', IndexView.as_view(), name='inicio'),
]
