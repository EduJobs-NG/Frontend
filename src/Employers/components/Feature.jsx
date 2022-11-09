import React, { useState } from "react";
import img1 from "../../assets/employerfeature-1.png";
import img2 from "../../assets/employerfeature-2.png";
import img3 from "../../assets/employerfeature-3.png";

export const Feature = () => {
  // states hooks
  const [data] = useState([
    {
      id: 1, image: img1, title: '80% Faster Shortlising',
      content: 'Utilize EduJobs to automatically rankCanddates and get rid of the never-ending staks of CV'
    },
    {
      id: 2, image: img2, title: 'Validated Candidates',
      content: 'Our platforms gives options to select validated candidates who have gone through our assessements.'
    },
    {
      id: 3, image: img3, title: 'Simplified Access',
      content: 'Post jobs, filter candidates, comment and benefit from our best-in-class customer support.'
    },
  ]);

  return (
    <section className='flex flex-col mx-auto'>
      <div className="w-screen flex-none flex items-center justify-center py-6">
        <h2 className="text-center capitalize text-blue font-bold sm:text-3xl text-xl">What EduJobs offer</h2>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        {data.map((item, id) => (
          <div key={item.id}
            style={{ flexDirection: id % 2 ? 'row' : 'row-reverse' }}
            className="flex flex-wrap gap-8 w-screen px-12 py-6 justify-center"
          >
            {/* main content */}
            <div className="flex flex-col items-start justify-center grow-1 shrink-1 basis-[30em] gap-4">
              <h3 className="text-blue font-bold capitalize sm:text-2xl text-xl" style={{ alignSelf: id % 2 ? 'flex-start' : 'flex-end' }}>{item.title}</h3>
              <p className="sm:text-xl text-sm" style={{ textAlign: id % 2 ? 'left' : 'right' }}>{item.content}</p>
            </div>
            {/* image container */}
            <div className="flex items-center justify-center grow-1 shrink-1 basis-[30em] gap-4">
              <img src={item.image} alt="" className="w-[100%] object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
