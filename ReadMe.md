

### 📄 `README.md`

```md
# User Management REST API (TypeScript + Express)

This project is a simple RESTful API for managing users using **TypeScript** and **Express**. Data is stored and retrieved from a JSON file (`users.json`), demonstrating a basic file-based CRUD system.

---

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) users
- Built with TypeScript and Express
- Stores user data in a local JSON file
- Clean modular structure (router + controller)

---

## 📁 Project Structure

```

ts-express/
├── src/
│   ├── server.ts          # Entry point
│   ├── routes.ts          # API routes
│   ├── userController.ts  # Logic for CRUD
│   ├── users.json         # User data
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

````

---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/dev-kweku/ts-express.git
cd ts-express

# 2. Install dependencies
npm install

# 3. Start in development mode
npm run dev
````

---

## 🧪 Available Scripts

| Script          | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start with ts-node-dev                |
| `npm run start` | Start compiled JS (e.g., after `tsc`) |

---

## 📦 Dependencies

* `express`
* `typescript`
* `ts-node-dev`
* `@types/express`

---

## 📌 API Endpoints

All endpoints are prefixed with:
`http://localhost:3000/api`

---

### 🔹 GET `/users`

Get all users.

**Response** `200 OK`

```json
[
  {
    "id": 1,
    "name": "Degraft",
    "email": "degraft@mail.com"
  }
]
```

---

### 🔹 GET `/users/:id`

Get a single user by ID.

**Response** `200 OK` or `404 Not Found`

```json
{
  "id": 1,
  "name": "Degraft",
  "email": "degraft@mail.com"
}
```

---

### 🔹 POST `/users`

Create a new user.

**Request Body**

```json
{
  "name": "Kweku",
  "email": "kweku@mail.com"
}
```

**Response** `201 Created`

```json
{
  "id": 1720099345783,
  "name": "Kweku",
  "email": "kweku@mail.com"
}
```

---

### 🔹 PUT `/users/:id`

Update a user.

**Request Body**

```json
{
  "name": "Kweku Updated"
}
```

**Response** `200 OK` or `404 Not Found`

```json
{
  "id": 1,
  "name": "Kweku Updated",
  "email": "kweku@mail.com"
}
```

---

### 🔹 DELETE `/users/:id`

Delete a user.

**Response** `204 No Content`

---

## 🧠 Notes

* User IDs are generated using `Date.now()`
* File system is used instead of a database for simplicity
* Use tools like **Postman** or `curl` to test the endpoints

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 👤 Author

Made with ❤️ by [dev-kweku](https://github.com/dev-kweku)




