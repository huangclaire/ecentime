var list=[
{
	cat:'phone',
	title:'法国办手机卡的那些事儿——运营商、保号、套餐全解答',
	url:'https://www.ecentime.com/app/article/french-mobile-forfait?articleid=13',
	pic:'img/mobil.jpg',
	date: "2016-06-11"
},
{
	cat:'house' ,
	title: "法国租房那些事儿——史上最全的法国租房指南",
	url: "https://www.ecentime.com/app/article/renting-in-france?articleid=21",
	pic:'img/renting-in-france.jpg',
	date: "2017-10-09"
},
{
	cat:'admin' ,
	title: "法国留学必看——新生落地，你需要办理哪些手续",
	url: "https://www.ecentime.com/app/article/renting-in-france?articleid=24",
	pic:'img/must-knows-for-living-in-france.jpg',
	date: "2017-08-11"
},
{
	cat:'life' ,
	title: "申请房补那些事儿——CAF办理指南",
	pic:'img/caf.jpg',
	url: "https://www.ecentime.com/app/article/renting-in-france?articleid=23",
	date: "2017-10-05"
}
]

var questions=[
{
	cat:'phone',
	title:'手机卡可以在中国提前准备吗？',
	answer:'可以的。 首先，如果中国的手机号有很多要接收验证码的话，可以开通国际服务，和一个不用的手机一起先带过来应急。但肯定还是需要一个法国本地的手机号。 另外，中国电信在2017年推出了免费领卡的服务 www.freesim.cn， 选中法国专区，选择你合适的套餐，然后就可以等待免费Sim卡邮寄到家。只需要在来法国之前 官网激活，就可以提前得到法国的手机号了。 因为手机卡的付款是要和法国当地的银行卡绑定，所以只要你在选择的时候输入我们一分钱的独家折扣码：YFQ2017就可以得到“一欧元的平安话费“来作为报平安的费用哦。 具体可见《 法国办手机卡的那些事儿——运营商、保号、套餐全解答 》。 '
},
{
	cat:'house',
	title:'房屋保险怎么办？',
	answer:"房屋保险是租房必须的手续之一。和房东或中介签署房屋合同前，明确是否需要你另外购买一份房屋保险。如需购买，可在办理法国银行卡的同时在开卡银行咨询购买房屋保险的业务，或去专业的保险公司购买。 "
},
{
	cat:"life",
	title:"到底应该带多少银行卡？",
	answer:'一张国内信用卡＋一张法国银行卡是必须的，也可以再带一张国内信用卡，以备不时之需。生活费可以以国际汇款的方式从国内银行卡汇到法国银行卡上，不想交手续费可以通过银联取现。通常来说，规模较小的银行，如华夏银行、三峡银行等，取现手续费可能会优惠一些，具体情况可咨询各银行。在法国，带有Visa或Mastercard标识的银行卡基本都可以使用，银联在大型商场里基本上也可以使用。 '
},
{
	cat:"admin",
	title: '刚来法国可以去其他国家旅游吗？',
	answer: "理论上来说，在你的护照还没贴OFII的时候是不能出法国旅游的。之前有人在OFII还没办理下来的时候就出境旅游过，且没有碰到检查。要知道，虽然在欧盟境内边检不是很严，但是否被抽查都是要看运气的。在此，省钱菌不建议大家刚来就冒着风险去玩，毕竟你还有房补、银行卡、手机卡等好多事情需要先做呢！ OFII通常在抵法后三个月才能办下来，交了申请表后会通知你做体检，医生会问一些基本的问题，如有没有遗传病史、是否打过某些疫苗等。 "
}
]

list.sort(function(a, b) {
	a = new Date(a.date);
	b = new Date(b.date);
	return a>b ? -1 : a<b ? 1 : 0;
});

