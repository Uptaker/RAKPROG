const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  
  res.status(200).send(posts)
}

exports.createPost = async (req, res) => {

    const {title, text, user} = req.body;

  const newPost = {
    title,
    text,
    user
  }

  const createdPost = new Post(newPost)

  const savedPost = await createdPost.save()

  res.status(200).send(`yay ${savedPost._id}`)
}

exports.updatePost = async (req, res) => {

    //for only updating the value
    const {id} = req.params;

    const Post = await Post.findOne({_id: id});

    if (!Post) res.status(404).send("No post with that ID")

    const updated = await Post.findOneAndUpdate({_id: id, }, {title: item.title + " EDITED"}, {new: true}) // +1 to quality

    res.status(200).send(`Successfullyy updated. \n BEFORE:\n ${item}\n AFTER:\n ${updated}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const item = await Post.findOneAndDelete({ _id: id })

  if (!post) res.status(404).send("No post with that id found")

  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}