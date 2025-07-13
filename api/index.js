import express from 'express';
import mongoose from 'mongoose';
import dotevn from 'dotenv';
import userRouter from './routes/user.route.js';
dotevn.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mangodb');
}).catch((err) => {
    console.log(err);
});

const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);

app.use('/api/user', userRouter);