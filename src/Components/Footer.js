import React, { useState } from 'react'
import { Card } from 'antd'
import { themes } from '@/helper/theme'

export default function Footer(props) {
    const theme = props.theme || "dark"
    const [colors, setColors] = useState(themes[theme])
    return (
        <div style={{ height: "100px", background: colors.primary, color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <p style={{ color: colors.secondary }}>Copyright 2022-2023</p>
            </div>

        </div>
    )
}
