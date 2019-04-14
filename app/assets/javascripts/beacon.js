var framesPerSecond = 15;
var initialOpacity = 1
var opacity = initialOpacity;
var initialRadius = 10;
var radius = initialRadius;
var maxRadius = 50;

map.on('load', function () {

    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('point', {
        "type": "geojson",
        "data": {
            "type": "Point",
            "coordinates": [
                -87.646164, 41.894611
            ]
        }
    });

    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": initialRadius,
            "circle-radius-transition": {duration: 0},
            "circle-opacity-transition": {duration: 0},
            "circle-color": "#ffffff"
        }
    });

    map.addLayer({
        "id": "point1",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": initialRadius,
            "circle-color": "#007cbf"
        }
    });


    function animateMarker(timestamp) {
        setTimeout(function(){
            requestAnimationFrame(animateMarker);

            radius += (maxRadius - radius) / framesPerSecond;
            opacity -= ( .9 / framesPerSecond );

            map.setPaintProperty('point', 'circle-radius', radius);
            map.setPaintProperty('point', 'circle-opacity', opacity);

            if (opacity <= 0) {
                radius = initialRadius;
                opacity = initialOpacity;
            }

        }, 1000 / framesPerSecond);

    }
});
