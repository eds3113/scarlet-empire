(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2556:(e,t,r)=>{Promise.resolve().then(r.bind(r,4442))},4442:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(5155),s=r(5565),o=r(2115),l=r(650),i=r(5220),n=r(6967),d=r(1290),c=r(1027),m=r(3463),u=r(9795);let x=(0,c.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),h=o.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:l=!1,...i}=e,n=l?d.DX:"button";return(0,a.jsx)(n,{className:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.QP)((0,m.$)(t))}(x({variant:s,size:o,className:r})),ref:t,...i})});function p(){let e=(0,o.useRef)(null),t=(0,o.useRef)(null),[r,d]=(0,o.useState)(!1),[c,m]=(0,o.useState)(!1),[u,x]=(0,o.useState)(.25),[p,g]=(0,o.useState)(!1),b=(0,o.useRef)(null),f="/scarlet-empire";return(0,o.useEffect)(()=>{d(!0);let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("section-visible")})},{threshold:.1});return e.current&&r.observe(e.current),t.current&&r.observe(t.current),()=>{e.current&&r.unobserve(e.current),t.current&&r.unobserve(t.current),b.current&&b.current.pause()}},[]),(0,a.jsxs)("main",{className:"min-h-screen",children:[(0,a.jsx)("audio",{ref:b,src:"".concat(f,"/scarlet.MP3"),loop:!0,preload:"auto",className:"hidden"}),(0,a.jsxs)("div",{className:"fixed bottom-4 right-4 z-50 flex items-end gap-2",children:[p&&(0,a.jsxs)("div",{className:"bg-red-900/60 backdrop-blur-sm p-2 rounded-lg shadow-lg transition-all duration-300 transform flex flex-col items-center gap-2 animate-fadeIn",children:[(0,a.jsx)("input",{type:"range",min:"0",max:"1",step:"0.01",value:u,onChange:e=>{let t=parseFloat(e.target.value);x(t),b.current&&(b.current.volume=t)},className:"w-24 accent-red-500"}),(0,a.jsxs)("span",{className:"text-white text-xs",children:["Ses: ",Math.round(100*u),"%"]}),(0,a.jsx)("button",{onClick:()=>{b.current&&(c?b.current.pause():b.current.play().catch(e=>console.log("M\xfczik \xe7alma hatası:",e)),m(!c))},className:"text-white hover:text-red-300 transition-colors duration-300 text-xs flex items-center gap-1",children:c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{className:"w-4 h-4"})," Durdur"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{className:"w-4 h-4"})," Başlat"]})})]}),(0,a.jsx)("button",{onClick:()=>{g(!p)},className:"p-3 rounded-full bg-red-900/60 backdrop-blur-sm hover:bg-red-800 transition-all duration-300 shadow-lg flex items-center gap-1","aria-label":"Ses ayarları",children:c?(0,a.jsx)(i.A,{className:"w-5 h-5 text-white"}):(0,a.jsx)(l.A,{className:"w-5 h-5 text-white"})})]}),(0,a.jsxs)("section",{className:"relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-red-950/30 to-black"}),(0,a.jsx)("div",{className:"absolute inset-0 z-0 opacity-20",style:{backgroundImage:"\n              linear-gradient(to right, rgb(220 38 38 / 0.1) 1px, transparent 1px),\n              linear-gradient(to bottom, rgb(220 38 38 / 0.1) 1px, transparent 1px)\n            ",backgroundSize:"40px 40px",backgroundPosition:"center"}}),(0,a.jsx)("div",{className:"absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-red-900/10 to-red-700/5 blur-3xl"}),(0,a.jsx)("div",{className:"absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-red-800/10 to-red-700/5 blur-3xl"}),(0,a.jsx)("div",{className:"absolute inset-0 z-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at center, rgb(220 38 38 / 0.6) 1px, transparent 1px)",backgroundSize:"24px 24px"}}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/0 via-red-700/40 to-red-900/0 animate-[shimmer_4s_ease-in-out_infinite]"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/0 via-red-700/40 to-red-900/0 animate-[shimmer_4s_ease-in-out_infinite_1s]"}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-700/30"}),(0,a.jsx)("div",{className:"absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-700/30"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-700/30"}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-700/30"}),(0,a.jsxs)("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-0 left-[-100%] w-[300%] h-full bg-red-700/5 rotate-[20deg]"}),(0,a.jsx)("div",{className:"absolute top-0 left-[-100%] w-[300%] h-full bg-red-800/5 rotate-[40deg]"})]}),(0,a.jsx)("div",{className:"container relative z-10 mx-auto px-4 py-4 md:px-6 flex flex-col items-center mt-[-5%] gap-5 md:gap-6 transition-opacity duration-1000 ".concat(r?"opacity-100":"opacity-0"),children:(0,a.jsxs)("div",{className:"w-full flex flex-col items-center text-center space-y-8 pt-0 pb-4",children:[(0,a.jsxs)("div",{className:"w-full max-w-[240px] md:max-w-[250px] relative group animate-fadeIn mt-0 mb-1",children:[(0,a.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-600/40 to-red-600/20 blur-lg rounded-full opacity-75 group-hover:opacity-100 transition duration-1500 group-hover:duration-1200 animate-[pulse_8s_ease-in-out_infinite]"}),(0,a.jsx)(s.default,{src:"".concat(f,"/SZIVP8d.png"),width:240,height:140,alt:"Scarlet Empire Logo",className:"w-full relative z-10 transition-all duration-700 group-hover:scale-105 drop-shadow-[0_5px_15px_rgba(220,38,38,0.4)]",priority:!0})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-0",children:[(0,a.jsx)("div",{className:"max-w-[600px] text-lg text-gray-300 md:text-xl",children:(0,a.jsx)("div",{className:"relative overflow-hidden",children:(0,a.jsx)("span",{className:"inline-block font-bold text-red-500 text-2xl md:text-3xl animate-pulse",children:"Conquer. Dominate. Rule."})})}),(0,a.jsx)("div",{className:"max-w-[600px] text-base text-gray-300 md:text-lg",children:(0,a.jsx)("span",{className:"inline-block font-light text-gray-300/90",children:"Join the elite gaming community."})})]}),(0,a.jsx)("div",{className:"overflow-hidden rounded-lg border border-red-800/30 shadow-[0_0_25px_rgba(185,28,28,0.2)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(185,28,28,0.4)] backdrop-blur-md bg-black/40 group w-full max-w-[85%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] mx-auto mb-10",children:(0,a.jsx)("div",{className:"aspect-video w-full",children:(0,a.jsxs)("div",{className:"flex h-full items-center justify-center relative",children:[(0,a.jsx)(s.default,{src:"".concat(f,"/deneme.webp"),alt:"Scarlet Empire Preview",fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"}),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-2 transition-all duration-500 group-hover:scale-105 absolute z-10",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute -inset-1 rounded-full bg-red-600/20 blur-md animate-ping opacity-75 group-hover:opacity-100"}),(0,a.jsx)("div",{className:"relative z-10 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300",children:(0,a.jsx)("svg",{className:"h-6 w-6 md:h-8 md:w-8 ml-1 group-hover:ml-2 transition-all duration-300",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("polygon",{points:"10 8 16 12 10 16 10 8"})})})]}),(0,a.jsx)("span",{className:"text-xs text-gray-200 group-hover:text-white transition-colors duration-300 group-hover:tracking-wider font-medium drop-shadow-md",children:"Watch Our Epic Trailer"})]})]})})})]})}),(0,a.jsxs)("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer",onClick:()=>{var e;return null===(e=document.getElementById("about"))||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})},children:[(0,a.jsx)("span",{className:"text-red-500/70 text-[10px] mb-1 animate-fadeIn tracking-wider font-medium uppercase",children:"Explore"}),(0,a.jsx)("div",{className:"w-4 h-7 border border-red-500/40 rounded-full flex justify-center p-1",children:(0,a.jsx)("div",{className:"w-1 h-1.5 bg-red-500/80 rounded-full animate-scrollDown"})})]})]}),(0,a.jsxs)("section",{ref:t,id:"about",className:"relative bg-zinc-900 py-20 overflow-hidden section-animate",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.red.900/5)_0,transparent_70%)] opacity-70"}),(0,a.jsx)("div",{className:"container relative z-10 mx-auto px-4 md:px-6",children:(0,a.jsxs)("div",{className:"mx-auto max-w-4xl text-center",children:[(0,a.jsxs)("h2",{className:"mb-2 text-3xl font-bold text-white md:text-4xl relative inline-block section-item hover:scale-105 transition-transform duration-300",children:[(0,a.jsx)("span",{className:"relative z-10",children:"Who Are We?"}),(0,a.jsx)("span",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"})]}),(0,a.jsxs)("div",{className:"mt-8 mb-8 text-lg text-gray-300 leading-relaxed space-y-6 section-item",children:[(0,a.jsxs)("p",{children:["We are thrilled to introduce ",(0,a.jsx)("span",{className:"text-red-500 font-semibold",children:"Scarlet Empire"}),", a brand-new server and community project launching soon in Age of Empires Mobile! Built by a team of experienced players and strategists, Scarlet Empire is designed to bring together like-minded individuals who share a passion for conquest, diplomacy, and empire-building."]}),(0,a.jsxs)("div",{className:"bg-zinc-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-red-700 hover:shadow-lg hover:shadow-red-900/10 transition-all duration-300 transform hover:-translate-y-1",children:[(0,a.jsx)("h3",{className:"text-xl font-bold text-white mb-3",children:"What to Expect:"}),(0,a.jsxs)("ul",{className:"list-disc pl-6 space-y-2 text-left",children:[(0,a.jsx)("li",{children:"A dynamic and competitive environment for seasoned commanders and rising stars alike."}),(0,a.jsx)("li",{children:"Opportunities to forge alliances, wage epic battles, and carve your legacy into history."}),(0,a.jsx)("li",{children:"A community-driven experience where strategy and teamwork reign supreme."})]})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-xl font-bold text-red-500 hover:text-red-400 transition-colors duration-300 cursor-default",children:"Prepare to claim your place in the Scarlet Empire."}),(0,a.jsx)("br",{}),"Stay tuned for the official launch date and get ready to dominate the battlefield!"]}),(0,a.jsxs)("p",{children:["Follow us for updates and be part of the empire's rise.",(0,a.jsx)("br",{}),"Let's build an empire that will be remembered for ages!"]}),(0,a.jsx)("p",{className:"italic text-gray-400 text-sm pt-2",children:"#ScarletEmpire #AgeOfEmpiresMobile #ComingSoon"})]})]})})]}),(0,a.jsxs)("section",{ref:e,id:"join",className:"relative bg-black py-20 overflow-hidden section-animate",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.red.900/10)_0,transparent_70%)] opacity-70"}),(0,a.jsx)("div",{className:"container relative z-10 mx-auto px-4 md:px-6",children:(0,a.jsxs)("div",{className:"mx-auto max-w-4xl text-center",children:[(0,a.jsxs)("h2",{className:"mb-2 text-3xl font-bold text-white md:text-4xl relative inline-block section-item",children:[(0,a.jsx)("span",{className:"relative z-10",children:"Can I Join?"}),(0,a.jsx)("span",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"})]}),(0,a.jsxs)("p",{className:"mt-8 mb-12 text-lg text-gray-300 leading-relaxed section-item",children:[(0,a.jsx)("span",{className:"text-red-500 font-semibold",children:"Scarlet Empire"})," welcomes dedicated gamers who share our values of teamwork, respect, and continuous improvement. Our application process ensures that new members will contribute positively to our community."]}),(0,a.jsx)("div",{className:"mb-16",children:(0,a.jsxs)("div",{className:"rounded-lg bg-zinc-900/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-red-900/20 hover:shadow-xl transition-all duration-300 section-item hover:-translate-y-1 max-w-lg mx-auto",children:[(0,a.jsx)("h3",{className:"mb-4 text-2xl font-bold text-white",children:"How to Join"}),(0,a.jsx)("p",{className:"text-lg text-gray-300 flex items-center justify-center h-32",children:(0,a.jsx)("span",{className:"text-red-500 font-semibold",children:"Coming Soon"})})]})}),(0,a.jsxs)("div",{className:"rounded-lg bg-zinc-900/50 backdrop-blur-sm p-8 shadow-lg section-item hover:shadow-red-900/20 hover:shadow-lg transition-all duration-300",style:{transitionDelay:"0.4s"},children:[(0,a.jsx)("h3",{className:"mb-6 text-2xl font-bold text-white",children:"Notable Members"}),(0,a.jsxs)("div",{className:"grid gap-6 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center group",children:[(0,a.jsx)("div",{className:"mb-3 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-800 to-red-950 p-[3px] transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 hover:rotate-3",children:(0,a.jsx)("div",{className:"h-full w-full overflow-hidden rounded-full",children:(0,a.jsx)(s.default,{src:"".concat(f,"/katou-megumi.gif"),width:150,height:150,alt:"Player Avatar",className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"})})}),(0,a.jsx)("h4",{className:"text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300",children:"Alpha - Scarlet Queen"}),(0,a.jsx)("p",{className:"text-sm text-gray-400 hover:text-red-300 transition-colors duration-300",children:"Community Owner"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center group",children:[(0,a.jsx)("div",{className:"mb-3 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-800 to-red-950 p-[3px] transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 hover:rotate-3",children:(0,a.jsx)("div",{className:"h-full w-full overflow-hidden rounded-full",children:(0,a.jsx)(s.default,{src:"".concat(f,"/katou-megumi.gif"),width:150,height:150,alt:"Player Avatar",className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"})})}),(0,a.jsx)("h4",{className:"text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300",children:"Christoph"}),(0,a.jsx)("p",{className:"text-sm text-gray-400 hover:text-red-300 transition-colors duration-300",children:"Community Owner"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center group",children:[(0,a.jsx)("div",{className:"mb-3 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-800 to-red-950 p-[3px] transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 hover:rotate-3",children:(0,a.jsx)("div",{className:"h-full w-full overflow-hidden rounded-full",children:(0,a.jsx)(s.default,{src:"".concat(f,"/katou-megumi.gif"),width:150,height:150,alt:"Player Avatar",className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"})})}),(0,a.jsx)("h4",{className:"text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300",children:"Shin"}),(0,a.jsx)("p",{className:"text-sm text-gray-400 hover:text-red-300 transition-colors duration-300",children:"Warlord"})]})]})]}),(0,a.jsx)("div",{className:"mt-12 section-item",style:{transitionDelay:"0.6s"},children:(0,a.jsxs)(h,{className:"relative overflow-hidden bg-red-700 text-white hover:bg-red-800 px-8 py-6 text-lg shadow-[0_0_15px_rgba(185,28,28,0.3)] group hover:scale-105 transition-all duration-300 ease-in-out",children:[(0,a.jsx)("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),(0,a.jsx)("span",{className:"absolute -inset-x-1 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-30 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"}),(0,a.jsxs)("span",{className:"relative z-10 flex items-center",children:["Join Our Discord to Apply"," ",(0,a.jsx)(n.A,{className:"ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"})]})]})})]})})]}),(0,a.jsx)("footer",{className:"bg-zinc-950 py-8",children:(0,a.jsx)("div",{className:"container mx-auto px-4 text-center md:px-6",children:(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:["\xa9 ",new Date().getFullYear()," Scarlet Empire. All rights reserved."]})})})]})}h.displayName="Button"}},e=>{var t=t=>e(e.s=t);e.O(0,[64,441,517,358],()=>t(2556)),_N_E=e.O()}]);