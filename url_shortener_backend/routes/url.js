const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/url.model');

const shortUrlRoute = express.Router();

shortUrlRoute.post("/", async (req, res) => {
    const longUrl = req.body.longUrl;
    const baseUrl = config.get("baseURL");

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base url!");
    }

    const urlCode = shortid.generate();

    if (validUrl.isUri(longUrl)) {

        try {
            let url = await Url.findOne({
                longUrl: longUrl
            });
            console.log(url);
            if (url) {
                return res.status(200).json(url);
            } else {

                const shortUrl = `${baseUrl}/${urlCode}`;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    clickCount: 0
                });

                await url.save()
                return res.status(201).json(url);
            }
        } catch (err) {
            console.error(err.message);
            return res.status(500).json("Internal Server error " + err.message);
        }
    } else {
        res.status(400).json("Invalid URL. Please enter a valid url for shortening.");
    }
});

module.exports = shortUrlRoute;