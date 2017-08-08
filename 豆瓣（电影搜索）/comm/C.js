$('button').click(function(){
	
	let val = $('input').val();
	let num = 0;
	Model(val,num);
});
window.onhashchange = function () {
	if (location.hash) {
		let s = location.hash.split('=')[1]*8;
		let val = $('input').val();
		index = s/8;
		if (localStorage.getItem('data'+index)) {
			let t = template('temp',JSON.parse(localStorage.getItem('data'+index)));
			$('#app').html(t);
		} else {
			Model(val,s);
		}
	} else {
		location.hash='hash=0';
		let val = $('input').val();
		index=0;
		if (localStorage.getItem('data'+index)) {
			let t = template('temp',JSON.parse(localStorage.getItem('data'+index)));
			$('#app').html(t);
		} else {
			Model(val,0);
		}
	}
}