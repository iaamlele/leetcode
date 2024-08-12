/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let head = 0;
    let tail = s.length - 1;
    while(head < tail) {
        let tmp = s[head];
        s[head] = s[tail];
        s[tail] = tmp;
        head++;
        tail--;
    };
    console.log(s);
};

reverseString(["h","e","l","l","o"]);