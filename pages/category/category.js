// pages/category/category.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  selectIndex:0,
  scrollTop:0
  },

  itemClick:function(event){
let that = this
that.setData({
  selectIndex: event.currentTarget.dataset.index,
  scrollTop: event.currentTarget.offsetTop - that.data.screenHeight / 2
})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenHeight:res.windowHeight
        })
      },
    })
    app.request({
      url: 'operation/category',
      success: function (res) {
        console.log(res.data.data);
        console.log(getApp().globalData);
        that.setData({
          categoryList:res.data.data
          // sub: res.data.data,
          // materialList: res.data.data[0].materialList
        });
      }
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