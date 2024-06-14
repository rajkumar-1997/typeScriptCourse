interface TakePhoto{
    cameraMode:string,
    filter:string,
    bust:number,

}

interface Story{
    createStory():void
}

class Table implements TakePhoto{
    constructor(
    public cameraMode:string,
    public filter:string,
    public bust:number
    ){}
}
//interface provide minimum requirement extra thing we can implement other than interface
class Youtube implements TakePhoto,Story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public bust:number,
        public pixel:string
        ){}

        createStory(): void {
            console.log('sjnsnnmsnm');
        }
}