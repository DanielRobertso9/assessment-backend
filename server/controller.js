const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
  "You bring out the best in other people.",
  "You're a candle in the darkness.",
  "You're like a breath of fresh air",
  "You're someone's reason to smile.",
  "You're strong.",
];
const fortunes = [
  "Adventure can be real happiness.",
  "Courtesy is contagious.",
  "Dont just think, act!",
  "All your hard work will soon pay off.",
  "Believe it can be done.",
  "Courtesy is contagious.",
  "Failure is the path of lease persistence.",
  "Go take a rest; you deserve it.",
  "Have a beautiful day.",
];

module.exports = {
  getCompliment: (req, res) => {
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortunes = fortunes[randomIndex];

    res.status(200).send(randomFortunes);
  },

  getAllCompliment: (req, res) => {
    res.status(200).send(compliments);
  },

  getAllFortune: (req, res) => {
    res.status(200).send(fortunes);
  },

  addCompliment: (req, res) => {
    compliments.push(req.body.input);

    res.status(200).send(compliments);
  },

  addFortune: (req, res) => {
    fortunes.push(req.body.input);

    res.status(200).send(fortunes);
  },

  deleteCompliment: (req, res) => {
    compliments.pop();

    res.status(200).send(compliments);
  },

  deleteFortune: (req, res) => {
    fortunes.pop();

    res.status(200).send(fortunes);
  },

  updateCompliment: (req, res) => {
    console.log(req.body);

    compliments.splice(req.body.id, 1, req.body.input);

    res.status(200).send(compliments);
  },

  updateFortune: (req, res) => {
    console.log(req.body);

    fortunes.splice(req.body.id, 1, req.body.input);

    res.status(200).send(fortunes);
  },
};
