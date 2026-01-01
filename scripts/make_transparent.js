import { Jimp } from 'jimp';

async function main() {
    const inputPath = 'C:/Users/Patrick/.gemini/antigravity/brain/58b6623c-b1f8-4537-9b32-645d5e9e94c8/uploaded_image_0_1767272187843.png';
    const outputPath = 'c:/Users/Patrick/Documents/GitHub/Epiphany-Dynamics-V2/Epiphany-Dynamics-V2/public/logos/new_geometric_mark.png';

    try {
        console.log("Attempting to read image from:", inputPath);
        // Try named export first, if fails, fallback to default (though in ESM usually one works)
        const image = await Jimp.read(inputPath);

        console.log(`Image read successfully. Size: ${image.bitmap.width}x${image.bitmap.height}`);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Make dark pixels (near black) transparent
            if (r <= 20 && g <= 20 && b <= 20) {
                this.bitmap.data[idx + 3] = 0;
            }
        });

        console.log("Writing to:", outputPath);
        await image.write(outputPath);
        console.log("Success.");
    } catch (error) {
        console.error("FATAL ERROR:", error);
    }
}

main();
