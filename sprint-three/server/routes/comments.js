const express = require('express');
const router = express.Router();

let videos = require('../data/videos.json');

const fs = require('fs');
const path = require('path');

// POST /videos/:id/comments for creating a new comment
router.post('/:id/comments', (req, res) => {
    const videoId = req.params.id;
    const video = videos.find(video => video.id === videoId);
    const videoComments = video.comments;
    const comment = req.body;
    videoComments.push(comment);
    fs.writeFile(path.join(__dirname,'../data','videos.json'), JSON.stringify(videos, null, 2), () => {console.log("File updated!")});
    res.status(200).json(comment);
})

// DELETE /videos/:videoId/comments/:commentId for deleting a comment
router.delete(`/:videoId/comments/:commentId`, (req, res) => {
    const { videoId, commentId } = req.params;
    const video = videos.find(video => video.id === videoId);
    const videoComments = video.comments;
    const commentIndex = videoComments.findIndex(comment => comment.id === commentId);
    const comment = videoComments[commentIndex];
    videoComments.splice(commentIndex, 1);
    fs.writeFile(path.join(__dirname,'../data','videos.json'), JSON.stringify(videos, null, 2), () => {console.log("File updated!")});
    res.status(200).json(comment);
})

module.exports = router;