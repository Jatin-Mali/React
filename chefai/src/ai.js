import { GoogleGenerativeAI } from "@google/generative-ai"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe that can be made using some or all of them.
You may include a few common pantry ingredients if needed.
Keep recipes realistic and simple for home cooking.
Format the response in clean markdown:
- Title
- Short description
- Ingredients (bulleted)
- Step-by-step instructions (numbered)
- Optional tips
`

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export async function getRecipeFromChefAI(ingredientsArr) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

    const ingredientsString = ingredientsArr.join(", ")

    const prompt = `
${SYSTEM_PROMPT}

I have these ingredients: ${ingredientsString}.
Give me a recipe I can make.
`

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
}
