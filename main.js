var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
        blockobject = img;
        blockobject.scaleToWidth(1000);
        blockobject.scaleToHeight(600);
        blockobject.set({
            top: 0,
            left: 0
        });
        canvas.add(blockobject)
    })
	
}

function playSound(){
	x.play()
}
