//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let words= touristSpots.split(" ");
	words.filter((word)=>{
		let smallCaseWord=word.toLowerCase(word);
		if(smallCaseWord===a || smallCaseWord===an || smallCaseWord === the)
				return false;
		else
			return true;
	}
);