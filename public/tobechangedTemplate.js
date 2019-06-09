(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<nav class=\"navbar navbar-light bg-light justify-content-between\">\n  <a class=\"navbar-brand\">TaskBook</a>\n  <form class=\"form-inline\">\n  <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n  <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n  </form>\n</nav>\n\n";
},"useData":true});
})();