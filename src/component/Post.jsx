import React from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="post_info">
        <RxAvatar />
        <h5>username</h5>
        <small>timestamp</small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>question</p>
          <button className="post_btnanswer">answer</button>
        </div>
        <div className="post_answer">
          <p></p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/male-physiotherapist-checking-woman-s-shoulder-with-copy-space_23-2148780730.jpg?size=626&ext=jpg&ga=GA1.2.70153647.1674918052&semt=sph"
          alt=""
        />
        <div className="post_footer">
          <div className="post_footeraction">
            <AiOutlineArrowDown />
            <AiOutlineArrowUp />
          </div>
          <BiCommentDetail />
        </div>
      </div>
    </div>
  );
}

export default Post;
