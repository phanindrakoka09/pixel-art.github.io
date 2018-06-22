// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height , width , color ;

$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width= $('#inputWidth').val();
	makeGrid(height,width);
	//console.log('height:'+height +' '+ 'width:'+width);
function resetCanvas() {
	$('#pixelCanvas').empty(); 
}

})

function makeGrid(x ,y) {
	$('tr').remove();

	for (var i=1; i<= x; i++){
		$('#pixelCanvas').append('<tr id=table'+i+'></tr>');
		for (var j=1; j<=y; j++){
			$('#table'+i).append('<td></td>');
		}
	}


	//adding a color to cell

	$('td').click(function addColor(){
		color =$('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		}else {
			$(this).attr('style', 'background-color:'+ color);
		}


	})


}
