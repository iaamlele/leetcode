/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 逻辑分析错了, 没必要用数组， 数字即可， 可优化
var lemonadeChange = function (bills) {
    let pocket = [];
    const search_delete = function (pocket, m) {
        for (let i = 0; i < pocket.length; i++) {
            if (pocket[i] === m) {
                pocket[i] = 0;
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            pocket.push(5);
        } else if (bills[i] === 10) {
            if (search_delete(pocket, 5)) pocket.push(10);
            else return false;
        } else if (bills[i] === 20) {
            if (search_delete(pocket, 10)) {
                if (!search_delete(pocket, 5)) return false;
            } else {
                let i = 3;
                while (i--) {
                    if (!search_delete(pocket, 5)) return false;
                }
            }
        }
    }
    return true;
};


console.log(lemonadeChange([5, 5, 5, 10, 20]));