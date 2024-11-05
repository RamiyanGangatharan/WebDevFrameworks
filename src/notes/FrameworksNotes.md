---
layout: layout/mylayout.ejs
title: WDF Course Notes
---
<style>
    .content-container {
        margin: 0 auto;
        max-width: 8.5in;
        padding: 20px;
        text-align: justify;
    } 
    .content-container p {
        margin-bottom: 15px;
    } 
    .content-container h3, .content-container h2, .content-container h1 {
        text-align: center;
        margin-bottom: 20px;
    }
</style>

<div class="content-container">

# WDF Course Notes

<br>

## Table of Contents

- [WDF Course Notes](#wdf-course-notes)
  - [Table of Contents](#table-of-contents)
  - [Unit 1: Static Site Generation and Markdown](#unit-1-static-site-generation-and-markdown)
  - [JavaScript Frameworks](#javascript-frameworks)
    - [History](#history)
      - [1990s - early 2000s](#1990s---early-2000s)
      - [Mid 2000s](#mid-2000s)
      - [Late 2000s - early 2010s](#late-2000s---early-2010s)
      - [2010s - Present](#2010s---present)
    - [Advantages](#advantages)
  - [Pre-Built Markup](#pre-built-markup)
      - [Static Site Generation and Content Delivery Networks (CDNs)](#static-site-generation-and-content-delivery-networks-cdns)
      - [Content Management System (CMS)](#content-management-system-cms)
      - [Security](#security)
      - [Decoupling](#decoupling)
      - [Search Engine Optimization (SEO) \& Accessibility](#search-engine-optimization-seo--accessibility)
    - [Assigned Readings](#assigned-readings)
    - [History](#history-1)
    - [Frameworks Overview](#frameworks-overview)
    - [Why Do Frameworks Exist?](#why-do-frameworks-exist)
      - [Tooling and Compartmentalization](#tooling-and-compartmentalization)
      - [Routing](#routing)
      - [Alternatives to Client-Side Frameworks](#alternatives-to-client-side-frameworks)
  - [Performance](#performance)
    - [Assigned Readings](#assigned-readings-1)
      - [Web Technologies](#web-technologies)
      - [Startup Performance](#startup-performance)
  - [Cross Browser Compatibility](#cross-browser-compatibility)
      - [History](#history-2)
      - [Strategy](#strategy)
      - [Cross Browser Development](#cross-browser-development)
      - [Cross Browser Testing](#cross-browser-testing)


<br>

## Unit 1: Static Site Generation and Markdown

## JavaScript Frameworks

### History

#### 1990s - early 2000s
- Static HTML and CSS pages with little JS
- The frameworks available were PHP and ASP.NET

#### Mid 2000s
- AJAX --> Asynchronous JavaScript and XML
- JavaScript Libraries (like JQuery)

#### Late 2000s - early 2010s
- Early JavaScript Frameworks
  - Backbone.js
  - AngularJS
    - Introduced the Model View Controller (MVC) structure
    - Introduced Single Page Applications (SPA) which reduced page reloads

#### 2010s - Present
- Modern JavaScript Frameworks
  - React
  - Angular
  - Vue.js
- Created component based architecture
- Uses a virtual DOM
- Uses TypeScript


### Advantages

- Declarative syntax (readability). 
- Ecosystem/tools, like linters, test kits, and code
optimizers
- Component-based architecture, to keep code reusable
and maintainable
- Client-side routing, to facilitate SPAs (single page
applications)
- State management, the gap between the UI and the
application layer in the client

<br>

## Pre-Built Markup

#### Static Site Generation and Content Delivery Networks (CDNs)
- **11ty**: A static site generator that builds websites from source files at compile time.
- **CDNs**: Content Delivery Networks deliver static content faster by caching files globally, 
  improving scalability and load times. Unlike dynamic sites, CDNs handle cached content 
  efficiently without real-time database requests.

#### Content Management System (CMS)
- CMS: allows dynamic content updates via a GUI, without code changes.
- Headless CMS: Manages content independently of front-end design, focusing only on backend content management.

#### Security
- Static sites are more secure, minimizing risks from SQL injection and XSS, as no server-side processing or databases are involved.

#### Decoupling
- Separating the frontend from the backend enables independent updates and development. Microservices architecture is an example 
  of this, where individual services can be updated without affecting the entire system.

#### Search Engine Optimization (SEO) & Accessibility
- Static sites are more SEO-friendly and accessible as search engines and assistive tools have an easier time indexing and 
  processing content compared to dynamically generated pages.

### Assigned Readings 
<p><small>

*[Introduction to Client-Side Frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#alternatives_to_client-side_frameworks)*

</p></small>

---

### History
- JavaScript was released in 1996.
- Developers made libraries to solve problems they faced when they used the original version of the language.

### Frameworks Overview
- Ember (2011), Angular (2010, re-released 2016), Vue (2014), and React (2013) are popular JavaScript frameworks.
React is technically a library, with examples like React Native for mobile and ReactDOM for web applications.

### Why Do Frameworks Exist?
- Frameworks simplify state management and abstract complex DOM manipulation. Developers focus on UI design, while the framework handles DOM updates.

---

**Data Being Used:**

```JSON
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];

```

**Vanilla JavaScript Example: To-Do List**

```javascript
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.textContent = name;
  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));
  
  return item;
}
```

```JS
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";
  
  return button;
}
```
```JS
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

**Vue Example: To-Do List**

```JS
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>{{task.name}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

#### Tooling and Compartmentalization
- Tooling: Development aids such as linters and error checkers.
- Compartmentalization: Abstracts UI components to encourage DRY (Don't Repeat Yourself) principles, e.g., React/Vue components.

#### Routing
- Routing enables user navigation between pages on a website.
  - SPA: Updates content on a single page without full reloads.
  - MPA: Uses traditional routing with separate page loads.

Example using ExpressJS for routing in a NodeJS application:

```JS
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => { res.render('home') });
app.get('/blog', (req, res) => { res.render('blog') });

app.listen(PORT, () => console.log(`Server Started at http://localhost:${PORT}`));
```

#### Alternatives to Client-Side Frameworks
- Content Management Systems (CMS): Tools users to manage site content.
- Server-Side Rendering: Renders pages on the server rather than in the client browser.
- Static Site Generators (SSG): A Secure approach that pre-builds pages at compile-time.
  - Example: This site is built with 11ty (SSG) using EJS templates for rendering.

---

## Performance
- User Perceived Performance == UPP
- the metric of user perceived performance
  - Responsiveness
    - Everything functions like expected (buttons do something when pressed, bad responsiveness is when you click a button and it does not look like it is doing something)
    - Quick load times improve responsiveness
  - Frame Rates
    - measured in frames per second
    - higher framerates fool the user into thinking the site runs smoother
  - Memory Usage
    - It is important to manage memory effectively and to not over use or abuse the clients resources in that way.
  - Power Usage: Important in mobile devices

### Assigned Readings 
<p><small>

*[Performance fundamentals](https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals)*

</p></small>

#### Web Technologies

Web technologies offer various tools for different tasks. JavaScript handles all application logic, 
while graphics can be rendered using high-level declarative languages like HTML and CSS or low-level 
imperative interfaces like the `<canvas>` element (including WebGL). SVG offers a middle ground, combining
 aspects of both.

HTML and CSS enhance productivity by automating many UI tasks, but may sacrifice pixel-level control. 
The `<canvas>` element provides direct control over rendering but requires developers to handle 
complexities like different screen resolutions and right-to-left languages.

Gecko, a rendering engine, features just-in-time (JIT) compilation for JavaScript, enabling performance close 
to native code. Its graphics pipeline optimizes rendering for HTML, CSS, and Canvas, minimizing repainting and
 invalidation. It uses specialized memory and GPU hardware to maximize performance and energy efficiency.

Gecko is also highly optimized for dynamic content, especially animations and transitions, offloading 
common-case animations to the system compositor for better efficiency. Additionally, Gecko enhances both 
startup and runtime performance by optimizing tasks such as parallel HTML parsing and image decoding, 
benefiting all Web applications on Firefox.

#### Startup Performance
- First paint: The initial frame is rendered.
- Interactivity: The user can interact with the app (e.g., clicking buttons).
- Full load: The app's complete content, such as listing all albums in a music player, is available.

The critical path to each event includes only the necessary code for that event. 
For instance, to paint the first frame, tasks like parsing HTML, constructing the DOM, 
loading resources, and applying CSS are essential. Tasks unrelated to this, such as loading 
a JavaScript file for an uncommon menu, should be deferred.

To optimize startup, focus on:
- Running only code on the critical path.
- Simplifying the scene to shorten the critical path.
- Defer non-essential tasks using lazy loading.
- "Front-loading" database or resource requests to reduce idle time.
- Local caching of static resources (using Service Workers) helps speed up startup, 
- especially in environments with high-latency, low-bandwidth networks. 
- Avoid network requests on the critical path to ensure faster application performance.

---

## Cross Browser Compatibility

#### History
- Netscape 4 and Internet Explorer 4 wanted to reinvent the web
- Netscape and Internet Explorer behaved differently to remain competitive

#### Strategy
- Is it better to develop sites with the latest and greatest
technology, to push the envelope, or with the oldest
technology, to ensure maximum compatibility?
- Some decisions are less about business and more about
accessibility, because the web is for everyone (like
support for keyboard navigation and screen readers)


#### Cross Browser Development
- Libraries (in particular, polyfills) manage the gap
between what is expected to run in a browser versus
what is there
- At some point, older browsers will stop being functional.
For instance, if you use JavaScript, you are eliminating
some people from the web
- The fundamental point is the fight between innovation
and compatibility




#### Cross Browser Testing
Cross-browser testing ensures that websites function correctly across 
various browsers and devices, including older versions and those used 
by individuals with disabilities. Developers must consider different 
browser behaviors, device capabilities, and user accessibility when 
designing websites. The objective is to maintain core functionality 
rather than achieving an identical experience across all platforms.

Common Causes of Cross-Browser Issues:
- Browser Bugs: Variability in how browsers implement features or bugs that arise.
- Feature Support: Differences in technology support across browsers, especially for newer features.
- Device Constraints: Variations in hardware can affect how websites display and perform.

Testing Workflow:
1. Initial Planning: Identify required features, target audience, and potential problem areas.
2. Development: Split development into modules, implement features, and ensure compatibility across target browsers.
3. Testing/Discovery: Conduct testing after each implementation phase, focusing on accessibility and functionality in various browsers.
4. Fixes/Iteration: Narrow down bugs based on reported issues, test fixes, and ensure no new problems arise.

Strategies for Testing:
- Utilize physical devices, emulators, or virtual machines for testing.
- Consider user testing groups for real-world feedback.
- Employ automation tools for efficiency in testing.

</div> 