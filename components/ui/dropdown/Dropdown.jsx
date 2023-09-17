"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (language) => {
    router.push(pathname, { locale: language.toLowerCase() });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex w-[full] justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 "
          style={{ fontFamily: "sofia pro" }}
        >
          {props.name}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-[#A82730] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bottom-[100%]">
          <div className="py-1">
            {props.isLanguage
              ? props.options.map((option) => {
                  return (
                    <Menu.Item key={option}>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? null : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => {
                            handleLanguageChange(option);
                          }}
                        >
                          {option}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })
              : props.options.map((option) => {
                  return (
                    <Menu.Item key={option}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? null : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
