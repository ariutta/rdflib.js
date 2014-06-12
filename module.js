// specify whether in browser or Node.js
if (typeof(window) !== 'undefined') {
  $rdf.env = 'browser';
} else if (typeof(process) !== 'undefined') {
  $rdf.env = 'node';
}

// Handle node, amd, and global systems
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = $rdf;
  }
  exports.$rdf = $rdf;
} else {
  if (typeof define === 'function' && define.amd) {
    define('rdflib', function() {
      return $rdf;
    });
  }

  // Leak a global regardless of module system
  root['$rdf'] = $rdf;
}
