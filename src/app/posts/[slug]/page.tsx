import Link from "next/link";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  return (
    <main >
      <div className="flex flex-col items-center pt-8">
        <Navbar/>
        
        <div className="px-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mt-4 text-4xl font-semibold leading-10 text-gray-900 w-[800px] max-md:max-w-full max-sm:pl-3 max-sm:-ml-1">
            The Impact of Technology on the Workplace: How Technology is Changing
          </div>
          <div className="flex gap-5 justify-between pr-5 mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
            <div className="flex gap-2 justify-between font-medium">
              <img
                loading="lazy"
                srcSet="https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qSRhqaNWD8R1F1auW7ywVrtPxLiEKkumS4G4wGLuDvA70zxW0gYrgssV1HAF8LJfMQSs5MCKyjzaJWM8cUuoXV6XfmS1gCy3R-XvbBRVDdEpnmEdthuplVVvW15aku2ToB1NSE9XUxFlnWOB0KKqNnJfGzcX9y0rhC77ifKx3pAvpWIDxcaFLneAhGnuR6vmPtxPBaiB4grg8f4ef-mqShA9f-qzE8U-Ztq3ZQgyi6Pj5fDhrQDDVeyT-WRc5UMw~Ab2yEeLPZIUeKr-HaX2n8TB3FhramXQutvc1NQlz7A1b0-hz9olPqP0Pa0CY6zE15KU3WdIKIyD3l8x6Kj3Tg__"
                className="w-7 aspect-square rounded-full"
              />
              <div className="grow my-auto">Tracey Wilson</div>
            </div>
            <div className="grow my-auto">August 20, 2022</div>
          </div>
          <img
            loading="lazy"
            src="https://s3-alpha-sig.figma.com/img/eb1f/38cd/a6a8e0df2280c787cafc780464b002fe?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKOrTN7gUeTiHmMS1ChL3p9qYr9NhyNZRGfx1nLLj~hxwYFZdmUOkzlBS-36Xl8Rr163FtBXSgjMyBV~q4EIZ6Fe8zdiHs2dQpyYCfvb2NoMx1nSKplLEzSfkla5Amz1gmWaHqym54Wc4F5yNVHqiGQ2jNyLW-T93dh5RrMo4lx0ETt7Da6E9~WSGZ0AzdDIahQROt0Dte5WxTg-zr6VcmXEtmA1hXIWFRvXg6t6kn7YE14e8EJbBJjO1ILftB1EKLqSQuwDOBHKE2gxG~GT7vh-nTk36ggcTlkWaVFBXd2-cigmBB0~Rd~bRg9xQMkpTF0uH16ngJnx8pzGFbCLfg__"
            className="mt-8 mb-8 max-w-full aspect-[1.72] w-[800px]"
          />
          
          <div className="text-xl leading-8 text-zinc-700 w-[804px] max-md:max-w-full">
            Traveling is an enriching experience that opens up new horizons, exposes
            us to different cultures, and creates memories that last a lifetime.
            However, traveling can also be stressful and overwhelming, especially if
            you do not plan and prepare adequately. In this blog article, we will
            explore tips and tricks for a memorable journey and how to make the most
            of your travels.
            <br />
            <br />
            One of the most rewarding aspects of traveling is immersing yourself in
            the local culture and customs. This includes trying local cuisine,
            attending cultural events and festivals, and interacting with locals.
            Learning a few phrases in the local language can also go a long way in
            making connections and showing respect.
            <br />
            <br />
            Finally, do not forget to capture memories of your journey. Whether it is
            through photographs, journaling, or souvenirs, preserving the moments
            and experiences of your travels can bring joy and nostalgia for years to
            come. However, it is also essential to be present in the moment and not
            let technology distract you from the beauty of your surroundings.
          </div>
          <div className="flex gap-5 justify-between pr-5 mt-5 text-sm font-medium leading-5 text-white whitespace-nowrap">
            <div className="flex gap-2 mt-6 mb-10">
              <div className="px-3 py-1.5 grow my-auto bg-indigo-500 rounded-md ">Technology</div>
              <div className="px-3 py-1.5 grow my-auto bg-indigo-500 rounded-md ">Career</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  );
}

