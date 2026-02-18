"""
FORMA Interior Design — учебный веб-сервер
Университет Туран, Алматы

Запуск:
    python3 server.py

Затем откройте браузер: http://localhost:8000
"""

import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Корень → index.html
        if self.path == "/" or self.path == "":
            self.path = "/index.html"
        super().do_GET()

    def log_message(self, format, *args):
        print(f"  → {self.address_string()} — {format % args}")


def run():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 50)
        print("  FORMA Interior Design Server")
        print(f"  Сервер запущен: http://localhost:{PORT}")
        print("  Нажмите Ctrl+C для остановки")
        print("=" * 50)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Сервер остановлен.")


if __name__ == "__main__":
    run()
