var jobs = ["software engineer", "senior student @ Cal", "classical music fan", "hiking enthusiast", "traveller"];
var articles = ["", "", "", "", ""];
var index;

function changeJob() {
  prev = index;
  if (index == jobs.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  if (articles[prev] != articles[index]) {
    htmlStr = articles[index] + " <span id='job' class='bold'>" + jobs[index] +".</span>";
    target = "#jobtitle";
  } else {
    htmlStr = "<span class='bold'>" + jobs[index] +".</span>"
    target = "#job"
  }

  $(target).fadeOut('slow',function(){
    $(this).html(htmlStr)
  }).fadeIn("slow");

  setTimeout(changeJob, 2000);
}

$(document).ready(function() {
  index = 0;
  htmlStr = articles[index] + " <span id='job' class='bold'>" + jobs[index] +".</span>";
  target = "#jobtitle";
  $(target).html(htmlStr);

  setTimeout(changeJob, 2000);
});
