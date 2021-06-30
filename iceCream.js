let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

let order = (call_production) =>{

    console.log("Order placed. Please call production")
    //Function that is being called
    call_production()
}

let production = () =>{

    console.log("Production has started")
}

// Trigger 👇

order(production)