import ejsPlugin from "@11ty/eleventy-plugin-ejs";

export default function(eleventyConfig) {
    const OUTPUT = "dist";
    const INPUT = "src";

    eleventyConfig.addPlugin(ejsPlugin);
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.setTemplateFormats(["md", "ejs", "njk"]);

    // Fetch restaurants and return only the data array
    eleventyConfig.addGlobalData("rs", async() => {
        try {
            const response = await fetch("http://localhost:1337/api/restaurants");
            if (!response.ok) 
                {
                    throw new Error(`Failed to fetch Strapi data: ${response.statusText}`);
                }
            const data = await response.json();
            console.log("Fetched Data:", data);
            return data.data; 
        } catch (error) {
            console.error("Error fetching restaurants from Strapi:", error);
            return [];
        }
    });
    

    return {
        dir: {
            output: OUTPUT,
            input: INPUT
        }
    };
}
