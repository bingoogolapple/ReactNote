'use strict';

import React from 'react';

class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    // 要调用bind(this)后这里的this才能用
    let author = this.refs.author.value;
    let text = this.refs.text.value;
    console.log("提交表单", author, text);

    this.props.onCommentSubmit({author, text, date: '刚刚'});
  }

  render() {
    return (
      <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <input type="text" placeholder="姓名" ref="author"/>
        </div>
        <div className="field">
          <textarea type="text" placeholder="评论" ref="text"/>
        </div>
        <button type="submit" className="ui blue button">添加评论</button>
      </form>
    );
  }
}

export { CommentForm as default };
