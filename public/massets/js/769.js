/*! For license information please see 769.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[769],{72119:(e,t,s)=>{s.d(t,{E0:()=>o,Hn:()=>d,NZ:()=>a,Oq:()=>l,Ql:()=>u,X7:()=>h,ox:()=>r,xh:()=>c,yV:()=>n});var i=s(83402);const n=.01,a=.001,o=!0,r={highResThreshold:1081,desktopSize:192,desktopSizeHighRes:320,mobileSize:128},h={smoothness:.4,perspective:{fov:40,thresholdClose:1,thresholdFar:8,offsetClose:.25,offsetFar:.5,scale:1},ortho:{fov:5,thresholdClose:5,thresholdFar:20,offsetClose:15,offsetFar:30,scale:4}},c={desktop:i.l1.Edges,floorplan:i.l1.Axes,mobile:i.l1.Edges,alt:i.l1.Free,shift:i.l1.PlanarAxes,shiftAlt:i.l1.EdgesAndPlanarAxes,disabled:i.l1.Free},l={mobile:.15,desktop:.1},d={SCALE:.1,SCALE_NDC:.5,SCALE_ASPECT:.035,SCALE_DISTANCE:.025},u="measurements"},7402:(e,t,s)=>{s.d(t,{g:()=>c});var i=s(81396),n=s(17878),a=s(56512),o=s(82814),r=s(12529),h=s(53203);class c extends o.S{constructor(e,t,s=n.o.ALL){super(),this._opacity=1,this._chunks=[],this.size=new i.Vector3,this.center=new i.Vector3,this.built=!1,this.layers.mask=s.mask,this.name=`RoomMesh:${e}-${t}`,this.meshGroup=e,this.meshSubgroup=t,this.renderOrder=r.z.default,this.onBeforeRender=(e,t,s,i,n,a)=>{this.updateUniforms(n,a)}}dispose(){this.reset()}reset(){this._chunks.length=0,this.geometry.dispose(),delete this.onBuild,delete this.onOpacityUpdate,this.built=!1}addChunk(e){-1===this._chunks.indexOf(e)&&this._chunks.push(e)}getChunk(e){return this._chunks[e]}build(){if(this.built)throw new Error("build() should only be called once");if(!this._chunks.length)return;const e=(0,a.qf)(this._chunks.map((e=>e.geometry)));e.clearGroups();let t=0;this.material=[],this._chunks.forEach(((s,i)=>{s.geometry&&s.geometry.index&&(e.addGroup(t,s.geometry.index.count,i),t+=s.geometry.index.count,s.geometry.dispose(),s.geometry=e,s.notifyOnMaterialUpdated((e=>{Array.isArray(this.material)&&(this.material[i]=e),this.onMaterialUpdate&&this.onMaterialUpdate()})),s.onOpacityUpdate=e=>{this.opacity=e})})),this.geometry=e,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=this._chunks.map((e=>e.material)),this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}buildWithTileChunk(e){if(this.built)return;const{meshGroup:t,meshSubgroup:s,lod:i}=e;this.name=`RoomMesh:${i}-${t}-${s}-${e.chunkIndex}`,this.meshGroup=t,this.meshSubgroup=s,this._chunks.push(e),e.notifyOnMaterialUpdated((e=>{this.material=e,this.onMaterialUpdate&&this.onMaterialUpdate()})),e.onOpacityUpdate=e=>{this.opacity=e},this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}updateUniforms(e,t){e instanceof i.RawShaderMaterial&&(t?this.chunks[t.materialIndex].onBeforeDraw(e):this.chunks.length&&this.chunks[0].onBeforeDraw(e))}get boundingBox(){return(0,a.A5)(this.geometry)}set opacity(e){e!==this.opacity&&(this._opacity=e,this.raycastEnabled=e>h.xx.FADE_CLICKABLE_THRESHOLD,this.renderOrder=e<h.xx.FADE_OPAQUE?r.z.ghostFloor:r.z.default,this.onOpacityUpdate&&this.onOpacityUpdate(e))}get opacity(){return this._opacity}get chunks(){return this._chunks}getSortKey(){return this.chunks.length?this._chunks[0].getSortKey():0}}},38987:(e,t,s)=>{s.d(t,{u:()=>n});var i=s(19663);class n extends i.m{constructor(e=null){super(),this.id="SET_MOUSE_CURSOR",this.payload={cursor:e}}}},34956:(e,t,s)=>{var i;s.d(t,{C:()=>i}),function(e){e.NONE="none",e.DEFAULT="default",e.MOVE="move",e.MOVE_LF="col-resize",e.MOVE_UD="row-resize",e.XHAIR="crosshair",e.PLUS="cell",e.QUESTION="help",e.NOPE="not-allowed",e.FINGER="pointer",e.TEXT="text",e.TEXT_VERT="vertical-text",e.ZOOM_IN="zoom-in",e.ZOOM_OUT="zoom-in",e.GRAB="grab",e.GRABBING="grabbing",e.ARROW_R="e-resize",e.ARROW_L="w-resize",e.ARROW_U="n-resize",e.ARROW_D="s-resize",e.ARROW_UR="ne-resize",e.ARROW_UL="nw-resize",e.ARROW_DR="se-resize",e.ARROW_DL="sw-resize",e.ARROW_LR="ew-resize",e.ARROW_UD="ns-resize",e.ARROW_URDL="nesw-resize",e.ARROW_ULDR="nwse-resize",e.ROOMBOUNDS_DEFAULT="rbe-default",e.ROOMBOUNDS_MOVING="rbe-moving",e.ROOMBOUNDS_PLACE_NODE="rbe-place-node",e.ROOMBOUNDS_FINISH_ROOM="rbe-finish-room"}(i||(i={}))},56163:(e,t,s)=>{s.d(t,{K:()=>r});var i=s(52528),n=s(71166),a=s(63319);const o=new i.v({});class r{constructor(e,t,s){this.commandBinder=e,this.layersData=t,this.dataTypeGroup=s,this.textParser=o,this.enabled=!0,this.bindings=[]}getGroupingId(e){switch(e){case a.HH.TYPE:return this.getTypeId();case a.HH.FLOOR:return this.getFloorId();case a.HH.ROOM:return this.getRoomId();case a.HH.LAYER:return this.getLayerGroupId();case a.HH.DATE:return this.dateBucket}}getFloorId(){return this.floorId}getRoomId(){return this.roomId}getDateBucket(){return this.dateBucket}getTypeId(){return this.typeId}supportsBatchDelete(){return!1}supportsLayeredCopyMove(){return!1}getLayerGroupId(){var e,t;const s=null===(e=this.layersData)||void 0===e?void 0:e.getBaseLayerId(),i=null===(t=this.layersData)||void 0===t?void 0:t.getViewLayerId();return this.layerId&&i&&this.layerId===s?i:this.layerId}isLayerVisible(){return!this.layersData||!this.layerId||this.layersData.layerVisible(this.layerId)}onSelect(e,t,s){this.commandBinder.issueCommand(new n.IL(this.id,this.typeId))}registerBindings(){}cancelBindings(){this.bindings.forEach((e=>e.cancel()))}}},83402:(e,t,s)=>{s.d(t,{l1:()=>o,r2:()=>c});var i=s(81396),n=s(69505),a=s(90304);var o;!function(e){e[e.Axes=1]="Axes",e[e.PlanarAxes=2]="PlanarAxes",e[e.EdgesAndPlanarAxes=3]="EdgesAndPlanarAxes",e[e.Edges=4]="Edges",e[e.Free=5]="Free",e[e.Locked=6]="Locked"}(o||(o={}));const r={[a.eD.UP]:{dir:Object.freeze(a.fU.UP.clone())},[a.eD.DOWN]:{dir:Object.freeze(a.fU.DOWN.clone())},[a.eD.BACK]:{dir:Object.freeze(a.fU.BACK.clone())},[a.eD.LEFT]:{dir:Object.freeze(a.fU.LEFT.clone())},[a.eD.RIGHT]:{dir:Object.freeze(a.fU.RIGHT.clone())},[a.eD.FORWARD]:{dir:Object.freeze(a.fU.FORWARD.clone())}},h={[a.eD.HORIZONTAL_PLANE]:{dir:Object.freeze(a.fU.HORIZONTAL_PLANE.clone())}},c=(()=>{let e=0;const t=new i.Vector3,s=new i.Vector3,c=new i.Vector3,l=new i.Vector3,d=999,u=Object.freeze(a.fU.ZERO.clone()),g=Object.keys(r).map((e=>Object.assign(Object.assign({},r[e]),{name:e,angleTo:d}))),p=Object.keys(h).map((e=>Object.assign(Object.assign({},h[e]),{name:e,angleTo:d}))),b=e=>(e+3)%2;let f=g[0];return(i,r,h=o.Axes)=>{if(h===o.Free)return{position:r.clone(),constrainedAxis:u,axisName:a.eD.NONE};if(g.forEach((e=>e.angleTo=d)),p.forEach((e=>e.angleTo=d)),c.copy(r).sub(i),e=c.length(),e<.05)return{position:r.clone(),constrainedAxis:u,axisName:a.eD.NONE};l.copy(c).normalize();const O=.05*Math.min(e,1);if(h!==o.Locked){for(const e of g){const t=(0,n.ZY)(l.angleTo(e.dir));t<f.angleTo&&(f=e),e.angleTo=t}if(f.angleTo>20){const e=Math.abs(c.y);e*e<O&&(f=p[0])}}t.set(i.x*b(f.dir.x),i.y*b(f.dir.y),i.z*b(f.dir.z)),s.set(r.x*Math.abs(f.dir.x),r.y*Math.abs(f.dir.y),r.z*Math.abs(f.dir.z)).add(t);return h===o.Locked||s.distanceToSquared(r)<O?{position:s.clone(),constrainedAxis:f.dir,axisName:f.name}:{position:r.clone(),constrainedAxis:u,axisName:a.eD.NONE}}})()},67971:(e,t,s)=>{s.d(t,{$7:()=>l,uc:()=>u,N3:()=>c});var i=s(81396),n=s(4679),a=s(59370),o=s(69505),r=s(49827),h=s(73121);var c;(0,n.Dy)({unicodeFontsURL:"https://static.matterport.com/webgl-vendors/unicode-font-resolver/1.0.1/"}),function(e){e.WORLD="world",e.NDC="ndc"}(c||(c={}));class l extends i.Object3D{constructor(e,t=c.WORLD){var s,a,o,r;super(),this.config=e,this.scaleType=t,this.unscaledWidth=0,this.unscaledHeight=0,this.labelTextMaterial=new i.MeshBasicMaterial,this.bindings=[];const h=this.config.background||this.config.backgroundAsCollider;if(h){this.config.backgroundOpacity=void 0!==this.config.backgroundOpacity?this.config.backgroundOpacity:1,this.config.backgroundOpacity=this.config.background?this.config.backgroundOpacity:0;const t=new i.BoxGeometry(1,1,.01),s=new i.MeshBasicMaterial({color:e.backgroundColor,transparent:!0,depthTest:this.config.backgroundOpacity>0&&!e.disableDepth,depthWrite:this.config.backgroundOpacity>0&&!e.disableDepth,opacity:this.config.backgroundOpacity,stencilRef:1,stencilFail:i.KeepStencilOp,stencilZFail:i.KeepStencilOp,stencilZPass:i.ReplaceStencilOp,stencilFunc:i.AlwaysStencilFunc,stencilWrite:!0});this.labelBackgroundMesh=new this.config.backgroundColliderType(t,s),this.labelBackgroundMesh.position.z=-.01,this.labelBackgroundMesh.name="Label Background",this.collider=this.labelBackgroundMesh,this.add(this.labelBackgroundMesh)}const l=this.labelTextMesh=new n.xv;l.material=this.labelTextMaterial,l.name="Label Text",l.text=e.text||"",l.renderOrder=10,l.font=`${null!==(s=e.assetBasePath)&&void 0!==s?s:""}${e.fontPath}`,l.lang=e.lang,l.fontSize=1,l.fontWeight=700,l.anchorX="50%",l.anchorY="50%",l.outlineWidth=e.outline?e.outlineWidth:0,l.maxWidth=e.wordWrapWidth,l.textAlign=e.align,h&&(l.raycast=()=>{}),l.addEventListener("synccomplete",(()=>{var e;const[t,s,i,n]=l.textRenderInfo.visibleBounds;let a=i-t,o=n-s;h&&(a+=this.config.backgroundBorderWidth,o+=this.config.backgroundBorderHeight,this.labelBackgroundMesh.scale.set(a,o,1)),this.unscaledWidth=a,this.unscaledHeight=o,this.aspect=a/Math.max(o,.001),l.position.set((t+i)/-2,(s+n)/-2,0),null===(e=this._onGeomUpdate)||void 0===e||e.call(this)})),this.scaleFactor=null!==(a=e.scale)&&void 0!==a?a:1,this.opacity=null!==(o=e.opacity)&&void 0!==o?o:1,this.setColor(null!==(r=e.color)&&void 0!==r?r:0),this.add(l),l.sync(),this.name="Label Container"}dispose(){this.bindings.forEach((e=>e.cancel())),this.labelTextMesh.dispose()}onGeomUpdate(e){this._onGeomUpdate=e}get text(){return this.config.text}set text(e){this.config.text=e,this.labelTextMesh.text=e,this.labelTextMesh.sync()}get mesh(){return this.labelTextMesh}getUnscaledSize(){return{width:this.unscaledWidth,height:this.unscaledHeight}}get scaleFactor(){return this.config.scale}set scaleFactor(e){this.config.scale=e,this.scale.setScalar(e)}get opacity(){return void 0!==this.config.opacity?this.config.opacity:1}set opacity(e){if(e!==this.config.opacity){this.config.opacity=e;const t=e>0&&!this.config.disableDepth;if(this.config.background){const s=this.labelBackgroundMesh.material;s.opacity=Math.min(this.config.backgroundOpacity||1,e),s.depthWrite=e>.15,s.depthTest=t}const s=this.labelTextMaterial;s.opacity=e,s.depthTest=t,this.visible=e>0}}setColor(e){this.labelTextMaterial.color.set(e)}setRenderLayer(e){this.labelTextMesh.layers.mask=e.mask,this.labelBackgroundMesh&&(this.labelBackgroundMesh.layers.mask=e.mask)}setRenderOrder(e){this.renderOrder=e,this.labelTextMesh.renderOrder=e,this.labelBackgroundMesh&&(this.labelBackgroundMesh.renderOrder=e)}setPosition(e,t=(e=>e)){this.position.copy(t(e))}setOrientation(e,t=0){this.quaternion.copy(e),0!==t&&this.rotateZ(-t*o.Ue)}scaleBillboard(e,t,s,i,n,o,l=d.SCALE_DEFAULT){if(0!==s.elements[15])this.scaleFactor=.2*l*i*(d.ORTHO_IDEAL_HEIGHT/n);else{const u=(0,a.D_)(this.position,e,t,s.asThreeMatrix4()),g=Math.abs(u.x);if(g<1){const t=(0,h.mY)(s,e,this.position,n,l),a=((0,r.uZ)(o,1,2.5)+i)*d.SCALE_ASPECT,u=1+d.SCALE_NDC-g*d.SCALE_NDC-a,p=Math.max(Math.min(1/t*u,3),.001);this.scaleType===c.NDC?this.scaleFactor=p:this.scaleFactor=Math.min(p*d.NDC_MULT,l*d.SCALE_WORLD)}else this.scaleFactor=.001}}}const d={SCALE_DEFAULT:.1,SCALE_WORLD:4,SCALE_NDC:.5,SCALE_ASPECT:.035,DEPTH_WRITE_THRESHOD:.15,ORTHO_IDEAL_HEIGHT:1500,NDC_MULT:1.15};class u{constructor(e){this.currentTextConfig=u.defaultTextConfig,e?this.updateTextStyle(e):this.updateTextStyle(u.defaultTextConfig)}updateTextStyle(e){this.currentTextConfig=Object.assign(Object.assign({},this.currentTextConfig),e)}createLabel(e={text:""}){return new l(Object.assign(Object.assign({},this.currentTextConfig),e))}static makeConfig(e){return Object.assign(Object.assign({},u.defaultTextConfig),e)}}u.defaultTextConfig={text:"",fontPath:"fonts/roboto-700.woff",align:"center",wordWrapWidth:void 0,color:"black",backgroundColor:"white",backgroundBorderWidth:.9,backgroundBorderHeight:.7,background:!0,backgroundAsCollider:!0,backgroundColliderType:i.Mesh,scale:1,outline:!1,outlineWidth:.06}}}]);