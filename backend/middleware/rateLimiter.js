import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    const result = await ratelimit.limit("test-key");
    console.log("Rate limit result:", result);
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many request please try again later" });
    }
    next();
  } catch (error) {
    console.log("Error in the ratelimitng middleware", error);
    next(error);
  }
};
export default rateLimiter;
