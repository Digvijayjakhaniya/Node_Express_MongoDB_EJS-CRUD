
  <h1>Student CRUD Project</h1>

  <p>This project is a simple CRUD (Create, Read, Update, Delete) application for managing student records. It is built using Node.js, Express.js, MongoDB, and EJS templates.</p>

  <h2>Features</h2>
    <ul>
        <li>Display list of students with their names, ages, and fees</li>
        <li>Create a new student record</li>
        <li>Update an existing student record</li>
        <li>Delete a student record</li>
    </ul>

  <h2>Installation</h2>
    <pre><code>git clone https://github.com/Digvijayjakhaniya/Node_Express_MongoDB_EJS-CRUD.git
cd Node_Express_MongoDB_EJS-CRUD
npm install</code></pre>

  <h2>Usage</h2>
    <p>To start the application, run:</p>
    <pre><code>npm start</code></pre>
    <p>Open your browser and navigate to <code>http://localhost:3000</code> to see the application in action.</p>

  <h2>Project Structure</h2>
    <pre><code>
Node_Express_MongoDB_EJS-CRUD/
│
├── controllers/
│   └── studentController.js
|
├── Db/
│   └── connection.js
│     
├── models/
│   └── studentModel.js
│
├── routes/
│   └── web.js
│
├── public/
│   ├── CSS
|        ├── all.css
│        ├── bootstrap.css
│        └── bootstrap.min.css
│   ├── images
│   └── JS
|       ├── all.js
│       ├── bootstrap.js
│       └── bootstrap.min.js
|
├── views/
|   ├── includes
|       ├── header.js
│       └── footer.js
│   ├── index.ejs
│   ├── create.ejs
│   └── edit.ejs
│
├── app.js
├── package-lock.json
├── package.json
└── README.md
    </code></pre>

  <h2>Endpoints</h2>
    <ul>
        <li><code>GET / </code> - Display all students</li>
        <li><code>GET /create </code> - Show form to create a new student</li>
        <li><code>POST /store </code> - Create a new student</li>
        <li><code>GET /edit/:id </code> - Show form to edit an existing student</li>
        <li><code>POST /update/:id </code> - Update an existing student</li>
        <li><code>GET /delete/:id </code> - Delete a student</li>
    </ul>

  <h2>Dependencies</h2>
    <ul>
        <li><code>express</code> - Fast, unopinionated, minimalist web framework for Node.js</li>
        <li><code>mongoose</code> - MongoDB object modeling tool designed to work in an asynchronous environment</li>
        <li><code>ejs</code> - Embedded JavaScript templating</li>
        <li><code>urlencoded</code> - Node.js urlencoded middleware</li>
    </ul>
  <be><be><br>
  <footer class="card-footer bg-white pt-2" style="position: fixed;left: 0px;padding-left:80px; bottom: 0;width: 100%;">
  <p>© 2024 Made with 🤍 by <a href="https://digvijay.rf.gd" target="_blank" class="link-danger page-link alert-link d-inline">Digvijay Jakhaniya</a></p>
</footer>
