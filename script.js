let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Queen', 'Pink Floyd'];

// Function to remove articles from band names
function removeArticles(name) {
    // Regular expression to match articles at the beginning of a band name
    const articleRegex = /^(a|an|the)\s/i;
    // Remove articles and return the modified name
    return name.replace(articleRegex, '');
}

// Sorting the band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Output the sorted band names inside ul id='band' tag using li tag
document.getElementById('band').innerHTML = bandNames.map(name => `<li>${name}</li>`).join('');
