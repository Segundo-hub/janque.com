const $ = (e) => {
	if(e == window){
		return window;
	}
	if(e == document){
		return document
	}
	if(typeof e == 'string' && !/\s/.test(e) == true){
		let url = document.querySelector(e);
		return url;
	}
	if(typeof e == 'string' && /\s/.test(e) == true){
		let url = document.querySelectorAll(e);
		let node = [];
		url.forEach((element, index) => {
			node.push(element);
		})
		return node;
	}
	else{
		throw new Error(`Your selector ${e} is not avilble im HTMLDocumnt`)
	}
}


$('#toggle-top').onclick = () => {
	$('#toggle-top').classList.toggle('is-active-toggle');
	$('.nav-container').classList.toggle('is-active-nav')
}


