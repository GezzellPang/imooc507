require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
// 获取图片相关数据，利用json-loader加载json文件
let imageDatas = require('json!../data/imageDatas.json');

// 利用自执行函数，将图片名称转换为URL信息
imageDatas = ((imageDatasArr) => {
  for(let i = 0, j = imageDatasArr.length; i < j; i++){
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

let yeomanImage = require('../images/yeoman.png');

class GalleryByReactApp extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          
        </section>
        <nav className="controller-nav">
          
        </nav>
      </section>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
