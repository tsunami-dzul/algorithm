/*
    You're playing Battleship on a grid of cells with RR rows and CC columns. There are 0 or more battleships on the grid, 
    each occupying a single distinct cell. The cell in the ith row from the top and jth column from the left either contains 
    a battleship (Gij = 1 or doesn't (Gij = 0)
​
    You're going to fire a single shot at a random cell in the grid. You'll choose this cell uniformly at random from the 
    R*C possible cells. You're interested in the probability that the cell hit by your shot contains a battleship.
    
    Your task is to implement the function getHitProbability(R, C, G) which returns this probability.
    
    Note: Your return value must have an absolute or relative error of at most 10^{-6} to be considered correct.

    Constraints
    1 ≤ R, C ≤ 100
    0 ≤ Gij
​   
    Sample test case #1
    R = 2
    C = 3
    G = 0 0 1
        1 0 1

    Expected Return Value = 0.50000000

    Sample test case #2
    R = 2
    C = 2
    G = 1 1
        1 1

    Expected Return Value = 1.00000000

    Sample Explanation
    In the first case, 33 of the 66 cells in the grid contain battleships. Therefore, the probability that your shot will hit one of them is 3 / 6 = 0.53/6=0.5.
    In the second case, all 44 cells contain battleships, resulting in a probability of 1.01.0 of hitting a battleship.
*/

const getHitProbability = (R, C, G) => {
    const cells = R * C;
    let battleship = 0;

    for(let r of G) {
        for(let c of r) {
            if(c === 1) {
                battleship++;
            }
        }
    }

    return battleship / cells;
}

const R = 2;
const C = 2;
G = [[1,1], [1,1]];

const resp = getHitProbability(R, C, G);

console.log(resp);