from django.contrib.auth.models import User
from django.db.models.signals import pre_save


def user_update(sender, instance, **kwargs):
    user = instance
    if user.email != "":
        user.username = user.email


pre_save.connect(user_update, sender=User)
