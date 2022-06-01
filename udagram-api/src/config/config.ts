import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbPort: Number(process.env.DB_PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION, // Not required
  aws_profile: process.env.AWS_PROFILE, // Not required
  aws_media_bucket: process.env.AWS_BUCKET, // Not required
  url: process.env.URL, // Not required
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
