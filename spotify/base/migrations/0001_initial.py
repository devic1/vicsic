# Generated by Django 3.2.7 on 2021-10-05 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('song_name', models.CharField(max_length=40)),
                ('song_image', models.CharField(max_length=200)),
                ('artist_name', models.CharField(max_length=30)),
            ],
        ),
    ]