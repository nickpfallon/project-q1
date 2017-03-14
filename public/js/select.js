$("document").ready(function() {
  $("#ingredient").on("submit", function(event) {
    console.log("hello")
    getRecipes()
  })
})

var food = window.location.search.split("=")[1]

function getRecipes() {
  var url = "https://api.edamam.com/search?q="
    url += (food) + "&app_id=da1c76bb&app_key=ea9691b0b8fa631d00f86f74276ce140&from=0&to=29"
    $.get(url)
      .then(function(data) {
      var image = ""
      var title = ""
        for (var i = 0; i < 29; i++) {
          image = data.hits[i].recipe.image
          title = data.hits[i].recipe.label
          $("#main").append("<img src=" + image + ">")
          $("#main").append("<h3>" + title + "</h3>")
        }
    })
}
getRecipes()
