(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n  <h1 class=\"site-title\">Header h1</h1>\n</header>\n\n<nav class=\"navbar\">\n  <ul class=\"navlist\">\n    <li class=\"navitem\"><a href=\"/\">A</a></li>\n    <li class=\"navitem\"><a href=\"/\">B</a></li>\n    <li class=\"navitem\"><a href=\"/\">C</a></li>\n  </ul>\n</nav>\n";
},"useData":true});
})();