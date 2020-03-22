// Returns random value in negative or positive range value
const randomNumber = (range = 0) =>
    Math.round(Math.random() * range) * (Math.random() < 0.5 ? -1 : 1);

export default randomNumber;
