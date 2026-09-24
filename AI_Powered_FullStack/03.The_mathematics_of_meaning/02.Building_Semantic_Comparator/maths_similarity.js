import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_EMBEDDING_MODEL =
  process.env.GEMINI_EMBEDDING_MODEL || "gemini-embedding-001";

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

function cosineSimilarity(vecA, vecB) {
  if (vecA.length !== vecB.length) {
    throw new Error("Vectors must have the same length");
  }

  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    magnitudeA += vecA[i] * vecA[i];
    magnitudeB += vecB[i] * vecB[i];
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  return dotProduct / (magnitudeA * magnitudeB);
}

async function compareText() {
  const textA = "What is the weather like today?";
  const textB = "What is your favorite color?";
  const textC = "The weather is sunny and warm today.";

  const resultsA = await ai.models.embedContent({
    model: GEMINI_EMBEDDING_MODEL,
    contents: textA,
  });

  const resultsB = await ai.models.embedContent({
    model: GEMINI_EMBEDDING_MODEL,
    contents: textB,
  });

  const resultsC = await ai.models.embedContent({
    model: GEMINI_EMBEDDING_MODEL,
    contents: textC,
  });

  const V1 = resultsA.embeddings[0].values;
  const V2 = resultsB.embeddings[0].values;
  const V3 = resultsC.embeddings[0].values;

  const V1andV2 = cosineSimilarity(V1, V2);
  const V1andV3 = cosineSimilarity(V1, V3);

  console.log("Text A:", textA);
  console.log("Text B:", textB);
  console.log("Text C:", textC);

  console.log("\nSimilarity between A and B:", V1andV2);
  console.log("Similarity between A and C:", V1andV3);
}

compareText();