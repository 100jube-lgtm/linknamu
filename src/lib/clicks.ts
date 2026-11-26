import { getMongoClient } from "@/lib/mongodb";

type ClickDoc = {
  _id: string; // 링크 id
  count: number;
  updatedAt: Date;
};

const DB_NAME = process.env.MONGODB_DB ?? "linknamu";

/** 링크 id의 클릭수를 1 올립니다. DB가 없거나 실패해도 예외를 던지지 않습니다. */
export async function recordClick(linkId: string): Promise<void> {
  const clientPromise = getMongoClient();
  if (!clientPromise) {
    console.warn("MONGODB_URI가 설정되지 않아 클릭수를 기록하지 않습니다.");
    return;
  }

  try {
    const client = await clientPromise;
    await client
      .db(DB_NAME)
      .collection<ClickDoc>("clicks")
      .updateOne(
        { _id: linkId },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true },
      );
  } catch (error) {
    console.error("클릭수 기록 실패:", error);
  }
}
