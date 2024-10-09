---
layout: layout/mylayout.ejs
title: L1B
---

<div class="content-container">

## Lab Documentation
---
This lab introduced the 11ty framework, highlighting its use for static site generation. Coming from a background with React, which I used to build my portfolio site over the summer, 11ty's simplicity stood out. Unlike React, which leans heavily on client-side rendering, 11ty focuses on generating static pages, offering faster load times and better SEO without the need for extra configuration. Its templating system streamlined the replication of design elements like headers and footers, making the development process smoother.

One of the main tools I worked with in this lab was Nunjucks, a templating engine that integrates well with 11ty. The setup process—installing via NPM and creating templates in HTML or Markdown—was intuitive. Nunjucks felt familiar due to my experience with Express.js, particularly with its use of include statements and inline logic. Its syntax, using the .njk file extension, allowed for logic and conditionals, enabling me to create dynamic content within static pages effectively. While Nunjucks was relatively easy to work with, I did encounter challenges with its documentation. Unlike React, whose documentation is more comprehensive, Nunjucks required additional research to fully grasp its features. Despite this, once I became more comfortable with the syntax, I appreciated its flexibility and efficiency in integrating libraries like Bootstrap and handling logic within HTML files.

In conclusion, this lab deepened my understanding of static site generation and templating engines like Nunjucks. The experience provided a solid foundation for future projects using 11ty, and I plan to explore more advanced features, such as generating dynamic content from Markdown files and further customizing Nunjucks templates. Overall, 11ty offers a more lightweight and performance-focused alternative to client-heavy frameworks like React.

<br>

## Template Engine Comparison
---

### Why Nunjucks?

I chose nunjucks because it is the templating engine we were learning in class. I was tired of having to use EJS and React all the time so I wanted to try something new.

<br>

### EJS (Embedded JavaScript) <small class="h6">source: [GeeksForGeeks](https://www.geeksforgeeks.org/what-are-the-pros-cons-of-ejs-for-node-js-templating/)</small>

---

#### Advantages
- Simple software
- Ease of integration
- Dynamic Web Development
- Template Inheritence

#### Disadvantages
- Mixing logic code with presentation code
- performance issues with JS
- Limited features
---
<br>



### Mustache.js <small class="h6">source: [GitHub](https://github.com/janl/mustache.js), [Medium](https://medium.com/@prathameshk73/getting-started-with-mustache-js-615a3a782b8f)</small>
---


#### Advantages
- Makes code more readable
- Can seperates the views from the controllers and models
- a logic-less templating system

#### Disadvantages
- Can be difficult to use for more complicated web apps
- Limited advanced features used in other frameworks
---

<br>

### Handlebars.js <small class="h6">source: [Medium](https://codechronicle.medium.com/pros-and-cons-of-popular-javascript-templating-engines-e5d1e3d4504f)</small>
---

#### Advantages
- Uses logic and helpers which increase functionality
- using Mustache templates you can integrate it into existing projects
- it is very readable

#### Disadvantages
- there is a large learning curve associated with this framework
- it can take more resources on the browser running this framework
---
<br><br>

## SSG Application Comparison
---

<br>

#### Next.js <small class="h6">source: [Medium](https://weber-stephen.medium.com/next-js-advantages-and-disadvantages-over-react-c87aa20de64f)</small>
---

#### Advantages
- Improved performance on the server side
- Image Optimization (The rendering of the images)
- Built-in middleware support
- prebuilt router (app.js)


#### Disadvantages
- The learning curve for server components
- Limited third party libraries
- Unnecessary overhead for small projects
    - Designed for larger web applications using tech stacks

<br>

#### Jekyll <small class="h6">source: [Blogpost](https://idratherbewriting.com/2015/11/17/pros-and-cons-of-jekyll-for-docs/)</small>
---


#### Advantages
- Good User Experience
- Can write in markdown
- Lightweight
- Simple to understand

#### Disadvantages
- All files are included by default
- Cannot use YAML
- May not be as scalable as Next.js
- fewer plugins and themes than the competition

<br>

#### React Static <small class="h6">source: [my full stack web app](https://rami-zeta.vercel.app/)</small>
---

#### Advantages
- Quick response time to changes as it is backed by React.js
- Scalable
- Easy data handling
- Creates secure sites

#### Disadvantages
- Learning curve (React is quite complicated already)
- Limited use cases
- Minimal documentation for React Static


<br><br>

## Notes on the 11ty Configuration Section
---

##### The Configurations and Settings we are Using
<br>

---

###### ../eleventy.config.js

```JS
module.exports = function(eleventyConfig)
{
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    
    return{
        dir:{
            output: "dist",
            input: "src"
        }
    };
}
```

This snippet of code is used to set the distributable and source code directories.

The components used in this code:

1. ```module.exports = function(eleventyConfig)```
    - This line defines and exports a function that takes `eleventyConfig` as a parameter. This function is where you configure Eleventy.

