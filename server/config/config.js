const TABLE_NAME = 'all-for-you';
const config = {
    PORT: process.env.PORT || 5000,
    //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: `mongodb+srv://vinayak:J2f3G6pwu66jD4bL@cluster0.hla7jz6.mongodb.net/?retryWrites=true&w=majority`,
    SECRET: 'badumts',
    SALT: 10,
    COOKIE_NAME: 'USER_SESSION',
    CLOUDINARY_NAME: 'silenceiv',
    CLOUDINARY_API_KEY: 626847416757451,
    CLOUDINARY_API_SECRET: '3NzQ5GbrcSjW0EERTJd5XZvfcT8',
    CLOUDINARY_STORAGE: 'pza5zln6'
}

module.exports = config;