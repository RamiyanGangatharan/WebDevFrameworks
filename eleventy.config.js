import ejsPlugin from "@11ty/eleventy-plugin-ejs";
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function(eleventyConfig) {
    const OUTPUT = "dist";
    const INPUT = "src";

    // Add EJS plugin for rendering EJS templates
    eleventyConfig.addPlugin(ejsPlugin);

    // Add passthrough for images and 404.ejs
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("404.ejs");

    // Set template formats
    eleventyConfig.setTemplateFormats(["md", "ejs", "njk"]);

    // Global data fetch for restaurants
    eleventyConfig.addGlobalData("rs", async () => {
        try {
            const response = await fetch("http://localhost:1337/api/restaurants");
            if (!response.ok) { throw new Error(`Failed to fetch Strapi data: ${response.statusText}`); }
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error("Error fetching restaurants from Strapi:", error);
            return [];
        }
    });

    // Global data fetch for blog posts
    eleventyConfig.addGlobalData("bp", async () => {
        try {
            const response = await fetch("http://localhost:1337/api/blogs");
            if (!response.ok) { throw new Error(`Failed to fetch Strapi data: ${response.statusText}`); }
            const data = await response.json();
           
            // Convert Markdown to HTML for each blog post
            const blogPosts = data.data.map(post => ({...post, Content: marked(post.Content) }));
            return blogPosts;
        } catch (error) {console.error("Error fetching blog posts from Strapi:", error); return [];}
    });

    // Listen for the eleventy.before event to delete the output folder
    eleventyConfig.on("eleventy.before", function() {
        const outputDirectory = path.join(__dirname, "dist");
        if (fs.existsSync(outputDirectory)) {
            fs.rmdirSync(outputDirectory, { recursive: true });
            console.log(`Deleted the output folder: ${outputDirectory}`);
        }
    });

    return { dir: { output: OUTPUT, input: INPUT }};
}