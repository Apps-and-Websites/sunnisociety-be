# sunnisociety-be

be database for sunnisociety.com

# Add New Book

POST Request = localhost:3300/api/auth/book

{
"name": "testbook",
"bookLink": "https://drive.google.com/file/d/1vZSJFcNXlOCQ2FG3OwYBKIfZz3SQDvZtr/view",
"photoLink": "https://drive.google.com/file/d/1HVTkUcP2jEP2KvkU8FwdF43fLpFUwDTbF4/view",
"author": "Mufit Akhtar Raza Khan",
"translator": null,
"category": "Hadees",
"language": "Urdu"
}

# Add New Author

POST Request = localhost:3300/api/auth/author

{
"name": "new author2 Mufit Akhtar Raza Khan"
}
