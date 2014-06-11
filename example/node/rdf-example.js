/* Demo application for Addressbook 
 */
// Some From http://brondsema.net/blog/index.php/2006/11/25/javascript_rdfparser_from_tabulator

// use the line below if not actually in the repo
//var $rdf = require('rdflib');
// using this line because you can't npm install rdflib into it's own repo
var $rdf = require('../../dist/rdflib.js');

// For quick access to those namespaces:
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
var RDF = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
var RDFS = $rdf.Namespace('http://www.w3.org/2000/01/rdf-schema#');
var OWL = $rdf.Namespace('http://www.w3.org/2002/07/owl#');
var DC = $rdf.Namespace('http://purl.org/dc/elements/1.1/');
var RSS = $rdf.Namespace('http://purl.org/rss/1.0/');
var XSD = $rdf.Namespace('http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/#dt-');
var CONTACT = $rdf.Namespace('http://www.w3.org/2000/10/swap/pim/contact#');



// TestStore implementation from dig.csail.mit.edu/2005/ajar/ajaw/test/rdf/rdfparser.test.html
// RDFIndexedFormula from dig.csail.mit.edu/2005/ajar/ajaw/rdf/identity.js
//  (extends RDFFormula from dig.csail.mit.edu/2005/ajar/ajaw/rdf/term.js which has no indexing and smushing)
// for the real implementation used by Tabulator which uses indexing and smushing

var kb = $rdf.graph();
var uri = 'http://bblfish.net/people/henry/card.rdf';
var person = $rdf.sym(uri);

var docURI;
if (uri.indexOf('#') > -1) {
  docURI = uri.slice(0, uri.indexOf('#'));
} else {
  docURI = uri;
}

var fetch = $rdf.fetcher(kb);
fetch.nowOrWhenFetched(docURI,undefined,function(ok, body){ // @@ check ok
  console.log(ok);
  console.log(body);
});

