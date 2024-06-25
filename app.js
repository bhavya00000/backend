import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { dbconnection } from './database/dbconnection.js';
import { errorMiddleware } from './error/error.js'
import reservationRouter from './routes/reservationRoute.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'


const app = express();
dotenv.config({path: './config/config.env'});

app.use(
    cors({
        origin: true, // Allows requests from any origin
        methods: ["POST"], // Ensure this is plural to include all desired methods
        credentials: true,
    })
);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))



app.use('/api/v1/reservation', reservationRouter);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

dbconnection();


app.use(errorMiddleware);
export default app;