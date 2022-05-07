const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>This is now working!</h1>");
});

app.listen(PORT, () => {
    console.log(`API is now listening on port ${PORT}`);
});