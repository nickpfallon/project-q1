var list = sessionStorage.getItem("list")
console.log(list)
var ingredients = list.split(",")
console.log(ingredients)
var image = sessionStorage.getItem("image")
console.log(image)
var title = sessionStorage.getItem("title")
console.log(title)
var url = sessionStorage.getItem("url")
console.log(url)

for (var i = 0; i < ingredients.length; i++) {
  $(".ingredient-list").append("<li>" + ingredients[i] + "</li>")
}
$(".picture").append("<img src=" + image + ">")
$(".title").append(title)
$(".url").append("<a href=" + "'" + url + "'>" + url + "</a>")
