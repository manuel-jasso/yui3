YUI.add("css",function(G){var F=(function(){var I=document.createElement("style");I.type="text/css";return I;})(),H=false,B,C=Array.prototype.slice,D=[],A={};var E=function(){if(F.parentNode){return true;}if(H){return false;}try{var K=document.getElementsByTagName("head")[0],J=0,I=D.length;K.appendChild(F);B=F.styleSheet||F.sheet;for(;J<I;++J){G.css[D[J][0]].apply(G.css,C.call(D[J],1));}D=[];return true;}catch(L){H=true;G.Event.onDOMReady(function(){H=false;E();});return false;}};G.css=function(K,I){if(E()){var J=B.rules||B.cssRules;if(typeof A[K]!=="number"){A[K]=J.length;if(B.addRule){B.addRule(K,"clip:auto");}else{B.insertRule(K+" {}",A[K]);}}G.mix(J[A[K]].style,I);}else{D.push(["set"].concat(C.call(arguments)));}return G;};G.mix(G.css,{set:G.css,remove:function(I,J){if(E()){if(typeof J==="object"){J=G.lang.isArray(J)?J:G.object.keys(J);J=G.array.hash(J,new Array(J.length).join(",").split(","));return G.css.set(I,J);}if(A[I]>=0){if(B.removeRule){B.removeRule(A[I]);}else{B.deleteRule(A[I]);}A[I]=undefined;}}else{D.push(["set"].concat(C.call(arguments)));}return G;}});},"3.0.0");
