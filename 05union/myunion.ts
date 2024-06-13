let val:number|string=45;
val='string';


type Admin ={
    name:string,
    id:number,
}

type User={
   username:string,
   id:number,
}

let raj:Admin | User={
    username:'fegeg',
    id:23
}

raj={name:'ddd',id:34}

function getDbId(id:number | string){
    if(typeof id==='string'){
        id.toLowerCase();
    }
    
}

const data:number[]=[1,2,34,4];

const data1:string[]=['dfg','dfdfd','dfdddfd'];

const data2:(string|number)[]=[1,2,3,'fsg'];

let seatAlloatment:'asile' | 'middle' | 'window';
// seatAlloatment='arrow'