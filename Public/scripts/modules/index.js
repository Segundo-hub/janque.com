const $ = (e) => {
	if(e == window){
		return window;
	}
	if(e == document){
		return document
	}
	if(typeof e == 'string'){
		let url = document.querySelector(e);
		return url;
	}
	else{
		throw new Error(`Your selector ${e} is not avilble im HTMLDocumnt`)
	}
}


export { $ }