import db from "../db/connection.js";

const complaints_collection = db.collection("complaints");

export async function insertComplaint(complaint) {
    try {
        const complaintWithid = complaints_collection.insertOne(complaint);
        return complaintWithid;
    } catch (error) {
        const msg = error.message
        console.error(`Error inserting complaint: ${msg}`);
        throw new Error(msg);
    }
}