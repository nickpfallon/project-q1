var list = sessionStorage.getItem("list")
var ingredients = list.split(",")
var image = sessionStorage.getItem("image")
var title = sessionStorage.getItem("title")
var url = sessionStorage.getItem("url")

for (var i = 0; i < ingredients.length; i++) {
  $(".ingredient-list").append("<li class='collection-item'>" + ingredients[i] + "</li>")
}
$(".picture").append("<img src=" + image + ">")
$(".title").append(title)
$(".url").append("<a href=" + "'" + url + "'>" + url + "</a>")
