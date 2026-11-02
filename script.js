$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h2").css("letter-spacing", "0.3px");

  var headlines = [
    "Front-end developer in training",
    "Learning jQuery step by step",
    "Building interactive web pages"
  ];
  var textIndex = 0;
  $("#changeText").on("click", function () {
    textIndex = (textIndex + 1) % headlines.length;
    $("#headline").text(headlines[textIndex]);
  });

  $("#changeHtml").on("click", function () {
    $("#headline").html("Aspiring <em>web developer</em> at <strong>AITU</strong>");
  });

  var highlighted = false;
  $("#styleBtn").on("click", function () {
    highlighted = !highlighted;
    if (highlighted) {
      $("#name").css({ color: "#2f5bea", "text-decoration": "underline", "letter-spacing": "2px" });
      $(".headline").css("font-size", "1.5rem");
    } else {
      $("#name").css({ color: "", "text-decoration": "none", "letter-spacing": "normal" });
      $(".headline").css("font-size", "1.2rem");
    }
  });

  var themes = {
    light: { "--bg": "#eef2f6", "--panel": "#ffffff", "--ink": "#172033", "--muted": "#5b6577", "--line": "#d5dce8" },
    dark:  { "--bg": "#10151f", "--panel": "#1a2232", "--ink": "#e8ecf3", "--muted": "#9aa6bb", "--line": "#2c3850" }
  };
  function applyTheme(name) {
    $(":root").css(themes[name]);
  }
  $("#lightBtn").on("click", function () { applyTheme("light"); });
  $("#darkBtn").on("click", function () { applyTheme("dark"); });

  $("#hideBtn").on("click", function () { $("#status, #funFacts").hide(400); });
  $("#showBtn").on("click", function () { $("#status, #funFacts").show(400); });
  $("#toggleBtn").on("click", function () { $("#status, #funFacts").toggle(400); });

  $("#fadeInBtn").on("click", function () { $(".gallery-img").fadeIn(600); });
  $("#fadeOutBtn").on("click", function () { $(".gallery-img").fadeOut(600); });
  $("#fadeToggleBtn").on("click", function () { $(".gallery-img").fadeToggle(600); });

  $(".accordion-head").on("click keypress", function (e) {
    if (e.type === "keypress" && e.key !== "Enter") return;
    $(this).next(".accordion-body").slideToggle(300);
  });
  $("#slideDownBtn").on("click", function () { $(".accordion-body").slideDown(300); });
  $("#slideUpBtn").on("click", function () { $(".accordion-body").slideUp(300); });
  $("#slideToggleBtn").on("click", function () { $(".accordion-body").slideToggle(300); });

  function readSkill() {
    var value = $.trim($("#skillInput").val());
    if (value === "") {
      $("#skillMsg").addClass("error").text("Skill cannot be empty. Type a skill first.");
      return null;
    }
    $("#skillMsg").removeClass("error").text("");
    return value;
  }

  $("#addSkill").on("click", function () {
    var skill = readSkill();
    if (skill) {
      $("#skillList").append($("<li>").text(skill)); // .text() keeps input safe from HTML injection
      $("#skillInput").val("").focus();
    }
  });

  $("#prependSkill").on("click", function () {
    var skill = readSkill();
    if (skill) {
      $("#skillList").prepend($("<li>").text(skill));
      $("#skillInput").val("").focus();
    }
  });

  $("#removeSkill").on("click", function () {
    var $last = $("#skillList li:last");
    if ($last.length) {
      $last.remove();
      $("#skillMsg").removeClass("error").text("");
    } else {
      $("#skillMsg").addClass("error").text("The list is already empty.");
    }
  });

  $("#skillInput").on("keypress", function (e) {
    if (e.key === "Enter") $("#addSkill").trigger("click");
  });

  var links = [
    { href: "https://github.com", text: "GitHub" },
    { href: "https://www.linkedin.com", text: "LinkedIn" },
    { href: "https://astanait.edu.kz", text: "AITU Website" }
  ];
  var linkIndex = 0;
  $("#changeLink").on("click", function () {
    linkIndex = (linkIndex + 1) % links.length;
    $("#socialLink")
      .attr("href", links[linkIndex].href)
      .text(links[linkIndex].text);
    $("#linkHref").text($("#socialLink").attr("href"));
  });

  $("#nameInput").on("input", function () {
    var value = $(this).val();
    $("#liveName").text(value === "" ? "-" : value);
  });
  $("#emailInput").on("input", function () {
    var value = $(this).val();
    $("#liveEmail").text(value === "" ? "-" : value);
  });

  var barsFilled = false;
  $("#animateSkills").on("click", function () {
    var $btn = $(this);
    $btn.prop("disabled", true);

    $(".bar").each(function (i) {
      var target = barsFilled ? 0 : $(this).data("level") + "%";
      $(this)
        .stop(true)
        .animate({ width: target }, 1000 + i * 300, function () {
          if (i === $(".bar").length - 1) $btn.prop("disabled", false);
        });
    });

    barsFilled = !barsFilled;
  });
});