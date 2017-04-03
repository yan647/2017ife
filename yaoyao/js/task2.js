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

if(typeof window.addEventListener!="undefined"){//非IE
	name1.addEventListener("focus",focusName);
	name1.addEventListener("blur",blurName);

	psd.addEventListener("focus",focusPsd);
	psd.addEventListener("blur",blurPsd);
} else {//IE
	name1.attachEvent("onfocus",focusName);
	name1.attachEvent("onblur",blurName);

	psd.attachEvent("onfocus",focusPsd);
	psd.attachEvent("onblur",blurPsd);
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
	}
	//else if((getlen(name.value)>16)||(getlen(name.value)<4)){//如果矩形框中填入的字符数小于4位，大于16位
	else if((name1.value.getLen()>16)||(name1.value.getLen()<4)){
		notNull.style.cssText="display:none;";
		errNum.style.cssText="display:block;color:red;"
		right.style.cssText="display:none;";
		errNull.style.cssText="display:none;";
		name1.style.cssText="border:2px solid red;"
	}
	else {//如果输入的格式正确
		notNull.style.cssText="display:none;";
		errNum.style.cssText="display:none;";
		right.style.cssText="display:block;color:green;"
		errNull.style.cssText="display:none;";
		name1.style.cssText="border:2px solid green;"
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
		psdErrNull.style.cssText="display:block;";
		psdErrLen.style.cssText="display:none";
		psdRight.style.cssText="display:none";
		psd.style.cssText="border:2px solid red";
	} else if(psd.value.length<6){
		psdNotNull.style.cssText="display:none";
		psdErrNull.style.cssText="display:none;";
		psdErrLen.style.cssText="display:block";
		psdRight.style.cssText="display:none";
		psd.style.cssText="border:2px solid red";
	} else {
		psdNotNull.style.cssText="display:none";
		psdErrNull.style.cssText="display:none;";
		psdErrLen.style.cssText="display:none";
		psdRight.style.cssText="display:block";
		psd.style.cssText="border:2px solid green";
	}
}

btn1.onclick=function(){//点击验证按钮时
	name1=document.getElementById("name1");
	console.log(name1.value.getLen());
	
}