const express = require('express');
const router = express.Router();

const videos = require('../data/videos.json');
const fs = require("fs");

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
    const videoId = req.params.id;
    res.status(200).json(videos.find(video => video.id === videoId));
})

// POST /videos end-point that will add a new video to the video list with a unique id for each new video added
router.post('/', (req, res) => {
    const video = req.body;
    videos.push(video);
    res.status(200).json(video);
})

module.exports = router;