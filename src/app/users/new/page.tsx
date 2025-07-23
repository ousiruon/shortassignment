"use client";

import { User } from "@/app/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewUser = () => {
  const [userAdded, setUserAdded] = useState(false);
  const navigate = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newId: string = uuidv4();
    const userData: User = {
      id: newId,
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      website: formData.get("website") as string,
      company: {
        name: formData.get("companyName") as string,
        catchPhrase: formData.get("slogan") as string,
        bs: formData.get("business") as string,
      },
      address: {
        street: formData.get("street") as string,
        suite: formData.get("suite") as string,
        city: formData.get("city") as string,
        zipcode: formData.get("zipcode") as string,
        geo: {
          lat: formData.get("lat") as string,
          lng: formData.get("lng") as string,
        },
      },
    };
    console.log("User Data Submitted:", userData);
    event.currentTarget.reset();
    setUserAdded(true);
    setTimeout(() => {
      navigate.push("/users");
      setUserAdded(false);
    }, 2000);
  };
  return (
    <>
      <div className="fixed top-10 left-[50%] translate-x-[-50%]">
        {userAdded && (
          <div className="bg-terniary/40 py-2 px-4 rounded shadow-lg">
            User Added
          </div>
        )}
      </div>
      <div className="flex items-start justify-start p-10 flex-col gap-10">
        <Link href="../users" className="underline text-sm font-bold">
          Back
        </Link>
        <h1 className="font-bold text-xl">Create New User</h1>
        <div className="flex flex-1 items-start justify-start w-[90%] mx-auto md:mx-0 md:w-[400px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="name"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
              />
            </div>
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="username"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Username
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
              />
            </div>
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="email"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
              />
            </div>
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="phone"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Phone Number
              </label>
              <input
                required
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
                className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
              />
            </div>
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="website"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Website
              </label>
              <input
                required
                type="text"
                name="website"
                id="website"
                placeholder="Enter Website"
                className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
              />
            </div>
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="companyName"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Company
              </label>
              <div className="flex w-full flex-col gap-2">
                <input
                  required
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Enter Company Name"
                  className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                />
                <input
                  required
                  type="text"
                  name="slogan"
                  id="slogan"
                  placeholder="Enter Company Slogan"
                  className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                />
                <input
                  required
                  type="text"
                  name="business"
                  id="business"
                  placeholder="Enter Business Type"
                  className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <label
                htmlFor="street"
                className="font-semibold w-[150px] text-sm md:text-:base md:w-[200px] py-2"
              >
                Full Address
              </label>
              <div className="flex w-full flex-col gap-2">
                <div className="w-full flex flex-row gap-2">
                  <input
                    required
                    type="text"
                    name="street"
                    id="street"
                    placeholder="Street"
                    className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                  />
                  <input
                    required
                    type="text"
                    name="suite"
                    id="suite"
                    placeholder="Suite/Apt"
                    className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                  />
                </div>
                <div className="w-full flex flex-row gap-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                  />
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Zip Code"
                    className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                  />
                </div>
                <div className="w-full flex flex-row gap-2">
                  <input
                    type="text"
                    name="lat"
                    id="lat"
                    placeholder="Latitude"
                    className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                  />
                  <input
                    type="text"
                    name="lng"
                    id="lng"
                    placeholder="Longitude"
                    className="w-full py-2 px-4 border border-terniary rounded outline-0 focus:shadow-lg bg-terniary/10 focus:bg-terniary/5 transition-all duration-300 ease-in text-xs"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-2">
              <button
                type="submit"
                className="py-2 px-4 bg-terniary hover:bg-terniary/80 rounded  transition-colors duration-300 ease-in cursor-pointer text-sm md:text-base"
              >
                Create User
              </button>
              <button
                type="reset"
                className="py-2 px-4 bg-terniary hover:bg-terniary/80 rounded  transition-colors duration-300 ease-in cursor-pointer text-sm md:text-base"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NewUser;
