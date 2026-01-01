const Jimp = require('jimp');
const path = require('path');

async function processImage() {
    const inputPath = 'C:/Users/Patrick/.gemini/antigravity/brain/58b6623c-b1f8-4537-9b32-645d5e9e94c8/uploaded_image_0_1767272187843.png';
    const outputPath = 'c:/Users/Patrick/Documents/GitHub/Epiphany-Dynamics-V2/Epiphany-Dynamics-V2/public/logos/new_geometric_mark.png';

    console.log(`Reading from: ${inputPath}`);

    try {
        const image = await Jimp.read(inputPath);

        // Scan every pixel
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // If the pixel is close to black, make it transparent
            // Threshold can be adjusted. strict (0,0,0) or loose (<10,<10,<10)
            if (r < 10 && g < 10 && b < 10) {
                this.bitmap.data[idx + 3] = 0; // Alpha = 0
            }
        });

        await image.writeAsync(outputPath);
        console.log(`Successfully saved transparent image to: ${outputPath}`);
    } catch (err) {
        console.error('Error processing image:', err);
        process.exit(1);
    }
}

processImage();
