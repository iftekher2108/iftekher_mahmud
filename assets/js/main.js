$(document).ready(function () {
  localStorage.setItem("theme", "dark");
  var e = $(".intro");
  setTimeout(function () {
    e.addClass("animate__hinge");
  }, 3e3),
    setTimeout(function () {
      e.addClass("hide");
    }, 5300),
    new Typed(".skill-group .skill-base h3", {
      strings: [
        "Website Developer",
        "WP website dev",
        "Problem Solver",
        "PHP developer",
        "Laravel developer",
        "Vue developer",
        "Flutter developer",
      ],
      typeSpeed: 60,
      backDelay: 500,
      backSpeed: 60,
      loop: !0,
    }),
    $("img").on("mousedown", function (e) {
      e.preventDefault();
    });
  var t = $("body > footer > div > p > span"),
    a = new Date().getFullYear();
  t.text(a),
    $(".theme-btn input").change(function () {
      $(this).prop("checked")
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light"),
        "dark" === localStorage.getItem("theme")
          ? $("html").attr("data-bs-theme", "dark")
          : $("html").attr("data-bs-theme", "light");
    }),
    "dark" === localStorage.getItem("theme")
      ? ($("html").attr("data-bs-theme", "dark"),
        $(".theme-btn input").prop("checked", !0))
      : ($("html").attr("data-bs-theme", "light"),
        $(".theme-btn input").prop("checked", !1)),
    $.ripple(".btn", {
      debug: !1,
      on: "mousedown",
      opacity: 0.4,
      color: "auto",
      multi: !0,
      duration: 0.7,
      rate: function (e) {
        return e;
      },
      easing: "linear",
    });
}),
  $(document).on("contextmenu", function (e) {
    e.preventDefault();
  });
