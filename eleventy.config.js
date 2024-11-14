import ejsPlugin from "@11ty/eleventy-plugin-ejs";

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
            console.log("Fetched Data:", data);
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
            console.log("Fetched Data:", data);
            return data.data;
        } catch (error) {
            console.error("Error fetching blogposts from Strapi:", error);
            return [];
        }
    });


    // Customizing the output dir for the 404 page
    return {
        dir: { 
            output: OUTPUT, 
            input: INPUT 
        }
    };
}
