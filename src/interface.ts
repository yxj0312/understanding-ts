// Excess Property Checks
// Notice the given argument to createSquare is spelled colour instead of color. 
// In plain JavaScript, this sort of thing fails silently.  
// You could argue that this program is correctly typed, 
// since the width properties are compatible, there’s no color property present, 
// and the extra colour property is insignificant.  
// However, TypeScript takes the stance that there’s probably a bug in this code. 
// Object literals get special treatment and undergo excess property checking when assigning them to other variables, 
//or passing them as arguments. If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "red", width: 100 });

