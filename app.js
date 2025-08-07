// intitial express aplication

import express from "express";

const app = express();


const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if (error) console.error(`Error: ${error.message}`);
    else console.log(`Server is running on: http://localhost:${port}`);
});