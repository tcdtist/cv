import { API_ROOT } from "@/constants";

import ResumeView from "@/app/(views)/Resume";

export default async function Page() {
  const response = await fetch(`${API_ROOT}me/cv/resume.json`);
  const data: Profile = await response.json();

  return <ResumeView data={data} />;
}
