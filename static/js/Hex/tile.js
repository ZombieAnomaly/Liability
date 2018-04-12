class hx_Tile {
    constructor(){
        this.color = new THREE.Color( 0x40C843 );

        this.Hexgeometry =new THREE.CylinderBufferGeometry( 1, 1, .5, 6 );
        this.Hexmaterial = new THREE.MeshBasicMaterial( {color: this.color} );
        this.Hexagon = new THREE.Mesh( this.Hexgeometry, this.Hexmaterial );
    
        this.WireframeGeometry = new THREE.EdgesGeometry( this.Hexagon.geometry ); // or WireframeGeometry
        this.WireframeMat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
        this.Wireframe = new THREE.LineSegments( this.WireframeGeometry, this.WireframeMat );
        this.Hexagon.add( this.Wireframe );
    }

    tile(){
        return this.Hexagon
    }
}