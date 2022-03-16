from django.views.generic import TemplateView

# Create your views here.
# onde e criado grande parte dos codigos
class IndexView(TemplateView):
    template_name = "index.html"
