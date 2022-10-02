import React from 'react'
// aca tendremos la estructura del HEADER
import HeaderBar from '../Components/HeaderBarSup'
import HeaderLogo from '../Components/HeaderLogo'
import HeaderMenu from '../Components/HeaderMenu'
import HeaderMenuPhone from '../Components/HeaderMenuPhone'
import '../Styles/App.css'
const Header = () => {
    
    return (
        <div className="class-header">
            <HeaderBar />
            <HeaderLogo />
            <HeaderMenu />
            <HeaderMenuPhone />
        </div>
    )
}

export default Header