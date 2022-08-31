
//仅打开“案件查询”和“案件详情”，且案件查询在前
//案件查询调整为100条/页
//如需手动停止，请更改“stop_flag”的值为“1”，或直接刷新页面
//达到页面最后一条会自动弹窗显示“完成”
//运行键点击一次即可，请勿多次点击

function get_money(num) {
if (num < 30){
if(document.getElementById('amount')){
[].forEach.call(document.getElementsByTagName('input'), function(inputbox){
if(inputbox.id == "amount"){
let evt = document.createEvent('HTMLEvents');
inputbox.focus();
inputbox.setAttribute('value', 100);
evt.initEvent('input', true, true);
evt.eventType = 'message';
inputbox.dispatchEvent(evt)
}
});
document.getElementsByClassName('ant-btn-primary')[document.getElementsByClassName('ant-btn-primary').length-1].click();
// document.getElementsByClassName('ant-btn-primary')[5].click();
document.getElementsByClassName('ant-modal-close-x')[0].click();
if(list_num == document.getElementsByClassName('ant-table-cell-content').length - 1){
next_page(0);
list_num = 1;
} else{
list_num++;
}
return;
}
setTimeout(function () { get_money(num) }, 500);
num ++;
}
}

function next_page(num) {
// if (num < 30){
// if(document.getElementsByClassName('ant-notification-notice-message').length){
setTimeout(function () {
document.getElementsByClassName("ant-btn-sm")[1].click();
if(document.getElementsByClassName('ant-message-notice-content').length){
alert('完成');
stop_flag = 1;
}
}, 600);
// return;
// }
// setTimeout(function () { next_page(num) }, 500);
// num ++;
// }
}

function main(num) {
if (num < times){
console.log(num);
if(stop_flag == 0) {
document.getElementsByClassName('ant-table-cell-content')[list_num].firstChild.click();
get_money(0);
if(num == times-1){
setTimeout(function () { alert('跑完了，但没完全跑完') }, 2000);
}
}else{
return false;
}
// if(document.getElementsByClassName('ant-message-notice-content').length){
// alert(stop_flag);
// }
setTimeout(function () { main(num) }, 6000);
num ++;
}
}

var stop_flag = 0;
var list_num = 1;
var times = 135;
main(0);

