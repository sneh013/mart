import path from "path";
import express from "express";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../uploads"));
    },
  
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${extname}`);
      },
    });

const fileFilter = (req, file, cb) => {
    // Temporarily accept all files for testing upload issue
    cb(null, true);
  };

 const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");

router.post("/", (req, res) => {
  uploadSingleImage(req, res, (err) => {
    if (err) {
      console.error("Upload error:", err);
      res.status(400).send({ message: err.message });
    } else if (req.file) {
      console.log("Uploaded file info:", req.file);
      res.status(200).send({
        message: "Image uploaded successfully",
        image: `/uploads/${req.file.filename}`,
      });
    } else {
     
      res.status(400).send({ message: "No image file provided" });
    }
  });
});

 export default router;
