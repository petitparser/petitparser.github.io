(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.ia(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.p(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fQ(b)
return new s(c,this)}:function(){if(s===null)s=A.fQ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fQ(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
fW(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fT(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.fU==null){A.l_()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.f(A.hx("Return interceptor for "+A.k(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.eE
if(o==null)o=$.eE=A.eZ(n)
p=q[o]}if(p!=null)return p
p=A.l4(a)
if(p!=null)return p
if(typeof a=="function")return B.E
s=Object.getPrototypeOf(a)
if(s==null)return B.q
if(s===Object.prototype)return B.q
if(typeof q=="function"){o=$.eE
if(o==null)o=$.eE=A.eZ(n)
Object.defineProperty(q,o,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
j_(a,b){if(a<0||a>4294967295)throw A.f(A.aq(a,0,4294967295,"length",null))
return J.j1(new Array(a),b)},
j0(a,b){if(a<0)throw A.f(A.bu("Length must be a non-negative integer: "+a,null))
return A.p(new Array(a),b.h("w<0>"))},
j1(a,b){var s=A.p(a,b.h("w<0>"))
s.$flags=1
return s},
j2(a,b){var s=t.U
return J.iF(s.a(a),s.a(b))},
hj(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
j3(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.hj(r))break;++b}return b},
j4(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.o(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.hj(q))break}return b},
aj(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bC.prototype
return J.cX.prototype}if(typeof a=="string")return J.am.prototype
if(a==null)return J.bD.prototype
if(typeof a=="boolean")return J.cV.prototype
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bH.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.t)return a
return J.fT(a)},
dL(a){if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bH.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.t)return a
return J.fT(a)},
fS(a){if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bH.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.t)return a
return J.fT(a)},
kW(a){if(typeof a=="number")return J.b7.prototype
if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(!(a instanceof A.t))return J.aM.prototype
return a},
kX(a){if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(!(a instanceof A.t))return J.aM.prototype
return a},
a6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aj(a).v(a,b)},
iE(a,b){return J.kX(a).am(a,b)},
iF(a,b){return J.kW(a).F(a,b)},
iG(a,b){return J.fS(a).T(a,b)},
X(a){return J.aj(a).gu(a)},
cH(a){return J.fS(a).gB(a)},
b_(a){return J.dL(a).gq(a)},
iH(a){return J.aj(a).gC(a)},
iI(a,b){return J.aj(a).aU(a,b)},
cI(a){return J.aj(a).i(a)},
iJ(a,b){return J.fS(a).aZ(a,b)},
cT:function cT(){},
cV:function cV(){},
bD:function bD(){},
bG:function bG(){},
ao:function ao(){},
de:function de(){},
aM:function aM(){},
an:function an(){},
bF:function bF(){},
bH:function bH(){},
w:function w(a){this.$ti=a},
cU:function cU(){},
e_:function e_(a){this.$ti=a},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b7:function b7(){},
bC:function bC(){},
cX:function cX(){},
am:function am(){}},A={fy:function fy(){},
j5(a){return new A.bJ("Field '"+a+"' has been assigned during initialization.")},
j6(a){return new A.bJ("Field '"+a+"' has not been initialized.")},
ae(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
el(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fP(a,b,c){return a},
fV(a){var s,r
for(s=$.V.length,r=0;r<s;++r)if(a===$.V[r])return!0
return!1},
ja(a,b,c,d){if(t.gw.b(a))return new A.bz(a,b,c.h("@<0>").k(d).h("bz<1,2>"))
return new A.aI(a,b,c.h("@<0>").k(d).h("aI<1,2>"))},
dZ(){return new A.bg("No element")},
hi(){return new A.bg("Too many elements")},
bJ:function bJ(a){this.a=a},
aa:function aa(a){this.a=a},
eg:function eg(){},
i:function i(){},
aF:function aF(){},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(){},
cb:function cb(){},
bi:function bi(){},
ad:function ad(a){this.a=a},
ie(a){var s=A.id(a)
if(s!=null)return s
return"minified:"+a},
lO(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cI(a)
return s},
bW(a){var s,r=$.hn
if(r==null)r=$.hn=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dg(a){var s,r,q,p
if(a instanceof A.t)return A.U(A.aY(a),null)
s=J.aj(a)
if(s===B.D||s===B.F||t.bI.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.U(A.aY(a),null)},
ho(a){var s,r,q
if(a==null||typeof a=="number"||A.fM(a))return J.cI(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ak)return a.i(0)
if(a instanceof A.a0)return a.aN(!0)
s=$.iw()
for(r=0;r<1;++r){q=s[r].c_(a)
if(q!=null)return q}return"Instance of '"+A.dg(a)+"'"},
je(){return Date.now()},
jg(){var s,r
if($.eb!==0)return
$.eb=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.eb=1e6
$.fC=new A.ea(r)},
jh(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.N(s,10)|55296)>>>0,s&1023|56320)}}throw A.f(A.aq(a,0,1114111,null,null))},
ap(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.aO(s,b)
q.b=""
if(c!=null&&c.a!==0)c.K(0,new A.e9(q,r,s))
return J.iI(a,new A.cW(B.J,0,s,r,0))},
jd(a,b,c){var s,r=c==null||c.a===0
if(r){if(!!a.$0)return a.$0()
s=a[""+"$0"]
if(s!=null)return s.apply(a,b)}return A.jc(a,b,c)},
jc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.$R
if(0<f)return A.ap(a,b,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.aj(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.ap(a,b,c)
if(0===f)return o.apply(a,b)
return A.ap(a,b,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.ap(a,b,c)
n=f+q.length
if(0>n)return A.ap(a,b,null)
if(0<n){m=q.slice(0-f)
l=A.b8(b,t.A)
B.a.aO(l,m)}else l=b
return o.apply(a,l)}else{if(0>f)return A.ap(a,b,c)
l=A.b8(b,t.A)
k=Object.keys(q)
if(c==null)for(r=k.length,j=0;j<k.length;k.length===r||(0,A.a9)(k),++j){i=q[A.n(k[j])]
if(B.o===i)return A.ap(a,l,c)
B.a.n(l,i)}else{for(r=k.length,h=0,j=0;j<k.length;k.length===r||(0,A.a9)(k),++j){g=A.n(k[j])
if(c.a4(g)){++h
B.a.n(l,c.j(0,g))}else{i=q[g]
if(B.o===i)return A.ap(a,l,c)
B.a.n(l,i)}}if(h!==c.a)return A.ap(a,l,c)}return o.apply(a,l)}},
jf(a){var s=a.$thrownJsError
if(s==null)return null
return A.aX(s)},
hp(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.I(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
o(a,b){if(a==null)J.b_(a)
throw A.f(A.eX(a,b))},
eX(a,b){var s,r="index"
if(!A.hV(b))return new A.a7(!0,b,r,null)
s=A.P(J.b_(a))
if(b<0||b>=s)return A.hg(b,s,a,r)
return A.hq(b,r)},
kL(a){return new A.a7(!0,a,null,null)},
f(a){return A.I(a,new Error())},
I(a,b){var s
if(a==null)a=new A.ag()
b.dartException=a
s=A.lj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
lj(){return J.cI(this.dartException)},
cF(a,b){throw A.I(a,b==null?new Error():b)},
cG(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.cF(A.k6(a,b,c),s)},
k6(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.a.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.cd("'"+s+"': Cannot "+o+" "+l+k+n)},
a9(a){throw A.f(A.ay(a))},
ah(a){var s,r,q,p,o,n
a=A.i9(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.p([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.en(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eo(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hw(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fz(a,b){var s=b==null,r=s?null:b.method
return new A.cY(a,r,s?null:b.receiver)},
ax(a){var s
if(a==null)return new A.e6(a)
if(a instanceof A.bA){s=a.a
return A.aw(a,s==null?A.aT(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aw(a,a.dartException)
return A.kH(a)},
aw(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.N(r,16)&8191)===10)switch(q){case 438:return A.aw(a,A.fz(A.k(s)+" (Error "+q+")",null))
case 445:case 5007:A.k(s)
return A.aw(a,new A.bU())}}if(a instanceof TypeError){p=$.ii()
o=$.ij()
n=$.ik()
m=$.il()
l=$.ip()
k=$.iq()
j=$.io()
$.im()
i=$.is()
h=$.ir()
g=p.I(s)
if(g!=null)return A.aw(a,A.fz(A.n(s),g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.aw(a,A.fz(A.n(s),g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null){A.n(s)
return A.aw(a,new A.bU())}}return A.aw(a,new A.dq(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.c5()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aw(a,new A.a7(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.c5()
return a},
aX(a){var s
if(a instanceof A.bA)return a.b
if(a==null)return new A.ct(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ct(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fX(a){if(a==null)return J.X(a)
if(typeof a=="object")return A.bW(a)
return J.X(a)},
kP(a){if(typeof a=="number")return B.f.gu(a)
if(a instanceof A.dG)return A.bW(a)
if(a instanceof A.a0)return a.gu(a)
if(a instanceof A.ad)return a.gu(0)
return A.fX(a)},
kU(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.E(0,a[s],a[r])}return b},
kV(a,b){var s,r=a.length
for(s=0;s<r;++s)b.n(0,a[s])
return b},
kh(a,b,c,d,e,f){t.Z.a(a)
switch(A.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(A.hf("Unsupported number of arguments for wrapped closure"))},
dK(a,b){var s=a.$identity
if(!!s)return s
s=A.kQ(a,b)
a.$identity=s
return s},
kQ(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.kh)},
iQ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dl().constructor.prototype):Object.create(new A.b1(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.hd(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.iM(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.hd(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
iM(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.iK)}throw A.f("Error in functionType of tearoff")},
iN(a,b,c,d){var s=A.hc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hd(a,b,c,d){if(c)return A.iP(a,b,d)
return A.iN(b.length,d,a,b)},
iO(a,b,c,d){var s=A.hc,r=A.iL
switch(b?-1:a){case 0:throw A.f(new A.dk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
iP(a,b,c){var s,r
if($.ha==null)$.ha=A.h9("interceptor")
if($.hb==null)$.hb=A.h9("receiver")
s=b.length
r=A.iO(s,c,a,b)
return r},
fQ(a){return A.iQ(a)},
iK(a,b){return A.cz(v.typeUniverse,A.aY(a.a),b)},
hc(a){return a.a},
iL(a){return a.b},
h9(a){var s,r,q,p=new A.b1("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.f(A.bu("Field name "+a+" not found.",null))},
eZ(a){return v.getIsolateTag(a)},
M(){return v.G},
l4(a){var s,r,q,p,o,n=A.n($.i6.$1(a)),m=$.eY[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.hP($.i2.$2(a,n))
if(q!=null){m=$.eY[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fg(s)
$.eY[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.f2[n]=s
return s}if(p==="-"){o=A.fg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.i7(a,s)
if(p==="*")throw A.f(A.hx(n))
if(v.leafTags[n]===true){o=A.fg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.i7(a,s)},
i7(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fW(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fg(a){return J.fW(a,!1,null,!!a.$iT)},
l6(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fg(s)
else return J.fW(s,c,null,null)},
l_(){if(!0===$.fU)return
$.fU=!0
A.l0()},
l0(){var s,r,q,p,o,n,m,l
$.eY=Object.create(null)
$.f2=Object.create(null)
A.kZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.i8.$1(o)
if(n!=null){m=A.l6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kZ(){var s,r,q,p,o,n,m=B.r()
m=A.br(B.t,A.br(B.u,A.br(B.m,A.br(B.m,A.br(B.v,A.br(B.w,A.br(B.x(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.i6=new A.f_(p)
$.i2=new A.f0(o)
$.i8=new A.f1(n)},
br(a,b){return a(b)||b},
jI(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.o(b,s)
if(!J.a6(r,b[s]))return!1}return!0},
kR(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hk(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.f(new A.dX("Illegal RegExp pattern ("+String(o)+")",a))},
lf(a,b,c){var s=a.indexOf(b,c)
return s>=0},
i5(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
i9(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m(a,b,c){var s
if(typeof b=="string")return A.li(a,b,c)
if(b instanceof A.bE){s=b.gaK()
s.lastIndex=0
return a.replace(s,A.i5(c))}return A.lh(a,b,c)},
lh(a,b,c){var s,r,q,p
for(s=J.iE(b,a),s=s.gB(s),r=0,q="";s.p();){p=s.gt()
q=q+a.substring(r,p.gY())+c
r=p.gaq()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
li(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.i9(b),"g"),A.i5(c))},
i1(a){return a},
lg(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.am(0,a),s=new A.cf(s.a,s.b,s.c),r=t.e,q=0,p="";s.p();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.k(A.i1(B.b.L(a,q,m)))+A.k(c.$1(o))
q=m+n[0].length}s=p+A.k(A.i1(B.b.Z(a,q)))
return s.charCodeAt(0)==0?s:s},
cp:function cp(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a){this.a=a},
bx:function bx(a,b){this.a=a
this.$ti=b},
b3:function b3(){},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b){this.a=a
this.$ti=b},
ck:function ck(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
ea:function ea(a){this.a=a},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(){},
en:function en(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bU:function bU(){},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a){this.a=a},
e6:function e6(a){this.a=a},
bA:function bA(a,b){this.a=a
this.b=b},
ct:function ct(a){this.a=a
this.b=null},
ak:function ak(){},
cO:function cO(){},
cP:function cP(){},
dn:function dn(){},
dl:function dl(){},
b1:function b1(a,b){this.a=a
this.b=b},
dk:function dk(a){this.a=a},
eG:function eG(){},
ac:function ac(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e0:function e0(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aC:function aC(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bI:function bI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
a0:function a0(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bE:function bE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dA:function dA(a){this.b=a},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dm:function dm(a,b){this.a=a
this.c=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aU(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.eX(b,a))},
bb:function bb(){},
bS:function bS(){},
d1:function d1(){},
bc:function bc(){},
bQ:function bQ(){},
bR:function bR(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
bT:function bT(){},
d9:function d9(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
fE(a,b){var s=b.c
return s==null?b.c=A.cx(a,"aA",[b.x]):s},
hs(a){var s=a.w
if(s===6||s===7)return A.hs(a.x)
return s===11||s===12},
jn(a){return a.as},
l9(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
av(a){return A.eL(v.typeUniverse,a,!1)},
aV(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aV(a1,s,a3,a4)
if(r===s)return a2
return A.hG(a1,r,!0)
case 7:s=a2.x
r=A.aV(a1,s,a3,a4)
if(r===s)return a2
return A.hF(a1,r,!0)
case 8:q=a2.y
p=A.bq(a1,q,a3,a4)
if(p===q)return a2
return A.cx(a1,a2.x,p)
case 9:o=a2.x
n=A.aV(a1,o,a3,a4)
m=a2.y
l=A.bq(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fJ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bq(a1,j,a3,a4)
if(i===j)return a2
return A.hH(a1,k,i)
case 11:h=a2.x
g=A.aV(a1,h,a3,a4)
f=a2.y
e=A.kD(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hE(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bq(a1,d,a3,a4)
o=a2.x
n=A.aV(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fK(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.f(A.cM("Attempted to substitute unexpected RTI kind "+a0))}},
bq(a,b,c,d){var s,r,q,p,o=b.length,n=A.eM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aV(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
kE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.eM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aV(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
kD(a,b,c,d){var s,r=b.a,q=A.bq(a,r,c,d),p=b.b,o=A.bq(a,p,c,d),n=b.c,m=A.kE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dy()
s.a=q
s.b=o
s.c=m
return s},
p(a,b){a[v.arrayRti]=b
return a},
i4(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kY(s)
return a.$S()}return null},
l1(a,b){var s
if(A.hs(b))if(a instanceof A.ak){s=A.i4(a)
if(s!=null)return s}return A.aY(a)},
aY(a){if(a instanceof A.t)return A.G(a)
if(Array.isArray(a))return A.ai(a)
return A.fL(J.aj(a))},
ai(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
G(a){var s=a.$ti
return s!=null?s:A.fL(a)},
fL(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.kd(a,s)},
kd(a,b){var s=a instanceof A.ak?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.jR(v.typeUniverse,s.name)
b.$ccache=r
return r},
kY(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eL(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
bs(a){return A.aW(A.G(a))},
fO(a){var s
if(a instanceof A.a0)return A.kS(a.$r,a.a0())
s=a instanceof A.ak?A.i4(a):null
if(s!=null)return s
if(t.dm.b(a))return J.iH(a).a
if(Array.isArray(a))return A.ai(a)
return A.aY(a)},
aW(a){var s=a.r
return s==null?a.r=new A.dG(a):s},
kS(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.o(q,0)
s=A.cz(v.typeUniverse,A.fO(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.o(q,r)
s=A.hJ(v.typeUniverse,s,A.fO(q[r]))}return A.cz(v.typeUniverse,s,a)},
a5(a){return A.aW(A.eL(v.typeUniverse,a,!1))},
kc(a){var s=this
s.b=A.kB(s)
return s.b(a)},
kB(a){var s,r,q,p,o
if(a===t.K)return A.kn
if(A.aZ(a))return A.kr
s=a.w
if(s===6)return A.ka
if(s===1)return A.hX
if(s===7)return A.ki
r=A.kA(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aZ)){a.f="$i"+q
if(q==="h")return A.kl
if(a===t.m)return A.kk
return A.kq}}else if(s===10){p=A.kR(a.x,a.y)
o=p==null?A.hX:p
return o==null?A.aT(o):o}return A.k8},
kA(a){if(a.w===8){if(a===t.S)return A.hV
if(a===t.i||a===t.o)return A.km
if(a===t.N)return A.kp
if(a===t.v)return A.fM}return null},
kb(a){var s=this,r=A.k7
if(A.aZ(s))r=A.jY
else if(s===t.K)r=A.aT
else if(A.bt(s)){r=A.k9
if(s===t.h6)r=A.jW
else if(s===t.dk)r=A.hP
else if(s===t.u)r=A.jT
else if(s===t.cg)r=A.hO
else if(s===t.cD)r=A.jV
else if(s===t.z)r=A.jX}else if(s===t.S)r=A.P
else if(s===t.N)r=A.n
else if(s===t.v)r=A.hM
else if(s===t.o)r=A.hN
else if(s===t.i)r=A.jU
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
k8(a){var s=this
if(a==null)return A.bt(s)
return A.l2(v.typeUniverse,A.l1(a,s),s)},
ka(a){if(a==null)return!0
return this.x.b(a)},
kq(a){var s,r=this
if(a==null)return A.bt(r)
s=r.f
if(a instanceof A.t)return!!a[s]
return!!J.aj(a)[s]},
kl(a){var s,r=this
if(a==null)return A.bt(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.t)return!!a[s]
return!!J.aj(a)[s]},
kk(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.t)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
hW(a){if(typeof a=="object"){if(a instanceof A.t)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
k7(a){var s=this
if(a==null){if(A.bt(s))return a}else if(s.b(a))return a
throw A.I(A.hS(a,s),new Error())},
k9(a){var s=this
if(a==null||s.b(a))return a
throw A.I(A.hS(a,s),new Error())},
hS(a,b){return new A.cv("TypeError: "+A.hz(a,A.U(b,null)))},
hz(a,b){return A.b5(a)+": type '"+A.U(A.fO(a),null)+"' is not a subtype of type '"+b+"'"},
a1(a,b){return new A.cv("TypeError: "+A.hz(a,b))},
ki(a){var s=this
return s.x.b(a)||A.fE(v.typeUniverse,s).b(a)},
kn(a){return a!=null},
aT(a){if(a!=null)return a
throw A.I(A.a1(a,"Object"),new Error())},
kr(a){return!0},
jY(a){return a},
hX(a){return!1},
fM(a){return!0===a||!1===a},
hM(a){if(!0===a)return!0
if(!1===a)return!1
throw A.I(A.a1(a,"bool"),new Error())},
jT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.I(A.a1(a,"bool?"),new Error())},
jU(a){if(typeof a=="number")return a
throw A.I(A.a1(a,"double"),new Error())},
jV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.I(A.a1(a,"double?"),new Error())},
hV(a){return typeof a=="number"&&Math.floor(a)===a},
P(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.I(A.a1(a,"int"),new Error())},
jW(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.I(A.a1(a,"int?"),new Error())},
km(a){return typeof a=="number"},
hN(a){if(typeof a=="number")return a
throw A.I(A.a1(a,"num"),new Error())},
hO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.I(A.a1(a,"num?"),new Error())},
kp(a){return typeof a=="string"},
n(a){if(typeof a=="string")return a
throw A.I(A.a1(a,"String"),new Error())},
hP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.I(A.a1(a,"String?"),new Error())},
c(a){if(A.hW(a))return a
throw A.I(A.a1(a,"JSObject"),new Error())},
jX(a){if(a==null)return a
if(A.hW(a))return a
throw A.I(A.a1(a,"JSObject?"),new Error())},
i_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.U(a[q],b)
return s},
kw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.i_(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.U(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hT(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.p([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.n(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.o(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.U(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.U(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.U(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.U(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.U(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
U(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.U(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.U(a.x,b)+">"
if(l===8){p=A.kG(a.x)
o=a.y
return o.length>0?p+("<"+A.i_(o,b)+">"):p}if(l===10)return A.kw(a,b)
if(l===11)return A.hT(a,b,null)
if(l===12)return A.hT(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.o(b,n)
return b[n]}return"?"},
kG(a){var s=A.id(a)
if(s!=null)return s
return"minified:"+a},
jS(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
jR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eL(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cy(a,5,"#")
q=A.eM(s)
for(p=0;p<s;++p)q[p]=r
o=A.cx(a,b,q)
n[b]=o
return o}else return m},
jQ(a,b){return A.hK(a.tR,b)},
jP(a,b){return A.hK(a.eT,b)},
eL(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hI(a,null,b,!1)
r.set(b,s)
return s},
cz(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hI(a,b,c,!0)
q.set(c,r)
return r},
hJ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fJ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
hI(a,b,c,d){return A.jG(A.jA(a,b,c,d))},
at(a,b){b.a=A.kb
b.b=A.kc
return b},
cy(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a3(null,null)
s.w=b
s.as=c
r=A.at(a,s)
a.eC.set(c,r)
return r},
hG(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.jN(a,b,r,c)
a.eC.set(r,s)
return s},
jN(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aZ(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bt(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a3(null,null)
q.w=6
q.x=b
q.as=c
return A.at(a,q)},
hF(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.jL(a,b,r,c)
a.eC.set(r,s)
return s},
jL(a,b,c,d){var s,r
if(d){s=b.w
if(A.aZ(b)||b===t.K)return b
else if(s===1)return A.cx(a,"aA",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.a3(null,null)
r.w=7
r.x=b
r.as=c
return A.at(a,r)},
jO(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a3(null,null)
s.w=13
s.x=b
s.as=q
r=A.at(a,s)
a.eC.set(q,r)
return r},
cw(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
jK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cx(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cw(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a3(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.at(a,r)
a.eC.set(p,q)
return q},
fJ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.cw(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a3(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.at(a,o)
a.eC.set(q,n)
return n},
hH(a,b,c){var s,r,q="+"+(b+"("+A.cw(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a3(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.at(a,s)
a.eC.set(q,r)
return r},
hE(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cw(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cw(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.jK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a3(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.at(a,p)
a.eC.set(r,o)
return o},
fK(a,b,c,d){var s,r=b.as+("<"+A.cw(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.jM(a,b,c,r,d)
a.eC.set(r,s)
return s},
jM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.eM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aV(a,b,r,0)
m=A.bq(a,c,r,0)
return A.fK(a,n,m,c!==m)}}l=new A.a3(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.at(a,l)},
jA(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jG(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.jC(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hB(a,r,l,k,!1)
else if(q===46)r=A.hB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aS(a.u,a.e,k.pop()))
break
case 94:k.push(A.jO(a.u,k.pop()))
break
case 35:k.push(A.cy(a.u,5,"#"))
break
case 64:k.push(A.cy(a.u,2,"@"))
break
case 126:k.push(A.cy(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.jE(a,k)
break
case 38:A.jD(a,k)
break
case 63:p=a.u
k.push(A.hG(p,A.aS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hF(p,A.aS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.jB(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.hC(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.jH(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.aS(a.u,a.e,m)},
jC(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.jS(s,o.x)[p]
if(n==null)A.cF('No "'+p+'" in "'+A.jn(o)+'"')
d.push(A.cz(s,o,n))}else d.push(p)
return m},
jE(a,b){var s,r=a.u,q=A.hA(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cx(r,p,q))
else{s=A.aS(r,a.e,p)
switch(s.w){case 11:b.push(A.fK(r,s,q,a.n))
break
default:b.push(A.fJ(r,s,q))
break}}},
jB(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.hA(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aS(p,a.e,o)
q=new A.dy()
q.a=s
q.b=n
q.c=m
b.push(A.hE(p,r,q))
return
case-4:b.push(A.hH(p,b.pop(),s))
return
default:throw A.f(A.cM("Unexpected state under `()`: "+A.k(o)))}},
jD(a,b){var s=b.pop()
if(0===s){b.push(A.cy(a.u,1,"0&"))
return}if(1===s){b.push(A.cy(a.u,4,"1&"))
return}throw A.f(A.cM("Unexpected extended operation "+A.k(s)))},
hA(a,b){var s=b.splice(a.p)
A.hC(a.u,a.e,s)
a.p=b.pop()
return s},
aS(a,b,c){if(typeof c=="string")return A.cx(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.jF(a,b,c)}else return c},
hC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aS(a,b,c[s])},
jH(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aS(a,b,c[s])},
jF(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.f(A.cM("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.f(A.cM("Bad index "+c+" for "+b.i(0)))},
l2(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.H(a,b,null,c,null)
r.set(c,s)}return s},
H(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aZ(d))return!0
s=b.w
if(s===4)return!0
if(A.aZ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.H(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.H(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.H(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.H(a,b.x,c,d,e))return!1
return A.H(a,A.fE(a,b),c,d,e)}if(s===6)return A.H(a,p,c,d,e)&&A.H(a,b.x,c,d,e)
if(q===7){if(A.H(a,b,c,d.x,e))return!0
return A.H(a,b,c,A.fE(a,d),e)}if(q===6)return A.H(a,b,c,p,e)||A.H(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.H(a,j,c,i,e)||!A.H(a,i,e,j,c))return!1}return A.hU(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.hU(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.kj(a,b,c,d,e)}if(o&&q===10)return A.ko(a,b,c,d,e)
return!1},
hU(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.H(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.H(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.H(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.H(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.H(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
kj(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cz(a,b,r[o])
return A.hL(a,p,null,c,d.y,e)}return A.hL(a,b.y,null,c,d.y,e)},
hL(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.H(a,b[s],d,e[s],f))return!1
return!0},
ko(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.H(a,r[s],c,q[s],e))return!1
return!0},
bt(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aZ(a))if(s!==6)r=s===7&&A.bt(a.x)
return r},
aZ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
hK(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
eM(a){return a>0?new Array(a):v.typeUniverse.sEA},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
dy:function dy(){this.c=this.b=this.a=null},
dG:function dG(a){this.a=a},
dx:function dx(){},
cv:function cv(a){this.a=a},
jv(){var s,r,q
if(self.scheduleImmediate!=null)return A.kM()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dK(new A.eq(s),1)).observe(r,{childList:true})
return new A.ep(s,r,q)}else if(self.setImmediate!=null)return A.kN()
return A.kO()},
jw(a){self.scheduleImmediate(A.dK(new A.er(t.M.a(a)),0))},
jx(a){self.setImmediate(A.dK(new A.es(t.M.a(a)),0))},
jy(a){A.fF(B.B,t.M.a(a))},
fF(a,b){return A.jJ(a.a/1000|0,b)},
jJ(a,b){var s=new A.eJ()
s.b6(a,b)
return s},
ku(a){return new A.dt(new A.D($.y,a.h("D<0>")),a.h("dt<0>"))},
k0(a,b){a.$2(0,null)
b.b=!0
return b.a},
hQ(a,b){A.k1(a,b)},
k_(a,b){b.an(a)},
jZ(a,b){b.ap(A.ax(a),A.aX(a))},
k1(a,b){var s,r,q=new A.eN(b),p=new A.eO(b)
if(a instanceof A.D)a.aM(q,p,t.A)
else{s=t.A
if(a instanceof A.D)a.aY(q,p,s)
else{r=new A.D($.y,t._)
r.a=8
r.c=a
r.aM(q,p,s)}}},
kI(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.y.aW(new A.eT(s),t.H,t.S,t.A)},
hD(a,b,c){return 0},
fv(a){var s
if(t.Q.b(a)){s=a.gU()
if(s!=null)return s}return B.i},
iV(a,b){var s
if(!b.b(null))throw A.f(A.fu(null,"computation","The type parameter is not nullable"))
s=new A.D($.y,b.h("D<0>"))
A.jq(a,new A.dY(null,s,b))
return s},
ke(a,b){if($.y===B.e)return null
return null},
kf(a,b){if($.y!==B.e)A.ke(a,b)
if(b==null)if(t.Q.b(a)){b=a.gU()
if(b==null){A.hp(a,B.i)
b=B.i}}else b=B.i
else if(t.Q.b(a))A.hp(a,b)
return new A.Y(a,b)},
fH(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.jo()
b.af(new A.Y(new A.a7(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.aL(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.W()
b.a_(o.a)
A.aP(b,p)
return}b.a^=2
A.dI(null,null,b.b,t.M.a(new A.ex(o,b)))},
aP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.eR(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.aP(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.eR(j.a,j.b)
return}g=$.y
if(g!==h)$.y=h
else g=null
c=c.c
if((c&15)===8)new A.eB(q,d,n).$0()
else if(o){if((c&1)!==0)new A.eA(q,j).$0()}else if((c&2)!==0)new A.ez(d,q).$0()
if(g!=null)$.y=g
c=q.c
if(c instanceof A.D){p=q.a.$ti
p=p.h("aA<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.a2(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.fH(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.a2(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
kx(a,b){var s
if(t.R.b(a))return b.aW(a,t.A,t.K,t.l)
s=t.w
if(s.b(a))return s.a(a)
throw A.f(A.fu(a,"onError",u.c))},
kv(){var s,r
for(s=$.bp;s!=null;s=$.bp){$.cD=null
r=s.b
$.bp=r
if(r==null)$.cC=null
s.a.$0()}},
kC(){$.fN=!0
try{A.kv()}finally{$.cD=null
$.fN=!1
if($.bp!=null)$.fZ().$1(A.i3())}},
i0(a){var s=new A.du(a),r=$.cC
if(r==null){$.bp=$.cC=s
if(!$.fN)$.fZ().$1(A.i3())}else $.cC=r.b=s},
kz(a){var s,r,q,p=$.bp
if(p==null){A.i0(a)
$.cD=$.cC
return}s=new A.du(a)
r=$.cD
if(r==null){s.b=p
$.bp=$.cD=s}else{q=r.b
s.b=q
$.cD=r.b=s
if(q==null)$.cC=s}},
lr(a,b){A.fP(a,"stream",t.K)
return new A.dC(b.h("dC<0>"))},
jq(a,b){var s=$.y
if(s===B.e)return A.fF(a,t.M.a(b))
return A.fF(a,t.M.a(s.aP(b)))},
eR(a,b){A.kz(new A.eS(a,b))},
hY(a,b,c,d,e){var s,r=$.y
if(r===c)return d.$0()
$.y=c
s=r
try{r=d.$0()
return r}finally{$.y=s}},
hZ(a,b,c,d,e,f,g){var s,r=$.y
if(r===c)return d.$1(e)
$.y=c
s=r
try{r=d.$1(e)
return r}finally{$.y=s}},
ky(a,b,c,d,e,f,g,h,i){var s,r=$.y
if(r===c)return d.$2(e,f)
$.y=c
s=r
try{r=d.$2(e,f)
return r}finally{$.y=s}},
dI(a,b,c,d){t.M.a(d)
if(B.e!==c){d=c.aP(d)
d=d}A.i0(d)},
eq:function eq(a){this.a=a},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
eJ:function eJ(){},
eK:function eK(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=!1
this.$ti=b},
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
eT:function eT(a){this.a=a},
cu:function cu(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
as:function as(a,b){this.a=a
this.$ti=b},
Y:function Y(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(){},
cg:function cg(a,b){this.a=a
this.$ti=b},
aO:function aO(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
D:function D(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eu:function eu(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b){this.a=a
this.b=b},
eD:function eD(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
du:function du(a){this.a=a
this.b=null},
c6:function c6(){},
ej:function ej(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
dC:function dC(a){this.$ti=a},
cB:function cB(){},
dB:function dB(){},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a,b){this.a=a
this.b=b},
e1(a,b){return new A.ac(a.h("@<0>").k(b).h("ac<1,2>"))},
fA(a){return new A.aQ(a.h("aQ<0>"))},
j7(a,b){return b.h("hl<0>").a(A.kV(a,new A.aQ(b.h("aQ<0>"))))},
fI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jz(a,b,c){var s=new A.aR(a,b,c.h("aR<0>"))
s.c=a.e
return s},
e3(a){var s,r
if(A.fV(a))return"{...}"
s=new A.c7("")
try{r={}
B.a.n($.V,a)
s.a+="{"
r.a=!0
a.K(0,new A.e4(r,s))
s.a+="}"}finally{if(0>=$.V.length)return A.o($.V,-1)
$.V.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dz:function dz(a){this.a=a
this.b=null},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
q:function q(){},
b9:function b9(){},
e2:function e2(a){this.a=a},
e4:function e4(a,b){this.a=a
this.b=b},
cA:function cA(){},
ba:function ba(){},
cc:function cc(){},
be:function be(){},
cs:function cs(){},
bo:function bo(){},
iR(a,b){a=A.I(a,new Error())
if(a==null)a=A.aT(a)
a.stack=b.i(0)
throw a},
j8(a,b,c,d){var s,r=c?J.j0(a,d):J.j_(a,d)
if(a!==0)for(s=0;s<r.length;++s)r[s]=b
return r},
j9(a,b,c){var s,r,q=A.p([],c.h("w<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a9)(a),++r)B.a.n(q,c.a(a[r]))
q.$flags=1
return q},
b8(a,b){var s,r
if(Array.isArray(a))return A.p(a.slice(0),b.h("w<0>"))
s=A.p([],b.h("w<0>"))
for(r=J.cH(a);r.p();)B.a.n(s,r.gt())
return s},
fD(a){return new A.bE(a,A.hk(a,!1,!0,!1,!1,""))},
hv(a,b,c){var s=J.cH(b)
if(!s.p())return a
if(c.length===0){do a+=A.k(s.gt())
while(s.p())}else{a+=A.k(s.gt())
while(s.p())a=a+c+A.k(s.gt())}return a},
hm(a,b){return new A.db(a,b.gbR(),b.gbT(),b.gbS())},
jo(){return A.aX(new Error())},
b5(a){if(typeof a=="number"||A.fM(a)||a==null)return J.cI(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ho(a)},
iS(a,b){A.fP(a,"error",t.K)
A.fP(b,"stackTrace",t.l)
A.iR(a,b)},
cM(a){return new A.cL(a)},
bu(a,b){return new A.a7(!1,null,b,a)},
fu(a,b,c){return new A.a7(!0,a,b,c)},
hq(a,b){return new A.bX(null,null,!0,a,b,"Value not in range")},
aq(a,b,c,d,e){return new A.bX(b,c,!0,a,d,"Invalid value")},
jj(a,b,c){if(0>a||a>c)throw A.f(A.aq(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.aq(b,a,c,"end",null))
return b}return c},
ji(a,b){if(a<0)throw A.f(A.aq(a,0,null,b,null))
return a},
hg(a,b,c,d){return new A.cS(b,!0,a,d,"Index out of range")},
bj(a){return new A.cd(a)},
hx(a){return new A.dp(a)},
eh(a){return new A.bg(a)},
ay(a){return new A.cQ(a)},
hf(a){return new A.bk(a)},
iZ(a,b,c){var s,r
if(A.fV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.p([],t.s)
B.a.n($.V,a)
try{A.ks(a,s)}finally{if(0>=$.V.length)return A.o($.V,-1)
$.V.pop()}r=A.hv(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fx(a,b,c){var s,r
if(A.fV(a))return b+"..."+c
s=new A.c7(b)
B.a.n($.V,a)
try{r=s
r.a=A.hv(r.a,a,", ")}finally{if(0>=$.V.length)return A.o($.V,-1)
$.V.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ks(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.p())return
s=A.k(l.gt())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.o(b,-1)
r=b.pop()
if(0>=b.length)return A.o(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.p()){if(j<=4){B.a.n(b,A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.o(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.p();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.o(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.k(p)
r=A.k(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.o(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
fB(a,b,c,d){var s
if(B.h===c){s=B.c.gu(a)
b=J.X(b)
return A.el(A.ae(A.ae($.dO(),s),b))}if(B.h===d){s=B.c.gu(a)
b=J.X(b)
c=J.X(c)
return A.el(A.ae(A.ae(A.ae($.dO(),s),b),c))}s=B.c.gu(a)
b=J.X(b)
c=J.X(c)
d=J.X(d)
d=A.el(A.ae(A.ae(A.ae(A.ae($.dO(),s),b),c),d))
return d},
jb(a){var s,r,q=$.dO()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a9)(a),++r)q=A.ae(q,J.X(a[r]))
return A.el(q)},
k4(a,b){return 65536+((a&1023)<<10)+(b&1023)},
e5:function e5(a,b){this.a=a
this.b=b},
al:function al(a){this.a=a},
z:function z(){},
cL:function cL(a){this.a=a},
ag:function ag(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cS:function cS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a){this.a=a},
dp:function dp(a){this.a=a},
bg:function bg(a){this.a=a},
cQ:function cQ(a){this.a=a},
dd:function dd(){},
c5:function c5(){},
bk:function bk(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
d:function d(){},
r:function r(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(){},
t:function t(){},
dF:function dF(){},
ei:function ei(){this.b=this.a=0},
aJ:function aJ(a){this.a=a},
dj:function dj(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
c7:function c7(a){this.a=a},
a_:function a_(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a},
e:function e(){},
bZ:function bZ(){},
l:function l(a,b,c,d){var _=this
_.e=a
_.a=b
_.b=c
_.$ti=d},
j:function j(a,b,c){this.e=a
this.a=b
this.b=c},
jr(a,b){var s,r,q,p,o
for(s=new A.bO(new A.c8($.ih(),t.dC),a,0,!1,t.J).gB(0),r=1,q=0;s.p();q=o){p=s.e
p===$&&A.ib("current")
o=p.d
if(b<o)return A.p([r,b-q+1],t.t);++r}return A.p([r,b-q+1],t.t)},
em(a,b){var s=A.jr(a,b)
return""+s[0]+":"+s[1]},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aB:function aB(){},
kF(){return A.cF(A.bj("Unsupported operation on parser reference"))},
B:function B(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bP:function bP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.$ti=e},
b6:function b6(a,b){this.b=a
this.a=b},
d0(a,b,c,d,e){return new A.bL(b,!1,a,d.h("@<0>").k(e).h("bL<1,2>"))},
bL:function bL(a,b,c,d){var _=this
_.b=a
_.c=b
_.a=c
_.$ti=d},
c8:function c8(a,b){this.a=a
this.$ti=b},
aL(a,b){var s=A.b2(B.n,"whitespace expected",!1),r=s
return new A.c9(s,r,a,b.h("c9<0>"))},
c9:function c9(a,b,c,d){var _=this
_.b=a
_.c=b
_.a=c
_.$ti=d},
dM(a){var s,r,q=B.b.ab(a,"^"),p=q?B.b.Z(a,1):a,o=$.iu(),n=o.l(new A.a_(p,0)).gA(),m=A.l8(n,!1)
if(q)m=m instanceof A.ab?new A.ab(!m.a):new A.dc(m)
s=A.ic(a,!1)
r="["+s+"] expected"
return A.b2(m,r,!1)},
k5(a){var s=A.b2(B.j,"input expected",a),r=t.N,q=t.d,p=A.d0(s,new A.eP(a),!1,r,q)
return A.he(A.df(A.dV(A.p([A.hr(new A.aK(s,A.W("-"),s,t.dx),new A.eQ(a),r,r,r,q),p],t.b9),q),0,9007199254740991,q),t.h2)},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
Z:function Z(){},
c3:function c3(a){this.a=a},
ab:function ab(a){this.a=a},
cZ:function cZ(){},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a){this.a=a},
N:function N(a,b){this.a=a
this.b=b},
dh:function dh(a){this.a=a},
dr:function dr(){},
ic(a,b){var s=new A.aa(a)
return s.bP(s,new A.fo(),t.N).bN(0)},
fo:function fo(){},
l8(a,b){var s,r,q,p,o,n,m,l,k,j=A.b8(a,t.d)
j.$flags=1
s=j
B.a.X(s,new A.fi())
r=A.p([],t.dE)
for(j=s.length,q=0;q<s.length;s.length===j||(0,A.a9)(s),++q){p=s[q]
if(r.length===0)B.a.n(r,p)
else{o=B.a.ga7(r)
n=o.b
if(n+1>=p.a){n=Math.max(n,p.b)
B.a.E(r,r.length-1,new A.N(o.a,n))}else B.a.n(r,p)}}j=r.length
if(j===0)return B.A
else if(j===1){if(0>=j)return A.o(r,0)
m=r[0]
j=m.a
if(j<=0)n=m.b>=65535
else n=!1
if(n)return B.j
else if(j===m.b)return new A.c3(j)
else return m}else{l=B.c.N(B.a.ga7(r).b-B.a.gar(r).a+32,3)
j=r.length
if(l>1024&&j*8<l>>>3){j=new A.dh(new Uint32Array(2*j))
j.b5(r)
return j}j=B.a.gar(r)
n=B.a.ga7(r)
k=B.c.N(B.a.ga7(r).b-B.a.gar(r).a+31+1,5)
j=new A.d_(j.a,n.b,new Uint32Array(k))
j.b4(r)
return j}},
fi:function fi(){},
dV(a,b){var s=A.b8(a,b.h("e<0>"))
s.$flags=1
return new A.bw(A.kT(),s,b.h("bw<0>"))},
bw:function bw(a,b,c){this.b=a
this.a=b
this.$ti=c},
E:function E(){},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
fn(a,b,c,d,e,f){return new A.aK(a,b,c,d.h("@<0>").k(e).k(f).h("aK<1,2,3>"))},
hr(a,b,c,d,e,f){return A.d0(a,new A.ec(b,c,d,e,f),!1,c.h("@<0>").k(d).k(e).h("+(1,2,3)"),f)},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jk(a,b,c,d,e,f,g,h,i){return A.d0(a,new A.ed(b,c,d,e,f,g,h,i),!1,c.h("@<0>").k(d).k(e).k(f).k(g).k(h).h("+(1,2,3,4,5,6)"),i)},
c2:function c2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
ed:function ed(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aH:function aH(){},
hu(a,b,c,d){var s=c==null?new A.b4(null,t.B):c,r=b==null?new A.b4(null,t.B):b
return new A.c4(s,r,a,d.h("c4<0>"))},
c4:function c4(a,b,c,d){var _=this
_.b=a
_.c=b
_.a=c
_.$ti=d},
he(a,b){return A.hu(a,new A.cR("end of input expected"),null,b)},
cR:function cR(a){this.a=a},
b4:function b4(a,b){this.a=a
this.$ti=b},
da:function da(a){this.a=a},
b2(a,b,c){var s
switch(c){case!1:s=a instanceof A.ab&&a.a?new A.cJ(a,b):new A.bf(a,b)
break
case!0:s=a instanceof A.ab&&a.a?new A.cK(a,b):new A.ca(a,b)
break
default:s=null}return s},
cN:function cN(){},
bf:function bf(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
ee(a,b){return A.jm(a,1,9007199254740991,b)},
jm(a,b,c,d){if(a instanceof A.bf)return new A.di(a.a,d,b,c)
else return new A.b6(d,A.df(a,b,c,t.N))},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
df(a,b,c,d){return new A.bV(b,c,a,d.h("bV<0>"))},
bV:function bV(a,b,c,d){var _=this
_.b=a
_.c=b
_.a=c
_.$ti=d},
bd:function bd(){},
ht(a,b,c,d){return new A.c0(b,0,9007199254740991,a,c.h("@<0>").k(d).h("c0<1,2>"))},
c0:function c0(a,b,c,d,e){var _=this
_.e=a
_.b=b
_.c=c
_.a=d
_.$ti=e},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dS:function dS(){},
x:function x(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
dU:function dU(){},
l7(a){return A.lg(a.toLowerCase(),$.it(),t.ey.a(t.gQ.a(new A.fh())),null)},
fh:function fh(){},
a4(a,b,c,d,e){var s=A.kJ(new A.et(c),t.m)
s=s==null?null:A.dH(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.ci(a,b,s,!1,e.h("ci<0>"))},
kJ(a,b){var s=$.y
if(s===B.e)return a
return s.bl(a,b)},
fw:function fw(a,b){this.a=a
this.$ti=b},
ch:function ch(){},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ci:function ci(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
et:function et(a){this.a=a},
cE(a){return A.l3(a)},
l3(a){var s=0,r=A.ku(t.H),q=1,p=[],o,n,m,l,k,j,i,h
var $async$cE=A.kI(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.c($.dP().style).display="block"
l=$.fr()
l.textContent="Connecting to "+a+"..."
k=$.h5()
A.c(k.style).width="0%"
A.c($.fq().style).display="none"
A.c($.h8().style).display="none"
A.c($.h0().style).display="none"
o=new A.cg(new A.D($.y,t.cK),t.O)
j=A.c(new v.G.XMLHttpRequest())
j.open("GET",a)
j.onprogress=A.dH(new A.f3())
j.onload=A.dH(new A.f4(j,o))
j.onerror=A.dH(new A.f5(o,a))
j.onabort=A.dH(new A.f6(o))
j.send()
q=3
s=6
return A.hQ(o.a,$async$cE)
case 6:n=c
A.c(k.style).width="100%"
l.textContent="Downloaded "+B.f.a9(J.b_(n)/1048576,1)+" MB. Parsing entries with PetitParser..."
s=7
return A.hQ(A.iV(B.C,t.H),$async$cE)
case 7:A.la(n,"Source: "+a+" ("+B.f.aX(J.b_(n)/1024)+" KB)")
q=1
s=5
break
case 3:q=2
h=p.pop()
m=A.ax(h)
A.c($.dP().style).display="none"
l=$.fq()
A.c(l.style).display="block"
l.textContent="Failed to load or parse: "+A.k(m)
s=5
break
case 2:s=1
break
case 5:return A.k_(null,r)
case 1:return A.jZ(p.at(-1),r)}})
return A.k0($async$cE,r)},
la(a,b){var s,r,q,p,o,n,m,l=$.dP()
A.c(l.style).display="block"
o=new A.ei()
$.fY()
n=$.fC.$0()
o.a=n
o.b=null
s=o
try{r=$.iC().l(new A.a_(a,0))
q=s.gbn()
if(r instanceof A.j){l=A.hf(r.e+" at line "+r.bY())
throw A.f(l)}$.eU=r.gA()
A.c(l.style).display="none"
l=$.h8()
A.c(l.style).display="block"
l.innerHTML="<strong>Parsed "+J.b_($.eU)+" entries</strong> in <strong>"+A.k(q)+"ms</strong>. "+b
A.lb()
A.dJ()
A.c($.h0().style).display="block"}catch(m){p=A.ax(m)
A.c($.dP().style).display="none"
l=$.fq()
A.c(l.style).display="block"
l.textContent="Error parsing BibTeX data: "+A.k(p)}},
lb(){var s,r,q,p,o,n,m,l,k,j=t.N,i=A.fA(j),h=A.fA(j)
for(j=J.cH($.eU);j.p();){s=j.gt()
i.n(0,s.a.toLowerCase())
r=s.gG().j(0,"Year")
if(r==null)r=""
if(r.length!==0){s=$.ix()
s=s.b.test(r)}else s=!1
if(s)h.n(0,r)}j=$.fs()
j.innerHTML='<option value="">All Types</option>'
q=A.b8(i,i.$ti.c)
B.a.b0(q)
for(s=q.length,p=v.G,o=0;o<q.length;q.length===s||(0,A.a9)(q),++o){n=q[o]
m=A.c(A.c(p.document).createElement("option"))
m.value=n
if(0>=n.length)return A.o(n,0)
m.textContent=n[0].toUpperCase()+B.b.Z(n,1)
A.c(j.appendChild(m))}j=$.ft()
j.innerHTML='<option value="">All Years</option>'
l=A.b8(h,h.$ti.c)
B.a.X(l,new A.fj())
for(s=l.length,o=0;o<l.length;l.length===s||(0,A.a9)(l),++o){k=l[o]
m=A.c(A.c(p.document).createElement("option"))
m.value=k
m.textContent=k
A.c(j.appendChild(m))}},
dJ(){var s=B.b.aa(A.n($.h6().value).toLowerCase()),r=A.n($.fs().value),q=A.n($.ft().value),p=A.n($.h7().value)
r=J.iJ($.eU,new A.eV(r.toLowerCase(),q,s))
r=A.b8(r,r.$ti.h("d.E"))
$.fR=r
B.a.X(r,new A.eW(p))
$.Q=1
A.dN()},
dN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=$.fR.length,b9=B.c.aQ(B.f.bm(b8/25),1,999999),c0=$.Q
if(c0>b9){$.Q=b9
c0=b9}if(c0<1)$.Q=1
$.iD().textContent="Found "+b8+" entries"
s="Page "+$.Q+" of "+b9
$.iA().textContent=s
$.iB().textContent=s
$.h3().disabled=$.Q<=1
$.h4().disabled=$.Q<=1
$.h1().disabled=$.Q>=b9
$.h2().disabled=$.Q>=b9
c0=$.iy()
c0.innerHTML=""
if(b8===0){r=A.c(A.c(v.G.document).createElement("div"))
r.className="status-card"
r.textContent="No matching entries found."
A.c(c0.appendChild(r))
return}q=($.Q-1)*25
p=B.c.aQ(q+25,0,b8)
o=B.a.b2($.fR,q,p)
for(n=o.length,m=v.G,l=t.r,k=l.h("~(1)?"),l=l.c,j=t.s,i=0;i<o.length;o.length===n||(0,A.a9)(o),++i){h=o[i]
g=A.c(A.c(m.document).createElement("div"))
g.className="entry-card"
f=h.a
e=h.gG()
d=e.j(0,"Title")
if(d==null)d=""
c=e.j(0,"Author")
if(c==null)c=""
b=e.j(0,"Year")
if(b==null)b=""
a=e.j(0,"Journal")
if(a==null)a=""
a0=e.j(0,"Booktitle")
if(a0==null)a0=""
a1=e.j(0,"Publisher")
if(a1==null)a1=""
a2=e.j(0,"School")
if(a2==null)a2=""
a3=e.j(0,"Institution")
if(a3==null)a3=""
a4=e.j(0,"Url")
if(a4==null)a4=""
a5=A.p([],j)
if(a.length!==0)B.a.n(a5,a)
if(a0.length!==0)B.a.n(a5,a0)
if(a1.length!==0)B.a.n(a5,a1)
if(a2.length!==0)B.a.n(a5,a2)
if(a3.length!==0)B.a.n(a5,a3)
e=b.length!==0
if(e)B.a.n(a5,b)
a6=B.a.bO(a5,", ")
a7=A.c(A.c(m.document).createElement("div"))
a7.className="entry-header"
a8=A.m(f,"&","&amp;")
a8=A.m(a8,"<","&lt;")
a8=A.m(a8,">","&gt;")
a8=A.m(a8,'"',"&quot;")
a9=A.m(h.b,"&","&amp;")
a9=A.m(a9,"<","&lt;")
a9=A.m(a9,">","&gt;")
a9=A.m(a9,'"',"&quot;")
e=e?'<strong style="color: #7f8c8d;">'+b+"</strong>":""
a7.innerHTML='      <div>\n        <span class="entry-badge '+f.toLowerCase()+'">'+a8+'</span>\n        <span class="entry-citekey">'+a9+"</span>\n      </div>\n      <div>"+e+"</div>\n    "
A.c(g.appendChild(a7))
if(d.length!==0){b0=A.c(A.c(m.document).createElement("div"))
b0.className="entry-title"
b0.textContent=d
A.c(g.appendChild(b0))}if(c.length!==0){b1=A.c(A.c(m.document).createElement("div"))
b1.className="entry-authors"
b1.textContent=c
A.c(g.appendChild(b1))}if(a6.length!==0){b2=A.c(A.c(m.document).createElement("div"))
b2.className="entry-venue"
b2.textContent=a6
A.c(g.appendChild(b2))}b3=A.c(A.c(m.document).createElement("div"))
b3.className="entry-actions"
b4=A.c(A.c(m.document).createElement("button"))
b4.className="button button-outline toggle-btn"
b4.textContent="Show BibTeX"
b5=A.c(A.c(m.document).createElement("button"))
b5.className="button button-outline copy-btn"
b5.textContent="Copy"
A.c(b3.appendChild(b4))
A.c(b3.appendChild(b5))
if(a4.length!==0){b6=A.c(A.c(m.document).createElement("a"))
b6.className="url-link"
b6.href=a4
b6.target="_blank"
b6.textContent="PDF / Link \u2197"
A.c(b3.appendChild(b6))}A.c(g.appendChild(b3))
b7=A.c(A.c(m.document).createElement("div"))
b7.className="raw-bibtex"
b7.textContent=h.i(0)
A.c(g.appendChild(b7))
A.a4(b4,"click",k.a(new A.fl(b7,b4)),!1,l)
A.a4(b5,"click",k.a(new A.fm(h,b5)),!1,l)
A.c(c0.appendChild(g))}},
l5(){var s="click",r="change",q=t.r,p=q.h("~(1)?")
q=q.c
A.a4($.iz(),s,p.a(new A.f7()),!1,q)
A.a4($.h6(),"input",p.a(new A.f8()),!1,q)
A.a4($.fs(),r,p.a(new A.f9()),!1,q)
A.a4($.ft(),r,p.a(new A.fa()),!1,q)
A.a4($.h7(),r,p.a(new A.fb()),!1,q)
A.a4($.h3(),s,p.a(new A.fc()),!1,q)
A.a4($.h4(),s,p.a(new A.fd()),!1,q)
A.a4($.h1(),s,p.a(new A.fe()),!1,q)
A.a4($.h2(),s,p.a(new A.ff()),!1,q)
A.cE(A.n($.h_().value))},
f3:function f3(){},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a},
fj:function fj(){},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
id(a){return v.mangledGlobalNames[a]},
ib(a){throw A.I(A.j6(a),new Error())},
ia(a){throw A.I(A.j5(a),new Error())},
dH(a){var s
if(typeof a=="function")throw A.f(A.bu("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.k3,a)
s[$.fp()]=a
return s},
k2(a){return t.Z.a(a).$0()},
k3(a,b,c){t.Z.a(a)
if(A.P(c)>=1)return a.$1(b)
return a.$0()},
L(a,b,c){return c.a(a[b])},
K(a,b,c,d){return d.a(a[b](c))},
lc(a,b){return new A.B(a,B.d,b.h("B<0>"))},
ld(a,b){var s,r,q,p,o,n,m,l,k=t.dw,j=A.e1(t.W,k)
a=A.hR(a,j,b)
s=A.p([a],t.C)
r=A.j7([a],k)
for(k=t.A;q=s.length,q!==0;){if(0>=q)return A.o(s,-1)
p=s.pop()
for(q=p.gJ(),o=q.length,n=0;n<q.length;q.length===o||(0,A.a9)(q),++n){m=q[n]
if(m instanceof A.B){l=A.hR(m,j,k)
p.H(m,l)
m=l}if(r.n(0,m))B.a.n(s,m)}}return a},
hR(a,b,c){var s,r,q,p=A.fA(c.h("ef<0>"))
while(a instanceof A.B){if(b.a4(a))return c.h("e<0>").a(b.j(0,a))
else if(!p.n(0,a))throw A.f(A.eh("Recursive references detected: "+p.i(0)))
a=a.$ti.h("e<1>").a(A.jd(a.a,a.b,null))}for(s=A.jz(p,p.r,p.$ti.c),r=s.$ti.c;s.p();){q=s.d
b.E(0,q==null?r.a(q):q,a)}return a},
kK(a){return A.b2(B.j,"input expected",a)},
W(a){var s=new A.aa(a),r=s.gP(s),q=A.ic(a,!1),p='"'+q+'" expected'
return A.b2(new A.c3(r),p,!1)},
le(a,b){var s=t.L
s.a(a)
return s.a(b)}},B={}
var w=[A,J,B]
var $={}
A.fy.prototype={}
J.cT.prototype={
v(a,b){return a===b},
gu(a){return A.bW(a)},
i(a){return"Instance of '"+A.dg(a)+"'"},
aU(a,b){throw A.f(A.hm(a,t.D.a(b)))},
gC(a){return A.aW(A.fL(this))}}
J.cV.prototype={
i(a){return String(a)},
gu(a){return a?519018:218159},
gC(a){return A.aW(t.v)},
$iv:1,
$iau:1}
J.bD.prototype={
v(a,b){return null==b},
i(a){return"null"},
gu(a){return 0},
$iv:1}
J.bG.prototype={$iA:1}
J.ao.prototype={
gu(a){return 0},
i(a){return String(a)}}
J.de.prototype={}
J.aM.prototype={}
J.an.prototype={
i(a){var s=a[$.ig()]
if(s==null)s=a[$.fp()]
if(s==null)return this.b3(a)
return"JavaScript function for "+J.cI(s)},
$iaz:1}
J.bF.prototype={
gu(a){return 0},
i(a){return String(a)}}
J.bH.prototype={
gu(a){return 0},
i(a){return String(a)}}
J.w.prototype={
n(a,b){A.ai(a).c.a(b)
a.$flags&1&&A.cG(a,29)
a.push(b)},
aZ(a,b){var s=A.ai(a)
return new A.aN(a,s.h("au(1)").a(b),s.h("aN<1>"))},
aO(a,b){A.ai(a).h("d<1>").a(b)
a.$flags&1&&A.cG(a,"addAll",2)
this.b8(a,b)
return},
b8(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.f(A.ay(a))
for(r=0;r<s;++r)a.push(b[r])},
bO(a,b){var s,r=A.j8(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.E(r,s,A.k(a[s]))
return r.join(b)},
T(a,b){if(!(b>=0&&b<a.length))return A.o(a,b)
return a[b]},
b2(a,b,c){if(b<0||b>a.length)throw A.f(A.aq(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.f(A.aq(c,b,a.length,"end",null))
if(b===c)return A.p([],A.ai(a))
return A.p(a.slice(b,c),A.ai(a))},
gar(a){if(a.length>0)return a[0]
throw A.f(A.dZ())},
ga7(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.dZ())},
X(a,b){var s,r,q,p,o,n=A.ai(a)
n.h("b(1,1)?").a(b)
a.$flags&2&&A.cG(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.kg()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.c1()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dK(b,2))
if(p>0)this.bf(a,p)},
b0(a){return this.X(a,null)},
bf(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
i(a){return A.fx(a,"[","]")},
gB(a){return new J.bv(a,a.length,A.ai(a).h("bv<1>"))},
gu(a){return A.bW(a)},
gq(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.f(A.eX(a,b))
return a[b]},
E(a,b,c){A.ai(a).c.a(c)
a.$flags&2&&A.cG(a)
if(!(b>=0&&b<a.length))throw A.f(A.eX(a,b))
a[b]=c},
$ii:1,
$id:1,
$ih:1}
J.cU.prototype={
c_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.dg(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.e_.prototype={}
J.bv.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a9(q)
throw A.f(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iC:1}
J.b7.prototype={
F(a,b){var s
A.hN(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga6(b)
if(this.ga6(a)===s)return 0
if(this.ga6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga6(a){return a===0?1/a<0:a<0},
bm(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.f(A.bj(""+a+".ceil()"))},
bJ(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.f(A.bj(""+a+".floor()"))},
aX(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.bj(""+a+".round()"))},
aQ(a,b,c){if(B.c.F(b,c)>0)throw A.f(A.kL(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
a9(a,b){var s
if(b>20)throw A.f(A.aq(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga6(a))return"-"+s
return s},
bZ(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.f(A.aq(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.o(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.cF(A.bj("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.o(p,1)
s=p[1]
if(3>=r)return A.o(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.az("0",o)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
al(a,b){return(a|0)===a?a/b|0:this.bj(a,b)},
bj(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.bj("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
N(a,b){var s
if(a>0)s=this.bi(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bi(a,b){return b>31?0:a>>>b},
gC(a){return A.aW(t.o)},
$ia2:1,
$iu:1,
$iS:1}
J.bC.prototype={
gC(a){return A.aW(t.S)},
$iv:1,
$ib:1}
J.cX.prototype={
gC(a){return A.aW(t.i)},
$iv:1}
J.am.prototype={
am(a,b){return new A.dD(b,a,0)},
aR(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.Z(a,r-s)},
ab(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
L(a,b,c){return a.substring(b,A.jj(b,c,a.length))},
Z(a,b){return this.L(a,b,null)},
aa(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.o(p,0)
if(p.charCodeAt(0)===133){s=J.j3(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.o(p,r)
q=p.charCodeAt(r)===133?J.j4(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
az(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.z)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aV(a,b,c){var s=b-a.length
if(s<=0)return a
return this.az(c,s)+a},
S(a,b){return A.lf(a,b,0)},
F(a,b){var s
A.n(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gC(a){return A.aW(t.N)},
gq(a){return a.length},
$iv:1,
$ia2:1,
$ie8:1,
$ia:1}
A.bJ.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.aa.prototype={
gq(a){return this.a.length},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.o(s,b)
return s.charCodeAt(b)}}
A.eg.prototype={}
A.i.prototype={}
A.aF.prototype={
gB(a){var s=this
return new A.aG(s,s.gq(s),A.G(s).h("aG<aF.E>"))},
bN(a){var s,r,q=this,p=q.gq(q)
for(s=0,r="";s<p;++s){r+=A.k(q.T(0,s))
if(p!==q.gq(q))throw A.f(A.ay(q))}return r.charCodeAt(0)==0?r:r}}
A.aG.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.dL(q),o=p.gq(q)
if(r.b!==o)throw A.f(A.ay(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iC:1}
A.aI.prototype={
gB(a){var s=this.a
return new A.bM(s.gB(s),this.b,A.G(this).h("bM<1,2>"))},
gq(a){var s=this.a
return s.gq(s)}}
A.bz.prototype={$ii:1}
A.bM.prototype={
p(){var s=this,r=s.b
if(r.p()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iC:1}
A.bN.prototype={
gq(a){return J.b_(this.a)},
T(a,b){return this.b.$1(J.iG(this.a,b))}}
A.aN.prototype={
gB(a){return new A.ce(J.cH(this.a),this.b,this.$ti.h("ce<1>"))}}
A.ce.prototype={
p(){var s,r
for(s=this.a,r=this.b;s.p();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$iC:1}
A.R.prototype={}
A.cb.prototype={}
A.bi.prototype={}
A.ad.prototype={
gu(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.b.gu(this.a)&536870911
this._hashCode=s
return s},
i(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.ad&&this.a===b.a},
$ibh:1}
A.cp.prototype={$r:"+(1,2)",$s:1}
A.cq.prototype={$r:"+(1,2,3)",$s:2}
A.cr.prototype={$r:"+(1,2,3,4,5,6)",$s:3}
A.bx.prototype={}
A.b3.prototype={
i(a){return A.e3(this)},
gO(){return new A.as(this.bp(),A.G(this).h("as<r<1,2>>"))},
bp(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gaT(),o=o.gB(o),n=A.G(s),m=n.y[1],n=n.h("r<1,2>")
case 2:if(!o.p()){r=3
break}l=o.gt()
k=s.j(0,l)
r=4
return a.b=new A.r(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
a8(a,b,c,d){var s=A.e1(c,d)
this.K(0,new A.dW(this,A.G(this).k(c).k(d).h("r<1,2>(3,4)").a(b),s))
return s},
$iF:1}
A.dW.prototype={
$2(a,b){var s=A.G(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.E(0,r.a,r.b)},
$S(){return A.G(this.a).h("~(1,2)")}}
A.by.prototype={
gq(a){return this.b.length},
gaJ(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a4(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
j(a,b){if(!this.a4(b))return null
return this.b[this.a[b]]},
K(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gaJ()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gaT(){return new A.cj(this.gaJ(),this.$ti.h("cj<1>"))}}
A.cj.prototype={
gq(a){return this.a.length},
gB(a){var s=this.a
return new A.ck(s,s.length,this.$ti.h("ck<1>"))}}
A.ck.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iC:1}
A.bB.prototype={
a1(){var s=this,r=s.$map
if(r==null){r=new A.bI(s.$ti.h("bI<1,2>"))
A.kU(s.a,r)
s.$map=r}return r},
j(a,b){return this.a1().j(0,b)},
K(a,b){this.$ti.h("~(1,2)").a(b)
this.a1().K(0,b)},
gaT(){var s=this.a1()
return new A.aE(s,A.G(s).h("aE<1>"))},
gq(a){return this.a1().a}}
A.cW.prototype={
gbR(){var s=this.a
if(s instanceof A.ad)return s
return this.a=new A.ad(A.n(s))},
gbT(){var s,r,q,p,o,n=this
if(n.c===1)return B.d
s=n.d
r=J.dL(s)
q=r.gq(s)-J.b_(n.e)-n.f
if(q===0)return B.d
p=[]
for(o=0;o<q;++o)p.push(r.j(s,o))
p.$flags=3
return p},
gbS(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.p
s=k.e
r=J.dL(s)
q=r.gq(s)
p=k.d
o=J.dL(p)
n=o.gq(p)-q-k.f
if(q===0)return B.p
m=new A.ac(t.eo)
for(l=0;l<q;++l)m.E(0,new A.ad(A.n(r.j(s,l))),o.j(p,n+l))
return new A.bx(m,t.E)},
$ihh:1}
A.ea.prototype={
$0(){return B.f.bJ(1000*this.a.now())},
$S:7}
A.e9.prototype={
$2(a,b){var s
A.n(a)
s=this.a
s.b=s.b+"$"+a
B.a.n(this.b,a)
B.a.n(this.c,b);++s.a},
$S:37}
A.c_.prototype={}
A.en.prototype={
I(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bU.prototype={
i(a){return"Null check operator used on a null value"}}
A.cY.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dq.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.e6.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bA.prototype={}
A.ct.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iar:1}
A.ak.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ie(r==null?"unknown":r)+"'"},
$iaz:1,
gc0(){return this},
$C:"$1",
$R:1,
$D:null}
A.cO.prototype={$C:"$0",$R:0}
A.cP.prototype={$C:"$2",$R:2}
A.dn.prototype={}
A.dl.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ie(s)+"'"}}
A.b1.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.fX(this.a)^A.bW(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.dg(this.a)+"'")}}
A.dk.prototype={
i(a){return"RuntimeError: "+this.a}}
A.eG.prototype={}
A.ac.prototype={
gq(a){return this.a},
gO(){return new A.aC(this,A.G(this).h("aC<1,2>"))},
a4(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else{r=this.bL(a)
return r}},
bL(a){var s=this.d
if(s==null)return!1
return this.a5(this.aI(s,a),a)>=0},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bM(b)},
bM(a){var s,r,q=this.d
if(q==null)return null
s=this.aI(q,a)
r=this.a5(s,a)
if(r<0)return null
return s[r].b},
E(a,b,c){var s,r,q,p,o,n,m=this,l=A.G(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aC(s==null?m.b=m.aj():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aC(r==null?m.c=m.aj():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aj()
p=m.au(b)
o=q[p]
if(o==null)q[p]=[m.ad(b,c)]
else{n=m.a5(o,b)
if(n>=0)o[n].b=c
else o.push(m.ad(b,c))}}},
K(a,b){var s,r,q=this
A.G(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.ay(q))
s=s.c}},
aC(a,b,c){var s,r=A.G(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ad(b,c)
else s.b=c},
ad(a,b){var s=this,r=A.G(s),q=new A.e0(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
au(a){return J.X(a)&1073741823},
aI(a,b){return a[this.au(b)]},
a5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
i(a){return A.e3(this)},
aj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.e0.prototype={}
A.aE.prototype={
gq(a){return this.a.a},
gB(a){var s=this.a
return new A.aD(s,s.r,s.e,this.$ti.h("aD<1>"))}}
A.aD.prototype={
gt(){return this.d},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iC:1}
A.aC.prototype={
gq(a){return this.a.a},
gB(a){var s=this.a
return new A.bK(s,s.r,s.e,this.$ti.h("bK<1,2>"))}}
A.bK.prototype={
gt(){var s=this.d
s.toString
return s},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.ay(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.r(s.a,s.b,r.$ti.h("r<1,2>"))
r.c=s.c
return!0}},
$iC:1}
A.bI.prototype={
au(a){return A.kP(a)&1073741823},
a5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
A.f_.prototype={
$1(a){return this.a(a)},
$S:10}
A.f0.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.f1.prototype={
$1(a){return this.a(A.n(a))},
$S:25}
A.a0.prototype={
i(a){return this.aN(!1)},
aN(a){var s,r,q,p,o,n=this.bd(),m=this.a0(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.o(m,q)
o=m[q]
l=a?l+A.ho(o):l+A.k(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bd(){var s,r=this.$s
while($.eF.length<=r)B.a.n($.eF,null)
s=$.eF[r]
if(s==null){s=this.bb()
B.a.E($.eF,r,s)}return s},
bb(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.p(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.E(k,q,r[s])}}k=A.j9(k,!1,t.K)
k.$flags=3
return k}}
A.bl.prototype={
a0(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.bl&&this.$s===b.$s&&J.a6(this.a,b.a)&&J.a6(this.b,b.b)},
gu(a){return A.fB(this.$s,this.a,this.b,B.h)}}
A.bm.prototype={
a0(){return[this.a,this.b,this.c]},
v(a,b){var s=this
if(b==null)return!1
return b instanceof A.bm&&s.$s===b.$s&&J.a6(s.a,b.a)&&J.a6(s.b,b.b)&&J.a6(s.c,b.c)},
gu(a){var s=this
return A.fB(s.$s,s.a,s.b,s.c)}}
A.bn.prototype={
a0(){return this.a},
v(a,b){if(b==null)return!1
return b instanceof A.bn&&this.$s===b.$s&&A.jI(this.a,b.a)},
gu(a){return A.fB(this.$s,A.jb(this.a),B.h,B.h)}}
A.bE.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gaK(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.hk(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
am(a,b){return new A.ds(this,b,0)},
bc(a,b){var s,r=this.gaK()
if(r==null)r=A.aT(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.dA(s)},
$ie8:1,
$ijl:1}
A.dA.prototype={
gY(){return this.b.index},
gaq(){var s=this.b
return s.index+s[0].length},
j(a,b){var s=this.b
if(!(b<s.length))return A.o(s,b)
return s[b]},
$ia8:1,
$ibY:1}
A.ds.prototype={
gB(a){return new A.cf(this.a,this.b,this.c)}}
A.cf.prototype={
gt(){var s=this.d
return s==null?t.e.a(s):s},
p(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bc(l,s)
if(p!=null){m.d=p
o=p.gaq()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.o(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.o(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iC:1}
A.dm.prototype={
gaq(){return this.a+this.c.length},
j(a,b){if(b!==0)throw A.f(A.hq(b,null))
return this.c},
$ia8:1,
gY(){return this.a}}
A.dD.prototype={
gB(a){return new A.dE(this.a,this.b,this.c)}}
A.dE.prototype={
p(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dm(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$iC:1}
A.bb.prototype={
gC(a){return B.K},
$iv:1}
A.bS.prototype={}
A.d1.prototype={
gC(a){return B.L},
$iv:1}
A.bc.prototype={
gq(a){return a.length},
$iT:1}
A.bQ.prototype={
j(a,b){A.aU(b,a,a.length)
return a[b]},
$ii:1,
$id:1,
$ih:1}
A.bR.prototype={$ii:1,$id:1,$ih:1}
A.d2.prototype={
gC(a){return B.M},
$iv:1}
A.d3.prototype={
gC(a){return B.N},
$iv:1}
A.d4.prototype={
gC(a){return B.O},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1}
A.d5.prototype={
gC(a){return B.P},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1}
A.d6.prototype={
gC(a){return B.Q},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1}
A.d7.prototype={
gC(a){return B.S},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1}
A.d8.prototype={
gC(a){return B.T},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1,
$ifG:1}
A.bT.prototype={
gC(a){return B.U},
gq(a){return a.length},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1}
A.d9.prototype={
gC(a){return B.V},
gq(a){return a.length},
j(a,b){A.aU(b,a,a.length)
return a[b]},
$iv:1}
A.cl.prototype={}
A.cm.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.a3.prototype={
h(a){return A.cz(v.typeUniverse,this,a)},
k(a){return A.hJ(v.typeUniverse,this,a)}}
A.dy.prototype={}
A.dG.prototype={
i(a){return A.U(this.a,null)}}
A.dx.prototype={
i(a){return this.a}}
A.cv.prototype={$iag:1}
A.eq.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
A.ep.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:38}
A.er.prototype={
$0(){this.a.$0()},
$S:5}
A.es.prototype={
$0(){this.a.$0()},
$S:5}
A.eJ.prototype={
b6(a,b){if(self.setTimeout!=null)self.setTimeout(A.dK(new A.eK(this,b),0),a)
else throw A.f(A.bj("`setTimeout()` not found."))}}
A.eK.prototype={
$0(){this.b.$0()},
$S:0}
A.dt.prototype={
an(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aE(a)
else{s=r.a
if(q.h("aA<1>").b(a))s.aF(a)
else s.aH(a)}},
ap(a,b){var s=this.a
if(this.b)s.ag(new A.Y(a,b))
else s.af(new A.Y(a,b))}}
A.eN.prototype={
$1(a){return this.a.$2(0,a)},
$S:12}
A.eO.prototype={
$2(a,b){this.a.$2(1,new A.bA(a,t.l.a(b)))},
$S:13}
A.eT.prototype={
$2(a,b){this.a(A.P(a),b)},
$S:14}
A.cu.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
bg(a,b){var s,r,q
a=A.P(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
p(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.p()){o.b=s.gt()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.bg(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.hD
return!1}if(0>=p.length)return A.o(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.hD
throw n
return!1}if(0>=p.length)return A.o(p,-1)
o.a=p.pop()
m=1
continue}throw A.f(A.eh("sync*"))}return!1},
c2(a){var s,r,q=this
if(a instanceof A.as){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.n(r,q.a)
q.a=s
return 2}else{q.d=J.cH(a)
return 2}},
$iC:1}
A.as.prototype={
gB(a){return new A.cu(this.a(),this.$ti.h("cu<1>"))}}
A.Y.prototype={
i(a){return A.k(this.a)},
$iz:1,
gU(){return this.b}}
A.dY.prototype={
$0(){this.c.a(null)
this.b.aG(null)},
$S:0}
A.dv.prototype={
ap(a,b){var s=this.a
if((s.a&30)!==0)throw A.f(A.eh("Future already completed"))
s.af(A.kf(a,b))},
ao(a){return this.ap(a,null)}}
A.cg.prototype={
an(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.f(A.eh("Future already completed"))
s.aE(r.h("1/").a(a))}}
A.aO.prototype={
bQ(a){if((this.c&15)!==6)return!0
return this.b.b.aw(t.al.a(this.d),a.a,t.v,t.K)},
bK(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.R.b(q))p=l.bV(q,m,a.b,o,n,t.l)
else p=l.aw(t.w.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.ax(s))){if((r.c&1)!==0)throw A.f(A.bu("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.f(A.bu("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.D.prototype={
aY(a,b,c){var s,r,q=this.$ti
q.k(c).h("1/(2)").a(a)
s=$.y
if(s===B.e){if(!t.R.b(b)&&!t.w.b(b))throw A.f(A.fu(b,"onError",u.c))}else{c.h("@<0/>").k(q.c).h("1(2)").a(a)
b=A.kx(b,s)}r=new A.D(s,c.h("D<0>"))
this.ae(new A.aO(r,3,a,b,q.h("@<1>").k(c).h("aO<1,2>")))
return r},
aM(a,b,c){var s,r=this.$ti
r.k(c).h("1/(2)").a(a)
s=new A.D($.y,c.h("D<0>"))
this.ae(new A.aO(s,19,a,b,r.h("@<1>").k(c).h("aO<1,2>")))
return s},
bh(a){this.a=this.a&1|16
this.c=a},
a_(a){this.a=a.a&30|this.a&1
this.c=a.c},
ae(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.ae(a)
return}r.a_(s)}A.dI(null,null,r.b,t.M.a(new A.eu(r,a)))}},
aL(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.aL(a)
return}m.a_(n)}l.a=m.a2(a)
A.dI(null,null,m.b,t.M.a(new A.ey(l,m)))}},
W(){var s=t.F.a(this.c)
this.c=null
return this.a2(s)},
a2(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aG(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.W()
q.c.a(a)
r.a=8
r.c=a
A.aP(r,s)},
aH(a){var s,r=this
r.$ti.c.a(a)
s=r.W()
r.a=8
r.c=a
A.aP(r,s)},
ba(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.W()
q.a_(a)
A.aP(q,r)},
ag(a){var s=this.W()
this.bh(a)
A.aP(this,s)},
aE(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aA<1>").b(a)){this.aF(a)
return}this.b9(a)},
b9(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dI(null,null,s.b,t.M.a(new A.ew(s,a)))},
aF(a){A.fH(this.$ti.h("aA<1>").a(a),this,!1)
return},
af(a){this.a^=2
A.dI(null,null,this.b,t.M.a(new A.ev(this,a)))},
$iaA:1}
A.eu.prototype={
$0(){A.aP(this.a,this.b)},
$S:0}
A.ey.prototype={
$0(){A.aP(this.b,this.a.a)},
$S:0}
A.ex.prototype={
$0(){A.fH(this.a.a,this.b,!0)},
$S:0}
A.ew.prototype={
$0(){this.a.aH(this.b)},
$S:0}
A.ev.prototype={
$0(){this.a.ag(this.b)},
$S:0}
A.eB.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bU(t.fO.a(q.d),t.A)}catch(p){s=A.ax(p)
r=A.aX(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.fv(q)
n=k.a
n.c=new A.Y(q,o)
q=n}q.b=!0
return}if(j instanceof A.D&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.D){m=k.b.a
l=new A.D(m.b,m.$ti)
j.aY(new A.eC(l,m),new A.eD(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.eC.prototype={
$1(a){this.a.ba(this.b)},
$S:9}
A.eD.prototype={
$2(a,b){A.aT(a)
t.l.a(b)
this.a.ag(new A.Y(a,b))},
$S:15}
A.eA.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aw(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ax(l)
r=A.aX(l)
q=s
p=r
if(p==null)p=A.fv(q)
o=this.a
o.c=new A.Y(q,p)
o.b=!0}},
$S:0}
A.ez.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.bQ(s)&&p.a.e!=null){p.c=p.a.bK(s)
p.b=!1}}catch(o){r=A.ax(o)
q=A.aX(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fv(p)
m=l.b
m.c=new A.Y(p,n)
p=m}p.b=!0}},
$S:0}
A.du.prototype={}
A.c6.prototype={
gq(a){var s,r,q=this,p={},o=new A.D($.y,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.ej(p,q))
t.g5.a(new A.ek(p,o))
A.a4(q.a,q.b,r,!1,s.c)
return o}}
A.ej.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.ek.prototype={
$0(){this.b.aG(this.a.a)},
$S:0}
A.dC.prototype={}
A.cB.prototype={$ihy:1}
A.dB.prototype={
bW(a){var s,r,q
t.M.a(a)
try{if(B.e===$.y){a.$0()
return}A.hY(null,null,this,a,t.H)}catch(q){s=A.ax(q)
r=A.aX(q)
A.eR(A.aT(s),t.l.a(r))}},
bX(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.e===$.y){a.$1(b)
return}A.hZ(null,null,this,a,b,t.H,c)}catch(q){s=A.ax(q)
r=A.aX(q)
A.eR(A.aT(s),t.l.a(r))}},
aP(a){return new A.eH(this,t.M.a(a))},
bl(a,b){return new A.eI(this,b.h("~(0)").a(a),b)},
bU(a,b){b.h("0()").a(a)
if($.y===B.e)return a.$0()
return A.hY(null,null,this,a,b)},
aw(a,b,c,d){c.h("@<0>").k(d).h("1(2)").a(a)
d.a(b)
if($.y===B.e)return a.$1(b)
return A.hZ(null,null,this,a,b,c,d)},
bV(a,b,c,d,e,f){d.h("@<0>").k(e).k(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.y===B.e)return a.$2(b,c)
return A.ky(null,null,this,a,b,c,d,e,f)},
aW(a,b,c,d){return b.h("@<0>").k(c).k(d).h("1(2,3)").a(a)}}
A.eH.prototype={
$0(){return this.a.bW(this.b)},
$S:0}
A.eI.prototype={
$1(a){var s=this.c
return this.a.bX(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.eS.prototype={
$0(){A.iS(this.a,this.b)},
$S:0}
A.aQ.prototype={
gB(a){var s=this,r=new A.aR(s,s.r,s.$ti.h("aR<1>"))
r.c=s.e
return r},
gq(a){return this.a},
n(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aD(s==null?q.b=A.fI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aD(r==null?q.c=A.fI():r,b)}else return q.b7(b)},
b7(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.fI()
r=J.X(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.ak(a)]
else{if(p.be(q,a)>=0)return!1
q.push(p.ak(a))}return!0},
aD(a,b){this.$ti.c.a(b)
if(t.br.a(a[b])!=null)return!1
a[b]=this.ak(b)
return!0},
ak(a){var s=this,r=new A.dz(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
be(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
$ihl:1}
A.dz.prototype={}
A.aR.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.f(A.ay(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iC:1}
A.q.prototype={
gB(a){return new A.aG(a,this.gq(a),A.aY(a).h("aG<q.E>"))},
T(a,b){return this.j(a,b)},
gP(a){if(this.gq(a)===0)throw A.f(A.dZ())
if(this.gq(a)>1)throw A.f(A.hi())
return this.j(a,0)},
aZ(a,b){var s=A.aY(a)
return new A.aN(a,s.h("au(q.E)").a(b),s.h("aN<q.E>"))},
bP(a,b,c){var s=A.aY(a)
return new A.bN(a,s.k(c).h("1(q.E)").a(b),s.h("@<q.E>").k(c).h("bN<1,2>"))},
i(a){return A.fx(a,"[","]")},
$ii:1,
$id:1,
$ih:1}
A.b9.prototype={
gO(){var s=A.G(this),r=s.h("aE<1>")
s=s.h("r<1,2>")
return A.ja(new A.aE(this,r),r.k(s).h("1(d.E)").a(new A.e2(this)),r.h("d.E"),s)},
a8(a,b,c,d){var s,r,q,p,o,n=this,m=A.G(n)
m.k(c).k(d).h("r<1,2>(3,4)").a(b)
s=A.e1(c,d)
for(r=new A.aD(n,n.r,n.e,m.h("aD<1>")),m=m.y[1];r.p();){q=r.d
p=n.j(0,q)
o=b.$2(q,p==null?m.a(p):p)
s.E(0,o.a,o.b)}return s},
bk(a){var s,r,q
A.G(this).h("d<r<1,2>>").a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a9)(a),++r){q=a[r]
this.E(0,q.a,q.b)}},
gq(a){return this.a},
i(a){return A.e3(this)},
$iF:1}
A.e2.prototype={
$1(a){var s=this.a,r=A.G(s)
r.c.a(a)
s=s.j(0,a)
if(s==null)s=r.y[1].a(s)
return new A.r(a,s,r.h("r<1,2>"))},
$S(){return A.G(this.a).h("r<1,2>(1)")}}
A.e4.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.k(a)
r.a=(r.a+=s)+": "
s=A.k(b)
r.a+=s},
$S:21}
A.cA.prototype={}
A.ba.prototype={
j(a,b){return this.a.j(0,b)},
K(a,b){this.a.K(0,this.$ti.h("~(1,2)").a(b))},
gq(a){return this.a.a},
i(a){return A.e3(this.a)},
gO(){var s=this.a
return new A.aC(s,s.$ti.h("aC<1,2>"))},
a8(a,b,c,d){return this.a.a8(0,this.$ti.k(c).k(d).h("r<1,2>(3,4)").a(b),c,d)},
$iF:1}
A.cc.prototype={}
A.be.prototype={
i(a){return A.fx(this,"{","}")},
$ii:1,
$id:1}
A.cs.prototype={}
A.bo.prototype={}
A.e5.prototype={
$2(a,b){var s,r,q
t.fo.a(a)
s=this.b
r=this.a
q=(s.a+=r.a)+a.a
s.a=q
s.a=q+": "
q=A.b5(b)
s.a+=q
r.a=", "},
$S:16}
A.al.prototype={
v(a,b){if(b==null)return!1
return b instanceof A.al&&this.a===b.a},
gu(a){return B.c.gu(this.a)},
F(a,b){return B.c.F(this.a,t.fu.a(b).a)},
i(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.al(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.al(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.aV(B.c.i(o%1e6),6,"0")},
$ia2:1}
A.z.prototype={
gU(){return A.jf(this)}}
A.cL.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.b5(s)
return"Assertion failed"}}
A.ag.prototype={}
A.a7.prototype={
gai(){return"Invalid argument"+(!this.a?"(s)":"")},
gah(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gai()+q+o
if(!s.a)return n
return n+s.gah()+": "+A.b5(s.gav())},
gav(){return this.b}}
A.bX.prototype={
gav(){return A.hO(this.b)},
gai(){return"RangeError"},
gah(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.cS.prototype={
gav(){return A.P(this.b)},
gai(){return"RangeError"},
gah(){if(A.P(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.db.prototype={
i(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.c7("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=A.b5(n)
p=i.a+=p
j.a=", "}k.d.K(0,new A.e5(j,i))
m=A.b5(k.a)
l=i.i(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.cd.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.dp.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bg.prototype={
i(a){return"Bad state: "+this.a}}
A.cQ.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.b5(s)+"."}}
A.dd.prototype={
i(a){return"Out of Memory"},
gU(){return null},
$iz:1}
A.c5.prototype={
i(a){return"Stack Overflow"},
gU(){return null},
$iz:1}
A.bk.prototype={
i(a){return"Exception: "+this.a}}
A.dX.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.b.L(q,0,75)+"..."
return r+"\n"+q}}
A.d.prototype={
gq(a){var s,r=this.gB(this)
for(s=0;r.p();)++s
return s},
gP(a){var s,r=this.gB(this)
if(!r.p())throw A.f(A.dZ())
s=r.gt()
if(r.p())throw A.f(A.hi())
return s},
T(a,b){var s,r
A.ji(b,"index")
s=this.gB(this)
for(r=b;s.p();){if(r===0)return s.gt();--r}throw A.f(A.hg(b,b-r,this,"index"))},
i(a){return A.iZ(this,"(",")")}}
A.r.prototype={
i(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.O.prototype={
gu(a){return A.t.prototype.gu.call(this,0)},
i(a){return"null"}}
A.t.prototype={$it:1,
v(a,b){return this===b},
gu(a){return A.bW(this)},
i(a){return"Instance of '"+A.dg(this)+"'"},
aU(a,b){throw A.f(A.hm(this,t.D.a(b)))},
gC(a){return A.bs(this)},
toString(){return this.i(this)}}
A.dF.prototype={
i(a){return""},
$iar:1}
A.ei.prototype={
gbn(){var s,r=this.b
if(r==null)r=$.fC.$0()
s=r-this.a
if($.fY()===1000)return s
return B.c.al(s,1000)}}
A.aJ.prototype={
gB(a){return new A.dj(this.a)}}
A.dj.prototype={
gt(){return this.d},
p(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}if(!(o<m))return A.o(n,o)
s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){if(!(r<m))return A.o(n,r)
q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.k4(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iC:1}
A.c7.prototype={
gq(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.a_.prototype={
bY(){return A.em(this.a,this.b)},
i(a){return A.bs(this).i(0)+"["+A.em(this.a,this.b)+"]"}}
A.e7.prototype={
i(a){var s=this.a
return A.bs(this).i(0)+"["+A.em(s.a,s.b)+"]: "+s.e}}
A.e.prototype={
m(a,b){var s=this.l(new A.a_(a,b))
return s instanceof A.j?-1:s.b},
gJ(){return B.G},
H(a,b){},
i(a){return A.bs(this).i(0)}}
A.bZ.prototype={}
A.l.prototype={
i(a){return this.aB(0)+": "+A.k(this.e)},
gA(){return this.e}}
A.j.prototype={
gA(){return A.cF(new A.e7(this))},
i(a){return this.aB(0)+": "+this.e}}
A.af.prototype={
gq(a){return this.d-this.c},
i(a){var s=this
return A.bs(s).i(0)+"["+A.em(s.b,s.c)+"]: "+A.k(s.a)},
v(a,b){if(b==null)return!1
return b instanceof A.af&&J.a6(this.a,b.a)&&this.c===b.c&&this.d===b.d},
gu(a){return J.X(this.a)+B.c.gu(this.c)+B.c.gu(this.d)}}
A.aB.prototype={}
A.B.prototype={
l(a){return A.kF()},
v(a,b){var s
if(b==null)return!1
if(b instanceof A.B){s=J.a6(this.a,b.a)
if(!s)return!1
for(s=this.b;!1;){if(0>=0)return A.o(s,0)
return!1}return!0}return!1},
gu(a){return J.X(this.a)},
$ief:1}
A.bO.prototype={
gB(a){var s=this
return new A.bP(s.a,s.b,!1,s.c,s.$ti.h("bP<1>"))}}
A.bP.prototype={
gt(){var s=this.e
s===$&&A.ib("current")
return s},
p(){var s,r,q,p,o,n=this
for(s=n.b,r=s.length,q=n.a;p=n.d,p<=r;){o=q.a.m(s,p)
p=n.d
if(o<0)n.d=p+1
else{n.e=n.$ti.c.a(q.l(new A.a_(s,p)).gA())
s=n.d
if(s===o)n.d=s+1
else n.d=o
return!0}}return!1},
$iC:1}
A.b6.prototype={
l(a){var s,r=a.a,q=a.b,p=this.a.m(r,q)
if(p<0)return new A.j(this.b,r,q)
s=B.b.L(r,q,p)
return new A.l(s,r,p,t.y)},
m(a,b){return this.a.m(a,b)},
i(a){var s=this.M(0)
return s+"["+this.b+"]"}}
A.bL.prototype={
l(a){var s,r,q=this.a.l(a)
if(q instanceof A.j)return q
s=this.$ti
r=s.y[1].a(this.b.$1(q.gA()))
return new A.l(r,q.a,q.b,s.h("l<2>"))},
m(a,b){var s=this.a.m(a,b)
return s}}
A.c8.prototype={
l(a){var s,r,q,p=this.a.l(a)
if(p instanceof A.j)return p
s=p.b
r=this.$ti
q=r.h("af<1>")
q=q.a(new A.af(p.gA(),a.a,a.b,s,q))
return new A.l(q,p.a,s,r.h("l<af<1>>"))},
m(a,b){return this.a.m(a,b)}}
A.c9.prototype={
l(a){var s,r,q,p=this,o=a.a,n=a.b,m=p.a3(p.b,o,n)
if(m!==n)a=new A.a_(o,m)
s=p.a.l(a)
if(s instanceof A.j)return s
n=s.b
r=p.a3(p.c,o,n)
if(r===n)n=s
else{n=p.$ti
q=n.c.a(s.gA())
n=new A.l(q,s.a,r,n.h("l<1>"))}return n},
m(a,b){var s=this,r=s.a.m(a,s.a3(s.b,a,b))
return r<0?-1:s.a3(s.c,a,r)},
a3(a,b,c){var s
for(;;c=s){s=a.m(b,c)
if(s<0)break}return c},
gJ(){return A.p([this.a,this.b,this.c],t.C)},
H(a,b){var s=this
s.ac(a,b)
if(s.b.v(0,a))s.b=b
if(s.c.v(0,a))s.c=b}}
A.eP.prototype={
$1(a){var s,r,q
A.n(a)
s=this.a
r=s?new A.aJ(a):new A.aa(a)
q=r.gP(r)
r=s?new A.aJ(a):new A.aa(a)
return new A.N(q,r.gP(r))},
$S:17}
A.eQ.prototype={
$3(a,b,c){var s,r,q
A.n(a)
A.n(b)
A.n(c)
s=this.a
r=s?new A.aJ(a):new A.aa(a)
q=r.gP(r)
r=s?new A.aJ(c):new A.aa(c)
return new A.N(q,r.gP(r))},
$S:18}
A.Z.prototype={
i(a){return A.bs(this).i(0)}}
A.c3.prototype={
D(a){return this.a===a},
i(a){return this.R(0)+"("+this.a+")"}}
A.ab.prototype={
D(a){return this.a},
i(a){return this.R(0)+"("+this.a+")"}}
A.cZ.prototype={
D(a){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
return s}}
A.d_.prototype={
b4(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.length,r=this.a,q=this.c,p=q.length,o=q.$flags|0,n=0;n<s;++n){m=a[n]
for(l=m.a-r,k=m.b-r;l<=k;++l){j=B.c.N(l,5)
if(!(j<p))return A.o(q,j)
i=q[j]
o&2&&A.cG(q)
q[j]=(i|1<<(l&31))>>>0}}},
D(a){var s=this.a,r=!1
if(s<=a)if(a<=this.b){s=a-s
s=(this.c[B.c.N(s,5)]&1<<(s&31))>>>0!==0}else s=r
else s=r
return s},
i(a){var s=this
return s.R(0)+"("+s.a+", "+s.b+", "+A.k(s.c)+")"}}
A.dc.prototype={
D(a){return!this.a.D(a)},
i(a){return this.R(0)+"("+this.a.i(0)+")"}}
A.N.prototype={
D(a){return this.a<=a&&a<=this.b},
i(a){return this.R(0)+"("+this.a+", "+this.b+")"}}
A.dh.prototype={
b5(a){var s,r,q,p,o,n,m,l
for(s=a.length,r=this.a,q=r.$flags|0,p=0,o=0;o<s;++o){n=a[o]
m=p+1
q&2&&A.cG(r)
l=r.length
if(!(p<l))return A.o(r,p)
r[p]=n.a
p=m+1
if(!(m<l))return A.o(r,m)
r[m]=n.b}},
D(a){var s,r,q,p=this.a,o=p.length-2
for(s=0;s<=o;){r=(s+B.c.N(o-s,1)&4294967294)>>>0
q=p[r]
if(q<=a&&a<=p[r+1])return!0
else if(a<q)o=r-2
else s=r+2}return!1},
i(a){return this.R(0)+"("+A.k(this.a)+")"}}
A.dr.prototype={
D(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}}}
A.fo.prototype={
$1(a){var s
A.P(a)
s=B.H.j(0,a)
if(s!=null)return s
if(a<32)return"\\x"+B.b.aV(B.c.bZ(a,16),2,"0")
return A.jh(a)},
$S:19}
A.fi.prototype={
$2(a,b){var s,r=t.d
r.a(a)
r.a(b)
r=a.a
s=b.a
return r!==s?r-s:a.b-b.b},
$S:20}
A.bw.prototype={
l(a){var s,r,q,p,o=this.a,n=o[0].l(a)
if(!(n instanceof A.j))return n
for(s=o.length,r=this.b,q=n,p=1;p<s;++p){n=o[p].l(a)
if(!(n instanceof A.j))return n
q=r.$2(q,n)}return q},
m(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=-1,p=0;p<r;++p){q=s[p].m(a,b)
if(q>=0)return q}return q}}
A.E.prototype={
gJ(){return A.p([this.a],t.C)},
H(a,b){var s=this
s.V(a,b)
if(s.a.v(0,a))s.a=A.G(s).h("e<E.T>").a(b)}}
A.c1.prototype={
l(a){var s,r,q=this.a.l(a)
if(q instanceof A.j)return q
s=this.b.l(q)
if(s instanceof A.j)return s
r=this.$ti
q=r.h("+(1,2)").a(new A.cp(q.gA(),s.gA()))
return new A.l(q,s.a,s.b,r.h("l<+(1,2)>"))},
m(a,b){b=this.a.m(a,b)
if(b<0)return-1
b=this.b.m(a,b)
if(b<0)return-1
return b},
gJ(){return A.p([this.a,this.b],t.C)},
H(a,b){var s=this
s.V(a,b)
if(s.a.v(0,a))s.a=s.$ti.h("e<1>").a(b)
if(s.b.v(0,a))s.b=s.$ti.h("e<2>").a(b)}}
A.aK.prototype={
l(a){var s,r,q,p=this,o=p.a.l(a)
if(o instanceof A.j)return o
s=p.b.l(o)
if(s instanceof A.j)return s
r=p.c.l(s)
if(r instanceof A.j)return r
q=p.$ti
s=q.h("+(1,2,3)").a(new A.cq(o.gA(),s.gA(),r.gA()))
return new A.l(s,r.a,r.b,q.h("l<+(1,2,3)>"))},
m(a,b){b=this.a.m(a,b)
if(b<0)return-1
b=this.b.m(a,b)
if(b<0)return-1
b=this.c.m(a,b)
if(b<0)return-1
return b},
gJ(){return A.p([this.a,this.b,this.c],t.C)},
H(a,b){var s=this
s.V(a,b)
if(s.a.v(0,a))s.a=s.$ti.h("e<1>").a(b)
if(s.b.v(0,a))s.b=s.$ti.h("e<2>").a(b)
if(s.c.v(0,a))s.c=s.$ti.h("e<3>").a(b)}}
A.ec.prototype={
$1(a){var s=this
s.b.h("@<0>").k(s.c).k(s.d).h("+(1,2,3)").a(a)
return s.a.$3(a.a,a.b,a.c)},
$S(){var s=this
return s.e.h("@<0>").k(s.b).k(s.c).k(s.d).h("1(+(2,3,4))")}}
A.c2.prototype={
l(a){var s,r,q,p,o,n,m=this,l=m.a.l(a)
if(l instanceof A.j)return l
s=m.b.l(l)
if(s instanceof A.j)return s
r=m.c.l(s)
if(r instanceof A.j)return r
q=m.d.l(r)
if(q instanceof A.j)return q
p=m.e.l(q)
if(p instanceof A.j)return p
o=m.f.l(p)
if(o instanceof A.j)return o
n=m.$ti
p=n.h("+(1,2,3,4,5,6)").a(new A.cr([l.gA(),s.gA(),r.gA(),q.gA(),p.gA(),o.gA()]))
return new A.l(p,o.a,o.b,n.h("l<+(1,2,3,4,5,6)>"))},
m(a,b){var s=this
b=s.a.m(a,b)
if(b<0)return-1
b=s.b.m(a,b)
if(b<0)return-1
b=s.c.m(a,b)
if(b<0)return-1
b=s.d.m(a,b)
if(b<0)return-1
b=s.e.m(a,b)
if(b<0)return-1
b=s.f.m(a,b)
if(b<0)return-1
return b},
gJ(){var s=this
return A.p([s.a,s.b,s.c,s.d,s.e,s.f],t.C)},
H(a,b){var s=this
s.V(a,b)
if(s.a.v(0,a))s.a=s.$ti.h("e<1>").a(b)
if(s.b.v(0,a))s.b=s.$ti.h("e<2>").a(b)
if(s.c.v(0,a))s.c=s.$ti.h("e<3>").a(b)
if(s.d.v(0,a))s.d=s.$ti.h("e<4>").a(b)
if(s.e.v(0,a))s.e=s.$ti.h("e<5>").a(b)
if(s.f.v(0,a))s.f=s.$ti.h("e<6>").a(b)}}
A.ed.prototype={
$1(a){var s=this,r=s.b.h("@<0>").k(s.c).k(s.d).k(s.e).k(s.f).k(s.r).h("+(1,2,3,4,5,6)").a(a).a
return s.a.$6(r[0],r[1],r[2],r[3],r[4],r[5])},
$S(){var s=this
return s.w.h("@<0>").k(s.b).k(s.c).k(s.d).k(s.e).k(s.f).k(s.r).h("1(+(2,3,4,5,6,7))")}}
A.aH.prototype={
H(a,b){var s,r,q,p
this.V(a,b)
for(s=this.a,r=s.length,q=this.$ti.h("e<aH.R>"),p=0;p<r;++p)if(s[p].v(0,a))B.a.E(s,p,q.a(b))},
gJ(){return this.a}}
A.c4.prototype={
l(a){var s,r,q,p,o=this,n=o.b.l(a)
if(n instanceof A.j)return n
s=o.a.l(n)
if(s instanceof A.j)return s
r=o.c.l(s)
if(r instanceof A.j)return r
q=o.$ti
p=q.c.a(s.gA())
return new A.l(p,r.a,r.b,q.h("l<1>"))},
m(a,b){b=this.b.m(a,b)
if(b<0)return-1
b=this.a.m(a,b)
if(b<0)return-1
return this.c.m(a,b)},
gJ(){return A.p([this.b,this.a,this.c],t.C)},
H(a,b){var s=this
s.ac(a,b)
if(s.b.v(0,a))s.b=b
if(s.c.v(0,a))s.c=b}}
A.cR.prototype={
l(a){var s=a.b,r=a.a
if(s<r.length)s=new A.j(this.a,r,s)
else s=new A.l(null,r,s,t.fF)
return s},
m(a,b){return b<a.length?-1:b},
i(a){return this.M(0)+"["+this.a+"]"}}
A.b4.prototype={
l(a){var s=this.$ti,r=s.c.a(this.a)
return new A.l(r,a.a,a.b,s.h("l<1>"))},
m(a,b){return b},
i(a){return this.M(0)+"["+A.k(this.a)+"]"}}
A.da.prototype={
l(a){var s,r=a.a,q=a.b,p=r.length
if(q<p)switch(r.charCodeAt(q)){case 10:return new A.l("\n",r,q+1,t.y)
case 13:s=q+1
if(s<p&&r.charCodeAt(s)===10)return new A.l("\r\n",r,q+2,t.y)
else return new A.l("\r",r,s,t.y)}return new A.j(this.a,r,q)},
m(a,b){var s,r=a.length
if(b<r)switch(a.charCodeAt(b)){case 10:return b+1
case 13:s=b+1
return s<r&&a.charCodeAt(s)===10?b+2:s}return-1},
i(a){return this.M(0)+"["+this.a+"]"}}
A.cN.prototype={
i(a){return this.M(0)+"["+this.b+"]"}}
A.bf.prototype={
l(a){var s,r=a.a,q=a.b
if(q<r.length&&this.a.D(r.charCodeAt(q))){s=r[q]
return new A.l(s,r,q+1,t.y)}return new A.j(this.b,r,q)},
m(a,b){return b<a.length&&this.a.D(a.charCodeAt(b))?b+1:-1}}
A.cJ.prototype={
l(a){var s,r=a.a,q=a.b
if(q<r.length){s=r[q]
return new A.l(s,r,q+1,t.y)}return new A.j(this.b,r,q)},
m(a,b){return b<a.length?b+1:-1}}
A.ca.prototype={
l(a){var s,r,q,p=a.a,o=a.b,n=p.length
if(o<n){s=p.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<n){q=p.charCodeAt(r)
if((q&64512)===56320){s=65536+((s&1023)<<10)+(q&1023);++r}}if(this.a.D(s)){n=B.b.L(p,o,r)
return new A.l(n,p,r,t.y)}}return new A.j(this.b,p,o)},
m(a,b){var s,r,q,p=a.length
if(b<p){s=b+1
r=a.charCodeAt(b)
if((r&64512)===55296&&s<p){q=a.charCodeAt(s)
if((q&64512)===56320){r=65536+((r&1023)<<10)+(q&1023)
b=s+1}else b=s}else b=s
if(this.a.D(r))return b}return-1}}
A.cK.prototype={
l(a){var s,r=a.a,q=a.b,p=r.length
if(q<p){s=q+1
if((r.charCodeAt(q)&64512)===55296&&s<p&&(r.charCodeAt(s)&64512)===56320)++s
p=B.b.L(r,q,s)
return new A.l(p,r,s,t.y)}return new A.j(this.b,r,q)},
m(a,b){var s,r=a.length
if(b<r){s=b+1
return(a.charCodeAt(b)&64512)===55296&&s<r&&(a.charCodeAt(s)&64512)===56320?s+1:s}return-1}}
A.di.prototype={
l(a){var s=this,r=a.a,q=a.b,p=r.length,o=s.d,n=s.a,m=q,l=0
for(;;){if(!(l<o&&m<p&&n.D(r.charCodeAt(m))))break;++m;++l}if(l>=s.c){o=B.b.L(r,q,m)
o=new A.l(o,r,m,t.y)}else o=new A.j(s.b,r,m)
return o},
m(a,b){var s=a.length,r=this.d,q=this.a,p=0
for(;;){if(!(p<r&&b<s&&q.D(a.charCodeAt(b))))break;++b;++p}return p>=this.c?b:-1},
i(a){var s=this,r=s.M(0),q=s.d
return r+"["+s.b+", "+s.c+".."+A.k(q===9007199254740991?"*":q)+"]"}}
A.bV.prototype={
l(a){var s,r,q,p=this,o=p.$ti,n=A.p([],o.h("w<1>"))
for(s=p.b,r=a;n.length<s;r=q){q=p.a.l(r)
if(q instanceof A.j)return q
B.a.n(n,q.gA())}for(s=p.c;n.length<s;r=q){q=p.a.l(r)
if(q instanceof A.j)break
B.a.n(n,q.gA())}o.h("h<1>").a(n)
return new A.l(n,r.a,r.b,o.h("l<h<1>>"))},
m(a,b){var s,r,q,p,o=this
for(s=o.b,r=b,q=0;q<s;r=p){p=o.a.m(a,r)
if(p<0)return-1;++q}for(s=o.c;q<s;r=p){p=o.a.m(a,r)
if(p<0)break;++q}return r}}
A.bd.prototype={
i(a){var s=this.M(0),r=this.c
return s+"["+this.b+".."+A.k(r===9007199254740991?"*":r)+"]"}}
A.c0.prototype={
l(a){var s,r,q,p,o,n,m=this,l=m.$ti,k=A.p([],l.h("w<1>")),j=A.p([],l.h("w<2>"))
for(s=m.b,r=a;q=k.length,q<s;r=o){if(q!==0){p=m.e.l(r)
if(p instanceof A.j)return p
B.a.n(j,p.gA())
r=p}o=m.a.l(r)
if(o instanceof A.j)return o
B.a.n(k,o.gA())}for(s=m.c;q=k.length,q<s;r=o){if(q!==0){p=m.e.l(r)
if(p instanceof A.j)break
B.a.n(j,p.gA())
n=p}else n=r
o=m.a.l(n)
if(o instanceof A.j){if(k.length!==0){if(0>=j.length)return A.o(j,-1)
j.pop()}s=l.h("J<1,2>").a(new A.J(k,j,l.h("J<1,2>")))
return new A.l(s,r.a,r.b,l.h("l<J<1,2>>"))}B.a.n(k,o.gA())}s=l.h("J<1,2>").a(new A.J(k,j,l.h("J<1,2>")))
return new A.l(s,r.a,r.b,l.h("l<J<1,2>>"))},
m(a,b){var s,r,q,p,o,n,m=this
for(s=m.b,r=b,q=0;q<s;r=o){if(q>0){p=m.e.m(a,r)
if(p<0)return-1
r=p}o=m.a.m(a,r)
if(o<0)return-1;++q}for(s=m.c;q<s;r=o){if(q>0){p=m.e.m(a,r)
if(p<0)break
n=p}else n=r
o=m.a.m(a,n)
if(o<0)return r;++q}return r},
gJ(){return A.p([this.a,this.e],t.C)},
H(a,b){var s=this
s.ac(a,b)
if(s.e.v(0,a))s.e=s.$ti.h("e<2>").a(b)}}
A.J.prototype={
gaA(){return new A.as(this.b_(),t.ca)},
b_(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gaA(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=s.b,m=0
case 2:if(!(m<o.length)){r=4
break}r=5
return a.b=o[m],1
case 5:r=m<n.length?6:7
break
case 6:r=8
return a.b=n[m],1
case 8:case 7:case 3:++m
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
i(a){return A.bs(this).i(0)+this.gaA().i(0)}}
A.b0.prototype={
b1(){return A.he(new A.B(this.gO(),B.d,t.fZ),t.p)},
bo(){return A.d0(A.ht(new A.B(this.gbq(),B.d,t.a7),A.df(A.b2(B.n,"whitespace expected",!1),0,9007199254740991,t.N),t.j,t.dy),new A.dQ(),!1,t.x,t.p)},
br(){var s=t.N
return A.jk(new A.c2(A.aL(this.a,s),A.aL(A.W("{"),s),A.aL(this.b,s),A.aL(A.W(","),s),new A.B(this.gbH(),B.d,t.V),A.aL(A.W("}"),s),t.h0),new A.dR(),s,s,s,s,t.f,s,t.j)},
bI(){var s=t.N
return A.d0(A.ht(new A.B(this.gbs(),B.d,t.I),A.aL(A.W(","),s),t.q,s),new A.dT(),!1,t.k,t.f)},
bt(){var s=t.N
return A.hr(A.fn(A.aL(this.c,s),A.aL(A.W("="),s),new A.B(this.gbB(),B.d,t.h),s,s,s),new A.dS(),s,s,s,t.q)},
bC(){var s=t.h
return A.dV(A.p([new A.B(this.gbF(),B.d,s),new A.B(this.gbD(),B.d,s),this.d],t.ak),t.N)},
bG(){var s=t.N
return new A.b6("quoted string expected",A.fn(A.W('"'),new A.B(this.gbz(),B.d,t.c),A.W('"'),s,t.a,s))},
bA(){var s=t.K
return A.df(A.dV(A.p([new A.B(this.gbw(),B.d,t.h),this.e],t.Y),s),0,9007199254740991,s)},
bx(){return A.dM('^\\"')},
bE(){var s=t.N
return new A.b6("braced string expected",A.fn(A.W("{"),new A.B(this.gaS(),B.d,t.c),A.W("}"),s,t.a,s))},
by(){var s=t.N,r=t.K
return A.df(A.dV(A.p([new A.B(this.gbu(),B.d,t.h),this.e,A.fn(A.W("{"),new A.B(this.gaS(),B.d,t.c),A.W("}"),s,t.a,s)],t.Y),r),0,9007199254740991,r)},
bv(){return A.dM("^\\{}")}}
A.dQ.prototype={
$1(a){return t.x.a(a).a},
$S:32}
A.dR.prototype={
$6(a,b,c,d,e,f){A.n(a)
A.n(b)
A.n(c)
A.n(d)
t.f.a(e)
A.n(f)
return new A.x(a,c,e)},
$S:27}
A.dT.prototype={
$1(a){var s=t.N
s=A.e1(s,s)
s.bk(t.k.a(a).a)
return s},
$S:28}
A.dS.prototype={
$3(a,b,c){A.n(a)
A.n(b)
return new A.r(a,A.n(c),t.q)},
$S:29}
A.x.prototype={
gG(){var s,r,q=this,p=q.d
if(p===$){s=t.N
r=q.c.a8(0,new A.dU(),s,s)
q.d!==$&&A.ia("normalized")
q.d=r
p=r}return p},
i(a){var s,r,q="@"+this.a+"{"+this.b
for(s=this.c.gO(),s=s.gB(s);s.p();q=r){r=s.gt()
r=q+(",\n\t"+r.a+" = "+r.b)}q+="}"
return q.charCodeAt(0)==0?q:q}}
A.dU.prototype={
$2(a,b){var s,r,q,p
A.n(a)
A.n(b)
s=A.l7(a)
r=B.b.aa(b)
if(!(B.b.ab(r,"{")&&B.b.aR(r,"}")))q=B.b.ab(r,'"')&&B.b.aR(r,'"')
else q=!0
if(q)r=B.b.aa(B.b.L(r,1,r.length-1))
q=A.m(r,"---","\u2014")
q=A.m(q,"--","\u2013")
q=A.m(q,"\\'a","\xe1")
q=A.m(q,'\\"a',"\xe4")
q=A.m(q,"\\`a","\xe0")
q=A.m(q,"\\^a","\xe2")
q=A.m(q,"\\'e","\xe9")
q=A.m(q,'\\"e',"\xeb")
q=A.m(q,"\\`e","\xe8")
q=A.m(q,"\\^e","\xea")
q=A.m(q,"\\'i","\xed")
q=A.m(q,'\\"i',"\xef")
q=A.m(q,"\\`i","\xec")
q=A.m(q,"\\^i","\xee")
q=A.m(q,"\\'o","\xf3")
q=A.m(q,'\\"o',"\xf6")
q=A.m(q,"\\`o","\xf2")
q=A.m(q,"\\^o","\xf4")
q=A.m(q,"\\'u","\xfa")
q=A.m(q,'\\"u',"\xfc")
q=A.m(q,"\\`u","\xf9")
q=A.m(q,"\\^u","\xfb")
q=A.m(q,"\\'c","\u0107")
q=A.m(q,"\\c{c}","\xe7")
q=A.m(q,"\\ss{}","\xdf")
q=A.m(q,"\\ss","\xdf")
q=A.m(q,"{\\em ","")
q=A.m(q,"\\{","{")
q=A.m(q,"\\}","}")
p=$.iv()
return new A.r(s,A.m(q,p,""),t.q)},
$S:30}
A.fh.prototype={
$1(a){return A.k(a.j(0,1))+a.j(0,2).toUpperCase()},
$S:31}
A.fw.prototype={}
A.ch.prototype={}
A.dw.prototype={}
A.ci.prototype={$ijp:1}
A.et.prototype={
$1(a){return this.a.$1(A.c(a))},
$S:1}
A.f3.prototype={
$1(a){var s,r,q,p
A.c(a)
if(A.hM(a.lengthComputable)){s=B.f.aX(A.P(a.loaded)/A.P(a.total)*100)
r=B.f.a9(A.P(a.loaded)/1048576,1)
q=B.f.a9(A.P(a.total)/1048576,1)
p=""+s
A.c($.h5().style).width=p+"%"
$.fr().textContent="Downloading: "+r+" MB / "+q+" MB ("+p+"%)..."}else{r=B.f.a9(A.P(a.loaded)/1048576,1)
$.fr().textContent="Downloading: "+r+" MB..."}},
$S:3}
A.f4.prototype={
$1(a){var s,r,q
A.c(a)
s=this.a
r=A.P(s.status)>=200&&A.P(s.status)<300
q=this.b
if(r)q.an(A.n(s.responseText))
else q.ao(new A.bk("HTTP error "+A.P(s.status)+": "+A.n(s.statusText)))},
$S:3}
A.f5.prototype={
$1(a){A.c(a)
this.a.ao(new A.bk("Network error while requesting "+this.b))},
$S:3}
A.f6.prototype={
$1(a){A.c(a)
this.a.ao(new A.bk("Request was aborted."))},
$S:3}
A.fj.prototype={
$2(a,b){A.n(a)
return B.b.F(A.n(b),a)},
$S:33}
A.eV.prototype={
$1(a){var s,r,q,p,o,n,m
t.j.a(a)
s=this.a
if(s.length!==0&&a.a.toLowerCase()!==s)return!1
s=a.gG()
r=s.j(0,"Year")
if(r==null)r=""
q=this.b
if(q.length!==0&&r!==q)return!1
q=this.c
if(q.length!==0){p=s.j(0,"Title")
if(p==null)p=""
o=s.j(0,"Author")
if(o==null)o=""
n=s.j(0,"Booktitle")
if(n==null)n=""
m=s.j(0,"Journal")
if(m==null)m=""
s=s.j(0,"Annote")
if(s==null)s=""
if(!(B.b.S(a.b.toLowerCase(),q)||B.b.S(p.toLowerCase(),q)||B.b.S(o.toLowerCase(),q)||B.b.S(n.toLowerCase(),q)||B.b.S(m.toLowerCase(),q)||B.b.S(s.toLowerCase(),q)))return!1}return!0},
$S:34}
A.eW.prototype={
$2(a,b){var s,r="Year",q=t.j
q.a(a)
q.a(b)
switch(this.a){case"year-asc":q=a.gG().j(0,r)
if(q==null)q=""
s=b.gG().j(0,r)
return B.b.F(q,s==null?"":s)
case"author-asc":q=a.gG().j(0,"Author")
if(q==null)q=""
s=b.gG().j(0,"Author")
return B.b.F(q,s==null?"":s)
case"title-asc":q=a.gG().j(0,"Title")
if(q==null)q=""
s=b.gG().j(0,"Title")
return B.b.F(q,s==null?"":s)
case"year-desc":default:q=b.gG().j(0,r)
if(q==null)q=""
s=a.gG().j(0,r)
return B.b.F(q,s==null?"":s)}},
$S:35}
A.fl.prototype={
$1(a){var s=this.a,r=this.b
if(A.n(A.c(s.style).display)==="block"){A.c(s.style).display="none"
r.textContent="Show BibTeX"}else{A.c(s.style).display="block"
r.textContent="Hide BibTeX"}},
$S:1}
A.fm.prototype={
$1(a){var s,r,q=v.G
A.c(A.c(A.c(A.c(q.window).navigator).clipboard).writeText(this.a.i(0)))
s=this.b
s.textContent="Copied!"
q=A.c(q.window)
s=new A.fk(s)
if(typeof s=="function")A.cF(A.bu("Attempting to rewrap a JS function.",null))
r=function(b,c){return function(){return b(c)}}(A.k2,s)
r[$.fp()]=s
A.P(q.setTimeout(r,1500))},
$S:1}
A.fk.prototype={
$0(){this.a.textContent="Copy"},
$S:5}
A.f7.prototype={
$1(a){var s=B.b.aa(A.n($.h_().value))
if(s.length!==0)A.cE(s)},
$S:1}
A.f8.prototype={
$1(a){return A.dJ()},
$S:1}
A.f9.prototype={
$1(a){return A.dJ()},
$S:1}
A.fa.prototype={
$1(a){return A.dJ()},
$S:1}
A.fb.prototype={
$1(a){return A.dJ()},
$S:1}
A.fc.prototype={
$1(a){var s=$.Q
if(s>1){$.Q=s-1
A.dN()
A.c(v.G.window).scrollTo(0,0)}},
$S:1}
A.fd.prototype={
$1(a){var s=$.Q
if(s>1){$.Q=s-1
A.dN()
A.c(v.G.window).scrollTo(0,0)}},
$S:1}
A.fe.prototype={
$1(a){$.Q=$.Q+1
A.dN()
A.c(v.G.window).scrollTo(0,0)},
$S:1}
A.ff.prototype={
$1(a){$.Q=$.Q+1
A.dN()
A.c(v.G.window).scrollTo(0,0)},
$S:1};(function aliases(){var s=J.ao.prototype
s.b3=s.i
s=A.a_.prototype
s.aB=s.i
s=A.e.prototype
s.V=s.H
s.M=s.i
s=A.Z.prototype
s.R=s.i
s=A.E.prototype
s.ac=s.H})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers._instance_0u
s(J,"kg","j2",36)
r(A,"kt","je",7)
q(A,"kM","jw",4)
q(A,"kN","jx",4)
q(A,"kO","jy",4)
r(A,"i3","kC",0)
var o
p(o=A.b0.prototype,"gY","b1",6)
p(o,"gO","bo",6)
p(o,"gbq","br",22)
p(o,"gbH","bI",23)
p(o,"gbs","bt",24)
p(o,"gbB","bC",2)
p(o,"gbF","bG",2)
p(o,"gbz","bA",8)
p(o,"gbw","bx",2)
p(o,"gbD","bE",2)
p(o,"gaS","by",8)
p(o,"gbu","bv",2)
s(A,"kT","le",26)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.t,null)
q(A.t,[A.fy,J.cT,A.c_,J.bv,A.z,A.q,A.eg,A.d,A.aG,A.bM,A.ce,A.R,A.cb,A.ad,A.a0,A.ba,A.b3,A.ak,A.ck,A.cW,A.en,A.e6,A.bA,A.ct,A.eG,A.b9,A.e0,A.aD,A.bK,A.bE,A.dA,A.cf,A.dm,A.dE,A.a3,A.dy,A.dG,A.eJ,A.dt,A.cu,A.Y,A.dv,A.aO,A.D,A.du,A.c6,A.dC,A.cB,A.be,A.dz,A.aR,A.cA,A.al,A.dd,A.c5,A.bk,A.dX,A.r,A.O,A.dF,A.ei,A.dj,A.c7,A.a_,A.e7,A.e,A.af,A.aB,A.bP,A.Z,A.J,A.x,A.fw,A.ci])
q(J.cT,[J.cV,J.bD,J.bG,J.bF,J.bH,J.b7,J.am])
q(J.bG,[J.ao,J.w,A.bb,A.bS])
q(J.ao,[J.de,J.aM,J.an])
r(J.cU,A.c_)
r(J.e_,J.w)
q(J.b7,[J.bC,J.cX])
q(A.z,[A.bJ,A.ag,A.cY,A.dq,A.dk,A.dx,A.cL,A.a7,A.db,A.cd,A.dp,A.bg,A.cQ])
r(A.bi,A.q)
r(A.aa,A.bi)
q(A.d,[A.i,A.aI,A.aN,A.cj,A.ds,A.dD,A.as,A.aJ,A.bO])
q(A.i,[A.aF,A.aE,A.aC])
r(A.bz,A.aI)
r(A.bN,A.aF)
q(A.a0,[A.bl,A.bm,A.bn])
r(A.cp,A.bl)
r(A.cq,A.bm)
r(A.cr,A.bn)
r(A.bo,A.ba)
r(A.cc,A.bo)
r(A.bx,A.cc)
q(A.ak,[A.cP,A.cO,A.dn,A.f_,A.f1,A.eq,A.ep,A.eN,A.eC,A.ej,A.eI,A.e2,A.eP,A.eQ,A.fo,A.ec,A.ed,A.dQ,A.dR,A.dT,A.dS,A.fh,A.et,A.f3,A.f4,A.f5,A.f6,A.eV,A.fl,A.fm,A.f7,A.f8,A.f9,A.fa,A.fb,A.fc,A.fd,A.fe,A.ff])
q(A.cP,[A.dW,A.e9,A.f0,A.eO,A.eT,A.eD,A.e4,A.e5,A.fi,A.dU,A.fj,A.eW])
q(A.b3,[A.by,A.bB])
q(A.cO,[A.ea,A.er,A.es,A.eK,A.dY,A.eu,A.ey,A.ex,A.ew,A.ev,A.eB,A.eA,A.ez,A.ek,A.eH,A.eS,A.fk])
r(A.bU,A.ag)
q(A.dn,[A.dl,A.b1])
r(A.ac,A.b9)
r(A.bI,A.ac)
q(A.bS,[A.d1,A.bc])
q(A.bc,[A.cl,A.cn])
r(A.cm,A.cl)
r(A.bQ,A.cm)
r(A.co,A.cn)
r(A.bR,A.co)
q(A.bQ,[A.d2,A.d3])
q(A.bR,[A.d4,A.d5,A.d6,A.d7,A.d8,A.bT,A.d9])
r(A.cv,A.dx)
r(A.cg,A.dv)
r(A.dB,A.cB)
r(A.cs,A.be)
r(A.aQ,A.cs)
q(A.a7,[A.bX,A.cS])
r(A.bZ,A.a_)
q(A.bZ,[A.l,A.j])
q(A.e,[A.B,A.E,A.aH,A.c1,A.aK,A.c2,A.cR,A.b4,A.da,A.cN,A.di])
q(A.E,[A.b6,A.bL,A.c8,A.c9,A.c4,A.bd])
q(A.Z,[A.c3,A.ab,A.cZ,A.d_,A.dc,A.N,A.dh,A.dr])
r(A.bw,A.aH)
q(A.cN,[A.bf,A.ca])
r(A.cJ,A.bf)
r(A.cK,A.ca)
q(A.bd,[A.bV,A.c0])
r(A.b0,A.aB)
r(A.ch,A.c6)
r(A.dw,A.ch)
s(A.bi,A.cb)
s(A.cl,A.q)
s(A.cm,A.R)
s(A.cn,A.q)
s(A.co,A.R)
s(A.bo,A.cA)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",u:"double",S:"num",a:"String",au:"bool",O:"Null",h:"List",t:"Object",F:"Map",A:"JSObject"},mangledNames:{},types:["~()","~(A)","e<a>()","O(A)","~(~())","O()","e<h<x>>()","b()","e<h<@>>()","O(@)","@(@)","@(@,a)","~(@)","O(@,ar)","~(b,@)","O(t,ar)","~(bh,@)","N(a)","N(a,a,a)","a(b)","b(N,N)","~(t?,t?)","e<x>()","e<F<a,a>>()","e<r<a,a>>()","@(a)","j(j,j)","x(a,a,a,a,F<a,a>,a)","F<a,a>(J<r<a,a>,a>)","r<a,a>(a,a,a)","r<a,a>(a,a)","a(a8)","h<x>(J<x,h<a>>)","b(a,a)","au(x)","b(x,x)","b(@,@)","~(a,@)","O(~())"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.cp&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.cq&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"6;":a=>b=>b instanceof A.cr&&A.l9(a,b.a)}}
A.jQ(v.typeUniverse,JSON.parse('{"an":"ao","de":"ao","aM":"ao","lo":"bb","cV":{"au":[],"v":[]},"bD":{"v":[]},"bG":{"A":[]},"ao":{"A":[]},"w":{"h":["1"],"i":["1"],"A":[],"d":["1"]},"cU":{"c_":[]},"e_":{"w":["1"],"h":["1"],"i":["1"],"A":[],"d":["1"]},"bv":{"C":["1"]},"b7":{"u":[],"S":[],"a2":["S"]},"bC":{"u":[],"b":[],"S":[],"a2":["S"],"v":[]},"cX":{"u":[],"S":[],"a2":["S"],"v":[]},"am":{"a":[],"a2":["a"],"e8":[],"v":[]},"bJ":{"z":[]},"aa":{"q":["b"],"cb":["b"],"h":["b"],"i":["b"],"d":["b"],"q.E":"b"},"i":{"d":["1"]},"aF":{"i":["1"],"d":["1"]},"aG":{"C":["1"]},"aI":{"d":["2"],"d.E":"2"},"bz":{"aI":["1","2"],"i":["2"],"d":["2"],"d.E":"2"},"bM":{"C":["2"]},"bN":{"aF":["2"],"i":["2"],"d":["2"],"d.E":"2","aF.E":"2"},"aN":{"d":["1"],"d.E":"1"},"ce":{"C":["1"]},"bi":{"q":["1"],"cb":["1"],"h":["1"],"i":["1"],"d":["1"]},"ad":{"bh":[]},"cp":{"bl":[],"a0":[]},"cq":{"bm":[],"a0":[]},"cr":{"bn":[],"a0":[]},"bx":{"cc":["1","2"],"bo":["1","2"],"ba":["1","2"],"cA":["1","2"],"F":["1","2"]},"b3":{"F":["1","2"]},"by":{"b3":["1","2"],"F":["1","2"]},"cj":{"d":["1"],"d.E":"1"},"ck":{"C":["1"]},"bB":{"b3":["1","2"],"F":["1","2"]},"cW":{"hh":[]},"bU":{"ag":[],"z":[]},"cY":{"z":[]},"dq":{"z":[]},"ct":{"ar":[]},"ak":{"az":[]},"cO":{"az":[]},"cP":{"az":[]},"dn":{"az":[]},"dl":{"az":[]},"b1":{"az":[]},"dk":{"z":[]},"ac":{"b9":["1","2"],"F":["1","2"]},"aE":{"i":["1"],"d":["1"],"d.E":"1"},"aD":{"C":["1"]},"aC":{"i":["r<1,2>"],"d":["r<1,2>"],"d.E":"r<1,2>"},"bK":{"C":["r<1,2>"]},"bI":{"ac":["1","2"],"b9":["1","2"],"F":["1","2"]},"bl":{"a0":[]},"bm":{"a0":[]},"bn":{"a0":[]},"bE":{"jl":[],"e8":[]},"dA":{"bY":[],"a8":[]},"ds":{"d":["bY"],"d.E":"bY"},"cf":{"C":["bY"]},"dm":{"a8":[]},"dD":{"d":["a8"],"d.E":"a8"},"dE":{"C":["a8"]},"bb":{"A":[],"v":[]},"bS":{"A":[]},"d1":{"A":[],"v":[]},"bc":{"T":["1"],"A":[]},"bQ":{"q":["u"],"h":["u"],"T":["u"],"i":["u"],"A":[],"d":["u"],"R":["u"]},"bR":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"]},"d2":{"q":["u"],"h":["u"],"T":["u"],"i":["u"],"A":[],"d":["u"],"R":["u"],"v":[],"q.E":"u"},"d3":{"q":["u"],"h":["u"],"T":["u"],"i":["u"],"A":[],"d":["u"],"R":["u"],"v":[],"q.E":"u"},"d4":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"d5":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"d6":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"d7":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"d8":{"fG":[],"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"bT":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"d9":{"q":["b"],"h":["b"],"T":["b"],"i":["b"],"A":[],"d":["b"],"R":["b"],"v":[],"q.E":"b"},"dx":{"z":[]},"cv":{"ag":[],"z":[]},"cu":{"C":["1"]},"as":{"d":["1"],"d.E":"1"},"Y":{"z":[]},"cg":{"dv":["1"]},"D":{"aA":["1"]},"cB":{"hy":[]},"dB":{"cB":[],"hy":[]},"aQ":{"be":["1"],"hl":["1"],"i":["1"],"d":["1"]},"aR":{"C":["1"]},"q":{"h":["1"],"i":["1"],"d":["1"]},"b9":{"F":["1","2"]},"ba":{"F":["1","2"]},"cc":{"bo":["1","2"],"ba":["1","2"],"cA":["1","2"],"F":["1","2"]},"be":{"i":["1"],"d":["1"]},"cs":{"be":["1"],"i":["1"],"d":["1"]},"u":{"S":[],"a2":["S"]},"al":{"a2":["al"]},"b":{"S":[],"a2":["S"]},"h":{"i":["1"],"d":["1"]},"S":{"a2":["S"]},"bY":{"a8":[]},"a":{"a2":["a"],"e8":[]},"cL":{"z":[]},"ag":{"z":[]},"a7":{"z":[]},"bX":{"z":[]},"cS":{"z":[]},"db":{"z":[]},"cd":{"z":[]},"dp":{"z":[]},"bg":{"z":[]},"cQ":{"z":[]},"dd":{"z":[]},"c5":{"z":[]},"dF":{"ar":[]},"aJ":{"d":["b"],"d.E":"b"},"dj":{"C":["b"]},"j":{"a_":[]},"bZ":{"a_":[]},"l":{"a_":[]},"B":{"ef":["1"],"e":["1"]},"bO":{"d":["1"],"d.E":"1"},"bP":{"C":["1"]},"b6":{"E":["~","a"],"e":["a"],"E.T":"~"},"bL":{"E":["1","2"],"e":["2"],"E.T":"1"},"c8":{"E":["1","af<1>"],"e":["af<1>"],"E.T":"1"},"c9":{"E":["1","1"],"e":["1"],"E.T":"1"},"c3":{"Z":[]},"ab":{"Z":[]},"cZ":{"Z":[]},"d_":{"Z":[]},"dc":{"Z":[]},"N":{"Z":[]},"dh":{"Z":[]},"dr":{"Z":[]},"bw":{"aH":["1","1"],"e":["1"],"aH.R":"1"},"E":{"e":["2"]},"c1":{"e":["+(1,2)"]},"aK":{"e":["+(1,2,3)"]},"c2":{"e":["+(1,2,3,4,5,6)"]},"aH":{"e":["2"]},"c4":{"E":["1","1"],"e":["1"],"E.T":"1"},"cR":{"e":["~"]},"b4":{"e":["1"]},"da":{"e":["a"]},"cN":{"e":["a"]},"bf":{"e":["a"]},"cJ":{"e":["a"]},"ca":{"e":["a"]},"cK":{"e":["a"]},"di":{"e":["a"]},"bV":{"bd":["1","h<1>"],"E":["1","h<1>"],"e":["h<1>"],"E.T":"1"},"bd":{"E":["1","2"],"e":["2"]},"c0":{"bd":["1","J<1,2>"],"E":["1","J<1,2>"],"e":["J<1,2>"],"E.T":"1"},"b0":{"aB":["h<x>"],"aB.R":"h<x>"},"ch":{"c6":["1"]},"dw":{"ch":["1"],"c6":["1"]},"ci":{"jp":["1"]},"iY":{"h":["b"],"i":["b"],"d":["b"]},"ju":{"h":["b"],"i":["b"],"d":["b"]},"jt":{"h":["b"],"i":["b"],"d":["b"]},"iW":{"h":["b"],"i":["b"],"d":["b"]},"js":{"h":["b"],"i":["b"],"d":["b"]},"iX":{"h":["b"],"i":["b"],"d":["b"]},"fG":{"h":["b"],"i":["b"],"d":["b"]},"iT":{"h":["u"],"i":["u"],"d":["u"]},"iU":{"h":["u"],"i":["u"],"d":["u"]},"ef":{"e":["1"]}}'))
A.jP(v.typeUniverse,JSON.parse('{"i":1,"bi":1,"bc":1,"cs":1,"bZ":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.av
return{n:s("Y"),j:s("x"),U:s("a2<@>"),E:s("bx<bh,@>"),fu:s("al"),gw:s("i<@>"),B:s("b4<~>"),Q:s("z"),L:s("j"),Z:s("az"),D:s("hh"),hf:s("d<@>"),G:s("w<t>"),Y:s("w<e<t>>"),b9:s("w<e<N>>"),ak:s("w<e<a>>"),C:s("w<e<@>>"),dE:s("w<N>"),s:s("w<a>"),b:s("w<@>"),t:s("w<b>"),T:s("bD"),m:s("A"),g:s("an"),aU:s("T<@>"),eo:s("ac<bh,@>"),p:s("h<x>"),h2:s("h<N>"),dy:s("h<a>"),a:s("h<@>"),q:s("r<a,a>"),f:s("F<a,a>"),J:s("bO<af<a>>"),P:s("O"),K:s("t"),dw:s("e<@>"),d:s("N"),gT:s("lp"),bQ:s("+()"),a7:s("B<x>"),fZ:s("B<h<x>>"),c:s("B<h<@>>"),I:s("B<r<a,a>>"),V:s("B<F<a,a>>"),h:s("B<a>"),e:s("bY"),W:s("ef<@>"),x:s("J<x,h<a>>"),k:s("J<r<a,a>,a>"),dx:s("aK<a,a,a>"),h0:s("c2<a,a,a,a,F<a,a>,a>"),l:s("ar"),N:s("a"),gQ:s("a(a8)"),y:s("l<a>"),fF:s("l<~>"),fo:s("bh"),dC:s("c8<a>"),dm:s("v"),eK:s("ag"),bI:s("aM"),O:s("cg<a>"),r:s("dw<A>"),cK:s("D<a>"),_:s("D<@>"),fJ:s("D<b>"),ca:s("as<@>"),v:s("au"),al:s("au(t)"),i:s("u"),A:s("@"),fO:s("@()"),w:s("@(t)"),R:s("@(t,ar)"),S:s("b"),eH:s("aA<O>?"),z:s("A?"),X:s("t?"),dk:s("a?"),ey:s("a(a8)?"),F:s("aO<@,@>?"),br:s("dz?"),u:s("au?"),cD:s("u?"),h6:s("b?"),cg:s("S?"),g5:s("~()?"),o:s("S"),H:s("~"),M:s("~()")}})();(function constants(){var s=hunkHelpers.makeConstList
B.D=J.cT.prototype
B.a=J.w.prototype
B.c=J.bC.prototype
B.f=J.b7.prototype
B.b=J.am.prototype
B.E=J.an.prototype
B.F=J.bG.prototype
B.q=J.de.prototype
B.k=J.aM.prototype
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.r=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.x=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.w=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.v=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.u=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.m=function(hooks) { return hooks; }

B.y=new A.cZ()
B.z=new A.dd()
B.h=new A.eg()
B.n=new A.dr()
B.o=new A.eG()
B.e=new A.dB()
B.i=new A.dF()
B.A=new A.ab(!1)
B.j=new A.ab(!0)
B.B=new A.al(0)
B.C=new A.al(2e4)
B.G=s([],t.C)
B.d=s([],t.b)
B.H=new A.bB([8,"\\b",9,"\\t",10,"\\n",11,"\\v",12,"\\f",13,"\\r",34,'\\"',39,"\\'",92,"\\\\"],A.av("bB<b,a>"))
B.I={}
B.p=new A.by(B.I,[],A.av("by<bh,@>"))
B.J=new A.ad("call")
B.K=A.a5("lk")
B.L=A.a5("ll")
B.M=A.a5("iT")
B.N=A.a5("iU")
B.O=A.a5("iW")
B.P=A.a5("iX")
B.Q=A.a5("iY")
B.R=A.a5("t")
B.S=A.a5("js")
B.T=A.a5("fG")
B.U=A.a5("jt")
B.V=A.a5("ju")})();(function staticFields(){$.eE=null
$.V=A.p([],t.G)
$.hn=null
$.eb=0
$.fC=A.kt()
$.hb=null
$.ha=null
$.i6=null
$.i2=null
$.i8=null
$.eY=null
$.f2=null
$.fU=null
$.eF=A.p([],A.av("w<h<t>?>"))
$.bp=null
$.cC=null
$.cD=null
$.fN=!1
$.y=B.e
$.eU=A.p([],A.av("w<x>"))
$.fR=A.p([],A.av("w<x>"))
$.Q=1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ln","ig",()=>A.eZ("_$dart_dartClosure"))
s($,"lm","fp",()=>A.eZ("_$dart_dartClosure_dartJSInterop"))
s($,"lI","iw",()=>A.p([new J.cU()],A.av("w<c_>")))
s($,"lt","ii",()=>A.ah(A.eo({
toString:function(){return"$receiver$"}})))
s($,"lu","ij",()=>A.ah(A.eo({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"lv","ik",()=>A.ah(A.eo(null)))
s($,"lw","il",()=>A.ah(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"lz","ip",()=>A.ah(A.eo(void 0)))
s($,"lA","iq",()=>A.ah(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ly","io",()=>A.ah(A.hw(null)))
s($,"lx","im",()=>A.ah(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"lC","is",()=>A.ah(A.hw(void 0)))
s($,"lB","ir",()=>A.ah(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"lD","fZ",()=>A.jv())
s($,"lF","dO",()=>A.fX(B.R))
s($,"lq","fY",()=>{A.jg()
return $.eb})
s($,"ls","ih",()=>new A.da("newline expected"))
s($,"lG","iu",()=>A.k5(!1))
s($,"lE","it",()=>A.fD("(^|-)([a-z])"))
s($,"lH","iv",()=>A.fD("[{}]"))
s($,"lK","h_",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#bib-source",t.z)
return r==null?A.c(r):r})
s($,"lP","iz",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#load-btn",t.z)
return r==null?A.c(r):r})
s($,"lQ","dP",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#loading-indicator",t.z)
return r==null?A.c(r):r})
s($,"lR","fr",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#loading-status",t.z)
return r==null?A.c(r):r})
s($,"lZ","h5",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#progress-bar",t.z)
return r==null?A.c(r):r})
s($,"lN","fq",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#error-box",t.z)
return r==null?A.c(r):r})
s($,"m2","h8",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#status-box",t.z)
return r==null?A.c(r):r})
s($,"lL","h0",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#controls",t.z)
return r==null?A.c(r):r})
s($,"m0","h6",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#search-input",t.z)
return r==null?A.c(r):r})
s($,"m3","fs",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#type-filter",t.z)
return r==null?A.c(r):r})
s($,"m4","ft",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#year-filter",t.z)
return r==null?A.c(r):r})
s($,"m1","h7",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#sort-order",t.z)
return r==null?A.c(r):r})
s($,"m_","iD",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#results-count",t.z)
return r==null?A.c(r):r})
s($,"lU","iA",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#page-info",t.z)
return r==null?A.c(r):r})
s($,"lV","iB",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#page-info-bottom",t.z)
return r==null?A.c(r):r})
s($,"lX","h3",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#prev-page",t.z)
return r==null?A.c(r):r})
s($,"lS","h1",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#next-page",t.z)
return r==null?A.c(r):r})
s($,"lY","h4",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#prev-page-bottom",t.z)
return r==null?A.c(r):r})
s($,"lT","h2",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#next-page-bottom",t.z)
return r==null?A.c(r):r})
s($,"lM","iy",()=>{var r=A.K(A.L(A.M(),"document",t.m),"querySelector","#entries-list",t.z)
return r==null?A.c(r):r})
s($,"lW","iC",()=>{var r=A.av("b0"),q=r.h("aB.R")
return A.ld(r.h("e<aB.R>").a(A.lc(new A.b0(A.hu(A.ee(A.b2(B.y,"letter expected",!1),"type expected"),null,A.W("@"),t.N),A.ee(A.dM("a-zA-Z0-9_:-"),"citation key expected"),A.ee(A.dM("a-zA-Z0-9_-"),"field name expected"),A.ee(A.dM("a-zA-Z0-9"),"raw string expected"),new A.c1(A.W("\\"),A.kK(!1),A.av("c1<a,a>"))).gY(),q)),q)})
s($,"lJ","ix",()=>A.fD("^\\d{4}$"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bb,SharedArrayBuffer:A.bb,ArrayBufferView:A.bS,DataView:A.d1,Float32Array:A.d2,Float64Array:A.d3,Int16Array:A.d4,Int32Array:A.d5,Int8Array:A.d6,Uint16Array:A.d7,Uint32Array:A.d8,Uint8ClampedArray:A.bT,CanvasPixelArray:A.bT,Uint8Array:A.d9})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bc.$nativeSuperclassTag="ArrayBufferView"
A.cl.$nativeSuperclassTag="ArrayBufferView"
A.cm.$nativeSuperclassTag="ArrayBufferView"
A.bQ.$nativeSuperclassTag="ArrayBufferView"
A.cn.$nativeSuperclassTag="ArrayBufferView"
A.co.$nativeSuperclassTag="ArrayBufferView"
A.bR.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.l5
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=bibtex.dart.js.map
