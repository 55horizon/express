import express, { json } from "express";
import { messages, params, completion } from "./configuration.js";

const app = express();
app.use(json());

const port = process.env.PORT || 5000;

app.post("/", async (req, res) => {
	const prompt = req.body.prompt;

	try {
		if (prompt == null) {
			throw new Error("No prompt was provided");
		}

		messages.push({ role: "user", content: prompt });

		const response = await completion(params);

		messages.push({
			role: "assistant",
			content: response.choices[0].message.content
		});

		return res.status(200).json({
			success: true,
			message: response.choices[0].message.content
		});
	} catch (error) {
		res.status(500).send({ error });
		console.error(error.message);
	}
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
