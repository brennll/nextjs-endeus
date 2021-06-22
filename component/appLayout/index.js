import style from './style.module.css';
import Link from 'next/link';
import { useMobileContext, useMobileContextUpdate } from '/component/mobileAppsContext';
import { useState } from 'react';

const Layout = ({ children }) => {
  const closeMobileApps = useMobileContext();
  const closeMobileAppsUpdate = useMobileContextUpdate();
  const [isOpen, setIsOpen] = useState('=');
  
  const toggleDropdown = () => {
    if (isOpen == '=') {
      setIsOpen('x')
      document.body.classList.add('overflow-hidden');
    }
    else {
      setIsOpen('=')
      document.body.classList.remove('overflow-hidden');
    }
  }
  
  // const matches = window.matchMedia("(min-width: 800px)").matches

  return ( 
    <>
      <section className={ style.navbarContainer }>
        <div className={ style.containerItem }>
          {
            isOpen === 'x' && (
              <>
                <Link href='/artikel/features' onClick={ toggleDropdown }>
                    <a href="/artikel/features" className={ style.navbarContainer__button } onClick={  toggleDropdown }>Features</a>
                </Link>
                <Link href='/artikel/trending'>
                    <a href="/artikel/trending" className={ style.navbarContainer__button } onClick={  toggleDropdown }>Trending</a>
                </Link>
                <Link href='/artikel/events-promo'>
                    <a href="/artikel/events-promo" className={ style.navbarContainer__button } onClick={  toggleDropdown }>Events & Promo</a>
                </Link>
                <Link href='/artikel/tanya-nutrisionist'>
                    <a href="/artikel/tanya-nutrisionist" className={ style.navbarContainer__button } onClick={  toggleDropdown }>Tanya Nutrisionist</a>
                </Link>
                <Link href='/resep/terbaru'>
                    <a href="/resep/terbaru" className={ style.navbarContainer__button } onClick={  toggleDropdown }>Resep Terbaru</a>
                </Link>
                <Link href='/resep/terpopuler'>
                    <a href="/" className={ style.navbarContainer__button } onClick={  toggleDropdown }>Resep Terpopuler</a>
                </Link>
              </>
            )
          }
          <Link href='/artikel/features' onClick={ toggleDropdown }>
            <a href="/artikel/features" className={ style.navbarContainer__button2 } onClick={  toggleDropdown }>Features</a>
          </Link>
          <Link href='/artikel/trending'>
            <a href="/artikel/trending" className={ style.navbarContainer__button2 } onClick={  toggleDropdown }>Trending</a>
          </Link>
          <Link href='/artikel/events-promo'>
            <a href="/artikel/events-promo" className={ style.navbarContainer__button2 } onClick={  toggleDropdown }>Events & Promo</a>
          </Link>
          <Link href='/artikel/tanya-nutrisionist'>
            <a href="/artikel/tanya-nutrisionist" className={ style.navbarContainer__button2 } onClick={  toggleDropdown }>Tanya Nutrisionist</a>
          </Link>
          <Link href='/resep/terbaru'>
            <a href="/resep/terbaru" className={ style.navbarContainer__button2 } onClick={  toggleDropdown }>Resep Terbaru</a>
          </Link>
          <Link href='/resep/terpopuler'>
            <a href="/" className={ style.navbarContainer__button2 } onClick={  toggleDropdown }>Resep Terpopuler</a>
          </Link>
        </div>
        <span className={ style.dropdownButton } onClick={ toggleDropdown }>{isOpen} </span>
      </section>
      { children }
      {
        !closeMobileApps && (
          <section className={ style.footerContainer }>
            <span className={ style.close } onClick={ closeMobileAppsUpdate }>&times;</span>
            <div className={ style.footerText } style={{top: '0'}}>
              <a href="https://endeus.tv/?utm_medium=smart_banner&utm_source=website">Download Kurio apps!</a>
            </div>
          </section>
        )
      }
    </>
   );
}
 
export default Layout;