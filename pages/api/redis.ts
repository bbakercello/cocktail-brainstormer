import Redis, { RedisOptions } from 'ioredis';
import configuration from '../../configuration';
 
function getRedisConfiguration(): {
  port: number | undefined,
  host: any
} {
  return configuration;
}
 
export function createRedisInstance(
  config = getRedisConfiguration()
) {
  try {
    const options: RedisOptions = {
      host: config.host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }
 
        return Math.min(times * 200, 1000);
      },
    };
 
    if (config.port) {
      options.port = config.port;
    }
 
    const redis = new Redis(options);
 
    redis.on('error', (error: unknown) => {
      console.warn('[Redis] Error connecting', error);
    });
 
    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}



export default async function handler(req: { method: string; body: { key: any; value: any; }; query: { key: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; value?: string | null; }): void; new(): any; }; }; }) {
  const redis = createRedisInstance();
  
  if (req.method === 'POST') {
    const { key, value } = req.body;
    await redis.set(key, value);
    res.status(200).json({ message: 'Value set' });
  } else if (req.method === 'GET') {
    const { key } = req.query;
    const value = await redis.get(key);
    res.status(200).json({ value });
  }
}