export class Model {
    constructor() {
        this.block_I = [
            [{'col': 0,'row': 0}, 
            {'col': 1, 'row': 0}, 
            {'col': 2, 'row': 0}, 
            {'col': 3, 'row': 0}],
        
            [{'col': 1, 'row': 2},
            {'col': 1,'row': -1}, 
            {'col': 1, 'row': 0}, 
            {'col': 1, 'row': 1}],
        
            [{'col': 0,'row': 0}, 
            {'col': 1, 'row': 0}, 
            {'col': 2, 'row': 0}, 
            {'col': 3, 'row': 0}],
        
            [{'col': 1, 'row': 2},
            {'col': 1,'row': -1}, 
            {'col': 1, 'row': 0}, 
            {'col': 1, 'row': 1}],
        ];
        
        this.block_O = [
            [{'col': 0, 'row': 1},
            {'col': 0,'row': 0},  
            {'col': 1, 'row': 1}, 
            {'col': 1, 'row': 0}],
        
            [{'col': 0, 'row': 1},
            {'col': 0,'row': 0},  
            {'col': 1, 'row': 1}, 
            {'col': 1, 'row': 0}],
        
            [{'col': 0, 'row': 1},
            {'col': 0,'row': 0},  
            {'col': 1, 'row': 1}, 
            {'col': 1, 'row': 0}],
        
            [{'col': 0, 'row': 1},
            {'col': 0,'row': 0},  
            {'col': 1, 'row': 1}, 
            {'col': 1, 'row': 0}]
        ];
        
        this.block_T = [
            [{'col': 1,'row': 1}, 
            {'col': 1, 'row': 0},
            {'col': 0, 'row': 1}, 
            {'col': 2, 'row': 1}],
        
            [{'col': 1,'row': 2}, 
            {'col': 1, 'row': 1}, 
            {'col': 2, 'row': 1}, 
            {'col': 1, 'row': 0}],
        
            [{'col': 0,'row': 1}, 
            {'col': 1, 'row': 2}, 
            {'col': 2, 'row': 1}, 
            {'col': 1, 'row': 1}],
        
            [{'col': 1,'row': 2}, 
            {'col': 0, 'row': 1}, 
            {'col': 1, 'row': 1}, 
            {'col': 1, 'row': 0}],
        ];
        
        this.block_S = [
            [{'col': 1,'row': 1}, 
            {'col': 0, 'row': 1}, 
            {'col': 1, 'row': 0}, 
            {'col': 2, 'row': 1}],
        
            [{'col': 1,'row': 2}, 
            {'col': 1, 'row': 1}, 
            {'col': 2, 'row': 1}, 
            {'col': 1, 'row': 0}],
        
            [{'col': 0,'row': 1}, 
            {'col': 1, 'row': 2}, 
            {'col': 2, 'row': 1}, 
            {'col': 1, 'row': 1}],
        
            [{'col': 1,'row': 2}, 
            {'col': 0, 'row': 1}, 
            {'col': 1, 'row': 1}, 
            {'col': 1, 'row': 0}],
        ];
        
        this.block_Z = [[1,1,0],
                        [0,1,1]];
        this.block_J = [[1,0,0],
                        [1,1,1]];
        this.block_L = [[0,0,1],
                        [1,1,1]];
        
        this.blocks = [this.block_I, this.block_O, this.block_T, this.block_S];
    }
}