var assignReq = require('../common/isWechatRequest');

exports.verification = function(req,res,next){
	if (assignReq.isWechatRequest) {
		console.log('wechat server request~');
		return res.send(req.query.echostr);
	} else {
		return res.send(req.query.echostr);
//		return res.send({
//			msg:"request error";
//		});
	}
};

exports.receiveMeassage = function(req,res,next){
	var message = req.body;
	if (message.Event == "user_enter_tempsession") {
		console.log(`${message.SessionFrom} comein customer-service section~`);
	}
	
	console.log(JSON.stringify(message));
	
	return res.send('success');
};
