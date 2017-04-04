function getlen(str){//统计输入字符串长度
//来源：http://www.jb51.net/article/45143.htm
	var strlen=0;
	for(var i=0;i<str.length;i++){
		if(str.charCodeAt(i)>255){//如果是汉字，则加2
			strlen+=2;
		} else strlen++;
	}
	return strlen;
}
String.prototype.getLen=function(){//统计输入字符串长度，使用原型
	var strlen=0;
	for(var i=0;i<this.length;i++){
		if(this.charCodeAt(i)>255){//如果是汉字，则加2
			strlen+=2;
		} else strlen++;
	}
	return strlen;
}
notNull=document.getElementById("notNull");
name1=document.getElementById("name1");
errNull=document.getElementById("errNull");
errNum=document.getElementById("errNum");
right=document.getElementById("right");

psd=document.getElementById("psd");
psdNotNull=document.getElementById("psdNotNull");
psdErrNull=document.getElementById("psdErrNull");
psdErrLen=document.getElementById("psdErrLen");
psdRight=document.getElementById("psdRight");

psd2=document.getElementById("psd2");
psd2NotNull=document.getElementById("psd2NotNull");
psd2ErrNull=document.getElementById("psd2ErrNull");
psd2ErrSame=document.getElementById("psd2ErrSame");
psd2Right=document.getElementById("psd2Right");

email=document.getElementById("email");
emailNotNull=document.getElementById("emailNotNull");
emailErrNull=document.getElementById("emailErrNull");
emailErr=document.getElementById("emailErr");
emailRight=document.getElementById("emailRight");

tel=document.getElementById("tel");
telNotNull=document.getElementById("telNotNull");
telErrNull=document.getElementById("telErrNull");
telErr=document.getElementById("telErr");
telRight=document.getElementById("telRight");

//监听事件
if(typeof window.addEventListener!="undefined"){//非IE
	name1.addEventListener("focus",focusName);
	name1.addEventListener("blur",blurName);

	psd.addEventListener("focus",focusPsd);
	psd.addEventListener("blur",blurPsd);

	psd2.addEventListener("focus",focusPsd2);
	psd2.addEventListener("blur",blurPsd2);

	email.addEventListener("focus",focusEmail);
	email.addEventListener("blur",blurEmail);

	tel.addEventListener("focus",focusTel);
	tel.addEventListener("blur",blurTel);

} else {//IE
	name1.attachEvent("onfocus",focusName);
	name1.attachEvent("onblur",blurName);

	psd.attachEvent("onfocus",focusPsd);
	psd.attachEvent("onblur",blurPsd);

	psd2.attachEvent("onfocus",focusPsd2);
	psd2.attachEvent("onblur",blurPsd2);

	email.attachEvent("onfocus",focusEmail);
	email.attachEvent("onblur",blurEmail);

	tel.attachEvent("onfocus",focusTel);
	tel.attachEvent("onblur",blurTel);
}

function focusName(){//“名称”获得焦点	
	notNull.style.cssText="display:block;";
	errNull.style.cssText="display:none;";
	errNum.style.cssText="display:none;";
	right.style.cssText="display:none;";
	name1.style.cssText="border:2px solid #ddd;"
}	
function blurName(){//“名称”失去焦点
	if(name1.value.length==0){//如果矩形框中什么都没填时
		notNull.style.cssText="display:none;";
		errNum.style.cssText="display:none;";
		right.style.cssText="display:none;";
		errNull.style.cssText="display:block;color:red;"
		name1.style.cssText="border:2px solid red;"
		return false;
	}
	//else if((getlen(name.value)>16)||(getlen(name.value)<4)){//如果矩形框中填入的字符数小于4位，大于16位
	else if((name1.value.getLen()>16)||(name1.value.getLen()<4)){
		notNull.style.cssText="display:none;";
		errNum.style.cssText="display:block;color:red;"
		right.style.cssText="display:none;";
		errNull.style.cssText="display:none;";
		name1.style.cssText="border:2px solid red;"
		return false;
	}
	else {//如果输入的格式正确
		notNull.style.cssText="display:none;";
		errNum.style.cssText="display:none;";
		right.style.cssText="display:block;color:green;"
		errNull.style.cssText="display:none;";
		name1.style.cssText="border:2px solid green;"
		return true;
	}
}

function focusPsd(){//“密码”获得焦点
	psdNotNull.style.cssText="display:block;";
	psdErrNull.style.cssText="display:none";
	psd.style.cssText="border:2px solid #ddd";
}
function blurPsd(){//“密码”失去焦点
	if(psd.value.length==0){console.log("0");
		psdNotNull.style.cssText="display:none";
		psdErrNull.style.cssText="display:block;color:red;";
		psdErrLen.style.cssText="display:none";
		psdRight.style.cssText="display:none";
		psd.style.cssText="border:2px solid red";
		return false;
	} else if(psd.value.length<6){
		psdNotNull.style.cssText="display:none";
		psdErrNull.style.cssText="display:none;";
		psdErrLen.style.cssText="display:block;color:red;";
		psdRight.style.cssText="display:none";
		psd.style.cssText="border:2px solid red";
		return false;
	} else {
		psdNotNull.style.cssText="display:none";
		psdErrNull.style.cssText="display:none;";
		psdErrLen.style.cssText="display:none";
		psdRight.style.cssText="display:block;color:green;";
		psd.style.cssText="border:2px solid green";
		return true;
	}
}

