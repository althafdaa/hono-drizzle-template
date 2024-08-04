declare namespace NodeJS {
  interface ProcessEnv {
    DB_URL?: string;
    REDIS_URL?: string;
    APP_STAGE?: 'development' | 'production';

    S3_BUCKET?: string;
    S3_REGION?: string;
    S3_ACCESS_KEY_ID?: string;
    S3_SECRET_ACCESS_KEY?: string;
    S3_ENDPOINT?: string;
  }
}
