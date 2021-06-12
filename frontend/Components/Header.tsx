import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="topnav">
        <a className="active" href="/">
          <Image src="/logo.png" width={120} height={38} />
        </a>
        <a href="profile">Profile</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </header>
  );
};

export default Header;
