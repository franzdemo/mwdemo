module.exports = function(text) {
    // trim whitepace and parse/split into three result categories based on single quoted, double quoted or not quoted
    var split_filters = new RegExp(''
        + /(?!\s*$)/.source
        + /\s*/.source
        + /(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\])*))\s*/.source
        + /(?:,|\s|$)/.source
        , 'g'
    );

    var result = [];
    text.replace(split_filters,
        function(discard, singleQuoted, doubleQuoted, notQuoted) {
            var segment = '';
            // unescape single quoted values
            if      (singleQuoted !== undefined)
                segment = singleQuoted.replace(/\\'/g, "'");
            // unescape double quoted values
            else if (doubleQuoted !== undefined)
                segment = doubleQuoted.replace(/\\"/g, '"');
            // use non-quoted values as-is
            else if (notQuoted !== undefined)
                segment = notQuoted;
            result.push(segment);
        });
    if (/,\s*$/.test(text)) // handle empty last value
        result.push('');
    return result;
};