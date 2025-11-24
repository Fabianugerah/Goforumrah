import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Image 
        src="/img/svg/Logo.svg" 
        alt="Logo" 
        width={145} 
        height={26}
        className="navbar__logo" 
        priority
      />
      <div className="navbar__menu">
        <div className="navbar__menu-item">
          <p className="navbar__menu-item-text">IDR</p>
        </div>
        <div className="navbar__menu-item">
          <Image src="/img/svg/Globe.svg" alt="Globe Icon" width={20} height={20} />
          <p className="navbar__menu-item-text">En</p>
        </div>
        <div className="navbar__menu-item">
          <Image src="/img/svg/Heart.svg" alt="Heart Icon" width={20} height={20} />
          <Image src="/img/svg/Bell.svg" alt="Bell Icon" width={20} height={20} />
          <Image
            src="/img/svg/User.svg"
            alt="User Icon"
            width={32}
            height={32}
            className="navbar__menu-item-user"
          />
        </div>
      </div>
    </nav>
  );
}