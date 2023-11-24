import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, Card, Divider } from 'antd'
import { userData } from '@/helper/userdata'
import Layout from '@/Components/Layout'
import { themes } from '@/helper/theme'

export default function index() {
    const [userValue, setUserValue] = useState(userData)

    useEffect(() => {
        let rentOkUserData = localStorage.getItem("rentOkUserData");
        rentOkUserData = JSON.parse(rentOkUserData);
        if (rentOkUserData) {
            setUserValue(rentOkUserData)
        }
        else {
            setUserValue(userData)
        }
    }, [])
    return (
        <div>
            <Layout>
                <div style={{ width: "100%", textAlign: "center", alignItems: "center" }}>
                    <h1>Users</h1>
                    <Card style={{ width: "100%", minHeight: "700px" }} bodyStyle={{ textAlign: "center" }}>
                        {userValue.map(user => {
                            return <div key={user.username} style={{ display: "inline-block" }}>
                                <Link href={`/${user.username}`} key={user.username}> <Button style={{ backgroundColor: themes.dark.primary }} type='primary'>{user.name}</Button>  </Link>
                                <Divider type='vertical' />
                            </div>
                        })}
                    </Card>
                </div>
            </Layout>
        </div>
    )
}
