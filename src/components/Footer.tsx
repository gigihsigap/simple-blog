const Footer = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-12 mt-20 w-full border-t border-solid bg-neutral-100 border-t-[color:var(--Secondary-100,#E8E8EA)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-3.5 max-w-full w-[1216px]">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pr-2.5 text-base font-semibold leading-6 text-zinc-700 max-md:mt-5">
                <div className="text-lg leading-7 text-gray-900">About</div>
                <div className="mt-3 text-zinc-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </div>
                <div className="mt-6">
                  Email :{" "}
                  <span className=" text-zinc-700">info@jstemplate.net</span>
                </div>{" "}
                <div className="mt-1">
                  Phone :{" "}
                  <span className=" text-zinc-700">880 123 456 789</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-16 text-base leading-6 whitespace-nowrap text-zinc-700 max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-w-full w-[259px]">
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold leading-7 text-gray-900">
                      Quick Link
                    </div>
                    <div className="mt-6">Home</div>
                    <div className="mt-2">About</div>
                    <div className="mt-2">Blog</div>
                    <div className="mt-2">Archived</div>
                    <div className="mt-2">Author</div>
                    <div className="mt-2">Contact</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold leading-7 text-gray-900">
                      Category
                    </div>
                    <div className="mt-6">Lifestyle</div>
                    <div className="mt-2">Technology</div>
                    <div className="mt-2">Travel</div>
                    <div className="mt-2">Business</div>
                    <div className="mt-2">Economy</div>
                    <div className="mt-2">Sports</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 py-8 mx-auto w-full text-base leading-6 whitespace-nowrap bg-white rounded-xl max-md:px-5 max-md:mt-5">
                <div className="self-center text-xl font-semibold leading-6 text-center text-gray-900">
                  Weekly Newsletter
                </div>
                <div className="self-center mt-2 text-center text-zinc-500">
                  Get blog articles and offers via email
                </div>
                <div className="flex gap-2.5 justify-between px-4 py-3 mt-8 bg-white rounded-md border border-solid border-[color:var(--Secondary-200,#DCDDDF)] text-neutral-400">
                  <div className="grow">Your Email</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3081d2964e708f4ab14e0e999ceb44b0f49cf49ca5498cd7ec52ec0d63062092?"
                    className="my-auto w-5 aspect-square"
                  />
                </div>
                <div className="flex cursor-pointer justify-center items-center px-4 py-3 mt-2 font-medium text-white bg-indigo-500 hover:bg-indigo-300 rounded-md max-md:px-5">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between py-8 mt-16 w-full border-t border-solid border-t-[color:var(--Secondary-200,#DCDDDF)] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="grow text-xl font-bold leading-7 text-gray-900 whitespace-nowrap">
            <span className="text-gray-900 ">Meta</span>
            <span className="font-extrabold text-gray-900">Blog</span>
          </div>{" "}
          <div className="flex gap-5 justify-between pr-20 my-auto text-base leading-6 text-zinc-700 max-md:flex-wrap max-md:max-w-full">
            <div className="grow whitespace-nowrap">Terms of Use</div>{" "}
            <div className="flex-auto">Privacy Policy</div>{" "}
            <div className="grow whitespace-nowrap">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;