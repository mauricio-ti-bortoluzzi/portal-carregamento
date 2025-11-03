import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasTrueValue(obj: object): boolean {
  return Object.values(obj).some((item) => {
    if (item === true) return true;

    if (typeof item === "object" && item !== null) {
      return hasTrueValue(item);
    }
    return false;
  });
}
