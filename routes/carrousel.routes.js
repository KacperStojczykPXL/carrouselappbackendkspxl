const express = require("express");
const carrouselRouter = express.Router();
const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
});

const s3 = new AWS.S3();
const bucketName = "images-carrousel-kacperstojczyk2023";

carrouselRouter.get("", async (req, res) => {
    try {
        const response = await s3
            .listObjectsV2({
                Bucket: bucketName,
            })
            .promise();

        const publicUrls = response.Contents.map((obj) => {
            return {
                url: `https://${bucketName}.s3.amazonaws.com/${obj.Key}`,
        };
        });

        res.json(publicUrls);
    } catch (error) {
        console.error("Error retrieving files from bucket:", error);
        res.status(500).json({ error: "Error retrieving files from bucket" });
    }
});

module.exports = carrouselRouter;
