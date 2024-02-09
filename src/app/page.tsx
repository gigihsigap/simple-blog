import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  return (
    <main >
      <div className="flex flex-col items-center pt-8">
        <Navbar/>
        <div className="flex flex-col justify-center items-center px-20 py-12 mt-14 rounded-xl bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-4 whitespace-nowrap mb-6">
            <img
              loading="lazy"
              src="https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ROCmljEXEItQqoPChUBtT2a5pyQZVUN67ZHFRZPHvf9v9ceOx68NbX2oY3eNjsv3IZWwYowfG77BJLUE7wjm-dvFnj69Tlk3XDRUbbmB92TpwKfHFatzMip5kjARND46MDJ7p23hZj4mn1UMs5AnTsJy0-cahrQX6NT-KjO34UhXRiTxm7d3KTWKvpgodobkkc9j~j6BNqvxTMKtvHqMdq5-lE1RSckHthODM~9K9Y6TsT4wbSg-8ae7TIHeMzCSWRJ2zdJFw0ET-bKsrQgcwPLCMwJibTUgct5P4qhr-MY5uQXBHrxqzC9Iv~NsJB8vbAV3VibX3-KvRpGXsq2LSw__"
              className="w-16 aspect-square rounded-full"
            />
            <div className="flex flex-col flex-1 justify-center my-auto">
              <div className="text-xl font-medium leading-7 text-gray-900">
                Jones Doe
              </div>
              <div className="text-sm leading-5 text-zinc-500">
                Collaborator & Editor
              </div>
            </div>
          </div>
          <div className="text-lg leading-7 text-center text-zinc-700">
            Meet Jones Doe, a passionate writer and blogger with a love for
            technology and travel. Jones holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </div>
          <div className="flex gap-2 mt-6">
            <Link href={""} className="flex flex-1 justify-center items-center px-2 h-8 rounded-md aspect-square bg-zinc-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11048b667fe91f4db86ab951b857443cdc7a7dd689409e97be724a6fb461cabe?"
                className="w-full aspect-square"
              />
            </Link>
            <Link href={""} className="flex flex-1 justify-center items-center px-2 h-8 rounded-md aspect-square bg-zinc-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f3683738c847ada86381ede2c79ac906e4c10b560531bf28279e92debf2de0d?"
                className="w-full aspect-square"
              />
            </Link>
            <Link href={""} className="flex flex-1 justify-center items-center px-2 h-8 rounded-md aspect-square bg-zinc-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a86d99d0486a73918d61babf0b79d2f1388384f95e42fed5fe5594ccbcd2113?"
                className="w-full aspect-square"
              />
            </Link>
            <Link href={""} className="flex flex-1 justify-center items-center px-2 h-8 rounded-md aspect-square bg-zinc-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8ab7980eee6b2252cacd43f0c711b60fcb67b95c456274d77ed88e586df3d6?"
                className="w-full aspect-square"
              />
            </Link>
          </div>
        </div>
        <div className="mt-12 text-2xl font-bold leading-7 text-gray-900 max-md:mt-10 max-md:max-w-full">
          Latest Post
        </div>
        <div className="mt-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 ml-8 mr-8">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full ">
              <Link href="/posts/1" className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-solid border-[color:var(--Secondary-100,#E8E8EA)] max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pbYPNm6AxbJrCYgXZI3FteNI76FziZqdsWmaVcUlur5OuSYsoYQ64M-LbBqtwOGIhk4PhXNg37nQfYOYa~0rA4xJ0l6to1iD54To3BtHYbXwbFZ9-~ahSYoc4L9o8gFNrWOxw9b-G9lnOo6Zy8JejGrlFT0nxQdol2rQWg85ZtQXvIDfmkgQEVBAP3t5FNcfa~GLBKMQDsxlYi3fna2U1rwa3YLI8SG0CpD5AcjXykrLOVYBp3GJAmpAFBpH9zfByhF~94vZ1ycZvnGm0F5XX1~L0TzjGpcIVeaIH931N4zOtLQm4Id5i6pafibOMtWngJMdYsoCsaq~sE4RyIKoZA__"
                  className="w-full aspect-[1.49] rounded-md"
                />
                <div className="flex flex-col p-2 mt-4">
                  <div className="justify-center self-start px-2.5 py-1 text-sm font-medium leading-5 text-indigo-500 whitespace-nowrap rounded-md bg-indigo-500 bg-opacity-10">
                    Technology
                  </div>
                  <div className="mt-4 text-2xl font-semibold leading-7 text-gray-900">
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                  </div>
                  <div className="flex gap-5 justify-between mt-5 text-base leading-6 text-neutral-400">
                    <div className="flex gap-3 justify-between font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0AXdwkd5Tn4lGFaKOrPMd5ZU9dXTqT4kGEGxIDMN1AHxfvsGKL~UYHoc1VfUmhdQc7bm-Xm4NNj1ydfjmFV-h8CVu8Jd4ZdYGEPl93v8ZZWDq6N-V-sxrqYrfGdtsr9-D8MmP7WUqRFTs8HPg-iPwCVgXOJzMHk2qFCU-2achUiUb5nSXf96BhUWVneqtgVgQu6bnVSXHZSWdGPJ2ZL-0u1-93gST-0uOGAOPzBVKEtzQtl2I7MHEi0I3P29qE6cLCDODJsvFLzx5rODQNY-Q~fObTc-0F-iBPNoQFjngjuGO~zIsonO1JNVYHvC8hxZqJRsPxOLAie9Q76bvFZWA__"
                        className="w-9 aspect-square rounded-full"
                      />
                      <div className="grow my-auto">Ernie Smith</div>
                    </div>
                    <div className="flex-auto my-auto">August 20, 2022</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Link href="/posts/2" className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-solid border-[color:var(--Secondary-100,#E8E8EA)] max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFbdHY8-75GzWixGaH37cQs6yYdUbIpltO8~CaE7mSZZAE04qhESltlGYrlqBamjYcxrFsRhuCnvCT7OgDmqiZlOhMmdTgbVI2qhHkR6acaCsE7WOgbv3n9q0xUv3pumcmUJSIUq7BxEE4Ajsw0tNgOZOmQns~yG4J7BBPQXn7Jun7HvXtmE93BTPcMbNyQCis~KMSdmo8-seSZNZGFG0XUisDq4kQxr9d0IVQyt~OBXlle87WGmPY2yeomuP8GkczQp8EbEEugJVAJL0olgm0Q3CCR51OJC6n4-X9TTAmXVvL97enkdqgVsPsA4iAiLTnCxBxvxevGaKCwVrmw1Ow__"
                  className="w-full aspect-[1.49] rounded-md"
                />
                <div className="flex flex-col p-2 mt-4">
                  <div className="justify-center self-start px-2.5 py-1 text-sm font-medium leading-5 text-indigo-500 whitespace-nowrap rounded-md bg-indigo-500 bg-opacity-10">
                    Technology
                  </div>
                  <div className="mt-4 text-2xl font-semibold leading-7 text-gray-900">
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                  </div>
                  <div className="flex gap-5 justify-between mt-5 text-base leading-6 text-neutral-400">
                    <div className="flex gap-3 justify-between font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0AXdwkd5Tn4lGFaKOrPMd5ZU9dXTqT4kGEGxIDMN1AHxfvsGKL~UYHoc1VfUmhdQc7bm-Xm4NNj1ydfjmFV-h8CVu8Jd4ZdYGEPl93v8ZZWDq6N-V-sxrqYrfGdtsr9-D8MmP7WUqRFTs8HPg-iPwCVgXOJzMHk2qFCU-2achUiUb5nSXf96BhUWVneqtgVgQu6bnVSXHZSWdGPJ2ZL-0u1-93gST-0uOGAOPzBVKEtzQtl2I7MHEi0I3P29qE6cLCDODJsvFLzx5rODQNY-Q~fObTc-0F-iBPNoQFjngjuGO~zIsonO1JNVYHvC8hxZqJRsPxOLAie9Q76bvFZWA__"
                        className="w-9 aspect-square rounded-full"
                      />
                      <div className="grow my-auto">Ernie Smith</div>
                    </div>
                    <div className="flex-auto my-auto">August 20, 2022</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Link href="/posts/3" className="flex flex-col grow justify-center p-4 w-full bg-white rounded-xl border border-solid border-[color:var(--Secondary-100,#E8E8EA)] max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8N-UaP6q6KPz4wEWB3aVJqKyDNK3MZyrukHeK07itFgI~aNxJQnhpeRQcVScqd2IwWJQ3XYh6oOxB5nYhpE8ZpQzPrGl991n2on5OTJsqJq0tz1M-d3tv0EbMzQfBONuuPNuX8YZY2z3h3Tvy22nq-EUAq5yGqBLwqt6N9w3j8LMx1c7O4kClrH40UVye23BGasFRNRUZBEFiwv4BZNAXoOM93OxZFVhKaNTDV1tK-9vENa3XDcI9OrfgChox6Qv-98FgrmnJ5RUloj6mfIVOmjbyPu0d1A~Pc6~UP56Bcdhp-njyXgoZ8-LU41s5HwfElogYkWoCbWiX3NI43q9Q__"
                  className="w-full aspect-[1.49] rounded-md"
                />
                <div className="flex flex-col p-2 mt-4">
                  <div className="justify-center self-start px-2.5 py-1 text-sm font-medium leading-5 text-indigo-500 whitespace-nowrap rounded-md bg-indigo-500 bg-opacity-10">
                    Technology
                  </div>
                  <div className="mt-4 text-2xl font-semibold leading-7 text-gray-900">
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                  </div>
                  <div className="flex gap-5 justify-between mt-5 text-base leading-6 text-neutral-400">
                    <div className="flex gap-3 justify-between font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ROCmljEXEItQqoPChUBtT2a5pyQZVUN67ZHFRZPHvf9v9ceOx68NbX2oY3eNjsv3IZWwYowfG77BJLUE7wjm-dvFnj69Tlk3XDRUbbmB92TpwKfHFatzMip5kjARND46MDJ7p23hZj4mn1UMs5AnTsJy0-cahrQX6NT-KjO34UhXRiTxm7d3KTWKvpgodobkkc9j~j6BNqvxTMKtvHqMdq5-lE1RSckHthODM~9K9Y6TsT4wbSg-8ae7TIHeMzCSWRJ2zdJFw0ET-bKsrQgcwPLCMwJibTUgct5P4qhr-MY5uQXBHrxqzC9Iv~NsJB8vbAV3VibX3-KvRpGXsq2LSw__"
                        className="w-9 aspect-square rounded-full"
                      />
                      <div className="grow my-auto">Jones Doe</div>
                    </div>
                    <div className="flex-auto my-auto">August 20, 2022</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

