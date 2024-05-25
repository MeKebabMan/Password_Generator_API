import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        Message: "penguins are sad on the inside!",
    })
})

app.listen(PORT, () => {
    console.log(`[API]: Connected to:\n http://localhost:${PORT}/`);
});