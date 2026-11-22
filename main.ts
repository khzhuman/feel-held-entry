import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text =
  "After a thousand voices, here is a quiet one: rain on a tin roof, a lamp still warm in the window, and no one asking you for anything. The kettle is off, the chairs are pulled in, and the rain keeps its own slow time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
const length = [...written].length;
if (written !== text || length < 1 || length > 280) {
  throw new Error(`entry check failed: ${length} characters`);
}
