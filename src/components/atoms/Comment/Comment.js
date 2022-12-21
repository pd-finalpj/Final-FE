import { render } from "@testing-library/react";
import React from "react";
import react from "react";
import SingleTweet from './SingleTweet'

class Twittler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tweets: [
                {
                    uuid: 1,
                    writer : "김코딩",
                    date : "2020-10-20",
                    content : "안녕 리액트"
                },
                {
                    uuid: 2,
                    writer: "박해커",
                    date: "2020-10-12",
                    content: "나는 돈이 좋아! "
                }
            ]
        }
    }
    this.addTweet = this.addTweet.bind(this);
}

addTweet(){
    let value = document.querySelector("#new-tweet-content").value;
    this.setState({tweets: [...this.state.tweets, {
        uuid: this.state.tweets.length + 1,
        writer : "김코딩",
        date: new Date().toISOString().slice(0,10),
        content: value
    }]})
}
render() {
    return (
        <div id = "root">
            <div>
                <div>작성자: 김코딩</div>
                <div id="writing-area">
                    <textarea id="new-tweet-content"></textarea>
                    <button id ="submit-new-tweet" onClick={this.addTweet}>새 글 쓰기</button>
                </div>
                <ul id ="tweets">
                    {
                        this.state.tweets.map(tweet => {
                            return <SingleTweet key = {tweet.uuid} tweet={tweet}/>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}