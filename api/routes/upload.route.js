// routes/upload.route.js
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import cloudinary from '../utils/cloudinary.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    // Ensure file exists
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'listings',
    });

    // Delete local temp file
    fs.unlinkSync(req.file.path);

    // Respond with Cloudinary URL
    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.error('Upload failed:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;
