var interval; // 缓存定时器ID
/**
 * 改变队列里div的颜色
 * @param divList div列表
 */
var changeBkColor = function (divList) {
    var length = divList.length, i = 0;
    divList[i++].style.backgroundColor = "blue";
    interval = setInterval(function () {
        if (i < length) {
            divList[i - 1].style.backgroundColor = '#fff';
            divList[i++].style.backgroundColor = "blue";
        } else {
            clearInterval(interval);
            divList[i - 1].style.backgroundColor = '#fff';
        }
    }, document.getElementById('set-time').value)
};
/**
 * 按钮点击事件
 * @param type 点击了哪个按钮
 */
var traversal = function (type) {
    var divList = [];
    reset();
    var root = document.getElementById("root");
    switch (type) {
        case 'pre':
            divList.push(root);
            pre_traversal(root.children, divList);
            break;
        case 'in':
            in_traversal(root, divList);
            break;
        case 'post':
            post_traversal(root, divList);
            break;
        default:
    }
    changeBkColor(divList);
};
/**
 * 前序遍历
 * @param elementList 父节点
 * @param divList 遍历列表
 */
var pre_traversal = function (elementList, divList) {
    var length = elementList.length;
    for (var i = 0; i < length; i++) {
        divList.push(elementList[i]);
        pre_traversal(elementList[i].children, divList);
    }
};

/**
 * 中序遍历
 * @param node 父节点
 * @param divList 遍历列表
 */
var in_traversal = function (node, divList) {
    if (node) {
        in_traversal(node.firstElementChild, divList);
        divList.push(node);
        in_traversal(node.lastElementChild, divList);
    }
};
/**
 * 后序遍历
 * @param node 父节点
 * @param divList 遍历列表
 */
var post_traversal = function (node, divList) {
    if (node) {
        post_traversal(node.firstElementChild, divList);
        post_traversal(node.lastElementChild, divList);
        divList.push(node);
    }
};
/**
 * 重置全部
 */
var reset = function () {
    clearInterval(interval);
    var divs = document.getElementsByTagName('div');
    for (var i = divs.length - 1; i >= 0; i--) {
        divs[i].style.backgroundColor = '#fff';
    }
};