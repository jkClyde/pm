'use client'

import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiUser
} from "react-icons/fi";
import { FaTasks } from "react-icons/fa";

import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; 



export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0  bg-[#171717] p-2"
      style={{
        width: open ? "236px" : "fit-content",
      }}
    >
      {/* <TitleSection open={open} /> */}

      <ToggleClose open={open} setOpen={setOpen} />


      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />

        <Option
          Icon={FiMonitor}
          title="Projects"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />

        <Option
          Icon={FaTasks}
          title="Daily Tasks"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
       
      
        <Option
          Icon={FiBarChart}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiUser}
          title="Account"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-[#212121] text-indigo-800" : "text-slate-500 hover:bg-[#212121]"} cursor-pointer`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon   className="text-white"/>
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-sm font-medium text-white"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

// const TitleSection = ({ open }) => {
//   return (
//     <div className="mb-3 border-b border-slate-300 pb-3">
//       <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
//         <div className="flex items-center gap-2">
//           <Logo />
//           {open && (
//             <motion.div
//               layout
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.125 }}
//             >
//               <span className="block text-xs font-semibold">TomIsLoading</span>
//               <span className="block text-xs text-slate-500">Pro Plan</span>
//             </motion.div>
//           )}
//         </div>
//         {open && <FiChevronDown className="mr-2" />}
//       </div>
//     </div>
//   );
// };

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="border-b border-slate-300 transition-colors cursor-pointer w-full"
    >
      <div className="flex items-center p-2 justify-end">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          {open ? (
            <FiArrowLeft className="transition-all duration-200" />
          ) : (
            <FiArrowRight className="transition-all duration-200" />
          )}
        </motion.div>
        {/* {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )} */}
      </div>
    </motion.button>
  );
};

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;