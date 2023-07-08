class Circle {
    constructor() { }
    setColour(shapeColour) {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColour}" />`;
    };
};


module.exports = Circle;