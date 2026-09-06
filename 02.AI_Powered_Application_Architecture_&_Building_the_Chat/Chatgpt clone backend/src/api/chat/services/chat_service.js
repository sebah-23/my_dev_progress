import db from "../../../../db/db.config.js";
const getRecentConversationRows= async (limit=5) => {
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

    return {
        historyRows
    };
    }catch(error){
        throw error;
    }
}