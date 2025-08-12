import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden pt-10 bg-[#F1F0E4] border border-t-2">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="-m-6 px-4 flex flex-wrap mb-3">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-3 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-black">
                  connect with us on social media
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-3 text-xl uppercase text-black">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-3 text-xl uppercase text-black">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-3 text-xl uppercase text-black">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-xs font-light  text-black hover:text-[#3D74B6]"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white w-full text-center">
          <p className="text-[10px] py-2 text-black">
            &copy; Copyright 2023. All Rights Reserved by DevUI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
