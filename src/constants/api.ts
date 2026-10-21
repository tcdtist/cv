const PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
const DEV = process.env.NEXT_PUBLIC_VERCEL_ENV === "development";

const API_LOCAL_ROOT = "http://localhost:3008/";
const API_DEFAULT_PROD_ROOT = "https://api-tcdtist-tcdtists-projects.vercel.app/";
const envHost = process.env.NEXT_PUBLIC_HOST;
const validHost = envHost && !envHost.includes("api.tcdtist.com") ? envHost : API_DEFAULT_PROD_ROOT;
const API_ROOT = DEV && !envHost ? API_LOCAL_ROOT : validHost;
const TIMEOUT = 15000;

export { PRODUCTION, DEV, API_ROOT, TIMEOUT };