2. ```eleventyConfig.addPassthroughCopy("./src/css");`and`eleventyConfig.addPassthroughCopy("./src/img");```
    - These lines instruct Eleventy to copy the contents of the ```./src/css``` and ```./src/img``` directories to the output directory (```dist``` in this case) without processing them. This is useful for including static assets like stylesheets and images in the final build.

3. ```return { dir: { output: "dist", input: "src" } };```
    - This section returns an object that configures the input and output directories for Eleventy.
        - ```output: "dist"```: Specifies that the compiled site should be placed in the ```dist``` directory.
        - ```input: "src"```: Specifies that Eleventy should look for source files in the ```src``` directory.

###### Summary

This configuration ensures that:
- The static files in `src/css` and `src/img` are copied directly to the output directory.
- The source files are located in the `src` directory.
- The generated site will be placed in the `dist` directory.

---

###### package.json

```JSON
{
  "name": "eleventysite",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx @11ty/eleventy --serve"
  },
  "keywords": [],
  "author": "Ramiyan Gangatharan [100835223]",
  "license": "ISC",
  "description": "This site is for my Web Development Frameworks class.",
  "dependencies": {
    "@11ty/eleventy": "^2.0.1",
    "bootstrap": "^5.3.3",
    "marked": "^14.1.2",
    "nunjucks": "^3.2.4"
  }
}

```
The components used in this code:

- ```"name": "eleventysite"```
    - Specifies the name of your project. This is typically used by package managers and tools to identify the project.

- ```"version": "1.0.0"```
    - Indicates the version of your project. It follows semantic versioning (major.minor.patch) to help track changes and updates.

- ```"main": "index.js"```
    - Defines the entry point file of your project. When your package is required, this file will be used.

- ```"scripts"```
    - Contains command-line scripts that you can run using `npm` or `yarn`.
        - **```"test": "echo \"Error: no test specified\" && exit 1"```: A placeholder script for testing; it currently just prints an error message.
        - ```"start": "npx @11ty/eleventy --serve"```: Starts the Eleventy development server, allowing you to preview your site locally.

- ```"keywords": []```
    - An array of keywords associated with your project. This is often used for search and discovery on package registries but is empty here.

- ```"author": "Ramiyan Gangatharan"```
    - Specifies the author of the project.

- ```"license": "ISC"```
    - Indicates the license under which the project is distributed. ISC is a permissive open-source license.

- ```"description": "This site is for my Web Development Frameworks class."```
    - Provides a brief description of the project, which can be useful for others to understand its purpose.

- ```"dependencies"```
    - Lists the project’s dependencies, which are the packages required for your project to function.
        - ```"@11ty/eleventy": "^2.0.1"```: The core Eleventy static site generator package.
        - ```"bootstrap": "^5.3.3"```: A popular CSS framework for responsive design.
        - ```"marked": "^14.1.2"```: A Markdown parser used to convert Markdown content into HTML.
        - ```"nunjucks": "^3.2.4"```: A templating engine used for rendering views.

###### Summary

This ```package.json``` file:
- Defines project metadata and dependencies.
- Configures project scripts for testing and starting the development server.
- Specifies the entry point and licensing information.

---

##### Configuration Settings Worth Exploring

- ```.eleventyignore``` file
    - This is a list of files that will not processed by eleventy
- Events
    - ```eleventy.before```
        - this method runs every time the build starts
    - ```eleventy.after```
        - this method runs every time the build ends
    - ```eleventy.beforeWatch```
        - runs before a build is run only if it's a re-run during ```--watch``` or ```--serve```.
---

<br>

## Front Matter  <small class="h6">source: [11ty Docs](https://www.11ty.dev/docs/data-frontmatter/)</small>


---

Front Matter is a section of metadata included at the top of a file in a specific format, usually YAML. It is enclosed between triple dashes (```---```) and provides essential information about the content or template of the page.

---

#### What Is Front Matter?

- Format: Front Matter is typically written in YAML and is located between triple dashes at the top of a file.
- Purpose: It contains metadata or configuration settings for the page or template.

---

#### Why Is Front Matter Important?

##### Contextual Information

It provides context and additional data that affects how the content is rendered or processed. This includes settings such as page titles, template names, and other custom properties.

##### Template Customization

In the context of a static site generator like Eleventy, Front Matter allows you to specify attributes like the template to use and the page title. This customization helps in managing and organizing your content effectively.

##### Historical Use

Originally, Front Matter was used in printed books to display metadata such as the book’s title, author, ISBN, copyright information, and publication date. Similarly, in digital formats, it serves to provide context for the content.

##### In My Website:

On my website, Front Matter is utilized primarily to define the title of each page and to specify the template file that should be used for rendering. This setup streamlines the content management process and ensures consistent formatting across the site.

---

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