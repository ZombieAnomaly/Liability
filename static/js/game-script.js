
var hx_scene = new hx_Scene();


function RenderHexDemo(){
    var Hexagon = new hx_Tile().tile();
    hx_scene.add( Hexagon);
    
    hx_scene.camera.position.set(0,5,5);
    hx_scene.camera.lookAt(Hexagon.position)
}

RenderHexDemo();


//game logic is handled in update loop
var update = function(){
      hx_scene.controlsUpdate
};

//draw and render the scene
var render = function(){
    scene = hx_scene.scene

	hx_scene.renderer.render( scene, hx_scene.camera );
};

//run complete gameLoop ie. update, render, repeat
var gameLoop = function(){
    requestAnimationFrame( gameLoop );

    update();
    render();
};


gameLoop();

