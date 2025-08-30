# SocialMedia\_MERN\_App

A simple MERN (MongoDB • Express • React • Node) social app scaffold with user authentication (sign up & sign in), a Node/Express API, and a React client.

> **Status:** Work in progress. This README documents what’s already implemented and how to run/extend it.

---

## ✨ Features

* **User auth**: signup & signin with **bcrypt** password hashing and **JWT** issuance (1h expiry).
* **MongoDB models**: basic `User` schema (role-based `admin|user`).
* **Express API**: JSON body parsing, CORS enabled, health/home route.
* **Client app (React)**: CRA-based skeleton you can extend.

---

## 🧱 Tech Stack

* **Backend**: Node.js, Express, Mongoose, bcryptjs, jsonwebtoken, dotenv, cors
* **Frontend**: React (Create React App), React Router, Axios, Font Awesome, react-hot-toast
* **Database**: MongoDB (Atlas or local)

---

## 📦 Monorepo Structure

```
SocialMedia_MERN_App/
├─ Controllers/
│  └─ user.controller.js
├─ Models/
│  └─ user.model.js
├─ Routes/
│  └─ user.router.js
├─ frontend/
│  ├─ package.json
│  └─ src/
│     ├─ App.js
│     └─ index.js
├─ index.js          # Express app entry
├─ package.json      # Backend package.json
└─ .env              # Your environment variables (not committed)
```

---

## ⚙️ Requirements

* **Node.js** 18+ and **npm**
* **MongoDB** (local or Atlas)

---

## 🔐 Environment Variables

Create a `.env` file at the project root with:

```env
PORT=5000
CONNECTION_STRING=mongodb://127.0.0.1:27017/social_media_app
CLE=your_jwt_secret_here
```

> `CLE` is used as the JWT signing secret. `CONNECTION_STRING` should point to your MongoDB instance.

---

## 🚀 Getting Started

### 1) Clone & install

```bash
# clone
git clone https://github.com/Mouinbhm/SocialMedia_MERN_App.git
cd SocialMedia_MERN_App

# backend deps
npm install

# frontend deps
cd frontend && npm install
```

### 2) Run the backend

From the **project root** (where `index.js` is):

```bash
npm start
```

This starts Express using `index.js` on `process.env.PORT` (e.g. 5000).

> Tip: Since `nodemon` is installed as a devDependency, you can also run it locally:

```bash
npx nodemon index.js
```

### 3) Run the frontend

In another terminal:

```bash
cd frontend
npm start
```

This launches CRA dev server (default: [http://localhost:3000/](http://localhost:3000/)).

---

## 🧭 API Overview (current)

Base URL: `http://localhost:<PORT>`

### Health / Home

`GET /` → returns a welcome string.

### Auth Routes (mounted at `/users`)

#### POST `/users/signup`

Create a new user.

* **Body (JSON)**

  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "password": "PlaintextPassword123!",
    "bio": "Hello there",
    "picture": "https://example.com/avatar.png",
    "birthday": "1990-05-01"  
  }
  ```
* **Response (200)**

  ```json
  { "message": "user created successfully" }
  ```

#### POST `/users/signin`

Authenticate an existing user.

* **Body (JSON)**

  ```json
  {
    "email": "john@example.com",
    "password": "PlaintextPassword123!"
  }
  ```
* **Response (200)**

  ```json
  {
    "message": "Connexion réussie",
    "token": "<JWT>",
    "user": { /* user document */ }
  }
  ```
* **Errors**: `400` (invalid email / incorrect password), `500` (server error)

> **Note:** JWT is signed with `CLE` and expires in **1 hour**.

---

## 🗃️ Data Model

`Models/user.model.js`

```js
{
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  date_of_birth: Date,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  bio: String,
  picture: String
}
```

> **Heads-up:** Controller currently expects a `birthday` field while the model uses `date_of_birth`. You may want to align these (rename one or map in the controller) to prevent confusion.

---

## 🔌 How things are wired

* `index.js` sets up Express, JSON parsing, CORS, MongoDB connection, mounts `/users` routes, and starts the server.
* `Routes/user.router.js` defines `/signup` and `/signin` routes.
* `Controllers/user.controller.js` contains the handlers: hashing on signup, email lookup & bcrypt compare on signin, then JWT signing.

---

## 🖥️ Frontend (CRA)

The client is scaffolded with Create React App. You’ll likely want to:

* Hook up React Router properly (the app imports a router from `src/config/route` but the file is currently a placeholder/missing in the repo).
* Build out auth pages (Sign Up, Sign In) and call the backend with **Axios**.
* Store the JWT (e.g., in memory or `localStorage`) and attach it to protected API calls via an Axios interceptor.

---

## ✅ Testing the API quickly

Use cURL or a REST client (Postman, Insomnia):

```bash
# Signup
curl -X POST http://localhost:5000/users/signup \
  -H 'Content-Type: application/json' \
  -d '{
    "firstname":"John","lastname":"Doe",
    "email":"john@example.com",
    "password":"Secret123!",
    "bio":"Hello","picture":"",
    "birthday":"1990-05-01"
  }'

# Signin
curl -X POST http://localhost:5000/users/signin \
  -H 'Content-Type: application/json' \
  -d '{"email":"john@example.com","password":"Secret123!"}'
```

---

## 🧩 Roadmap / Ideas

* Align `birthday` vs `date_of_birth` naming.
* Add input validation (e.g., **Joi** / **zod**).
* Unique index on `email` + friendly duplicate error.
* Auth middleware (protect routes with `Authorization: Bearer <token>`).
* Users CRUD and social features (posts, comments, likes, follows, feeds, notifications, search).
* File uploads for profile pictures (Multer or cloud storage).
* Environment-based config and production builds.
* Logging & error handling improvements.
* Unit/integration tests.

---

## 🐛 Troubleshooting

* **Mongo connection fails**: verify `CONNECTION_STRING` and that MongoDB is running/accessible; check IP allowlist if using Atlas.
* **Port in use**: update `PORT` in `.env` or free the port.
* **JWT errors**: ensure `CLE` is set and consistent.
* **CORS issues**: confirm frontend origin is allowed (default `cors()` accepts all; lock down for production).

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue to discuss significant changes first.

---

## 📝 License

This project is licensed under the **ISC License**.

---

## 🙌 Acknowledgements

Thanks to the open‑source community and the MERN ecosystem.
