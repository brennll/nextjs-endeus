import React, { useContext, useState, useEffect } from 'react';

const mobileContext = React.createContext();
const mobileCloseContext = React.createContext();

const useMobileContext = () => {
  return useContext( mobileContext );
}

const useMobileContextUpdate = () => {
  return useContext( mobileCloseContext );
}

const MobileAppsContext = ({ children }) => {
  const [hideInstallBanner, setHideInstallBanner] = useState(false);

  const closeMobileApps = () => {
    return function() {
      localStorage.setItem('hideInstallBanner', true);
      setHideInstallBanner(true);
    }
  }

  useEffect(() => {
    const localMobileClose = window.localStorage.getItem('hideInstallBanner');
    setHideInstallBanner( !!localMobileClose )
  }, [hideInstallBanner])

  return ( 
    <mobileContext.Provider value={ hideInstallBanner }>
      <mobileCloseContext.Provider value={ closeMobileApps }>
        { children }
      </mobileCloseContext.Provider>
    </mobileContext.Provider>
   );
}

export { useMobileContextUpdate, useMobileContext };
export default MobileAppsContext;