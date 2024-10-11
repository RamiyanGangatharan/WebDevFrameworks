import ejsPlugin from "@11ty/eleventy-plugin-ejs";

export default function(eleventyConfig) {
    const OUTPUT = "dist";
    const INPUT = "src";

    eleventyConfig.addPlugin(ejsPlugin);
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.setTemplateFormats(["md", "ejs", "njk"]);

    return {dir: {output: OUTPUT, input: INPUT}};
}