import React from 'react';
import "./repoCard.scss"
export default function RepoCard({ repo }) {
    console.log({ repo })
    return (
        <div class="repoCard">
            <div class="name">
                <div class="name">
                    <h3>Name :</h3>
                    <span>{repo?.name}</span>
                </div>
                <div class="name">
                    <h3>full name :</h3>
                    <span>{repo?.full_name}</span>
                </div>
            </div>
            <div class="name">

            <div class="watch">
                <img src="/223930.png" alt="watch" class='watch' />
                <span>{repo?.watchers_count}</span>
            </div>
            <div class="name">
                    <h3>Language:</h3>
                    <span>{repo?.language}</span>
                </div>
            </div>

        </div>
    )


}
