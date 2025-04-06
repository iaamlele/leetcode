function isCovered(cntS, cntT) {
    for(let i = 'A'.charCodeAt(0); i < 'Z'.charCodeAt(0); i++) {
        if(cntS[i] < cntT[i]) {
            return false;
        }
    }
    for(let i = 'a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++) {
        if(cntS[i] < cntT[i]) {
            return false;
        }
    }
    return true;
}

const minWindow = function(s, t) {
    const len = s.length;
    let ansLeft = -1, ansRight = len;
    const cntS = Array(128).fill(0);
    const cntT = Array(128).fill(0);
    for(const c of t) {
        cntT[c.codePointAt(0)]++;
    }

    let left = 0;
    for(let right = 0; right < len; right++) {
        cntS[s[right].codePointAt(0)]++;
        while(isCovered(cntS, cntT)) {
            if(right - left < ansRight - ansLeft) {
                ansLeft = left;
                ansRight = right;
            }
            cntS[s[left].codePointAt(0)]--;
            left++;
        }
    }
    return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
}
console.log(minWindow("ADOBECODEBANC", "ABC"));
