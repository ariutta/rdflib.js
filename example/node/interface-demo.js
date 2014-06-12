var RDFJSInterface = require('rdf_js_interface');

var graph = new RDFJSInterface.Graph();

graph.add(rdf.createTriple( rdf.createBlankNode(),
                            rdf.createNamedNode("rdf:type"),
                            rdf.createNamedNode("http://test.com/MyClass") ));
