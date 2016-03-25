/**
 * Created by YourWildDad on 2016/3/24.
 */
var interval;
var changeBkColor = function (divList) {
    var length = divList.length, i = 0;
    divList[i++].style.backgroundColor = "blue";
    interval = setInterval(function () {
        if (i < length) {
            divList[i - 1].style.backgroundColor = '#fff';
            console.log("当前遍历的div:" + divList[i].firstChild.nodeValue);
            divList[i++].style.backgroundColor = "blue";

        } else {
            clearInterval(interval);
            divList[i - 1].style.backgroundColor = '#fff';
        }
    }, document.getElementById('set-time').value)
};
var traversal = function (type) {
    var divList = [];
    reset();
    var root = document.getElementById("root");
    switch (type) {
        case 'pre':
            pre_traversal(root, divList);
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
var pre_traversal = function (node, divList) {
    var zhan = [];
    if (!node) {
        console.log("这个节点是空的");
    } else {
        while (node) {
            while (node) {    //只要结点不为空就应该入栈保存，与其左右结点无关
                divList.push(node);
                zhan.push(node);
                node = node.firstElementChild;
            }
            node = zhan.pop();
            node = node.lastElementChild;
        }
    }
};

var in_traversal = function (node, divList) {
    if (node) {
        in_traversal(node.firstElementChild, divList);
        divList.push(node);
        in_traversal(node.lastElementChild, divList);
    }
};
var post_traversal = function (node, divList) {
    if (node) {
        post_traversal(node.firstElementChild, divList);
        post_traversal(node.lastElementChild, divList);
        divList.push(node);
    }
};
var reset = function () {
    clearInterval(interval);
    var divs = document.getElementsByTagName('div');
    for (var i = divs.length - 1; i >= 0; i--) {
        divs[i].style.backgroundColor = '#fff';
    }
};
