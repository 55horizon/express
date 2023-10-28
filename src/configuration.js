import OpenAI from "openai";
import { config } from "dotenv";
config();

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const messages = [
	{ role: "system", content: "You are a helpful assistant." }
];

export const params = {
	messages: messages,
	model: "gpt-4",
	max_tokens: 200
};

export const completion = async (params) =>
	await openai.chat.completions.create(params);
