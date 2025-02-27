const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });
// console.log(" process.env.CLOUD_NAME :", process.env.CLOUD_NAME);

cloudinary.config({
  cloud_name: "dgoh0jhij",
  api_key: "619596882663523",
  api_secret: "kBC9cxyJlt3GtC46KrtVHumYUYE",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
