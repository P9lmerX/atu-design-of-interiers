FROM python:3.11-slim

WORKDIR /app

COPY index.html .
COPY server.py .
COPY static/ ./static/

EXPOSE 8000

CMD ["python3", "server.py"]
