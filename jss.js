



var arcane = document.querySelector('#Arcane');
var what = document.querySelector('#What');
var gallery = document.querySelector('#Gallery');
var about = document.querySelector('#About');


var arcane1 = document.getElementById('a');
var what1 = document.getElementById('w');
var gallery1 = document.getElementById('g');
var about1 = document.getElementById('aa');


var par = document.getElementById('p')

var nav = document.getElementById('head')

window.addEventListener('scroll',()=>{
    var windo = window.pageYOffset + 100;



        //Parallax a navbarová "animace"

    if (window.screenY >= 10) {
        par.style.opacity = 1;
    }

    

    if (windo >= 600 ){
        opacity1 = Number(window.getComputedStyle(par).getPropertyValue('opacity'));
        if (opacity1>0){
            opacity1 = opacity1 - 0.05;
            par.style.opacity=opacity1;
            par.style.transform = "translateY(80px)"
            console.log(opacity1)
        }

    }else {
        if (opacity1 < 1){
            opacity1 = opacity1 + 0.05;
            par.style.opacity=opacity1;
            par.style.transform = "translateY(0px)"
            console.log(opacity1) 
        }
    }
    if (windo >= 700){
        opacity2 = Number(window.getComputedStyle(nav).getPropertyValue('opacity'));
        if (opacity2<1){
            opacity2 = opacity2 + 0.2;
            nav.style.opacity = opacity2
            console.log(opacity2) 
        }
        
    }

    
        // ScrollSpy

    if (arcane.offsetTop <= windo && what.offsetTop > windo){
        console.log("arcane")
        arcane1.classList.add("active");
        what1.classList.remove("active");
        gallery1.classList.remove("active");
        about1.classList.remove("active");


        nav.style.backgroundColor = 'black'
        nav.style.border = 'white solid 4px'
        nav.style.borderTop = 'none'
        gallery1.style.color = 'white'
        arcane1.style.color = 'white'
        what1.style.color = 'white'
        about1.style.color = 'white'
    }
    else if (what.offsetTop <= windo && gallery.offsetTop > windo){
        console.log("what")
        what1.classList.add("active");
        arcane1.classList.remove("active");
        gallery1.classList.remove("active");
        about1.classList.remove("active");

        nav.style.backgroundColor = 'black'
        nav.style.border = 'white solid 4px'
        nav.style.borderTop = 'none'
        gallery1.style.color = 'white'
        arcane1.style.color = 'white'
        what1.style.color = 'white'
        about1.style.color = 'white'

    }
    else if (gallery.offsetTop <= windo && about.offsetTop > windo){
        console.log("gallery")
        gallery1.classList.add("active");
        arcane1.classList.remove("active");
        what1.classList.remove("active");
        about1.classList.remove("active");

        nav.style.backgroundColor = '#f9fae4'
        nav.style.border = 'solid 4px gold'
        nav.style.borderTop = 'none'
        gallery1.style.color = 'gold'
        arcane1.style.color = 'gold'
        what1.style.color = 'gold'
        about1.style.color ='gold'
        


    }
    else if (windo <= arcane.offsetTop) {
        console.log("arcane")
        arcane1.classList.add("active");
        about1.classList.remove("active");
        gallery1.classList.remove("active");
        what1.classList.remove("active");
    }

    else {
        console.log("about")
        about1.classList.add("active");
        arcane1.classList.remove("active");
        gallery1.classList.remove("active");
        what1.classList.remove("active");

        nav.style.backgroundColor = '#112214'
        nav.style.border = 'solid 4px #2cc723'
        nav.style.borderTop = 'none'
        gallery1.style.color = '#2cc723'
        arcane1.style.color = '#2cc723'
        what1.style.color = '#2cc723'
    }

})

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


const images = document.querySelectorAll('button')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const iframe = document.createElement('iframe')
        iframe.style.width = '600px'
        iframe.style.height = '400px'
        iframe.src = 'https://www.youtube.com/embed/fXmAurh012s'
        lightbox.appendChild(iframe)
    })
})

lightbox.addEventListener('click', e => {
    lightbox.classList.remove('active')
})

var span = document.getElementsByTagName('span')
let coc = document.getElementsByClassName('car')
var l = 0;

span[1].addEventListener('click', e => {
    l++;
    console.log("l+")
    console.log(l)
        if (l=0) {coc.style.transform = "translateX(-800px"}
        if (l=1) {div = "translateX(-800px)"}
        if (l=2) {div = "translateX(-1400px)"}
        if (l=3) {div = "translateX(-2220px)"}
        if (l=4) {div = "translateX(-2700px)"}
        if (l > 4) {l =4} 

    }
)
span[0].onclick = () =>{
    l--;
    console.log("l-")
    for(var i of div){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px"}
        if (l==2) {i.style.left = "-1480px"}
        if (l==3) {i.style.left = "-2220px"}
        if (l < 0) {l =0} 
    }

}
var mymap = L.map('map').setView([37.230, -121.96], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);