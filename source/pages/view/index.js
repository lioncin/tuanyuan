// pages/view/index.js
var imageUtil = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image4width: 0,//缩放后的宽
    image4height: 0,//缩放后的高
    image7width: 0,//缩放后的宽
    image7height: 0,//缩放后的高
    image5width: 0,//缩放后的宽
    image5height: 0,//缩放后的高
    image1width: 0,//缩放后的宽
    image1height: 0,//缩放后的高
    image2width: 0,//缩放后的宽
    image2height: 0,//缩放后的高
    image3width: 0,//缩放后的宽
    image3height: 0,//缩放后的高
    sologon:'',
    user: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user = JSON.parse(options.user);
    const genRandom = (min, max) => (Math.random() * (max - min + 1) | 0) + min;
    const sologon = 'http://www.sipso.com.cn/buffalo/tyz/sologon/' + genRandom(1, 6) + '.png';
    console.log();
    this.setData({
      user: user,
      sologon: sologon
    });
  },

  imageLoad1: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      image1width: imageSize.imageWidth,
      image1height: imageSize.imageHeight
    })
  },

  imageLoad2: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      image2width: imageSize.imageWidth,
      image2height: imageSize.imageHeight
    })
  },

  imageLoad3: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      image3width: imageSize.imageWidth,
      image3height: imageSize.imageHeight
    })
  },

  imageLoad4: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      image4width: imageSize.imageWidth,
      image4height: imageSize.imageHeight
    })
  },
  imageLoad5: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      image5width: imageSize.imageWidth*0.8,
      image5height: imageSize.imageHeight*0.8
    })
  },

  imageLoad7: function (e) {
    var imageSize = {};
    var originalWidth = e.detail.width;//图片原始宽
    var originalHeight = e.detail.height;//图片原始高
    var originalScale = originalHeight / originalWidth;//图片高宽比
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth * 0.4;
        var windowHeight = 100;
        var windowscale = windowHeight / windowWidth;
        if (originalScale < windowscale) {
          imageSize.imageWidth = windowWidth;
          imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
        }else{
          imageSize.imageHeight = windowHeight;
          imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
        }
      }
    })
    this.setData({
      image7width: imageSize.imageWidth,
      image7height: imageSize.imageHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})