/**
 * Set force v0 flag according to URL params
 */
(function() {
    'use strict';

    var flagMatcher = /juicy-composition-(.+)/;

    // Flags. Convert url arguments to flags
    var flags = {};
    location.search.slice(1).split('&').forEach(function(option) {
        var parts = option.split('=');
        var match;
        if (parts[0] && (match = parts[0].match(flagMatcher))) {
            flags[match[1]] = parts[1] || true;
        }
    });

    // exports
    window['JuicyComposition'] = flags;
})();
