export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getEnvironmentName() {
  if (typeof window === "undefined") {
    return "server";
  } else {
    return "client";
  }
}
