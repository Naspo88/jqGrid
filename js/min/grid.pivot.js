!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fmatter","./grid.grouping"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return t||(t=window),void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),require("./jquery.fmatter"),require("./grid.grouping"),e(r),r}:e(jQuery)}(function(e){"use strict";function t(e,r,o){if(!(this instanceof t))return new t(e);this.aggregator=e,this.finilized=!1,this.context=r,this.pivotOptions=o}function r(t,r,o,i,s){var n,a,u=i.length,l=function(e,t){var r=e,o=t;if(null==r&&(r=""),null==o&&(o=""),r=String(r),o=String(o),this.caseSensitive||(r=r.toUpperCase(),o=o.toUpperCase()),r===o){if(e===t)return 0;if(void 0===e)return-1;if(void 0===t)return 1;if(null===e)return-1;if(null===t)return 1}return r<o?-1:1},f=function(e,t){return e=Number(e),t=Number(t),e===t?0:e<t?-1:1},g=function(e,t){return e=Math.floor(Number(e)),t=Math.floor(Number(t)),e===t?0:e<t?-1:1};for(this.items=[],this.indexesOfSourceData=[],this.trimByCollect=t,this.caseSensitive=r,this.skipSort=o,this.fieldLength=u,this.fieldNames=new Array(u),this.fieldSortDirection=new Array(u),this.fieldCompare=new Array(u),n=0;n<u;n++){switch(a=i[n],this.fieldNames[n]=a[s||"dataName"],a.sorttype){case"integer":case"int":this.fieldCompare[n]=g;break;case"number":case"currency":case"float":this.fieldCompare[n]=f;break;default:this.fieldCompare[n]=e.isFunction(a.compare)?a.compare:l}this.fieldSortDirection[n]="desc"===a.sortorder?-1:1}}var o=e.jgrid;t.prototype.calc=function(t,r,o,i,s){if(void 0!==t)switch(this.result=this.result||0,t=parseFloat(t),this.aggregator){case"sum":this.result+=t;break;case"count":this.result++;break;case"avg":this.finilized?(this.count=this.count||0,this.result=(this.result*this.count+t)/(this.count+1),this.count++):(this.result+=t,this.count=this.count||0,this.count++);break;case"min":this.result=Math.min(this.result,t);break;case"max":this.result=Math.max(this.result,t);break;default:e.isFunction(this.aggregator)&&(this.result=this.aggregator.call(this.context,{previousResult:this.result,value:t,fieldName:r,item:o,iItem:i,items:s}))}},t.prototype.getResult=function(e,t,r){(void 0!==this.result||r)&&(r&&void 0!==this.result&&(this.result=0,this.count=0),void 0===this.result||this.finilized||"avg"!==this.aggregator||(this.result=this.result/this.count,this.finilized=!0),e[t]=this.result)},r.prototype.compareVectorsEx=function(e,t){var r,o,i=this.fieldLength;for(r=0;r<i;r++)if(0!==(o=this.fieldCompare[r](e[r],t[r])))return{index:r,result:o};return{index:-1,result:0}},r.prototype.getIndexOfDifferences=function(e,t){return null===t||null===e?0:this.compareVectorsEx(e,t).index},r.prototype.compareVectors=function(e,t){var r=this.compareVectorsEx(e,t);return(r.index>=0?this.fieldSortDirection[r.index]:1)>0?r.result:-r.result},r.prototype.getItem=function(e){return this.items[e]},r.prototype.getIndexLength=function(){return this.items.length},r.prototype.getIndexesOfSourceData=function(e){return this.indexesOfSourceData[e]},r.prototype.createDataIndex=function(t){var r,o,i,s,n,a,u,l,f,g=t.length,p=this.fieldLength,c=this.fieldNames,m=this.indexesOfSourceData,h=this.items;for(r=0;r<g;r++){for(u=t[r],o=new Array(p),s=0;s<p;s++)void 0!==(i=u[c[s]])&&("string"==typeof i&&this.trimByCollect&&(i=e.trim(i)),o[s]=i);if(l=0,(f=h.length-1)<0)h.push(o),m.push([r]);else if(0!==(n=this.compareVectors(o,h[f])))if(1===n||this.skipSort)h.push(o),m.push([r]);else if(1!==(n=this.compareVectors(h[0],o)))if(0!==n)for(;;){if(f-l<2){h.splice(f,0,o),m.splice(f,0,[r]);break}if(a=Math.floor((l+f)/2),0===(n=this.compareVectors(h[a],o))){m[a].push(r);break}1===n?f=a:l=a}else m[0].push(r);else h.unshift(o),m.unshift([r]);else m[f].push(r)}},o.extend({pivotSetup:function(i,s){var n,a,u,l,f,g,p,c,m,h,d,y,x,v,w,b,S,I,O,C,D,A,T,k,F,N,R,H,V,j=this[0],Y=e.isArray,B={},q={groupField:[],groupSummary:[],groupSummaryPos:[]},P={grouping:!0,groupingView:q},L=e.extend({totals:!1,useColSpanStyle:!1,trimByCollect:!0,skipSortByX:!1,skipSortByY:!1,caseSensitive:!1,footerTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1,defaultFormatting:!0,data:i},s||{}),z=i.length,M=L.xDimension,X=L.yDimension,E=L.aggregates,G=L.totalText||L.totals||L.rowTotals||L.totalHeader,U=Y(M)?M.length:0,Q=Y(X)?X.length:0,J=Y(E)?E.length:0,K=Q-(1===J?1:0),W=[],Z=[],$=[],_=[],ee=["pivotInfos"],te=new Array(J),re=new Array(Q),oe=function(t,o,s){var n=new r(L.trimByCollect,L.caseSensitive,o,t);return e.isFunction(s)&&(n.compareVectorsEx=s),n.createDataIndex(i),n},ie=function(t,r,i,s,n){var a,u,l;switch(t){case 1:a=X[s].totalText||"{0} {1} {2}",u="y"+n+"t"+s;break;case 2:a=L.totalText||"{0}",u="t";break;default:a=J>1?r.label||"{0}":e.isFunction(X[s].label)?X[s].label:H.getItem(n)[s],u="y"+n}return l=e.extend({},r,{name:u+(J>1?"a"+i:""),label:e.isFunction(a)?a.call(j,2===t?{aggregate:r,iAggregate:i,pivotOptions:L}:1===t?{yIndex:H.getItem(n),aggregate:r,iAggregate:i,yLevel:s,pivotOptions:L}:{yData:H.getItem(n)[s],yIndex:H.getItem(n),yLevel:s,pivotOptions:L}):o.template.apply(j,2===t?[String(a),r.aggregator,r.member,i]:[String(a),r.aggregator,r.member,H.getItem(n)[s],s])}),delete l.member,delete l.aggregator,l},se=function(e,t,r){var o,i;for(o=0;o<J;o++)void 0===(i=E[o]).template&&void 0===i.formatter&&L.defaultFormatting&&(i.template="count"===i.aggregator?"integer":"number"),$.push(ie(e,i,o,t,r))},ne=function(t,r,i){var s,n,a,u;for(s=K-1;s>=r;s--)if(Z[s]){for(n=0;n<=s;n++)(F=W[n].groupHeaders)[F.length-1].numberOfColumns+=J;for(a=(f=X[s]).totalHeader,u=f.headerOnTop,n=s+1;n<=K-1;n++)W[n].groupHeaders.push({titleText:u&&n===s+1||!u&&n===K-1?e.isFunction(a)?a.call(j,i,s):o.template.call(j,String(a||""),i[s],s):"",startColumnName:"y"+(t-1)+"t"+s+(1===J?"":"a0"),numberOfColumns:J})}},ae=function(e){var r=new t("count"===E[e].aggregator?"sum":E[e].aggregator,j,s);return r.groupInfo={iRows:[],rows:[],ys:[],iYs:[]},r},ue=function(){var e,t;for(e=K-1;e>=0;e--)if(Z[e])for(null==re[e]&&(re[e]=new Array(J)),t=0;t<J;t++)re[e][t]=ae(t)},le=function(e,t,r,o){var i,s,n,a=H.getIndexOfDifferences(t,r);if(null!==r)for(a=Math.max(a,0),i=K-1;i>=a;i--)s="y"+e+"t"+i+(J>1?"a"+o:""),Z[i]&&void 0===T[s]&&((n=re[i][o]).getResult(T,s),T.pivotInfos[s]={colType:1,iA:o,a:E[o],level:i,iRows:n.groupInfo.iRows,rows:n.groupInfo.rows,ys:n.groupInfo.ys,iYs:n.groupInfo.iYs},t!==r&&(re[i][o]=ae(o)))},fe=function(t,r,o,s,n,a,u){var l,f,g;if(t!==r)for(l=K-1;l>=0;l--)Z[l]&&((f=re[l][s]).calc(n[o.member],o.member,n,a,i),g=f.groupInfo,e.inArray(u,g.iYs)<0&&(g.iYs.push(u),g.ys.push(t)),e.inArray(a,g.iRows)<0&&(g.iRows.push(a),g.rows.push(n)))};if(0===U||0===J)throw"xDimension or aggregates options are not set!";for(R=oe(M,L.skipSortByX,L.compareVectorsByX),H=oe(X,L.skipSortByY,L.compareVectorsByY),s.xIndex=R,s.yIndex=H,a=0;a<U;a++)g={name:"x"+a,label:null!=(l=M[a]).label?e.isFunction(l.label)?l.label.call(j,l,a,L):l.label:l.dataName,frozen:L.frozenStaticCols},a<U-1&&!l.skipGrouping&&!l.additionalProperty&&(q.groupField.push(g.name),q.groupSummary.push(L.groupSummary),q.groupSummaryPos.push(L.groupSummaryPos)),delete(g=e.extend(g,l)).dataName,delete g.footerText,l.additionalProperty?ee.push(g.name):($.push(g),P.sortname=g.name);for(U<2&&(P.grouping=!1),q.hideFirstGroupCol=!0,a=0;a<Q;a++)f=X[a],Z.push(!!(f.totals||f.rowTotals||f.totalText||f.totalHeader));for(k=H.getItem(0),se(0,Q-1,0),V=H.getIndexLength(),I=1;I<V;I++){for(O=H.getItem(I),a=H.getIndexOfDifferences(O,k),u=K-1;u>=a;u--)Z[u]&&se(1,u,I-1);k=O,se(0,Q-1,I)}for(a=K-1;a>=0;a--)Z[a]&&se(1,a,V-1);for(G&&se(2),k=H.getItem(0),u=0;u<K;u++)W.push({useColSpanStyle:L.useColSpanStyle,groupHeaders:[{titleText:e.isFunction(X[u].label)?X[u].label.call(j,{yData:k[u],yIndex:k,yLevel:u,pivotOptions:L}):k[u],startColumnName:1===J?"y0":"y0a0",numberOfColumns:J}]});for(I=1;I<V;I++){for(O=H.getItem(I),ne(I,a=H.getIndexOfDifferences(O,k),k),u=K-1;u>=a;u--)W[u].groupHeaders.push({titleText:e.isFunction(X[u].label)?X[u].label.call(j,{yData:O[u],yIndex:O,yLevel:u,pivotOptions:L}):O[u],startColumnName:"y"+I+(1===J?"":"a0"),numberOfColumns:J});for(u=0;u<a;u++)(F=W[u].groupHeaders)[F.length-1].numberOfColumns+=J;k=O}if(ne(V,0,k),G)for(a=0;a<K;a++)W[a].groupHeaders.push({titleText:a<K-1?"":L.totalHeader||"",startColumnName:"t"+(1===J?"":"a0"),numberOfColumns:J});for(b=R.getIndexLength(),m=0;m<b;m++){for(h=R.getItem(m),T={pivotInfos:d={iX:m,x:h}},a=0;a<U;a++)T["x"+a]=h[a];if(S=R.getIndexesOfSourceData(m),G)for(u=0;u<J;u++)te[u]=ae(u);for(k=null,ue(),I=0;I<V;I++){for(O=H.getItem(I),C=H.getIndexesOfSourceData(I),u=0;u<J;u++){for(null!==k&&le(I-1,O,k,u),D=[],a=0;a<C.length;a++)N=C[a],e.inArray(N,S)>=0&&D.push(N);if(D.length>0){for(y=new Array(D.length),x=new t((A=E[u]).aggregator,j,s),p=0;p<D.length;p++)a=D[p],n=i[a],y[p]=n,x.calc(n[A.member],A.member,n,a,i),G&&((v=te[u]).calc(n[A.member],A.member,n,a,i),w=v.groupInfo,e.inArray(a,w.iYs)<0&&(w.iYs.push(I),w.ys.push(O)),e.inArray(a,w.iRows)<0&&(w.iRows.push(a),w.rows.push(n))),fe(O,k,A,u,n,a,I);c="y"+I+(1===J?"":"a"+u),x.getResult(T,c),d[c]={colType:0,iY:I,y:O,iA:u,a:A,iRows:D,rows:y}}}k=O}if(null!==k)for(u=0;u<J;u++)le(V-1,k,k,u);if(G)for(u=0;u<J;u++)c="t"+(1===J?"":"a"+u),(v=te[u]).getResult(T,c),w=v.groupInfo,d[c]={colType:2,iA:u,a:E[u],iRows:w.iRows,rows:w.rows,iYs:w.iYs,ys:w.ys};_.push(T)}if(L.footerTotals||L.colTotals){for(z=_.length,a=0;a<U;a++)B["x"+a]=M[a].footerText||"";for(a=U;a<$.length;a++){for(c=$[a].name,x=new t(L.footerAggregator||"sum",j,s),p=0;p<z;p++)T=_[p],x.calc(T[c],c,T,p,_);x.getResult(B,c)}}return s.colHeaders=W,{colModel:$,additionalProperties:ee,options:s,rows:_,groupOptions:P,groupHeaders:W,summary:B}},jqPivot:function(t,r,i,s){return this.each(function(){function n(){var s,n=l.pivotSetup.call(u,t,r),f=n.groupHeaders,g=function(e){var t,r=0;for(t in e)e.hasOwnProperty(t)&&r++;return r}(n.summary)>0,p=n.groupOptions.groupingView,c=o.from.call(a,n.rows);if(!r.skipSortByX)for(s=0;s<p.groupField.length;s++)c.orderBy(p.groupField[s],null!=i&&i.groupingView&&null!=i.groupingView.groupOrder&&"desc"===i.groupingView.groupOrder[s]?"d":"a","text","");if(r.data=t,l.call(u,e.extend(!0,{datastr:e.extend(c.select(),g?{userdata:n.summary}:{}),datatype:"jsonstring",footerrow:g,userDataOnFooter:g,colModel:n.colModel,additionalProperties:n.additionalProperties,pivotOptions:n.options,viewrecords:!0,sortname:r.xDimension[0].dataName},n.groupOptions,i||{})),f.length)for(s=0;s<f.length;s++)f[s]&&f[s].groupHeaders.length&&l.setGroupHeaders.call(u,f[s]);r.frozenStaticCols&&l.setFrozenColumns.call(u)}var a=this,u=e(a),l=e.fn.jqGrid;"string"==typeof t?e.ajax(e.extend({url:t,dataType:"json",success:function(e){t=o.getAccessor(e,s&&s.reader?s.reader:"rows"),n()}},s||{})):n()})}})});
//# sourceMappingURL=grid.pivot.js.map