var lol = function() {
  console.log("lol");
}

document.body.addEventListener('click', lol, true);

$("#picture").faceDetection({
  complete: function complete(faces) {
    console.log(faces);
    for (var i = 0; i < faces.length; i++) {
      $("<div>", {
        "class": "face",
        "css": {
          "position": "absolute",
          "left": faces[i].x * faces[i].scaleX + "px",
          "top": faces[i].y * faces[i].scaleY + "px",
          "width": faces[i].width * faces[i].scaleX + "px",
          "height": faces[i].height * faces[i].scaleY + "px"
        }
      }).insertAfter(this);
    }
  }
});
