import ErrorHandler from '../error/error.js';
import {Reservation} from '../models/reservationSchema.js';


// export const sendReservation = async(req, res, next) =>{
//     const {firstName, lastName, email, phone, date, time } = req.body;
//     if(!firstName|| !lastName || !email || !phone || !date || !time){
//         return next(new ErrorHandler("Please fill food reservation form!", 400));

//     }
//     try{
//         await Reservation.create({
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             phone: phone,
//             date: date,
//             time: time
//         });
//         res.status(201).json({
//             success: true,
//             message: "Reservation done Successfully!",
//         });
//     }catch(error){
//         if(error.name === 'ValidationError'){
//             const vaidationErrors = Object.values(error.errors).map(
//                 (err) => err.message
//             );
//             return next(new ErrorHandler(validationErrors.join(" , "), 400));
//         }
//         return next(error);
//     }

// };

export const sendReservation = async (req, res, next) => {
    let validationErrors; // Declare validationErrors variable
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill food reservation form!", 400));
    }
    try {
        await Reservation.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            date: date,
            time: time
        });
        res.status(201).json({
            success: true,
            message: "Reservation done Successfully!",
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(" , "), 400));
        }
        return next(error);
    }
};