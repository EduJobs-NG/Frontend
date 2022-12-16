import React from "react";

export const AboutHero = () => {
  return (
    <>
      <section
        className=" relative h-[400px] items-center justify-center flex flex-col
    text-white bg-hero bg-center bg-cover bg-no-repeat gap-8 before:mix-blend-multiply before:z-0 
    before:w-full before:h-full before:absolute before:bg-blue before:opacity-60"
      >
        <div className="flex flex-col gap-2 z-10">
          <h2 className="text-center font-bold text-[clamp(2em,5vw,6em)] leading-[1em]">
            ABOUT US
          </h2>
          {/* <p className="text-center text-[clamp(1em,2vw,6em)] px-[1rem] leading-[1.2em]">
            ABOUT US
          </p> */}
        </div>
      </section>
      <section className="container my-[3rem] mx-auto">
        <h1 className="font-bold text-[1.5rem] text-blue mb-[1rem]">ABOUT EDUJOBS</h1>
        <p>
          EduJobs is an innovative EdTech start-up whose goal is to eradicate
          the need for teachers, tutors, and job seekers to search through
          hundreds of ads on websites with outdated technology and broken
          databases in Nigeria. EduJobs provides a means to quickly and easily
          find qualified candidates,including teachers, tutors, and job seekers.
        </p>

        <p className="my-[2rem]">
          At EduJobs, we use technology to deliver an unsurpassed user
          experience while giving parents and employers access to a high-quality
          pool of educational talent and safe transportation for their children
          to and from school.
        </p>

        <p>
          As part of our commitment to assisting schools in connecting the
          best-verified talent available to the classrooms where they are most
          needed, helping parents onboard tutors, we connect you to job
          descriptions that match your qualifications and experiences. <br />{" "}
          Our solutions are tailored to meet the demands of today's tech-savvy
          world.
        </p>

        <div className="flex flex-col md:flex-row gap-[2rem]  justify-center text-center my-[3rem]">
          <div className="w-full md:w-1/2">
            <h1 className="text-blue font-bold text-[1.2rem]">Our Belief</h1>
            <p>
              We believe that education is an investment in the future. And when
              we invest in education, we’re investing in the future of our
              homes, our communities, and our country Our goal is to eradicate
              the need to search for teachers by school owners, private tutors
              by parents, and job opportunities by teachers through superb tech
              solutions
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-blue font-bold text-[1.2rem]">Our Solution</h1>
            <p>
              We want to stop teachers from looking for jobs indefinitely and
              make it simple for them to move careers if their current position
              isn't convenient for them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
