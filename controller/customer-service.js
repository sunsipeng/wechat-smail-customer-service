const assignReq = require('../common/isWechatRequest');

exports.verification = function(req,res,next){
	if (assignReq.isWechatRequest({
            signature: req.query.signature,
            echostr:req.query.echostr,
            timestamp:req.query.timestamp,
            nonce:req.query.nonce
		})) {
		console.log('wechat server request~');
		return res.send(req.query.echostr);
	} else {
		return res.send(req.query.echostr+"===");
//		return res.send({
//			msg:"request error";
//		});
	}
};

exports.receiveMeassage = function(req,res,next){
	const message = req.body;
	if (message.Event === "user_enter_tempsession") {
		console.log(`${message.SessionFrom} comein customer-service section~`);
	}
	
	console.log(JSON.stringify(message));
	
	return res.send('success');
};
