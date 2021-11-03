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
  res.status(200).send(savedPost)
}

exports.updatePost = async (req, res) => {
  const {id} = req.params;
  const post = await Post.findOne({_id: id});
  if (!post) res.status(404).send("No post with that ID")
  const updated = await Post.findOneAndUpdate({_id: id, }, req.body, {new: true})
  res.status(200).send(`Successfullyy updated. \n BEFORE:\n ${post}\n AFTER:\n ${updated}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndDelete({ _id: id })
  if (!post) res.status(404).send("No post with id " + id + " found")
  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}