import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const {
      name,
      age,
      gender,
      water,
      sleep,
      exercise,
      diet,
      mood,
    } = await req.json();

    const prompt = `
You are HealthMate AI.

The user's information is:

Name: ${name}
Age: ${age}
Gender: ${gender}
Water Intake: ${water} glasses
Sleep: ${sleep} hours
Exercise: ${exercise} minutes
Diet: ${diet}
Mood: ${mood}

Write:
1. Wellness Score out of 100
2. Health Summary
3. Three health tips
4. One motivational message

Do not diagnose diseases.
`;

    const completion = await client.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return Response.json({
      report: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to generate report.",
      },
      {
        status: 500,
      }
    );
  }
}