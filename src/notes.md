--- 
layout: layout/mylayout.ejs
title: Course Notes
---
<style>
    .content-container { margin: 0 auto; max-width: 8.5in; padding: 20px; text-align: justify;} 
    .content-container p { margin-bottom: 15px;} 
    .content-container h3 { text-align: center; margin-bottom: 20px; } 
</style>

<div class="content-container">

<h1 class="text-center display-1">WDF Course Notes</h1>

<br>

<div class="card">
  <div class="card-body">
    <h2 class="card-title">
    Table of Contents
    </h2>
  </div>

- [Unit 1: Static Site Generation and Markdown](#unit-1-static-site-generation-and-markdown)
    - [Pre-Built Markup](#pre-built-markup)
      - [Static Site Generation and Content Delivery Networks (CDNs)](#static-site-generation-and-content-delivery-networks-cdns)
      - [Content Management System (CMS)](#content-management-system-cms)
      - [Security](#security)
      - [Decoupling](#decoupling)
      - [Search Engine Optimization (SEO) \& Accessibility](#search-engine-optimization-seo--accessibility)
    - [Assigned Readings](#assigned-readings)
- [Assigned Reading Notes](#assigned-reading-notes)

</div> 

---

<br>

## Unit 1: Static Site Generation and Markdown
---
#### Pre-Built Markup
---
##### Static Site Generation and Content Delivery Networks (CDNs)
- 11ty is a static site generation framework that converts a few files into many during build time.
- Static sites are typically served by CDNs (Content Delivery Networks).
  - **Advantage**: CDNs cache static sites, whereas dynamic sites can't be cached as effectively due to constant data requests.

##### Content Management System (CMS)
- Markup can be stored in a CMS.
- A CMS renders a website’s content at runtime without modifying any code.
  - **Use Case**: A CMS allows non-developers to modify and rebuild the site using a GUI.
  - **Headless CMS**: In this course, we use a headless CMS, which manages content only, while traditional CMSs manage both the front and back ends.

##### Security
- Static sites pose minimal security risks since they don't involve server-side processing or databases.
  - **Common Threats**: Websites are often vulnerable to SQL injection or script-based attacks, but static sites mitigate these risks.

##### Decoupling
- Decoupling refers to separating the front end and back end so teams can work on them independently.
  - **Example**: Microservices are decoupled, meaning they don't depend on one another directly, allowing for simultaneous updates without downtime. Monolithic applications, by contrast, may require downtime for maintenance.

##### Search Engine Optimization (SEO) & Accessibility
- Search engines and accessibility tools struggle with understanding dynamically generated pages. This is why static pages are preferred.

#### Assigned Readings

- [Introduction to Client-Side Frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#alternatives_to_client-side_frameworks)


---

## Assigned Reading Notes

---

</div>
