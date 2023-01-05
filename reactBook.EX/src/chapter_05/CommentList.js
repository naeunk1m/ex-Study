import React from "react";
import Comment from "./Comment";

const comments = [
    { name: "김", comment: "하이", },
    { name: "나", comment: "하이", },
    { name: "은", comment: "하이", },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;