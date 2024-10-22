/**
 * @param {number[]} heights
 * @return {number}
 */
//单调栈
var largestRectangleArea = function(heights) {
	let maxArea = 0;
	const stack = [0];
	heights.push(0);
	const n = heights.length;

	for (let i = 1; i < n; i++) {
		let top = stack.at(-1);
        // 情况三
		if (heights[top] < heights[i]) {
			stack.push(i);
		}
        // 情况二
		if (heights[top] === heights[i]) {
			stack.pop(); // 这个可以加，可以不加，效果一样，思路不同
			stack.push(i);
		}
        // 情况一
		if (heights[top] > heights[i]) {
			while (stack.length > 0 && heights[top] > heights[i]) {
                // 栈顶元素出栈，并保存栈顶bar的索引
				const h = heights[stack.pop()];
				const left = stack.at(-1) ?? -1;
				const w = i - left - 1;
                // 计算面积，并取最大面积
				maxArea = Math.max(maxArea, w * h);
				top = stack.at(-1);
			}
			stack.push(i);
		}
	}
	return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));