import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-[60vh] bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card w-full md:w-[512px] shadow-2xl bg-base-100">
            <div className="card-body">
              <form className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered"
                  name="fullName"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email"
                  className="input input-bordered"
                />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Give a password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input input-bordered"
                  name="confirmPassword"
                />
                <label className="label"></label>
                <button type="submit" className="btn btn-primary">
                  SignUp
                </button>
              </form>
              <div className="flex flex-col justify-center items-center p-6">
                <p>{"Already a user?"}</p>
                <Link href="/log-in" className="underline text-secondary">
                  {"Please Log In -->"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
