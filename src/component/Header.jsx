export default function Header(){
    return(
        <header className="bg-white-800 text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">
          
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-800 font-extrabold">About Me</a></li>
            <li><a href="#skills" className="hover:text-blue-800 font-extrabold">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-800 font-extrabold">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-800 font-extrabold">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}