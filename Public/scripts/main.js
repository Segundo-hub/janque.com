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

window.onload = () => {
	$('[data-load]').classList.add('page-is-load')
	setTimeout( () => {
		document.body.removeChild($('[data-load]'))
	}, 2000)
	loaderImgView();
}


$('#toggle-top').onclick = () => {
	$('#toggle-top').classList.toggle('is-active-toggle');
	$('.nav-container').classList.toggle('is-active-nav')
}

//************ MODAL BANNERS ***********************//

$('.img-banner-content ').forEach( (element, index) => {
	element.onclick = () => {
		$('#modal').classList.add('modal-img-view')
		$('#src').src = element.firstElementChild.src;
	}
})




$('[data-close-modal] ')[0].onclick = () => {
	$('#modal').classList.remove('modal-img-view')

}

//LOADER IMG VIEW IN BANNER SECTION
/*
function loaderImgView () {
	let path = './Public/resources/img/gallery/';
	let imgOrigin = $('#img-load');
	let arr = [`${path}option1.jpg`,`${path}option2.jpg`,`${path}item5.jpg`,`${path}item0.jpg`]
	this.ready = () => {
		setTimeout( () => {
			imgOrigin.src = arr[0]
			console.log(src)
		}, 0)
		setTimeout( () => {
			imgOrigin.src = arr[1]
			console.log($('#img-load'))
		}, 2000)
		setTimeout( () => {
			imgOrigin.src = arr[2]
		}, 4000)
		setTimeout( () => {
			imgOrigin.src = arr[3]
		}, 6000)
	};
	console.log($('#img-load'))
	setInterval(ready, 8000);
}*/

function loaderImgView () {
	let arr = $('.load-container');
	this.ready = () => {
		setTimeout( () => {
			arr.style.cssText = "margin-left: 0;"
		}, 0)
		setTimeout( () => {
			arr.style.cssText = "margin-left: -100%;"
		}, 3000)
		setTimeout( () => {
			arr.style.cssText = "margin-left: -200%;"
		}, 6000)
		setTimeout( () => {
			arr.style.cssText = "margin-left: -300%;"
		}, 9000)
		setTimeout( () => {
			arr.style.cssText = "margin-left: -400%;"
		}, 12000)
	};
	setInterval(ready, 15000);

}

$(document).onclick = (e) => {
	let cout = 0;
	let arr = $('.load-container')
	let total = $('.img-load-content ')
	if(e.target == $('[data-prev]')){
		clearInterval(ready)
		if(cout <= total.lenght){
			cout+100
			arr.style.cssText = `margin-left: ${cout}%`
			console.log(cout)
		}
	}
	if(e.target == $('[data-next]')){
		clearInterval(ready)
		cout-100
		if(cout >= total.lenght){
			cout = 0;
		}
		arr.style.cssText = `margin-left: ${cout}%`
		console.log(cout)
	}
}

console.log($('[data-nav-center]'))