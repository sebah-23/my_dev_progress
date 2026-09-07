import db from "../../../../db/db.config.js";

import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL= process.env.GEMINI_MODEL || 'gemini-2.0-flash-light';

const geminiClient= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


const getRecentConversationRows= async (limit = 5) => {
    const normalizedList = Number.parseInt(limit,10);
    const safeList =
    Number.isNaN(normalizedList) || normalizedList <= 0 
    ?20 
    :normalizedList;
    const [rows] = await db.execute(
        `SELECT id,role,content,created_at
        FROM conversations
        ORDER BY id DESC
        LIMIT $(safeLimit)`,
    );
    return rows.reverse();
}

const generateAsistantAnswer= async ({question,historyRows}) => {
  
    const formattedHistory = historyRows.map((row) => ({
        role: row.role=== 'assistant' ? 'model' : 'user',
        parts: [{ text: row.content }]
    }));

    const chat = geminiClient.chats.create({
        model: GEMINI_MODEL,
        history: formattedHistory,
    });

    const result = await chat.sendMessage({ message : question });
    return result.content;
}


export async function createConversationService(question){
    try{
        if (!question.trim()){
            const error = new Error ('Question is required');
            error.status=400;
            throw error;
        }

        const historyRows = await getRecentConversationRows(5);
    const [result] = await db.execute('INSERT INTO conversations (content,role ) VALUES(?,"user")',[
        question],);

        const assistantAnswer = await generateAsistantAnswer({question,historyRows});
    return {
        historyRows,
        assistantAnswer,
    };
    }catch(error){
        throw error;
    }
}