window.onload = function () {
  var collapse = document.getElementById("nav-collapse");
  var nav = document.getElementById("nav");
  let openIcon = document.querySelector(".open-menu");
  let closeIcon = document.querySelector(".close-menu");

  //toggle class utility function
  function classToggle(element, tClass) {
    var classes = element.className,
      pattern = new RegExp(tClass);
    var hasClass = pattern.test(classes);

    //toggle the class
    classes = hasClass ? classes.replace(pattern, "") : classes + " " + tClass;
    element.className = classes.trim();
  }

  classToggle(nav, "hide");
  classToggle(collapse, "active");

  collapse.onclick = function () {
    classToggle(nav, "hide");
    classToggle(openIcon, "hide");
    classToggle(closeIcon, "hide");
    return false;
  };
};
