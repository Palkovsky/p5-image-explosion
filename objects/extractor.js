var Extractor = function(){


	/*
		Extracts all rectangles of given size from pixel array of the image.
		kernel_size is vector of width and height of given rectangle.
	*/
	this.extractBoxes = function(img, kernel_size){
		img.loadPixels();
		var boxes = [];
		for(var x = 0; x < img.width; x+=kernel_size.x){
			for(var y = 0; y < img.height; y+=kernel_size.y){
				var width = (x + kernel_size.x > img.width) ? img.width - x : kernel_size.x;
				var height = (y + kernel_size.y > img.height) ? img.height - y : kernel_size.y;
				boxes.push(img.get(x, y, width, height));
			}
		}
		return boxes;
	}

	/*
		Picks random color from each box.
	*/
	this.getColors = function(boxes){
		var colors = [];
		for(var i = 0; i < boxes.length; i++){
			var box = boxes[i];
			box.loadPixels();
			var randomPixel = floor(random(box.width * box.height)) * 4;
			var color = [box.pixels[randomPixel], box.pixels[randomPixel + 1],
					box.pixels[randomPixel + 2], box.pixels[randomPixel + 3]];
			if(color[3] >= 200){//prevent colors with high transparency
				colors.push(color);
			}
		}
		return colors;
	}

	/*
		Find kernel size that usage of which will give us boxes_number of boxes.

		Comment: It needs fixing. It just aproximates rect dimension to square.
	*/
	this.calculateKernelSize = function(img, boxes_number){
		var dim = round(sqrt((img.width * img.height) / boxes_number));
		return createVector(dim, dim);
	}
}