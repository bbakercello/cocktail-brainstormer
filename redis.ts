import * as Redis from 'ioredis';
import configuration from './redisConfig';

export function createRedisInstance() {
  const { host, password, port } = configuration.redis;

  const options: Redis.RedisOptions = {
    host,
    port,
    password,
    lazyConnect: true,
  };

  const redis = new Redis.default(options);

  redis.on('connect', () => {
    console.log('Connected to Redis');
  });

  redis.on('error', (error) => {
    console.error('Redis error', error);
  });

  return redis;
}
