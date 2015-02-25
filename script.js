$(document).ready(function(){
	var turn = 0;
	$("td").on('click', function() {
		var tile = $(this);
		if(turn==0){
			turn = 1;
			tile.addClass("X")
		} else {
			turn = 0;
			tile.addClass("O")
		}
		tile.off('click')

		if (winner("X")) {
		  $('#win span').text("X wins, sorry O! Rematch?");
		} else if (winner("O")) {
		  $('#win span').text("O wins, sorry X! Rematch");
		}
	});
	$('#win span').click(function(){
			location.reload();
	});
});




wins=[ 
	[1,2,3], 
	[4,5,6], 
	[7,8,9], 
	[1,4,7], 
	[2,5,8], 
	[3,6,9], 
	[1,5,9], 
	[3,5,7]
]

function getCell(n) {
  return $("#"+n)
}

function winner(player) {
	for(var i=0; i < wins.length; i++) {
		var win = wins[i]

		var allOccupied = true
		for (var j=0; j < win.length; j++) {
			var cellNum = win[j]
			var cell = getCell(cellNum)
			if (!cell.hasClass(player)){
				allOccupied = false
			}
		}
		if (allOccupied) return true
	}

	return false
}







