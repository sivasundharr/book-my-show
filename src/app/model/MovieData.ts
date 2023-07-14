import ScreenData from "./ScreenData";

export default class MovieData{

    public id:Number;
    public name:String;
    public releaseDate:String;
    public showCycle:Number;
    public screen : ScreenData;


    constructor(id:Number,name:String,releseDate:String,showCycle:Number,screen:ScreenData){
        this.id = id;
        this.name = name;
        this.releaseDate = releseDate;
        this.showCycle = showCycle;
        this.screen = screen;
    }
}
