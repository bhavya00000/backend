import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain atleast 3 characters!"],
        maxLength: [30, "First Name cannot exaceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain atleast 3 characters!"],
        maxLength: [30, "Last Name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide valid email!"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 digits!"],
        maxLength: [10, "Phone number must contain 10 digits!"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    
});

export const Reservation = mongoose.model('Reservation', reservationSchema);