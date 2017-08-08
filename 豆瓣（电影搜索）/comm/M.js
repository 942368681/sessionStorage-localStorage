/*
	https://api.douban.com/v2/movie/search?q=战狼2&start=0&callback=fn 
*/
let index=0;
function Model(search,num){
	$.ajax({
		url:'https://api.douban.com/v2/movie/search?callback=?',
		dataType:'jsonp',
		data:{
			q:search,
			start:num,
			count:8
		},
		success:function(data){
			console.log(data.subjects);
			let t = template('temp',data);
			$('#app').html(t);
			if (index) {
				$('#ul').find('li').eq(index).addClass('active');
			}else {
				$('#ul').find('li').eq(0).addClass('active');
			}
			saveData(data);
			fn();
		}
	});
}
function fn () {
	$('#ul').click(function (ev) {
		$('#ul').find('li').removeClass('active');
		$(ev.target).addClass('active');
		val = $('input').val();
		num = $(ev.target).html()*8;
		index = $(ev.target).html();
		location.hash='page='+index;
	})
}
function saveData (data) {
	if (!localStorage.getItem('data'+index)) {
		localStorage.setItem('data'+index,JSON.stringify(data));
	} 
}

