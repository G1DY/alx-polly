from typing import List, Optional

from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI(title="Items API")


class Item(BaseModel):
	id: Optional[int] = None
	name: str


# In-memory store for demo purposes
items: List[Item] = []
next_id: int = 1


@app.get("/items", response_model=List[Item])
async def get_items() -> List[Item]:
	return items


@app.post("/items", response_model=Item, status_code=201)
async def create_item(item: Item) -> Item:
	global next_id
	item.id = next_id
	next_id += 1
	items.append(item)
	return item
