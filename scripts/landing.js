var animatePoints = function() {
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(iPoint) {
        points[iPoint].style.opacity = 1;
        points[iPoint].style.transform = "scaleX(1) translateY(0)";
        points[iPoint].style.msTransform = "scaleX(1)    translateY(0)";
        points[iPoint].style.WebkitTranfrom = "scaleX(1) translateY(0)";
    }
    
    for(var i=0; i<points.length; i++){
        revealPoint(i);
    }
};