"use client";

import About from "@/app/(components)/About";
import Certificate from "@/app/(components)/Certificate";
import CommandMenu from "@/app/(components)/CommandMenu";
import Education from "@/app/(components)/Education";
import Header from "@/app/(components)/Header";
import Projects from "@/app/(components)/Projects";
import Skills from "@/app/(components)/Skills";
import WorkExperience from "@/app/(components)/WorkExperience";

const ResumeView = ({ data }: { data: Profile }) => {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Header data={data} />
        <About data={data} />
        <WorkExperience data={data} />
        <Education data={data} />
        <Certificate data={data} />
        <Skills data={data} />
        <Projects data={data} />
      </section>

      <CommandMenu data={data} />
    </main>
  );
};

export default ResumeView;
