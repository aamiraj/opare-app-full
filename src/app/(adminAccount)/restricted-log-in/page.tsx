import Link from "next/link";
import React from "react";
import Logo from "../../../assets/logo_big.png";
import Image from "next/image";

const LogIn = () => {
  return (
    <div>
      <div className="hero min-h-[60vh] bg-base-100">
        <div className="hero-content flex-col">
          <div className="flex">
            <Link href="/">
              <Image src={Logo} alt="Opare logo" width={120} quality={100} />
            </Link>
          </div>
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

                <div className="w-[164px] my-4">
                  <p className="text-md font-semibold">Select your role:</p>

                  <label className="label justify-start gap-8 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      className="radio radio-primary"
                      defaultChecked
                    />
                    <span className="label-text">Admin</span>
                  </label>

                  <label className="label justify-start gap-8 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      className="radio radio-primary"
                    />
                    <span className="label-text">Employer</span>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
