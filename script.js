let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function getArticleLessString(input){
	let words=input.split(" ");
	let nonArtileWords=words.filter(
		(word)=>{
			let smallCaseWord=word.toLowerCase();
			if(smallCaseWord==="a",smallCaseWord==="an",smallCaseWord==="the")
				return false;
			else
				return true;
		}
	);
		return nonArtileWords.join(" ");
}
let arr1=[];
hashMap={}
for(let i=0;i<arr.length;i++){
	let articleLessString=getArticleLessString(arr[i]);
	hashMap[articleLessString]=arr[i];
	arr1.push(articleLessString);
}

arr1.sort();
console.log(arr1);
let outputList=[];
 arr1.forEach(element => {
	outputList.push=hashMap.element;
 });
 console.log(outputList);
