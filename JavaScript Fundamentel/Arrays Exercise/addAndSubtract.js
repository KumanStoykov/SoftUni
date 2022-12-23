function addAndSubtract(nums) {

    let newNums = [];
    let oldArr = 0;
    let newArr = 0;

    for (let index = 0; index < nums.length; index++) {

        oldArr += nums[index];

        if (nums[index]% 2 === 0) {
            newNums.push(nums[index] + index);
            newArr += nums[index]+ index;
        } else {
            newNums.push(nums[index] - index);
            newArr += nums[index] - index;
        }
    }

    console.log(newNums);
    console.log(oldArr);
    console.log(newArr);
}
addAndSubtract([5, 15, 23, 56, 35]);