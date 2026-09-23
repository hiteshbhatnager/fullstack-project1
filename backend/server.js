import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

const data = [
    {
        id: 1,
        content: "data set one"
    },
    {
        id: 2,
        content: "data set two"
    },
    {
        id: 3,
        content: "data set three"
    },
    {
        id: 4,
        content: "data set four"
    },
    {
        id: 5,
        content: "data set five"
    }
]

app.get("/", (req, res) => {
    res.send("server is start")
})

app.get("/api/data", (req, res) => {
    res.send(data)
})

app.get("/data", (req, res) => {
    res.send()
})

app.listen(PORT, () => {
    console.log(`server is live at localhost${PORT}`)
})