// script.js
// 获取菜单项和子菜单
var menuItems = document.querySelectorAll('#menu li');
var subMenus = document.querySelectorAll('#menu li ul');

// 为每个菜单项添加鼠标悬停事件监听器
menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    // 显示当前菜单项的子菜单
    var subMenu = this.querySelector('ul');
    if (subMenu) {
      subMenu.style.display = 'block';
    }
  });

  item.addEventListener('mouseout', function() {
    // 隐藏当前菜单项的子菜单
    var subMenu = this.querySelector('ul');
    if (subMenu) {
      subMenu.style.display = 'none';
    }
  });

  // 为每个菜单项的链接添加点击事件监听器
  var link = item.querySelector('a');
  if (link) {
    link.addEventListener('click', function(event) {
      // 阻止默认链接跳转行为
      event.preventDefault();

      // 获取链接的目标页面 URL
      var targetUrl = link.getAttribute('href');

      // 在这里可以执行其他需要的操作，例如页面跳转
      window.location.href = targetUrl;
    });
  }
});
