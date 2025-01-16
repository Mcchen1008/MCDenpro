// 获取 QQ 群号、服务器地址和端口号的元素
const qqGroup = document.querySelector('.qq-group');
const serverAddress = document.querySelector('.server-address');
const serverPort = document.querySelector('.server-port');

// 为每个元素添加点击事件监听器
qqGroup.addEventListener('click', copyToClipboard);
serverAddress.addEventListener('click', copyToClipboard);
serverPort.addEventListener('click', copyToClipboard);

// 复制到剪贴板的函数
function copyToClipboard(event) {
    const text = event.target.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('已复制到剪贴板：' + text);
}
