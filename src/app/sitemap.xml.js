const EXTERNAL_DATA_URL = 'https://www.stephanieodoom.com';

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Dynamic URLs -->
        <url>
            <loc>${EXTERNAL_DATA_URL}</loc>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL}/about</loc>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL}/projects</loc>
        </url>
        <url>
            <loc>${EXTERNAL_DATA_URL}/services</loc>
        </url>
    </urlset>`;
}

function SiteMap() {
// This function will create the XML for the sitemap.
}

export async function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(generateSiteMap());
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;