

export default function About() {
  return (
    <div className="container mx-auto p-6 pt-10 rounded-2xl md:p-10 lg:p-16 xl:p-20 bg-gradient-to-r from-purple-500 to-pink-500 animate-gradientAnimation">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-10 text-center uppercase">About</h1>
      <div className="bg-black text-white rounded-2xl m-10 mr-15 pr-10 shadow-md p-10 md:p-16 lg:p-20 xl:p-15 transition duration-300 hover:-translate-y-2">
        <div>
          <h3 className="text-2xl md:text-3xl  lg:text-4xl font-bold text-[#f0a500] mb-5">About Me :-</h3>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 hover:text-blue-500 transition duration-300">
            I possess a robust skill set that encompasses TypeScript and JavaScript, enabling me to develop dynamic and interactive web applications. My proficiency in HTML and CSS allows me to create visually appealing and responsive user interfaces. Additionally, I have experience with Next.js, which enhances my ability to build server-rendered React applications with optimized performance. My background in C.I.T (Computer Information Technology) provides me with a solid foundation in software development and IT principles. Furthermore, I excel in communication skills, facilitating effective collaboration with team members and stakeholders to ensure project success.
          </p>
        </div>
      </div>
    </div>
  );
}
