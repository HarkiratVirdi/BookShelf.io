const { S3Client } = require('@aws-sdk/client-s3');
const { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const logger = require('../logger');
//post book image to S3

async function saveImage(bookId, data) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${bookId}`,
    Body: data,
  };

  // Create a PUT Object command to send to S3
  const command = new PutObjectCommand(params);

  try {
    const s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      forcePathStyle: true,
    });
    await s3Client.send(command);
  } catch (err) {
    const { Bucket, Key } = params;
    logger.error({ err, Bucket, Key }, 'Error uploading book image to S3');
    throw new Error('unable to upload image');
  }
}

async function getImage(bookId) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${bookId}`,
  };

  const command = new GetObjectCommand(params);

  try {
    const s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      forcePathStyle: true,
    });
    const data = await s3Client.send(command);
    return streamToBuffer(data.Body);
  } catch (err) {
    const { Bucket, Key } = params;
    logger.error({ err, Bucket, Key }, 'Error streaming book image from S3');
    throw new Error('unable to read book image');
  }
}

// Create a DELETE Object command to send to S3
async function deleteImage(bookId) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${bookId}`,
  };

  const command = new DeleteObjectCommand(params);

  try {
    const s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      forcePathStyle: true,
    });
    await s3Client.send(command);
  } catch (err) {
    const { Bucket, Key } = params;
    logger.error({ err, Bucket, Key }, 'Error deleting book image from S3');
    throw new Error('unable to delete a book image');
  }
}

module.exports.saveImage = saveImage;
module.exports.getImage = getImage;
module.exports.deleteImage = deleteImage;
