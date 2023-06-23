FROM python:latest

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    build-essential

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

COPY .env /app/.env

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000", "--settings", "backend.api.settings.local"]