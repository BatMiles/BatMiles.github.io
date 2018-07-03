const classes = [{
    name: "Class 1",
    studentIds: [1, 2]
}, {
    name: "Class 2",
    studentIds: []
}, {
    name: "Class 3",
    studentIds: []
}];


function add_element(parentId, elementType, elementId, html) {
    var parent = document.getElementById(parentId);
    var newElement = document.createElement(elementType);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    parent.insertBefore(newElement, parent.firstChild);
}

function make_row(className, studentNum) {
	var html = "<div class=\"row\"><img src=\"https://s3-us-west-2.amazonaws.com/vidcode/assets/coursethumbs/creative-coding.png\"><div class=\"text\"><h3>"
				+className
				+"</h3><p>"
				+studentNum + " Students"
				+"</p></div><div class=\"begin-button\">Begin</div></div>"
	return html
}

document.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < classes.length; i++) {
		var classData = classes[i]
		add_element("content", "div", "row", make_row(classData.name, classData.studentIds.length))
	}
}, false);