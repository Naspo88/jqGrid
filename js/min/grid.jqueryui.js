!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","free-jqgrid-plugins/ui.multiselect","jquery-ui/dialog","jquery-ui/draggable","jquery-ui/droppable","jquery-ui/resizable","jquery-ui/sortable"],function(i){return t(i,e,e.document)}):"object"==typeof module&&module.exports?module.exports=function(e,i){return e||(e=window),void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./grid.base"),require("free-jqgrid-plugins/ui.multiselect"),require("jquery-ui/dialog"),require("jquery-ui/draggable"),require("jquery-ui/droppable"),require("jquery-ui/resizable"),require("jquery-ui/sortable"),t(i,e,e.document),i}:t(jQuery,e,e.document)}("undefined"!=typeof window?window:this,function(e,t,i){"use strict";var o=e.jgrid,r=o.jqID,n=null!=e.ui?e.ui.multiselect:null,a=function(t){if(null!=this.grid&&null!=this.grid.p){var i,o,r,n,a,d=this,l=this.grid.p,s=this.gh,u=this.selectedList,c=this.inGroup,p=u.find("li"),h=p.length-1,g=function(t,i,o){var r,n,a=u.find("li");for(void 0===i&&(i=o?a.length-1:0),r=i;o?r>=0:r<a.length;o?r--:r++)if((n=e(a[r]).data("optionLink"))&&t.call(a[r],parseInt(n.val(),10),r))return r},f=function(){(o=e.inArray(l.colModel[t].name,d.newColOrder))>=0&&d.newColOrder.splice(o,1),p=u.find("li"),i=0,g(function(o,r){if(o===t){for(h=r;i>=0&&i<l.colModel.length&&i!==t&&(l.colModel[i].hidden||l.colModel[i].hidedlg)&&(null==c||c[i]===c[t]);)i++;return d.newColOrder.splice(i,0,l.colModel[t].name),!0}(i=e.inArray(l.colModel[o].name,d.newColOrder,i))<0&&(i=e.inArray(l.colModel[o].name,d.newColOrder)),i++})},m=function(i){if(c[i]===c[t])return e(this).after(p[h]),f(),!0},b=function(i){if(c[i]===c[t])return e(this).before(p[h]),f(),!0},v=function(e){if(c[e]===c[t]&&void 0!==c[e])return s[c[e]].startColumnName=l.colModel[e].name,!0};if(f(),s&&void 0!==s[c[t]]){for(n=s[c[t]],o=0;o<n.numberOfColumns;o++)if(i=l.iColByName[n.startColumnName]+o,!l.colModel[i].hidden&&!l.colModel[i].hidedlg){g(m,h-1,!0),g(b,h+1),g(v);break}}else if(s){if(p=u.find("li"),(o=g(function(e){if(e===t)return!0}))+1>=p.length||o<0)return;if((a=e(p[o+1]).data("optionLink"))&&void 0!==(r=c[parseInt(a.val(),10)])&&(a=e(p[o-1]).data("optionLink"))&&c[parseInt(a.val(),10)]===r){var y=g(function(e){if(c[e]!==r)return!0},o+1);e(p[void 0===y||y>=p.length?p.length-1:y-1]).after(p[h]),f()}}}};if(o.msie&&8===o.msiever()&&(e.expr[":"].hidden=function(e){return 0===e.offsetWidth||0===e.offsetHeight||"none"===e.style.display}),o._multiselect=!1,n){if(n.prototype._setSelected){var d=n.prototype._setSelected;n.prototype._setSelected=function(t,i){var o=d.call(this,t,i),r=this.element,n=parseInt(t.data("optionLink").val(),10);return i&&this.selectedList&&(a.call(this,n),this.selectedList.find("li").each(function(){e(this).data("optionLink")&&e(this).data("optionLink").remove().appendTo(r)})),o}}n.prototype.destroy&&(n.prototype.destroy=function(){this.element.show(),this.container.remove(),void 0===e.Widget?e.widget.prototype.destroy.apply(this,arguments):e.Widget.prototype.destroy.apply(this,arguments)}),o._multiselect=!0}o.extend({sortableColumns:function(t){return this.each(function(){function o(){a.disableClick=!0}var n=this,a=n.p,d=r(a.id);if(a&&a.sortable&&e.isFunction(e.fn.sortable)){var l={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)",placeholder:{element:function(t){return e(i.createElement(t[0].nodeName)).addClass(t[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},update:function(e,t){t.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),t.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}},start:function(){n.grid.hDiv.scrollLeft=n.grid.bDiv.scrollLeft},update:function(t,i){var o=e(">th",e(i.item).parent()),r=a.id+"_",d=[];o.each(function(){var t=e(">div",this).get(0).id.replace(/^jqgh_/,"").replace(r,""),i=a.iColByName[t];void 0!==i&&d.push(i)}),e(n).jqGrid("remapColumns",d,!0,!0),e.isFunction(a.sortable.update)&&a.sortable.update(d),setTimeout(function(){a.disableClick=!1},50)}};if(a.sortable.options?e.extend(l,a.sortable.options):e.isFunction(a.sortable)&&(a.sortable={update:a.sortable}),l.start){var s=l.start;l.start=function(e,t){o(),s.call(this,e,t)}}else l.start=o;a.sortable.exclude&&(l.items+=":not("+a.sortable.exclude+")");var u=t.sortable(l),c=u.data("sortable")||u.data("uiSortable")||u.data("ui-sortable");null!=c&&(c.floating=!0)}})},columnChooser:function(i){function d(t,i){t&&("string"==typeof t?e.fn[t]&&e.fn[t].apply(i,e.makeArray(arguments).slice(2)):e.isFunction(t)&&t.apply(i,e.makeArray(arguments).slice(2)))}var l,s,u,c,p,h,g,f=this,m=f[0],b=m.p,v=b.colModel,y=v.length,w=b.colNames,_=function(e){return n&&n.prototype&&e.data(n.prototype.widgetFullName||n.prototype.widgetName)||e.data("ui-multiselect")||e.data("multiselect")};if(!e("#colchooser_"+r(b.id)).length){if(l=e('<div id="colchooser_'+b.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),s=e("select",l),i=e.extend({width:400,height:240,classname:null,done:function(e){e&&f.jqGrid("remapColumns",e,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(t){var i={};return i[t.bSubmit]=function(){t.apply_perm(),t.cleanup(!1)},i[t.bCancel]=function(){t.cleanup(!0)},e.extend(!0,{buttons:i,close:function(){t.cleanup(!0)},modal:t.modal||!1,resizable:t.resizable||!0,width:t.width+70,resize:function(){var e=_(s),t=e.container.closest(".ui-dialog-content");t.length>0&&"object"==typeof t[0].style?t[0].style.width="":t.css("width",""),e.selectedList.height(Math.max(e.selectedContainer.height()-e.selectedActions.outerHeight()-1,1)),e.availableList.height(Math.max(e.availableContainer.height()-e.availableActions.outerHeight()-1,1))}},t.dialog_opts||{})},apply_perm:function(){var t,o,r=new Array(b.colModel.length),n={notSkipFrozen:void 0!==i.notSkipFrozen&&i.notSkipFrozen,skipSetGridWidth:!0,skipSetGroupHeaders:!0};for(t=0;t<b.colModel.length;t++)r[t]=b.iColByName[h.newColOrder[t]];if(e("option",s).each(function(){e(this).is(":selected")?f.jqGrid("showCol",v[this.value].name,n):f.jqGrid("hideCol",v[this.value].name,n)}),i.done&&i.done.call(f,r),b.groupHeader&&("object"==typeof b.groupHeader||e.isFunction(b.groupHeader)))if(f.jqGrid("destroyGroupHeader",!1),b.groupHeader.groupHeaders=h.gh,null!=b.pivotOptions&&null!=b.pivotOptions.colHeaders&&b.pivotOptions.colHeaders.length>1)for(o=b.pivotOptions.colHeaders,t=0;t<o.length;t++)o[t]&&o[t].groupHeaders.length&&f.jqGrid("setGroupHeaders",o[t]);else f.jqGrid("setGroupHeaders",b.groupHeader);var a=b.autowidth||void 0!==b.widthOrg&&"auto"!==b.widthOrg&&"100%"!==b.widthOrg?b.width:b.tblwidth;a!==b.width&&f.jqGrid("setGridWidth",a,b.shrinkToFit)},cleanup:function(e){d(i.dlog,l,"destroy"),d(i.msel,s,"destroy"),l.remove(),e&&i.done&&i.done.call(f)},msel_opts:{}},f.jqGrid("getGridRes","col"),o.col,i||{}),e.ui&&n&&n.defaults){if(!o._multiselect)return void(null!=o.defaults&&e.isFunction(o.defaults.fatalError)?o.defaults.fatalError:alert)("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");i.msel_opts=e.extend(n.defaults,i.msel_opts)}i.caption&&l.attr("title",i.caption),i.classname&&(l.addClass(i.classname),s.addClass(i.classname)),i.width&&(e(">div",l).css({width:i.width,margin:"0 auto"}),s.css("width",i.width)),i.height&&(e(">div",l).css("height",i.height),s.css("height",i.height-10)),s.empty();var j,q,x,C,G=null!=b.groupHeader?b.groupHeader.groupHeaders:0,F={};if(G)for(j=0;j<G.length;j++)for(C=G[j],q=0;q<C.numberOfColumns;q++)x=b.iColByName[C.startColumnName]+q,F[x]=e.isFunction(i.buildItemText)?i.buildItemText.call(f[0],{iCol:x,cm:v[x],cmName:v[x].name,colName:w[x],groupTitleText:C.titleText}):e.jgrid.stripHtml(C.titleText)+": "+e.jgrid.stripHtml(""===w[x]?v[x].name:w[x]);for(x=0;x<y;x++)void 0===F[x]&&(F[x]=e.isFunction(i.buildItemText)?i.buildItemText.call(f[0],{iCol:x,cm:v[x],cmName:v[x].name,colName:w[x],groupTitleText:null}):e.jgrid.stripHtml(w[x]));if(e.each(v,function(e){this.hidedlg||s.append("<option value='"+e+"'"+(b.headertitles||this.headerTitle?" title='"+o.stripHtml("string"==typeof this.headerTitle?this.headerTitle:F[e])+"'":"")+(this.hidden?"":" selected='selected'")+">"+F[e]+"</option>")}),u=e.isFunction(i.dlog_opts)?i.dlog_opts.call(f,i):i.dlog_opts,d(i.dlog,l,u),c=e.isFunction(i.msel_opts)?i.msel_opts.call(f,i):i.msel_opts,d(i.msel,s,c),(p=e("#colchooser_"+r(b.id))).css({margin:"auto"}),p.find(">div").css({width:"100%",height:"100%",margin:"auto"}),h=_(s)){if(h.grid=m,G){h.gh=e.extend(!0,[],G),h.inGroup=new Array(b.colModel.length);var z,H;for(z=0;z<G.length;z++)for(H=G[z],x=0;x<H.numberOfColumns;x++)h.inGroup[b.iColByName[H.startColumnName]+x]=z}h.newColOrder=e.map(v,function(e){return e.name}),h.container.css({width:"100%",height:"100%",margin:"auto"}),h.selectedContainer.css({width:100*h.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),h.availableContainer.css({width:100-100*h.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),h.selectedList.css("height","auto"),h.availableList.css("height","auto"),g=Math.max(h.selectedList.height(),h.availableList.height()),g=Math.min(g,e(t).height()),h.selectedList.css("height",g),h.availableList.css("height",g),null!=h.options&&h.options.sortable&&h.selectedList.on("sortupdate",function(t,o){a.call(h,parseInt(o.item.data("optionLink").val(),10)),o.item.css({width:"",height:""}),e.isFunction(i.sortUpdate)&&i.sortUpdate.call(m,t,o)}),e.isFunction(i.init)&&i.init.call(m,h)}}},sortableRows:function(t){return this.each(function(){var i=this,o=i.grid,r=i.p;o&&(r.treeGrid||e.fn.sortable&&((t=e.extend({cursor:"move",axis:"y",items:">tbody>.jqgrow"},t||{})).start&&e.isFunction(t.start)?(t._start_=t.start,delete t.start):t._start_=!1,t.update&&e.isFunction(t.update)?(t._update_=t.update,delete t.update):t._update_=!1,t.start=function(n,a){if(e(a.item).css("border-width","0"),e("td",a.item).each(function(e){this.style.width=o.cols[e].style.width}),r.subGrid){var d=e(a.item).attr("id");try{e(i).jqGrid("collapseSubGridRow",d)}catch(e){}}t._start_&&t._start_.apply(this,[n,a])},t.update=function(o,n){e(n.item).css("border-width",""),!0===r.rownumbers&&e("td.jqgrid-rownum",i.rows).each(function(t){e(this).html(t+1+(parseInt(r.page,10)-1)*parseInt(r.rowNum,10))}),t._update_&&t._update_.apply(this,[o,n])},e(i).sortable(t)))})},gridDnD:function(t){return this.each(function(){function i(){var t=e.data(a,"dnd");e("tr.jqgrow:not(.ui-draggable)",a).draggable(e.isFunction(t.drag)?t.drag.call(e(a),t):t.drag)}var o,n,a=this;if(a.grid&&!a.p.treeGrid&&e.fn.draggable&&e.fn.droppable){if(void 0===e("#jqgrid_dnd")[0]&&e("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>"),"string"!=typeof t||"updateDnD"!==t||!0!==a.p.jqgdnd){if((t=e.extend({drag:function(t){return e.extend({start:function(i,o){var r,n;if(a.p.subGrid){n=e(o.helper).attr("id");try{e(a).jqGrid("collapseSubGridRow",n)}catch(e){}}for(r=0;r<e.data(a,"dnd").connectWith.length;r++)0===e(e.data(a,"dnd").connectWith[r]).jqGrid("getGridParam","reccount")&&e(e.data(a,"dnd").connectWith[r]).jqGrid("addRowData","jqg_empty_row",{});o.helper.addClass("ui-state-highlight"),e("td",o.helper).each(function(e){this.style.width=a.grid.headers[e].width+"px"}),t.onstart&&e.isFunction(t.onstart)&&t.onstart.call(e(a),i,o)},stop:function(i,o){var r,n;for(o.helper.dropped&&!t.dragcopy&&(void 0===(n=e(o.helper).attr("id"))&&(n=e(this).attr("id")),e(a).jqGrid("delRowData",n)),r=0;r<e.data(a,"dnd").connectWith.length;r++)e(e.data(a,"dnd").connectWith[r]).jqGrid("delRowData","jqg_empty_row");t.onstop&&e.isFunction(t.onstop)&&t.onstop.call(e(a),i,o)}},t.drag_opts||{})},drop:function(t){return e.extend({accept:function(t){if(!e(t).hasClass("jqgrow"))return t;var i=e(t).closest("table.ui-jqgrid-btable");if(i.length>0&&void 0!==e.data(i[0],"dnd")){var o=e.data(i[0],"dnd").connectWith;return-1!==e.inArray("#"+r(this.id),o)}return!1},drop:function(i,o){if(e(o.draggable).hasClass("jqgrow")){var n=e(o.draggable).attr("id"),d=o.draggable.parent().parent().jqGrid("getRowData",n);if(!t.dropbyname){var l,s,u=0,c={},p=e("#"+r(this.id)).jqGrid("getGridParam","colModel");try{for(s in d)d.hasOwnProperty(s)&&("cb"!==(l=p[u].name)&&"rn"!==l&&"subgrid"!==l&&d.hasOwnProperty(s)&&p[u]&&(c[l]=d[s]),u++);d=c}catch(e){}}if(o.helper.dropped=!0,t.beforedrop&&e.isFunction(t.beforedrop)){var h=t.beforedrop.call(this,i,o,d,e("#"+r(a.p.id)),e(this));void 0!==h&&null!==h&&"object"==typeof h&&(d=h)}if(o.helper.dropped){var g;t.autoid&&(e.isFunction(t.autoid)?g=t.autoid.call(this,d):(g=Math.ceil(1e3*Math.random()),g=t.autoidprefix+g)),e("#"+r(this.id)).jqGrid("addRowData",g,d,t.droppos),d[a.p.localReader.id]=g}t.ondrop&&e.isFunction(t.ondrop)&&t.ondrop.call(this,i,o,d)}}},t.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},t||{})).connectWith)for(t.connectWith=t.connectWith.split(","),t.connectWith=e.map(t.connectWith,function(t){return e.trim(t)}),e.data(a,"dnd",t),0===a.p.reccount||a.p.jqgdnd||i(),a.p.jqgdnd=!0,o=0;o<t.connectWith.length;o++)n=t.connectWith[o],e(n).droppable(e.isFunction(t.drop)?t.drop.call(e(a),t):t.drop)}else i()}})},gridResize:function(t){return this.each(function(){var i,o=this,r=o.grid,n=o.p,a=n.gView+">.ui-jqgrid-bdiv",d=!1,l=n.height;if(r&&e.fn.resizable){if((t=e.extend({},t||{})).alsoResize?(t._alsoResize_=t.alsoResize,delete t.alsoResize):t._alsoResize_=!1,t.stop&&e.isFunction(t.stop)?(t._stop_=t.stop,delete t.stop):t._stop_=!1,t.stop=function(s,u){e(o).jqGrid("setGridWidth",u.size.width,t.shrinkToFit),e(n.gView+">.ui-jqgrid-titlebar").css("width",""),d?(e(i).each(function(){e(this).css("height","")}),"auto"!==l&&"100%"!==l||e(r.bDiv).css("height",l)):e(o).jqGrid("setGridParam",{height:e(a).height()}),o.fixScrollOffsetAndhBoxPadding&&o.fixScrollOffsetAndhBoxPadding(),t._stop_&&t._stop_.call(o,s,u)},i=a,"auto"!==l&&"100%"!==l||void 0!==t.handles||(t.handles="e,w"),t.handles){var s=e.map(String(t.handles).split(","),function(t){return e.trim(t)});2===s.length&&("e"===s[0]&&"w"===s[1]||"e"===s[1]&&"w"===s[1])&&(i=n.gView+">div:not(.frozen-div)",d=!0,n.pager&&(i+=","+n.pager))}t._alsoResize_?t.alsoResize=i+","+t._alsoResize_:t.alsoResize=i,delete t._alsoResize_,e(n.gBox).resizable(t)}})}})});
//# sourceMappingURL=grid.jqueryui.js.map