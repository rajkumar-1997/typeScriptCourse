const addTwo=(num:number):number=>{
    return num+2;
}
addTwo(4);

function toUpper(str:string){
    return str.toUpperCase();
}


//? is for optional parameter
const isLogin=(name:string,email:string,isPaid?:boolean)=>{

}
isLogin('dg','fd');

//providing default value for isPaid
const isSignup=(name:string,email:string,isPaid:boolean=false)=>{

}
isSignup('sff','fsf');

toUpper('raj');

const heros=['thor','spiderman','ironman'];

heros.map((hero:string):string=>{
    return `good ${hero}`;
})


//not returning anything will give void
function consoleError(message:string):void{
 console.log(message);
}


// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function fail(msg: string): never {
    throw new Error(msg);
  }