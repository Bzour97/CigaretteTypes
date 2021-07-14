var name = prompt("What is your name")

alert("hey, Smoking is harmful to health " + name )

var favCigarette = prompt("What is your fav cigarette?")


if(favCigarette == "Marlboro"){
document.write(
  "<div>" + "<h3>" + favCigarette + "</h3>"
+ "<img  src='https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2015/01/Marlboro-e1422524436156.jpg' width='400' height='250'     />" + "</div>")
}
else if (favCigarette =="Winston"){
document.write(
  "<div>" + "<h3>" + favCigarette+"</h3>"
+ "<img  src='https://www.toggar.com/uploads/original_images/1566735848_158017.jpg' width='400' height='300'     />" + "</div>")
}
else if(favCigarette =="Kent"){
document.write(
  "<div>" + "<h3>" + favCigarette+"</h3>"
+ "<img  src='http://i.imgur.com/PkscC5a.jpg' width='400' height='300'     />" + "</div>")
}
else{
  alert('Go to hell smoker')
}