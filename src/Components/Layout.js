import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, theme }) {
    return (
        <div className='rentok-main-parent'>
            <Navbar theme={theme} />
            <main>{children}</main>
            <Footer theme={theme} />
        </div>
    )
}
