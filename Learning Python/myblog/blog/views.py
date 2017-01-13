from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views import generic
from django.utils import timezone

# Create your views here.
from .models import Article

class IndexView(generic.ListView):
    template_name = 'blog/index.html'
    context_object_name = 'latest_articles_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Article.objects.order_by('-pub_date')[:5]

class DetailView(generic.DetailView):
    model = Article
    template_name = 'blog/article.html'

    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Article.objects.filter(pub_date__lte=timezone.now())
