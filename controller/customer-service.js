
exports.receiveMeassage = function(req,res,next){
	console.log('请求成功~~~');
	console.log(req.query.signature);
	console.log(req.query.signature);
	console.log(req.query.timestamp);
	console.log(req.query.nonce);
	console.log(req.query.echostr);
	res.send(echostr);
}
