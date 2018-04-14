class hx_Board {
    constructor(MaxWidth,MaxLength,Offset){

        this.Tiles = {}
        this.MaxLength = MaxLength;
        this.MaxWidth = MaxWidth;
        this.Offset = Offset;
    }

    generate(){
        for(var i = this.Offset[0]; i < this.MaxLength+this.Offset[0]; i++){
            for(var j = this.Offset[1]; j < this.MaxWidth+this.Offset[1]; j++){
                var hxTile = new hx_Tile();
                var Tile = hxTile.tile;
                Tile.pos = {
                    x: j,
                    y: i,
                    h: 0.5
                }
                Tile.selected = false;
                Tile.gamedata = {}
                this.add(hxTile)
                var offset = 0;
                if(Tile.pos.y % 2 != 0){
                    offset = .9
                }
                Tile.position.set((Tile.pos.x*1.75+offset),0,Tile.pos.y*1.5)
                hx_scene.add(Tile)
            }
        }
    }

    add(hxTile){
        var key, pos;
        pos = hxTile.Tile.pos;
        key = String(pos.x) + "," + String(pos.y)
        this.Tiles[key] = hxTile;
        hx_grid.updateCellObject(key,hxTile);
    }

    removeTile(tile){
        pos = tile.pos;
        key = String(pos.x) + "," + String(pos.y)
        this.Tiles[key] = null;
    }

    get board(){
        return this.Tiles;
    }
}