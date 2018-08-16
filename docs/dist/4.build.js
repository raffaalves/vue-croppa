webpackJsonp([4],{203:function(e,t,a){function i(e){a(263)}var s=a(8)(a(212),a(248),i,null,null);e.exports=s.exports},212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{myCroppa:{}}},mounted:function(){var e=document.createElement("script");e.src="/vue-croppa/static/ei.js",document.body.appendChild(e)}}},228:function(e,t,a){t=e.exports=a(1)(),t.push([e.i,"",""])},248:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"file-input"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!0}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Click to choose a file")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[e._v("By default, when there is no image on croppa, users can click or touch (on mobile) to open the os file chooser to choose a file.")]),e._v(" "),a("v-layout",{staticClass:"pt-2 pl-2"},[a("v-flex",[a("img",{attrs:{src:"http://i.imgur.com/GAKSc4K.gif",width:"100%"}})]),e._v(" "),a("v-flex",[a("video",{staticStyle:{height:"315px"},attrs:{autoplay:"",loop:""}},[a("source",{attrs:{type:"video/mp4",src:"https://i.imgur.com/ENmVbdo.mp4"}})])])],1),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[e._v("You can disable this feature with\n            "),a("code",[e._v(':disable-click-choose="true"')]),e._v(" -\n            "),a("router-link",{attrs:{to:"/customization?sec=disablings"}},[e._v("Try here")]),e._v(".\n          ")],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!0}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Call the method - chooseFile()")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[e._v("If you want to programmatically open the os file chooser, you can call the\n            "),a("code",[e._v("chooseFile()")]),e._v(' method. This is very useful when you have disabled the default "click to choose" feature and want to implement your own trigger.')]),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"eEgQbK","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa choose file"}},[e._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/eEgQbK/"}},[e._v("Vue Croppa choose file")]),e._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[e._v("@zhanziyang")]),e._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])])])],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!0}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Drag and drop a file")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[e._v("On PC devices, users can drag and drop an image file to croppa.")]),e._v(" "),a("v-layout",{staticClass:"pt-2 pl-2"},[a("v-flex",[a("img",{attrs:{src:"http://i.imgur.com/UaCzMPd.gif",width:"400"}})])],1),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[e._v("You can disable this feature with\n            "),a("code",[e._v(':disable-drag-and-drop="true"')]),e._v(" -\n            "),a("router-link",{attrs:{to:"/customization?sec=disablings"}},[e._v("Try here")]),e._v(".\n          ")],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!0}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Use a remote file")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[e._v('If you don\'t want users to upload local files but want to use remote image files instead, you can use the "initial image" feature.\n            '),a("strong",[e._v("Just remember that you need to explicitly call the\n              "),a("code",[e._v("refresh()")]),e._v(" method after inital image changes to update the view.")]),e._v(' About the usage of "initial image", please see it\n            '),a("router-link",{attrs:{to:"/customization?sec=initial-image"}},[e._v("here")]),e._v(".\n          ")],1)])],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!0}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Remove")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[e._v('The current image can be removed by clicking the built-in "remove button" or call the\n            '),a("code",[e._v("remove()")]),e._v(" method.\n          ")]),e._v(" "),a("v-layout",{staticClass:"pt-2 pl-2"},[a("v-flex",[a("img",{attrs:{src:"http://i.imgur.com/gxBsFG2.gif",width:"350"}})])],1),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"RZKEbr","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa remove file"}},[e._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/RZKEbr/"}},[e._v("Vue Croppa remove file")]),e._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[e._v("@zhanziyang")]),e._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[e._v("By the way, you can use\n            "),a("code",[e._v("hasImage()")]),e._v(" method to detect whether there is an image or not currently on croppa.")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[e._v('About hiding or styling the built-in "remove button", please see\n            '),a("router-link",{attrs:{to:"/customization?sec=appearance"}},[e._v("here")]),e._v(".\n          ")],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:!0}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Related Events")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[e._v("\n            These are input related events that you can listen to:\n          ")]),e._v(" "),a("div",{staticClass:"pt-2 pl-2"},[a("ul",[a("li",[a("code",[e._v("initial-image-loaded")]),e._v(": (v0.3.2+) emitted when initial image loaded. It can be useful when you provide initial image with the initial-image prop.")]),e._v(" "),a("li",[a("code",[e._v("file-choose")]),e._v(": emitted whenever a new file was chosen, no matter it is valid or not.")]),e._v(" "),a("li",[a("code",[e._v("file-size-exceed")]),e._v(",\n                "),a("code",[e._v("file-type-mismatch")]),e._v(": emitted when the chosen file is not valid.\n                "),a("router-link",{attrs:{to:"/customization?sec=filter"}},[e._v("See more here")])],1),e._v(" "),a("li",[a("code",[e._v("new-image")]),e._v(": (v0.2.0+) emitted when a new valid image is received and read successfully.")]),e._v(" "),a("li",[a("code",[e._v("new-image-drawn")]),e._v(": (v1.0.0+) emitted when a new valid image is received and read successfully.")]),e._v(" "),a("li",[a("code",[e._v("image-remove")]),e._v(": emitted whenever the current image is removed from croppa.")]),e._v(" "),a("li",[a("code",[e._v("loading-start")]),e._v(": (v1.1.0+) emitted when image loading phase starts.")]),e._v(" "),a("li",[a("code",[e._v("loading-end")]),e._v(": (v1.1.0+) emitted when image loading phase ends.")])])]),e._v(" "),a("div",{staticClass:"pt-2 pl-2 pb-2"},[a("p",{staticClass:"codepen",attrs:{"data-height":"300","data-theme-id":"19967","data-slug-hash":"oeBJXN","data-default-tab":"html,result","data-user":"zhanziyang","data-embed-version":"2","data-pen-title":"Vue Croppa input events"}},[e._v("See the Pen\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang/pen/oeBJXN/"}},[e._v("Vue Croppa input events")]),e._v(" by Chris (\n              "),a("a",{attrs:{href:"https://codepen.io/zhanziyang"}},[e._v("@zhanziyang")]),e._v(") on\n              "),a("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])])])],1)],1)],1)],1)},staticRenderFns:[]}},263:function(e,t,a){var i=a(228);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(9)("6111d80f",i,!0,{})}});