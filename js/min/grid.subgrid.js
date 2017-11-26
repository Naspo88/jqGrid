!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],i):"object"==typeof module&&module.exports?module.exports=function(s,t){return s||(s=window),void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(s)),require("./grid.base"),i(t),t}:i(jQuery)}(function(i){"use strict";var s=i.jgrid,t=s.jqID,e=i.fn.jqGrid,r=function(){var t=i.makeArray(arguments);return t[0]="subGrid"+t[0].charAt(0).toUpperCase()+t[0].substring(1),t.unshift(""),t.unshift(""),t.unshift(this.p),s.feedback.apply(this,t)},n=function(s,t){return this.each(function(){if(this.grid&&null!=s&&!0===this.p.subGrid){var e=i(this).jqGrid("getInd",s,!0);i(e).find(">td."+t).trigger("click")}})};s.extend({setSubGrid:function(){return this.each(function(){var t,e=this.p,r=i(this),n=e.subGridModel[0],l=function(i){return r.jqGrid("getIconRes",i)};if(e.subGridOptions=i.extend({commonIconClass:l("subgrid.common"),plusicon:l("subgrid.plus"),minusicon:l("subgrid.minus"),openicon:l("rtl"===e.direction?"subgrid.openRtl":"subgrid.openLtr"),expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0},e.subGridOptions||{}),e.colNames.unshift(""),e.colModel.unshift({name:"subgrid",width:s.cell_width?e.subGridWidth+e.cellLayout:e.subGridWidth,labelClasses:"jqgh_subgrid",sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0,frozen:!0}),n)for(n.align=i.extend([],n.align||[]),t=0;t<n.name.length;t++)n.align[t]=n.align[t]||"left"})},addSubGridCell:function(t,r,n,l){var a=this[0],d=a.p.subGridOptions,o=!i.isFunction(d.hasSubgrid)||d.hasSubgrid.call(a,{rowid:n,iRow:r,iCol:t,data:l});return null==a.p?"":"<td role='gridcell' class='"+e.getGuiStyles.call(this,"subgrid.tdStart",o?"ui-sgcollapsed sgcollapsed":"")+"' "+a.formatCol(t,r)+">"+(o?"<div class='"+e.getGuiStyles.call(this,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+e.getGuiStyles.call(this,"subgrid.button","sgbutton")+"'><span class='"+s.mergeCssClasses(d.commonIconClass,d.plusicon)+"'></span></a></div>":"&nbsp;")+"</td>"},addSubGrid:function(n,l){return this.each(function(){var a,d,o,u=this,c=u.p,g=c.subGridModel[0],p=function(i,s){return e.getGuiStyles.call(u,"subgrid."+i,s||"")},b=p("thSubgrid","ui-th-subgrid ui-th-column ui-th-"+c.direction),h=p("rowSubTable","ui-subtblcell"),f=p("row","ui-subgrid ui-row-"+c.direction),m=p("tdWithIcon","subgrid-cell"),G=p("tdData","subgrid-data"),y=function(s,t,e){var r=g.align[e],n=i("<td"+(r?" style='text-align:"+r+";'":"")+"></td>").html(t);s.append(n)},x=function(s,t){var e=c.xmlReader.subgrid;i(e.root+" "+e.row,s).each(function(){var s,r,n=i("<tr class='"+h+"'></tr>");if(!0===e.repeatitems)i(e.cell,this).each(function(s){y(n,i(this).text()||"&#160;",s)});else if(s=g.mapping||g.name)for(r=0;r<s.length;r++)y(n,i(s[r],this).text()||"&#160;",r);t.append(n)})},v=function(t,e){var r,n,l,a,d,o=c.jsonReader.subgrid,u=s.getAccessor(t,o.root);if(null!=u)for(n=0;n<u.length;n++){if(d=u[n],r=i("<tr class='"+h+"'></tr>"),!0===o.repeatitems)for(o.cell&&(d=d[o.cell]),l=0;l<d.length;l++)y(r,d[l]||"&#160;",l);else if((a=g.mapping||g.name).length)for(l=0;l<a.length;l++)y(r,d[a[l]]||"&#160;",l);e.append(r)}},w=function(s,e,r){var n,l,a=p("legacyTable","ui-jqgrid-legacy-subgrid"+(!0===c.altRows&&i(u).jqGrid("isBootstrapGuiStyle")?" table-striped":"")),d=i("<table"+(a?" style='width:1px' role='presentation' class='"+a+"'":"")+"><thead></thead><tbody></tbody></table>"),o=i("<tr></tr>");for(u.grid.endReq.call(u),l=0;l<g.name.length;l++)n=i("<th class='"+b+"'></th>").html(g.name[l]).width(g.width[l]),o.append(n);return o.appendTo(d[0].tHead),r(s,i(d[0].tBodies[0])),i("#"+t(c.id+"_"+e)).append(d),!1},S=function(){var t,l=i(this).parent("tr")[0],a=l.nextSibling,d=l.id,o=c.id+"_"+d,p=function(i){return s.mergeCssClasses(c.subGridOptions.commonIconClass,c.subGridOptions[i])},b=1;if(i.each(c.colModel,function(){!0!==this.hidden&&"rn"!==this.name&&"cb"!==this.name||b++}),i(this).hasClass("sgcollapsed")){if(!0===c.subGridOptions.reloadOnExpand||!1===c.subGridOptions.reloadOnExpand&&!i(a).hasClass("ui-subgrid")){if(t=n>=1?"<td colspan='"+n+"'>&#160;</td>":"",!r.call(u,"beforeExpand",o,d))return;i(l).after("<tr role='row' class='"+f+"'>"+t+"<td class='"+m+"'><span class='"+p("openicon")+"'></span></td><td colspan='"+parseInt(c.colNames.length-b,10)+"' class='"+G+"'><div id='"+o+"' class='tablediv'></div></td></tr>"),i(u).triggerHandler("jqGridSubGridRowExpanded",[o,d]),i.isFunction(c.subGridRowExpanded)?c.subGridRowExpanded.call(u,o,d):function(t){var e,r,n=i(t).attr("id"),l={nd_:(new Date).getTime()};if(l[c.prmNames.subgridid]=n,!g)return!1;if(g.params)for(r=0;r<g.params.length;r++)void 0!==(e=c.iColByName[g.params[r]])&&(l[c.colModel[e].name]=i(t.cells[e]).text().replace(/\&#160\;/gi,""));if(!u.grid.hDiv.loading)switch(u.grid.beginReq.call(u),c.subgridtype||(c.subgridtype=c.datatype),i.isFunction(c.subgridtype)?c.subgridtype.call(u,l):c.subgridtype=c.subgridtype.toLowerCase(),c.subgridtype){case"xml":case"json":i.ajax(i.extend({type:c.mtype,url:i.isFunction(c.subGridUrl)?c.subGridUrl.call(u,l):c.subGridUrl,dataType:c.subgridtype,context:n,data:s.serializeFeedback.call(u,c.serializeSubGridData,"jqGridSerializeSubGridData",l),success:function(i){w(i,this,"xml"===c.subgridtype?x:v)},error:function(s,t,e){var r=void 0===c.loadSubgridError?c.loadError:c.loadSubgridError;u.grid.endReq.call(u),i.isFunction(r)&&r.call(u,s,t,e),c.subGridOptions.noEmptySubgridOnError||w(null,this,"xml"===c.subgridtype?x:v)}},s.ajaxOptions,c.ajaxSubgridOptions||{}))}}(l)}else i(a).show();i(this).html("<div class='"+e.getGuiStyles.call(u,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+e.getGuiStyles.call(u,"subgrid.button","sgbutton")+"'><span class='"+p("minusicon")+"'></span></a></div>").removeClass("sgcollapsed").addClass("sgexpanded"),c.subGridOptions.selectOnExpand&&i(u).jqGrid("setSelection",d)}else if(i(this).hasClass("sgexpanded")){if(!r.call(u,"beforeCollapse",o,d))return;!0===c.subGridOptions.reloadOnExpand?i(a).remove(".ui-subgrid"):i(a).hasClass("ui-subgrid")&&i(a).hide(),i(this).html("<div class='"+e.getGuiStyles.call(u,"subgrid.buttonDiv","sgbutton-div")+"'><a role='button' class='"+e.getGuiStyles.call(u,"subgrid.button","sgbutton")+"'><span class='"+p("plusicon")+"'></span></a></div>").removeClass("sgexpanded").addClass("sgcollapsed"),c.subGridOptions.selectOnCollapse&&i(u).jqGrid("setSelection",d)}return!1},C=1;if(u.grid){for(a=u.rows.length,void 0!==l&&l>0&&(C=l,a=l+1);C<a;)d=u.rows[C],i(d).hasClass("jqgrow")&&(o=i(d.cells[n])).hasClass("ui-sgcollapsed")&&(c.scroll&&o.off("click"),o.on("click",S)),C++;!0===c.subGridOptions.expandOnLoad&&i(u.rows).filter(".jqgrow").each(function(s,t){i(t.cells[0]).click()}),u.subGridXml=function(i,s){return w(i,s,x)},u.subGridJson=function(i,s){return w(i,s,v)}}})},expandSubGridRow:function(i){return n.call(this,i,"sgcollapsed")},collapseSubGridRow:function(i){return n.call(this,i,"sgexpanded")},toggleSubGridRow:function(i){return n.call(this,i,"ui-sgcollapsed")}})});
//# sourceMappingURL=grid.subgrid.js.map