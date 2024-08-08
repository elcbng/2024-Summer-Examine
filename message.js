const commentslist =[
{
	name:"斯蒂芬·库里",
	comment1:
	"下个赛季没有球队想遇到我们！",
	time :"Sat May 22 2021"
},{
	name:"科比·布莱恩特",
	comment1:
	"你见过凌晨四点的洛杉矶吗？",
	time :"Fri Aug 23 2013"
},{
	name:"迈克尔·乔丹",
	comment1:
	"我可以接受失败，但无法接受放弃",
	time :"Fri Jan 19 2022"

}
];
const commentsBox=document.querySelector('#commentslist');
const btnSubmit = document.querySelector('#btn-submit');
let nameInput = document.querySelector('#name');
let commentInput = document.querySelector('#comment');

const renderComments=function(commentslist){
		commentsBox.innerHTML=""

commentslist.forEach((item)=>{
			commentsBox.insertAdjacentHTML(
					'beforeend',
		   `<hr>
			<h4>
		<span>${item.name}</span>
		<span class="date">${item.time}</span>
		</h4>
			<p>${item.comment1}</p>
		`	
		)	
     }
   )
}

renderComments (commentslist);

btnSubmit.onclick =function(){
	let nameStr = nameInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	let commentStr = commentInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	if(nameStr!=""&&commentStr!=""){
	commentslist.unshift(
	{
		name :nameStr,
		comment1: commentStr,
		time:new Date(),
	}

	);
	renderComments(commentslist);
	commentInput.value=""
}
else
	alert('请输入昵称和内容！')
}
