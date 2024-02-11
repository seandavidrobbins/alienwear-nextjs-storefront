import Link from "next/link";
import Logo from "components/atoms/Logo";
import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

export const NavMobile = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <header className="w-full fixed bg-white flex h-[100px] z-10 px-4 lg:hidden">
      <div ref={ref} className="flex justify-between w-full items-center">
        <Logo className="w-32" />
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0"
            >
              <ul className="grid gap-2 mt-12">
                {(items || []).map((item, index) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2 + index / 10,
                      }}
                      key={item.id}
                      className="z-100 w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 "
                    >
                      <Link
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                        }
                        href={item.destination}
                      >
                        <span className="flex gap-1 text-xl text-seafoam">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
