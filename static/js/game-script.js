
var hx_scene = new hx_Scene();
var hx_grid = new hx_Grid(10,10, [.5,1]);
var hx_board = new hx_Board(10,10, [0,0]);

function RenderHexDemo(){

    hx_grid.generate();
    hx_board.generate();
   
    
    hx_scene.camera().position.set(20,30,20);
    hx_scene.camera().lookAt(hx_grid.grid()['6,6'].hx_cell.Cell.position)
    //hx_grid.cleanup();
}

RenderHexDemo();

console.log(hx_grid.grid());


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

