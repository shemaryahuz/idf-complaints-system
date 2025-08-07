import { insertComplaint } from "../dal/complaintsDAL.js";


export async function submitComplaint(req, res) {
    try {
        const { subject, content } = req.body;
        const inserted = await insertComplaint({subject, content});
        if (!inserted) return res.status(500).send({ message: "error submiting complaint" });
        res.status(201).send({ message: "complaint submited successfully", complaint: inserted });
    } catch (error) {
        res.status(500).send({ message: `error submiting complaint ${error.message}` });
    }
}