# Generated by Django 4.1.5 on 2023-01-30 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("test01", "0003_test01_keyword"),
    ]

    operations = [
        migrations.CreateModel(
            name="UploadFileModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("description", models.CharField(max_length=255)),
                ("files", models.FileField(null=True, upload_to="documents")),
                ("upload_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
