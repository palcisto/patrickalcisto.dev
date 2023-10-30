import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row md:justify-between h-[100px] w-full py-0 md:px-[3vw]">
      <div
        id="branding"
        className="place-self-center md:place-self-auto flex items-center md:h-full"
      >
        <img src="" alt="PA" style={{ display: 'none' }} />
        <span>Patrick A. Alcisto</span>
      </div>

      <div id="social">
        <ul>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>G2i</li>
        </ul>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#whoami">Who am I?</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div
        id="work-status"
        className="max-sm:w-full md:rounded-lg bg-eerie-black flex items-center place-self-center shadow-lg"
      >
        <div className="p-4">
          <span className="block h-4 w-4 rounded-full bg-lime-500 shadow-[inset_-1px_-1px_6px_2px_hsl(0_0%_0%/0.55),0_0_2px_1px_hsl(0_0%_100%/0.75),-1px_-2px_2px_1px_hsl(0_0%_0%/0.85)]"></span>
        </div>
        <div className="px-3 py-3 border-x border-slate-900 overflow-hidden grow md:grow-0">
          <span className="text-text text-sm capitalize leading-none">
            Available for work
          </span>
        </div>
        <a
          href="https://portal.g2i.co/developer/Patrick-Alcisto/22c9f395-29f8-4820-b737-1e83dfce07a0"
          className="work-status__cta group/hireMe p-4 leading-none rounded-r-lg transition-[background-position] duration-300 ease-in-out"
        >
          <span className="text-primary group-hover/hireMe:text-dark-purple  uppercase tracking-wide font-normal transition duration-300 ease-in-out">
            Hire me
          </span>
        </a>{' '}
        {/** link to G2i or contact form */}
      </div>
    </header>
  );
}
