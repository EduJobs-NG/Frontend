import React from "react";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const JobseekerRegisterFormUI = () => (
  <>
    <section className=" bg-blue flex h-screen justify-center items-center">
      <div className="w-full py-[2rem]  max-w-[500px]">
        <RegisterForm />
      </div>
    </section>
  </>
);
