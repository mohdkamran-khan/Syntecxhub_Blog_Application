# ✍🏼 Syntecxhub Blog Application

A full-stack blog platform that enables users to create, edit, publish, and manage blog posts through a clean and responsive web interface. The application is designed with a modular architecture, secure authentication, and scalable backend APIs.

This project demonstrates the implementation of a modern web application using a MERN stack architecture, focusing on structured code organization, RESTful APIs, and efficient state management.

## 🧰 Features

- User authentication and authorization

- Create, edit, and delete blog posts

- Dynamic blog listing and detail pages

- Comment functionality

- Secure REST API integration

- Responsive UI for mobile and desktop

- Modular backend architecture

- MongoDB database integration

## 🚀 Tech Stack

- **Frontend**: React, React Router  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via Mongoose)  
- **State / Context**: React Context API  
- **Styling**: Tailwind CSS, React Quill (Rich Text Editor)
- **Authentication**: Basic (login/register) using user IDs as tokens 
- **Dev tools**: Axios for HTTP requests, React Toastify for notifications
  
 ## 📸 Screenshots

- Home:
<img width="2104" height="2512" alt="home_blog" src="https://github.com/user-attachments/assets/80b56cd4-aecc-454e-8558-859fb28b3d08" />

- Create Blog:
 <img width="2104" height="1766" alt="create_blog" src="https://github.com/user-attachments/assets/97acba92-e5e7-4cbd-999b-a9cff322a894" />
 
- Edit Blog:
<img width="2104" height="2148" alt="edit_blog" src="https://github.com/user-attachments/assets/bd727f80-0195-4ef6-a742-1cefcc79d7cb" />

## 🔨 Project Structure

### Backend
```pgsql

└── 📁backend
    └── 📁controllers
        ├── blogController.js
        ├── errorController.js
    └── 📁middleware
        ├── upload.js
    └── 📁models
        ├── Blog.js
    └── 📁routers
        ├── blogRouter.js
    └── 📁uploads
    ├── .env
    ├── .gitignore
    ├── app.js
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tailwind.config.js
```

### Frontend

```
└── 📁frontend
    └── 📁src
        └── 📁components
            ├── Blog.jsx
            ├── BlogList.jsx
            ├── BlogLoader.jsx
            ├── CommentForm.jsx
            ├── CreateBlog.jsx
            ├── Footer.jsx
            ├── Home.jsx
            ├── Layout.jsx
            ├── Navbar.jsx
        └── 📁store
            ├── BlogContext.jsx
            ├── BlogReducer.js
        └── 📁utils
            ├── dateUtil.js
        ├── App.jsx
        ├── index.css
        ├── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js
```

## 🔧 Installation

Follow these steps to get the project running locally:

## Prerequisites

- Node.js & npm installed  
- MongoDB running (local or remote)  
- Git installed  
- Any IED like VS Code

### Clone & Setup

### 1️⃣ Clone the repository  
```bash
https://github.com/mohdkamran-khan/Syntecxhub_Blog_Application.git
```

### 2️⃣ Navigate to the project
```bash
cd Syntecxhub_Blog_Application
```

### 3️⃣ Backend Setup

Navigate to backend directory:
```bash
cd backend
npm install
```

### 4️⃣ Create a .env file:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```
### 5️⃣ Run backend:
```bash
npm start
```

### 7️⃣ Frontend Setup

Navigate to frontend directory:
```bash
cd client
npm install
npm start
```
### Frontend runs on:

`http://localhost:5173`

### Backend runs on:

`http://localhost:3000`

## 🌐 API Endpoints

### Blog Posts
`GET /api/posts`
`GET /api/posts/:id`
`POST /api/posts`
`PUT /api/posts/:id`
`DELETE /api/posts/:id`

### Comments
`POST /api/comments`
`GET /api/comments/:postId`

## 📧 Contributing

Contributions are welcome. If you want to contribute:

1. Fork the repo
2. Create a feature branch `git checkout -b feature/your-feature`
3. Commit your changes `git commit -m "feat: add ..."`
4. Push and open a pull request

## 📄 License

```
This project is open-source and available under the [MIT License]
```

## 👨🏻‍💻 Author

Mohd Kamran Khan | You can reach me at: [mohdkamrankhan.dev@gmail.com]

🌐 **Portfolio:** [mohdkamran-khan.github.io/KAMRAN-portfolio](https://mohdkamran-khan.github.io/KAMRAN-portfolio/)
