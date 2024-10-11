import ejs from "ejs";
import ejsPlugin from "@11ty/eleventy-plugin-ejs";

export default function(eleventyConfig) {
    const OUTPUT = "dist";
    const INPUT = "src";

    // Add the EJS plugin
    eleventyConfig.addPlugin(ejsPlugin);

    // Passthrough for static files (like images)
    eleventyConfig.addPassthroughCopy("./src/img");

    // Set template formats
    eleventyConfig.setTemplateFormats(["md", "ejs", "njk"]);

    return {
        dir: {
            output: OUTPUT,    // Output folder for built files
            input: INPUT       // Input folder for source files
        }
    };
}
