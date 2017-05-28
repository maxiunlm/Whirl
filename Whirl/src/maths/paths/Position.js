class Position {
    constructor(left, top) {
        this.setPosition(left, top);
    }
    
    setPosition(left, top) {
        this.left = left || 0;
        this.top = top || 0;
    }
}

export default Position;
