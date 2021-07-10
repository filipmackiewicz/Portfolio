const hero = document.querySelector (".home");
const logo = document.querySelector (".home__myimage");
const header = document.querySelector (".home__aboutall");


const tl = new TimelineMax ();

tl.fromTo (
    hero,
    1,
    {width: "0"}, 
    {width: "100%", ease: Power2.easeInOut}
    // {opacity: 0, y: "300"},
    // {opacity: 1, y: "0",ease: Power2.easeInOut}
).fromTo (
    logo,
    0.5,
    {opacity: 0, y: "30"},
    {opacity: 1, y: "0",ease: Power2.easeInOut}
).fromTo (
    header,
    0.5,
    {opacity: 0, y: "30"},
    {opacity: 1, y: "0",ease: Power2.easeInOut} 
)