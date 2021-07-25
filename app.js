
var name = prompt("What is your name")

alert("hey, Smoking is harmful to health " + name )

function inputUser(){

var favCigarette = prompt("What is your fav cigarette? ,,, Please choose one of these : Marlboro , Winston , Kent")

while( favCigarette != "Marlboro" && favCigarette != "Winston" && favCigarette != "Kent" )
{
  favCigarette = prompt("What is your fav cigarette? ,,, Please choose one of these : Marlboro , Winston , Kent")
}

var NumOfPic = prompt("Your kindness, how many times do you want to repeat the Pic?")

while(NumOfPic > 5)
{
  NumOfPic = prompt("the num should be less than 5") 
}

//var favCigarette = prompt("What is your fav cigarette?")


if(favCigarette == "Marlboro"){
 for( var i = 1 ; i <= NumOfPic ; i++)
{
document.write(
  "<div>" + "<h3>" + favCigarette + "</h3>"
+ "<img  src='https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2015/01/Marlboro-e1422524436156.jpg' width='400' height='250'     />" + "</div>" + i ) 
}
}


else if (favCigarette =="Winston"){
for( var i = 1 ; i <= NumOfPic ; i++)
{
document.write(
  "<div>" + "<h3>" + favCigarette+"</h3>"
+ "<img  src='https://www.toggar.com/uploads/original_images/1566735848_158017.jpg' width='400' height='300'     />" + "</div>" + i )
}
}


else if(favCigarette =="Kent"){
for( var i = 1 ; i <= NumOfPic ; i++)
{
document.write(
  "<div>" + "<h3>" + favCigarette+"</h3>"
+ "<img  src='http://i.imgur.com/PkscC5a.jpg' width='400' height='300'     />" + "</div>" + i )
}
}


else{
  alert('Go to hell smoker')
}
}

function RateUs()
{
  var rate = prompt(" Rate US ")
  alert(' Thanks ')
}

inputUser()
RateUs()
