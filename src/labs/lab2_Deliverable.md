---
layout: layout/mylayout.ejs
title: Lab 2B
---

<style>
    .content-container { margin: 0 auto; max-width: 8.5in; padding: 20px; text-align: justify;} 
    .content-container p { margin-bottom: 15px;} 
    .content-container h3 { text-align: center; margin-bottom: 20px; } 
</style>

<div class="content-container">

### Technological Overview

<div class="text-center">

![image](/img/headless.avif)

</div>

---

According to [Medium](https://medium.com/@d.mcburney/what-really-is-a-headless-cms-and-why-would-you-consider-one-an-explainer-for-everyone-cd1ad64a49f4), 
a content management system (CMS) traditionally manages an entire website as a single, monolithic structure. A headless CMS, however, separates 
content management from website rendering, allowing you to log in, make updates, and then have the CMS regenerate your site automatically. 
The complexity arises when selecting the frontend framework to connect with the CMS, such as Next.js or SvelteKit. In a way, it's like adding a 
turbocharger to an engine, providing greater flexibility and speed without overhauling the entire system.

System administrators and higher-level users will use content management systems (CMS) when they need to manage or update large websites 
without editing source code directly. This is especially useful in fast-paced development environments, where time is limited, and they 
have the necessary content to populate the site but not the resources or desire to build it from scratch. By using a CMS, they can efficiently 
maintain and update the site's content on online platforms without extensive coding knowledge. In this next section I will be reviewing and 
comparing five different headless content management systems, then choose one for assignment 2.

---

#### Contentful
Contentful's main selling point is that it is used by many enterprises and is able to take one sector of data and make it work on many different 
platforms like Desktops, mobile apps, social media, and articles. Contentful is used by KFC, Audible and VodaPhone. They have recently implemented
 artificial intelligence to help you with "audience segmentation". Contentful also has features where you can have your website work in different 
 countries using their realtime translation feature to default to the user's location. For example, if you made the website in Ontario in English 
 and the user is in Quebec the CMS will translate it into French. In a way, it is also a website builder where you can drag and drop features onto
your site like images and buttons. 

Source: [Contentful](https://www.contentful.com/)

---

#### Strapi
Strapi is an open source (MIT Licenced) headless CMS that uses Node.js and simplifies the process of creating API's for your website. 
Strapi is used by Toyota, NASA, Apple, Adidas, Airbus, and Walmart. Like Contentful, it is used to create websites quickly but what makes 
Strapi unique is that they have a lot of plugins to make your website easier to develop depending on your needs. They have a technology stack 
called the 'Strapi Stack' where they use a PostgreSQL database, an email provider, and a content delivery network (CDN). The convenient part 
of this stack is that Strapi handles all of that for you.

Source: [Strapi](https://strapi.io/)

---

#### Sanity
Sanity call themselves "The Content Operating System" where they market it as an all in one flexible content workspace. Sanity is notably used 
by CloudFlare, Figma, Ableton, Puma, Shopify, Sonos, and Arc'teryx. Sanity is split between three layers: Studio, APIs, and Content Lake. The 
Studio layer is the front end of the system where you can edit your website with a GUI and have the CMS handle the rest of the backend. The 
API is responsible for handling the frontend input and the backend content lake. The Content Lake is essentially a JSON structured database 
where you can create unstructured data like in MongoDB. Sanity is cloud-hosted and uses a CDN to function and specializes in enterprise operations.

Source: [Sanity](https://www.sanity.io/)

---

#### Ghost
Ghost is marketed as the "Independant technology for modern publishing" where it is a headless CMS catered towards newsletters, blogs, and 
articles. In this CMS, you have an editor to create web pages from scratch where you have a user friendly GUI will all the complex features 
of writing the website yourself. The way I look at it is that it is like the Microsoft Word of text editors where it is complex enough for you 
to build anything you want but simple enough for beginners to use. Using Ghost you can create dynamic features like accordians, cards, images, 
downloadable files, and bookmarks. Ghost also offers built in newsletter services and handles all the backend required to manage email subscriptions.

Source: [Ghost](https://ghost.org/)

---

#### Payload
Payload is a CMS built with TypseScipt and React Libraries. where it is notably used by the United States Air Force, Microsoft, Fanatics, 
Accenture, and Bugatti. Payload CMS is marketed towards accelerated collaboration of projects where it is tuned to work for angencies, marketing, 
and development use cases. Payload is an enterprise grade application builder where you own your data and do not have to share it with thier 
servers. Payload is designed for companies that have to deal with more sensitive data on a large scale like healthcare or military purposes.

Source: [Payload](https://payloadcms.com/)

---

#### My Choice in CMS
I've decided to use Strapi as my Content Management System (CMS) of choice. Strapi offers several appealing features, but what initially caught 
my attention is that NASA uses it — a testament to its reliability and potential for scalability. Over my three years at Durham College, I've learned 
a lot of the core technologies behind Strapi, making it a great fit that aligns with my knowledge base. As an open-source CMS, Strapi evolves based 
on community feedback, prioritizing the features users genuinely need over shareholder-driven decisions. Built on Node.js, Strapi is continuously 
updated with the latest tech improvements, ensuring it stays relevant and secure. Additionally, the extensive documentation on both Strapi itself and 
its REST and GraphQL APIs makes it easier to learn and troubleshoot, promising a smooth development experience and effective integration with other technologies.
</div>