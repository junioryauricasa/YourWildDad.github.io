/**
 * Created by YourWildDad on 2016/3/24.
 */
var interval;
var changeBkColor = function(divList) {
	var length = divList.length,
		i = 0;
	divList[i++].style.backgroundColor = "blue";
	interval = setInterval(function() {
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
var traversal = function(type) {
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
var pre_traversal = function(node, divList) {
	divList.push(node);
	var children = node.children,
		length = children.length;
	for (var i = 0; i < length; i++) {
		pre_traversal(children[i], divList);
	}
};

var in_traversal = function(node, divList) {
	var children = node.children,
		length = children.length;
	for (var i = 0; i < length; i++) {
		divList.push(children[i]);
		pre_traversal(children[i], divList);
	}

};
var post_traversal = function(node, divList) {
	var children = node.children,
		length = children.length;
	for (var i = 0; i < length; i++) {
		pre_traversal(children[i], divList);
	}
	divList.push(node);
};
var reset = function() {
	clearInterval(interval);
	var divs = document.getElementsByTagName('div');
	for (var i = divs.length - 1; i >= 0; i--) {
		divs[i].style.backgroundColor = '#fff';
	}
};