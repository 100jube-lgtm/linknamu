import { getMongoClient } from "@/lib/mongodb";

type ClickDoc = {
  _id: string; // 링크 id
  count: number;
  updatedAt: Date;
};

const DB_NAME = process.env.MONGODB_DB ?? "linknamu";

/**
 * 주어진 링크 id들의 현재 클릭수를 한 번의 쿼리로 가져옵니다.
 * 기록이 없는 링크는 0, DB가 없거나 실패하면 모두 0으로 돌려줍니다.
 */
export async function getClickCounts(linkIds: string[]): Promise<Record<string, number>> {
  const counts: Record<string, number> = Object.fromEntries(linkIds.map((id) => [id, 0]));

  const clientPromise = getMongoClient();
  if (!clientPromise) return counts;

  try {
    const client = await clientPromise;
    const docs = await client
      .db(DB_NAME)
      .collection<ClickDoc>("clicks")
      .find({ _id: { $in: linkIds } })
      .toArray();
    for (const doc of docs) counts[doc._id] = doc.count;
  } catch (error) {
    console.error("클릭수 조회 실패:", error);
  }
  return counts;
}

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
