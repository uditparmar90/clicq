# Generated by Django 5.1 on 2025-01-02 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_brand_url_remove_product_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='Category_id',
            field=models.CharField(default='', max_length=200),
        ),
    ]
