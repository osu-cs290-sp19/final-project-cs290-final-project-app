(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"todo-item\">\r\n    <div class=\"todo-icon\">\r\n        <i class='!!!'></i>\r\n    </div>\r\n    <div class=\"todo-content\">\r\n        <p class=\"todo-title\">\r\n            "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"todo-date\">\r\n            Do by: \r\n            <a href=\"#\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</a>\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-success\">Done!</button>\r\n        <button type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n    </div>\r\n </article>";
},"useData":true});
})();