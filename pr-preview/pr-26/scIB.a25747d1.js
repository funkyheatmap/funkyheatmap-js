function t(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=o.parcelRequire87c2;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},o.parcelRequire87c2=a),a.register("3gsfO",(function(t,e){t.exports=d3})),a.register("3JaYo",(function(e,o){t(e.exports,"default",(()=>f));var i=a("3gsfO"),r=a("32BwG"),s=a("kwarp"),n=a("dwZfM"),l=a("lG5F2"),d=a("afEFj"),h=a("7SRQm");const g={legendFontSize:12,legendTicks:[0,.2,.4,.6,.8,1],labelGroupsAbc:!1,colorByRank:!1,theme:{oddRowBackground:"white",evenRowBackground:"#eee",textColor:"black",strokeColor:"#555",headerColor:"black",hoverColor:"#1385cb"}},c={rowHeight:24,rowSpace:.1,rowBigspace:1,colWidth:24,colSpace:.1,colBigspace:1,colAnnotOffset:10,colAnnotAngle:30,padding:5,minGeomSize:.25,funkyMidpoint:.8};class p{constructor(t){r.extend(this,c),r.extend(this,t);let e=[],o=[];for(let i of Object.getOwnPropertyNames(t)){let r=i.indexOf("_");if(r>-1){let o;for(;r>-1;)o=i.slice(0,r)+i[r+1].toUpperCase()+i.slice(r+2),r=i.indexOf("_",r+1);this[o]=t[i],e.push(i),i=o}(i.startsWith("expand")||"colWidth"==i)&&o.push(i)}if(e.length>0){let t="Position arguments with underscores were accepted, but are deprecated. Use camelCase instead.";t+=` Found: ${e.join(", ")}`,console.warn(t)}if(o.length>0){let t="The following position arguments are deprecated and have no effect: ";t+=o.join(", "),console.warn(t)}this.calculate()}calculate(){this.rowSpacePx=this.rowHeight*this.rowSpace,this.rowBigspacePx=this.rowHeight*this.rowBigspace,this.colSpacePx=this.rowHeight*this.colSpace,this.geomSize=this.rowHeight-this.rowSpacePx,this.geomPadding=this.rowSpacePx/2,this.geomPaddingX=this.colSpacePx/2}}class m{constructor(t,e,o,a,s,n,l,d,h,c){this.rowGroupKey="__group",this.data=t,this.columnInfo=e,this.columnGroups=i.index(o,(t=>t.group)),this.rowInfo=a,this.rowGroups=i.index(s,(t=>t.group)),this.palettes=n,this.legends=l,this.positionArgs=new p(d),this.options=r.merge(g,h),this.calculateOptions(),this.svg=c}calculateOptions(){this.renderGroups=!1,this.rowGroupOrder=[],0!==this.rowInfo.length&&void 0!==this.rowInfo[0].group||(this.rowInfo=this.data.map((t=>({group:""})))),this.data.forEach(((t,e)=>{const o=this.rowInfo[e].group;t[this.rowGroupKey]=o,-1===this.rowGroupOrder.indexOf(o)&&this.rowGroupOrder.push(o)}));const t=this.rowInfo[0].group,e=this.rowGroups.get(t);void 0!==e&&void 0!==e.Group&&(this.renderGroups=!0)}renderStripedRows(){const t=this.options,e=this.positionArgs;let o,i=0,r=0;this.data.forEach(((a,s)=>{this.renderGroups&&a[this.rowGroupKey]!==o&&(i+=1,r=0),o=a[this.rowGroupKey],this.body.append("rect").classed("row",!0).attr("height",e.rowHeight).attr("x",0).attr("y",(s+i)*e.rowHeight).attr("fill",r%2==0?t.theme.evenRowBackground:t.theme.oddRowBackground),r+=1}))}renderData(){const t=this.options,e=this.positionArgs;let o,r=0;e.bodyHeight=this.data.length*e.rowHeight,this.renderGroups&&(e.bodyHeight+=this.rowGroups.size*e.rowHeight),this.columnInfo.forEach(((a,s)=>{let n=0,l=e.geomPaddingX,d=0===s;"text"!==a.geom&&"bar"!==a.geom||(l=e.padding),r+=l,o&&a.group&&o!==a.group&&(r+=2*e.padding);let g,c=0;this.data.forEach(((o,s)=>{let p=0;if(this.renderGroups&&o[this.rowGroupKey]!==g&&(c+=1),this.renderGroups&&d&&o[this.rowGroupKey]!==g){let i=h.GEOMS.text(this.rowGroups.get(o[this.rowGroupKey]).Group,null,a,t,e);i.attr("transform",`translate(${r-l}, ${(s+c-1)*e.rowHeight})`).attr("font-weight","bold").attr("dominant-baseline","hanging"),this.body.append((()=>i.node())),p=i.node().getBBox().width}g=o[this.rowGroupKey];let m=a.getValue(o);if(null==m||isNaN(m)&&a.numeric)return;let f,u=a.getColorValue(o,s);if(a.label&&(f=o[a.label]),void 0===h.GEOMS[a.geom])throw`Geom ${a.geom} not implemented. Use one of ${Object.keys(h.GEOMS).join(", ")}.`;let w,y=h.GEOMS[a.geom](m,u,a,t,e);if(f){const t=i.hsl(a.palette(u)).l>.5?"black":"white",o=i.create("svg:g").classed("fh-geom",!0);o.append((()=>y.classed("fh-geom",!1).classed("fh-orig-geom",!0).node()));let r=e.rowHeight/2;"bar"===a.geom&&(r=e.padding+3*e.geomPaddingX),o.append("text").attr("x",r).attr("y",e.rowHeight/2).attr("text-anchor","middle").attr("dominant-baseline","central").attr("fill",t).text(f),y=o}if(y.attr("transform",`translate(${r}, ${(s+c)*e.rowHeight})`),a.numeric&&!f){let t=(+m).toFixed(4);t=t.replace(/\.?0+$/,""),y.datum({tooltip:t})}if("pie"===a.geom){const t="padding: 2px 4px; border-bottom: 1px solid #aaa; border-right: 1px solid #aaa";let e=`<table style="${"margin: 5px; border-top: 1px solid #aaa; border-left: 1px solid #aaa; font-size: 80%"}">${a.palette.colorNames.map(((e,o)=>`<tr><td style="${t}">${e}:</td><td style="${t}">${m[o]}</td></tr>`)).join("")}</table>`;y.datum({tooltip:e})}if(this.body.append((()=>y.node())),w=f?y.select(".fh-orig-geom").node().getBBox().width:y.node().getBBox().width,"image"===a.geom&&(w=a.width),w>p&&(p=w),p>n&&(n=p),f){f=y.select("text");let t=100;for(let o=0;o<12;o++){const{width:o}=f.node().getBBox();if(!(o>e.geomSize-2*e.geomPaddingX))break;t-=5,f.attr("font-size",`${t}%`)}}})),"bar"===a.geom&&!1!==a.options.drawGuide&&(n=e.geomSize*a.width+e.geomPadding,this.body.append("line").attr("x1",r+n).attr("x2",r+n).attr("y1",this.renderGroups?e.rowHeight:0).attr("y2",e.bodyHeight).attr("stroke",t.theme.strokeColor).attr("stroke-dasharray","5 5").attr("opacity",.5)),a.widthPx=Math.max(n,e.rowHeight),a.widthPx=Math.round(a.widthPx),a.offset=r,r+=a.widthPx+l,o=a.group})),e.bodyWidth=r+e.colSpacePx}renderHeader(){const t=this.options,e=this.positionArgs;let o=0,r=0,a=!1;const s=this.header.append("g"),d=this.header.append("g").attr("transform",`translate(0, ${e.rowHeight+e.colAnnotOffset})`),h=i.group(this.columnInfo,(t=>t.group));let g=0;h.forEach(((o,i)=>{if(!i)return;const r=this.columnGroups.get(i),a=new(0,n.Column)({id:"_group",palette:r.palette},[1]);(0,l.assignPalettes)([a],this.palettes);const d=o[o.length-1],h=o[0].offset,c=d.offset+d.widthPx+e.geomPadding,p="none"==a.palette?"transparent":a.palette(.5),m=s.append("rect").attr("x",h).attr("y",0).attr("width",c-h).attr("height",e.rowHeight).attr("fill",p).attr("opacity",.25),f=s.append("text").attr("x",h+(c-h)/2).attr("y",e.rowHeight/2).attr("text-anchor","middle").attr("dominant-baseline","central").attr("fill",t.theme.headerColor).text(r.level1);t.fontSize&&f.attr("font-size",t.fontSize);const{width:u}=f.node().getBBox();if(u+2*e.padding>c-h){const t=u+2*e.padding-(c-h);m.attr("width",u+2*e.padding),m.attr("x",h-t/2)}if(t.labelGroupsAbc){const o=String.fromCharCode("a".charCodeAt(0)+g),i=s.append("text").attr("x",h+e.padding).attr("y",e.rowHeight/2).attr("dominant-baseline","central").attr("fill",t.theme.headerColor).text(`${o})`);t.fontSize&&i.attr("font-size",t.fontSize)}g+=1})),this.columnInfo.forEach(((i,s)=>{const n=d.append("g").attr("transform",`rotate(${-e.colAnnotAngle})`).classed(`column-${s}`,!0);n.append("text").attr("x",0).attr("y",0).attr("font-size",t.fontSize).style("fill",t.theme.textColor).style("cursor","pointer").datum(i).on("click",this.onColumnClick.bind(this)).on("mouseenter",(()=>{n.style("text-decoration","underline dashed").style("fill",t.theme.hoverColor)})).on("mouseleave",(()=>{n.style("text-decoration","").style("fill",t.theme.textColor)})).text(i.name);const l=n.node().getBBox().width;!a&&l<i.widthPx-2*e.padding?i.rotate=!1:(i.rotate=!0,a=!0);const{width:h,height:g}=n.node().getBoundingClientRect();g>o&&(o=g),i.offset+i.widthPx/2+h>r&&(r=i.offset+i.widthPx/2+h+e.padding)})),this.columnInfo.forEach(((i,r)=>{let a=i.offset+i.widthPx/2,s=i.rotate?-e.colAnnotAngle:0;this.header.select(`.column-${r}`).attr("transform",`translate(${a}, ${o-2*e.padding}) rotate(${s})`),i.rotate?d.append("line").attr("x1",a).attr("x2",a).attr("y1",o-2).attr("y2",o-2-e.padding).attr("stroke",t.theme.strokeColor):d.select(`.column-${r} text`).attr("text-anchor","middle")})),e.width=r,e.headerHeight=o+e.rowHeight+e.colAnnotOffset}renderLegends(){const t=this.options,e=this.positionArgs;let o=0;const r=this.footer.append("g");let a=0,s=0;this.legends.forEach((o=>{if(!o.enabled)return;const a=t.legendFontSize;let n=2*a+e.padding;const l=r.append("g");if(l.attr("transform",`translate(${s}, 0)`),l.append("text").attr("x",0).attr("y",n).attr("font-size",t.legendFontSize).style("fill",t.theme.textColor).text(o.title),"text"===o.geom){let i=0;o.labels.forEach(((o,r)=>{const s=l.append("text").attr("x",e.padding).attr("y",n+(r+1)*(a+e.padding)).attr("font-size",t.legendFontSize).style("fill",t.theme.textColor).text(o),{width:d}=s.node().getBBox();d>i&&(i=d)})),o.values.forEach(((o,r)=>{l.append("text").attr("x",2*e.padding+i).attr("y",n+(r+1)*(a+e.padding)).attr("font-size",t.legendFontSize).style("fill",t.theme.textColor).text(o)}))}if("rect"===o.geom){let i=0;o.values.forEach(((r,s)=>{const d=o.labels[s],g=o.size[s],c=h.GEOMS.rect(g,r,o,t,e);c.attr("transform",`translate(${i}, ${n+e.padding})`),l.append((()=>c.node())),l.append("text").attr("x",i+e.rowHeight/2).attr("y",n+e.rowHeight+a+e.padding).attr("font-size",t.legendFontSize).attr("text-anchor","middle").style("fill",t.theme.textColor).text(d),i+=e.geomSize+e.padding}))}if("funkyrect"===o.geom){let i=0;o.labels.forEach(((r,s)=>{const d=o.values[s],g=o.size[s],c=h.GEOMS.funkyrect(g,d,o,t,e);l.append((()=>c.node()));const{width:p,height:m}=c.node().getBBox();c.attr("transform",`translate(${i}, ${n+e.rowHeight/2-m/2})`),l.append("text").attr("x",i+e.rowHeight/2).attr("y",n+e.rowHeight+a+e.padding).attr("font-size",t.legendFontSize).attr("text-anchor","middle").style("fill",t.theme.textColor).text(r),i+=p+e.padding}))}if("circle"===o.geom){let i=0;o.labels.forEach(((r,s)=>{const d=o.values[s],g=o.size[s],c=h.GEOMS.circle(g,d,o,t,e);l.append((()=>c.node()));const{width:p,height:m}=c.node().getBBox();c.attr("transform",`translate(${i}, ${n+e.rowHeight/2-m/2})`),l.append("text").attr("x",i+e.rowHeight/2).attr("y",n+e.rowHeight+a+e.padding).attr("font-size",t.legendFontSize).attr("text-anchor","middle").style("fill",t.theme.textColor).text(r),i+=p+e.padding}))}if("bar"===o.geom){const i=o.palette.range();this.svg.append("defs").append("linearGradient").attr("id",`grad_${o.paletteName}`).attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","0%").selectAll("stop").data(i).enter().append("stop").style("stop-color",(function(t){return t})).attr("offset",(function(t,e){return e/(i.length-1)*100+"%"}));const r=this.columnInfo.filter((t=>"bar"===t.geom&&t.paletteName===o.paletteName))[0];l.append("rect").attr("x",e.padding).attr("y",n+e.padding).attr("width",r.widthPx).attr("height",e.rowHeight).style("fill",`url(#grad_${o.paletteName})`).attr("stroke","black").attr("stroke-width",.5),o.labels.forEach(((i,s)=>{if(""===i)return;const d=o.values[s],h=e.padding+r.widthPx*d;d>0&&d<1&&l.append("line").attr("x1",h).attr("x2",h).attr("y1",n+e.rowHeight+e.padding).attr("y2",n+e.rowHeight).attr("stroke","black").attr("stroke-width",.5),l.append("text").attr("x",h).attr("y",n+e.rowHeight+a+e.padding).attr("font-size",t.legendFontSize).attr("text-anchor","middle").style("fill",t.theme.textColor).text(i)}))}if("image"===o.geom&&o.values.forEach(((i,r)=>{const a=o.labels[r],s=h.GEOMS.image(i,null,{width:o.size[r]},t,e);s.attr("transform",`translate(0, ${n+e.padding})`),l.append((()=>s.node()));const{width:d,height:g}=s.node().getBBox();l.append("text").attr("x",d+e.padding).attr("y",n+e.padding+g/2).attr("font-size",t.legendFontSize).attr("text-anchor","left").attr("dominant-baseline","central").style("fill",t.theme.textColor).text(a),n+=g+e.padding})),"pie"===o.geom){const r=i.pie().endAngle(Math.PI)(Array(o.palette.colorNames.length).fill(1)),a=l.append("g");a.attr("transform",`translate(0, ${n+e.padding+e.rowHeight})`),a.selectAll("arcs").data(r).enter().append("path").attr("d",i.arc().innerRadius(0).outerRadius(e.geomSize/2)).attr("fill",((t,e)=>o.palette(e))).style("stroke",t.theme.strokeColor).style("stroke-width",1).attr("transform",`translate(${e.geomSize/2+e.geomPadding-.5}, 0)`),a.selectAll("text").data(r).enter().append("text").text(((t,e)=>o.palette.colorNames[e])).attr("font-size",t.legendFontSize).attr("dominant-baseline","central").style("fill",t.theme.textColor).attr("transform",(t=>{const o=i.arc().innerRadius(e.geomSize/2).outerRadius(e.geomSize).centroid(t);return o[0]+=e.geomSize/2+4*e.geomPadding,`translate(${o})`})),a.selectAll("lines").data(r).enter().append("path").attr("d",(t=>{const o=i.arc().innerRadius(e.geomSize/2).outerRadius(e.geomSize/2+5).centroid(t),r=i.arc().innerRadius(e.geomSize/2).outerRadius(e.geomSize-5).centroid(t);return o[0]+=e.geomSize/2+e.geomPadding,r[0]+=e.geomSize/2+3*e.geomPadding,i.line()([o,r])})).style("stroke",t.theme.strokeColor).style("stroke-width",.5)}const{width:d}=l.node().getBBox();s+=d+2*e.padding}));const{height:n}=r.node().getBBox();n>o&&(o=n);let l=s-e.padding;a+l>e.width&&(l<=e.width?a=e.width-l:(a=0,e.width=s)),e.footerOffset=a,e.footerHeight=o+e.rowHeight}hideTooltip(){this.tooltip&&this.tooltip.style("display","none")}showTooltip(t,e){void 0===this.tooltip&&(this.tooltip=i.select("body").append("div").style("z-index",2e3).style("position","absolute").style("background-color","#333").style("color","white").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","3px 5px").style("display","none"));this.tooltip.html(e).style("top",t[1]+20+"px").style("left",t[0]+10+"px").style("display","block")}onMouseMove(t){if(t.target){let e=i.select(t.target);for(;!1===e.classed("fh-geom")&&e.node()!=this.svg.node();)e=i.select(e.node().parentNode);const o=e.datum();if(o&&o.tooltip){const e=i.pointer(t,document.body);return void this.showTooltip(e,o.tooltip)}}this.hideTooltip()}onColumnClick(t){const e=i.select(t.target),o=e.node().getBBox(),r=e.datum(),a=r.sort();let s=i.group(this.data,(t=>t[this.rowGroupKey]));s=[].concat(...this.rowGroupOrder.map((t=>i.sort(s.get(t),((t,e)=>([t,e]=[t[r.id],e[r.id]],r.numeric&&([t,e]=[+t,+e]),a(t,e))))))),this.data=s,this.svg.selectChildren().remove(),this.render(),this.indicateSort(r,o)}indicateSort(t,e){const o=this.options,i=this.positionArgs;this.sortIndicator=this.header.append("text").attr("font-size",12).attr("fill",o.theme.hoverColor),"asc"===t.sortState?this.sortIndicator.text("↑"):this.sortIndicator.text("↓"),this.sortIndicator.attr("text-anchor","right").attr("dominant-baseline","text-bottom");let r=t.offset+t.widthPx/2-2*i.padding,a=i.headerHeight-i.padding;t.rotate||(r-=e.width/2,a-=e.height/2,this.sortIndicator.attr("dominant-baseline","central")),this.sortIndicator.attr("x",r).attr("y",a)}render(){this.header=this.svg.append("g"),this.body=this.svg.append("g"),this.footer=this.svg.append("g"),this.renderStripedRows(),this.renderData(),this.renderHeader(),this.renderLegends();const t=this.options,e=this.positionArgs;this.svg.attr("width",e.width),this.svg.attr("height",e.bodyHeight+e.headerHeight+e.footerHeight),this.renderGroups&&this.header.attr("transform",`translate(0, ${e.rowHeight})`),this.body.selectAll(".row").attr("width",e.bodyWidth),this.body.attr("transform",`translate(0, ${e.headerHeight})`),this.footer.attr("transform",`translate(${e.footerOffset}, ${e.headerHeight+e.bodyHeight})`),this.svg.attr("style",""),t.rootStyle&&this.svg.attr("style",t.rootStyle)}listen(){this.svg.on("mousemove",this.onMouseMove.bind(this))}}var f=function(t,e,o=[],r=[],a=[],h={},g=[],c={},p={},f=!0){[t,e,r,o,a,g]=(0,s.ensureRowData)(t,e,r,o,a,g),e=(0,n.buildColumnInfo)(t,e,f,p.colorByRank),r=(0,n.buildColumnGroups)(r,e),g=(0,d.prepareLegends)(g,h,e),(0,l.assignPalettes)(e,h),(0,l.assignPalettes)(g,h);const u=i.select("body").append("svg").classed("funkyheatmap",!0).style("visibility","hidden").style("position","absolute").style("left","-2000px"),w=new m(t,e,r,o,a,h,g,c,p,u);return w.render(),w.listen(),w.svg.remove(),w.svg.node()}})),a.register("32BwG",(function(t,e){t.exports=_})),a.register("kwarp",(function(e,o){function i(t){const e={},o=Object.getOwnPropertyNames(t[0]);for(let i of o)e[i]=t.map((t=>t[i]));return e}function r(...t){return t.map((t=>(t&&!Array.isArray(t)&&(t=function(t){const e=Object.getOwnPropertyNames(t),o=t[e[0]].length,i=[];for(let r=0;r<o;r++){let o={};for(let i of e)o[i]=t[i][r];i.push(o)}return i}(t)),t)))}t(e.exports,"rowToColData",(()=>i)),t(e.exports,"ensureRowData",(()=>r))})),a.register("dwZfM",(function(o,i){t(o.exports,"Column",(()=>l)),t(o.exports,"buildColumnInfo",(()=>d)),t(o.exports,"buildColumnGroups",(()=>h));var r=a("3gsfO"),s=a("32BwG"),n=a("kwarp");class l{constructor(t,e,o){({id:this.id,id_color:this.id_color,id_size:this.id_size,colorByRank:this.colorByRank,scaleColumn:this.scaleColumn,name:this.name,geom:this.geom,group:this.group,palette:this.palette,width:this.width,label:this.label,options:this.options}=t),this.data=e,this.colorByRank=this.colorByRank||!1,this.label=this.label||t.id_label;const i=e[0];var r;if("number"!=typeof(r=i)&&("string"!=typeof r||Number.isNaN(r)||Number.isNaN(parseFloat(r)))||"text"===this.geom||"pie"===this.geom?(this.numeric=!1,this.categorical=!0,this.colorByRank=!1,this.scaleColumn=!1):(this.numeric=!0,this.categorical=!1,this.data=this.data.map((t=>+t))),void 0===this.name&&(this.name=this.id),void 0===this.options&&(this.options={}),void 0!==this.options.width&&void 0===this.width&&(this.width=this.options.width),void 0!==this.options.palette&&void 0===this.palette&&(this.palette=this.options.palette),void 0===this.geom&&(this.numeric?this.geom="funkyrect":this.geom="text"),void 0===this.palette&&("pie"===this.geom&&(this.palette="categorical"),this.numeric&&(this.palette="numerical")),void 0===this.width&&"bar"===this.geom&&(this.width=4),"image"===this.geom&&void 0===this.width)throw"Please, specify width for column with geom=image";if("bar"===this.geom&&void 0!==this.options.draw_outline&&(this.options.drawGuide=this.options.draw_outline),void 0!==this.label&&!o.includes(this.label))throw`Column ${this.id} has label=${this.label}, which is not in the data`;if(void 0!==this.id_color&&!o.includes(this.id_color))throw`Column ${this.id} has id_color=${this.id_color}, which is not in the data`;if(void 0!==this.id_size&&!o.includes(this.id_size))throw`Column ${this.id} has id_size=${this.id_size}, which is not in the data`;this.sortState=null,this.numeric&&this.maybeCalculateStats()}maybeCalculateStats(){let t=[0,1];if(this.scaleColumn&&(t=r.extent(this.data)),[this.min,this.max]=t,this.range=this.max-this.min,this.scale=r.scaleLinear().domain(t),this.colorByRank){this.rankedData=r.rank(this.data);const t=e(s).uniq(this.rankedData),o=r.rank(t);this.normalizedRanks=e(s).zipObject(t,o),this.colorScale=r.scaleLinear().domain([0,t.length-1])}}getValue(t){return void 0!==this.id_size?t[this.id_size]:this.numeric?+t[this.id]:t[this.id]}getColorValue(t,e){if(void 0!==this.id_color)return t[this.id_color];if(this.colorByRank){const t=this.rankedData[e];return this.normalizedRanks[t]}return t[this.id]}sort(){return"desc"===this.sortState?(this.sortState="asc",r.ascending):(this.sortState="desc",r.descending)}}function d(t,e,o,i){const r=(0,n.rowToColData)(t),a=Object.getOwnPropertyNames(r);return void 0!==e&&0!==e.length||(console.info("No column info specified, assuming all columns are to be displayed."),e=Object.getOwnPropertyNames(r).map((t=>({id:t})))),i&&e.forEach((t=>{void 0===t.colorByRank&&(t.colorByRank=!0)})),o&&e.forEach((t=>{void 0===t.scaleColumn&&(t.scaleColumn=!0)})),e.map((t=>{let e=t.id;if(void 0===e)throw"Column info must have id field corresponding to the column in the data";return new l(t,r[e],a)}))}function h(t,e){if(0===t.length&&e.some((t=>t.group))&&(console.info("No column groups specified, but some columns have group, building automatically"),t=e.filter((t=>t.group)).map((t=>t.group)),t=(t=[...new Set(t)]).map((t=>({group:t})))),0===t.length)return[];e.forEach((e=>{if(e.group&&!t.some((t=>t.group===e.group)))throw`Column group ${e.group} is not specified in columnGroups`}));let o=e.filter((t=>t.group)).map((t=>t.group)),i=t.filter((t=>!o.includes(t.group)));return i.length>0&&console.warn(`Unused column groups: ${i.map((t=>t.group)).join(", ")}`),void 0===t[0].palette&&(console.info("Column groups did not specify `palette`. Assuming no colours"),t.forEach((t=>{t.palette="none"}))),t.forEach((t=>{if(void 0===t.palette)throw`Column group ${t.group} did not specify palette`})),void 0===t[0].level1&&(console.info("Column groups did not specify `level1`. Using group id as level1"),t.forEach((t=>{t.level1=t.group.charAt(0).toUpperCase()+t.group.slice(1)}))),t}})),a.register("lG5F2",(function(e,o){t(e.exports,"assignPalettes",(()=>s));var i=a("3gsfO");const r={numerical:{Blues:["#011636","#08306B","#08519C","#2171B5","#4292C6","#6BAED6","#9ECAE1","#C6DBEF","#DEEBF7","#F7FBFF"],Greens:["#00250f","#00441B","#006D2C","#238B45","#41AB5D","#74C476","#A1D99B","#C7E9C0","#E5F5E0"],Greys:["#000000","#252525","#525252","#737373","#969696","#BDBDBD","#D9D9D9","#F0F0F0"],Reds:["#CB181D","#EF3B2C","#FB6A4A","#FC9272","#FCBBA1","#FEE0D2","#FFF5F0"],YlOrBr:["#EC7014","#FE9929","#FEC44F","#FEE391","#FFF7BC","#FFFFE5"]},categorical:{Set1:["#E41A1C","#377EB8","#4DAF4A","#984EA3","#FF7F00","#FFFF33","#A65628","#F781BF","#999999"],Set2:["#66C2A5","#FC8D62","#8DA0CB","#E78AC3","#A6D854","#FFD92F","#E5C494","#B3B3B3"],Set3:["#8DD3C7","#FFFFB3","#BEBADA","#FB8072","#80B1D3","#FDB462","#B3DE69","#FCCDE5","#D9D9D9","#BC80BD","#CCEBC5","#FFED6F"],Dark2:["#1B9E77","#D95F02","#7570B3","#E7298A","#66A61E","#E6AB02","#A6761D","#666666"]}};function s(t,e){e={numerical:"Blues",categorical:"Set1",...e},t.forEach((t=>{if(t.palette&&"none"!=t.palette){t.paletteName=t.palette;let o,a,s=e[t.palette];if(void 0===s&&(s=t.palette),r.numerical[s])o=r.numerical[s];else if(r.categorical[s])o=r.categorical[s];else if(Array.isArray(s)){const t=s[0];if(!("string"==typeof t||t instanceof String))throw`Palette definition ${s} is not recognized. Expected are: array of colors, array of color-name pairs.`;o=s}else{if(!Array.isArray(s.colors)||!Array.isArray(s.names)){throw`Palette ${s} not defined. Use one of ${[...Object.getOwnPropertyNames(r.numerical),...Object.getOwnPropertyNames(r.categorical)].join(", ")}.`}o=s.colors,a=s.names}if(t.numeric){let e=t.scale;t.colorScale&&(e=t.colorScale);const[r,a]=e.domain(),s=(a-r)/(o.length-1),n=[...i.range(r,a,s),a];t.palette=i.scaleLinear().domain(n).range(o)}if("pie"===t.geom||"text"===t.geom){let e=a;void 0===e&&(e=i.range(o.length)),t.palette=i.scaleOrdinal().domain(e).range(o),t.palette.colors=o,t.palette.colorNames=a}}}))}})),a.register("afEFj",(function(e,o){t(e.exports,"prepareLegends",(()=>r));var i=a("32BwG");function r(t,e,o){void 0===t&&(console.info("No legends provided, will infer automatically"),t=[]);const r=[];o.forEach((t=>{t.palette&&-1===r.indexOf(t.palette)&&r.push(t.palette)}));const a=[];t.forEach((t=>{t.palette&&-1===a.indexOf(t.palette)&&a.push(t.palette)}));const s=i.difference(r,a);if(s.length>0){let e="These palettes are missing in legends, adding legends for them: ";e+=s.join(", "),console.info(e),s.forEach((e=>{t.push({title:e,palette:e,enabled:!0})}))}return t.forEach((t=>{if(void 0===t.enabled&&(t.enabled=!0),void 0===t.title&&(t.title=t.palette),void 0===t.geom){console.info(`Legend \`${t.title}\` did not specify geom, copying from column info`);const e=o.find((e=>e.palette===t.palette));t.geom=e.geom}if(void 0===t.labels)if(console.info(`Legend \`${t.title}\` did not specify labels, inferring from column info`),"pie"===t.geom){void 0===e[t.palette].names&&(console.warn(`Cannot infer labels for legend \`${t.title}\`, please provide color names in palette. Disabling this legend`),t.enabled=!1),t.labels=e[t.palette].names}else["circle","rect","funkyrect","bar"].includes(t.geom)?t.labels=["0","","0.2","","0.4","","0.6","","0.8","","1"]:"text"!==t.geom&&"image"!==t.geom||(console.warn(`Cannot infer labels for legend \`${t.title}\` of type ${t.geom}, please provide labels. Disabling this legend`),t.enabled=!1);if(void 0===t.size)if(console.info(`Legend \`${t.title}\` did not specify size, inferring from column info`),"circle"===t.geom||"funkyrect"===t.geom)t.size=[...d3.range(0,t.labels.length-1).map((e=>e/(t.labels.length-1))),1];else if("rect"===t.geom||"bar"===t.geom)t.size=1;else if("image"===t.geom)throw`Please specify size (width) for image legend \`${t.title}\``;if(void 0===t.values&&(["circle","rect","funkyrect","bar"].includes(t.geom)&&(t.values=[...d3.range(0,t.labels.length-1).map((e=>e/(t.labels.length-1))),1]),!t.enabled||"image"!==t.geom&&"text"!==t.geom||(console.warn(`Cannot infer values for legend \`${t.title}\` of type ${t.geom}, please provide values. Disabling this legend`),t.enabled=!1)),i.isNumber(t.size)&&(t.size=Array(t.labels.length).fill(t.size)),["circle","rect","funkyrect","bar"].includes(t.geom)){t.numeric=!0;let e=[0,1];[t.min,t.max]=e,t.range=t.max-t.min,t.scale=d3.scaleLinear().domain(e)}})),t}})),a.register("7SRQm",(function(e,o){t(e.exports,"GEOMS",(()=>r));var i=a("3gsfO");const r={text:(t,e,o,r,a)=>{let s=r.theme.textColor;o.palette&&(s=o.palette(t));let n="start",l=0;"center"!==o.options.align&&"middle"!==o.options.align||(n="middle",l=a.rowHeight/2),"right"!==o.options.align&&"end"!==o.options.align||(n="end",l=a.rowHeight-a.padding);const d=i.create("svg:text").attr("dominant-baseline","middle").attr("y",a.rowHeight/2).attr("x",l).attr("text-anchor",n).style("fill",s).text(t);return r.fontSize&&d.attr("font-size",r.fontSize),d},bar:(t,e,o,r,a)=>{const s=o.palette(e);let n=(t=o.scale(t))*o.width*a.geomSize;return 0===n&&(n=a.minGeomSize),i.create("svg:rect").classed("fh-geom",!0).attr("x",a.geomPaddingX).attr("y",a.geomPadding).attr("width",n.toFixed(2)).attr("height",a.geomSize).style("stroke",r.theme.strokeColor).style("stroke-width",1).style("fill",s)},circle:(t,e,o,r,a)=>{const s=o.palette(e);let n=(t=o.scale(t))*a.geomSize/2;return 0===n&&(n=a.minGeomSize),i.create("svg:circle").classed("fh-geom",!0).style("stroke",r.theme.strokeColor).style("stroke-width",1).style("fill",s).attr("cx",a.rowHeight/2).attr("cy",a.rowHeight/2).attr("r",n.toFixed(2))},rect:(t,e,o,r,a)=>{const s=o.palette(e);return t=o.scale(t),i.create("svg:rect").classed("fh-geom",!0).style("stroke",r.theme.strokeColor).style("stroke-width",1).style("fill",s).attr("x",a.geomPaddingX).attr("y",a.geomPadding).attr("width",a.geomSize).attr("height",a.geomSize)},funkyrect:(t,e,o,r,a)=>{let s=o.scale(t);const n=o.palette(e);if(s<a.funkyMidpoint){let e=(.9*(t=o.scale.copy().range([0,.5]).domain([o.min,o.min+o.range*a.funkyMidpoint])(t))+.1)*a.geomSize-a.geomPadding;return e<=0&&(e=a.minGeomSize),i.create("svg:circle").classed("fh-geom",!0).style("stroke",r.theme.strokeColor).style("stroke-width",1).style("fill",n).attr("cx",a.rowHeight/2).attr("cy",a.rowHeight/2).attr("r",e.toFixed(2))}const l=(.9-.8*(t=o.scale.copy().range([.5,1]).domain([o.min+o.range*a.funkyMidpoint,o.max])(t)))*a.geomSize;return i.create("svg:rect").classed("fh-geom",!0).style("stroke",r.theme.strokeColor).style("stroke-width",1).style("fill",n).attr("x",a.geomPaddingX).attr("y",a.geomPadding).attr("width",a.geomSize).attr("height",a.geomSize).attr("rx",l.toFixed(2)).attr("ry",l.toFixed(2))},pie:(t,e,o,r,a)=>{let s=0,n=0;if(t.forEach(((t,e)=>{t>0&&(s+=1,n=e)})),1===s){const t=o.palette(n);return i.create("svg:circle").classed("fh-geom",!0).style("stroke",r.theme.strokeColor).style("stroke-width",1).style("fill",t).attr("cx",a.rowHeight/2).attr("cy",a.rowHeight/2).attr("r",a.geomSize/2)}const l=i.pie().sortValues(null)(t),d=i.create("svg:g");return d.classed("fh-geom",!0),d.selectAll("arcs").data(l).enter().append("path").attr("d",i.arc().innerRadius(0).outerRadius(a.geomSize/2)).attr("fill",((t,e)=>o.palette(e))).style("stroke",r.theme.strokeColor).style("stroke-width",1).attr("transform",`translate(${a.rowHeight/2}, ${a.rowHeight/2})`),d},image:function(t,e,o,r,a){return i.create("svg:image").attr("y",a.geomPadding).attr("href",t).attr("height",a.geomSize).attr("width",o.width).attr("preserveAspectRatio","xMidYMid")}}}));
//# sourceMappingURL=scIB.a25747d1.js.map
