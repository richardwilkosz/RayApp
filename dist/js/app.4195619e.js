(function(e){function t(t){for(var r,o,a=t[0],u=t[1],c=t[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f52":function(e,t,n){},1771:function(e,t,n){var r={"./Constants":"ac8d","./Constants.js":"ac8d","./logo-firebase.png":"68ac","./logo-firebase.svg":"1c5b","./logo-flaticon.png":"c5a8","./logo-freepik.png":"1f7f","./logo-ray.png":"f64a","./logo-tmdb.svg":"6c33","./logo-vue.png":"e669","./logo-vuetify.svg":"2251","./movie-placeholder.jpg":"7c21","./ownedMovieList.ts":"8428"};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="1771"},"1c5b":function(e,t,n){e.exports=n.p+"img/logo-firebase.eedfdbf5.svg"},"1f7f":function(e,t,n){e.exports=n.p+"img/logo-freepik.93f5cd57.png"},2251:function(e,t,n){e.exports=n.p+"img/logo-vuetify.d0c931a6.svg"},"26dd":function(e,t,n){"use strict";n("8e84")},"2af9":function(e,t,n){"use strict";n("8aaa")},"50e6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("AppBar",{attrs:{genres:e.genres,ownedMovieTitles:e.getOwnedMovieTitles()},on:{"update-search":e.search,"update-sort":e.sort,"update-filter":e.filter,"menu-view-all":e.queryAllOwned}}),n("v-main",[n("MovieList",{attrs:{ownedMovies:e.ownedResults,unownedMovies:e.unownedResults,genres:e.genres,isLoading:e.isLoading,isSortingByYear:e.isSortingByYear},on:{"update-sort":e.sort,"update-filter":e.filter}})],1),n("AppFooter")],1)},i=[],o=(n("4160"),n("caad"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("bc3a")),a=n.n(o),u=n("ac8d"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:""}},[n("AppLogo"),n("v-spacer"),n("SearchBar",{attrs:{ownedMovieTitles:e.ownedMovieTitles},on:{"update-search":e.updateSearch}}),n("v-spacer"),n("div",{staticClass:"d-sm-none ml-2"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-tune")])],1)],1),n("div",{staticClass:"d-none d-sm-flex mr-3"},[n("SortMenu",{on:{"update-sort":e.updateSort}}),n("FilterMenu",{attrs:{genres:e.genres},on:{"update-filter":e.updateFilter}})],1)],1)},l=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex"},[r("v-img",{attrs:{src:n("f64a"),"max-height":"32","max-width":"32"}}),r("v-toolbar-title",{staticClass:"mx-3"},[e._v("Ray")])],1)},f=[],p=n("2877"),v={},h=Object(p["a"])(v,d,f,!1,null,null,null),g=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-combobox",{staticClass:"mt-6",attrs:{solo:"",flat:"",dense:"",clearable:"",id:"searchBar",placeholder:"Search movies","append-icon":"","search-input":e.searchInput,items:e.suggestedMovieTitles},on:{"update:searchInput":function(t){e.searchInput=t},"update:search-input":[function(t){e.searchInput=t},function(t){return e.updateSearch()}],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.endSearch()},"click:clear":function(t){return e.clearSearch()}},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[n("v-subheader",[e._v("SUGGESTED SEARCHES")])]},proxy:!0}])})},w=[],b=n("2ef0"),B=n.n(b),A={data:function(){return{searchInput:"",suggestedMovieTitles:new Array}},props:{ownedMovieTitles:Array},methods:{updateSearch:function(){this.suggestedMovieTitles=this.searchInput?this.ownedMovieTitles:new Array,this.emitSearch()},emitSearch:B.a.debounce((function(){this.$emit("update-search",this.searchInput?this.searchInput:"*")}),750),endSearch:function(){this.$children[0].blur()},clearSearch:function(){this.$emit("update-search","*")}}},I=A,M=(n("c2c9"),Object(p["a"])(I,m,w,!1,null,null,null)),x=M.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[n("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",s,!1),r),[n("v-icon",{staticClass:"d-none d-md-flex",attrs:{left:""}},[e._v("mdi-sort")]),e._v(" Sort By ")],1)]}}])},[n("v-list",[n("v-list-item-group",{attrs:{color:"primary",mandatory:""},on:{change:function(t){return e.selectSort(e.input)}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},e._l(e.sortItems,(function(t,r){return n("div",{key:t.index},[r>0?n("v-divider"):e._e(),e._l(t,(function(t){return n("v-list-item",{key:t.index},[n("v-list-item-icon",{staticClass:"mr-4",class:{hidden:t.index!==e.input}},[n("v-icon",[e._v("mdi-check")])],1),n("v-list-item-title",[e._v(e._s(t.title))])],1)}))],2)})),0)],1)],1)],1)},y=[],_={data:function(){return{input:0,sortItems:[[{title:"Alphabetical",index:u["default"].FILTER_ALPHA}],[{title:"Shortest",index:u["default"].FILTER_SHORT},{title:"Longest",index:u["default"].FILTER_LONG}],[{title:"Newest",index:u["default"].FILTER_NEW},{title:"Oldest",index:u["default"].FILTER_OLD}]]}},methods:{selectSort:function(e){this.$emit("update-sort",e)}}},O=_,G=(n("2af9"),Object(p["a"])(O,S,y,!1,null,null,null)),N=G.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{bottom:"","offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[n("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",s,!1),r),[n("v-icon",{staticClass:"d-none d-md-flex",attrs:{left:""}},[e._v("mdi-filter")]),e._v(" Filter Genres ")],1)]}}])},[n("v-sheet",{staticClass:"px-2",attrs:{dark:""}},[n("v-chip-group",{attrs:{"active-class":"primary--text",multiple:"",column:""},on:{change:function(t){return e.selectGenre()}},model:{value:e.genresSelected,callback:function(t){e.genresSelected=t},expression:"genresSelected"}},e._l(e.genres,(function(t){return n("v-chip",{key:t.id,attrs:{filter:""}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1)],1)},C=[],R=(n("4de4"),{props:{genres:Array},data:function(){return{allGenreIndex:0,allGenreName:"Include All Genres",genresSelected:[0]}},methods:{selectGenre:function(){var e=this,t=new Array;this.setIncludeAll(),this.genresSelected.forEach((function(n){t.push(e.genres[n].id)})),e.$emit("update-filter",t)},setIncludeAll:function(){var e=this,t=this.genresSelected[this.genresSelected.length-1];t===this.allGenreIndex?this.genresSelected=this.genresSelected.filter((function(t){return t===e.allGenreIndex})):this.genresSelected=this.genresSelected.filter((function(t){return t!==e.allGenreIndex})),this.genresSelected.length||this.genresSelected.push(this.allGenreIndex)}}}),T=R,k=Object(p["a"])(T,Y,C,!1,null,null,null),P=k.exports,E={components:{AppLogo:g,SearchBar:x,SortMenu:N,FilterMenu:P},props:{genres:Array,ownedMovieTitles:Array},data:function(){return{isSearchingMobile:!1}},methods:{updateSearch:function(e){this.$emit("update-search",e)},updateSort:function(e){this.$emit("update-sort",e)},updateFilter:function(e){this.$emit("update-filter",e)},toggleMobileSearch:function(){this.isSearchingMobile=!this.isSearchingMobile}}},F=E,W=(n("7c41"),Object(p["a"])(F,c,l,!1,null,null,null)),D=W.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[e.isLoading?[n("div",{staticClass:"text-center"},[n("v-progress-circular",{staticClass:"mt-5",attrs:{indeterminate:"",color:"primary",size:50}})],1)]:[e.getOwnedMoviesCount()>0?[n("v-row",{attrs:{dense:""}},[n("v-col",{staticClass:"d-flex d-sm-none",attrs:{cols:"12"}},[n("v-spacer"),n("SortMenu",{on:{"update-sort":e.updateSort}}),n("FilterMenu",{staticClass:"ml-3",attrs:{genres:e.genres},on:{"update-filter":e.updateFilter}}),n("v-spacer")],1),n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-subheader",[e._v("OWNED MOVIES ("+e._s(e.getOwnedMoviesCount())+")")])],1),e._l(e.ownedMovies,(function(t){return n("v-col",{key:t.id,attrs:{cols:"6",sm:"4",md:"3",lg:"2"},on:{click:function(n){return n.stopPropagation(),e.openDialog(t.id)}}},[n("OwnedMovie",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"primary--text"},expression:"{ class: 'primary--text' }"}],attrs:{title:t.title,src:e.getPosterImage(t),releaseYear:e.getReleaseYear(t),runtime:e.getRuntimeInHours(t),isSortingByYear:e.isSortingByYear}})],1)}))],2)]:e.getUnownedMoviesCount()>0?[n("v-container",[n("v-alert",{staticClass:"mb-0"},[e._v("Sorry, I don't seem to own what you're searching for.")])],1)]:e._e(),e.getUnownedMoviesCount()>0?[n("v-row",{staticClass:"my-1",attrs:{dense:""}},[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-subheader",[e._v("MOVIES I DON'T OWN... YET")])],1),e._l(e.unownedMovies,(function(t){return n("v-col",{key:t.id,staticClass:"pr-0 pb-0",attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},on:{click:function(n){return n.stopPropagation(),e.openDialog(t.id)}}},[n("UnownedMovie",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"primary--text"},expression:"{ class: 'primary--text' }"}],staticClass:"pa-0",attrs:{title:t.title,src:e.getPosterImage(t)}})],1)}))],2)]:e._e(),0===e.getOwnedMoviesCount()&&0===e.getUnownedMoviesCount()?[n("v-container",[n("v-alert",[e._v("No movies found. Try searching or filtering differently.")])],1)]:e._e(),n("MovieDetails",{attrs:{movie:e.openedMovie,imagePath:e.openedMovieImagePath,dialogOpen:e.dialogOpen},on:{"close-dialog":function(t){e.dialogOpen=!1}}})]],2)},L=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-img",{attrs:{src:e.src}}),n("v-card-text",{staticClass:"py-2"},[n("v-row",{attrs:{dense:""}},[n("v-col",{staticClass:"text-center text-sm-left",class:{"d-none d-sm-flex":!e.isSortingByYear},attrs:{cols:"12",xs:"12",sm:"6"}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-calendar")]),n("span",{staticClass:"pl-2",domProps:{textContent:e._s(e.releaseYear)}})],1),n("v-col",{staticClass:"text-center text-sm-right",class:{"d-none d-sm-flex":e.isSortingByYear},attrs:{cols:"12",xs:"12",sm:"6"}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-clock")]),n("span",{staticClass:"pl-2",domProps:{textContent:e._s(e.runtime)}})],1)],1)],1)],1)},z=[],X={props:{title:String,src:String,releaseYear:String,runtime:String,isSortingByYear:Boolean}},V=X,H=Object(p["a"])(V,U,z,!1,null,null,null),Q=H.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{attrs:{cols:"12"}},[n("v-sheet",[n("v-row",{attrs:{dense:"",align:"center"}},[n("v-col",{staticClass:"pa-0 ml-1 mr-5",attrs:{cols:"auto"}},[n("v-img",{attrs:{src:e.src,height:"75",width:"50"}})],1),n("v-col",{staticClass:"pa-0"},[n("span",{staticClass:"pr-5",domProps:{textContent:e._s(e.title)}})])],1)],1),n("v-divider",{staticClass:"mt-1"})],1)},J=[],q={data:function(){return{placeholderSrc:n("7c21")}},props:{title:String,src:String}},K=q,$=(n("26dd"),Object(p["a"])(K,Z,J,!1,null,null,null)),ee=$.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"720","overlay-opacity":"0.75"},on:{"click:outside":function(t){return e.closeDialog()}},model:{value:e.dialogOpen,callback:function(t){e.dialogOpen=t},expression:"dialogOpen"}},[n("v-card",[n("v-icon",{staticClass:"float-right mt-4 mr-3",on:{click:function(t){return t.stopPropagation(),e.closeDialog()}}},[e._v("mdi-close")]),n("v-card-title",{staticClass:"mb-2"},[e._v(" "+e._s(e.movie.title?e.movie.title:"")+" ")]),n("v-card-subtitle",{staticClass:"pb-4"},[e._v(" "+e._s(e.getReleaseYear(e.movie))+e._s(e.getRuntimeInHours(e.movie))+" ")]),e.imagePath?n("v-img",{attrs:{src:e.imagePath}}):e._e(),n("v-card-text",[n("div",{staticClass:"primary--text font-weight-bold mt-3 mb-2"},e._l(e.movie.genres,(function(t,r){return n("span",{key:t.id},[r!==e.movie.genres.length-1?n("span",[e._v(e._s(t.name)+", ")]):n("span",[e._v(e._s(t.name))])])})),0),n("div",[e._v(e._s(e.movie.overview?e.movie.overview:""))])])],1)],1)},ne=[],re={props:{movie:Object,dialogOpen:Boolean,imagePath:String},methods:{closeDialog:function(){this.$emit("close-dialog")},getReleaseYear:function(e){return this.$parent.getReleaseYear(e)},getRuntimeInHours:function(e){var t=this.$parent.getRuntimeInHours(e);return t?", "+t:""}}},se=re,ie=(n("6174"),Object(p["a"])(se,te,ne,!1,null,null,null)),oe=ie.exports,ae={components:{OwnedMovie:Q,UnownedMovie:ee,MovieDetails:oe,SortMenu:N,FilterMenu:P},props:{ownedMovies:Array,unownedMovies:Array,genres:Array,isLoading:Boolean,isSortingByYear:Boolean},data:function(){return{dialogOpen:!1,openedMovie:new Object,openedMovieImagePath:""}},methods:{updateSort:function(e){this.$emit("update-sort",e)},updateFilter:function(e){this.$emit("update-filter",e)},getPosterImage:function(e){return e.poster_path?u["default"].IMAGE_QUERY+e.poster_path:"../assets/movie-placeholder.jpg"},getReleaseYear:function(e){return e.release_date?e.release_date.substring(0,4):""},getRuntimeInHours:function(e){return e.runtime?Math.floor(e.runtime/60)+"h "+e.runtime%60+"m":""},getOwnedMoviesCount:function(){return this.ownedMovies.length},getUnownedMoviesCount:function(){return this.unownedMovies.length},openDialog:function(e){var t=this,n=u["default"].DETAILS_QUERY(e);a.a.get(n).then((function(e){t.openedMovie=e.data,t.openedMovie.backdrop_path?t.openedMovieImagePath=u["default"].BACKDROP_PATH+t.openedMovie.backdrop_path:t.openedMovieImagePath="",t.dialogOpen=!0}))}}},ue=ae,ce=Object(p["a"])(ue,j,L,!1,null,null,null),le=ce.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",[r("v-container",[r("v-row",{attrs:{dense:"",justify:"center"}},e._l(e.techStack,(function(t){return r("v-col",{key:t.id,staticClass:"d-flex child-flex",attrs:{cols:"auto"}},[r("v-menu",{staticClass:"text-center",attrs:{top:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(s){var i=s.on,o=s.attrs;return[r("v-btn",e._g(e._b({attrs:{text:"",dark:""}},"v-btn",o,!1),i),[r("v-img",e._g(e._b({attrs:{src:n("1771")("./"+t.imgSrc),contain:"",height:"32",width:t.width?t.width:32}},"v-img",o,!1),i))],1)]}}],null,!0)},[r("v-sheet",{staticClass:"py-2 px-3 text-center",attrs:{color:"grey darken-3"}},[r("span",{domProps:{innerHTML:e._s(t.label)}})])],1)],1)})),1),r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"text-center text--disabled pt-3",attrs:{cols:"12"}},[e._v(" This product uses the TMDb API but is not endorsed or certified by TMDb. ")]),r("v-col",{staticClass:"text-center text--disabled",attrs:{cols:"12"}},[e._v(" Web Application © "+e._s((new Date).getFullYear())+" Richard Wilkosz ")])],1)],1)],1)},fe=[],pe={data:function(){return{techStack:[{id:0,imgSrc:"logo-vue.png",label:'JavaScript Framework:<br /><a href="https://vuejs.org/" target="_blank">Vue.js</a>'},{id:1,imgSrc:"logo-vuetify.svg",label:'Vue UI Library:<br /><a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>'},{id:2,imgSrc:"logo-freepik.png",label:'<div>Manta Ray and Flaticon Brand icon<br />made by <a href="https://www.flaticon.com/authors/freepik" target="_blank" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a></div>'},{id:3,imgSrc:"logo-tmdb.svg",label:'Data Source API:<br /><a href="https://www.themoviedb.org/" target="_blank">The Movie Database</a>'},{id:4,imgSrc:"logo-firebase.png",label:'Backend as a Service:<br /><a href="https://firebase.google.com/" target="_blank">Google Firebase</a>',width:95}]}}},ve=pe,he=Object(p["a"])(ve,de,fe,!1,null,null,null),ge=he.exports,me={name:"Ray",data:function(){return{input:"",filterOn:[],isSortingByYear:!1,ownedMovies:[],ownedResults:[],unownedResults:[],genres:[],isLoading:!0}},components:{AppBar:D,MovieList:le,AppFooter:ge},created:function(){var e=this;a.a.get(u["default"].OWNED_LIST_QUERY).then((function(t){var n=t.data.items,r=[];n.forEach((function(t){r.push(e.getOwnedDetails(t.id))})),a.a.get(u["default"].GENRES_QUERY).then((function(t){e.genres=t.data.genres,e.genres.unshift({id:0,name:"Include All Genres"})})),Promise.all(r).then((function(t){t.forEach((function(t){e.ownedMovies.push(t.data)})),e.queryAllOwned(),e.isLoading=!1}))}))},methods:{search:function(e){e!==this.input&&(this.input=e,this.ownedResults=new Array,this.unownedResults=new Array,"*"===e?this.queryAllOwned():this.queryFromString(e))},sort:function(e){switch(this.isSortingByYear=e===u["default"].SORT_NEW||e===u["default"].SORT_OLD,e){case u["default"].SORT_ALPHA:this.sortAlphabetical([this.ownedResults,this.unownedResults,this.ownedMovies]);break;case u["default"].SORT_SHORT:this.sortByRuntime([this.ownedResults,this.unownedResults,this.ownedMovies],"desc");break;case u["default"].SORT_LONG:this.sortByRuntime([this.ownedResults,this.unownedResults,this.ownedMovies],"asc");break;case u["default"].SORT_NEW:this.sortByReleaseYear([this.ownedResults,this.unownedResults,this.ownedMovies],"asc");break;case u["default"].SORT_OLD:this.sortByReleaseYear([this.ownedResults,this.unownedResults,this.ownedMovies],"desc");break;default:this.sortAlphabetical([this.ownedResults,this.unownedResults,this.ownedMovies])}},sortAlphabetical:function(e){e.forEach((function(e){e.sort((function(e,t){var n=e.title.replace("The ","").toUpperCase(),r=t.title.replace("The ","").toUpperCase();return n>r?1:r>n?-1:0}))}))},sortByRuntime:function(e,t){var n;n="asc"===t?function(e){e.sort((function(e,t){return t.runtime-e.runtime}))}:function(e){e.sort((function(e,t){return e.runtime-t.runtime}))},e.forEach((function(e){n(e)}))},sortByReleaseYear:function(e,t){var n;n="asc"===t?function(e){e.sort((function(e,t){return new Date(t.release_date)-new Date(e.release_date)}))}:function(e){e.sort((function(e,t){return new Date(e.release_date)-new Date(t.release_date)}))},e.forEach((function(e){n(e)}))},filter:function(e){this.filterOn=e},getOwnedDetails:function(e){return a.a.get(u["default"].DETAILS_QUERY(e))},queryAllOwned:function(){this.sortAndFilter(),this.ownedResults=this.ownedMovies},queryFromString:function(e){var t=this;t.isLoading=!0,t.ownedMovies.forEach((function(n){n.title.toUpperCase().includes(e.toUpperCase())&&t.ownedResults.push(n)})),a.a.get(u["default"].SEARCH_QUERY+e).then((function(e){var n=e.data.results;n.forEach((function(e){var n=!1;t.ownedMovies.forEach((function(t){t.id===e.id&&(n=!0)})),n||t.unownedResults.push(e)})),t.sortAndFilter(),t.isLoading=!1}))},getOwnedMovieTitles:function(){var e=new Array;return this.ownedMovies.forEach((function(t){e.push(t.title)})),e},sortAndFilter:function(){this.sort()}}},we=me,be=(n("5c0b"),Object(p["a"])(we,s,i,!1,null,null,null)),Be=be.exports,Ae=(n("5363"),n("ce5b")),Ie=n.n(Ae),Me=(n("bf40"),n("fcf4"));r["default"].use(Ie.a);var xe=new Ie.a({theme:{dark:!0,themes:{dark:{primary:Me["a"].lightBlue.lighten3,error:Me["a"].red.lighten3}}}});r["default"].config.productionTip=!1,new r["default"]({vuetify:xe,render:function(e){return e(Be)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6174:function(e,t,n){"use strict";n("f519")},"68ac":function(e,t,n){e.exports=n.p+"img/logo-firebase.2fc42223.png"},"6c33":function(e,t,n){e.exports=n.p+"img/logo-tmdb.24a6fdb9.svg"},"7c21":function(e,t,n){e.exports=n.p+"img/movie-placeholder.2ad4bc44.jpg"},"7c41":function(e,t,n){"use strict";n("50e6")},8428:function(e,t){},"8aaa":function(e,t,n){},"8e84":function(e,t,n){},"9c0c":function(e,t,n){},ac8d:function(e,t,n){"use strict";n.r(t);n("99af");var r="c273df1bacfdd9e48630cddba6ef4d18",s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjczZGYxYmFjZmRkOWU0ODYzMGNkZGJhNmVmNGQxOCIsInN1YiI6IjVkZmVmOGE4ZDFhODkzMDAxNDg4ZDM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H24nFPugF0ekSvcffQhqxsVdViSOMyAwceOW0aaTzDs",i="https://api.themoviedb.org/3/search/movie?api_key="+r+"&query=",o="https://image.tmdb.org/t/p/w500",a="https://api.themoviedb.org/3/list/7072653?api_key="+r,u="https://api.themoviedb.org/3/movie/",c="https://image.tmdb.org/t/p/w500",l="https://api.themoviedb.org/3/genre/movie/list?api_key="+r+"&language=en-US",d=0,f=1,p=2,v=3,h=4;t["default"]={API_KEY:r,API_READ_ACCESS_TOKEN:s,SEARCH_QUERY:i,IMAGE_QUERY:o,OWNED_LIST_QUERY:a,DETAILS_QUERY:function(e){return u.concat(e).concat("?api_key=").concat(r)},BACKDROP_PATH:c,GENRES_QUERY:l,SORT_ALPHA:d,SORT_SHORT:f,SORT_LONG:p,SORT_NEW:v,SORT_OLD:h}},c2c9:function(e,t,n){"use strict";n("0f52")},c5a8:function(e,t,n){e.exports=n.p+"img/logo-flaticon.c66e474b.png"},e669:function(e,t){e.exports="data:image/png;base64,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"},f519:function(e,t,n){},f64a:function(e,t,n){e.exports=n.p+"img/logo-ray.23930ec3.png"}});
//# sourceMappingURL=app.4195619e.js.map