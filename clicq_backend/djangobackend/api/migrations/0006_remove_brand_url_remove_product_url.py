# Generated by Django 5.1 on 2024-12-30 14:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_products_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='brand',
            name='url',
        ),
        migrations.RemoveField(
            model_name='product',
            name='url',
        ),
    ]