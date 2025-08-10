import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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