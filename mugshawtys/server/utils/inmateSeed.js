const { User } = require("../models");
const db = require("../config/connection");

const inmateSeed = [
    {
    username: "X",
    image: "https://thumbs.mugshots.com/gallery/images/9c/d0/JACOB-RICHARD-WILLIAM-EDWARDS-mugshot-50338404.195x400.jpg",
    age: "24",
    gender: "male",
    email: "x@x.com",
},
{
    username: "Y",
    image: "https://www.ocala-news.com/wp-content/uploads/2019/12/Ricky-D.-Deeley.jpg",
    age: "39",
    gender: "male",
    email: "y@y.com",
},
{
    username: "A",
    image: "https://toplawyer.law/wp-content/uploads/2021/07/Cute-Mugshot-prettiest.jpg",
    age: "19",
    gender: "female",
    email: "a@a.com",
},
{
    username: "B",
    image: "https://i.pinimg.com/originals/bd/02/4b/bd024b81e58493d80a9ee693400e50fb.jpg",
    age: "22",
    gender: "female",
    email: "b@b.com",
}
]

db.once("open", async () => {    
    await User.deleteMany({});
    await User.insertMany(inmateSeed);
    console.log("inmate seed complete");
    process.exit(0);
});
