webpackJsonp([5],{200:function(t,e,a){function n(t){a(262)}var i=a(8)(a(209),a(245),n,"data-v-149616f4",null);t.exports=i.exports},209:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{resizing:!1,resizableW:200,resizableH:200,croppa1:{},croppa2:{}}},computed:{resizableTpl:function(){return' <div class="wrapper">\n    <croppa :height="resizableH"\n            :width="resizableW"\n            class="resizable-croppa"></croppa>\n    <img src="static/resize-bottom-right.svg"\n          class="icon-resize"\n          @mousedown.stop.prevent="onResizeTouchStart">\n </div>'},resizableScript:function(){return" export default {\n    data () {\n      return {\n        resizing: false,\n        resizableW: 200,\n        resizableH: 200\n      }\n    },\n\n    mounted () {\n      document.documentElement.addEventListener('mousemove', (evt) => {\n        evt.preventDefault()\n        this.onResizeTouchMove(evt)\n      })\n      document.documentElement.addEventListener('mouseup', (evt) => {\n        evt.preventDefault()\n        this.onResizeTouchEnd(evt)\n      })\n    },\n\n    methods: {\n      onResizeTouchStart (evt) {\n        this.resizing = true\n      },\n\n      onResizeTouchMove (evt) {\n        if (!this.resizing) return\n        document.documentElement.style.cursor = 'nwse-resize'\n\n        var croppa = document.querySelector('.resizable-croppa')\n\n        this.resizableW = evt.clientX - croppa.getBoundingClientRect().left\n        this.resizableH = evt.clientY - croppa.getBoundingClientRect().top\n      },\n\n      onResizeTouchEnd (evt) {\n        this.resizing = false\n        document.documentElement.style.cursor = 'default'\n      }\n    }\n  }"},resizableStyle:function(){return".wrapper\n  position: relative\n  display: inline-block\n  font-size: 0\n  .icon-resize\n    position: absolute\n    right: 4px\n    bottom: 4px\n    font-size: 16px\n    width: 2em\n    cursor: nwse-resize"},stickerStyle:function(){return".addon\n  height: 0\n  width: 0\n  line-height: 1\n  font-size: 0\n  visibility: 0\n  border: 0"},stickerTpl:function(){return' <img src="static/favicons/android-chrome-512x512.png"\n        class="addon">\n  <croppa v-model="croppa1"\n          :width="400"\n          :height="400"\n          initial-image="/vue-croppa/static/500.jpeg"\n          @draw="onDraw">\n  </croppa>'},stickerScript:function(){return" export default {\n    data () {\n      return {\n        croppa1: {}\n      }\n    },\n\n    methods: {\n      onDraw: function (ctx) {\n        ctx.save()\n        ctx.globalAlpha = 0.7\n        ctx.drawImage(document.querySelector('.addon'), 400, 400, 400, 400)\n        ctx.restore()\n      }\n    }\n  }"},metadataTpl:function(){return' <croppa v-model="croppa2"\n          initial-image="/vue-croppa/static/500.jpeg"\n          :width="400"\n          :height="400"></croppa>\n  <br>\n  <v-btn @click="rotate">ROTATE</v-btn>\n  <v-btn @click="flipX">FLIP-X</v-btn>\n  <v-btn @click="flipY">FLIP-Y</v-btn>\n  <br>\n  <v-btn dark\n          large\n          @click="saveMetadata">SAVE METADATA</v-btn>\n  <v-btn dark\n          large\n          @click="applyMetadata">APPLY METADATA</v-btn>'},metadataScript:function(){return" export default {\n    data () {\n      return {\n        croppa2: {}\n      }\n    },\n\n    methods: {\n      rotate () {\n        this.croppa2.rotate()\n      },\n\n      flipX () {\n        this.croppa2.flipX()\n      },\n\n      flipY () {\n        this.croppa2.flipY()\n      },\n\n      saveMetadata () {\n        localStorage.setItem('metadata', JSON.stringify(this.croppa2.getMetadata()))\n      },\n\n      applyMetadata () {\n        var metadata = JSON.parse(localStorage.getItem('metadata'))\n        this.croppa2.applyMetadata(metadata)\n      }\n    }\n  }"},imagePlaceholderTpl:function(){return' <croppa v-model="croppa3"\n          :width="400"\n          :height="400">\n    <img slot="placeholder"\n         src="static/favicons/android-chrome-512x512.png">\n  </croppa>'}},mounted:function(){var t=this,e=document.createElement("script");e.src="/vue-croppa/static/ei.js",document.body.appendChild(e),document.documentElement.addEventListener("mousemove",function(e){e.preventDefault(),t.onResizeTouchMove(e)}),document.documentElement.addEventListener("mouseup",function(e){e.preventDefault(),t.onResizeTouchEnd(e)})},methods:{onResizeTouchStart:function(t){this.resizing=!0},onResizeTouchMove:function(t){if(this.resizing){document.documentElement.style.cursor="nwse-resize";var e=document.querySelector(".resizable-croppa");this.resizableW=t.clientX-e.getBoundingClientRect().left,this.resizableH=t.clientY-e.getBoundingClientRect().top}},onResizeTouchEnd:function(t){this.resizing=!1,document.documentElement.style.cursor="default"},onDraw:function(t){t.save(),t.globalAlpha=.7,t.drawImage(document.querySelector(".addon"),400,400,400,400),t.restore()},rotate:function(){this.croppa2.rotate()},flipX:function(){this.croppa2.flipX()},flipY:function(){this.croppa2.flipY()},saveMetadata:function(){localStorage.setItem("metadata",JSON.stringify(this.croppa2.getMetadata()))},applyMetadata:function(){var t=JSON.parse(localStorage.getItem("metadata"));this.croppa2.applyMetadata(t)}}}},227:function(t,e,a){e=t.exports=a(1)(),e.push([t.i,".wrapper[data-v-149616f4]{position:relative;display:inline-block;font-size:0}.wrapper .icon-resize[data-v-149616f4]{position:absolute;right:4px;bottom:4px;font-size:16px;width:2em;cursor:nwse-resize}.addon[data-v-149616f4]{height:0;width:0;line-height:1;font-size:0;visibility:0;border:0}",""])},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"demos"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Zoom Slider")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"eGpWRd","data-default-tab":"js,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa zoom slider"}},[t._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/eGpWRd/"}},[t._v("Vue Croppa zoom slider")]),t._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])])])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Upload")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            This is an example of uploading binary file. If you want to upload base64 data url string. You need to use\n            "),a("code",[t._v("generateDataUrl()")]),t._v(" method and you don't need FormData API. Usually you just send it like any other string field.\n            "),a("br"),a("br"),t._v(" "),a("p",{staticClass:"codepen",attrs:{"data-height":"637","data-theme-id":"19967","data-slug-hash":"mMweXa","data-default-tab":"js,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa upload"}},[t._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/mMweXa/"}},[t._v("Vue Croppa upload")]),t._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])])])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Download")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"qXrpmW","data-default-tab":"js,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa data url"}},[t._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/qXrpmW/"}},[t._v("Vue Croppa data url")]),t._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])])])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Resizable Container")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("div",{staticClass:"wrapper"},[a("croppa",{staticClass:"resizable-croppa",attrs:{height:t.resizableH,width:t.resizableW}}),t._v(" "),a("img",{staticClass:"icon-resize",attrs:{src:"static/resize-bottom-right.svg"},on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.onResizeTouchStart(e)}}})],1),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.resizableTpl,expression:"resizableTpl"}]},[a("code",{staticClass:"html"})]),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.resizableScript,expression:"resizableScript"}]},[a("code",{staticClass:"javascript"})]),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.resizableStyle,expression:"resizableStyle"}]},[a("code",{staticClass:"stylus"})])])])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Attachments (watermark, sticker)")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("Since v0.3.0, you can use\n            "),a("code",[t._v("@draw")]),t._v(" event to apply attachment on image. Things like watermarks and stickers are now possible.")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[a("strong",[t._v(" If you want to dynamically manipulating the sticker, please check out\n              "),a("a",{attrs:{href:"https://github.com/zhanziyang/vue-croppa/issues/39"}},[t._v("this issue")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[a("img",{staticClass:"addon",attrs:{src:"static/favicons/android-chrome-512x512.png"}}),t._v(" "),a("croppa",{attrs:{width:400,height:400,"initial-image":"/vue-croppa/static/500.jpeg"},on:{draw:t.onDraw},model:{value:t.croppa1,callback:function(e){t.croppa1=e},expression:"croppa1"}}),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.stickerTpl,expression:"stickerTpl"}]},[a("code",{staticClass:"html"})]),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.stickerScript,expression:"stickerScript"}]},[a("code",{staticClass:"javascript"})])],1)])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Use Metadata")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("Inspired by\n            "),a("a",{attrs:{href:"https://github.com/zhanziyang/vue-croppa/issues/24"}},[t._v("this issue")]),t._v(", since v0.3.0, you can get the metadata that describes current user manipulations (moving, zooming, rotating), save it somewhere, and later you can apply it to retrieve the previous state. These are done by using\n            "),a("code",[t._v("getMetadata()")]),t._v(" and\n            "),a("code",[t._v("applyMetadata(metadata)")]),t._v(" methods.")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v('In the following exmaple, first do some manipulations like zooming, moving or rotating, and then click "Save Metadata" button to save it locally, then do some manipulations again, now click "Apply Metadata" to get back to the previous state.')]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("croppa",{attrs:{"initial-image":"/vue-croppa/static/500.jpeg",width:400,height:400},model:{value:t.croppa2,callback:function(e){t.croppa2=e},expression:"croppa2"}}),t._v(" "),a("br"),t._v(" "),a("v-btn",{on:{click:t.rotate}},[t._v("ROTATE")]),t._v(" "),a("v-btn",{on:{click:t.flipX}},[t._v("FLIP-X")]),t._v(" "),a("v-btn",{on:{click:t.flipY}},[t._v("FLIP-Y")]),t._v(" "),a("br"),t._v(" "),a("v-btn",{attrs:{dark:"",large:""},on:{click:t.saveMetadata}},[t._v("SAVE METADATA")]),t._v(" "),a("v-btn",{attrs:{dark:"",large:""},on:{click:t.applyMetadata}},[t._v("APPLY METADATA")]),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.metadataTpl,expression:"metadataTpl"}]},[a("code",{staticClass:"html"})]),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.metadataScript,expression:"metadataScript"}]},[a("code",{staticClass:"javascript"})])],1)])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Image Placeholder")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("If you are not satified with the simple text placeholder. Since v0.3.0, you can apply an\n            "),a("code",[t._v("<img>")]),t._v(" slot named\n            "),a("code",[t._v("placeholder")]),t._v(" to get an image placeholder! The image will be draw on croppa under the placeholder text.")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("croppa",{attrs:{width:400,height:400},model:{value:t.croppa3,callback:function(e){t.croppa3=e},expression:"croppa3"}},[a("img",{attrs:{slot:"placeholder",src:"static/favicons/android-chrome-512x512.png"},slot:"placeholder"})]),t._v(" "),a("br"),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.imagePlaceholderTpl,expression:"imagePlaceholderTpl"}]},[a("code",{staticClass:"html"})])],1),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("\n            If the image in under another domain, there will be problems, but it can be solved. Please check out\n            "),a("a",{attrs:{href:"https://github.com/zhanziyang/vue-croppa/issues/33"}},[t._v("this issue")]),t._v(" to learn more.\n          ")])])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Custom Loading")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[t._v("Since v1.1.0, vue-croppa supports built-in loading. But you may find it not fancy enough. Here is a demo that shows you how to make croppa use your own loading spinner.")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"xXvJeM","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa - custom loading"}},[t._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/xXvJeM/"}},[t._v("Vue Croppa - custom loading")]),t._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])])])],1),t._v(" "),a("br"),t._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!1}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Clip Image (1.2.0+)")]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("h5",[t._v("Using image-border-radius")]),t._v(" "),a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"jZNmOa","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa rounded corners"}},[t._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/jZNmOa/"}},[t._v("Vue Croppa rounded corners")]),t._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("h5",[t._v("Using clip plugin")]),t._v(" "),a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"GQKmJq","data-default-tab":"js,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa clip plugin"}},[t._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/GQKmJq/"}},[t._v("Vue Croppa clip plugin")]),t._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[t._v("@zhanziyang")]),t._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])])])],1)],1)],1)],1)},staticRenderFns:[]}},262:function(t,e,a){var n=a(227);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(9)("4ebb06bc",n,!0,{})}});