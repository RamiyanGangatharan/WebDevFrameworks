const express = require('express');
const path = require('path');
const marked = require('marked');
const fs = require('fs').promises;
const app = express();
const PORT = 3000;
const blogDataPath = path.join(__dirname, 'data', 'blogposts.json');
const url = `http://localhost:${PORT}`;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

console.log("Modules imported and app setup complete.");

// Function to render markdown and log the process
const renderMarkdown = async (res, filePath, title, deliverableTitle, dueDate) =>
{
    console.log(`Rendering markdown for: ${filePath}`);

    try
    {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(`Successfully read file: ${filePath}`);
        const htmlContent = marked.parse(data);
        console.log(`Converted markdown to HTML for: ${filePath}`);

        res.render
        (
            'markdownPage',
            {
                content: htmlContent,
                title,
                deliverableTitle,
                institution: "Durham College - SEIT",
                studentName: "Ramiyan Gangatharan",
                studentID: "100835223",
                date: dueDate,
                course: "Web Development: Frameworks"
            });

        console.log(`Rendered markdown page for: ${title}`);

    }
    catch (err)
    {
        console.error('File read error:', err);
        res.status(500).send('Error reading the Markdown file.');
    }
};

app.get('/', (req, res) =>
{
    console.log("Serving home page.");
    res.render('index', {title: 'Home'});
});

app.get('/404', (req, res) =>
{
    console.log("Serving 404 page.");
    res.render('404', {title: '404'});
});

app.get('/about', (req, res) =>
{
    console.log("Serving about page.");
    res.render('about', {title: 'About'});
});

app.get('/TOC', (req, res) =>
{
    console.log("Serving TOC page.");
    res.render('TOC', {title: 'T&C'});
});

// Blog route with pagination
app.get('/blog', async (req, res) =>
{
    console.log("Serving blog page.");

    try
    {
        const data = await fs.readFile(blogDataPath, 'utf8');
        console.log("Successfully read blog posts data.");
        const blogData = JSON.parse(data);
        const currentPage = parseInt(req.query.page) || 1;
        const blogposts = blogData.blogposts;
        const totalPosts = blogposts.length;
        const pageSize = 3;
        const totalPages = Math.ceil(totalPosts / pageSize);
        const startIndex = (currentPage - 1) * pageSize;
        const paginatedPosts = blogposts.slice(startIndex, startIndex + pageSize);

        const pagination =
            {
                currentPage,
                totalPages,
                hasPreviousPage: currentPage > 1,
                hasNextPage: currentPage < totalPages,
                previousPage: currentPage - 1,
                nextPage: currentPage + 1
            };
        console.log(`Rendering blog with pagination: page ${currentPage} of ${totalPages}`);

        res.render('blog', {title: 'Blog', blogposts: paginatedPosts, pagination});

    }
    catch (err)
    {
        console.error('Error reading blog posts data:', err);
        res.status(500).send('Error reading blog posts data');
    }
});

// Lab 1 routes
app.get('/Lab1_Instruction', (req, res) =>
{
    const filePath = path.join(__dirname, '/views/Lab_1/lab1_Instruction.md');
    console.log("Serving Lab 1 Instruction.");
    renderMarkdown(res, filePath, 'Lab 1A', "Lab 1 Instruction: Intro to 11ty & SSG", "September 20, 2024")
        .then(() => console.log("Lab 1 Instruction markdown rendered successfully."))
        .catch(err => console.error("Error rendering Lab 1 Instruction markdown:", err));
});

app.get('/Lab1_Deliverable', (req, res) =>
{
    const filePath = path.join(__dirname, '/views/Lab_1/lab1_Deliverable.md');
    console.log("Serving Lab 1 Deliverable.");
    renderMarkdown(res, filePath, 'Lab 1B', "Lab 1 Deliverable: Intro to 11ty & SSG", "September 20, 2024")
        .then(() => console.log("Lab 1 Deliverable markdown rendered successfully."))
        .catch(err => console.error("Error rendering Lab 1 Deliverable markdown:", err));
});

// Assignment 1 routes
app.get('/A1_Instruction', (req, res) =>
{
    const filePath = path.join(__dirname, '/views/Assignment_1/A1_Instruction.md');
    console.log("Serving A1 Instruction.");
    renderMarkdown(res, filePath, 'A1 Instruction', "A1 Instruction: Lab 1 Revision", "October 4, 2024")
        .then(() => console.log("A1 Instruction markdown rendered successfully."))
        .catch(err => console.error("Error rendering A1 Instruction markdown:", err));
});

app.get('/A1_Deliverable', (req, res) =>
{
    const filePath = path.join(__dirname, '/views/Assignment_1/A1_Deliverable.md');
    console.log("Serving A1 Deliverable.");
    renderMarkdown(res, filePath, 'A1 Deliverable', "A1 Deliverable: Lab 1 Revision", "October 4, 2024")
        .then(() => console.log("A1 Deliverable markdown rendered successfully."))
        .catch(err => console.error("Error rendering A1 Deliverable markdown:", err));
});

app.get('*', (req, res) =>
{
    res.status(404).render('404', {title: '404 Not Found'});
});

app.listen(PORT, () => console.log(`Server is running on: ${url}`));