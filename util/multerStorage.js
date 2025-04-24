const multer = require("multer");

const storage = multer.memoryStorage(); // store files in memory, not on disk

module.exports = storage;
