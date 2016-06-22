/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
        this.getComments();

        // setInterval(() => this.getComments(), 5000);
    }

    getComments() {
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     cache: false,
        //     success: comments => {
        //         this.setState({data: comments});
        //     },
        //     error: (xhr, status, error) => {
        //         console.log(error);
        //     }
        // });

        $.get(this.props.url, comments => {
            this.setState({data: comments});
        }, "json");
    }

    handleCommentSubmit(comment) {
        console.log(comment);
        let comments = this.state.data;
        let newComments = comments.concat(comment);
        this.setState({data: newComments});
    }

    render() {
        return (
            <div
                /*
                 多行注释
                 */
                className="ui comments"
                // 单行注释
            >
                <h1>评{
                    // 这是单行注释,注释里的字符串需要用双引号引起来
                    "论"
                    /*
                     这是多行注释
                     */
                    + "用加号拼接"
                }</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        );
    }
}

export {CommentBox as default};
