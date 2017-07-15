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

function reshape1DTo2D(arr, shape){
	var result = [];
    console.log(arr);
	while(arr.length) result.push(arr.splice(0, shape));
	return result;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}