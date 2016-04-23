(function(c){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){var m=c.jgrid,F=m.fullBoolFeedback,C=m.hasOneFromClasses,L=c.fn.jqGrid,G=function(c){return L.getGuiStyles.call(this,"states."+c)},H=function(d){var l=c.makeArray(arguments).slice(1);l.unshift("");l.unshift("Inline");l.unshift(d);return m.feedback.apply(this,l)};m.inlineEdit=m.inlineEdit||{};m.extend({editRow:function(d,
l,e,g,b,p,t,u,h,a){var f={},k=c.makeArray(arguments).slice(1);"object"===c.type(k[0])?f=k[0]:(void 0!==l&&(f.keys=l),c.isFunction(e)&&(f.oneditfunc=e),c.isFunction(g)&&(f.successfunc=g),void 0!==b&&(f.url=b),null!=p&&(f.extraparam=p),c.isFunction(t)&&(f.aftersavefunc=t),c.isFunction(u)&&(f.errorfunc=u),c.isFunction(h)&&(f.afterrestorefunc=h),c.isFunction(a)&&(f.beforeEditRow=a));return this.each(function(){var a=this,b=c(a),q=a.p,g=0,p=null,l={},e=q.colModel,h=q.prmNames;if(a.grid){var r=c.extend(!0,
{keys:!1,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,beforeEditRow:null,mtype:"POST",focusField:!0},m.inlineEdit,q.inlineEditing||{},f),k=b.jqGrid("getInd",d,!0),t=r.focusField,u="object"===typeof t&&null!=t?c(t.target||t).closest("tr.jqgrow>td")[0]:null;if(!1!==k&&(r.extraparam[h.oper]===h.addoper||H.call(a,r,"beforeEditRow",r,d))&&"0"===(c(k).attr("editable")||"0")&&!c(k).hasClass("not-editable-row")){h=m.detectRowEditing.call(a,
d);if(null!=h&&"cellEditing"===h.mode){var h=h.savedRow,E=a.rows[h.id],A=G.call(a,"select");b.jqGrid("restoreCell",h.id,h.ic);c(E.cells[h.ic]).removeClass("edit-cell "+A);c(E).addClass(A).attr({"aria-selected":"true",tabindex:"0"})}m.enumEditableCells.call(a,k,c(k).hasClass("jqgrid-new-row")?"add":"edit",function(b){var f=b.cm,h=c(b.dataElement),e=b.dataWidth,w,k=f.name,t=f.edittype,r=b.iCol,u=f.editoptions||{};if("hidden"!==b.editable){try{w=c.unformat.call(this,b.td,{rowId:d,colModel:f},r)}catch(v){w=
"textarea"===t?h.text():h.html()}l[k]=w;h.html("");f=c.extend({},u,{id:d+"_"+k,name:k,rowId:d,mode:b.mode,cm:f,iCol:r});if("&nbsp;"===w||"&#160;"===w||1===w.length&&160===w.charCodeAt(0))w="";w=m.createEl.call(a,t,f,w,!0,c.extend({},m.ajaxOptions,q.ajaxSelectOptions||{}));c(w).addClass("editable");h.append(w);e&&c(w).width(b.dataWidth);m.bindEv.call(a,w,f);"select"===t&&!0===u.multiple&&void 0===u.dataUrl&&m.msie&&c(w).width(c(w).width());null===p&&(p=r);g++}});0<g&&(l.id=d,q.savedRow.push(l),c(k).attr("editable",
"1"),t&&("number"===typeof t&&parseInt(t,10)<=e.length?p=t:"string"===typeof t?p=q.iColByName[t]:null!=u&&(p=u.cellIndex),setTimeout(function(){var d=b.jqGrid("getNumberOfFrozenColumns"),f=function(c){return q.frozenColumns&&0<d&&p<d?a.grid.fbRows[k.rowIndex].cells[c]:k.cells[c]},h=function(a){return c(a).find("input,textarea,select,button,object,*[tabindex]").filter(":input:visible:not(:disabled)")},g=function(){return h(q.frozenColumns&&0<d?a.grid.fbRows[k.rowIndex]:k).first()},e=h(f(p));0<e.length?
e.first().focus():"number"===typeof r.defaultFocusField||"string"===typeof r.defaultFocusField?(e=h(f("number"===typeof r.defaultFocusField?r.defaultFocusField:q.iColByName[r.defaultFocusField])),0===e.length&&(e=g()),e.first().focus()):g().focus()},0)),!0===r.keys&&(e=c(k),q.frozenColumns&&(e=e.add(a.grid.fbRows[k.rowIndex])),e.bind("keydown",function(a){if(27===a.keyCode)return b.jqGrid("restoreRow",d,r.afterrestorefunc),!1;if(13===a.keyCode){if("TEXTAREA"===a.target.tagName)return!0;b.jqGrid("saveRow",
d,r);return!1}})),F.call(a,r.oneditfunc,"jqGridInlineEditRow",d,r))}}})},saveRow:function(d,l,e,g,b,p,t,u){var h=c.makeArray(arguments).slice(1),a={},f=this[0],k=c(f),n=null!=f?f.p:null,J=m.info_dialog;if(f.grid&&null!=n){"object"===c.type(h[0])?a=h[0]:(c.isFunction(l)&&(a.successfunc=l),void 0!==e&&(a.url=e),void 0!==g&&(a.extraparam=g),c.isFunction(b)&&(a.aftersavefunc=b),c.isFunction(p)&&(a.errorfunc=p),c.isFunction(t)&&(a.afterrestorefunc=t),c.isFunction(u)&&(a.beforeSaveRow=u));var h=function(a){return k.jqGrid("getGridRes",
a)},a=c.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,beforeSaveRow:null,ajaxSaveOptions:{},serializeSaveData:null,mtype:"POST",saveui:"enable",savetext:h("defaults.savetext")||"Saving..."},m.inlineEdit,n.inlineEditing||{},a),q={},I={},y={},z,D,v,r;v=k.jqGrid("getInd",d,!0);var B=c(v);z=n.prmNames;var C=h("errors.errcap"),K=h("edit.bClose"),E;if(!1!==v&&(h=a.extraparam[z.oper]===z.addoper?"add":"edit",H.call(f,a,"beforeSaveRow",
a,d,h)&&(z=B.attr("editable"),a.url=a.url||n.editurl,E="clientArray"!==a.url,"1"===z)))if(m.enumEditableCells.call(f,v,B.hasClass("jqgrid-new-row")?"add":"edit",function(a){var b=a.cm,n=b.formatter,h=b.editoptions||{},e=b.formatoptions||{},g={},p=(c.jgrid.detectRowEditing.call(f,d)||{}).savedRow,k=m.getEditedValue.call(f,c(a.dataElement),b,g,a.editable);"select"===b.edittype&&"select"!==b.formatter&&(I[b.name]=g.text);r=m.checkValues.call(f,k,a.iCol,void 0,void 0,c.extend(a,{oldValue:null!=p?p[b.name]:
null,newValue:k,oldRowData:p}));if(null!=r&&!1===r[0])return!1;"date"===n&&!0!==e.sendFormatted&&(k=c.unformat.date.call(f,k,b));E&&!0===h.NullIfEmpty&&""===k&&(k="null");q[b.name]=k}),null!=r&&!1===r[0])try{var A=k.jqGrid("getGridRowById",d),x=m.findPos(A);J.call(f,C,r[1],K,{left:x[0],top:x[1]+c(A).outerHeight()})}catch(M){alert(r[1])}else if(A=d,z=n.prmNames,x=!1===n.keyName?z.id:n.keyName,q&&(q[z.oper]=z.editoper,void 0===q[x]||""===q[x]?q[x]=d:v.id!==n.idPrefix+q[x]&&(v=m.stripPref(n.idPrefix,
d),void 0!==n._index[v]&&(n._index[q[x]]=n._index[v],delete n._index[v]),d=n.idPrefix+q[x],B.attr("id",d),n.selrow===A&&(n.selrow=d),c.isArray(n.selarrrow)&&(v=c.inArray(A,n.selarrrow),0<=v&&(n.selarrrow[v]=d)),n.multiselect&&(v="jqg_"+n.id+"_"+d,B.find("input.cbox").attr("id",v).attr("name",v))),q=c.extend({},q,n.inlineData||{},a.extraparam)),E)k.jqGrid("progressBar",{method:"show",loadtype:a.saveui,htmlcontent:a.savetext}),y=c.extend({},q,y),y[x]=m.stripPref(n.idPrefix,y[x]),n.autoEncodeOnEdit&&
c.each(y,function(a,b){c.isFunction(b)||(y[a]=m.oldEncodePostedData(b))}),c.ajax(c.extend({url:c.isFunction(a.url)?a.url.call(f,y[x],h,y,a):a.url,data:m.serializeFeedback.call(f,c.isFunction(a.serializeSaveData)?a.serializeSaveData:n.serializeRowData,"jqGridInlineSerializeSaveData",y),type:c.isFunction(a.mtype)?a.mtype.call(f,h,a,y[x],y):a.mtype,complete:function(b,h){k.jqGrid("progressBar",{method:"hide",loadtype:a.saveui,htmlcontent:a.savetext});if((300>b.status||304===b.status)&&(0!==b.status||
4!==b.readyState)){var e,g;g=k.triggerHandler("jqGridInlineSuccessSaveRow",[b,d,a]);if(null==g||!0===g)g=[!0,q];g[0]&&c.isFunction(a.successfunc)&&(g=a.successfunc.call(f,b));c.isArray(g)?(e=g[0],q=g[1]||q):e=g;if(!0===e){n.autoEncodeOnEdit&&c.each(q,function(a,b){q[a]=m.oldDecodePostedData(b)});q=c.extend({},q,I);k.jqGrid("setRowData",d,q);B.attr("editable","0");for(e=0;e<n.savedRow.length;e++)if(String(n.savedRow[e].id)===String(d)){D=e;break}0<=D&&n.savedRow.splice(D,1);F.call(f,a.aftersavefunc,
"jqGridInlineAfterSaveRow",d,b,q,a);B.removeClass("jqgrid-new-row").unbind("keydown")}else F.call(f,a.errorfunc,"jqGridInlineErrorSaveRow",d,b,h,null,a),!0===a.restoreAfterError&&k.jqGrid("restoreRow",d,a.afterrestorefunc)}},error:function(b,g,e){c("#lui_"+m.jqID(n.id)).hide();k.triggerHandler("jqGridInlineErrorSaveRow",[d,b,g,e,a]);if(c.isFunction(a.errorfunc))a.errorfunc.call(f,d,b,g,e);else{b=b.responseText||b.statusText;try{J.call(f,C,'<div class="'+G.call(f,"error")+'">'+b+"</div>",K,{buttonalign:"right"})}catch(h){alert(b)}}!0===
a.restoreAfterError&&k.jqGrid("restoreRow",d,a.afterrestorefunc)}},m.ajaxOptions,n.ajaxRowOptions,a.ajaxSaveOptions||{}));else{q=c.extend({},q,I);v=k.jqGrid("setRowData",d,q);B.attr("editable","0");for(h=0;h<n.savedRow.length;h++)if(String(n.savedRow[h].id)===String(A)){D=h;break}0<=D&&n.savedRow.splice(D,1);F.call(f,a.aftersavefunc,"jqGridInlineAfterSaveRow",d,v,q,a);B.removeClass("jqgrid-new-row").unbind("keydown")}}},restoreRow:function(d,l){var e=c.makeArray(arguments).slice(1),g={};"object"===
c.type(e[0])?g=e[0]:c.isFunction(l)&&(g.afterrestorefunc=l);return this.each(function(){var b=this,e=c(b),l=b.p,u=-1,h={},a;if(b.grid){var f=c.extend(!0,{},m.inlineEdit,l.inlineEditing||{},g),k=e.jqGrid("getInd",d,!0);if(!1!==k&&H.call(b,f,"beforeCancelRow",f,d)){for(a=0;a<l.savedRow.length;a++)if(String(l.savedRow[a].id)===String(d)){u=a;break}if(0<=u){if(c.isFunction(c.fn.datepicker))try{c("input.hasDatepicker","#"+m.jqID(k.id)).datepicker("hide")}catch(n){}c.each(l.colModel,function(){var a=this.name;
l.savedRow[u].hasOwnProperty(a)&&(h[a]=l.savedRow[u][a],!this.formatter||"date"!==this.formatter||null!=this.formatoptions&&!0===this.formatoptions.sendFormatted||(h[a]=c.unformat.date.call(b,h[a],this)))});e.jqGrid("setRowData",d,h);c(k).attr("editable","0").unbind("keydown");l.savedRow.splice(u,1);c("#"+m.jqID(d),b).hasClass("jqgrid-new-row")&&setTimeout(function(){e.jqGrid("delRowData",d);e.jqGrid("showAddEditButtons",!1)},0)}F.call(b,f.afterrestorefunc,"jqGridInlineAfterRestoreRow",d)}}})},addRow:function(d){return this.each(function(){if(this.grid){var l=
this,e=c(l),g=l.p,b=c.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,beforeAddRow:null,addRowParams:{extraparam:{}}},m.inlineEdit,g.inlineEditing||{},d||{});H.call(l,b,"beforeAddRow",b.addRowParams)&&(b.rowID=c.isFunction(b.rowID)?b.rowID.call(l,b):null!=b.rowID?b.rowID:m.randId(),!0===b.useDefValues&&c(g.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var d=this.editoptions.defaultValue;b.initdata[this.name]=c.isFunction(d)?d.call(l):
d}}),b.rowID=g.idPrefix+b.rowID,e.jqGrid("addRowData",b.rowID,b.initdata,b.position),c("#"+m.jqID(b.rowID),l).addClass("jqgrid-new-row"),b.useFormatter?c("#"+m.jqID(b.rowID)+" .ui-inline-edit",l).click():(g=g.prmNames,b.addRowParams.extraparam[g.oper]=g.addoper,e.jqGrid("editRow",b.rowID,b.addRowParams),e.jqGrid("setSelection",b.rowID)))}})},inlineNav:function(d,l){"object"===typeof d&&(l=d,d=void 0);return this.each(function(){var e=this,g=c(e),b=e.p;if(this.grid&&null!=b){var p,t=d===b.toppager?
b.idSel+"_top":b.idSel,u=d===b.toppager?b.id+"_top":b.id,h=G.call(e,"disabled"),a=c.extend(!0,{edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",save:!0,saveicon:"ui-icon-disk",cancel:!0,cancelicon:"ui-icon-cancel",commonIconClass:"ui-icon",iconsOverText:!1,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},g.jqGrid("getGridRes","nav"),m.nav||{},b.navOptions||{},m.inlineNav||{},b.inlineNavOptions||{},l||{});if(void 0===d)if(b.pager)if(g.jqGrid("inlineNav",
b.pager,a),b.toppager)d=b.toppager,t=b.idSel+"_top",u=b.id+"_top";else return;else b.toppager&&(d=b.toppager,t=b.idSel+"_top",u=b.id+"_top");if(void 0!==d&&(p=c(d),!(0>=p.length))){0>=p.find(".navtable").length&&g.jqGrid("navGrid",d,{add:!1,edit:!1,del:!1,search:!1,refresh:!1,view:!1});b._inlinenav=!0;if(!0===a.addParams.useFormatter){p=b.colModel;var f,k;for(f=0;f<p.length;f++)if(p[f].formatter&&"actions"===p[f].formatter){p[f].formatoptions&&(k={keys:!1,onEdit:null,onSuccess:null,afterSave:null,
onError:null,afterRestore:null,extraparam:{},url:null},p=c.extend(k,p[f].formatoptions),a.addParams.addRowParams={keys:p.keys,oneditfunc:p.onEdit,successfunc:p.onSuccess,url:p.url,extraparam:p.extraparam,aftersavefunc:p.afterSave,errorfunc:p.onError,afterrestorefunc:p.afterRestore});break}}a.add&&g.jqGrid("navButtonAdd",d,{caption:a.addtext,title:a.addtitle,commonIconClass:a.commonIconClass,buttonicon:a.addicon,iconsOverText:a.iconsOverText,id:u+"_iladd",onClickButton:function(){C(this,h)||g.jqGrid("addRow",
a.addParams)}});a.edit&&g.jqGrid("navButtonAdd",d,{caption:a.edittext,title:a.edittitle,commonIconClass:a.commonIconClass,buttonicon:a.editicon,iconsOverText:a.iconsOverText,id:u+"_iledit",onClickButton:function(){if(!C(this,h)){var c=b.selrow;c?g.jqGrid("editRow",c,a.editParams):e.modalAlert()}}});a.save&&(g.jqGrid("navButtonAdd",d,{caption:a.savetext,title:a.savetitle,commonIconClass:a.commonIconClass,buttonicon:a.saveicon,iconsOverText:a.iconsOverText,id:u+"_ilsave",onClickButton:function(){if(!C(this,
h)){var d=b.savedRow[0].id;if(d){var f=b.prmNames,k=f.oper,l=a.editParams;c("#"+m.jqID(d),e).hasClass("jqgrid-new-row")?(a.addParams.addRowParams.extraparam[k]=f.addoper,l=a.addParams.addRowParams):(a.editParams.extraparam||(a.editParams.extraparam={}),a.editParams.extraparam[k]=f.editoper);g.jqGrid("saveRow",d,l)}else e.modalAlert()}}}),c(t+"_ilsave").addClass(h));a.cancel&&(g.jqGrid("navButtonAdd",d,{caption:a.canceltext,title:a.canceltitle,commonIconClass:a.commonIconClass,buttonicon:a.cancelicon,
iconsOverText:a.iconsOverText,id:u+"_ilcancel",onClickButton:function(){if(!C(this,h)){var d=b.savedRow[0].id,f=a.editParams;d?(c("#"+m.jqID(d),e).hasClass("jqgrid-new-row")&&(f=a.addParams.addRowParams),g.jqGrid("restoreRow",d,f)):e.modalAlert()}}}),c(t+"_ilcancel").addClass(h));!0===a.restoreAfterSelect&&g.bind("jqGridSelectRow",function(c,d){if(0<b.savedRow.length&&!0===b._inlinenav){var e=b.savedRow[0].id;d!==e&&"number"!==typeof e&&g.jqGrid("restoreRow",e,a.editParams)}});g.bind("jqGridInlineAfterRestoreRow jqGridInlineAfterSaveRow",
function(){g.jqGrid("showAddEditButtons",!1)});g.bind("jqGridInlineEditRow",function(a,b){g.jqGrid("showAddEditButtons",!0,b)})}}})},showAddEditButtons:function(d){return this.each(function(){if(this.grid){var l=this.p,e=l.idSel,g=G.call(this,"disabled"),b=e+"_ilsave,"+e+"_ilcancel"+(l.toppager?","+e+"_top_ilsave,"+e+"_top_ilcancel":""),l=e+"_iladd,"+e+"_iledit"+(l.toppager?","+e+"_top_iladd,"+e+"_top_iledit":"");c(d?l:b).addClass(g);c(d?b:l).removeClass(g)}})}})});
//# sourceMappingURL=grid.inlinedit.map