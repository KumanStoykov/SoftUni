function decreasingSubsequence(nums) {

    let newArr = [];
    let bigNum = 0;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element >= bigNum) {
            bigNum = element;
            newArr.push(element);
        }
        

    }

    console.log(newArr.join(" "));
}
decreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// decreasingSubsequence([ 20, 3, 2, 15, 6, 1]);