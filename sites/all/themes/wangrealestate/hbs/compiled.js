(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['estate-item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return ", "
    + container.escapeExpression(((helper = (helper = helpers.listPrice || (depth0 != null ? depth0.listPrice : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"listPrice","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"front-item\">\n  <div class=\"front-wrapper\">\n    <div class=\"front-img-container\">\n      <a class=\"img-link-wrapper\" href=\""
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">\n        <img class=\"front-img\" src=\"http://placekitten.com/g/88/88\">\n      </a>\n    </div>\n    <div class=\"front-info-container\">\n      <a class=\"front-title-wrapper\" href=\""
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">\n        <span class=\"front-title\">\n          "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n        </span>\n      </a>\n      <span class=\"front-address\">\n        "
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + "\n      </span>\n      <span class=\"front-info\">\n        "
    + alias4(((helper = (helper = helpers.beds || (depth0 != null ? depth0.beds : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"beds","hash":{},"data":data}) : helper)))
    + " beds, "
    + alias4(((helper = (helper = helpers.baths || (depth0 != null ? depth0.baths : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baths","hash":{},"data":data}) : helper)))
    + " baths, "
    + alias4(((helper = (helper = helpers.sqFt || (depth0 != null ? depth0.sqFt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sqFt","hash":{},"data":data}) : helper)))
    + " sqft"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.listPrice : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      </span>\n    </div>\n  </div>\n</li>\n";
},"useData":true});
})();