import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper max-container">
        <div className="footer__menus">
          <div className="footer__menus-list">
            <h5 className="heading-5">Explore</h5>
            <div className="footer__menus-list-item">
              <Link href="/" className="bs bs--medium">Hotels</Link>
              <Link href="/flight" className="bs bs--medium">Flights</Link>
              <Link href="/book-transfer" className="bs bs--medium">Book Transfer</Link>
              <Link href="#" className="bs bs--medium">Tour Package</Link>
            </div>
          </div>

          <div className="footer__menus-list">
            <h5 className="heading-5">About Us</h5>
            <div className="footer__menus-list-item">
              <Link href="#" className="bs bs--medium">About Us</Link>
              <Link href="#" className="bs bs--medium">Contact us</Link>
              <Link href="#" className="bs bs--medium">Partnership</Link>
              <Link href="#" className="bs bs--medium">Travel Agent</Link>
              <Link href="#" className="bs bs--medium">Blogs</Link>
            </div>
          </div>

          <div className="footer__menus-list">
            <h5 className="heading-5">Helps</h5>
            <div className="footer__menus-list-item">
              <Link href="#" className="bs bs--medium">Terms & Condition</Link>
              <Link href="#" className="bs bs--medium">Privacy and Cookies</Link>
            </div>
          </div>

          <div className="footer__menus-list">
            <h5 className="heading-5">Join Our Newsletter</h5>
            <div className="footer__menus-list-content">
              <p className="bs bs--regular">
                Sign up and we&apos;ll send the best deals to you
              </p>
              <form className="footer__menus-list-content-form">
                <input
                  type="email"
                  className="footer__menus-list-content-form-input bs bs--regular"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-footer bs bs--bold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer__content">
          <div className="footer__content-logo">
            <Image src="/img/svg/Logo_large.svg" alt="Logo" width={224} height={40} />
            <p className="copyright bs bs--regular">
              © 2022 Goforumrah LLC All rights reserved.
            </p>
          </div>

          <div className="footer__content-sosmed">
            {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
              <button key={social} className="footer__content-sosmed-item">
                <Image 
                  src={`/img/svg/${social}Logo.svg`} 
                  alt={`${social}Logo`} 
                  width={24} 
                  height={24}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}