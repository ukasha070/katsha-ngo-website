import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitIntoThreeLists<T>(inputList: T[]): T[][] {
  if (!Array.isArray(inputList)) {
    throw new Error("Input must be an array");
  }
  const list1: T[] = [];
  const list2: T[] = [];
  const list3: T[] = [];

  for (let i = 0; i < inputList.length; i++) {
    if (i % 3 === 0) {
      list1.push(inputList[i]);
    } else if (i % 3 === 1) {
      list2.push(inputList[i]);
    } else {
      list3.push(inputList[i]);
    }
  }

  return [list1, list2, list3];
}

// ** Split words into `n` balanced chunks (greedy, preserves words). */
export function splitIntoNChunks(text: string, n: number): string[] {
  if (!text || n <= 1) return [text.trim()];

  const words = text.trim().split(/\s+/);
  if (words.length <= n) return words; // one word per chunk if fewer words than chunks

  // target length per chunk (characters)
  const totalLen = words.join(" ").length;
  const target = Math.ceil(totalLen / n);

  const chunks: string[] = [];
  let current = "";

  for (const w of words) {
    // if adding the next word would push us past target and we still have
    // room to create more chunks, then seal the current chunk.
    if (
      current.length > 0 &&
      current.length + 1 + w.length > target &&
      chunks.length < n - 1
    ) {
      chunks.push(current);
      current = w;
    } else {
      current = current ? `${current} ${w}` : w;
    }
  }

  if (current) chunks.push(current);

  // If due to greedy logic we produced fewer chunks, merge last pieces to reach n
  while (chunks.length > n) {
    // merge last two
    const last = chunks.pop() as string;
    chunks[chunks.length - 1] = `${chunks[chunks.length - 1]} ${last}`;
  }

  // If fewer, create empty-ish chunks by moving words from end
  while (chunks.length < n) {
    // take last chunk and split it one word off
    const last = chunks.pop() || "";
    const parts = last.split(/\s+/);
    if (parts.length <= 1) {
      // if can't split, just push back
      chunks.push(last);
      break;
    }
    const take = parts.pop() as string;
    chunks.push(parts.join(" "));
    chunks.push(take);
  }

  return chunks.map((c) => c.trim());
}

/** Decide how many chunks to split into based on length. Configurable thresholds. */
export function chooseChunkCount(
  text: string,
  opts?: { t2?: number; t3?: number }
): number {
  const len = (text || "").trim().length;
  // defaults (t2 = up to this length -> 2; up to t3 -> 3; else 4)
  const t2 = opts?.t2 ?? 30; // e.g. short lines -> 2
  const t3 = opts?.t3 ?? 70; // medium lines -> 3

  if (len <= t2) return 2;
  if (len <= t3) return 3;
  return 4;
}

export function splitAuto(
  text: string,
  opts?: { t2?: number; t3?: number }
): string[] {
  const n = chooseChunkCount(text, opts);
  return splitIntoNChunks(text, n);
}

export function formatCurrency(
  amount: number,
  currency: "USD" | "EUR" | "GBP" | "UGX",
  locale = "en-US"
): string {
  // Map UGX to its locale if needed
  const localeMap: Record<string, string> = {
    USD: "en-US",
    EUR: "de-DE", // or "en-IE" or "fr-FR" depending on preference
    GBP: "en-GB",
    UGX: "en-UG", // Uganda English locale
  };

  const formatter = new Intl.NumberFormat(localeMap[currency] || locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0, // UGX usually has no decimals
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export function formatNumber(num: number) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "k";
  return num.toString();
}

export function sanitizeSearchQuery(query: string, encode = true): string {
  if (!query) return "";

  // 1. Trim whitespace
  let sanitized = query.trim();

  // 2. Remove control chars & special symbols that are unsafe
  sanitized = sanitized.replace(/[<>;{}$]/g, "");

  // 3. Collapse multiple spaces
  sanitized = sanitized.replace(/\s+/g, " ");

  // 4. Optionally URL-encode
  if (encode) {
    sanitized = encodeURIComponent(sanitized);
  }

  return sanitized;
}