window.onload=function(){
	display_articles();
	faqdisplay();

	function rm_disabled(){
		document.getElementById("btn-all").removeAttribute('disabled');
		document.getElementById("btn-phone").removeAttribute('disabled');
		document.getElementById("btn-house").removeAttribute('disabled');
		document.getElementById("btn-life").removeAttribute('disabled');
		document.getElementById("btn-admin").removeAttribute('disabled');

	}

	function faq_rm_disabled(){
		document.getElementById("faqbtn-all").removeAttribute('disabled');
		document.getElementById("faqbtn-phone").removeAttribute('disabled');
		document.getElementById("faqbtn-house").removeAttribute('disabled');
		document.getElementById("faqbtn-life").removeAttribute('disabled');
		document.getElementById("faqbtn-admin").removeAttribute('disabled');

	}

	function display_articles(){
		const ul=document.querySelector('#articles')

		for (i = 0; i < list.length; i++) { 
			const element=list[i]
			const li = document.createElement('li')
			li.innerHTML="<div class='media'> <img src="+element.pic+" class='circle-img align-self-center mr-3'> <div class='media-body'> <br> <br> <a class= 'mytext' href="+element.url +">  "+element.title+"</a> <p class='tabulation'>"+element.date+"<p> </div> </div> <br>"
			ul.appendChild(li)

		}
	}

	function display_cat(cat){
		const ul=document.querySelector('#articles')

		for (i = 0; i < list.length; i++) { 
			const element=list[i]
			if(element.cat===cat){
				const li = document.createElement('li')
				li.innerHTML="<div class='media'> <img src="+element.pic+" class='circle-img align-self-center mr-3'> <div class='media-body'> <br> <br> <a class= 'mytext' href="+element.url +">  "+element.title+"</a> <p class='tabulation'>"+element.date+"<p> </div> </div> <br>"
				ul.appendChild(li)
			}
		}
	}

	function faqdisplay(cat){
		const ul=document.querySelector('#faq')

		for (i = 0; i < list.length; i++) { 
			const element=questions[i]
			const li = document.createElement('li')
			li.innerHTML="<myhr></myhr> <details><summary class='mytext'>"+element.title+"</summary> <p class='faqdiv'> "+element.answer+"</p> </details>"
			ul.appendChild(li)
		}
	}

	function faqdisplay_cat(cat){
		const ul=document.querySelector('#faq')

		for (i = 0; i < list.length; i++) { 
			const element=questions[i]
			if(element.cat===cat){
				const li = document.createElement('li')
				li.innerHTML="<myhr></myhr> <details><summary class='mytext'>"+element.title+"</summary> <p class='faqdiv'> "+element.answer+"</p> </details>"
				ul.appendChild(li)
			}
		}
	}

	document.getElementById("btn-all").addEventListener('click',function(){
		document.getElementById("articles").innerHTML = "";
		rm_disabled();
		document.getElementById("btn-all").setAttribute('disabled',true);
		display_articles();

	})

	document.getElementById("btn-phone").addEventListener('click',function(){
		document.getElementById("articles").innerHTML = "";
		rm_disabled();
		document.getElementById("btn-phone").setAttribute('disabled',true);
		display_cat("phone")

	})


	document.getElementById("btn-house").addEventListener('click',function(){
		document.getElementById("articles").innerHTML = "";
		rm_disabled();
		document.getElementById("btn-house").setAttribute('disabled',true);
		display_cat("house")
	})

	document.getElementById("btn-life").addEventListener('click',function(){
		document.getElementById("articles").innerHTML = "";
		rm_disabled();
		document.getElementById("btn-life").setAttribute('disabled',true);
		display_cat("life")
	})

	document.getElementById("btn-admin").addEventListener('click',function(){
		document.getElementById("articles").innerHTML = "";
		rm_disabled();
		document.getElementById("btn-admin").setAttribute('disabled',true);
		display_cat("admin")
	})


	document.getElementById("faqbtn-all").addEventListener('click',function(){
		document.getElementById("faq").innerHTML = "";
		faq_rm_disabled();
		document.getElementById("faqbtn-all").setAttribute('disabled',true);
		faqdisplay();

	})

	document.getElementById("faqbtn-phone").addEventListener('click',function(){
		document.getElementById("faq").innerHTML = "";
		faq_rm_disabled();
		document.getElementById("faqbtn-phone").setAttribute('disabled',true);
		faqdisplay_cat("phone")

	})


	document.getElementById("faqbtn-house").addEventListener('click',function(){
		document.getElementById("faq").innerHTML = "";
		faq_rm_disabled();
		document.getElementById("faqbtn-house").setAttribute('disabled',true);
		faqdisplay_cat("house")
	})

	document.getElementById("faqbtn-life").addEventListener('click',function(){
		document.getElementById("faq").innerHTML = "";
		faq_rm_disabled();
		document.getElementById("faqbtn-life").setAttribute('disabled',true);
		faqdisplay_cat("life")
	})

	document.getElementById("faqbtn-admin").addEventListener('click',function(){
		document.getElementById("faq").innerHTML = "";
		faq_rm_disabled();
		document.getElementById("faqbtn-admin").setAttribute('disabled',true);
		faqdisplay_cat("admin")
	})


	document.getElementById("contact-form").addEventListener('submit',function(){
		var email=document.getElementById("email").value;
		var name=document.getElementById("name").value;
		var text=document.getElementById("text").value;
		window.open('mailto:team@yifenqian.fr?subject=[contact] From'+name+"&body="+text);

	})



}