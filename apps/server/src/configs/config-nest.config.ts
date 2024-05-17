export function config() {
  return {
    db_type: process.env.DB_TYPE,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_database: process.env.DB_DATABASE,

    throttler_ttl: process.env.THROTTLER_TTL,
    throttler_limit: process.env.THROTTLER_LIMIT,
  };
}
