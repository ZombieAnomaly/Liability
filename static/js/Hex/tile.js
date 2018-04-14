class hx_Tile {
    constructor(){
        this.color = new THREE.Color( 0x40C843 );
        this.pos = {
            x:0,
            y:0,
            h:0
        }
        this.selected = false;
        this.gamedata = {}
        this.Hexgeometry =new THREE.CylinderBufferGeometry( 1, 1, .5, 6 );
        this.Hexmaterial = new THREE.MeshBasicMaterial( {color: this.color} );
        this.Tile = new THREE.Mesh( this.Hexgeometry, this.Hexmaterial );
    
        this.WireframeGeometry = new THREE.EdgesGeometry( this.Tile.geometry ); // or WireframeGeometry
        this.WireframeMat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
        this.Wireframe = new THREE.LineSegments( this.WireframeGeometry, this.WireframeMat );
        this.Tile.add( this.Wireframe );
    }
  
    tile(){
        return this.Tile
    }

}