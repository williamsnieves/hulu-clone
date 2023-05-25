const Header = () => {
  return (
    <header className="absolute top-0 z-10 w-full">
      <nav className="flex justify-between h-16 pt-6 items-center">
        <section className="pl-12 text-green-500 uppercase font-bold">
          Hulu
        </section>
        <button className="mr-12 p-4 hover:bg-slate-700 opacity-70 rounded-xl cursor-pointer text-slate-200">
          LOG IN
        </button>
      </nav>
    </header>
  );
};

export default Header;
