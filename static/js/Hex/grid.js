class hx_Grid {
    constructor(MaxWidth,MaxLength,HeightMap){

        this.cells = {}
        this.MaxLength = MaxLength;
        this.MaxWidth = MaxWidth;
        this.HeightMap = HeightMap;
    }

    generate(){
        for(var i = 0; i < this.MaxLength; i++){
            for(var j =0; j < this.MaxWidth; j++){
                var hxCell = new hx_Cell().cell();
                var Cell = hxCell.Cell;
                Cell.pos = {
                    x: j,
                    y: i,
                    h: 0.5
                }
                Cell.selected = false;
                Cell.cell = true;
                this.add(hxCell)
                var offset = 0;
                if(Cell.pos.y % 2 != 0){
                    offset = .9
                }

                Cell.position.set((Cell.pos.x*1.75) + offset,0,Cell.pos.y*1.5)
                
                hx_scene.add(Cell)
            }
        }
    }

    cleanup(){
        for(var i = 0; i < this.MaxLength; i++){
            for(var j =0; j < this.MaxWidth; j++){
                var key = String(i) + "," + String(j)
                this.cells[key].hx_cell.Cell.oldChildren = this.cells[key].hx_cell.Cell.children;
                this.cells[key].hx_cell.rmWireframe();
            }
        }
    }

    add(cell){
        var key, pos;
        pos = cell.Cell.pos;
        key = String(pos.x) + "," + String(pos.y)
        this.cells[key] = {
            hx_cell: cell,
            hx_tile: null,
            _id: this.guid(),
            outline: cell.Cell.children
           
        };
    }

    guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return 'UID-' + s4()+s4();
      }

    removeTile(cell){
        this.cells[cell.pos].tile = null;
    }

    grid(){
        return this.cells;
    }

    updateCellObject(key,hxTile){
        this.cells[key].hx_tile = hxTile
    }
}