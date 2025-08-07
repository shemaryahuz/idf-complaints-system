import express from "express";
import { submitComplaint } from "../controllers/complaintsController.js";

const complaintRouter = express.Router();

complaintRouter.post("/", submitComplaint);

export default complaintRouter;