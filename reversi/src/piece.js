/**
 * Initializes the Piece with its color.
 */
const lightPiece = 'white';
const darkPiece = 'black';
function Piece (color) {
    this.color = color;

}
/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    
    if (this.color === darkPiece) { 
        return lightPiece;
    } else {
        return darkPiece;
    }
    // return (this.color === darkPiece) ? lightPiece : Piece
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.color = this.oppColor();
};

/**
 * Returns a string representation of the piece
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === lightPiece) {
        return 'W';
    } else {
        return 'B';
    }
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE