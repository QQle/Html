var images = document.querySelectorAll('.smallimg')
const BIGimage = document.querySelector('.bigimg');
var sliderContainer = document.querySelectorAll('.smallimg');
var sliderPrev = document.getElementById('prev');
var sliderNext = document.getElementById('next');

images.forEach(function (image) {
	image.addEventListener('click', function (event) {
		setBigImage(event);
	});
});

function setBigImage(event) {
	const clicked = event.target.src;
	let bigImage = document.querySelector('.bigimg');
	event.target.src = bigImage.src;
	bigImage.src = clicked;

}
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btnCon = document.getElementById("conection");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
btnCon.onclick = function(){
    if(inputName.value =='' | inputPhone.value =='')
    alert('Поля "Имя" и "Номер телефона" не должны быть пустым');
    else   modal.style.display = "none"
    return false;
  
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
inputPhone.oninput = function() {
    this.value = this.value.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}
	
  inputName.oninput = function() {
    this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё]/g,'');
}



var sliderIndex = 0;
const sliderLength = document.querySelectorAll('.smallimg').length;

function position(index) {

	BIGimage.src = sliderContainer[index].src;
}

sliderNext.addEventListener("click", () => {
	sliderIndex = (sliderIndex + 1) % sliderLength;
	position(sliderIndex);

});
sliderPrev.addEventListener("click", () => {
	sliderIndex = (sliderIndex - 1 + sliderLength) % sliderLength;
	position(sliderIndex);

});