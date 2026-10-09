import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
	console.error("Missing OPENAI_API_KEY.");
	process.exit(1);
}

const ai = new OpenAI();

try {
	const response = await ai.responses.create({
		model: "gpt-5.5",
		input: "Say hello in one sentence."
	});

	console.log(response.output_text);
} catch (error) {
	console.error("AI request failed:", error.message);
}
