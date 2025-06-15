// 为所有复制按钮添加功能
document.querySelectorAll('.copy-btn').forEach(btn => {
btn.addEventListener('click', () => {
const codeBlock = btn.parentNode.querySelector('code');
const code = codeBlock.textContent;

navigator.clipboard.writeText(code).then(() => {
btn.textContent = '已复制!';
btn.classList.add('copied');
setTimeout(() => {
btn.textContent = '复制';
btn.classList.remove('copied');
}, 2000);
}).catch(err => {
console.error('复制失败: ', err);
btn.textContent = '复制失败';
});
});
});