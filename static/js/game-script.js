
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.75, window.innerHeight*.75);
document.body.appendChild( renderer.domElement );
var HexMesh;

RenderHexDemo();

window.addEventListener( 'resize', onWindowResize, false );

function RenderHexDemo(){
    var red = new THREE.Color( 0xFF0101 );

    var Hexgeometry =new THREE.CylinderBufferGeometry( 1, 1, 1, 6 );
    var Hexmaterial = new THREE.MeshBasicMaterial( {color: red} );
    HexMesh = new THREE.Mesh( Hexgeometry, Hexmaterial );

    var geo = new THREE.EdgesGeometry( HexMesh.geometry ); // or WireframeGeometry
    var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
    var hex = new THREE.LineSegments( geo, mat );

    scene.add( HexMesh );
    HexMesh.add( hex );

    camera.position.z = 5;
}



function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth*.75, window.innerHeight*.75 );

}

//game logic is handled in update loop
var update = function(){
      
};

//draw and render the scene
var render = function(){

    HexMesh.rotation.x += 0.01;
    HexMesh.rotation.y += 0.01;

	renderer.render( scene, camera );
};

//run complete gameLoop ie. update, render, repeat
var gameLoop = function(){
    requestAnimationFrame( gameLoop );

    update();
    render();
};


gameLoop();