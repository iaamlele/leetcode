var groupAnagrams = function(strs) {
    const hashTable = new Map()
    strs.forEach(element => {
        let elem_arr = element.split("")
        elem_arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        
        let elem_join = elem_arr.join('')

        if(hashTable.has(elem_join)) hashTable.get(elem_join).push(element)
        else hashTable.set(elem_join, [element])
    });
    const output = []
    for(const [key, value] of hashTable) {
        output.push(value)
    }
    return output
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))