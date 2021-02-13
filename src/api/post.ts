import { Router } from 'express';
import Post from '../models/post';

const router: Router = Router();

router.get("/all", async (_, res) => {
    const data = await Post.find({}, "-_id -__v"); 
    res.json(data);
});

router.post("/", (req, res) => {
    const data = req.body;

    const post = new Post(data);

    post.save();

    res.status(200).send()
});

export default router;
