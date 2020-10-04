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

window.addEventListener('DOMContentLoaded', () => {
	$('[data-load]').classList.add('page-is-load')
	setTimeout( () => {
		document.body.removeChild($('[data-load]'))
	}, 2000)
})


$('#toggle-top').onclick = () => {
	$('#toggle-top').classList.toggle('is-active-toggle');
	$('.nav-container').classList.toggle('is-active-nav')
}

window.onclick = (e) => {
	if(e.target != $('#toggle-top') ){
		$('#toggle-top').classList.remove('is-active-toggle');
		$('.nav-container').classList.remove('is-active-nav')
	}
}
