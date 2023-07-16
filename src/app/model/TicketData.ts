export default class TicketData{
    public id:Number;
    public userId:Number;
    public movieId:Number;
    public cancel:Boolean;
    public showSlot:Number;
    public bookingFor:String;
    public bookingTiming:String;

    constructor(id:Number,userId:Number,movieId:Number,
        cancel:Boolean,showSlot:Number,bookingFor:String,bookingTiming:String){
        this.id = id;
        this.userId = userId;
        this.movieId = movieId;
        this.cancel = cancel;
        this.showSlot = showSlot;
        this.bookingFor = bookingFor;
        this.bookingTiming = bookingTiming;
    }
}