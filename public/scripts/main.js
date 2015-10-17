$(document).ready(function() {
  loadInteractive();
});


function loadInteractive() {
  var srcs    = generateSrcs(),
      randImg = srcs[Math.floor(Math.random() * srcs.length)];

  $(".main-display").attr("src", randImg);

  generateThumbList(srcs);
  addListeners(srcs);
};

function generateSrcs() {
  var imgFolder = "images/",
      thumbs    = [ "poster_1.png", "poster_2.png", "poster_3.png" ]; // list image file names here

  var thumbsrcs = (function() {
    var srcArr      = [],
        numOfThumbs = thumbs.length;

    for (var i = 0; i < numOfThumbs; i++) {
      srcArr.push(imgFolder + thumbs[i]);
    }

    return srcArr;
  })();

  return thumbsrcs;
};

function generateThumbList(srcs) {
  var num = srcs.length;

  for (var i = 0; i < num; i++) {
    var $li  = $("<li>"),
        $img = $("<img style='width: calc(90% / " + (num) + ")' class='thumbs thumb-" + (i + 1) + "' src='" + srcs[i] + "'>");

    $(".thumb-list").append($li);
    $($li).append($img);
  }
};

function addListeners(srcs) {
  $(".thumb-1").on("click", function() {
    animate(srcs, true, srcs[0]);
  });

  $(".thumb-2").on("click", function() {
    animate(srcs, true, srcs[1]);
  });

  $(".thumb-3").on("click", function() {
    animate(srcs, true, srcs[2]);
  });

  $(".main-display").on("click", function() {
      animate(srcs, false, null);
  });
};

function animate(srcs, thumbClicked, src) {
  $(".main-display").addClass("animate");
  setTimeout(function() {
    var num      = srcs.length,
        currSrc  = $(".main-display").attr("src"),
        srcIndex = parseInt((currSrc.split("").reverse()[4]) - 1); // find src number

    if (!thumbClicked) {
      if (currSrc === srcs[num - 1]) { // if current src is the same as last src
        $(".main-display").attr("src", srcs[0]);
      } else {
        $(".main-display").attr("src", srcs[srcIndex + 1]);
      };
    } else {
      $(".main-display").attr("src", src);
    };
    $(".main-display").removeClass("animate");

  }, 350);
}
