import Link from "next/link";
import Logo from "components/atoms/Logo";
import CartIcon from "../Cart/CartIcon";

export default function Header({ items }) {
  return (
    <>
      <header className="w-full fixed bg-white items-center h-[100px] z-10 px-8 hidden lg:flex">
        <Logo className="w-32" />
        <div className="flex-1 justify-end hidden md:flex">
          {(items || []).map((item) => (
            <div
              key={item.id}
              className="hover:bg-slate-700 hover:text-seafoam cursor-pointer relative group last:bg-black last:text-seafoam"
            >
              <div>
                <Link href={item.destination} className="py-3 px-5 block">
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <CartIcon />
      </header>
    </>
  );
}
