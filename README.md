# SHOEFITZ - Shoe Store Web App

Welcome to our Shoe Store Web App! This application is built with Next.js, a React framework that ensures seamless performance and a delightful user experience. We've utilized Tailwind CSS for efficient styling, giving our app a sleek and modern look.

## Tech Stack

**Client:**

- Next.js

- Tailwind CSS

- Next/Auth (for authentication)

- React

- HTML

- CSS

- JavaScript

**Server:**

- Node.js(server-side logic)

- PostgreSQL (as the database server)

**Database Hosting:**

- Supabase (PostgreSQL)

## Features

- Full CRUD Operations on Product Items and Cart Items
- User Authentication and Authorization
- Responsive Web App
- Product Management
- Cart Management
- Admin Dashboard

## Demo

https://shoe-web-psi.vercel.app/

# Installation

To run the Shoe Store Web App locally, follow these steps:

### 1. Node.js

- Install Node.js from [https://nodejs.org/](https://nodejs.org/)

### 2. Clone the Project

```bash
git clone https://github.com/Creedyfish/ShoeWeb.git

cd ShoeWeb

npm install

```

### 3. Set Up Supabase Database

- Create an account on Supabase.
- Create a new project in Supabase.
- Find your project API URL and public key in the project settings.
- Configure the Supabase connection in your Next.js app.

Run the Project

```bash
npm run dev
```

## API Reference

#### Get all Featured Products

```http
  GET /api/
```

#### Get Products

```http
  GET /api/product/${id}
```

#### Get a product by ID

```http
  GET /api/product/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Insert or Create Info on Product Details

```http
  POST /api/product/
```

| Body of Request     | Type     | Description                  |
| :------------------ | :------- | :--------------------------- |
| `product_id`        | `number` | Id of item                   |
| `name`              | `string` | Name of item                 |
| `desc`              | `string` | Description of item          |
| `price`             | `number` | Price of item                |
| `image`             | `string` | Local Image url of item      |
| `bgcolor`           | `string` | color of item in Hex of item |
| `Featured_Products` | `object` | object of item               |

More info on App/queries/apiQueries.ts
