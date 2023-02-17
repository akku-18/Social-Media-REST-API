const router = require("express").Router();
const Post = require("../models/Post");

// create user

router.post("/", async (req, res) => {
  const newpost = new Post(req.body);
  try {
    const savePost = await newpost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update user

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.updateOne({$set:req.body});
        res.status(200).json("Your post has been updated");
    } else {
      res.status(403).json("You can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user

router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
          await post.deleteOne();
          res.status(200).json("Your post has been deleted");
      } else {
        res.status(403).json("You can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

// like a post
// get a post
// get timeline posts

module.exports = router;
