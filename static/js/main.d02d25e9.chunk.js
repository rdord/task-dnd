(this["webpackJsonptag-groups-dnd"]=this["webpackJsonptag-groups-dnd"]||[]).push([[0],{37:function(e,n,r){e.exports=r(52)},42:function(e,n,r){},43:function(e,n,r){},52:function(e,n,r){"use strict";r.r(n);var a=r(0),t=r.n(a),i=r(9),o=r.n(i),d=(r(42),r(17)),g=r(29),c=r(23),u=(r(43),{tags:{"tag-1":{id:"tag-1",name:"Tag 1",color:"#2B4D7E"},"tag-2":{id:"tag-2",name:"Tag 2",color:"#2B4D7E"},"tag-3":{id:"tag-3",name:"Tag 3",color:"#2B4D7E"},"tag-4":{id:"tag-4",name:"Tag 4",color:"#2B4D7E"},"tag-5":{id:"tag-5",name:"Tag 5",color:"#2B4D7E"},"tag-6":{id:"tag-6",name:"Tag 6",color:"#2B4D7E"}},groups:{"group-1":{id:"group-1",tagIds:["tag-1","tag-2","tag-3"]},"group-2":{id:"group-2",tagIds:["tag-4"]},"group-3":{id:"group-3",tagIds:["tag-5","tag-6"]}},groupOrder:["group-1","group-2","group-3"]}),l=r(13),p=r(14),s=r(12),f=r(34),b=r.n(f);function m(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return m=function(){return e},e}function v(){var e=Object(l.a)(["\n  padding: 8px;\n  background-color: ",";\n  min-height: 64px;\n  display: flex;\n"]);return v=function(){return e},e}function E(){var e=Object(l.a)(["\n  width: 100%;\n"]);return E=function(){return e},e}function x(){var e=Object(l.a)(["\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  width: 100%;\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n"]);return x=function(){return e},e}var O=p.a.div(x()),j=p.a.div(E()),I=p.a.div(v(),(function(e){return e.isDraggingOver?"#FCF7C1":"inherit"})),h=p.a.div(m()),y=function(e){var n=e.group,r=e.children,a=e.index;return t.a.createElement(s.b,{draggableId:n.id,index:a},(function(e,a){return t.a.createElement(O,Object.assign({ref:e.innerRef},e.draggableProps),t.a.createElement(j,null,t.a.createElement(s.c,{droppableId:n.id,direction:"horizontal",type:"tag"},(function(e,n){return t.a.createElement(I,Object.assign({ref:e.innerRef},e.droppableProps,{isDraggingOver:n.isDraggingOver}),r,e.placeholder)}))),t.a.createElement(h,e.dragHandleProps,t.a.createElement(b.a,null)))}))},D=r(67);function k(){var e=Object(l.a)(["\n  padding: 8px;\n"]);return k=function(){return e},e}var w=p.a.div(k()),B=function(e){var n=e.tag,r=e.index;return t.a.createElement(s.b,{draggableId:n.id,index:r},(function(e,r){return t.a.createElement(w,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),t.a.createElement(D.a,{key:n.name,label:n.name,style:{backgroundColor:r.isDragging?"#F3A308":n.color,color:"white",cursor:"grab"}}))}))},P=function(){var e=Object(a.useState)(u.groups),n=Object(c.a)(e,2),r=n[0],i=n[1],o=Object(a.useState)(u.groupOrder),l=Object(c.a)(o,2),p=l[0],f=l[1],b=p.map((function(e,n){var a=r[e],i=a.tagIds.map((function(e){return u.tags[e]}));return t.a.createElement(y,{key:a.id,group:a,index:n},i.map((function(e,n){return t.a.createElement(B,{key:e.id,tag:e,index:n})})))}));return t.a.createElement(s.a,{onDragEnd:function(e){var n=e.draggableId,a=e.source,t=e.destination,o=e.type;if(t&&(t.droppableId!==a.droppableId||t.index!==a.index)){if("group"===o){var c=Array.from(p);c.splice(a.index,1),c.splice(t.index,0,n),f(c)}if("tag"===o){var u=r[a.droppableId],l=r[t.droppableId];u.tagIds.splice(a.index,1),l.tagIds.splice(t.index,0,n),i((function(e){var n;return Object(g.a)({},e,(n={},Object(d.a)(n,u.id,u),Object(d.a)(n,l.id,l),n))}))}}}},t.a.createElement(s.c,{droppableId:"all-groups",type:"group"},(function(e){return t.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),b,e.placeholder)})))};o.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(P,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d02d25e9.chunk.js.map