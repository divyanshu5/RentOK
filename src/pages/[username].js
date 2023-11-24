import React, { useState, useEffect } from "react";
import { userData } from "@/helper/userdata";
import UserView from "@/Components/UserView";
import Layout from "@/Components/Layout";

function User({ data }) {
    return (
        <Layout theme={data.theme}>
            <UserView data={data} />
        </Layout>
    );
}
export default User;

export async function getStaticPaths() {
    let data = userData;
    const paths = [];
    for (const ele of data) {
        paths.concat({ params: { username: ele.username } },)
    }
    return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
    let data = {}
    let path = ''
    const username = params.username;
    for (const user of userData) {
        if (user.username === username) {
            data = user
            path = username
            break;
        }
    }
    return {
        props: {
            data, path
        }// Revalidate every 10 seconds
    };
}