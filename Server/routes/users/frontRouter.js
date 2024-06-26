var express = require('express');
var frontRouter = express.Router();
const FrontController = require('../../controllers/users/FrontController')
// 图片上传
const multer = require('multer')
const upload = multer({ dest: 'public/avatarUploads/'})

frontRouter.get('/frontapi/show/clubnews/:page',FrontController.clubNewsGet)

frontRouter.get('/frontapi/show/clubnews/search/:keyword/:page',FrontController.clubNewsSearch)

// 获取个人信息
frontRouter.post('/frontapi/user',FrontController.userInfoGet)
// 用户修改信息
frontRouter.post('/frontapi/user/update',upload.single('file'),FrontController.userUpdate)
// 修改密码
frontRouter.post('/frontapi/user/changepwd',FrontController.userPasswordUpdate)

// 获取活动信息
frontRouter.get('/frontapi/show/activities',FrontController.activitiesGet)
// 获取用户社团
frontRouter.get('/frontapi/activities/getuserclubs/:userid',FrontController.userClubGet)
// 活动评分
frontRouter.put('/frontapi/activities/rate',FrontController.activitiesRate)
// 下载活动相关文件
frontRouter.get('/frontapi/activities/downloadfile',FrontController.downloadFile)
// 活动报名
frontRouter.post('/frontapi/activity/signup',FrontController.actvtSignUp)
// 取消报名
frontRouter.post('/frontapi/activity/cancel',FrontController.actvtCancel)

// 获取十佳社团
frontRouter.get('/frontapi/show/votesrank',FrontController.votesRankGet)

// 获取社团信息
frontRouter.get('/frontapi/show/clubs/clubinfo/:clubid/:userid',FrontController.clubInfoGet)
// 获取社团全体成员信息
frontRouter.get('/frontapi/show/clubmembers/:clubid',FrontController.clubMembersGet)

// 申请加入社团
frontRouter.post('/frontapi/clubs/applyclub',FrontController.applyClub)

// 退出社团
frontRouter.post('/frontapi/clubs/quitclub',FrontController.quitClub)

// 社团投票
frontRouter.post('/frontapi/clubs/clubvote',FrontController.clubVote)

module.exports = frontRouter;