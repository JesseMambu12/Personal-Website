"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";

type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string;
};
export default function MainPage() {
  const experiences: Experience[] = [
    {
      company: "JJ Group",
      position: "Senior Account Executive",
      duration: "Jan 2024 - Des 2024",
      description:
        "Delivering and maintaining the our cients brand campaign that advertise their product in OOH advertising.",
    },
    {
      company: "PT MNC TELEVISI NETWORK",
      position: "ACCOUNT EXECUTIVE",
      duration: "Jan 2023 - Dec 2023",
      description:
        "Delivering and maintaining the our cients brand campaign that advertise their product in iNews TV.",
    },
    {
      company: "ASTRA PROPERTY",
      position: "Business Consultant",
      duration: "Jun 2022 - Dec 2022",
      description:
        "Become a consultant of design interior and exterior of Astra Property.",
    },
    {
      company: "PT GALVA TECHNOLOGIES",
      position: "Business Consultant",
      duration: "Sep 2018 - Okt 2019",
      description:
        "Selling a HP and Samsung multifunction printer to the business corporation.",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative grid md:grid-cols-2 bg-[#fcbf4e] gap-4 md:pl-23 px-5">
        <div className="md:col-span-1 place-self-center text-left md:py-16 pb-10 pt-16 mt-6 tracking-wider space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            {" "}
            Hi! I'm{" "}
            <p className="bg-[#010126] text-[#fcbf4e]">
              Jesse Christian Mambu
            </p>{" "}
            A Fullstack Web Developer{" "}
          </h1>
          <p className="text-2xl text-black mt-4">
            I understand that every business is unique, and I’m here to develop
            tailored solutions that align with your goals. Let’s collaborate and
            build something impactful for your brand.
          </p>
          <button className="absolute bg-[#010126] hover:bg-white text-white hover:text-black py-2 px-4 rounded-md">
            <p>Reach me out</p>
          </button>
        </div>
        <Image
          src="/fotojesse.png"
          alt="Jesse's Image"
          width={600}
          height={600}
          className="md:col-span-1 grid self-end w-130 h-auto object-cover place-self-center text-center"
        />
      </header>

      {/* About Section*/}
      <main>
        <section className="md:grid md:grid-cols-2 bg-white md:px-23 px-5 py-20 h-screen w-full items-center flex flex-col">
          <div className="col-span-1">
            <Image
              src="/about.png"
              alt="foto html"
              width={600}
              height={600}
              className="place-self-center mr-20"
            />
          </div>
          <div className="col-span-1 space-y-5 pt-5">
            <h1 className="text-5xl md:text-4xl font-bold text-black">
              About me
            </h1>
            <p className="text-1xl text-black p-6">
              hello everyone, I'm Jesse, I'm a fullstack developer who is quite
              confident in my abilities and experience. Maybe I'm still a novice
              in the world of programming, but I have quite a lot of experience
              in the world of work. In 2018 I graduated with a Bachelor of
              Management from a private university in North Sulawesi. Right
              after I graduated, I immediately worked in the world of sales
              marketing and focused on that field for approximately 5 years. In
              my previous work experience, I learned a lot about communication
              skills, both internal and external communication, I was also used
              to working to achieve company targets and goals, and of course I
              also learned about business flow in the company where I worked.
              Now I work as a software engineer, a very challenging and exciting
              field of work in my opinion. I found that I really enjoy working
              in this field. Working using javascript, react, nextjs etc. in my
              daily routine turns out to be very satisfying. I am confident that
              my previous work experience in sales marketing coupled with my web
              developer skills, will be the perfect combination and tool for me
              to use in my next job.
            </p>
          </div>
        </section>
      </main>

      {/* Expertise Section*/}
      <main className="h-full p-10 bg-gray-200 text-center">
        <section className="md:grid sm:grid-cols-3 flex flex-col items-center">
          <h1 className="col-span-3 text-4xl md:text-4xl font-bold text-black mb-10 ">
            My Expertise
          </h1>
          <div className="col-span-3 grid md:grid-cols-3 gap-6 mx-20">
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-70 h-60 flex flex-col items-center">
              <Image
                src="/html2.png"
                alt="foto html"
                width={100}
                height={100}
              />
              <h3 className="text-lg md:text-xl font-semibold text-black mt-3">
                HTML
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloribus nam quis soluta .
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-70 h-60 flex flex-col items-center">
              <Image src="/css2.png" alt="foto html" width={100} height={100} />
              <h3 className="text-lg md:text-xl font-semibold text-black">
                CSS
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloribus nam quis soluta .
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-70 h-60 flex flex-col items-center">
              <Image src="/js.png" alt="foto html" width={100} height={100} />
              <h3 className="text-lg md:text-xl font-semibold text-black">
                JAVASCRIPT
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloribus nam quis soluta .
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-70 h-60 flex flex-col items-center">
              <Image
                src="/nextjs.png"
                alt="foto html"
                width={100}
                height={100}
              />
              <h3 className="text-lg md:text-xl font-semibold text-black mt-3">
                NEXTJS
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloribus nam quis soluta .
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-70 h-60 flex flex-col items-center">
              <Image
                src="/react.png"
                alt="foto react"
                width={100}
                height={100}
              />
              <h3 className="text-lg md:text-xl font-semibold text-black">
                REACT
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloribus nam quis soluta .
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-70 h-60 flex flex-col items-center">
              <Image
                src="/logotailwind.png"
                alt="foto tailwind"
                width={100}
                height={100}
              />
              <h3 className="text-lg md:text-xl font-semibold text-black">
                TAILWIND
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                doloribus nam quis soluta .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Portofolio Section */}
      <section className="h-screen p-10 bg-white text-center text-black">
        <div className="grid grid-cols-2 mt-10">
          <div className="md:col-span-1">
            <Image
              src="/sscompanywebsite.jpg"
              alt="gambar company website"
              width={500}
              height={500}
              className="md:mx-15"
            />
            <h1 className="m-5 text-2xl">Starbucks Website Clone</h1>
            <p className="px-10">
              I developed a modern company profile website using Next.js,
              Tailwind CSS, and TypeScript, inspired by Starbucks Indonesia. The
              site included Home, About Us, Services, Teams (with dynamic data
              from the RandomUser API), and Working Experience pages. I focused
              on creating a responsive, visually appealing, and high-performance
              platform with smooth navigation and SEO optimization. The result
              was a fast, scalable website that enhanced the company’s online
              presence and user engagement.
            </p>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/ssblogspot.png"
              alt="gambar blogspot"
              width={500}
              height={500}
              className="md:mx-20"
            />
            <h1 className="m-5 text-2xl">Individual Blogspot</h1>
            <p className="px-10">
              I designed and developed a blog using Blogspot, focusing on a
              clean layout and intuitive navigation. The main goal was to create
              a responsive design for a seamless user experience across all
              devices. I optimized the content structure and visual elements to
              enhance readability and engagement. As a result, the blog achieved
              a professional look, easy management, and an improved reading
              experience for visitors.
            </p>
          </div>
        </div>
      </section>

      {/*Testimonials Section*/}
      <section className="relative grid md:grid-cols-2 gap-4 md:pl-23 px-5 bg-[#fcbf4e]">
        <div className="md:col-span-1 ">
          <Image
            src="/rus.png"
            alt="rus's Image"
            width={100}
            height={100}
            className="md:col-span-1 grid self-end w-70 h-auto object-cover place-self-center text-center"
          />
        </div>
        <div className="place-self-center text-left md:pr-8 pb-10 pt-10">
          <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
            {" "}
            What they said?{" "}
          </h1>
          <h2 className="text-black text-xl font-bold">Russel Westbrook</h2>
          <p className="text-black text-base font-bold">
            Brand Manager of Starbucks
          </p>
          <p className="text-base text-black mt-4 italic">
            "Working with Jesse was an absolute game-changer for our business.
            They built a sleek, high-performance website that not only looks
            amazing but also drives real engagement. Their expertise in Next.js
            and Tailwind CSS ensured that our site is fast, responsive, and easy
            to maintain. Highly recommended!"
          </p>
        </div>
      </section>

      {/*Experience Section*/}
      <div className="grid place-self-center w-full px-6 py-10 mx-10 md:px-20 bg-[#010126]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Working Experience
        </h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl text-black font-semibold">
                {exp.company}
              </h2>
              <p className="text-gray-600">{exp.position}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Contact Us*/}
      <section className="w-full h-1/2 bg-white flex flex-col items-center justify-center px-6 py-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black">Contact Us</h2>
        <p className="text-lg text-gray-700 mt-2">
          Any questions or remarks? Just write us a message!
        </p>

        {/* Form */}
        <div className="w-full max-w-2xl bg-gray-300 rounded-xl shadow-md p-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="input input-bordered w-full mt-1 bg-gray-200 text-gray-400"
              />
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered w-full mt-1  bg-gray-200 text-gray-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button className="btn bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-600 transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12 text-center">
          {/* Club Info */}
          <div className="bg-gray-300 p-6 rounded-lg flex flex-col items-center">
            <MdEmail className="text-black text-5xl" />
            <h3 className="font-bold text-black mt-2">EMAIL</h3>
            <p className="text-gray-600 mt-1">jessechristianmambu@gmail.com</p>
            <p className="text-gray-600 mt-1">tesaenjelia@gmail.com</p>
          </div>

          {/* Phone Info */}
          <div className="bg-gray-300 p-6 rounded-lg flex flex-col items-center">
            <FaPhoneFlip className="text-black text-5xl" />
            <h3 className="font-bold text-black mt-2">PHONE (LANDLINE)</h3>
            <p className="text-gray-600 mt-1">+62 23 567 8987</p>
            <p className="text-gray-600">+62 44 252 3336</p>
          </div>

          {/* Office Location */}
          <div className="bg-gray-300 p-6 rounded-lg flex flex-col items-center">
            <FaLocationDot className="text-black text-5xl" />
            <h3 className="font-bold text-black mt-2">OUR OFFICE LOCATION</h3>

            <p className="text-gray-600 mt-1">Serpong Garden Apartment</p>
            <p className="text-gray-600">
              Cisauk, Cibogo, Tanggerang, Indonesia
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
