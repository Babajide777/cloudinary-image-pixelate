const {
  cloudinaryImageUpload,
  pictureTransform,
} = require("../config/cloudinary");

const pictureUpload = async (req, res) => {
  if (req.files !== undefined) {
    try {
      const pic = await cloudinaryImageUpload(req.files.picture.path);
      const pixilatedImage = pictureTransform(pic);

      res.status(200).json({
        sucess: true,
        picture: pixilatedImage,
      });
    } catch (error) {
      res.status(400).json({
        sucess: false,
        error,
      });
    }
  }
};

module.exports = {
  pictureUpload,
};
