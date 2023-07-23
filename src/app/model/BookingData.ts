export default class BookingData{
   
    constructor(public id:Number,public userId:Number,public movieId:Number,
        public cancel:Boolean,public showSlot:Number,public bookingFor:String,public bookingTiming:String){
       
    }
}