let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function sortMethod(words){
	let articlelessWords = words.toLowerCase().split(" ").filter(word => {
	   if(word === 'a' || word === 'an' || word === 'the')
			return false;
		else
			return true;
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
                    
console.log(outputList);
