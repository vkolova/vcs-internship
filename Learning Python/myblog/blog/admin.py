from django.contrib import admin

# Register your models here.

from .models import Article



class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date', 'author', 'was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['title', 'author']


admin.site.register(Article, ArticleAdmin)
