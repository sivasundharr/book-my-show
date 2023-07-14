import CinemaData from "./CinemaData";

export default class MovieData{
    public id:Number;
    public type:String;
    public cinema:CinemaData;

    constructor(id:Number,type:String,cinemaData:CinemaData){
        this.id = id;
        this.type = type;
        this.cinema = cinemaData;
    }
}