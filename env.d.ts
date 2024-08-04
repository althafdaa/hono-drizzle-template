declare namespace NodeJS {
  interface ProcessEnv {
    DB_URL?: string;
    REDIS_URL?: string;
    APP_STAGE?: 'development' | 'production';
  }
}
