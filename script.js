  $(document).ready(function(){
    list.forEach(note => {

        var rotationNum=Math.round((Math.random()*360)+1);
        var rotation="rotate("+rotationNum+"deg)";
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh / 10)-20;

        document.getElementsByTagName('body')[0].innerHTML += '<div onclick="' + (note.ot === 'ט' ? 'vote()' : '') + '" class="voting-note ' + (note.ot === 'ט' ? 'ben-gvir' : 'not-ben-gvir') + '" style="top:' + posy + 'px;left:' + posx + 'px; transform:' + rotation + ';">' + 
        '<div class="ot">' + note.ot + '</div>' + 
        '<div class="des">' + note.des + '</div>' +
        '</div>';
    });
  });

  $(document).ready(function(){
    $( ".not-ben-gvir" ).mousemove(function(e) {
      closestEdge(e, this);
    });  
  });

  function moveDiv(mouse, edge, elem) {
    const width = $(elem).outerWidth();
    const height = $(elem).outerHeight();
    
    switch (edge) {
      case "left":
        $(elem).css({
            left: mouse.pageX + 15
        });
        break;
      case "right":
        $(elem).css({
            left: mouse.pageX - width - 30
        });
        break;
      case "top":
        $(elem).css({
            top: mouse.pageY + 15
        });
        break;
      case "bottom":
        $(elem).css({
            top: mouse.pageY - height - 30
        });
        break;
    }
  }
  
  function closestEdge(mouse, elem) {
    let elemBounding = elem.getBoundingClientRect();
  
    let elementLeftEdge = elemBounding.left;
    let elementTopEdge = elemBounding.top;
    let elementRightEdge = elemBounding.right;
    let elementBottomEdge = elemBounding.bottom;
  
    let mouseX = mouse.pageX;
    let mouseY = mouse.pageY;
  
    let topEdgeDist = Math.abs(elementTopEdge - mouseY);
    let bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    let leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    let rightEdgeDist = Math.abs(elementRightEdge - mouseX);
  
    let min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
  
    let position;
  
    switch (min) {
      case leftEdgeDist:
        position = "left";
        break;
      case rightEdgeDist:
        position = "right";
        break;
      case topEdgeDist:
        position = "top";
        break;
      case bottomEdgeDist:
        position = "bottom";
        break;
    }
    
    moveDiv(mouse, position, elem);
  }



  var ww = $("body").width();
  var wh = $("body").height() / 5;
  $(".not-ben-gvir").each(function(i){
      var rotationNum=Math.round((Math.random()*360)+1);
      var rotation="rotate("+rotationNum+"deg)";
      var posx = Math.round(Math.random() * ww)-20;
      var posy = Math.round(Math.random() * wh / 10)-20;
      $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
  });

function vote() {
    alert();
}