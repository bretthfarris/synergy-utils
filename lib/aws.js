// Import the environment configuration values
const dotenv = require('dotenv');
dotenv.config();

// Import and Configure the AWS SDK
const aws = require('aws-sdk');
aws.config.update({
  accessKeyId: process.env.AWS_ACCESSKEYID,
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRETACCESSKEY
});

const s3 = new aws.S3({ "apiVersion": "2006-03-01" });

module.exports = {
  s3: s3
}