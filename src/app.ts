import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import posts_router from './api/post';
import config from './config';

const app: express.Application = express();

app.use(cors())
app.use(express.json())
app.use("/post", posts_router);

mongoose.connect(config.mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((_) => {
        app.listen(3000, () => console.log("listening on port 3000"));
    })
    .catch((err) => {
        console.log(err);
    });