function focusPsd2(){//“密码确认”获得焦点
	psd2NotNull.style.cssText="display:block";
	psd2ErrNull.style.cssText="display:none";
	psd2ErrSame.style.cssText="display:none";
	psd2Right.style.cssText="display:none";
	psd2.style.cssText="border:2px solid #ddd";
}
function blurPsd2(){//“密码确认”失去焦点
	if(psd2.value.length==0){
		psd2NotNull.style.cssText="display:none";
		psd2ErrNull.style.cssText="display:block;color:red;";
		psd2ErrSame.style.cssText="display:none";
		psd2Right.style.cssText="display:none";
		psd2.style.cssText="border:2px solid red";
		return false;
	} else if(psd.value!=psd2.value){
		psd2NotNull.style.cssText="display:none";
		psd2ErrNull.style.cssText="display:none";
		psd2ErrSame.style.cssText="display:block;color:red;";
		psd2Right.style.cssText="display:none";
		psd2.style.cssText="border:2px solid red";
		return false;
	} else {
		psd2NotNull.style.cssText="display:none";
		psd2ErrNull.style.cssText="display:none";
		psd2ErrSame.style.cssText="display:none";
		psd2Right.style.cssText="display:block;color:green";
		psd2.style.cssText="border:2px solid green";
		return true;
	}
}

//参考http://www.cnblogs.com/dyllove98/archive/2013/06/28/3161626.html
function testEmail(ele){
	var emailReg=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(emailReg.test(ele)){
		return true;
	} else return false;
}
function focusEmail(){//“邮箱”获得焦点
	emailNotNull.style.cssText="display:block";
	emailErrNull.style.cssText="display:none";
	emailErr.style.cssText="display:none";
	emailRight.style.cssText="display:none";
	email.style.cssText="border:2px solid #ddd"
}
function blurEmail(){//“邮箱获得焦点”
	if(email.value.length==0){
		emailNotNull.style.cssText="display:none";
		emailErrNull.style.cssText="display:block;color:red";
		emailErr.style.cssText="display:none";
		emailRight.style.cssText="display:none";
		email.style.cssText="border:2px solid red";
		return false;
	} else if(!testEmail(email.value)){
		emailNotNull.style.cssText="display:none";
		emailErrNull.style.cssText="display:none";
		emailErr.style.cssText="display:block;color:red";
		emailRight.style.cssText="display:none";
		email.style.cssText="border:2px solid red";
		return false;
	} else {
		emailNotNull.style.cssText="display:none";
		emailErrNull.style.cssText="display:none";
		emailErr.style.cssText="display:none";
		emailRight.style.cssText="display:block;color:green";
		email.style.cssText="border:2px solid green";
		return true;
	}
}
function testTel(ele){
	var telReg=/^((13[0-9]{1})|159|153)+\d{8}$/;
	if(telReg.test(ele)){
		return true;
	} else return false;
}
function focusTel(){//“手机”获得焦点
	telNotNull.style.cssText="display:block";
	telErrNull.style.cssText="display:none";
	telErr.style.cssText="display:none";
	telRight.style.cssText="display:none";
	tel.style.cssText="border:2px solid #ddd";
}
function blurTel(){//“手机”失去焦点
	if(tel.value.length==0){
		telNotNull.style.cssText="display:none";
		telErrNull.style.cssText="display:block;color:red";
		telErr.style.cssText="display:none";
		telRight.style.cssText="display:none";
		tel.style.cssText="border:2px solid red";
		return false;
	} else if(!testTel(tel.value)){
		telNotNull.style.cssText="display:none";
		telErrNull.style.cssText="display:none";
		telErr.style.cssText="display:block;color:red";
		telRight.style.cssText="display:none";
		tel.style.cssText="border:2px solid red";
		return false;
	} else{
		telNotNull.style.cssText="display:none";
		telErrNull.style.cssText="display:none";
		telErr.style.cssText="display:none";
		telRight.style.cssText="display:block;color:green";
		tel.style.cssText="border:2px solid green";
		return true;
	}
}

btn1.onclick=function(){//点击验证按钮时
	blurName();blurPsd();blurPsd2();blurEmail();blurTel();
	if(blurName()&&blurPsd()&&blurPsd2()&&blurEmail()&&blurTel()){
		alert("提交成功");
	} else alert("提交失败");
	
}