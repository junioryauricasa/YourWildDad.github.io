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
    }, 500)
};
var traversal = function (type) {
    var divList = [];
    var root = document.getElementById("root");
    switch (type) {
        case 'pre':
            divList.push(root);
            pre_traversal(root.childNodes, divList);
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
var pre_traversal = function (elementList, divList) {
    var length = elementList.length;
    for (var i = 0; i < length; i++) {
        divList.push(elementList[i]);
        pre_traversal(elementList[i].childNodes, divList);
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