var crypto = require('crypto');

exports.isWechatRequest = function(signature,echostr,timestamp,nonce){
	const signature = req.query.signature;
	const echostr = req.query.echostr;
	const timestamp = req.query.timestamp
	const nonce = req.query.nonce;
	
	var shasum = crypto.createHash('sha1');
	var content = `${echostr} ${nonce} ${timestamp}`;
	shasum.update(content);
	var sha1Value = shasum.digest('hex');
	
	return signature == sha1Value;
};