const express = require("express");
const cors = require("cors");
const port = 4000;

const app = express();

app.use(cors());

app.use(express.json());

const controller = require("./controller");

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/complimentAll", controller.getAllCompliment);
app.get("/api/fortuneAll", controller.getAllFortune);
app.post("/api/compliment", controller.addCompliment);
app.post("/api/fortune", controller.addFortune);
app.delete("/api/compliment", controller.deleteCompliment);
app.delete("/api/fortune", controller.deleteFortune);
app.put("/api/compliment", controller.updateCompliment);
app.put("/api/fortune", controller.updateFortune);

app.listen(port, () => console.log(`Server running on ${port}`));
