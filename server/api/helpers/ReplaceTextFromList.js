module.exports = function(list,target) {
    list.forEach(function(item) {
        target = target.replace(item, 'XXXX');
    });
    return target;
}