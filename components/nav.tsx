import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="bg-gray-400">
        <ul className="flex  p-4 max-w-screen-sm mx-auto justify-around">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href={"about"} className="hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
