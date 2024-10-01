<div class="content-container">
<h5 class="text-center card-title">Helpful Links</h5>

<p class="text-center">
    <a href="https://www.11ty.dev/docs/">11ty Docs</a> |
    <a href="https://www.11ty.dev/docs/collections/">Collections</a> |
    <a href="https://www.11ty.dev/docs/pages-from-data/">Create Pages From Data</a> |
    <a href="https://www.11ty.dev/docs/pagination/">Pagination</a>
</p>

---

#### Instructions

You will create an 11ty project demonstrating the concepts of modern web development practices.

**NOTE**: Lab 1 is the starting point of assignment 1. You are simply adding onto Lab 1 through Assignment 1.

##### Your project will:

<br>

-   Utilize a eleventy.config.js file for configuration
    -   Store your application code in a `src` folder, and your build artifacts in a `dist` folder.
    -   Use `passthroughCopy` to ensure your css and images are copied into your `dist` folder.
    -   Add a watch target to your `css` folder so that when your styles change, the watch server automatically rebuilds.
        -   For a bonus point, configure `SASS` and create at least 5 custom styles with it to show that it works and you understand what it's doing.
    -   Listen for the `eleventy.before` event and have it delete your entire `dist` folder before your build step starts.

_**NOTE: I am required to use a different templating engine than Nunjucks so I scrapped 11ty as I am using EJS and Express.js**_

-   Use a template engine that's not Nunjucks.
-   Use front matter in content files for metadata.
-   Reuse layout files to maintain structural consistency.
-   Handle static assets, your site should include some images and some custom styles.
-   Create `header` and `footer` partials.
    -   Your main navigation should live in your `header` file.
    -   The footer should include your full name, a copyright symbol, and the current year.  Use JavaScript to put the year here so it stays up to date over time.
        -   If you want, add links to your socials in the footer.
-   Create other static pages,
    -   An `about` page that includes some details about yourself.  Include a way for potential employers to contact you.
    -   A `404` page that gets redirected to when a page is not found.  Configure the 11ty server so that it uses this page.
    -   A `terms-and-conditions` page, you can use GenAI or grab a template from online to populate this page.
        -   Put a link to this page in your footer.

-   Organize content with the use of collections and pagination.
    -   Create a partial template for your pagination control.
    -   Style the control with bootstrap classes.
    -   The page number you're currently on should be `active`.
    -   Include `Next` and `Previous` buttons.
        -   If you're on the first page, `Previous` should be disabled.
        -   If you're on the last page, `Next` should be disabled.

The theme/content of your site is your own to choose.  Be as creative as you’d like.  
You may look at the starter project for inspiration, but your final project should be substantially different.

Further, you will provide documentation that indicates all key aspects of the project and guidance on how to maintain it.
If the scope of the project has significantly shifted since Lab 1, this is not necessarily a problem, but indicate how and why.

### Grading Summary

For specifics, see the assignment rubric on DC Connect.

-   /5 functionality
-   /5 creativity and design
-   /5 documentation
-   /5 understanding of project requirements

-   -5 (25%) late
-   -20 (100%) more than 72 hours late

</div>

<style>
/* Container for content */
.content-container {
        margin: 0 auto; /* Center the container */
        max-width: 8.5in; /* Maximum width of the content */
        padding: 20px; /* Padding for inner spacing */
        text-align: justify; /* Justify text alignment */
    }

    /* Paragraph styles */
.content-container p {
        margin-bottom: 15px; /* Spacing between paragraphs */
    }

.content-container h3 {
        text-align: center; /* Center the heading */
        margin-bottom: 20px; /* Spacing below the heading */
    }
</style>