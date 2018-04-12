
var hx_scene = new hx_Scene();
var hx_grid = new hx_Grid(10,10, [.5,1]);


function RenderHexDemo(){

    hx_grid.generate();
    console.log(hx_grid.grid());
    var Cell = new hx_Cell().cell();
    hx_scene.add( Cell);
    
    hx_scene.camera().position.set(20,30,20);

    hx_scene.camera().lookAt(hx_grid.grid()['00'].cell.position)
}

RenderHexDemo();


//game logic is handled in update loop
var update = function(){
    hx_scene.controlsUpdate();

      
};

//draw and render the scene
var render = function(){
    scene = hx_scene.scene()

	hx_scene.renderer().render( scene, hx_scene.camera() );
};

//run complete gameLoop ie. update, render, repeat
var gameLoop = function(){
    requestAnimationFrame( gameLoop );

    update();
    render();
};


gameLoop();

