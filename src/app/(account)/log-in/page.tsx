import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div>
      <div className="hero min-h-[60vh] bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-full md:w-[512px] shadow-2xl bg-base-100">
            <div className="card-body">
              <form className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email"
                  className="input input-bordered"
                  name="email"
                />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Your password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <Link href="#a" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="flex flex-col justify-center items-center p-6">
                <p>{"Haven't sign up yet?"}</p>
                <Link href="/sign-up" className="underline text-secondary">
                  {"Go to Sign Up -->"}
                </Link>
                <Link href="/" className="underline text-secondary">
                  {"Go back Home -->"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
