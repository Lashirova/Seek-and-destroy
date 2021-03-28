function destroyer(arr) {
   var args = Array.prototype.slice.call(arguments, 1);

    function des(abc){
        return args.indexOf(abc) === -1;
    }
    return arr.filter(des);
}
var result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

destroyer([1, 2, 3, 1, 2, 3], 2, 3);