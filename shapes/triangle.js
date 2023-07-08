class Triangle {
    constructor() { }
    setColour(shapeColour) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColour}" />`;
    };
};


module.exports = Triangle;