'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';

// var comments = [
//   {"author": "百花弟", "date": "5 分钟前", "text": "天气不错啊!"},
//   {"author": "百花妹", "date": "3 分钟前", "text": "明天出去玩啊!"}
// ];
//
// ReactDOM.render(
//   <CommentBox data={comments} />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <CommentBox url="app/comments.json" />,
  document.getElementById('app')
);

/*
npm install jspm -g
npm init
npm install jspm --save-dev
jspm init
jspm install jquery
jspm install react
jspm install react-dom
jspm install semantic-ui
jspm install css


browser-sync start --server --no-notify --files 'index.html, app/**\/*.js'



jspm bundle app/main app/build.js

加上--inject后会在config.js中添加bundles信息，这样就不用在html中添加<script src="app/build.js"></script>
jspm bundle app/main app/build.js --inject
*/
