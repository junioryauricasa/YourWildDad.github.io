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
            divList[i++].style.backgroundColor = "blue";
        } else {
            clearInterval(interval);
            divList[i - 1].style.backgroundColor = '#fff';
        }
    }, 100)
};
var traversal = function (type) {
    var divList = [];
    var root = document.getElementById("root");
    var child_1 = document.getElementById("child-1");
    switch (type) {
        case 'pre':
            divList.push(root);
            pre_traversal(root.childNodes, divList);
            break;
        case 'in':
            divList.push(child_1);
            in_traversal(child_1, divList);
            break;
        case 'post':
            divList.push(child_1);
            post_traversal(child_1, divList);
            break;
        default:
    }
    changeBkColor(divList);
};
var pre_traversal = function (elementList, divList) {
    var length = elementList.length;
    for (var i = 0; i < length; i++) {
        divList.push(elementList[i]);
        pre_traversal(elementList[i].childNodes, divList);
    }
};

var in_traversal = function (node, divList) {
    if (node) {
        divList.push(node);
        divList.push(node.parentNode);
        in_traversal(node.parentNode.lastElementNode, divList);
    }
};
var post_traversal = function () {

};