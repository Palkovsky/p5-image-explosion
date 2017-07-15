function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getColor(r, g, b){
	return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}