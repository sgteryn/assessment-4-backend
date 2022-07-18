const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json());


// add require getFortune 
const { getCompliment,
        getFortune,
        getMotivation,
        getHelp, 
        getCoding,
        addReason,
        deleteReason,
        updateReason,
        getAllReasons
    } = require('./controller')
 


app.get("/api/compliment", getCompliment);
//add app.get getFortune 
app.get("/api/fortune", getFortune);
//add app.get getMotivated
app.get("/api/motivation", getMotivation)
//add app.get getHelp
app.get("/api/gethelp", getHelp)
///get coding
app.get("/api/getcoding", getCoding)
//add get reasons
app.get("/api/reasons", getAllReasons)
// add post 
app.post("/api/reasons", addReason)
// add  put, update 
app.put("/api/reasons/:id", updateReason)
// add delete 
app.delete("/api/reasons/:id", deleteReason)



app.listen(4000, () => console.log("Server running on 4000"));
