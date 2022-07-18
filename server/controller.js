const reasons = require('./db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    // add getFortune feature including 5 possible fortunes
    getFortune: (req, res) => {
        const fortunes = ["You will smile in the next 24 hours.", "You will brush your teeth by tomorrow.", "You will be a better version of yourself in the next 3 years with dicipline.", "Now is the time to be selfless, make someone else smile today.", "You are a light in the world, remember to shine your light brightly and share it with others."];
      
        // choose random compliment
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];
      
        res.status(200).send(randomFortune);
   },
      //add Get Motivated Button
   getMotivation: (req, res) => {
    const motivations = ["You are more than what you’ve been through! Don’t stop now.",  "Mistakes are what make us great. We learn from them and grow from them. So make mistakes often and keep growing!", "No matter what it looks like, the world has not ended so you still have time to do what you know in your heart you need and want to do. And if you don’t quite know what that is, it’s still ok! It’s not the end, you have time. And if it was the end, who would care anyhow? Keep going."];
  
    // choose random motivational message 
    let randomIndex3 = Math.floor(Math.random() * motivations.length);
    let randomMotivation = motivations[randomIndex3];
  
    res.status(200).send(randomMotivation);
   },

   getHelp: (req,res) => {
    let getHelpInfo = "211 connects you with confidential assistance regarding any concern you may have be it mental health, or needing to find resources that can help you with your bills. Dial 2-1-1 or Visit https://www.211.org for more information and to get the help you need."

    res.status(200).send(getHelpInfo)
   },
    
   getCoding: (req,res) => {
    let getCodingInfo = ["1. Code Academy visit https://www.codecademy.com", " 2. Free Code Camp visit https://www.freecodecamp.org", " 3. Resources for Developers by Developers: Mdn visit https://developer.mozilla.org/en-US/"]
    res.status(200).send(getCodingInfo)
   },

   //add get all reasons
   getAllReasons: (req,res) => {
    res.status(200).send(reasons)
   },
   //add add reason (post) button 
   addReason: (req,res) => {
    const {reason} = req.body
   let newReason =  {reason}
    reasons.push(newReason)
    res.status(200).send(reasons)
   },
   //add update reason(put)
   updateReason: (req, res) => {
    let {id} = req.params
    let {type} = req.body
   res.status(200).send(reasons)
},
//add delete button
   deleteReason: (req, res) => {
    let {id} = req.params
    let index = reasons.findIndex(reason => reason.id === +id)
    reasons.splice(index,1)
   res.status(200).send(reasons)
}
}