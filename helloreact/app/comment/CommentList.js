'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    return (
      <div>
        <Comment author="王浩" date="5 分钟前">百花妹</Comment>
        <Comment author="叶晶" date="5 分钟前">百花弟</Comment>
      </div>
    );
  }
}

export { CommentList as default };
