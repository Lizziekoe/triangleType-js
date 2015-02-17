$(document).ready(function() {
  $("form#triangleSides").submit(function(event) {
    event.preventDefault();

    var inputSideOne = parseInt($("input#sideOne").val());
    var inputSideTwo = parseInt($("input#sideTwo").val());
    var inputSideThree = parseInt($("input#sideThree").val());
    var triangle = {sideOne: inputSideOne,
                    sideTwo: inputSideTwo,
                    sideThree: inputSideThree,
                    triangleSides: function() {
                      return this.sideOne + ", " + this.sideTwo + ", " + this.sideThree;
                    }
                  };

    var newTriangle = {sideOne: inputSideOne,
                    sideTwo: inputSideTwo,
                    sideThree: inputSideThree,
                    triangle: triangle.triangleSides()};


    if (newTriangle.sideOne + newTriangle.sideTwo <= newTriangle.sideThree ||
            newTriangle.sideTwo + newTriangle.sideThree <= newTriangle.sideOne ||
            newTriangle.sideThree + newTriangle.sideOne <= newTriangle.sideTwo) {
        alert("THAT'S ILLEGAL!");

      }

    else if ((newTriangle.sideOne === newTriangle.sideTwo) && (newTriangle.sideTwo === newTriangle.sideThree)) {

      $("ul#equilateral").append("<li>" + newTriangle.triangle + "</li>");

    } else if ((newTriangle.sideOne === newTriangle.sideTwo && newTriangle.sideOne !== newTriangle.sideThree) ||
            (newTriangle.sideTwo === newTriangle.sideThree && newTriangle.sideTwo !== newTriangle.sideOne) ||
            (newTriangle.sideThree === newTriangle.sideOne && newTriangle.sideThree !== newTriangle.sideTwo)) {

      $("ul#isosceles").append("<li>" + newTriangle.triangle + "</li>");

    } else {

      $("ul#scalene").append("<li>" + newTriangle.triangle + "</li>");

    }
  });
});
