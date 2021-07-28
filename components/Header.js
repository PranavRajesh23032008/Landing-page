import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Header = () => {
  return (
    <div
      data-aos="fade-left"
      className={
        "bg-black text-white flex items-center py-6 lg:px-14 px-5 sticky top-0 z-50"
      }
    >
      <img
        className={"h-10 lg:h-20"}
        src={"https://content.iconworldoftile.com/icon/images/logo_white.png"}
      />
      <div className={" items-center mx-auto space-x-12 lg:inline-flex hidden"}>
        <p
          className={
            "cursor-pointer hover:font-semibold transition duration-150 transform p-2 hover:scale-150"
          }
        >
          About ICON{" "}
        </p>
        <p
          className={
            "cursor-pointer hover:font-semibold transition  duration-150 transform p-2 hover:scale-150"
          }
        >
          Product Book
        </p>
        <p
          className={
            "cursor-pointer hover:font-semibold transition duration-150 transform p-2 hover:scale-150"
          }
        >
          Market
        </p>
        <p
          className={
            "cursor-pointer hover:font-semibold transition duration-150 transform p-2 hover:scale-150"
          }
        >
          Happy to Help{" "}
        </p>
        <p
          className={
            "cursor-pointer hover:font-semibold transition duration-150 transform hover:scale-150 p-2"
          }
        >
          Reach Us
        </p>
      </div>

      <Menu>
        <Menu.Button
          className={
            "ml-auto lg:hidden outline-none hover:font-semibold transition duration-150 transform hover:text-black border-white border-2 p-2 rounded-full hover:bg-white"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="lg:hidden absolute right-0 w-56 mt-64 mr-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex hover:bg-black rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    About ICON
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex hover:bg-black rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Product Book
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex hover:bg-black rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Market
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex hover:bg-black rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Happy to Help
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex hover:bg-black rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Reach Us
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Header;
