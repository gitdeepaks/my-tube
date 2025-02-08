import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

export const reteLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "10s"),
});
