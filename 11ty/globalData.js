import { marked } from 'marked';

async function fetchStrapiData(endpoint, description) {
    try {
        const response = await fetch(`http://localhost:1337/api/${endpoint}`);
        if (!response.ok) {throw new Error(`Failed to fetch ${description}: ${response.statusText}`);}
        return (await response.json()).data;
    } catch (error) {console.error(`Error fetching ${description} from Strapi:`, error); return [];}
}

export default function(eleventyConfig) {
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
    
    eleventyConfig.addGlobalData("WDF", async () => {
        const notes = await fetchStrapiData("notes", "WDF note content");
        const sortedNotesAscending = notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return sortedNotesAscending.map(post => ({ ...post, Content: marked(post.Content) }));
    });

    eleventyConfig.addGlobalData("CICS", async () => {
        const notes = await fetchStrapiData("mainframes", "CICS content");
        const sortedNotesAscending = notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return sortedNotesAscending.map(post => ({ ...post, Content: marked(post.Content) }));
    });

    eleventyConfig.addGlobalData("FP", async () => {
        const notes = await fetchStrapiData("field-placements", "FP content");
        const sortedNotesAscending = notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return sortedNotesAscending.map(post => ({ ...post, Content: marked(post.Content) }));
    });
}