class Dimensions {
    constructor(width, height) {
        this.width = width || 0;
        this.height = height || 0;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
    }
}

export default Dimensions;
