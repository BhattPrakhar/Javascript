// STACK(PRIMITVE)=> provide copy of original value AND HEAP(NON-PRIMITIVE)=> provide original value


//********* STACK **********/

 let companyName = "Manas Ltd"
 let myName = companyName;
 myName = "Cosmetic Ltd"
  console.log(companyName)
  console.log(myName)

//********** HEAP ************/

  let userOne = {
    email : "himesh@mail.com",
    upi : "user@ybl"
  }
  let userTwo = userOne
  userTwo.email = "prakhar@gmail.com"
  console.log(userOne.email)
  console.log(userTwo.email)