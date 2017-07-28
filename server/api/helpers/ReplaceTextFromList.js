module.exports = function(list,target) {
    list.forEach(function(item) {
        var searchString = new RegExp(item, 'g');
        target = target.replace(searchString, 'XXXX');
    });
    return target;
}