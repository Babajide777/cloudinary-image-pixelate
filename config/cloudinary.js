const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryImageUpload = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(file)
      .then((result) => {
        resolve(result.public_id);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const pictureTransform = (img) =>
  cloudinary.image(img, {
    effect: "pixelate_region:35",
    height: 200,
    width: 200,
    x: 150,
    y: 150,
  });

module.exports = {
  cloudinaryImageUpload,
  pictureTransform,
};
