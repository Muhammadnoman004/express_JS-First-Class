const express = require("express");
const app = express();
app.listen(5000);

const AllData = [
    {
        FullName: "Muhammad Noman",
        F_Name: "Muhammad Shamim",
        Email: "nomanshamim@gmail.com",
        id: 1
    },
    {
        FullName: "Muhammad Huzaifa",
        F_Name: "Anwar Saeed",
        Email: "huzaifakhan@gmail.com",
        id: 2
    },
    {
        FullName: "Jamsheed Khan",
        F_Name: "Jamsheeeeed",
        Email: "jamsheed@gmail.com",
        id: 3
    }
]

app.use(express.json());
app.get('/', (req, res) => {
    console.log("Server is running...");
    res.send(AllData);
})
app.post('/', (req, res) => {
    console.log("Server Chal raha hai", req.body);
    AllData.push(req.body);
})