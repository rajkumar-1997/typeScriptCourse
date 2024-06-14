interface User{
   name:string,
   email:string,
   age:number,
   isActive?:boolean,
//    startTrail:()=>string,
   startTrail():string,
   getCoupen(coupenName:string,off:number):number
}

interface User{
    address:string
}

const obj:Admin={
    name:'fsf',
    email:'ddfdf',
    age:21,
    address:'dffef',
    startTrail:()=>{
       return 'ksfnkfsnks';
    },
    getCoupen(coupenName:'dvdv',off:12){
        return 12;
    },
    role:'user',
}

interface Admin extends User{
    role:'user'|'admin'|'clerk'
}

export {}