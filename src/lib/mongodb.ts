import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  _mongoClient?: Promise<MongoClient>;
};

/**
 * MongoDB 클라이언트를 반환합니다.
 * 개발 모드에서 핫 리로드 때마다 연결이 늘어나지 않도록 전역에 캐시합니다.
 * MONGODB_URI가 없으면 null을 반환합니다(클릭 기록만 건너뜁니다).
 */
export function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (!globalForMongo._mongoClient) {
    const connecting = new MongoClient(uri).connect();
    // 연결 실패가 캐시에 남아 계속 실패하지 않도록, 실패하면 다음 요청에서 다시 시도합니다.
    connecting.catch(() => {
      if (globalForMongo._mongoClient === connecting) {
        globalForMongo._mongoClient = undefined;
      }
    });
    globalForMongo._mongoClient = connecting;
  }
  return globalForMongo._mongoClient;
}
