import { createClient } from 'redis';

const newRedis = (dsn: string) => {
  const client = createClient({ url: dsn })
    .on('err', (err) => console.error('Redis Client Error:', err))
    .connect();
  return client;
};

const redis = await newRedis(process.env.REDIS_URL!);

export { redis, newRedis, NewRedis };

type NewRedis = Awaited<ReturnType<typeof newRedis>>;
