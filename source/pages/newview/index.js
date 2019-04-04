// pages/newview/index.js
var imageUtil = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image1width: 0,//缩放后的宽
    image1height: 0,//缩放后的高
    image2width: 0,//缩放后的宽
    image2height: 0,//缩放后的高
    image3width: 0,//缩放后的宽
    image3height: 0,//缩放后的高
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user = JSON.parse(options.user);
    this.setData({
      user: user
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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