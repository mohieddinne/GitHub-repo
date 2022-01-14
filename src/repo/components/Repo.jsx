import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RepoView from '../views/RepoView'
import { useSelector } from "react-redux";


export default function Repo() {
    const user = useSelector((UserReducers) =>
     UserReducers.UserReducers.user ) || 'JakeWharton';

    const [repoData, seRepData] = useState([])
    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(res => {
                console.log({ res: res?.data })
                seRepData(res?.data)

            })
    }, [user])
    return <RepoView Data={repoData} />

}