var crypto = require('crypto');

exports.isWechatRequest = function(params){
	const signature = params.signature;
	const echostr = params.echostr;
	const timestamp = params.timestamp;
	const nonce = params.nonce;
	
	const shasum = crypto.createHash('sha1');
	const content = `${echostr} ${nonce} ${timestamp}`;
	shasum.update(content);
	const sha1Value = shasum.digest('hex');
	
	return signature === sha1Value;
};