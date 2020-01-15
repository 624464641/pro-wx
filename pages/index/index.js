// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myUserInfo:{},
    mianList: ['001', '002', '003', '004', '005']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
  },
  
  getUserInfo(){
    var _this=this
    wx.getUserInfo({
      success(res){
        if (res.userInfo){
          _this.setData({
            myUserInfo:{...res.userInfo}
          })
        }
        console.info(res)
      },
      fail(error){
        console.info(res)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})