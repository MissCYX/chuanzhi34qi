webpackJsonp([10],{153:function(n,t,r){var s=r(154);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);r(2)("36c74847",s,!1)},154:function(n,t,r){(n.exports=r(1)(void 0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*设置进入后透明度0，设置0就一直看不见\r\n.myball-enter-to{\r\n    opacity: 0;\r\n}\r\n*/\n.myball-leave[data-v-60b1d141]{\r\n    opacity: 0;\n}\r\n\r\n/*进入中的动画*/\n.myball-enter-active[data-v-60b1d141] {\r\n    animation: bounce-in-data-v-60b1d141 1s;\n}\n@keyframes bounce-in-data-v-60b1d141 {\n0% {\r\n        transform: translate3d(0, 0, 0);\n}\n50% {\r\n        transform: translate3d(140px, -50px, 0);\n}\n75% {\r\n        transform: translate3d(160px, 0px, 0);\n}\n100% {\r\n        transform: translate3d(140px, 300px, 0);\n}\n}\n.swiper[data-v-60b1d141] {\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    overflow: hidden;\n}\n.outer-swiper[data-v-60b1d141],\r\n.product-desc[data-v-60b1d141],\r\n.product-props[data-v-60b1d141],\r\n.product-info[data-v-60b1d141] {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 3px;\n}\r\n\r\n\r\n/*请ulpadding*/\n.outer-swiper ul[data-v-60b1d141],\r\n.product-desc ul[data-v-60b1d141],\r\n.product-props ul[data-v-60b1d141],\r\n.product-info ul[data-v-60b1d141] {\r\n    padding: 0;\n}\n.product-desc ul li[data-v-60b1d141],\r\n.product-props ul li[data-v-60b1d141],\r\n.product-info ul li[data-v-60b1d141] {\r\n    list-style: none;\r\n    font-size: 15px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-60b1d141] {\r\n    color: blue;\r\n    font-size: 22px;\r\n    font-weight: bold;\n}\n.product-desc ul[data-v-60b1d141] >:nth-child(1) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-60b1d141],\r\n.product-info ul[data-v-60b1d141],\r\n.product-props ul[data-v-60b1d141] {\r\n    padding-left: 10px;\n}\n.price-li span[data-v-60b1d141] {\r\n    color: red;\r\n    font-size: 25px;\n}\n.price-li s[data-v-60b1d141] {\r\n    margin-right: 16px;\n}\r\n\r\n\r\n/*加减*/\n.number-li span[data-v-60b1d141] {\r\n    display: inline-block;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    width: 25px;\n}\r\n\r\n\r\n/*商品参数*/\n.product-props ul[data-v-60b1d141] >:nth-child(1) {\r\n    text-align: left;\n}\n.product-props ul[data-v-60b1d141]:not(:nth-child(1)) {\r\n    margin-left: 40px;\n}\n.product-info ul[data-v-60b1d141] {\r\n    margin-bottom: 70px;\r\n    padding: 0 5;\n}\n.number-li span[data-v-60b1d141] {\r\n    text-align: center;\n}\n.number-li[data-v-60b1d141] >:nth-child(2) {\r\n    width: 40px;\n}\n.ball[data-v-60b1d141] {\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 440px;\r\n    left: 120px;\r\n    display: inline-block;\r\n    z-index: 9999;\n}\r\n",""])},155:function(n,t,r){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(r(7)),o=s(r(8));t.default={data:function(){return{goodsInfo:{},swipeUrl:"",showBall:!1,pickNum:1}},methods:{addShopcart:function(){this.showBall=!0,i.default.addOrUpdate({id:this.goodsInfo.id,num:this.pickNum})},afterEnter:function(){this.showBall=!1,o.default.$emit("addShopcart",this.pickNum)},substract:function(){this.pickNum--},add:function(){this.pickNum++},goGoodsShow:function(){this.$router.push({name:"goods.detail.show",query:{newsId:this.goodsInfo.id}})},goGoodsComment:function(){this.$router.push({name:"goods.comment",query:{cid:this.goodsInfo.id}})}},created:function(){var n=this,t=this.$route.params.goodsId;this.swipeUrl="getthumimages/"+this.$route.params.goodsId,this.$axios.get("goods/getinfo/"+t).then(function(t){n.goodsInfo=t.data.message[0]}).catch(function(n){return console.log(n)})}}},156:function(n,t,r){"use strict";var s=function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("nav-bar",{attrs:{title:"商品详情"}}),this._v(" "),t("div",{staticClass:"outer-swiper"},[t("div",{staticClass:"swiper"},[t("my-swipe",{attrs:{url:this.swipeUrl}})],1)]),this._v(" "),t("div",{staticClass:"product-desc"},[t("ul",[t("li",[t("span",{staticClass:"product-desc-span"},[this._v("\n                "+this._s(this.goodsInfo.title)+"\n            ")])]),this._v(" "),t("li",{staticClass:"price-li"},[this._v("市场价：\n                "),t("s",[this._v("￥"+this._s(this.goodsInfo.market_price))]),this._v(" 销售价："),t("span",[this._v("￥"+this._s(this.goodsInfo.sell_price))])]),this._v(" "),t("li",{staticClass:"number-li"},[this._v("购买数量："),t("span",{on:{click:this.substract}},[this._v("-")]),t("span",[this._v(this._s(this.pickNum))]),t("span",{on:{click:this.add}},[this._v("+")])]),this._v(" "),t("li",[t("mt-button",{attrs:{type:"primary"}},[this._v("立即购买")]),this._v(" "),t("mt-button",{attrs:{type:"danger"},on:{click:this.addShopcart}},[this._v("加入购物车")])],1)])]),this._v(" "),t("transition",{attrs:{name:"myball"},on:{"after-enter":this.afterEnter}},[this.showBall?t("div",{staticClass:"ball"}):this._e()]),this._v(" "),t("div",{staticClass:"product-props"},[t("ul",[t("li",[this._v("商品参数")]),this._v(" "),t("li",[this._v("商品货号："+this._s(this.goodsInfo.goods_no))]),this._v(" "),t("li",[this._v("库存情况："+this._s(this.goodsInfo.stock_quantity)+"件")]),this._v(" "),t("li",[this._v("上架时间："+this._s(this._f("convertTime")(this.goodsInfo.add_time)))])])]),this._v(" "),t("div",{staticClass:"product-info"},[t("ul",[t("li",[t("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:this.goGoodsShow}},[this._v("图文介绍")])],1),this._v(" "),t("li",[t("mt-button",{attrs:{type:"danger",size:"large",plain:""},on:{click:this.goGoodsComment}},[this._v("商品评论")])],1)])])],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};t.a=i},99:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(155),i=r.n(s),o=r(156),a=!1,d=function(n){a||r(153)},e=r(3)(i.a,o.a,!1,d,"data-v-60b1d141",null);e.options.__file="src\\components\\Goods\\GoodsDetail.vue",e.esModule&&Object.keys(e.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=e.exports}});