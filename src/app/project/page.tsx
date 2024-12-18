import Image from 'next/image';

export default function Project() {
  return (
    <div className="container w-auto mx-auto p-6 pt-10 rounded-lg md:p-10 lg:p-16 xl:p-20 animate-gradientAnimation">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-10 text-center uppercase">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-auto gap-8 justify-center">
        {/* Count-down Timer */}
        <div className="bg-black text-white rounded-2xl shadow-md w-auto p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/count-down-timer.png"
            alt="Count-down Timer"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
            Count-down Timer
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
            A website powered by Next.js and TypeScript, featuring an interactive countdown function for tracking events.
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://01-countdown-timer-azure.vercel.app/" target="_blank" className="text-white">
              View Timer
            </a>
          </button>
        </div>

        {/* Static Interactive Resume */}
        <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/cv.png"
            alt="Static Interactive Resume"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 text-center transition-colors duration-300 hover:text-blue-500">
            Static Interactive Resume
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
            An interactive resume built with TypeScript, HTML, and CSS, enabling users to dynamically showcase their skills.
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://static-interative-resume-builder.vercel.app/" target="_blank" className="text-white">
              View Resume
            </a>
          </button>
        </div>

        {/* Todo List */}
        <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/todo list.png"
            alt="Todo List"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
            Todo List
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
            A task management application built with React and TypeScript, designed for efficient organization and productivity.
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://03-todo-list.vercel.app/" target="_blank" className="text-white">
              View List
            </a>
          </button>
        </div>
{/* Simple Calculator */}
        <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/calculator.PNG"
            alt="calculator"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
            Simple Calculator
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
          The Simple Calculator is an intuitive web application designed for basic arithmetic operations. Users can perform addition, subtraction, multiplication, and division with ease. The interface features two input fields for entering numbers, a display for the result, and clearly labeled buttons for each operation.          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://04-simple-calculator.vercel.app/" target="_blank" className="text-white">
              View Calculator
            </a>
          </button>
        </div>

        {/* Digital Clock */}
        <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/digital clock.PNG"
            alt="digital Clock"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
            Digital Clock
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
          The Digital Clock is a user-friendly component that displays the current time in a clear and visually appealing format. It offers two modes: a 24-hour format for those who prefer military time, and a 12-hour format for a traditional view. The clock updates every second, ensuring real-time accuracy.
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://05-digital-clock.vercel.app/" target="_blank" className="text-white">
              View Clock
            </a>
          </button>
        </div>

        {/* Number Guessing Game */}
        <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/number guessing.PNG"
            alt="Number Guessing Game"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
          Number Guessing Game
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
          The Number Guessing Game challenges players to guess a randomly generated number between 1 and 10. Players receive feedback on their guesses and can track their attempts until they correctly identify the number.
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://06-number-guessing-game.vercel.app/" target="_blank" className="text-white">
              View Game
            </a>
          </button>
        </div>

         {/*Birthday Wish*/}
         <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/birthday_wish.PNG"
            alt="Birthday Wish"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
          Birthday Wish
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
          A birthday wish is a  heartfelt message sent to someone on their special day, expressing good wishes, happiness, and love. It is a way to celebrate their life and make them feel valued and appreciated.
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://08-birthday-wish.vercel.app/" target="_blank" className="text-white">
              View Birthday Wish
            </a>
          </button>
        </div>

         {/*Random Jokes Generator*/}
         <div className="bg-black text-white rounded-2xl shadow-md p-5 transition duration-300 hover:-translate-y-2 flex flex-col items-center h-full">
          <Image
            src="/random jokes.PNG"
            alt="Random Jokes Generator"
            width={300}
            height={250}
            className="rounded-2xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
          <h3 className="text-xl font-bold text-[#f0a500] mb-2 mt-4 transition-colors duration-300 hover:text-blue-500">
         Random Jokes Generator
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center">
          Warning: Side effects may include uncontrollable laughter, eye-rolling, and the sudden urge to tell everyone your newfound joke. So, grab your phone, get ready to chuckle, and remember: if you can not laugh at yourself, do not worry this web will do it for you!
          </p>
          <button className="bg-[#f0a500] font-bold border-none rounded-md text-white p-2 transition-colors duration-300 hover:bg-blue-500 hover:scale-105">
            <a href="https://07-random-joke-generator-gamma.vercel.app/" target="_blank" className="text-white">
              View Jokes Generator
            </a>
          </button>
        </div>


      </div>
    </div>
  );
}
