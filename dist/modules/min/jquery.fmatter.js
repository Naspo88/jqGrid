!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],function(t){return e(t)}):"object"==typeof module&&module.exports?module.exports=function(t,r){return t||(t=window),void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),require("./grid.base"),e(r),r}:e(jQuery)}(function(e){"use strict";e.jgrid=e.jgrid||{};var t=e.jgrid,r=t.getMethod("getGridRes"),n=e.fn.jqGrid;e.fmatter=e.fmatter||{};var i=e.fmatter,o=function(e,t){var r=e.formatoptions||{};return r.hasOwnProperty(t)?r[t]:(e.editoptions||{})[t]},a=function(e){return String(e).replace(/\'/g,"&#39;")},l=function(e){var r,i,l=e.colModel||e.cm,s=!1!==l.title?" title='"+a(e.colName||l.name)+"'":"",c=function(e){return o(l,e)},u=c("checkedClass"),d=c("uncheckedClass"),f=c("value"),m="string"==typeof f?f.split(":")[0]||"Yes":"Yes",p="string"==typeof f?f.split(":")[1]||"No":"No",h=function(e){return"<i class='"+a(e)+"'"+s+"></i>"},g=c("disabled");return void 0===g&&(g=t.formatter.checkbox.disabled),!0===g&&n.isInCommonIconClass.call(this,"fa")?(r=h(u=u||"fa fa-check-square-o fa-lg"),i=h(d||"fa fa-square-o fa-lg")):!0===g&&n.isInCommonIconClass.call(this,"glyphicon")?(r=h(u=u||"glyphicon glyphicon-check"),i=h(d||"glyphicon glyphicon-unchecked")):(u="",r="<input type='checkbox' checked='checked'"+(s+=!0===g?" disabled='disabled'":"")+" />",i="<input type='checkbox'"+s+" />"),{checkedClasses:u,checked:r,unchecked:i,yes:m,no:p}},s={1:1,x:1,true:1,yes:1,y:1,on:1},c={0:1,false:1,no:1,n:1,off:1};e.extend(!0,t,{formatter:{date:{parseRe:/[#%\\\/:_;.,\t\s\-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO"},reformatAfterEdit:!0,userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0,defaultValue:!1},idName:"id"},cmTemplate:{integerStr:{formatter:"integer",align:"right",sorttype:"integer",searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},integer:{formatter:"integer",align:"right",sorttype:"integer",convertOnSave:function(e){var t=e.newValue;return isNaN(t)?t:parseInt(t,10)},searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},numberStr:{formatter:"number",align:"right",sorttype:"number",searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},number:{formatter:"number",align:"right",sorttype:"number",convertOnSave:function(e){var t=e.newValue;return isNaN(t)?t:parseFloat(t)},searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},booleanCheckbox:{align:"center",formatter:"checkbox",sorttype:"boolean",edittype:"checkbox",editoptions:{value:"true:false",defaultValue:"false"},convertOnSave:function(e){var t=e.newValue,r=l.call(this,e),n=String(t).toLowerCase();return s[n]||n===r.yes.toLowerCase()?t=!0:(c[n]||n===r.no.toLowerCase())&&(t=!1),t},stype:"checkbox",searchoptions:{sopt:["eq"],value:"true:false"}},actions:function(){return{formatter:"actions",width:(null!=this.p&&(n.isInCommonIconClass.call(this,"fa")||n.isInCommonIconClass.call(this,"glyphicon"))?e(this).jqGrid("isBootstrapGuiStyle")?45:39:40)+(t.cellWidth()?5:0),align:"center",label:"",autoResizable:!1,frozen:!0,fixed:!0,hidedlg:!0,resizable:!1,sortable:!1,search:!1,editable:!1,viewable:!1}}}}),t.cmTemplate.booleanCheckboxFa=t.cmTemplate.booleanCheckbox,e.extend(i,{isObject:function(t){return t&&("object"==typeof t||e.isFunction(t))||!1},isNumber:function(e){return"number"==typeof e&&isFinite(e)},isValue:function(e){return this.isObject(e)||"string"==typeof e||this.isNumber(e)||"boolean"==typeof e},isEmpty:function(t){return("string"==typeof t||!this.isValue(t))&&(!this.isValue(t)||""===(t=e.trim(t).replace(/&nbsp;/gi,"").replace(/&#160;/gi,"")))},NumberFormat:function(e,t){var r=i.isNumber;if(r(e)||(e*=1),r(e)){var n,o=e<0,a=String(e),l=t.decimalSeparator||".";if(r(t.decimalPlaces)){var s=t.decimalPlaces,c=Math.pow(10,s);if(a=String(Math.round(e*c)/c),n=a.lastIndexOf("."),s>0)for(n<0?n=(a+=l).length-1:"."!==l&&(a=a.replace(".",l));a.length-1-n<s;)a+="0"}if(t.thousandsSeparator){var u=t.thousandsSeparator;n=(n=a.lastIndexOf(l))>-1?n:a.length;var d,f=void 0===t.decimalSeparator?"":a.substring(n),m=-1;for(d=n;d>0;d--)++m%3==0&&d!==n&&(!o||d>1)&&(f=u+f),f=a.charAt(d-1)+f;a=f}return a}return e}});var u=function(t,n,i,o,a){var l=n;i=e.extend({},r.call(e(this),"formatter"),i);try{l=e.fn.fmatter[t].call(this,n,i,o,a)}catch(e){}return l};e.fn.fmatter=u,u.getCellBuilder=function(t,n,i){var o=null!=e.fn.fmatter[t]?e.fn.fmatter[t].getCellBuilder:null;return e.isFunction(o)?o.call(this,e.extend({},r.call(e(this),"formatter"),n),i):null};var d=u.defaultFormat=function(e,t){return i.isValue(e)&&""!==e?e:t.defaultValue||"&#160;"},f=function(e,t,r){if(void 0===e||i.isEmpty(e)){var n=o(r,"defaultValue");void 0===n&&(n=t.no),e=n}return e=String(e).toLowerCase(),s[e]||e===t.yes.toLowerCase()?t.checked:t.unchecked};u.email=function(e,t){return i.isEmpty(e)?d(e,t):"<a href='mailto:"+a(e)+"'>"+e+"</a>"},(u.checkbox=function(e,t){var r=l.call(this,t);return f(e,r,t.colModel)}).getCellBuilder=function(e){var t,r=e.colModel;return e.colName=e.colName||this.p.colNames[e.pos],t=l.call(this,e),function(e){return f(e,t,r)}},u.checkbox.unformat=function(r,n,i){var o=l.call(this,n),a=e(i);return(o.checkedClasses?t.hasAllClasses(a.children("i"),o.checkedClasses):a.children("input").is(":checked"))?o.yes:o.no},(u.checkboxFontAwesome4=u.checkbox).getCellBuilder=u.checkbox.getCellBuilder,u.checkboxFontAwesome4.unformat=u.checkbox.unformat,u.link=function(t,r){var n=r.colModel,o="",l={target:r.target};return null!=n&&(l=e.extend({},l,n.formatoptions||{})),l.target&&(o="target="+l.target),i.isEmpty(t)?d(t,l):"<a "+o+" href='"+a(t)+"'>"+t+"</a>"},(u.showlink=function(t,r,n){var o,l,s,c=this,u=r.colModel,f={baseLinkUrl:r.baseLinkUrl,showAction:r.showAction,addParam:r.addParam||"",target:r.target,idName:r.idName,hrefDefaultValue:"#"},m="",p=function(i){return e.isFunction(i)?i.call(c,{cellValue:t,rowid:r.rowId,rowData:n,options:f}):i||""};return null!=u&&(f=e.extend({},f,u.formatoptions||{})),f.target&&(m="target="+p(f.target)),o=p(f.baseLinkUrl)+p(f.showAction),l=f.idName?encodeURIComponent(p(f.idName))+"="+encodeURIComponent(p(f.rowId)||r.rowId):"","object"==typeof(s=p(f.addParam))&&null!==s&&(s=(""!==l?"&":"")+e.param(s)),""===(o+=l||s?"?"+l+s:"")&&(o=p(f.hrefDefaultValue)),"string"==typeof t||i.isNumber(t)||e.isFunction(f.cellValue)?"<a "+m+" href='"+a(o)+"'>"+(e.isFunction(f.cellValue)?p(f.cellValue):t)+"</a>":d(t,f)}).getCellBuilder=function(t){var r={baseLinkUrl:t.baseLinkUrl,showAction:t.showAction,addParam:t.addParam||"",target:t.target,idName:t.idName,hrefDefaultValue:"#"},n=t.colModel;return null!=n&&(r=e.extend({},r,n.formatoptions||{})),function(t,n,o){var l,s,c,u=this,f=n.rowId,m="",p=function(n){return e.isFunction(n)?n.call(u,{cellValue:t,rowid:f,rowData:o,options:r}):n||""};return r.target&&(m="target="+p(r.target)),l=p(r.baseLinkUrl)+p(r.showAction),s=r.idName?encodeURIComponent(p(r.idName))+"="+encodeURIComponent(p(f)||n.rowId):"","object"==typeof(c=p(r.addParam))&&null!==c&&(c=(""!==s?"&":"")+e.param(c)),""===(l+=s||c?"?"+s+c:"")&&(l=p(r.hrefDefaultValue)),"string"==typeof t||i.isNumber(t)||e.isFunction(r.cellValue)?"<a "+m+" href='"+a(l)+"'>"+(e.isFunction(r.cellValue)?p(r.cellValue):t)+"</a>":d(t,r)}},u.showlink.pageFinalization=function(t){var r,n,i,o=e(this),a=this.p,l=a.colModel[t],s=this.rows,c=s.length,u=function(r){var n=e(this).closest(".jqgrow");if(n.length>0)return l.formatoptions.onClick.call(o[0],{iCol:t,iRow:n[0].rowIndex,rowid:n.attr("id"),cm:l,cmName:l.name,cellValue:e(this).text(),a:this,event:r})};if(null!=l.formatoptions&&e.isFunction(l.formatoptions.onClick))for(r=0;r<c;r++)n=s[r],e(n).hasClass("jqgrow")&&(i=n.cells[t],l.autoResizable&&null!=i&&e(i.firstChild).hasClass(a.autoResizing.wrapperClassName)&&(i=i.firstChild),null!=i&&e(i.firstChild).on("click",u))};var m=function(e,t){return e=t.prefix?t.prefix+e:e,t.suffix?e+t.suffix:e},p=function(t,r,n){var o=r.colModel,a=e.extend({},r[n]);return null!=o&&(a=e.extend({},a,o.formatoptions||{})),i.isEmpty(t)?m(a.defaultValue,a):m(i.NumberFormat(t,a),a)};u.integer=function(e,t){return p(e,t,"integer")},u.number=function(e,t){return p(e,t,"number")},u.currency=function(e,t){return p(e,t,"currency")};var h=function(t,r){var n=t.colModel,o=e.extend({},t[r]);null!=n&&(o=e.extend({},o,n.formatoptions||{}));var a=i.NumberFormat,l=o.defaultValue?m(o.defaultValue,o):"";return function(e){return i.isEmpty(e)?l:m(a(e,o),o)}};u.integer.getCellBuilder=function(e){return h(e,"integer")},u.number.getCellBuilder=function(e){return h(e,"number")},u.currency.getCellBuilder=function(e){return h(e,"currency")},(u.date=function(r,n,o,a){var l=n.colModel,s=e.extend({},n.date);return null!=l&&(s=e.extend({},s,l.formatoptions||{})),s.reformatAfterEdit||"edit"!==a?i.isEmpty(r)?d(r,s):t.parseDate.call(this,s.srcformat,r,s.newformat,s):d(r,s)}).getCellBuilder=function(r,n){var o=e.extend({},r.date);null!=r.colModel&&(o=e.extend({},o,r.colModel.formatoptions||{}));var a=t.parseDate,l=o.srcformat,s=o.newformat;return o.reformatAfterEdit||"edit"!==n?function(e){return i.isEmpty(e)?d(e,o):a.call(this,l,e,s,o)}:function(e){return d(e,o)}},(u.select=function(t,r){var n,o=[],a=r.colModel,l=e.extend({},a.editoptions||{},a.formatoptions||{}),s="function"==typeof l.value?l.value():l.value,c=l.separator||":",u=l.delimiter||";";if(s){var f,m=!0===l.multiple,p=[],h=function(e,t){if(t>0)return e};if(m&&(p=e.map(String(t).split(","),function(t){return e.trim(t)})),"string"==typeof s){var g,v,b=s.split(u);for(g=0;g<b.length;g++)if((f=b[g].split(c)).length>2&&(f[1]=e.map(f,h).join(c)),v=e.trim(f[0]),l.defaultValue===v&&(n=f[1]),m)e.inArray(v,p)>-1&&o.push(f[1]);else if(v===e.trim(t)){o=[f[1]];break}}else i.isObject(s)&&(n=s[l.defaultValue],o=m?e.map(p,function(e){return s[e]}):[void 0===s[t]?"":s[t]])}return""!==(t=o.join(", "))?t:void 0!==l.defaultValue?n:d(t,l)}).getCellBuilder=function(t){var r,n,o,a,l=t.colModel,s=u.defaultFormat,c=e.extend({},l.editoptions||{},l.formatoptions||{}),d="function"==typeof c.value?c.value():c.value,f=c.separator||":",m=c.delimiter||";",p=void 0!==c.defaultValue,h=!0===c.multiple,g={},v=function(e,t){if(t>0)return e};if("string"==typeof d)for(a=(o=d.split(m)).length-1;a>=0;a--)(n=o[a].split(f)).length>2&&(n[1]=e.map(n,v).join(f)),g[e.trim(n[0])]=n[1];else{if(!i.isObject(d))return function(e){return e?String(e):s(e,c)};g=d}return p&&(r=g[c.defaultValue]),h?function(t){var n,i=[],o=e.map(String(t).split(","),function(t){return e.trim(t)});for(n=0;n<o.length;n++)t=o[n],g.hasOwnProperty(t)&&i.push(g[t]);return""!==(t=i.join(", "))?t:p?r:s(t,c)}:function(e){var t=g[String(e)];return""!==t&&void 0!==t?t:p?r:s(e,c)}},u.rowactions=function(r,n){var i,o,a,l,s=e(this).closest("tr.jqgrow"),c=s.attr("id"),u=e(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),d=e("#"+t.jqID(u)),f=d[0],m=f.p,p=t.getRelativeRect.call(f,s).top,h=m.colModel[t.getCellIndex(this)],g=e.extend(!0,{extraparam:{}},t.actionsNav||{},m.actionsNavOptions||{},h.formatoptions||{});switch(void 0!==m.editOptions&&(g.editOptions=e.extend(!0,g.editOptions||{},m.editOptions)),void 0!==m.delOptions&&(g.delOptions=m.delOptions),s.hasClass("jqgrid-new-row")&&(g.extraparam[m.prmNames.oper]=m.prmNames.addoper),l={keys:g.keys,oneditfunc:g.onEdit,successfunc:g.onSuccess,url:g.url,extraparam:g.extraparam,aftersavefunc:g.afterSave,errorfunc:g.onError,afterrestorefunc:g.afterRestore,restoreAfterError:g.restoreAfterError,mtype:g.mtype},!m.multiselect&&c!==m.selrow||m.multiselect&&e.inArray(c,m.selarrrow)<0?d.jqGrid("setSelection",c,!0,r):t.fullBoolFeedback.call(f,"onSelectRow","jqGridSelectRow",c,!0,r),n){case"edit":d.jqGrid("editRow",c,l);break;case"save":d.jqGrid("saveRow",c,l);break;case"cancel":d.jqGrid("restoreRow",c,g.afterRestore);break;case"del":g.delOptions=g.delOptions||{},void 0===g.delOptions.top&&(g.delOptions.top=p),d.jqGrid("delGridRow",c,g.delOptions);break;case"formedit":g.editOptions=g.editOptions||{},void 0===g.editOptions.top&&(g.editOptions.top=p,g.editOptions.recreateForm=!0),d.jqGrid("editGridRow",c,g.editOptions);break;default:if(null!=g.custom&&g.custom.length>0)for(o=g.custom.length,i=0;i<o;i++)(a=g.custom[i]).action===n&&e.isFunction(a.onClick)&&a.onClick.call(f,{rowid:c,event:r,action:n,options:a})}return r.stopPropagation&&r.stopPropagation(),!1},(u.actions=function(n,o,l,s){var c,u,d,f=o.rowId,m="",p=this.p,h=e(this),g={},v=r.call(h,"edit")||{},b=e.extend({editbutton:!0,delbutton:!0,editformbutton:!1,commonIconClass:"ui-icon",editicon:"ui-icon-pencil",delicon:"ui-icon-trash",saveicon:"ui-icon-disk",cancelicon:"ui-icon-cancel",savetitle:v.bSubmit||"",canceltitle:v.bCancel||""},r.call(h,"nav")||{},t.nav||{},p.navOptions||{},r.call(h,"actionsNav")||{},t.actionsNav||{},p.actionsNavOptions||{},o.colModel.formatoptions||{}),y=h.jqGrid("getGuiStyles","states.hover"),w="onmouseover=\"jQuery(this).addClass('"+y+"');\" onmouseout=\"jQuery(this).removeClass('"+y+"');\"",x=[{action:"edit",actionName:"formedit",display:b.editformbutton},{action:"edit",display:!b.editformbutton&&b.editbutton},{action:"del",idPrefix:"Delete",display:b.delbutton},{action:"save",display:b.editformbutton||b.editbutton,hidden:!0},{action:"cancel",display:b.editformbutton||b.editbutton,hidden:!0}],C=function(e){var r=e.action,n=e.actionName||r,i=void 0!==e.idPrefix?e.idPrefix:r.charAt(0).toUpperCase()+r.substring(1);return"<div title='"+a(b[r+"title"])+(e.hidden?"' style='display:none;":"")+"' class='"+a(h.jqGrid("getGuiStyles","actionsButton","ui-pg-div ui-inline-"+r))+"' "+(null!==i?"id='j"+a(i+"Button_"+f):"")+"' onclick=\"return jQuery.fn.fmatter.rowactions.call(this,event,'"+n+"');\" "+(e.noHovering?"":w)+"><span class='"+a(function(e){return t.mergeCssClasses(b.commonIconClass,b[e+"icon"])}(r))+"'></span></div>"},k=null!=b.custom?b.custom.length-1:-1;if(void 0===f||i.isEmpty(f))return"";if(e.isFunction(b.isDisplayButtons))try{g=b.isDisplayButtons.call(this,o,l,s)||{}}catch(e){}for(;k>=0;)x["first"===(u=b.custom[k--]).position?"unshift":"push"](u);for(c=0,k=x.length;c<k;c++)!1!==(d=e.extend({},x[c],g[x[c].action]||{})).display&&(m+=C(d));return"<div class='"+a(h.jqGrid("getGuiStyles","actionsDiv","ui-jqgrid-actions"))+"'>"+m+"</div>"}).pageFinalization=function(t){var r=e(this),n=this.p,i=n.colModel,o=i[t],a=function(a,l){var s,c,u,d=0,f=i.length;for(u=0;u<f&&!0===i[u].frozen;u++)d=u;null!=(s=r.jqGrid("getGridRowById",l))&&null!=s.cells&&(t=n.iColByName[o.name],c=e(s.cells[t]).children(".ui-jqgrid-actions"),o.frozen&&n.frozenColumns&&t<=d&&(c=c.add(e(r[0].grid.fbRows[s.rowIndex].cells[t]).children(".ui-jqgrid-actions"))),a?(c.find(">.ui-inline-edit,>.ui-inline-del").show(),c.find(">.ui-inline-save,>.ui-inline-cancel").hide()):(c.find(">.ui-inline-edit,>.ui-inline-del").hide(),c.find(">.ui-inline-save,>.ui-inline-cancel").show()))},l=function(e,t){return a(!0,t),!1},s=function(e,t){return a(!1,t),!1};null!=o.formatoptions&&o.formatoptions.editformbutton||(r.off("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter",l),r.on("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter",l),r.off("jqGridInlineEditRow.jqGridFormatter",s),r.on("jqGridInlineEditRow.jqGridFormatter",s))},e.unformat=function(n,i,o,a){var l,s=i.colModel,c=s.formatter,d=this.p,f=s.formatoptions||{},m=s.unformat||u[c]&&u[c].unformat;if(n instanceof jQuery&&n.length>0&&(n=n[0]),d.treeGrid&&null!=n&&e(n.firstChild).hasClass("tree-wrap")&&(e(n.lastChild).hasClass("cell-wrapper")||e(n.lastChild).hasClass("cell-wrapperleaf"))&&(n=n.lastChild),s.autoResizable&&null!=n&&e(n.firstChild).hasClass(d.autoResizing.wrapperClassName)&&(n=n.firstChild),void 0!==m&&e.isFunction(m))l=m.call(this,e(n).text(),i,n);else if(void 0!==c&&"string"==typeof c){var p=e(this),h=function(e,t){return void 0!==f[t]?f[t]:r.call(p,"formatter."+e+"."+t)},g=function(e,t){var r=h(e,"thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return t.replace(new RegExp(r,"g"),"")};switch(c){case"integer":l=g("integer",e(n).text());break;case"number":l=g("number",e(n).text()).replace(h("number","decimalSeparator"),".");break;case"currency":l=e(n).text();var v=h("currency","prefix"),b=h("currency","suffix");v&&v.length&&(l=l.substr(v.length)),b&&b.length&&(l=l.substr(0,l.length-b.length)),l=g("number",l).replace(h("number","decimalSeparator"),".");break;case"checkbox":l=u.checkbox.unformat(n,i,n);break;case"select":l=e.unformat.select(n,i,o,a);break;case"actions":return"";default:l=e(n).text()}}return l=void 0!==l?l:!0===a?e(n).text():t.htmlDecode(e(n).html())},e.unformat.select=function(t,r,n,o){var a=[],l=e(t).text(),s=r.colModel;if(!0===o)return l;var c=e.extend({},s.editoptions||{},s.formatoptions||{}),u=void 0===c.separator?":":c.separator,d=void 0===c.delimiter?";":c.delimiter;if(c.value){var f,m="function"==typeof c.value?c.value():c.value,p=!0===c.multiple,h=[],g=function(e,t){if(t>0)return e};if(p&&(h=l.split(","),h=e.map(h,function(t){return e.trim(t)})),"string"==typeof m){var v,b=m.split(d),y=0;for(v=0;v<b.length;v++)if((f=b[v].split(u)).length>2&&(f[1]=e.map(f,g).join(u)),p)e.inArray(e.trim(f[1]),h)>-1&&(a[y]=f[0],y++);else if(e.trim(f[1])===e.trim(l)){a[0]=f[0];break}}else(i.isObject(m)||e.isArray(m))&&(p||(h[0]=l),a=e.map(h,function(t){var r;if(e.each(m,function(e,n){if(n===t)return r=e,!1}),void 0!==r)return r}));return a.join(", ")}return l||""},e.unformat.date=function(n,o){var a=e.extend(!0,{},r.call(e(this),"formatter.date"),t.formatter.date||{},o.formatoptions||{});return i.isEmpty(n)?"":t.parseDate.call(this,a.newformat,n,a.srcformat,a)}});
//# sourceMappingURL=jquery.fmatter.js.map