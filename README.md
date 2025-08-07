# idf-complaints-system
A secure Node.js + Express web app for collecting and managing IDF soldiers' complaints. Built with HTML forms, CSS styling, and a structured backend using routes, middlewares, DAL, and a database connection


---

## Folder Structure
```
idf-complaints-system/
│
├── public/                        # Static HTML & CSS
│   ├── index.html                 # Complaint form
│   ├── login.html                 # Login form
│   ├── success.html               # Confirmation page
│   └── styles.css                 # CSS stylesheet
│
├── routes/                        # Express route handlers
│   ├── complaints.js              # POST complaint, admin view
│   └── users.js                   # Login, logout, register
│
├── middlewares/                  # Custom middlewares
│   ├── auth.js                   # Auth and admin check
│   └── validateComplaint.js      # Optional validation
│
├── dal/                          # Data Access Layer (DAL)
│   ├── complaintsDal.js          # Interface to Complaint model
│   └── userDal.js               # Interface to User model
│
├── db/                           # DB setup
│   └── connection.js             # MongoDB connection 
│
├── app.js                        # Express app entry point
├── package-lock.json
├── package.json
└── README.md
```

