import{a as h}from"./axios-4a70c6fc.js";import{_ as p,o as r,c as i,b as t,F as g,k as m,t as c}from"./index-82fd02e2.js";const f={data(){return{articles:[],imageUrls:[],defaultImageUrl:"/img/defaultImage.jpg",error:!1}},mounted(){h.get("https://newsapi.org/v2/everything",{params:{q:"Cardiomyopathy disease",apiKey:"af79177a035f46cc90620c82d23fc10b"}}).then(e=>{this.articles=e.data.articles,console.log(this.articles),this.articles.forEach((n,d)=>{h.get("https://api.unsplash.com/search/photos",{params:{query:n.title,client_id:"ckqFKuBCgY9FZbRISl0rd8xcUnGVnyRqgpoT6IuiZ2Y"}}).then(l=>{const s=l.data.results[0].urls.regular;this.imageUrls[d]=s}).catch(l=>{console.log(l)})})}).catch(e=>{console.log(e)})},methods:{redirectToArticle(e){window.open(e,"_blank")}}},_={class:"min-h-screen mx-auto"},x={class:"h-full w-11/12 flex flex-col mx-auto py-8"},b=t("div",{class:"pb-20 flex flex-col gap-4 lg:gap-6"},[t("h1",{class:"font-bold text-3xl lg:text-4xl text-slate-600"},"Latest News"),t("p",{class:"italic text-lg lg:text-xl text-slate-600 max-w-screen-lg"},"Stay up to date on the latest developments in cardiomyopathy research and treatment. Our team of experts curates the most important news and insights from trusted sources to keep you informed.")],-1),y={class:""},v={class:"grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"},w=["onClick"],k=["src"],U=t("div",{class:"absolute inset-0 bg-gradient-to-tl from-indigo-800 to-black opacity-60 z-10"},null,-1),I={class:"absolute flex flex-col items-start shadow-lg inset-0 z-20 p-4"},q={class:"text-2xl text-center absolute font-bold mb-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},A={class:"flex flex-row justify-between w-full mt-auto"};function B(e,n,d,l,s,u){return r(),i("div",_,[t("div",x,[b,t("div",y,[t("div",v,[(r(!0),i(g,null,m(s.articles,(o,a)=>(r(),i("div",{key:a,id:"article",class:"relative h-96 rounded-lg cursor-pointer hover:opacity-80 transition-opacity text-white overflow-hidden",onClick:C=>u.redirectToArticle(o.url)},[t("img",{src:s.imageUrls[a]?s.imageUrls[a]:s.defaultImageUrl,alt:"",id:"api-photo",class:"cursor-pointer absolute inset-0 h-full w-full object-cover"},null,8,k),U,t("div",I,[t("h2",q,c(o.title),1),t("div",A,[t("p",null,c(o.author&&o.author.slice(0,20)),1),t("p",null,c(o.publishedAt.slice(0,o.publishedAt.indexOf("T"))),1)])])],8,w))),128))])])])])}const j=p(f,[["render",B]]);export{j as default};
