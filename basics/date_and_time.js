// DATES

let date = new Date()

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let newDate = new Date(2025, 0, 13)
let newDAte = new Date("01-13-2025")

console.log(newDate.toDateString())
console.log(newDAte.toLocaleString())


// ***** TIME *******

let TimeStamp = Date.now()
console.log(TimeStamp)
console.log(newDAte.getTime())
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))


let Newdate = new Date()
console.log(Newdate)
console.log(Newdate.getMonth() + 1)
console.log(Newdate.getDay())

// `${newDate.getDay()} and the time `

Newdate.toLocaleString('default',{
    weekday: "long"
})









