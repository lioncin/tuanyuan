// pages/edit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'', //姓名
    birthday:'', //生日
    gender:'F', //性别
    rutuan:'', //入团时间
    home:'', //家庭住址
    company: '', //公司地址
    items: [
      { name: 'F', value: '女' },
      { name: 'M', value: '男', checked: 'true' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindDateChange: function(e){
    //birthday change
    this.setData({
      birthday: e.detail.value
    })
  },

  bindRutuanChange: function(e){
    //ru tuan shijian change
    this.setData({
      rutuan: e.detail.value
    })
  },

  radioChange: function(e){
    //性别修改
    this.setData({
      gender: e.detail.value
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