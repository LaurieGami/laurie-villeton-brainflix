const express = require('express');
const router = express.Router();

const commentRoutes = require('./comments');
router.use('/', commentRoutes);

let videos = require('../data/videos.json');

const fs = require('fs');
const path = require('path');

// GET /videos end-point that responds with an array of videos
router.get('/', (_req, res) => {
    res.status(200).json(videos.map(video => {
        return ({
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        })
    }));
})

// GET /videos/:id end-point that responds with an object containing the details of the video with an id of :id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json(videos.find(video => video.id === id));
})

// POST /videos end-point that will add a new video to the video list with a unique id for each new video added
router.post('/', (req, res) => {
    const video = req.body;
    videos.push(video);
    // Writes a new videos.json file with the new video included
    fs.writeFileSync(path.join(__dirname,'../data','videos.json'), JSON.stringify(videos, null, 2));
    res.status(200).json(video);
})

// PUT endpoint at /videos/:videoId/likes that increments the like count of the video specified by video
router.put('/:videoId/likes', (req, res) => {
    const { videoId } = req.params;
    const video = videos.find(video => video.id === videoId);
    const videoLikes = video.likes;
    const likesCount = Number(videoLikes.replace(/[^\d\.\-]/g, ""));
    let newLikesCount = likesCount + 1;
    video.likes = newLikesCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    fs.writeFileSync(path.join(__dirname,'../data','videos.json'), JSON.stringify(videos, null, 2));
    res.status(200).json(video);
})

module.exports = router;