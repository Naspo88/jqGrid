!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],function(i){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=function(t,i){return t||(t=window),void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),require("./grid.base"),e(i,t)}:e(jQuery,t)}("undefined"!=typeof window?window:this,function(t,e){"use strict";return e.tableToGrid=function(e,i){t(e).each(function(){var e,n,d,r,h,o,s,l,u=t(this),c=[],a=[],f=[],p=[],m=[];if(!this.grid){for(u.width("99%"),e=u.width(),n=t("tr td:first-child input[type=checkbox]:first",u),d=t("tr td:first-child input[type=radio]:first",u),h=!(r=n.length>0)&&d.length>0,o=r||h,t("th",u).each(function(){0===c.length&&o?(c.push({name:"__selection__",index:"__selection__",width:0,hidden:!0}),a.push("__selection__")):(c.push({name:t(this).attr("id")||t.trim(t.jgrid.stripHtml(t(this).html())).split(" ").join("_"),index:t(this).attr("id")||t.trim(t.jgrid.stripHtml(t(this).html())).split(" ").join("_"),width:t(this).width()||150}),a.push(t(this).html()))}),t("tbody > tr",u).each(function(){var e={},i=0;t("td",t(this)).each(function(){if(0===i&&o){var n=t("input",t(this)),d=n.attr("value");p.push(d||f.length),n.is(":checked")&&m.push(d),e[c[i].name]=n.attr("value")}else e[c[i].name]=t(this).html();i++}),i>0&&f.push(e)}),u.empty(),u.jqGrid(t.extend({datatype:"local",width:e,colNames:a,colModel:c,multiselect:r},i||{})),s=0;s<f.length;s++)l=null,p.length>0&&(l=p[s])&&l.replace&&(l=encodeURIComponent(l).replace(/[.\-%]/g,"_")),null===l&&(l=t.jgrid.randId()),u.jqGrid("addRowData",l,f[s]);for(s=0;s<m.length;s++)u.jqGrid("setSelection",m[s])}})},e.tableToGrid});
//# sourceMappingURL=grid.tbltogrid.js.map