# Generated by Django 4.2.7 on 2023-12-16 04:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_order2'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Order2',
            new_name='OrderForm',
        ),
        migrations.AlterModelTable(
            name='orderform',
            table='OrderForm',
        ),
    ]
