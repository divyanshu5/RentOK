import Link from 'next/link'
import React, { useState } from 'react'
import { LeftCircleOutlined } from "@ant-design/icons"
import { themes } from '@/helper/theme'
import { Satisfy } from 'next/font/google'

const satisfy = Satisfy({ subsets: ['latin'], weight: "400" })
export default function Navbar(props) {
    const theme = props.theme || "dark"
    const [colors, setColors] = useState(themes[theme])
    return (
        <div className='rentok-navbar-main' style={{ backgroundColor: colors.primary, textAlign: "center", marginTop: "0" }}>
            <h1 className='rentok-navbar-back-btn' style={{ fontSize: "84px", margin: 0 }}><Link href="/" className={`rentok-navbar-back-btn ${satisfy.className}`} style={{ textDecoration: "none", margin: 0, color: colors.secondary }}> Rent OK </Link></h1>
        </div>
    )
}
