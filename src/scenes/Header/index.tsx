import Logo from "@/assets/Logo.svg";

function Header() {
  return (
    <header className="mt-2 flex flex-col items-center justify-center">
      <img src={Logo} alt="app logo" />
      <h1 className="text-accent-light-100 text-2xl font-bold">TRACKR</h1>
    </header>
  );
}

export default Header;
