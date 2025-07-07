import bcrypt from "bcrypt";

const saltRounds = 12;

// Get API key from command line argument
const apiKey = process.argv[2];

if (!apiKey) {
    console.error("❌ Error: Please provide an API key to hash.");
    console.error("Usage: node hash-api-key.js <your-api-key>");
    process.exit(1);
}

// Hash the provided API key
bcrypt.hash(apiKey, saltRounds).then((hash) => {
    console.log(`✅ Hashed API Key:\n${hash}`);
}).catch((err) => {
    console.error("❌ Error hashing API key:", err);
});
