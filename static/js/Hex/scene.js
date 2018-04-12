class hx_Scene {
    constructor(){

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize( window.innerWidth*.75, window.innerHeight*.75);

        this.controls = new THREE.OrbitControls( this.camera );
        this.controls.update();
        var green = new THREE.Color( 0x40C843 );


        document.body.appendChild( this.renderer.domElement );

        window.addEventListener( 'resize', this.onWindowResize, false );
    }

    renderer(){
        return this.renderer;
    }

    camera(){
        return this.camera
    }

    scene(){
        return this.scene
    }

    add(obj){
        this.scene.add(obj);
    }

    controlsUpdate(){
        this.controls.update();
    }

    onWindowResize(){

        hx_scene.camera.aspect = window.innerWidth / window.innerHeight;
        hx_scene.camera.updateProjectionMatrix();
    
        hx_scene.renderer.setSize( window.innerWidth*.75, window.innerHeight*.75 );
    
    }
}