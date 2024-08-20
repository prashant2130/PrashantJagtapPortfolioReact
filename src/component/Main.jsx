
export default function Main(){
    return(
        <section className="flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-20">
      <div className="flex-1 text-left">
        <h1 className="text-3xl md:text-4xl font-bold">
          Hi
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          I'm Prashant
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          Front-end Developer
        </h3>
        <p className="text-lg md:text-xl mt-6">
        Hi, my name is Prashant Jagtap. I have completed my graduation in Bachelor of Computer Science and master degree in Computer Application. My expertise includes HTML, CSS, Java and JavaScript and react, which allows me to create dynamic and responsive websites.
        </p>
        <div className="mt-5 flex space-x-4">
        <button className="mt-5 flex space-x-4">  <a
            href="#hire-me"
            className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            Hire Me
          </a></button>
          <button className="mt-5 flex space-x-4">
          <a
            href="#projects"
            className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            See My Projects
          </a></button>
        </div>
      </div>

      <div className="flex-1 mt-10 md:mt-0 md:ml-10 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-gray-300 rounded-l-lg w-full h-full"></div>
          <img
            src="./prashant.jpeg"
            alt="Prashant"
            className="relative z-10 w-80 h-86 rounded-l-lg border-2 border-black object-cover"
          />
        </div>
      </div>
    </section>
  );
}