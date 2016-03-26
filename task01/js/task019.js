/**
 * Created by Stoneworld on 2016/3/24.
 */
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
        var newItem = document.createElement('div');
        newItem.style.height = num*4 + "px";
        newItem.title = num;
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
                var number = box.firstElementChild.title;

                box.removeChild(box.firstElementChild);
            } else {
                var number = box.lastElementChild.title;
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
        if (number < 10 || number > 100) {
            alert('请输入10-100之间的数字');
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
        var target = EventUtil.getTarget(event);//获取被事件触发的元素。
        if(target.tagName == "DIV") {
            var number = target.title;
            container.removeChild(target);
            alert(number);
        }
    });
    /**产生随机数 **/
    function randomArr(total) {
        var arr=[];
        for(var i=0;i<total;i++){
            arr.push(Math.floor(Math.random()*90)+10);
        }
        return arr;
    }

    EventUtil.addHandler(button[4], 'click', function () {
        box.innerHTML = '';
        var arr = randomArr(50);
        for (var i = 0; i < arr.length; i++) {
            var newItem = document.createElement('div');
            newItem.style.height = arr[i]*4 + "px";
            newItem.title = arr[i];
            box.appendChild(newItem);
        }
    });
    //获取对应div的所有div数字组成数组
    function getBoxDiv(box) {
        var div = box.getElementsByTagName('div');
        var divArr = [];
        for (var i = 0; i < div.length; i++) {
            divArr.push(div[i]['title']);
        }
        return divArr;
    }

    function changeColorToRed(color) {
        var div = box.getElementsByTagName('div');
        for (var i =0; i< div.length; i++) {
            if (div[i].style.backgroundColor == color) {
                div[i].style.backgroundColor = 'red';
            }
        }
    }

    EventUtil.addHandler(button[5], 'click', function () {
        //获取所排序内容组成数组
        var divArr = getBoxDiv(box);
        var num = quickSort(divArr);
        console.log(num);
    });

    /** 快速排序 **/
    //var numArr = [6, 3, 5, 7, 6, 8, 6];
    function quickSort(numArr) {
        var numArr = numArr;
        function sort(left, right) {
            var i, j, temp;
            i = left;
            j = right;
            temp = numArr[left];
            //var time = setInterval(run, 150)
            if ((right-left) > 0) {
                while (i != j) {
                    var div = box.getElementsByTagName('div');
                    //动画应该在这里
                    //var timer = null;
                    while (numArr[j] >= temp && i < j ) {
                        //alert(1);
                        alert(1);
                        changeColorToRed('blue');
                        j--;
                        div[j].style.backgroundColor = 'blue';  
                    }
                    
                    while (numArr[i] <= temp && i < j) {
                        alert(2);
                        changeColorToRed('yellow');
                        i++;
                        div[i].style.backgroundColor = 'yellow';
                    }
                    if (i < j) {
                        var t = numArr[i];
                        numArr[i] = numArr[j];
                        div[i].style.height = numArr[j]*4 + "px";
                        div[i].title = numArr[j];
                        numArr[j] = t;
                        div[j].style.height = t*4 + "px";
                        div[j].title = t;

                    }
                }

                numArr[left] = numArr[i];
                div[left].style.height = numArr[i]*4 + "px";
                div[left].title = numArr[i];
                numArr[i] = temp;
                div[i].style.height = temp*4 + "px";
                div[i].title = temp;
                sort(left,i);//左边递归的过程
                sort(i+1,right);//右边递归的过程
            }
        }
        var num = numArr.length - 1;
        sort(0, num);
        return numArr;
    }
    /*var aa = quickSort(numArr);
    console.log(aa);*/
})()