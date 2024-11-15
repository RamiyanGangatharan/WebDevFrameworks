import { marked } from 'marked';

async function fetchStrapiData(endpoint, description) {
    try {
        const response = await fetch(`http://localhost:1337/api/${endpoint}`);
        if (!response.ok) {throw new Error(`Failed to fetch ${description}: ${response.statusText}`);}
        return (await response.json()).data;
    } catch (error) {console.error(`Error fetching ${description} from Strapi:`, error); return [];}
}

export default function(eleventyConfig) {
    eleventyConfig.addGlobalData("rs", () => fetchStrapiData("restaurants", "restaurant data"));

    eleventyConfig.addGlobalData("bp", async() => {
        const blogPosts = await fetchStrapiData("blogs", "blog posts");
        return blogPosts.map(post => ({ ...post, Content: marked(post.Content) }));
    });

    eleventyConfig.addGlobalData("labs", async() => {
        const labs = await fetchStrapiData("labs", "lab content");
        return labs.map(post => ({...post, Content: marked(post.Content)}));
    });

    eleventyConfig.addGlobalData("assignments", async() => {
        const assignments = await fetchStrapiData("assignments", "assignment content");
        return assignments.map(post => ({...post, Content: marked(post.Content)}));
    });

    // eleventyConfig.addGlobalData("notes", async() => {
    //     const notes = await fetchStrapiData("assignments", "assignment content");
    //     return notes.map(post => ({...post, Content: marked(post.Content)}));
    // });
}