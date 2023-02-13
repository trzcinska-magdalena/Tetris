export class Model {
    constructor() {
        const block_I = [
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
        
        const block_O = [
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
        
        const block_T = [
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
        
        const block_S = [
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
        
        let block_Z = [[1,1,0],
                        [0,1,1]];
        let block_J = [[1,0,0],
                        [1,1,1]];
        let block_L = [[0,0,1],
                        [1,1,1]];
        
        let blocks = [block_I, block_O, block_T, block_S];
    }
}
