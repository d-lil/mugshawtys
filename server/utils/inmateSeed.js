const { User } = require("../models");
const db = require("../config/connection");

const inmateSeed = [
    {
    username: "Xander",
    image: "https://thumbs.mugshots.com/gallery/images/9c/d0/JACOB-RICHARD-WILLIAM-EDWARDS-mugshot-50338404.195x400.jpg",
    age: "24",
    gender: "male",
    email: "x@x.com",
    about: "Incarcerated, but I promise my heart is still free-range and longing for love.",
},
{
    username: "Hung",
    image: "https://www.ocala-news.com/wp-content/uploads/2019/12/Ricky-D.-Deeley.jpg",
    age: "39",
    gender: "male",
    email: "y@y.com",
    about: "Don't judge a book by its mugshot!",
},
{
    username: "Anna",
    image: "https://toplawyer.law/wp-content/uploads/2021/07/Cute-Mugshot-prettiest.jpg",
    age: "19",
    gender: "female",
    email: "a@a.com",
    about: "Seeking a partner in crime, both figuratively and literally.",
},
{
    username: "Britney",
    image: "https://i.pinimg.com/originals/bd/02/4b/bd024b81e58493d80a9ee693400e50fb.jpg",
    age: "22",
    gender: "female",
    email: "b@b.com",
    about: "Too fabulous for prison, but willing to grace this app with my presence to give others a glimpse of greatness."
    ,
}, 
{
    username: "Christe",
    image: "https://media.11alive.com/assets/WXIA/images/602923643/602923643_1920x1080.jpg",
    age: "69",
    gender: "female",
    email: "h@h.com",
    about: "Seeking a partner who knows that with age comes mad wisdom and epic storytelling skills.",

}, 
{
    username: "Zach",
    image: "https://1.bp.blogspot.com/-hpYvsmI3XBA/TyTCsDFGxKI/AAAAAAAAnF0/r78BZratHto/s1600/mugshots_12.jpg",
    age: "30",
    gender: "male",
    email: "s@s.com",
    about: "Looking for someone who's not afraid to say, 'You had me at mugshot.",

}, 
{
    username: "Dick",
    image: "https://www.sickchirpse.com/wp-content/uploads/2014/07/cry1.jpg",
    age: "25",
    gender: "male",
    email: "d@d.com",
    about: "Incarcerated and emotional.",

}, 
{
    username: "Eve",
    image: "https://www.thesmokinggun.com/sites/default/files/photos/bartkowiak_heather_mariehorry092310failtoappear06231988.jpg",
    age: "22",
    gender: "female",
    email: "f@f.com",
    about: "I put the 'fun' in dysfunctional",

}, 
{
    username: "NewQueen",
    image: "https://i.pinimg.com/736x/d8/64/41/d864410ffd9957a4f0971e67f6f3de19.jpg",
    age: "27",
    gender: "female",
    email: "g@g.com",
    about: "My bad choices are hotter than your best decisions.",

}, 
{
    username: "Gary",
    image: "https://i.pinimg.com/474x/fe/08/c4/fe08c47cd969a5b3e0c71a0f2427b508--funny-mugshots-mug-shots.jpg",
    age: "28",
    gender: "male",
    email: "p@p.com",
    about: "Very nice guy",

}, 
{
    username: "Charlie",
    image: "https://i.pinimg.com/474x/2e/70/0a/2e700a52f601cd561e7068ad6af9eb29--celebrity-mugshots-aspen-colorado.jpg",
    age: "57",
    gender: "male",
    email: "q@q.com",
    about: "I have tiger blood coursing through my veins.",

}, 

]

db.once("open", async () => {    
    await User.deleteMany({});
    await User.insertMany(inmateSeed);
    console.log("inmate seed complete");
    process.exit(0);
});
