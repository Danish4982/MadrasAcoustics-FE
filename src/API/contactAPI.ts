import { client } from "../client";


export const sendQuery = async (payload: any) => {
    const sendResponse = await client("POST", "https://madrasacoustics-website.onrender.com/contact/send-query", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}