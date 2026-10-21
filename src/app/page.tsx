import { API_ROOT } from "@/constants";

import ResumeView from "@/app/(views)/Resume";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  const response = await fetch(`${API_ROOT}me/cv/resume.json`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch resume data: ${response.status} ${response.statusText}`);
  }
  const data: Profile = await response.json();

  return <ResumeView data={data} />;
}

