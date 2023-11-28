let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function sortMethod(words){
	let articlelessWords = words.split(" ").filter(word => {
	    return !(word === 'a' || word === 'an' || word === 'the' ||
	    word === 'A' || word === 'An' || word === 'The');
	});
	return articlelessWords.join(" ")

}

let hashMap={};
let arr=[];
for(let i=0;i<touristSpots.length;i++){
	let key=sortMethod(touristSpots[i]);
    hashMap[key]=touristSpots[i];
	arr.push(key);
}
arr.sort();
let outputList=[];
arr.forEach((output)=>{
    outputList.push(hashMap[output])
})
                    
    console.log(outputList)