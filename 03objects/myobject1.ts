type User={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    customerId?:string
}

let myUser:User={
    _id:"fegweg",
    name:"egeg",
    email:"dgge",
    isActive:false

}
// myUser._id='grwggr'   can not asign to _id bcz its read only 
// customerId?:string  indicates its optional

type cardNumber={
    cardNumber:number
}

type cardDate={
    cardDate:string
}

//making type with combination of other type already defined
type cardDetail=cardNumber&cardDate&{
    cvv:number
}

export {}