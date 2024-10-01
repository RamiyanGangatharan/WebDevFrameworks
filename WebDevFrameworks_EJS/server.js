// DECLARATIONS
const express = require('express');
const path = require('path');
const marked = require('marked');
const fs = require('fs');
const paginate = require('paginate');
const app = express();
const PORT = 3000;
const blogDataPath = path.join(__dirname, 'data', 'blogposts.json');
const url = `http://localhost:${PORT}`;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public')); // Serve static files from the 'public' folder

// ------------------------------------------------------------------------------------------------------------------//
//                                                     ROUTING
// ------------------------------------------------------------------------------------------------------------------//

// Home and standard routes
app.get('/', (req, res) => res.render('index', {title: 'Home'}));
app.get('/404', (req, res) => res.render('404', {title: '404'}));
app.get('/about', (req, res) => res.render('about', {title: 'About'}));
app.get('/TOC', (req, res) => res.render('TOC', {title: 'T&C'}));

// Blog route with pagination
app.get('/blog', (req, res) => {
    fs.readFile(blogDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading blog posts data');
        }

        const blogData              = JSON.parse(data);
        const currentPage = parseInt(req.query.page) || 1;
        const blogposts             = blogData.blogposts;
        const totalPosts            = blogposts.length;
        const pageSize    = 3;
        const totalPages  = Math.ceil(totalPosts / pageSize);
        const startIndex  = (currentPage - 1) * pageSize;
        const endIndex    = startIndex + pageSize;
        const paginatedPosts        = blogposts.slice(startIndex, endIndex);
        const pagination      = {currentPage, totalPages, hasPreviousPage: currentPage > 1, hasNextPage: currentPage < totalPages,
                                       previousPage: currentPage - 1, nextPage: currentPage + 1};

        res.render('blog', { title: 'Blog', blogposts: paginatedPosts,pagination}); // Render the blog page with paginated posts and pagination controls
    });
});

// ------------------------------------------------------------------------------------------------------------------//
//                                                  LAB 1 ROUTES
// ------------------------------------------------------------------------------------------------------------------//

// Route to render the markdown files for Lab 1
app.get('/Lab1_Instruction', (req, res) => {
    const filePath = path.join(__dirname, '/views/Lab_1/lab1_Instruction.md');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading the Markdown file.');
        const htmlContent = marked.parse(data);
        res.render('markdownPage', {
            content: htmlContent,
            title: 'Lab 1A',
            deliverableTitle: "Lab 1 Instruction: Intro to 11ty & SSG",
            institution: "Durham College - SEIT",
            studentName: "Ramiyan Gangatharan",
            studentID: "100835223",
            date: "September 20, 2024",
            course: "Web Development: Frameworks"
        });
    });
});

app.get('/Lab1_Deliverable', (req, res) => {
    const filePath = path.join(__dirname, '/views/Lab_1/lab1_Deliverable.md');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading the Markdown file.');
        const htmlContent = marked.parse(data);
        res.render('markdownPage', {
            content: htmlContent,
            title: 'Lab 1B',
            deliverableTitle: "Lab 1 Deliverable: Intro to 11ty & SSG",
            institution: "Durham College - SEIT",
            studentName: "Ramiyan Gangatharan",
            studentID: "100835223",
            date: "September 20, 2024",
            course: "Web Development: Frameworks"
        });
    });
});

// ------------------------------------------------------------------------------------------------------------------//
//                                                  ASSIGNMENT 1 ROUTES
// ------------------------------------------------------------------------------------------------------------------//

app.get('/A1_Instruction', (req, res) => {
    const filePath = path.join(__dirname, '/views/Assignment_1/A1_Instruction.md');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading the Markdown file.');
        const htmlContent = marked.parse(data);
        res.render('markdownPage', {
            content: htmlContent,
            title: 'A1 Instruction',
            deliverableTitle: "A1 Instruction: Lab 1 Revision",
            institution: "Durham College - SEIT",
            studentName: "Ramiyan Gangatharan",
            studentID: "100835223",
            date: "October 4, 2024",
            course: "Web Development: Frameworks"
        });
    });
});

app.get('/A1_Deliverable', (req, res) => {
    const filePath = path.join(__dirname, '/views/Assignment_1/A1_Deliverable.md');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('File read error:', err); // Log the error
            return res.status(500).send('Error reading the Markdown file.');
        }

        const htmlContent = marked.parse(data);
        res.render('markdownPage', {
            content: htmlContent,
            title: 'A1 Deliverable',
            deliverableTitle: "A1 Deliverable: Lab 1 Revision",
            institution: "Durham College - SEIT",
            studentName: "Ramiyan Gangatharan",
            studentID: "100835223",
            date: "October 4, 2024",
            course: "Web Development: Frameworks"
        });
    });
});

// Catch-all route for non-existing pages (404)
app.get('*', (req, res) => res.status(404).render('404', {title: '404 Not Found'}));

// Start the server and listen on the defined PORT
app.listen(PORT, () => console.log(`Server is running on: ${url}`));