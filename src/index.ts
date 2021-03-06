import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello world");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.info(`Server started on port ${port}`);
});
