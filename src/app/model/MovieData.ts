import ScreenData from "./ScreenData";

export default class MovieData{

    constructor(public id:Number,public name:String,
        public releaseDate:String,public showCycle:Number,public screen:ScreenData){
    
    }
}
