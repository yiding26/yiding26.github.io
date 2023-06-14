function updateCopyrightYear() {
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = "版权所有 © " + currentYear + " yiding26 只有专注才能成功！";
}
        
// 在页面加载完成后调用函数更新版权年份
document.addEventListener("DOMContentLoaded", function() {
    updateCopyrightYear();
});
