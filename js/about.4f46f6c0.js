"use strict";(self["webpackChunkpokestore"]=self["webpackChunkpokestore"]||[]).push([[594],{1584:function(t,e,a){a.d(e,{A:function(){return l}});var s=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-color text-light py-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center mb-3"},[e("ul",{staticClass:"list-inline"},[e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-light text-decoration-none",attrs:{href:"/terminos"}},[t._v(" Terms & Conditions ")])]),e("li",{staticClass:"list-inline-item"},[t._v("|")]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-light text-decoration-none",attrs:{href:"/privacidad"}},[t._v(" Privacy Policy ")])]),e("li",{staticClass:"list-inline-item"},[t._v("|")]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-light text-decoration-none",attrs:{href:"/cookies"}},[t._v(" Cookie Policy ")])]),e("li",{staticClass:"list-inline-item"},[t._v("|")]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-light text-decoration-none",attrs:{href:"/contacto"}},[t._v(" Contact ")])])])]),e("div",{staticClass:"text-center"},[e("p",{staticClass:"mb-0"},[t._v("© 2025 PokeStore. All rights reserved.")])])])])}],i=a(1656),r={},n=(0,i.A)(r,s,o,!1,null,"3efc81ba",null),l=n.exports},5973:function(t,e,a){a.d(e,{A:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticStyle:{"max-height":"65px"},attrs:{type:"",variant:"light"}},[e("b-navbar-nav",[e("b-nav-item",{staticClass:"navbar-text-pokestore d-flex align-items-center",attrs:{tag:"router-link",to:"/pokestore"}},[e("img",{staticClass:"navbar-logo mr-1 mb-2",staticStyle:{"max-width":"35px",height:"fit-content"},attrs:{src:a(6216),alt:"Logo PokeStore"}}),t._v(" PokeStore ")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-navbar",{attrs:{type:"light",variant:"light"}},[e("b-nav-form",[e("b-form-input",{staticClass:"mr-sm-2 placeholder",staticStyle:{width:"40ch"},attrs:{placeholder:"Search Pikachu, Plush, T-Shirts..."}}),e("b-button",{staticClass:"my-2 my-sm-0 search-button",attrs:{variant:"outline-success",type:"submit"}},[t._v("Search")])],1)],1)],1)],1),e("div",[e("b-nav",{attrs:{tabs:"",justified:""}},[e("b-nav-item",{staticClass:"navbar2-text custom-link",attrs:{tag:"router-link",to:"/pokestore/year-of-eevee"}},[t._v("YEAR OF EEVEE")]),e("b-nav-item",{staticClass:"navbar2-text custom-link",attrs:{tag:"router-link",to:"/pokestore/trading-card-game"}},[t._v("TRADING CARD GAME")]),e("b-nav-item",{staticClass:"navbar2-text custom-link",attrs:{tag:"router-link",to:"/pokestore/plush"}},[t._v("PLUSH")]),e("b-nav-item",{staticClass:"navbar2-text custom-link",attrs:{tag:"router-link",to:"/pokestore/news"}},[t._v("NEWS")]),e("b-nav-item",{staticClass:"navbar2-text custom-link",attrs:{tag:"router-link",to:"/pokestore/json"}},[t._v("COMING SOON...")])],1)],1)],1)},o=[],i=a(1656),r={},n=(0,i.A)(r,s,o,!1,null,null,null),l=n.exports},2328:function(t,e,a){a.d(e,{A:function(){return l}});var s=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"space"}),e("div",{staticClass:"title-container"},[e("h1",{staticClass:"mt-2"},[t._v("LAST PRODUCTS")])])])}],i=a(1656),r={},n=(0,i.A)(r,s,o,!1,null,null,null),l=n.exports},6361:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"pb-2"},[e("icons",{attrs:{icon:["fas","award"]}}),t._v(" APARTADO DE LA WEB EN PROCESO DE CONSTRUCCIÓN "),e("icons",{attrs:{icon:["fas","award"]}})],1),e("p",[t._v(" Para saber las futuras novedades de la página acude diariamente para ver si ha cambiado algo... ")]),e("div",{staticClass:"container-md"},[e("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return e("div",{key:t.id,attrs:{columns:""}},[e("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[e("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del proyecto",variant:"primary",href:t.url}},[t._v("Ir al proyecto")])],1)],1)},r=[],n={props:["id","autor","titulo","srcimg","alt","texto","url"]},l=n,c=a(1656),d=(0,c.A)(l,i,r,!1,null,"2234c027",null),u=d.exports;const m="https://raw.githubusercontent.com/nilvalton2/pokestore/refs/heads/main/llista.json";var p={props:{name:{type:String,default:"ListaProyectos"}},components:{Card2:u},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(m),e=await t.json();this.proyectos=e,console.log(e)}}},g=p,b=(0,c.A)(g,s,o,!1,null,null,null),v=b.exports},6060:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"news"},[e("InfoNews"),e("NavBar"),e("NewsBody"),e("FooterFooter")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-container"},[e("p",{staticClass:"top-text"},[t._v("This page is displayed as a person with COGNITIVE DISABILITIES would see it.")]),e("router-link",{staticClass:"link-rh",attrs:{to:"/"}},[t._v("Return Home")])],1)])},r=[],n=a(1656),l={},c=(0,n.A)(l,i,r,!1,null,null,null),d=c.exports,u=a(5973),m=function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"w-100 img-fluid",attrs:{src:a(9732),alt:"Banner"}}),e("b-navbar",{staticClass:"bg-dark b-navbar-text",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("Pokemon Noticias")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"#"}},[t._v("Últimas noticias")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("PokeCON")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Trading Card Game")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Figures")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Videogames")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Nintendo Switch 2")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Foros")])],1)],1)],1),e("div",{staticClass:"hero",staticStyle:{"background-image":"url('https://raw.githubusercontent.com/omar421/pokemon-images/main/pokemon-banner.jpg')","background-size":"cover","background-position":"center",height:"300px",color:"white","text-align":"center",padding:"100px 20px"}},[e("h1",{staticClass:"display-4 custom-title"},[t._v("Últimas Noticias sobre Pokémon")]),e("p",{staticClass:"custom-p"},[t._v("¡Mantente actualizado con las novedades de los videojuegos Pokémon!")]),e("div",[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"dark"}},[t._v("Mantenme actualizado")]),e("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[e("b-card",[e("p",{staticClass:"card-text"},[t._v("Collapse contents Here")]),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1-inner",modifiers:{"collapse-1-inner":!0}}],attrs:{size:"sm"}},[t._v("Mantenme actualizado")]),e("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1-inner"}},[e("b-card",[t._v("¡No estás actualizado!")])],1)],1)],1)],1)]),e("b-container",{staticClass:"mt-5"},[e("b-row",[e("b-col",{staticClass:"mb-4",attrs:{md:"4"}},[e("b-card",{attrs:{header:"NUEOV JUEOG POKEMON ANUNCIDO RAPA 2205","img-src":a(4187),"img-alt":"Noticia 1","img-top":""}},[e("b-card-text",{staticClass:"text-justify"},[t._v(" Niendto anunica un nueov jgueo de Pokémon para 2025 Teh Pokémon Cpomany y Niendto han soprendido a los fnas con el anucnio de un nuvoe jgueo de Pokémon que lgeará en 2025. Bjao el título proviosinal Pokémon Lgedens: Arcanus, el jgueo poromete exlporar los oirgenes del vnículo etnre hmuanos y Pokémon en una rêgion cmopletamnete nuvea inspirada en paisajes medievlas. Con gráficso rnovados y una jguabilidad que mexcla exlporación abrieta con cbombates estartégicos cláisocs, Arcanus bsuacrá sgeuir los psasos del éxitco de Pokémon Lgedens: Arceus. Seúgn declraaciones ofiicales, incluriá una mecánica inédta que pmertirá a los jguadores inlfuir dircetmante en la evólucion del etnorno del jgueo. El títlulo está peirvsto para Niendto Stiwch y el pórximo hradware de la cmopañía, aú́n sin nombre ofiical. ¡Se esepra más ifnormación en los pórximos mesés! ")]),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"my-modal",expression:"'my-modal'"}]},[t._v("Leer más")]),e("b-modal",{attrs:{id:"my-modal"}},[t._v("Lee las noticias sobre Pokemon")])],1)],1),e("b-col",{staticClass:"mb-4",attrs:{md:"4"}},[e("b-card",{attrs:{header:"POKENOM PICHAKU ESDONCE UN GRAN SETRECO","img-src":a(9020),"img-alt":"Noticia 2","img-top":""}},[e("b-card-text",{staticClass:"text-justify"},[t._v(' En un mietsoriro adelnato plubciado por Teh Pokémon Cpmonay, Pikcahu, el icnóico comañero de Ash, praece etsar en el cetnro de un nuvoe y emcoioannte mestirio. Bajo el lema "No tdoo es lo que pearece", el trálier muersta a Pikcahu intecarutdno con un etxraño obtejo brinllante mientars una voz en off afirama que "cada hsitoria tiene un orgien ocutlo". Los fnas ya esucpeolan que este anucnio podríia etsar rleacioando con una nueva mecáncia de jgueo o iuncslo con una tarma que desvele aseptcos nucna antes epxlorados de la frauqncia. ¿Sreá un nuvoe vidoeugjo, ')]),e("b-card-text",{staticClass:"text-justify tremolatremola"},[t._v(" una pelíucal o una seire? Por ahroa, Gaem Freak gduara sliencio, pero pmorete que el secerto drátas de Pikcahu seré rveelado en un evneto espceial el próxmio mes. ¡Las teórias etsan al rojoj vivo! ")]),e("b-button",{attrs:{id:"show-btn"},on:{click:function(e){return t.$bvModal.show("bv-modal-example")}}},[t._v("Leer más")]),e("b-modal",{attrs:{id:"bv-modal-example","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" No te estás enterando de las noticias. ")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("Pokemon noticias")])]),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$bvModal.hide("bv-modal-example")}}},[t._v("Leer más")])],1)],1)],1),e("b-col",{staticClass:"mb-4",attrs:{md:"4"}},[e("b-card",{attrs:{header:"LA DIENTA MÁS SAMOFA DE POKENOM CIERRA","img-src":a(3369),"img-alt":"Noticia 3","img-top":""}},[e("b-card-text",{staticClass:"text-justify"},[e("strong",[t._v("LA DIENTA MÁS SAMOFA DE POKENOM CIERRA")]),t._v(' El icóinco Pokémon Cnetre de Tkoio, cosndieardo un paraíso para los fnas de la frauqncia, ha anucniado su ceirre dfinitvo para fniales de este año. La notiica ha soprendido a la comuindad, ya que la teinda se ha mtaenindo como un ptuno de refenrecia para colceccionistas y turitsas dseede su apretura en 1998. Seúgn un cmounicado ofiical, el cierrre se dbee a "panles de renvoación y un cmabio de estartgia en la expreiencia de las teindas físcais". Sin embrago, se ha cnoifrmado que un nuveo conecpto de Pokémon Cnetre abriá sus puerats en una ubicaicón aún más gdrande y medrona en 2026, con experinecias intearctivas y tecnolgoía imsersiva. Mietnras ttaon, los fnas tnerdán la oprtunidad de desipderse del embleámitco local con evnetos espeiclaes y arítculos exlcuisvos hatsa el cierrre. ¡Es el fn de una era, pero tamibén el incio de una nuvea auvntura! ')]),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Leer más")]),e("b-modal",{attrs:{id:"modal-1",title:"Pokemon Noticias"}},[e("p",{staticClass:"my-4"},[t._v("No hay noticias Pokemon por el momento...")])])],1)],1),e("b-col",{staticClass:"mt-5 position-absolute b-card-x1",attrs:{md:"4"}},[e("b-card",{attrs:{header:"LA DIENTA MÁS SAMOFA DE POKENOM CIERRA","img-src":a(3369),"img-alt":"Noticia 3","img-top":""}},[e("b-card-text"),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Leer más")]),e("b-modal",{attrs:{id:"modal-1",title:"Pokemon Noticias"}},[e("p",{staticClass:"my-4"},[t._v("No hay noticias Pokemon por el momento...")])])],1)],1),e("b-col",{staticClass:"mt-5 position-absolute b-card-x2",attrs:{md:"4"}},[e("b-card",{attrs:{header:"LA DIENTA MÁS SAMOFA DE POKENOM CIERRA","img-src":a(3369),"img-alt":"Noticia 3","img-top":""}},[e("b-card-text"),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Leer más")]),e("b-modal",{attrs:{id:"modal-1",title:"Pokemon Noticias"}},[e("p",{staticClass:"my-4"},[t._v("No hay noticias Pokemon por el momento...")])])],1)],1)],1)],1)],1)},p=[],g={name:"PokemonNewsPage"},b=g,v=(0,n.A)(b,m,p,!1,null,"91510198",null),h=v.exports,f=a(1584),C={name:"NewsView",components:{InfoNews:d,NavBar:u.A,NewsBody:h,FooterFooter:f.A}},x=C,k=(0,n.A)(x,s,o,!1,null,null,null),y=k.exports},1151:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"plush"},[e("InfoPlush"),e("NavBar"),e("TradingCardGameDevelop"),e("PlushPlush"),e("FooterFooter")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-container"},[e("p",{staticClass:"top-text"},[t._v("This page is displayed as a person with TOTAL VISION DISABILITIES would see it.")]),e("router-link",{staticClass:"link-rh",attrs:{to:"/"}},[t._v("Return Home")])],1)])},r=[],n=a(1656),l={},c=(0,n.A)(l,i,r,!1,null,null,null),d=c.exports,u=a(5973),m=a(2328),p=function(){var t=this,e=t._self._c;return e("div",[e("b-container",{staticClass:"mt-4 container-cards"},[e("b-row",[e("b-col",[e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un peluche suave de Bulbasaur con detalles bordados y hojas verdes vibrantes sobre su espalda. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":" Imagen del producto. Un peluche suave de Bulbasaur con detalles bordados y hojas verdes vibrantes sobre su espalda.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un adorable peluche de Pikachu con una bufanda roja, sentado sobre una almohada amarilla, listo para aventuras. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un adorable peluche de Pikachu con una bufanda roja, sentado sobre una almohada amarilla, listo para aventuras.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Charmander en forma de peluche con una cola que parece encenderse, perfecto para abrazos. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Charmander en forma de peluche con una cola que parece encenderse, perfecto para abrazos.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un peluche de Eevee con un pelaje extra esponjoso y orejas flexibles, ideal para coleccionar. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un peluche de Eevee con un pelaje extra esponjoso y orejas flexibles, ideal para coleccionar.","img-top":"",tag:"article"}})],1)],1),e("b-col",[e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Snorlax en versión peluche tumbado boca arriba, con su clásica pose de siesta eterna. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Snorlax en versión peluche tumbado boca arriba, con su clásica pose de siesta eterna.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un tierno peluche de Jigglypuff con una expresión dulce y micrófono bordado en su mano. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un tierno peluche de Jigglypuff con una expresión dulce y micrófono bordado en su mano.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Un exclusivo peluche de Mimikyu con un diseño ligeramente desgastado, inspirado en su aspecto misterioso. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un exclusivo peluche de Mimikyu con un diseño ligeramente desgastado, inspirado en su aspecto misterioso.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un peluche suave de Squirtle, con su característica concha y sonrisa traviesa. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un peluche suave de Squirtle, con su característica concha y sonrisa traviesa.","img-top":"",tag:"article"}})],1)],1),e("b-col",[e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Peluche de Gengar con una expresión traviesa y detalles bordados en sus ojos y boca. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Peluche de Gengar con una expresión traviesa y detalles bordados en sus ojos y boca.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un esponjoso peluche de Vulpix con su elegante cola ondulada y orejas puntiagudas. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un esponjoso peluche de Vulpix con su elegante cola ondulada y orejas puntiagudas.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un peluche encantador de Togepi, perfecto para los fanáticos de los Pokémon tipo Hada. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un peluche encantador de Togepi, perfecto para los fanáticos de los Pokémon tipo Hada.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un mini peluche de Meowth, con su moneda dorada y su característica sonrisa pícara. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un mini peluche de Meowth, con su moneda dorada y su característica sonrisa pícara.","img-top":"",tag:"article"}})],1)],1),e("b-col",[e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un exclusivo peluche de Lucario en pose de combate, ideal para los coleccionistas. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un exclusivo peluche de Lucario en pose de combate, ideal para los coleccionistas.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Peluche de Psyduck sujetándose la cabeza como si estuviera confundido, con detalles bordados. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Peluche de Psyduck sujetándose la cabeza como si estuviera confundido, con detalles bordados.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un gigante peluche de Dragonite abrazable, con sus alas de tela y cara amistosa. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un gigante peluche de Dragonite abrazable, con sus alas de tela y cara amistosa.","img-top":"",tag:"article"}})],1),e("router-link",{attrs:{to:"/pokestore/plush"}},[e("b-card-text",{staticClass:"position-absolute",staticStyle:{"font-size":"0.1rem"}},[t._v(" Imagen del producto. Un exclusivo peluche de Charizard lanzando fuego, con alas desplegadas y detalles de felpa. ")]),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem",height:"auto",overflow:"hidden",padding:"0",border:"none"},attrs:{"img-src":a(2477),"img-alt":"Imagen del producto. Un exclusivo peluche de Charizard lanzando fuego, con alas desplegadas y detalles de felpa.","img-top":"",tag:"article"}})],1)],1)],1)],1)],1)},g=[],b={},v=(0,n.A)(b,p,g,!1,null,null,null),h=v.exports,f=a(1584),C={name:"PlushView",components:{InfoPlush:d,NavBar:u.A,TradingCardGameDevelop:m.A,PlushPlush:h,FooterFooter:f.A}},x=C,k=(0,n.A)(x,s,o,!1,null,null,null),y=k.exports},7667:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pokestore"},[e("InfoPokeStore"),e("NavBar"),e("BannerPokeStore"),e("Section1Pokestore"),e("FooterFooter")],1)},o=[],i=a(5973),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-container"},[e("p",{staticClass:"top-text"},[t._v("This page is displayed as a person with MOTOR DISABILITIES would see it.")]),e("router-link",{staticClass:"link-rh",attrs:{to:"/"}},[t._v("Return Home")])],1)])},n=[],l=a(1656),c={},d=(0,l.A)(c,r,n,!1,null,null,null),u=d.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"full-container"},[e("img",{staticClass:"w-100 img-fluid",attrs:{src:a(9599),alt:"Banner"}}),e("router-link",{staticClass:"btn btn-primary custom-button-banner",attrs:{to:"/pokestore/winter-offers"}},[t._v(" EXPLORE MORE ")])],1)},p=[],g={},b=(0,l.A)(g,m,p,!1,null,null,null),v=b.exports,h=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"section-container"},[e("div",{staticClass:"section"},[e("img",{staticClass:"w-100 img-fluid banner-image",attrs:{src:a(6623),alt:"Banner"}}),e("router-link",{staticClass:"btn btn-primary custom-button",attrs:{to:"/pokestore/trading-card-game",tabindex:"-1"}},[t._v(" EXPLORE TCG CARDS ")])],1),e("div",{staticClass:"section"},[e("img",{staticClass:"w-100 img-fluid banner-image",attrs:{src:a(6637),alt:"Banner"}}),e("router-link",{staticClass:"btn btn-primary custom-button",attrs:{to:"/pokestore/plush",tabindex:"-1"}},[t._v(" EXPLORE THE PLUSHES ")])],1)]),e("div",{staticClass:"section-container"},[e("div",{staticClass:"section"},[e("img",{staticClass:"w-100 img-fluid banner-image",attrs:{src:a(1683),alt:"Banner"}}),e("router-link",{staticClass:"btn btn-primary custom-button",attrs:{to:"/pokestore/json",tabindex:"-1"}},[t._v(" EXPLORE ? ")])],1),e("div",{staticClass:"section"},[e("img",{staticClass:"w-100 img-fluid banner-image",attrs:{src:a(1276),alt:"Banner"}}),e("router-link",{staticClass:"btn btn-primary custom-button",attrs:{to:"/pokestore/news",tabindex:"-1"}},[t._v(" EXPLORE THE NEWS ")])],1)])])},f=[],C={},x=(0,l.A)(C,h,f,!1,null,null,null),k=x.exports,y=a(1584),_={name:"PokeStoreView",components:{NavBar:i.A,InfoPokeStore:u,BannerPokeStore:v,Section1Pokestore:k,FooterFooter:y.A}},S=_,w=(0,l.A)(S,s,o,!1,null,null,null),P=w.exports},6439:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"trading-card-game"},[e("InfoTradingCardGame"),e("NavBar"),e("TradingCardGameDevelop"),e("TradingCardGame"),e("FooterFooter")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-container"},[e("p",{staticClass:"top-text"},[t._v("This page is displayed as a person with LOW VISION DISABILITIES would see it.")]),e("router-link",{staticClass:"link-rh",attrs:{to:"/"}},[t._v("Return Home")])],1)])},r=[],n=a(1656),l={},c=(0,n.A)(l,i,r,!1,null,null,null),d=c.exports,u=a(5973),m=a(2328),p=function(){var t=this,e=t._self._c;return e("div",[e("b-container",{staticClass:"mt-4 container-cards"},[e("b-row",[e("b-col",[e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(9973),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Sword & Shield-Vivid Voltage Booster Display Box (36 Packs) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("146.44€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(4409),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Sword & Shield-Astral Radiance 3 Booster Packs, Coin & Sylveon Promo Card ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("246.94€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(7978),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Knock Out Collection (Galarian Slowking, Galarian Obstagoon & Dragapult) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("346.77€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(6876),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Sword & Shield-Vivid Voltage Booster Display Box (36 Packs) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("146.44€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1)],1),e("b-col",[e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(8601),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Crown Zenith Premium Playmat Collection (Morpeko V-UNION) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("15.44€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(1326),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Scarlet & Violet-Temporal Forces Booster Bundle (6 Packs) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("27.89€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(3722),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Sword & Shield-Vivid Voltage Booster Display Box (36 Packs) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("146.44€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(9675),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon Center × Van Gogh Museum: Corviknight Inspired by Wheatfield with Crows Playmat ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("1776.84€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1)],1),e("b-col",[e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(1207),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Sword & Shield-Battle Styles Booster Display Box (36 Packs) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("135.90€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(2811),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Crown Zenith Premium Playmat Collection (Morpeko V-UNION) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("103.20€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(8542),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Knock Out Collection (Galarian Slowking, Galarian Obstagoon & Dragapult) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("196.99€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(9365),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Sword & Shield-Vivid Voltage Booster Display Box (36 Packs) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("154.56€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1)],1),e("b-col",[e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(3983),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Snorlax, Morpeko & Applin Cards with 2 Booster Packs & Coin ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("56.67€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(4464),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon Center × Van Gogh Museum: Pokémon Inspired by Paintings from the Van Gogh Museum Playmat ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("654.23€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(7e3),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Crown Zenith Premium Playmat Collection (Morpeko V-UNION) ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("33.56€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1),e("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"20rem"},attrs:{"img-src":a(1223),"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v(" Pokémon TCG: Snorlax, Morpeko & Applin Cards with 2 Booster Packs & Coin ")]),e("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("1436.44€")]),e("b-button",{staticClass:"buttonp",attrs:{href:"#",variant:"outline-success"}},[t._v("Quick View")])],1)],1)],1)],1)],1)},g=[],b={},v=(0,n.A)(b,p,g,!1,null,null,null),h=v.exports,f=a(1584),C={name:"TradingCardGameView",components:{InfoTradingCardGame:d,NavBar:u.A,TradingCardGameDevelop:m.A,TradingCardGame:h,FooterFooter:f.A}},x=C,k=(0,n.A)(x,s,o,!1,null,null,null),y=k.exports},5084:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"plush"},[e("InfoYearOfEevee"),e("NavBar"),e("YearOfEeveeIntroduction"),e("YearOfEeveeBody"),e("FooterFooter")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-container"},[e("p",{staticClass:"top-text"},[t._v("This page is displayed as a person with HEARING DISABILITIES would see it.")]),e("router-link",{staticClass:"link-rh",attrs:{to:"/"}},[t._v("Return Home")])],1)])},r=[],n=a(1656),l={},c=(0,n.A)(l,i,r,!1,null,null,null),d=c.exports,u=a(5973),m=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"space"}),e("div",{staticClass:"title-container"},[e("h1",{staticClass:"mt-2"},[t._v("YEAR OF EEVEE")])]),e("div",{staticClass:"p-container"},[e("p",{staticClass:"p-text text-justify",staticStyle:{"margin-left":"100px","margin-right":"100px"}},[t._v("🎥 Welcome to the 2025 Year of Eevee! 🌟 In celebration of Eevee’s incredible versatility and charm, the Pokémon Company has officially declared 2025 as the Year of Eevee! From its adorable design to its fascinating ability to evolve into multiple unique forms, Eevee has captured the hearts of trainers worldwide for decades. This year, Eevee takes the spotlight with exciting announcements, events, and merchandise dedicated to everyone’s favorite Evolution Pokémon. 🦊✨ Whether you're a fan of Vaporeon, Jolteon, Flareon, or any of Eevee's other evolutions, there’s something special for every trainer to look forward to. In this video, we’ll dive into everything you need to know about the Year of Eevee—from upcoming games and TCG expansions to community events and collaborations. Get ready to celebrate Eevee like never before! 🎉 Let’s make 2025 the most Eevee-tastic year yet! 💛")])])])}],g={},b=(0,n.A)(g,m,p,!1,null,null,null),v=b.exports,h=function(){var t=this,e=t._self._c;return e("div",[e("b-embed",{staticStyle:{padding:"200px","padding-top":"20px",background:"#fffbe3"},attrs:{type:"iframe",aspect:"16by9",src:a(2003),allowfullscreen:""}})],1)},f=[],C={},x=(0,n.A)(C,h,f,!1,null,null,null),k=x.exports,y=a(1584),_={name:"PlushView",components:{InfoYearOfEevee:d,NavBar:u.A,YearOfEeveeIntroduction:v,YearOfEeveeBody:k,FooterFooter:y.A}},S=_,w=(0,n.A)(S,s,o,!1,null,null,null),P=w.exports},9732:function(t,e,a){t.exports=a.p+"img/banner-news.a2822d25.jpg"},9599:function(t,e,a){t.exports=a.p+"img/banner-pokestore.79a23bda.png"},9973:function(t,e,a){t.exports=a.p+"img/bp1.ea2b00b5.jpg"},8601:function(t,e,a){t.exports=a.p+"img/bp10.c4ba301d.jpg"},6876:function(t,e,a){t.exports=a.p+"img/bp11.95a50559.jpg"},9675:function(t,e,a){t.exports=a.p+"img/bp12.c5fc5497.jpg"},8542:function(t,e,a){t.exports=a.p+"img/bp13.312b9137.jpg"},9365:function(t,e,a){t.exports=a.p+"img/bp14.e78d2295.jpg"},7e3:function(t,e,a){t.exports=a.p+"img/bp15.d96262bf.jpg"},1223:function(t,e,a){t.exports=a.p+"img/bp16.868534a3.jpg"},3722:function(t,e,a){t.exports=a.p+"img/bp2.1d386e2c.jpg"},1207:function(t,e,a){t.exports=a.p+"img/bp3.ddf35631.jpg"},3983:function(t,e,a){t.exports=a.p+"img/bp4.841a89f6.jpg"},4409:function(t,e,a){t.exports=a.p+"img/bp5.9e25af0d.jpg"},1326:function(t,e,a){t.exports=a.p+"img/bp6.27dd32a8.jpg"},2811:function(t,e,a){t.exports=a.p+"img/bp7.856ea61d.jpg"},4464:function(t,e,a){t.exports=a.p+"img/bp8.c9b37f13.jpg"},7978:function(t,e,a){t.exports=a.p+"img/bp9.95853a6b.jpg"},6623:function(t,e,a){t.exports=a.p+"img/cards.fce967d0.jpg"},1683:function(t,e,a){t.exports=a.p+"img/interrogant.a2e346ff.jpg"},4187:function(t,e,a){t.exports=a.p+"img/n1.337f852c.jpg"},9020:function(t,e,a){t.exports=a.p+"img/n2.385a156a.jpg"},3369:function(t,e,a){t.exports=a.p+"img/n3.586ef307.jpg"},2477:function(t,e,a){t.exports=a.p+"img/nothing.054d849a.jpg"},6637:function(t,e,a){t.exports=a.p+"img/plush.6eac7d1f.jpg"},6216:function(t,e,a){t.exports=a.p+"img/pokeball.1104d9f5.png"},1276:function(t,e,a){t.exports=a.p+"img/pokemon-presents.af334ea3.jpg"},2003:function(t,e,a){t.exports=a.p+"media/video.c610cc66.mp4"}}]);
//# sourceMappingURL=about.4f46f6c0.js.map