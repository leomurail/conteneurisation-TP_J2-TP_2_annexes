.PHONY: up down logs build clean

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

build:
	docker compose build

clean:
	docker compose down -v
	docker system prune -f
