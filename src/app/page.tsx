import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen relative bg-gradient-to-r from-purple-500 to-pink-500 animate-gradientAnimation">
      <h1 className="text-center text-black font-roboto font-bold text-5xl py-5 mt-1">Home</h1>
      <div className="main-hero flex flex-col items-center bg-black  rounded-2xl shadow-md p-10 m-5 opacity-0 translate-y-5 animate-fadeInUp md:flex-row md:justify-center md:p-15">
        <Image
                  className=" w-40 h-40 rounded-full [box-shadow:0px_0px_20px_yellow] object-cover mb-5 transition-transform duration-300 opacity-79 shadow-orange-400 hover:scale-110  md:w-50 md:h-50 md:mr-10 md:mb-0"
          src="/profile pic.jpeg"
          alt="Profile of Raaef Khan"
          height={376}
          width={322}
        />
        <div className="content text-center">
          <h2 className="text-white text-2xl  font-bold mt-2 mb-2">Hello I&apos;m</h2>
          <h1 className="text-[hsl(41,100%,47%)] text-5xl mt-5 mb-5 transition-colors duration-300 hover:text-amber-900 font-semibold md:text-6xl">Raaef Khan</h1>
          <p className="text-gray-600 text-lg mt-5 mb-5 line-height-150 opacity-0 animate-fadeIn md:text-lg">I am a passionate website developer and <br /> Gonna be AI developer soon.</p>
        </div>
      </div>
    </div>
  );
}
