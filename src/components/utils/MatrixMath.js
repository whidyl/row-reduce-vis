import { Vector3 } from 'three'
 
function vecMag(x, y, z) {
    const mag = (Math.sqrt(x*x + y*y + z*z))
    console.log(mag)
    return mag
}

export function getPlanePointsForRow(matrix, row){
    const xCoeff = matrix[row][0];
    const yCoeff = matrix[row][1];
    const zCoeff = matrix[row][2];
    const constant = matrix[row][3];

    function pointAtXY(x, y) {
        return new Vector3(x, (constant -x*xCoeff -y*yCoeff)/zCoeff , y)
    }

    function pointAtZY(z, y) {
        return new Vector3((constant - z*zCoeff -  y*yCoeff)/xCoeff, z , y)
    }

    function pointAtXZ(x, z) {
        return new Vector3(x, z, (constant - z*zCoeff -  x*xCoeff)/yCoeff)
    }

    const xScale = 15
    const yScale = 15

    var botLeft  = pointAtXY(-xScale, -yScale);
    var topLeft  = pointAtXY(-xScale, yScale);
    var botRight = pointAtXY( xScale, -yScale);
    var topRight = pointAtXY( xScale, yScale);


    if (zCoeff < 1 && yCoeff < 1 && xCoeff >= 0.9) {
         botLeft  = pointAtZY(-xScale, -yScale);
         topLeft  = pointAtZY(-xScale,  yScale);
         botRight = pointAtZY( xScale, -yScale);
         topRight = pointAtZY( xScale,  yScale);
    } 

    if (xCoeff < 1 && zCoeff < 1 && yCoeff >= 0.9) {
        botLeft  = pointAtXZ(-xScale, -yScale);
        topLeft  = pointAtXZ(-xScale,  yScale);
        botRight = pointAtXZ( xScale, -yScale);
        topRight = pointAtXZ( xScale,  yScale);
   } 
    
    

    // const botLeft  = new Vector3(-10, 5, -10);
    // const topLeft  = new Vector3(-10, 0, 10);
    // const botRight = new Vector3(10, 0, -10);
    // const topRight = new Vector3(10, -5, 10);

    return [botLeft, topLeft, botRight, topLeft, botRight, topRight]
}

export default vecMag;