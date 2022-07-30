//menu

let navigation = ["მთავარი", "ჩვენ შესახებ", "ფასები","სპონსორები","კონტაქტი"];

let links = ["index.html", "about.html", "prices.html", "sponsors.html", "contact.html"];

let navlen = navigation.length;
let text = "<ul>";

for(let i=0; i<navlen; i++){
    text += '<li><a href= '+ links[i] + ">" +  navigation[i] + "</a></li>";
}
text += "</ul>";


console.log(text);

document.getElementById("nav").innerHTML = text;

//CHAT
function show(){
    document.getElementById("chatbox").
    style.display = "block";
}

function dissapear(){
    document.getElementById("chatbox").
    style.display = "none";
}

// slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
