const PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
const DEV = process.env.NEXT_PUBLIC_VERCEL_ENV === "development";

const API_LOCAL_ROOT = "http://localhost:3008/";
const API_ROOT = DEV ? API_LOCAL_ROOT : process.env.NEXT_PUBLIC_HOST;
const TIMEOUT = 15000;

export { PRODUCTION, DEV, API_ROOT, TIMEOUT };
