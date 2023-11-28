let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticles(name) {
    const articles = ['a', 'an', 'the'];
    const words = name.split(' ');

    // Filter out articles from the name
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
}

let hashMap = {};
let arr = [];

for (let i = 0; i < touristSpots.length; i++) {
    let key = removeArticles(touristSpots[i]);
    hashMap[key] = touristSpots[i];
    arr.push(key);
}

// Sort the keys without articles
arr.sort();

let outputList = [];
arr.forEach(output => {
    outputList.push(hashMap[output]);
});

console.log(outputList);
