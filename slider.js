$(".container").on("click", "img", function () {
  var src = $(this).attr("src");
  console.log(src);
  $(".target1").attr("src", src);
  $(".target1").attr("data-target", $(this).attr("id"));
  $(".background").show();
  $(".background").css("display", "flex");
  $(".target").show();
});

var imgsrc = [];
var images = $(".container img");
for (var i = 0; i < images.length; i++) {
  imgsrc.push($(images[i]).attr("src"));
}

$("button").on("click", function (e) {
  var num = Number($(".target1").attr("data-target"));
  if ($(this).attr("class") == "next") {
    if (num >= imgsrc.length - 1) {
      $(".target1").attr("data-target", 0);
      num = 0;
    }
    $(".target1").attr("data-target", num + 1);
    $(".target1").attr("src", imgsrc[num + 1]);
  } else {
    if ($(".target1").attr("data-target") < 0) {
      $(".target1").attr("src", imgsrc.length - 1);
      num = imgsrc.length - 1;
    }
    $(".target1").attr("data-target", num - 1);
    $(".target1").attr("src", imgsrc[num - 1]);
  }
});

$(".background").on("click", function (e) {
  if (e.target == this) {
    $(this).hide();
    $(".target").hide();
    console.log(this);
  }
});
