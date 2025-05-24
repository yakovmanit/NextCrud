import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center bg-blue-600 px-8 py-3 mt-4 text-white">
        <li>
          <Link href={'/'}>NextCrud</Link>
        </li>
        <li>
          <Link href={'/addTopic'}>Add topic</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;