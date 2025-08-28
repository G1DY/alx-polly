# FastAPI Items Service

A minimal FastAPI REST API exposing `GET /items` and `POST /items` endpoints.

## Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

## Run

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Endpoints

- GET `/items` — list items
- POST `/items` — create an item

### Example

```bash
curl -s http://localhost:8000/items | jq
curl -s -X POST http://localhost:8000/items -H 'Content-Type: application/json' -d '{"name":"Sample"}' | jq
```
