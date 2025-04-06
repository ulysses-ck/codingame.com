/*
You are a famous architect that creates special houses composed of only squared rooms.

When a rich client wants to build a new house, he knows exactly the size of the house he wants to build, and needs you to identify the size of all rooms that he can have.
He always wants the biggest possible rooms. for example, he prefers having one room of size 4x4 (16m²) instead of 4 rooms of size 2x2 (4m²x4).

*/

/*
Input
16

Output
4

*/

// solution
// get gcd(greatest common divisor) for input
// ascending sorting
// get the power by 2 until the number be equal or less than the input
function solution(area: number) {
    function gcd(num: number): Array<number> {
        let nums: Array<number> = [];

        for(let i = 1; i <= num; i++) {
            if (num % i === 0) {
                nums.push(num)
            }
        }

        return nums
    }
    
    const gcdNums = gcd(area);

    
}
