let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let words = touristSpots.join(" "); // Used join to create a string from the array
let articlelessWords = words.split(" ").filter(word => {
    return !(word === 'a' || word === 'an' || word === 'the' ||
    word === 'A' || word === 'An' || word === 'The');
});
console.log(articlelessWords);