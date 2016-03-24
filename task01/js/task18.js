(function() {
    //兼容浏览器
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },

        getEvent: function (event) {
            return event ? event : window.event;
        },

        getTarget: function (event) {
            return event.target || event.srcElement;
        },

        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },

        removeHandler: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        }
    };
    var container = document.getElementById('container');
    var button = document.getElementsByClassName('btn');
    var box = document.getElementById('container');
    //右侧进入 type = 0;左侧进入
    function addDiv(num, type) {
        //console.log(box);
        var newItem = document.createElement('div');
        var textNode = document.createTextNode(num);
        newItem.appendChild(textNode);
        if (type == 0) {
            box.appendChild(newItem);
        } else {
            box.insertBefore(newItem, box.firstChild);
        }
    }

    //左侧删除 type = 0; 右侧删除
    function delDiv(type) {
        if (box.firstElementChild) {
            if (type == 0) {
                var number = box.firstElementChild.innerHTML;
                box.removeChild(box.firstElementChild);
            } else {
                var number = box.lastElementChild.innerHTML;
                box.removeChild(box.lastElementChild);
            }
            alert(number);
        } else {
            alert('没有了！')
        }

    }
    //验证是否为数字
    function checkValue(number) {
        if(!(/^\d+$/.test(number))){
            alert("请输入正确的整数！");
            return false;
        }
        return true;
    }
    //左侧进入
    EventUtil.addHandler(button[0], 'click', function () {
        var inputValue = document.getElementById('number').value;
        if (checkValue(inputValue)) {
            addDiv(inputValue);
        }
    });
    //右侧进入
    EventUtil.addHandler(button[1], 'click', function () {
        var inputValue = document.getElementById('number').value;
        if (checkValue(inputValue)) {
            addDiv(inputValue, 0);
        }
    });
    //左侧删除
    EventUtil.addHandler(button[2], 'click', function () {
        delDiv(0);
    });
    //右侧删除
    EventUtil.addHandler(button[3], 'click', function () {
        delDiv();
    });
    //点击元素删除
    EventUtil.addHandler(container, 'click', function (event) {
        var target = EventUtil.getTarget(event);
        if(target.tagName == "DIV") {
            var number = target.innerHTML;
            container.removeChild(target);
            alert(number);
        }
    });
})()