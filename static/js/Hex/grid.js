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
                var Cell = new hx_Cell().cell();
                Cell.pos = {
                    x: j,
                    y: i,
                    h: 0.5
                }
                Cell.selected = false;
                this.add(Cell, 0.5)
                var offset = 0;
                if(Cell.pos.y % 2 != 0){
                    offset = 1
                }

                Cell.position.set((Cell.pos.x*1.9) + offset,0,Cell.pos.y*1.8)
                
                hx_scene.add(Cell)
            }
        }
    }

    add(cell, height){
        var key, pos;
        pos = cell.pos;
        key = String(pos.x) + String(pos.y)
        this.cells[key] = {
            cell: cell,
            id: this.guid()
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
}