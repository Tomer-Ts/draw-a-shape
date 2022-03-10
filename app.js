//**Desired shape**//
var DesiredShape = +prompt("welcome to the first project in typescript \n" +
    "please select desired shape:\n" +
    " 1) square \n 2) rectangle \n 3) triangle", "please select 1 or 2 or 3, for the shape type");
var squareside;
var rectanglewidth;
var rectangleheigth;
var triangleside;
var shapecontent;
switch (DesiredShape) {
    case 1: ///***case 1 = the shape type is square***///
        squareside = +prompt("please enter square side lenght");
        if (squareside <= 1 || squareside % 1 != 0) {
            alert("error. please enter rectanglewidth positive integer number");
            break;
        }
        shapecontent = +prompt("please select shape content\n" +
            " 1) *****\n 2) *    *\n 3) 12345\n 4) 54321", "please select 1 or 2 or 3 or 4, for the shape content");
        if (shapecontent < 1 || shapecontent > 4 || shapecontent % 1 != 0) {
            alert("error. Please select 1 or 2 or 3 or 4, for the shape content");
            break;
        }
        if (shapecontent == 1) {
            PrintSquareFullAsterisk(squareside);
            SquarePerimetrAndArea(squareside);
        }
        else if (shapecontent == 2) {
            PrintSquareFrameAsterisk(squareside);
            SquarePerimetrAndArea(squareside);
        }
        else if (shapecontent == 3) {
            PrintSquareNumberUp(squareside);
            SquarePerimetrAndArea(squareside);
        }
        else if (shapecontent == 4) {
            PrintSquareNumberDown(squareside);
            SquarePerimetrAndArea(squareside);
        }
        break;
    case 2: ///***case 2 = the shape type is rectangle***///
        rectanglewidth = +prompt("please enter rectangle width");
        if (rectanglewidth <= 1 || rectanglewidth % 1 != 0) {
            alert("error. please enter rectanglewidth positive integer number");
            break;
        }
        rectangleheigth = +prompt("please enter rectangle heigth");
        if (rectangleheigth <= 1 || rectangleheigth % 1 != 0) {
            alert("error. please enter rectanglewidth positive integer number");
            break;
        }
        shapecontent = +prompt("please select shape content\n" +
            " 1) *****\n 2) *    *\n 3) 12345\n 4) 54321", "please select 1 or 2 or 3 or 4, for the shape content");
        if (shapecontent < 1 || shapecontent > 4 || shapecontent % 1 != 0) {
            alert("error. Please select 1 or 2 or 3 or 4, for the shape content");
            break;
        }
        if (shapecontent == 1) {
            PrintRectangleFullAsterisk(rectanglewidth, rectangleheigth);
            RectanglePerimetrAndArea(rectanglewidth, rectangleheigth);
        }
        if (shapecontent == 2) {
            PrintRectangleFrameAsterisk(rectanglewidth, rectangleheigth);
            RectanglePerimetrAndArea(rectanglewidth, rectangleheigth);
        }
        else if (shapecontent == 3) {
            PrintRectangleNumbersUp(rectanglewidth, rectangleheigth);
            RectanglePerimetrAndArea(rectanglewidth, rectangleheigth);
        }
        else if (shapecontent == 4) {
            PrintRectangleNumbersDown(rectanglewidth, rectangleheigth);
            RectanglePerimetrAndArea(rectanglewidth, rectangleheigth);
        }
        break;
    case 3: ///***case 3 = the shape type is triangle***///
        triangleside = +prompt("please enter triangle side lenght");
        if (triangleside <= 1 || triangleside % 1 != 0) {
            alert("error. please enter rectanglewidth positive integer number");
            break;
        }
        shapecontent = +prompt("please select shape content\n" +
            " 1) *****\n 2) *    *\n 3) 12345\n 4) 54321", "please select 1 or 2 or 3 or 4, for the shape content");
        if (shapecontent < 1 || shapecontent > 4 || shapecontent % 1 != 0) {
            alert("error. Please select 1 or 2 or 3 or 4, for the shape content");
            break;
        }
        if (shapecontent == 1) {
            PrintTriangleFullAsterisk(triangleside);
            TrianglePerimetrAndArea(triangleside);
        }
        else if (shapecontent == 2) {
            PrintTriangleFrameAsterisk(triangleside);
            TrianglePerimetrAndArea(triangleside);
        }
        else if (shapecontent == 3) {
            PrintTriangleNumberUp(triangleside);
            TrianglePerimetrAndArea(triangleside);
        }
        else if (shapecontent == 4) {
            PrintTriangleNumberDown(triangleside);
            TrianglePerimetrAndArea(triangleside);
        }
        break;
    default:
        alert("error. please select 1 or 2 or 3, for the shape type.");
        break;
}
/////////******** function -print square in type full asterisk*****////////
function PrintSquareFullAsterisk(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = n; i >= 1; i--) {
            document.write("*" + "&nbsp");
        }
        document.write("<br/>");
    }
}
/////////******** function -print square in type frame asterisk*****////////
function PrintSquareFrameAsterisk(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = 1; i <= n; i++) {
            if (f == 1 || f == n) {
                document.write("*" + "&nbsp");
            }
            else if (i == 1 || i == n) {
                document.write("*" + "&nbsp");
            }
            else {
                document.write("&nbsp" + "&nbsp");
            }
        }
        document.write("<br/>");
    }
}
/////////******** function -print square in type numbers up*****////////
function PrintSquareNumberUp(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = 1; i <= n; i++) {
            document.write(i + "&nbsp");
        }
        document.write("<br/>");
    }
}
/////////******** function -print square in type numbers down*****////////
function PrintSquareNumberDown(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = n; i >= 1; i--) {
            document.write(i + "&nbsp");
        }
        document.write("<br/>");
    }
}
//////*******function for square perimeter and area*****////////
function SquarePerimetrAndArea(squareside) {
    var perimeter = squareside * 4;
    var area = squareside * squareside;
    document.write("square perimeter: " + perimeter + "<br/>");
    document.write("square area: " + area + "<br/>");
}
//////*****function print rectangle in type full asterisk******//////////
function PrintRectangleFullAsterisk(rectanglewidth, rectangleheigth) {
    for (var f = 1; f <= rectangleheigth; f++) {
        for (var i = 1; i <= rectanglewidth; i++) {
            document.write("*" + "&nbsp" + "&nbsp");
        }
        document.write("<br/>");
    }
}
//////*****function print rectangle in type frame asterisk******//////////
function PrintRectangleFrameAsterisk(rectanglewidth, rectangleheigth) {
    for (var f = 1; f <= rectangleheigth; f++) {
        for (var i = 1; i <= rectanglewidth; i++) {
            if (i == rectanglewidth || i == 1 || f == rectangleheigth || f == 1) {
                document.write("* ");
            }
            else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br/>");
    }
}
//////*****function print rectangle in type numbers up******//////////
function PrintRectangleNumbersUp(rectanglewidth, rectangleheigth) {
    for (var f = 1; f <= rectangleheigth; f++) {
        for (var i = 1; i <= rectanglewidth; i++) {
            document.write(i + "&nbsp" + "&nbsp");
        }
        document.write("<br/>");
    }
}
//////******function print rectangle in type numbers down******//////////
function PrintRectangleNumbersDown(rectanglewidth, rectangleheigth) {
    for (var f = rectangleheigth; f >= 1; f--) {
        for (var i = rectanglewidth; i >= 1; i--) {
            document.write(i + "&nbsp" + "&nbsp");
        }
        document.write("<br/>");
    }
}
//////*******function for rectangle perimeter and area*****////////
function RectanglePerimetrAndArea(rectanglewidth, rectangleheigth) {
    var perimeter = (rectanglewidth + rectangleheigth) * 2;
    var area = rectanglewidth * rectangleheigth;
    document.write("rectangle perimeter: " + perimeter + "<br/>");
    document.write("rectangle area: " + area + "<br/>");
}
/////////******** function -print triangle in type full asterisk *****////////
function PrintTriangleFullAsterisk(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = 1; i <= f; i++) {
            document.write("*" + "&nbsp");
        }
        document.write("<br/>");
    }
}
/////////******** function -print triangle in type frame asterisk *****////////
function PrintTriangleFrameAsterisk(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = 1; i <= f; i++) {
            if (f == 1 || f == n) {
                document.write("*" + "&nbsp");
            }
            else if (i == 1 || i == f) {
                document.write("*" + "&nbsp");
            }
            else {
                document.write("&nbsp" + "&nbsp");
            }
        }
        document.write("<br/>");
    }
}
/////////******** function -print triangle in type numbers up*****////////
function PrintTriangleNumberUp(n) {
    for (var f = 1; f <= n; f++) {
        for (var i = 1; i <= f; i++) {
            document.write(i + "&nbsp");
        }
        document.write("<br/>");
    }
}
/////////******** function -print triangle in type numbers down*****////////
function PrintTriangleNumberDown(n) {
    for (var f = n; f >= 1; f--) {
        for (var i = n; i >= f; i--) {
            document.write(i + "&nbsp");
        }
        document.write("<br/>");
    }
}
//////*******function for triangle perimeter and area*****////////
function TrianglePerimetrAndArea(triangleside) {
    var perimeter = triangleside * 3;
    var area = (triangleside * triangleside) / 2;
    document.write("triangle perimeter: " + perimeter + "<br/>");
    document.write("triangle area: " + area + "<br/>");
}
//# sourceMappingURL=app.js.map