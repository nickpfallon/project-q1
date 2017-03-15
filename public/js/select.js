$("document").ready(function() {
  $("#ingredient").on("submit", function(event) {
    console.log("hello")
    getRecipes()
  })
})

var food = window.location.search.split("=")[1]

function getRecipes() {
  var url = "https://api.edamam.com/search?q="
    url += (food) + "&app_id=da1c76bb&app_key=ea9691b0b8fa631d00f86f74276ce140&from=0&to=99"
    $.get(url)
      .then(function(data) {
      image = ""
      title = ""
      ingredients = []
      imageArray = []
      titleArray = []
      urlArray = []
      var ingredientsList = []
        for (var i = 0; i < 30; i++) {
          image = data.hits[i].recipe.image
          title = data.hits[i].recipe.label
          url = data.hits[i].recipe.url
          ingredientsList = data.hits[i].recipe.ingredientLines
          $("#main").append("<div class='get" + i + "'><img src=" + image + "><h3>" + title + "</h3></div>")
          $(this).css("position", "relative")
          $(this).css("z-index", i)
          ingredients.push(ingredientsList)
          imageArray.push(image)
          titleArray.push(title)
          urlArray.push(url)
        }
    })
}
getRecipes()

var index = 0
$("#exmark").click(function (){
  $(".get" + index).remove()
  index++
  $("#checkmark").click(function (){
    sessionStorage.setItem("list", ingredients[index])
    sessionStorage.setItem("image", imageArray[index])
    sessionStorage.setItem("title", titleArray[index])
    sessionStorage.setItem("url", urlArray[index])
  })
  console.log(ingredients[index])
})
