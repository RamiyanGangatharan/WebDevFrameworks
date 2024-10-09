module.exports = function(eleventyConfig)
{
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.setTemplateFormats(["md", "ejs", "njk"]);
    return{dir:{ output: "dist", input: "src"}};
}