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
}