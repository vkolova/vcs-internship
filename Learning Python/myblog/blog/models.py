from __future__ import unicode_literals
import datetime
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.
@python_2_unicode_compatible
class Article(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    author = models.CharField(max_length=100)
    content = models.TextField()
    header = models.FileField(upload_to='uploads/')

    def __str__(self):
        return self.title

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'
