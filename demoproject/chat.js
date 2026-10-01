import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});
 

const chat = client.chats.create({
    model: "gemini-3.5-flash-lite",
    history : [
        {
            role: "user", parts : [
                { text: "My name is sebah." }
            ]
        },
     {
      role: "model", parts : [
                { text: "Hello sebah! How can I help you today?" }
            ]
     }
    ]

})


const res= await chat.sendMessageStream({
    message: "explani about express?",

})
const history = await chat.getHistory();
// console.log(res.text);
for await (const part of res) {
  console.log(part.text);
}
// console.log(history[1].parts[0].text);
const vars =(ms)=> new Promise((resolve) => {
    setTimeout(resolve, ms);
    }); 

    vars(1000);