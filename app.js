// intitial express aplication

import express from "express";
import complaintRouter from "./routes/complaints.js";

const app = express();

app.use(express.json());
app.use("/submit", complaintRouter);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if (error) console.error(`Error: ${error.message}`);
    else console.log(`Server is running on: http://localhost:${port}`);
});