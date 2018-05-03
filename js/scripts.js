/* global variable!!
 * hacky fix for first option click. */
var click = 0;

function killTheOption(name) {
  document.getElementById(name).style.display = "none";
}

function toggleOptions(name) {
  var options = ['projects', 'blog', 'code'];
  var x = document.getElementById(name);

  // if its not being showed, show it. Vise versa.
  if (x.style.display === "none" || click === 0) {
    console.log("if");
    x.style.display = "block";
    var a = options;
    a.splice(a.indexOf(name), 1);
    a.map(killTheOption);
  } else {
    console.log("else");
    options.map(killTheOption)
  }
  console.log(click);
  click = click + 1;

}

function toggleBlog(name) {
  var options = ['b1', 'b2'];
  var x = document.getElementById(name);

  // if its not being showed, show it. Vise versa.
  if (x.style.display === "none" || click === 0) {
    console.log("if");
    x.style.display = "block";
    var a = options;
    a.splice(a.indexOf(name), 1);
    a.map(killTheOption);
  } else {
    console.log("else");
    options.map(killTheOption)
  }
  console.log(click);
  click = click + 1;

}

function update() {
  document.write(new Date(document.lastModified));
}
