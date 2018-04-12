window.addEventListener('load', function(evt) {
        
    var scene = new vg.Scene({
        element: document.getElementById('view'),
        cameraPosition: {x:0, y:300, z:400}
    }, true, 0.75);

    // this constructs the cells in grid coordinate space
    var grid = new vg.HexGrid({
        cellSize: 40, // size of individual cells
    });
    
    grid.generate({
        size: 5 // size of the board
    });

    var mouse = new vg.MouseCaster(scene.container, scene.camera);
    var board = new vg.Board(grid);

    // this will generate extruded hexagonal tiles
    board.generateTilemap({
        tileScale: 0.96 // you might have to scale the tile so the extruded geometry fits the cell size perfectly
    });

    scene.add(board.group);
    scene.focusOn(board.group);

    var vec = new THREE.Vector3();

    mouse.signal.add(function(evt, tile) {
        if (evt === vg.MouseCaster.CLICK) {
            tile.toggle();
            console.log(tile);
            var neighbors = grid.getNeighbors(tile.cell, false);
            console.log(neighbors);

            /* or we can use the mouse's raw coordinates to access the cell directly, just for fun:
            var cell = board.grid.pixelToCell(mouse.position);
            var t = board.getTileAtCell(cell);
            if (t) t.toggle();*/
        }
    }, this);


    //game logic is handled in update loop
    var update = function(){
        mouse.update();
        scene.render();       
    };

    //run complete gameLoop 
    var gameLoop = function(){
        requestAnimationFrame( gameLoop );

        update();
    };
    gameLoop();
});
