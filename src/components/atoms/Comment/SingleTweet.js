import React from 'react';

export default function SingleTweet({tweet}) {
    return(
        <div className='tweet'>
            <div className='writer'>{tweet.writer}</div>
            <div className='date'>{tweet.date}</div>
            <div className='content'>{tweet.content}</div>
        </div>
    )
}