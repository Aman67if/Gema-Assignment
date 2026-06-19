import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.use(express.json());

app.post("/api/enquiry", (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || name.trim() === '') {
        return res.status(400).send('Name is required');
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).send('Please provide a valid email');
    }
    if (phone && !/^\+?[0-9]+$/.test(phone)) {
        return res.status(400).send('Please provide a valid phone number');
    }
    res.status(200).send(`Thank you! ${name} We'll contact you soon.`);
});

module.exports = app;


if (process.env.NODE_ENV !== 'production') {
  ViteExpress.listen(app, 3000, () => {
    console.log('Server is listening on port 3000...');
  });
}