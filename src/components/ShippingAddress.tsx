"use client";

import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import useSWR from "swr";

interface divisiontype {
  id: string;
  name: string;
  bn_name: string;
}

interface districttype extends divisiontype {
  division_id: string;
}

interface upazilatype extends divisiontype {
  district_id: string;
}

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => JSON.parse(data?.dataJson));

const SelectDivision = ({
  name,
  setInfo,
}: {
  name: string;
  setInfo: Function;
}) => {
  const {
    data: divisions,
    error,
    isLoading,
  } = useSWR("/api/getDivisions", fetcher);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <label className="label" htmlFor={name}>
        Division
      </label>
      <select
        id={name}
        onChange={(e) => setInfo(e.target.value)}
        className="select select-primary w-full max-w-xs"
        required
      >
        <option disabled defaultValue={""}>
          Choose division
        </option>
        {divisions.map((i: divisiontype) => (
          <option key={i.id} value={i.name}>
            {i.name}
          </option>
        ))}
      </select>
    </>
  );
};

const SelectDistrict = ({
  name,
  setInfo,
  division,
}: {
  name: string;
  setInfo: Function;
  division: string;
}) => {
  const {
    data: districts,
    error,
    isLoading,
  } = useSWR(`/api/getDistricts?division=${division}`, fetcher);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <label className="label" htmlFor={name}>
        District
      </label>
      <select
        id={name}
        onChange={(e) => setInfo(e.target.value)}
        className="select select-primary w-full max-w-xs"
        required
      >
        <option disabled defaultValue={""}>
          Choose district
        </option>
        {districts.map((i: districttype) => (
          <option key={i.id} value={i.name}>
            {i.name}
          </option>
        ))}
      </select>
    </>
  );
};

const SelectUpazila = ({
  name,
  setInfo,
  district,
}: {
  name: string;
  setInfo: Function;
  district: string;
}) => {
  const {
    data: upazilas,
    error,
    isLoading,
  } = useSWR(`/api/getUpazilas?district=${district}`, fetcher);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <label className="label" htmlFor={name}>
        Upazila
      </label>
      <select
        id={name}
        onChange={(e) => setInfo(e.target.value)}
        className="select select-primary w-full max-w-xs"
        required
      >
        <option disabled defaultValue={""}>
          Choose upazila
        </option>
        {upazilas.map((i: upazilatype) => (
          <option key={i.id} value={i.name}>
            {i.name}
          </option>
        ))}
      </select>
    </>
  );
};

const ShippingAddress = () => {
  const [customer, setCustomer] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [division, setDivision] = React.useState<string>("Chattagram");
  const [district, setDistrict] = React.useState<string>("Comilla");
  const [upazila, setUpazila] = React.useState<string>("Debidwar");
  const [address, setAddress] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(customer === "") || !(phone === "") || !(address === "")) {
      const shippingAddress = {
        customer,
        phone,
        division,
        district,
        upazila,
        address,
      };
      console.log(shippingAddress);
    }
  };

  return (
    <div className="w-[320px] lg:w-[512px] mx-auto my-10">
      <div className="flex justify-start items-center gap-2">
        <button
          title="Go back"
          type="button"
          className="btn btn-circle btn-ghost"
          onClick={() => history.back()}
        >
          <HiArrowLeft />
        </button>
        <h3 className="text-2xl font-semibold">Shipping Address</h3>
      </div>
      <form onSubmit={handleSubmit} className="form-control">
        <label className="label" htmlFor="name">
          Customer name
        </label>
        <input
          onChange={(e) => setCustomer(e.target.value)}
          id="name"
          type="text"
          className="input input-primary"
          placeholder="John Doe"
          defaultValue={""}
          required
        />
        <label className="label" htmlFor="phone">
          Phone number
        </label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          type="number"
          className="input input-primary"
          placeholder="+8801XXXXXXXX"
          defaultValue={""}
          required
        />
        <SelectDivision name="division" setInfo={setDivision} />
        <SelectDistrict
          name="district"
          setInfo={setDistrict}
          division={division}
        />
        <SelectUpazila
          name="district"
          setInfo={setUpazila}
          district={district}
        />
        <label className="label" htmlFor="address">
          Customer address
        </label>
        <textarea
          onChange={(e) => setAddress(e.target.value)}
          className="textarea textarea-primary"
          placeholder="Holding #2, Boro bazar road"
          required
        ></textarea>
        <br />
        <button type="submit" className="btn btn-secondary">
          Add
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
