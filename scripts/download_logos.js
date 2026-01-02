import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logos = [
    { name: 'openai.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'anthropic.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg' },
    { name: 'google-gemini.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    { name: 'google-cloud.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'aws.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'azure.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'make.svg', url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/make.svg' },
    { name: 'zapier.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg' },
    { name: 'n8n.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg' },
    { name: 'notion.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg' },
    { name: 'webflow.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Webflow_logo_2023.svg' },
    { name: 'gmail.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
    { name: 'outlook.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg' },
    { name: 'github-logo-white.png', url: '' } // Already exists? Check LogoCarousel.
];

const publicLogosDir = path.resolve(__dirname, '../public/logos');

if (!fs.existsSync(publicLogosDir)) {
    fs.mkdirSync(publicLogosDir, { recursive: true });
}

async function downloadFile(url, filename) {
    if (!url) return; // Skip if no URL (e.g. github which uses local)

    const destPath = path.join(publicLogosDir, filename);
    const file = fs.createWriteStream(destPath);

    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => { });
            reject(err);
        });
    });
}

async function processLogos() {
    for (const logo of logos) {
        try {
            await downloadFile(logo.url, logo.name);
        } catch (error) {
            console.error(`Error downloading ${logo.name}: ${error.message}`);
        }
    }
}

processLogos();
