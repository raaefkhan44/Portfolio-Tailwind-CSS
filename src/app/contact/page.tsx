import Image from 'next/image';

export default function Contact() {
  return (
    <div className="container mx-auto p-6 pt-10 rounded-lg md:p-10 lg:p-16 xl:p-20 animate-gradientAnimation">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-black mb-10 text-center uppercase">Contact Us</h1>
      <div className="bg-black text-white rounded-2xl shadow-md p-10 md:p-16 lg:p-20 xl:p-24 transition duration-300 hover:-translate-y-2 max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f0a500] mb-5">Get in Touch</h2>
        </div>
        <form className="flex flex-col">
          <div className="mb-5">
            <label htmlFor="name" className="font-semibold mb-2 block text-gray-400">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-400 rounded-md focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="font-semibold mb-2 block text-gray-400">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-400 rounded-md focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="font-semibold mb-2 block text-gray-400">Message:</label>
            <textarea id="message" name="message" required className="w-full p-2 border border-gray-400 rounded-md focus:border-blue-500 focus:outline-none resize-vertical" />
          </div>
          <button type="submit" className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">Send Message</button>
        </form>
        <div className="mt-8 flex justify-center gap-6">
            <a className="inline-block bg-gray-100 rounded-full p-2 transition duration-300 ease-in-out hover:transform hover:scale-110" href="https://github.com/raaefkhan44" target="_blank">
              <Image src="/github.png" alt="GitHub" width={60} height={60} />
            </a>
            <a className="inline-block bg-gray-100 rounded-full p-2 transition duration-300 ease-in-out hover:transform hover:scale-110" href="https://www.linkedin.com/in/raaef-khan-b809482bb/" target="_blank">
              <Image src="/linkedin.png" alt="LinkedIn" width={60} height={60} />
            </a>
          </div>
      </div>
    </div>
  );
}
