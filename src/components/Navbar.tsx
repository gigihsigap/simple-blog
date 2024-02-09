import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-8 max-md:px-5 max-md:max-w-full mb-8">
      <div className="flex flex-col max-w-full w-[1216px]">
        <div className="flex gap-5 justify-between max-w-full max-md:flex-wrap">
          <Link href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb535a8c0c372013d89a22e62b89dba65f765fc10917793e891b1a98dad4831d?"
              className="self-start w-28 max-w-full aspect-[4.76]"
            />
          </Link>
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <Link href={""}>Home</Link>
            <Link href={""}>Random Post</Link>
            <Link href={""}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar