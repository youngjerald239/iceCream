let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

// let order = (call_production) =>{

//     console.log("Order placed. Please call production")
//     //Function that is being called
//     call_production()
// }

// let production = () =>{

//     console.log("Production has started")
// }

// // Trigger 👇

// order(production)

// Function 1

let order = (fruit_name, call_production) =>{
    setTimeout(function(){

        console.log(`${stocks.Fruits[fruit_name]} was selected`)
    
    // Order placed. Call production to start
       call_production()
      },2000)
  }
  
  // Function 2
  
  let production = () =>{
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
            console.log("The fruit has been chopped")
          },2000)

      },0000)
  }
  
  
  // Trigger 👇
  
  order(0, production);