const express = require('express');
const router = express.Router();
const videos = require('../data/videos.json');

router.get('', (_req, res) => {
    res.status(200).json(videos.map(video => {
        return ({
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        })
    }));
})

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    res.status(200).json(videos.find(video => video.id === videoId));
})

// Needs some work
router.post('', (req, res) => {
    req.body.image = "http://localhost:8080/images/Upload-video-preview.jpg";
    const video = req.body;
    videos.push(video);
    res.status(200).json(video);
})

module.exports = router;