class User{
    email:string
    name:string
    readonly city:string='jaipur'
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}
const raj=new User('raj@email.com','raj');