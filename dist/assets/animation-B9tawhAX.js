const Ti={ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kc=0,Sa=1,Gc=2,ks=1,Vc=2,Yi=3,Hn=0,zt=1,Ft=2,Pn=0,Ai=1,Qi=2,ya=3,ba=4,Hc=5,ei=100,Wc=101,Xc=102,Yc=103,qc=104,Zc=200,$c=201,jc=202,Kc=203,Yr=204,qr=205,Jc=206,Qc=207,eh=208,th=209,nh=210,ih=211,sh=212,rh=213,oh=214,Zr=0,$r=1,jr=2,Ci=3,Kr=4,Jr=5,Qr=6,eo=7,Ll=0,ah=1,lh=2,pn=0,Ul=1,Nl=2,Fl=3,Ol=4,Bl=5,zl=6,kl=7,Gl=300,ii=301,Pi=302,to=303,no=304,Js=306,io=1e3,an=1001,so=1002,It=1003,ch=1004,ms=1005,St=1006,lr=1007,Gn=1008,$t=1009,Vl=1010,Hl=1011,es=1012,Wo=1013,_n=1014,jt=1015,Kt=1016,Xo=1017,Yo=1018,ts=1020,Wl=35902,Xl=35899,Yl=1021,ql=1022,ln=1023,Dn=1026,ni=1027,Zl=1028,qo=1029,Ii=1030,Zo=1031,$o=1033,Gs=33776,Vs=33777,Hs=33778,Ws=33779,ro=35840,oo=35841,ao=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,mo=37490,go=37491,_o=37808,xo=37809,vo=37810,Mo=37811,So=37812,yo=37813,bo=37814,wo=37815,Eo=37816,To=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Io=36492,Do=36494,Lo=36495,Uo=36283,No=36284,Fo=36285,Oo=36286,hh=3200,$l=0,uh=1,kn="",Pt="srgb",si="srgb-linear",qs="linear",ht="srgb",li=7680,wa=519,dh=512,fh=513,ph=514,jo=515,mh=516,gh=517,Ko=518,_h=519,Ea=35044,Ta="300 es",fn=2e3,Zs=2001;function jl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xh(){const n=ns("canvas");return n.style.display="block",n}const Aa={};function Ra(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ye(...n){const e="THREE."+n.shift();console.warn(e,...n)}function it(...n){const e="THREE."+n.shift();console.error(e,...n)}function is(...n){const e=n.join(" ");e in Aa||(Aa[e]=!0,Ye(...n))}function vh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,$s=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Mh(n,e){return(n%e+e)%e}function cr(n,e,t){return(1-t)*n+t*e}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sh={DEG2RAD:Xs};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let _=l*f+c*d+h*g+u*v;_<0&&(f=-f,d=-d,g=-g,v=-v,_=-_);let m=1-a;if(_<.9995){const y=Math.acos(_),p=Math.sin(y);m=Math.sin(m*y)/p,a=Math.sin(a*y)/p,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+v*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hr.copy(this).projectOnVector(e),this.sub(hr)}reflect(e){return this.sub(hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new L,Ca=new Wn;class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],_=s[3],m=s[6],y=s[1],p=s[4],x=s[7],w=s[2],E=s[5],C=s[8];return r[0]=o*v+a*y+l*w,r[3]=o*_+a*p+l*E,r[6]=o*m+a*x+l*C,r[1]=c*v+h*y+u*w,r[4]=c*_+h*p+u*E,r[7]=c*m+h*x+u*C,r[2]=f*v+d*y+g*w,r[5]=f*_+d*p+g*E,r[8]=f*m+d*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Ze,Pa=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yh(){const n={enabled:!0,workingColorSpace:si,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[si]:{primaries:e,whitePoint:i,transfer:qs,toXYZ:Pa,fromXYZ:Ia,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Pa,fromXYZ:Ia,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}const ot=yh();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ri(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ci;class bh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ci===void 0&&(ci=ns("canvas")),ci.width=e.width,ci.height=e.height;const s=ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wh=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dr(s[o].image)):r.push(dr(s[o]))}else r=dr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function dr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Eh=0;const fr=new L;class Dt extends oi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=an,s=an,r=St,o=Gn,a=ln,l=$t,c=Dt.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Ui(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fr).x}get height(){return this.source.getSize(fr).y}get depth(){return this.source.getSize(fr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Gl;Dt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+_)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(c+1)/2,x=(d+1)/2,w=(m+1)/2,E=(h+f)/4,C=(u+v)/4,I=(g+_)/4;return p>x&&p>w?p<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(p),s=E/i,r=C/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=I/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=I/r),this.set(i,s,r,t),this}let y=Math.sqrt((_-g)*(_-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Dt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Th{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kl extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),_s.subVectors(this.max,zi),hi.subVectors(e.a,zi),ui.subVectors(e.b,zi),di.subVectors(e.c,zi),Ln.subVectors(ui,hi),Un.subVectors(di,ui),Zn.subVectors(hi,di);let t=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-Zn.z,Zn.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,Zn.z,0,-Zn.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-Zn.y,Zn.x,0];return!pr(t,hi,ui,di,_s)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,hi,ui,di,_s))?!1:(xs.crossVectors(Ln,Un),t=[xs.x,xs.y,xs.z],pr(t,hi,ui,di,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new L,new L,new L,new L,new L,new L,new L,new L],nn=new L,gs=new ls,hi=new L,ui=new L,di=new L,Ln=new L,Un=new L,Zn=new L,zi=new L,_s=new L,xs=new L,$n=new L;function pr(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$n.fromArray(n,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),h=i.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rh=new ls,ki=new L,mr=new L;class Qo{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ki,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(mr)),this.expandByPoint(ki.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new L,gr=new L,vs=new L,Nn=new L,_r=new L,Ms=new L,xr=new L;class ea{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gr.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(gr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vs),a=Nn.dot(this.direction),l=-Nn.dot(vs),c=Nn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gr).addScaledVector(vs,f),d}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),s=wn.dot(wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,s,r){_r.subVectors(t,e),Ms.subVectors(i,e),xr.crossVectors(_r,Ms);let o=this.direction.dot(xr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);const l=a*this.direction.dot(Ms.crossVectors(Nn,Ms));if(l<0)return null;const c=a*this.direction.dot(_r.cross(Nn));if(c<0||l+c>o)return null;const h=-a*Nn.dot(xr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,v,_){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,v,_)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,v,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ch,e,Ph)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Fn.crossVectors(i,Yt),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Fn.crossVectors(i,Yt)),Fn.normalize(),Ss.crossVectors(Yt,Fn),s[0]=Fn.x,s[4]=Ss.x,s[8]=Yt.x,s[1]=Fn.y,s[5]=Ss.y,s[9]=Yt.y,s[2]=Fn.z,s[6]=Ss.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],_=i[10],m=i[14],y=i[3],p=i[7],x=i[11],w=i[15],E=s[0],C=s[4],I=s[8],M=s[12],b=s[1],R=s[5],U=s[9],N=s[13],k=s[2],H=s[6],z=s[10],W=s[14],J=s[3],fe=s[7],ie=s[11],ce=s[15];return r[0]=o*E+a*b+l*k+c*J,r[4]=o*C+a*R+l*H+c*fe,r[8]=o*I+a*U+l*z+c*ie,r[12]=o*M+a*N+l*W+c*ce,r[1]=h*E+u*b+f*k+d*J,r[5]=h*C+u*R+f*H+d*fe,r[9]=h*I+u*U+f*z+d*ie,r[13]=h*M+u*N+f*W+d*ce,r[2]=g*E+v*b+_*k+m*J,r[6]=g*C+v*R+_*H+m*fe,r[10]=g*I+v*U+_*z+m*ie,r[14]=g*M+v*N+_*W+m*ce,r[3]=y*E+p*b+x*k+w*J,r[7]=y*C+p*R+x*H+w*fe,r[11]=y*I+p*U+x*z+w*ie,r[15]=y*M+p*N+x*W+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],_=e[11],m=e[15],y=l*d-c*f,p=a*d-c*u,x=a*f-l*u,w=o*d-c*h,E=o*f-l*h,C=o*u-a*h;return t*(v*y-_*p+m*x)-i*(g*y-_*w+m*E)+s*(g*p-v*w+m*C)-r*(g*x-v*E+_*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],_=e[14],m=e[15],y=u*_*c-v*f*c+v*l*d-a*_*d-u*l*m+a*f*m,p=g*f*c-h*_*c-g*l*d+o*_*d+h*l*m-o*f*m,x=h*v*c-g*u*c+g*a*d-o*v*d-h*a*m+o*u*m,w=g*u*l-h*v*l-g*a*f+o*v*f+h*a*_-o*u*_,E=t*y+i*p+s*x+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(v*f*r-u*_*r-v*s*d+i*_*d+u*s*m-i*f*m)*C,e[2]=(a*_*r-v*l*r+v*s*c-i*_*c-a*s*m+i*l*m)*C,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*C,e[4]=p*C,e[5]=(h*_*r-g*f*r+g*s*d-t*_*d-h*s*m+t*f*m)*C,e[6]=(g*l*r-o*_*r-g*s*c+t*_*c+o*s*m-t*l*m)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*C,e[8]=x*C,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*m-t*u*m)*C,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*m+t*a*m)*C,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*C,e[12]=w*C,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*_+t*u*_)*C,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*_-t*a*_)*C,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,_=o*u,m=a*u,y=l*c,p=l*h,x=l*u,w=i.x,E=i.y,C=i.z;return s[0]=(1-(v+m))*w,s[1]=(d+x)*w,s[2]=(g-p)*w,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+m))*E,s[6]=(_+y)*E,s[7]=0,s[8]=(g+p)*C,s[9]=(_-y)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=fi.set(s[0],s[1],s[2]).length();const o=fi.set(s[4],s[5],s[6]).length(),a=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),sn.copy(this);const c=1/r,h=1/o,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===fn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Zs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===fn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Zs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fi=new L,sn=new gt,Ch=new L(0,0,0),Ph=new L(1,1,1),Fn=new L,Ss=new L,Yt=new L,Da=new gt,La=new Wn;class xn{constructor(e=0,t=0,i=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ih=0;const Ua=new L,pi=new Wn,En=new gt,ys=new L,Gi=new L,Dh=new L,Lh=new Wn,Na=new L(1,0,0),Fa=new L(0,1,0),Oa=new L(0,0,1),Ba={type:"added"},Uh={type:"removed"},mi={type:"childadded",child:null},vr={type:"childremoved",child:null};class Ct extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new L,t=new xn,i=new Wn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Na,e)}rotateY(e){return this.rotateOnAxis(Fa,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Ua.copy(e).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Na,e)}translateY(e){return this.translateOnAxis(Fa,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Gi,ys,this.up):En.lookAt(ys,Gi,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(En),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ba),mi.child=e,this.dispatchEvent(mi),mi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uh),vr.child=e,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ba),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new L(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new L,Tn=new L,Mr=new L,An=new L,gi=new L,_i=new L,za=new L,Sr=new L,yr=new L,br=new L,wr=new Mt,Er=new Mt,Tr=new Mt;class on{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),rn.subVectors(e,t),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){rn.subVectors(s,t),Tn.subVectors(i,t),Mr.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Tn),l=rn.dot(Mr),c=Tn.dot(Tn),h=Tn.dot(Mr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return wr.setScalar(0),Er.setScalar(0),Tr.setScalar(0),wr.fromBufferAttribute(e,t),Er.fromBufferAttribute(e,i),Tr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wr,r.x),o.addScaledVector(Er,r.y),o.addScaledVector(Tr,r.z),o}static isFrontFacing(e,t,i,s){return rn.subVectors(i,t),Tn.subVectors(e,t),rn.cross(Tn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;gi.subVectors(s,i),_i.subVectors(r,i),Sr.subVectors(e,i);const l=gi.dot(Sr),c=_i.dot(Sr);if(l<=0&&c<=0)return t.copy(i);yr.subVectors(e,s);const h=gi.dot(yr),u=_i.dot(yr);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(gi,o);br.subVectors(e,r);const d=gi.dot(br),g=_i.dot(br);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(_i,a);const _=h*g-d*u;if(_<=0&&u-h>=0&&d-g>=0)return za.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(za,a);const m=1/(_+v+f);return o=v*m,a=f*m,t.copy(i).addScaledVector(gi,o).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Ar(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Mh(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ar(o,r,e+1/3),this.g=Ar(o,r,e),this.b=Ar(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Jl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return ot.workingToColorSpace(Nt.copy(this),e),Math.round($e(Nt.r*255,0,255))*65536+Math.round($e(Nt.g*255,0,255))*256+Math.round($e(Nt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Pt){ot.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(bs);const i=cr(On.h,bs.h,t),s=cr(On.s,bs.s,t),r=cr(On.l,bs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Je;Je.NAMES=Jl;let Nh=0;class cs extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ai,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=qr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yr&&(i.blendSrc=this.blendSrc),this.blendDst!==qr&&(i.blendDst=this.blendDst),this.blendEquation!==ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lt extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=Fh();function Fh(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Oh(n){Math.abs(n)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),n=$e(n,-65504,65504),Cn.floatView[0]=n;const e=Cn.uint32View[0],t=e>>23&511;return Cn.baseTable[t]+((e&8388607)>>Cn.shiftTable[t])}function Bh(n){const e=n>>10;return Cn.uint32View[0]=Cn.mantissaTable[Cn.offsetTable[e]+(n&1023)]+Cn.exponentTable[e],Cn.floatView[0]}class ws{static toHalfFloat(e){return Oh(e)}static fromHalfFloat(e){return Bh(e)}}const bt=new L,Es=new ae;let zh=0;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ea,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),e}}class Ql extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ec extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kh=0;const Qt=new gt,Rr=new Ct,xi=new L,qt=new ls,Vi=new ls,Rt=new L;class At extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jl(e)?ec:Ql)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(qt.min,Vi.min),qt.expandByPoint(Rt),Rt.addVectors(qt.max,Vi.max),qt.expandByPoint(Rt)):(qt.expandByPoint(Vi.min),qt.expandByPoint(Vi.max))}qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(xi.fromBufferAttribute(e,c),Rt.add(xi)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new L,l[I]=new L;const c=new L,h=new L,u=new L,f=new ae,d=new ae,g=new ae,v=new L,_=new L;function m(I,M,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),_.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[I].add(v),a[M].add(v),a[b].add(v),l[I].add(_),l[M].add(_),l[b].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,M=y.length;I<M;++I){const b=y[I],R=b.start,U=b.count;for(let N=R,k=R+U;N<k;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const p=new L,x=new L,w=new L,E=new L;function C(I){w.fromBufferAttribute(s,I),E.copy(w);const M=a[I];p.copy(M),p.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(E,M);const R=x.dot(l[I])<0?-1:1;o.setXYZW(I,p.x,p.y,p.z,R)}for(let I=0,M=y.length;I<M;++I){const b=y[I],R=b.start,U=b.count;for(let N=R,k=R+U;N<k;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new gn(f,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new gt,jn=new ea,Ts=new Qo,Ga=new L,As=new L,Rs=new L,Cs=new L,Cr=new L,Ps=new L,Va=new L,Is=new L;class T extends Ct{constructor(e=new At,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Cr.fromBufferAttribute(u,e),o?Ps.addScaledVector(Cr,h):Ps.addScaledVector(Cr.sub(t),h))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(Ts.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ts,Ga)===null||jn.origin.distanceToSquared(Ga)>(e.far-e.near)**2))&&(ka.copy(r).invert(),jn.copy(e.ray).applyMatrix4(ka),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],m=o[_.materialIndex],y=Math.max(_.start,d.start),p=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let x=y,w=p;x<w;x+=3){const E=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);s=Ds(this,m,e,i,c,h,u,E,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let _=g,m=v;_<m;_+=3){const y=a.getX(_),p=a.getX(_+1),x=a.getX(_+2);s=Ds(this,o,e,i,c,h,u,y,p,x),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],m=o[_.materialIndex],y=Math.max(_.start,d.start),p=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let x=y,w=p;x<w;x+=3){const E=x,C=x+1,I=x+2;s=Ds(this,m,e,i,c,h,u,E,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let _=g,m=v;_<m;_+=3){const y=_,p=_+1,x=_+2;s=Ds(this,o,e,i,c,h,u,y,p,x),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Gh(n,e,t,i,s,r,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;Is.copy(a),Is.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:n}}function Ds(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,As),n.getVertexPosition(l,Rs),n.getVertexPosition(c,Cs);const h=Gh(n,e,t,i,As,Rs,Cs,Va);if(h){const u=new L;on.getBarycoord(Va,As,Rs,Cs,u),s&&(h.uv=on.getInterpolatedAttribute(s,a,l,c,u,new ae)),r&&(h.uv1=on.getInterpolatedAttribute(r,a,l,c,u,new ae)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};on.getNormal(As,Rs,Cs,f.normal),h.face=f,h.barycoord=u}return h}class he extends At{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(v,_,m,y,p,x,w,E,C,I,M){const b=x/C,R=w/I,U=x/2,N=w/2,k=E/2,H=C+1,z=I+1;let W=0,J=0;const fe=new L;for(let ie=0;ie<z;ie++){const ce=ie*R-N;for(let Ne=0;Ne<H;Ne++){const Ie=Ne*b-U;fe[v]=Ie*y,fe[_]=ce*p,fe[m]=k,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[_]=0,fe[m]=E>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ne/C),u.push(1-ie/I),W+=1}}for(let ie=0;ie<I;ie++)for(let ce=0;ce<C;ce++){const Ne=f+ce+H*ie,Ie=f+ce+H*(ie+1),tt=f+(ce+1)+H*(ie+1),st=f+(ce+1)+H*ie;l.push(Ne,Ie,st),l.push(Ie,tt,st),J+=6}a.addGroup(d,J,M),d+=J,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new he(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const s in i)e[s]=i[s]}return e}function Vh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Hh={clone:Di,merge:Bt};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new L,Ha=new ae,Wa=new ae;class Zt extends nc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,Wa),t.subVectors(Wa,Ha)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,Mi=1;class Yh extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(vi,Mi,e,t);s.layers=this.layers,this.add(s);const r=new Zt(vi,Mi,e,t);r.layers=this.layers,this.add(r);const o=new Zt(vi,Mi,e,t);o.layers=this.layers,this.add(o);const a=new Zt(vi,Mi,e,t);a.layers=this.layers,this.add(a);const l=new Zt(vi,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(vi,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ic extends Dt{constructor(e=[],t=ii,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sc extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ic(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new he(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Pn});r.uniforms.tEquirect.value=t;const o=new T(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=St),new Yh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class le extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),m=this._getHandJoint(c,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class V_ extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rc extends Dt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=It,h=It,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ir=new L,Zh=new L,$h=new Ze;class zn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ir.subVectors(i,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ir),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$h.getNormalMatrix(e),s=this.coplanarPoint(Ir).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Qo,jh=new ae(.5,.5),Ls=new L;class na{constructor(e=new zn,t=new zn,i=new zn,s=new zn,r=new zn,o=new zn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],_=r[10],m=r[11],y=r[12],p=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,m-g,w-y).normalize(),s[1].setComponents(c+o,d+h,m+g,w+y).normalize(),s[2].setComponents(c+a,d+u,m+v,w+p).normalize(),s[3].setComponents(c-a,d-u,m-v,w-p).normalize(),i)s[4].setComponents(l,f,_,x).normalize(),s[5].setComponents(c-l,d-f,m-_,w-x).normalize();else if(s[4].setComponents(c-l,d-f,m-_,w-x).normalize(),t===fn)s[5].setComponents(c+l,d+f,m+_,w+x).normalize();else if(t===Zs)s[5].setComponents(l,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);const t=jh.distanceTo(e.center);return Kn.radius=.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ls.x=s.normal.x>0?e.max.x:e.min.x,Ls.y=s.normal.y>0?e.max.y:e.min.y,Ls.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qs extends Dt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ss extends Dt{constructor(e,t,i=_n,s,r,o,a=It,l=It,c,h=Dn,u=1){if(h!==Dn&&h!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends ss{constructor(e,t=_n,i=ii,s,r,o=It,a=It,l,c=Dn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class oc extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xn extends At{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=i*2+r,v=s+1,_=new L,m=new L;for(let y=0;y<=g;y++){let p=0,x=0,w=0,E=0;if(y<=i){const M=y/i,b=M*Math.PI/2;x=-h-e*Math.cos(b),w=e*Math.sin(b),E=-e*Math.cos(b),p=M*u}else if(y<=i+r){const M=(y-i)/r;x=-h+M*t,w=e,E=0,p=u+M*f}else{const M=(y-i-r)/i,b=M*Math.PI/2;x=h+e*Math.sin(b),w=e*Math.cos(b),E=e*Math.sin(b),p=u+f+M*u}const C=Math.max(0,Math.min(1,p/d));let I=0;y===0?I=.5/s:y===g&&(I=-.5/s);for(let M=0;M<=s;M++){const b=M/s,R=b*Math.PI*2,U=Math.sin(R),N=Math.cos(R);m.x=-w*N,m.y=x,m.z=w*U,a.push(m.x,m.y,m.z),_.set(-w*N,E,w*U),_.normalize(),l.push(_.x,_.y,_.z),c.push(b+I,C)}if(y>0){const M=(y-1)*v;for(let b=0;b<s;b++){const R=M+b,U=M+b+1,N=y*v+b,k=y*v+b+1;o.push(R,U,N),o.push(U,k,N)}}}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class tn extends At{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ne extends At{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],_=i/2;let m=0;y(),o===!1&&(e>0&&p(!0),t>0&&p(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function y(){const x=new L,w=new L;let E=0;const C=(t-e)/i;for(let I=0;I<=r;I++){const M=[],b=I/r,R=b*(t-e)+e;for(let U=0;U<=s;U++){const N=U/s,k=N*l+a,H=Math.sin(k),z=Math.cos(k);w.x=R*H,w.y=-b*i+_,w.z=R*z,u.push(w.x,w.y,w.z),x.set(H,C,z).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-b),M.push(g++)}v.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){const b=v[M][I],R=v[M+1][I],U=v[M+1][I+1],N=v[M][I+1];(e>0||M!==0)&&(h.push(b,R,N),E+=3),(t>0||M!==r-1)&&(h.push(R,U,N),E+=3)}c.addGroup(m,E,0),m+=E}function p(x){const w=g,E=new ae,C=new L;let I=0;const M=x===!0?e:t,b=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,_*b,0),f.push(0,b,0),d.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const k=U/s*l+a,H=Math.cos(k),z=Math.sin(k);C.x=M*z,C.y=_*b,C.z=M*H,u.push(C.x,C.y,C.z),f.push(0,b,0),E.x=H*.5+.5,E.y=z*.5*b+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){const N=w+U,k=R+U;x===!0?h.push(k,k+1,N):h.push(k+1,k,N),I+=3}c.addGroup(m,I,x===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ne(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yt extends ne{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new yt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const p=new L,x=new L,w=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],p),d(t[E+1],x),d(t[E+2],w),l(p,x,w,y)}function l(y,p,x,w){const E=w+1,C=[];for(let I=0;I<=E;I++){C[I]=[];const M=y.clone().lerp(x,I/E),b=p.clone().lerp(x,I/E),R=E-I;for(let U=0;U<=R;U++)U===0&&I===E?C[I][U]=M:C[I][U]=M.clone().lerp(b,U/R)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){const b=Math.floor(M/2);M%2===0?(f(C[I][b+1]),f(C[I+1][b]),f(C[I][b])):(f(C[I][b+1]),f(C[I+1][b+1]),f(C[I+1][b]))}}function c(y){const p=new L;for(let x=0;x<r.length;x+=3)p.x=r[x+0],p.y=r[x+1],p.z=r[x+2],p.normalize().multiplyScalar(y),r[x+0]=p.x,r[x+1]=p.y,r[x+2]=p.z}function h(){const y=new L;for(let p=0;p<r.length;p+=3){y.x=r[p+0],y.y=r[p+1],y.z=r[p+2];const x=_(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(x,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const p=o[y+0],x=o[y+2],w=o[y+4],E=Math.max(p,x,w),C=Math.min(p,x,w);E>.9&&C<.1&&(p<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,p){const x=y*3;p.x=e[x+0],p.y=e[x+1],p.z=e[x+2]}function g(){const y=new L,p=new L,x=new L,w=new L,E=new ae,C=new ae,I=new ae;for(let M=0,b=0;M<r.length;M+=9,b+=6){y.set(r[M+0],r[M+1],r[M+2]),p.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),E.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),w.copy(y).add(p).add(x).divideScalar(3);const R=_(w);v(E,b+0,y,R),v(C,b+2,p,R),v(I,b+4,x,R)}}function v(y,p,x,w){w<0&&y.x===1&&(o[p]=y.x-1),x.x===0&&x.z===0&&(o[p]=w/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.vertices,e.indices,e.radius,e.detail)}}class us extends hs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new us(e.radius,e.detail)}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],o=[],a=new L,l=new gt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ia extends Sn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jh extends ia{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sa(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Us=new L,Dr=new sa,Lr=new sa,Ur=new sa;class ac extends Sn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Us.subVectors(s[0],s[1]).add(s[0]),c=Us);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Us.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),_<1e-4&&(_=v),Dr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,_),Lr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,_),Ur.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,_)}else this.curveType==="catmullrom"&&(Dr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Lr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ur.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Dr.calc(l),Lr.calc(l),Ur.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xa(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Qh(n,e){const t=1-n;return t*t*e}function eu(n,e){return 2*(1-n)*n*e}function tu(n,e){return n*n*e}function $i(n,e,t,i){return Qh(n,e)+eu(n,t)+tu(n,i)}function nu(n,e){const t=1-n;return t*t*t*e}function iu(n,e){const t=1-n;return 3*t*t*n*e}function su(n,e){return 3*(1-n)*n*n*e}function ru(n,e){return n*n*n*e}function ji(n,e,t,i,s){return nu(n,e)+iu(n,t)+su(n,i)+ru(n,s)}class lc extends Sn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ji(e,s.x,r.x,o.x,a.x),ji(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ou extends Sn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ji(e,s.x,r.x,o.x,a.x),ji(e,s.y,r.y,o.y,a.y),ji(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cc extends Sn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class au extends Sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hc extends Sn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set($i(e,s.x,r.x,o.x),$i(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uc extends Sn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set($i(e,s.x,r.x,o.x),$i(e,s.y,r.y,o.y),$i(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Xa(a,l.x,c.x,h.x,u.x),Xa(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var js=Object.freeze({__proto__:null,ArcCurve:Jh,CatmullRomCurve3:ac,CubicBezierCurve:lc,CubicBezierCurve3:ou,EllipseCurve:ia,LineCurve:cc,LineCurve3:au,QuadraticBezierCurve:hc,QuadraticBezierCurve3:uc,SplineCurve:dc});class fc extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new js[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new js[s.type]().fromJSON(s))}return this}}class Ya extends fc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new cc(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new hc(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new lc(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new dc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ia(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ra extends Ya{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ya().fromJSON(s))}return this}}function lu(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=pc(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=fu(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let f=t;f<s;f+=t){const d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return rs(r,o,t,a,l,c,0),o}function pc(n,e,t,i,s){let r;if(s===wu(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=qa(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=qa(o/i|0,n[o],n[o+1],r);return r&&Li(r,r.next)&&(as(r),r=r.next),r}function ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Li(t,t.next)||_t(t.prev,t,t.next)===0)){if(as(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function rs(n,e,t,i,s,r,o){if(!n)return;!o&&r&&xu(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?hu(n,i,s,r):cu(n)){e.push(l.i,n.i,c.i),as(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=uu(ri(n),e),rs(n,e,t,i,s,r,2)):o===2&&du(n,e,t,i,s,r):rs(ri(n),e,t,i,s,r,1);break}}}function cu(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&qi(s,a,r,l,o,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hu(n,e,t,i){const s=n.prev,r=n,o=n.next;if(_t(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),_=Math.max(h,u,f),m=Bo(d,g,e,t,i),y=Bo(v,_,e,t,i);let p=n.prevZ,x=n.nextZ;for(;p&&p.z>=m&&x&&x.z<=y;){if(p.x>=d&&p.x<=v&&p.y>=g&&p.y<=_&&p!==s&&p!==o&&qi(a,h,l,u,c,f,p.x,p.y)&&_t(p.prev,p,p.next)>=0||(p=p.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=_&&x!==s&&x!==o&&qi(a,h,l,u,c,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;p&&p.z>=m;){if(p.x>=d&&p.x<=v&&p.y>=g&&p.y<=_&&p!==s&&p!==o&&qi(a,h,l,u,c,f,p.x,p.y)&&_t(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=_&&x!==s&&x!==o&&qi(a,h,l,u,c,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function uu(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Li(i,s)&&gc(i,t,t.next,s)&&os(i,s)&&os(s,i)&&(e.push(i.i,t.i,s.i),as(t),as(t.next),t=n=s),t=t.next}while(t!==n);return ri(t)}function du(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Su(o,a)){let l=_c(o,a);o=ri(o,o.next),l=ri(l,l.next),rs(o,e,t,i,s,r,0),rs(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function fu(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=pc(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Mu(c))}s.sort(pu);for(let r=0;r<s.length;r++)t=mu(s[r],t);return t}function pu(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function mu(n,e){const t=gu(n,e);if(!t)return e;const i=_c(t,n);return ri(i,i.next),ri(t,t.next)}function gu(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Li(n,t))return t;do{if(Li(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&mc(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);os(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&_u(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function _u(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function xu(n,e,t,i){let s=n;do s.z===0&&(s.z=Bo(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vu(s)}function vu(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Bo(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Mu(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mc(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function qi(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&mc(n,e,t,i,s,r,o,a)}function Su(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!yu(n,e)&&(os(n,e)&&os(e,n)&&bu(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||Li(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Li(n,e){return n.x===e.x&&n.y===e.y}function gc(n,e,t,i){const s=Fs(_t(n,e,t)),r=Fs(_t(n,e,i)),o=Fs(_t(t,i,n)),a=Fs(_t(t,i,e));return!!(s!==r&&o!==a||s===0&&Ns(n,t,e)||r===0&&Ns(n,i,e)||o===0&&Ns(t,n,i)||a===0&&Ns(t,e,i))}function Ns(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fs(n){return n>0?1:n<0?-1:0}function yu(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function os(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function bu(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _c(n,e){const t=zo(n.i,n.x,n.y),i=zo(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qa(n,e,t,i){const s=zo(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function as(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wu(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Eu{static triangulate(e,t,i=2){return lu(e,t,i)}}class wi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return wi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Za(e),$a(i,e);let o=e.length;t.forEach(Za);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$a(i,t[l]);const a=Eu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Za(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $a(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class er extends At{constructor(e=new ra([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Tu;let p,x=!1,w,E,C,I;if(m){p=m.getSpacedPoints(h),x=!0,f=!1;const Q=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,Q),E=new L,C=new L,I=new L}f||(_=0,d=0,g=0,v=0);const M=a.extractPoints(c);let b=M.shape;const R=M.holes;if(!wi.isClockWise(b)){b=b.reverse();for(let Q=0,se=R.length;Q<se;Q++){const te=R[Q];wi.isClockWise(te)&&(R[Q]=te.reverse())}}function N(Q){const te=10000000000000001e-36;let Me=Q[0];for(let D=1;D<=Q.length;D++){const Ee=D%Q.length,Se=Q[Ee],Be=Se.x-Me.x,ue=Se.y-Me.y,P=Be*Be+ue*ue,S=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(Me.x),Math.abs(Me.y)),F=te*S*S;if(P<=F){Q.splice(Ee,1),D--;continue}Me=Se}}N(b),R.forEach(N);const k=R.length,H=b;for(let Q=0;Q<k;Q++){const se=R[Q];b=b.concat(se)}function z(Q,se,te){return se||it("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(se,te)}const W=b.length;function J(Q,se,te){let Me,D,Ee;const Se=Q.x-se.x,Be=Q.y-se.y,ue=te.x-Q.x,P=te.y-Q.y,S=Se*Se+Be*Be,F=Se*P-Be*ue;if(Math.abs(F)>Number.EPSILON){const q=Math.sqrt(S),K=Math.sqrt(ue*ue+P*P),$=se.x-Be/q,Pe=se.y+Se/q,me=te.x-P/K,Le=te.y+ue/K,We=((me-$)*P-(Le-Pe)*ue)/(Se*P-Be*ue);Me=$+Se*We-Q.x,D=Pe+Be*We-Q.y;const re=Me*Me+D*D;if(re<=2)return new ae(Me,D);Ee=Math.sqrt(re/2)}else{let q=!1;Se>Number.EPSILON?ue>Number.EPSILON&&(q=!0):Se<-Number.EPSILON?ue<-Number.EPSILON&&(q=!0):Math.sign(Be)===Math.sign(P)&&(q=!0),q?(Me=-Be,D=Se,Ee=Math.sqrt(S)):(Me=Se,D=Be,Ee=Math.sqrt(S/2))}return new ae(Me/Ee,D/Ee)}const fe=[];for(let Q=0,se=H.length,te=se-1,Me=Q+1;Q<se;Q++,te++,Me++)te===se&&(te=0),Me===se&&(Me=0),fe[Q]=J(H[Q],H[te],H[Me]);const ie=[];let ce,Ne=fe.concat();for(let Q=0,se=k;Q<se;Q++){const te=R[Q];ce=[];for(let Me=0,D=te.length,Ee=D-1,Se=Me+1;Me<D;Me++,Ee++,Se++)Ee===D&&(Ee=0),Se===D&&(Se=0),ce[Me]=J(te[Me],te[Ee],te[Se]);ie.push(ce),Ne=Ne.concat(ce)}let Ie;if(_===0)Ie=wi.triangulateShape(H,R);else{const Q=[],se=[];for(let te=0;te<_;te++){const Me=te/_,D=d*Math.cos(Me*Math.PI/2),Ee=g*Math.sin(Me*Math.PI/2)+v;for(let Se=0,Be=H.length;Se<Be;Se++){const ue=z(H[Se],fe[Se],Ee);Ae(ue.x,ue.y,-D),Me===0&&Q.push(ue)}for(let Se=0,Be=k;Se<Be;Se++){const ue=R[Se];ce=ie[Se];const P=[];for(let S=0,F=ue.length;S<F;S++){const q=z(ue[S],ce[S],Ee);Ae(q.x,q.y,-D),Me===0&&P.push(q)}Me===0&&se.push(P)}}Ie=wi.triangulateShape(Q,se)}const tt=Ie.length,st=g+v;for(let Q=0;Q<W;Q++){const se=f?z(b[Q],Ne[Q],st):b[Q];x?(C.copy(w.normals[0]).multiplyScalar(se.x),E.copy(w.binormals[0]).multiplyScalar(se.y),I.copy(p[0]).add(C).add(E),Ae(I.x,I.y,I.z)):Ae(se.x,se.y,0)}for(let Q=1;Q<=h;Q++)for(let se=0;se<W;se++){const te=f?z(b[se],Ne[se],st):b[se];x?(C.copy(w.normals[Q]).multiplyScalar(te.x),E.copy(w.binormals[Q]).multiplyScalar(te.y),I.copy(p[Q]).add(C).add(E),Ae(I.x,I.y,I.z)):Ae(te.x,te.y,u/h*Q)}for(let Q=_-1;Q>=0;Q--){const se=Q/_,te=d*Math.cos(se*Math.PI/2),Me=g*Math.sin(se*Math.PI/2)+v;for(let D=0,Ee=H.length;D<Ee;D++){const Se=z(H[D],fe[D],Me);Ae(Se.x,Se.y,u+te)}for(let D=0,Ee=R.length;D<Ee;D++){const Se=R[D];ce=ie[D];for(let Be=0,ue=Se.length;Be<ue;Be++){const P=z(Se[Be],ce[Be],Me);x?Ae(P.x,P.y+p[h-1].y,p[h-1].x+te):Ae(P.x,P.y,u+te)}}}j(),Z();function j(){const Q=s.length/3;if(f){let se=0,te=W*se;for(let Me=0;Me<tt;Me++){const D=Ie[Me];pe(D[2]+te,D[1]+te,D[0]+te)}se=h+_*2,te=W*se;for(let Me=0;Me<tt;Me++){const D=Ie[Me];pe(D[0]+te,D[1]+te,D[2]+te)}}else{for(let se=0;se<tt;se++){const te=Ie[se];pe(te[2],te[1],te[0])}for(let se=0;se<tt;se++){const te=Ie[se];pe(te[0]+W*h,te[1]+W*h,te[2]+W*h)}}i.addGroup(Q,s.length/3-Q,0)}function Z(){const Q=s.length/3;let se=0;_e(H,se),se+=H.length;for(let te=0,Me=R.length;te<Me;te++){const D=R[te];_e(D,se),se+=D.length}i.addGroup(Q,s.length/3-Q,1)}function _e(Q,se){let te=Q.length;for(;--te>=0;){const Me=te;let D=te-1;D<0&&(D=Q.length-1);for(let Ee=0,Se=h+_*2;Ee<Se;Ee++){const Be=W*Ee,ue=W*(Ee+1),P=se+Me+Be,S=se+D+Be,F=se+D+ue,q=se+Me+ue;ze(P,S,F,q)}}}function Ae(Q,se,te){l.push(Q),l.push(se),l.push(te)}function pe(Q,se,te){rt(Q),rt(se),rt(te);const Me=s.length/3,D=y.generateTopUV(i,s,Me-3,Me-2,Me-1);Ge(D[0]),Ge(D[1]),Ge(D[2])}function ze(Q,se,te,Me){rt(Q),rt(se),rt(Me),rt(se),rt(te),rt(Me);const D=s.length/3,Ee=y.generateSideWallUV(i,s,D-6,D-3,D-2,D-1);Ge(Ee[0]),Ge(Ee[1]),Ge(Ee[3]),Ge(Ee[1]),Ge(Ee[2]),Ge(Ee[3])}function rt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Ge(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Au(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new js[s.type]().fromJSON(s)),new er(i,e.options)}}const Tu={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],_=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(f,1-g),new ae(v,1-m)]:[new ae(a,1-l),new ae(h,1-u),new ae(d,1-g),new ae(_,1-m)]}};function Au(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oa extends hs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class aa extends hs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new aa(e.radius,e.detail)}}class Ni extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],v=[],_=[];for(let m=0;m<h;m++){const y=m*f-o;for(let p=0;p<c;p++){const x=p*u-r;g.push(x,-y,0),v.push(0,0,1),_.push(p/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const p=y+c*m,x=y+c*(m+1),w=y+1+c*(m+1),E=y+1+c*m;d.push(p,x,E),d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}class tr extends At{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,d=new L,g=new ae;for(let v=0;v<=s;v++){for(let _=0;_<=i;_++){const m=r+_/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const _=v*(i+1);for(let m=0;m<i;m++){const y=m+_,p=y,x=y+i+1,w=y+i+2,E=y+1;a.push(p,x,E),a.push(x,w,E)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ke extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],g=[],v=[],_=[];for(let m=0;m<=i;m++){const y=[],p=m/i;let x=0;m===0&&o===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+p*a),u.y=e*Math.cos(o+p*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+p*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),_.push(E+x,1-p),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const p=h[m][y+1],x=h[m][y],w=h[m+1][y],E=h[m+1][y+1];(m!==0||o>0)&&d.push(p,x,E),(m!==i-1||l<Math.PI)&&d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nt extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,_=d/i*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(v),u.y=(e+t*Math.cos(_))*Math.sin(v),u.z=t*Math.sin(_),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,_=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(v,_,y),o.push(_,m,y)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class la extends At{constructor(e=1,t=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],h=[],u=new L,f=new L,d=new L,g=new L,v=new L,_=new L,m=new L;for(let p=0;p<=i;++p){const x=p/i*r*Math.PI*2;y(x,r,o,e,d),y(x+.01,r,o,e,g),_.subVectors(g,d),m.addVectors(g,d),v.crossVectors(_,m),m.crossVectors(v,_),v.normalize(),m.normalize();for(let w=0;w<=s;++w){const E=w/s*Math.PI*2,C=-t*Math.cos(E),I=t*Math.sin(E);u.x=d.x+(C*m.x+I*v.x),u.y=d.y+(C*m.y+I*v.y),u.z=d.z+(C*m.z+I*v.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(p/i),h.push(w/s)}}for(let p=1;p<=i;p++)for(let x=1;x<=s;x++){const w=(s+1)*(p-1)+(x-1),E=(s+1)*p+(x-1),C=(s+1)*p+x,I=(s+1)*(p-1)+x;a.push(w,E,I),a.push(E,C,I)}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2));function y(p,x,w,E,C){const I=Math.cos(p),M=Math.sin(p),b=w/x*p,R=Math.cos(b);C.x=E*(2+R)*.5*I,C.y=E*(2+R)*M*.5,C.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ca extends At{constructor(e=new uc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new ae;let h=new L;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function v(){for(let p=0;p<t;p++)_(p);_(r===!1?t:0),y(),m()}function _(p){h=e.getPointAt(p/t,h);const x=o.normals[p],w=o.binormals[p];for(let E=0;E<=s;E++){const C=E/s*Math.PI*2,I=Math.sin(C),M=-Math.cos(C);l.x=M*x.x+I*w.x,l.y=M*x.y+I*w.y,l.z=M*x.z+I*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let p=1;p<=t;p++)for(let x=1;x<=s;x++){const w=(s+1)*(p-1)+(x-1),E=(s+1)*p+(x-1),C=(s+1)*p+x,I=(s+1)*(p-1)+x;g.push(w,E,I),g.push(E,C,I)}}function y(){for(let p=0;p<=t;p++)for(let x=0;x<=s;x++)c.x=p/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ca(new js[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ru extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vn extends O{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cu extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pu extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Iu{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Du=new Iu;class ds{constructor(e){this.manager=e!==void 0?e:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class Lu extends Error{constructor(e,t){super(e),this.response=t}}class Uu extends ds{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ki.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:i,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Rn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const _=new ReadableStream({start(m){y();function y(){u.read().then(({done:p,value:x})=>{if(p)m.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let E=0,C=h.length;E<C;E++){const I=h[E];I.onProgress&&I.onProgress(w)}m.enqueue(x),y()}},p=>{m.error(p)})}}});return new Response(_)}else throw new Lu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ki.add(`file:${e}`,c);const h=Rn[e];delete Rn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Rn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Si=new WeakMap;class Nu extends ds{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ki.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Si.get(o);u===void 0&&(u=[],Si.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=ns("img");function l(){h(),t&&t(this);const u=Si.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Si.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ki.remove(`image:${e}`);const f=Si.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}Si.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ki.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Fu extends ds{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new rc,a=new Uu(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{h(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:an,o.wrapT=c.wrapT!==void 0?c.wrapT:an,o.magFilter=c.magFilter!==void 0?c.magFilter:St,o.minFilter=c.minFilter!==void 0?c.minFilter:St,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Gn),c.mipmapCount===1&&(o.minFilter=St),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Ou extends ds{constructor(e){super(e)}load(e,t,i,s){const r=new Dt,o=new Nu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class nr extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Nr=new gt,ja=new L,Ka=new L;class ha{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(ja),Ka.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ka),t.updateMatrixWorld(),Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bu extends ha{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=$s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class H_ extends nr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class zu extends ha{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class W_ extends nr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ua extends nc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ku extends ha{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Y_ extends nr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gu extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class q_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ja=new gt;class Z_{constructor(e,t,i=0,s=1/0){this.ray=new ea(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ja.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ja),this}intersectObject(e,t=!0,i=[]){return ko(e,this,i,t),i.sort(Qa),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ko(e[s],this,i,t);return i.sort(Qa),i}}function Qa(n,e){return n.distance-e.distance}function ko(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ko(r[o],e,t,!0)}}class el{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vu extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tl(n,e,t,i){const s=Hu(i);switch(t){case Yl:return n*e;case Zl:return n*e/s.components*s.byteLength;case qo:return n*e/s.components*s.byteLength;case Ii:return n*e*2/s.components*s.byteLength;case Zo:return n*e*2/s.components*s.byteLength;case ql:return n*e*3/s.components*s.byteLength;case ln:return n*e*4/s.components*s.byteLength;case $o:return n*e*4/s.components*s.byteLength;case Gs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:case lo:return Math.max(n,16)*Math.max(e,8)/4;case ro:case ao:return Math.max(n,8)*Math.max(e,8)/2;case co:case ho:case fo:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case Do:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uo:case No:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fo:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hu(n){switch(n){case $t:case Vl:return{byteLength:1,components:1};case es:case Hl:case Kt:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case _n:case Wo:case jt:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function xc(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wu(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ef=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Xu,alphahash_pars_fragment:Yu,alphamap_fragment:qu,alphamap_pars_fragment:Zu,alphatest_fragment:$u,alphatest_pars_fragment:ju,aomap_fragment:Ku,aomap_pars_fragment:Ju,batching_pars_vertex:Qu,batching_vertex:ed,begin_vertex:td,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:od,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:ud,color_pars_vertex:dd,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:xd,emissivemap_fragment:vd,emissivemap_pars_fragment:Md,colorspace_fragment:Sd,colorspace_pars_fragment:yd,envmap_fragment:bd,envmap_common_pars_fragment:wd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Od,envmap_vertex:Ad,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Id,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Nd,lights_pars_begin:Fd,lights_toon_fragment:Bd,lights_toon_pars_fragment:zd,lights_phong_fragment:kd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:Yd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:jd,map_fragment:Kd,map_pars_fragment:Jd,map_particle_fragment:Qd,map_particle_pars_fragment:ef,metalnessmap_fragment:tf,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:of,morphtarget_pars_vertex:af,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:xf,opaque_fragment:vf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:yf,dithering_fragment:bf,dithering_pars_fragment:wf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:If,skinning_pars_vertex:Df,skinning_vertex:Lf,skinnormal_vertex:Uf,specularmap_fragment:Nf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:Bf,transmission_fragment:zf,transmission_pars_fragment:kf,uv_pars_fragment:Gf,uv_pars_vertex:Vf,uv_vertex:Hf,worldpos_vertex:Wf,background_vert:Xf,background_frag:Yf,backgroundCube_vert:qf,backgroundCube_frag:Zf,cube_vert:$f,cube_frag:jf,depth_vert:Kf,depth_frag:Jf,distance_vert:Qf,distance_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:op,meshlambert_vert:ap,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:hp,meshnormal_vert:up,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:_p,meshtoon_frag:xp,points_vert:vp,points_frag:Mp,shadow_vert:Sp,shadow_frag:yp,sprite_vert:bp,sprite_frag:wp},be={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},dn={basic:{uniforms:Bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Bt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Bt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Bt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Bt([be.points,be.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Bt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Bt([be.common,be.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Bt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Bt([be.sprite,be.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Bt([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Bt([be.lights,be.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};dn.physical={uniforms:Bt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Os={r:0,b:0,g:0},Jn=new xn,Ep=new gt;function Tp(n,e,t,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(p){let x=p.isScene===!0?p.background:null;return x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x}function v(p){let x=!1;const w=g(p);w===null?m(a,l):w&&w.isColor&&(m(w,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(p,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Js)?(h===void 0&&(h=new T(new he(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Di(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(x.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(Jn)),h.material.toneMapped=ot.getTransfer(w.colorSpace)!==ht,(u!==w||f!==w.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new T(new Ni(2,2),new cn({name:"BackgroundMaterial",uniforms:Di(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,x){p.getRGB(Os,tc(n)),i.buffers.color.setClear(Os.r,Os.g,Os.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:v,addToRenderList:_,dispose:y}}function Ap(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,R,U,N,k){let H=!1;const z=u(N,U,R);r!==z&&(r=z,c(r.object)),H=d(b,N,U,k),H&&g(b,N,U,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(b,R,U,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,R,U){const N=U.wireframe===!0;let k=i[b.id];k===void 0&&(k={},i[b.id]=k);let H=k[R.id];H===void 0&&(H={},k[R.id]=H);let z=H[N];return z===void 0&&(z=f(l()),H[N]=z),z}function f(b){const R=[],U=[],N=[];for(let k=0;k<t;k++)R[k]=0,U[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:N,object:b,attributes:{},index:null}}function d(b,R,U,N){const k=r.attributes,H=R.attributes;let z=0;const W=U.getAttributes();for(const J in W)if(W[J].location>=0){const ie=k[J];let ce=H[J];if(ce===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(b,R,U,N){const k={},H=R.attributes;let z=0;const W=U.getAttributes();for(const J in W)if(W[J].location>=0){let ie=H[J];ie===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),k[J]=ce,z++}r.attributes=k,r.attributesNum=z,r.index=N}function v(){const b=r.newAttributes;for(let R=0,U=b.length;R<U;R++)b[R]=0}function _(b){m(b,0)}function m(b,R){const U=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;U[b]=1,N[b]===0&&(n.enableVertexAttribArray(b),N[b]=1),k[b]!==R&&(n.vertexAttribDivisor(b,R),k[b]=R)}function y(){const b=r.newAttributes,R=r.enabledAttributes;for(let U=0,N=R.length;U<N;U++)R[U]!==b[U]&&(n.disableVertexAttribArray(U),R[U]=0)}function p(b,R,U,N,k,H,z){z===!0?n.vertexAttribIPointer(b,R,U,k,H):n.vertexAttribPointer(b,R,U,N,k,H)}function x(b,R,U,N){v();const k=N.attributes,H=U.getAttributes(),z=R.defaultAttributeValues;for(const W in H){const J=H[W];if(J.location>=0){let fe=k[W];if(fe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const ie=fe.normalized,ce=fe.itemSize,Ne=e.get(fe);if(Ne===void 0)continue;const Ie=Ne.buffer,tt=Ne.type,st=Ne.bytesPerElement,j=tt===n.INT||tt===n.UNSIGNED_INT||fe.gpuType===Wo;if(fe.isInterleavedBufferAttribute){const Z=fe.data,_e=Z.stride,Ae=fe.offset;if(Z.isInstancedInterleavedBuffer){for(let pe=0;pe<J.locationSize;pe++)m(J.location+pe,Z.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<J.locationSize;pe++)_(J.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let pe=0;pe<J.locationSize;pe++)p(J.location+pe,ce/J.locationSize,tt,ie,_e*st,(Ae+ce/J.locationSize*pe)*st,j)}else{if(fe.isInstancedBufferAttribute){for(let Z=0;Z<J.locationSize;Z++)m(J.location+Z,fe.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Z=0;Z<J.locationSize;Z++)_(J.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Z=0;Z<J.locationSize;Z++)p(J.location+Z,ce/J.locationSize,tt,ie,ce*st,ce/J.locationSize*Z*st,j)}}else if(z!==void 0){const ie=z[W];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(J.location,ie);break;case 3:n.vertexAttrib3fv(J.location,ie);break;case 4:n.vertexAttrib4fv(J.location,ie);break;default:n.vertexAttrib1fv(J.location,ie)}}}}y()}function w(){I();for(const b in i){const R=i[b];for(const U in R){const N=R[U];for(const k in N)h(N[k].object),delete N[k];delete R[U]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;const R=i[b.id];for(const U in R){const N=R[U];for(const k in N)h(N[k].object),delete N[k];delete R[U]}delete i[b.id]}function C(b){for(const R in i){const U=i[R];if(U[b.id]===void 0)continue;const N=U[b.id];for(const k in N)h(N[k].object),delete N[k];delete U[b.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:_,disableUnusedAttributes:y}}function Rp(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ln&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==$t&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jt&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:x,maxSamples:w,samples:E}}function Pp(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new zn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,_=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!_)r?h(null):c();else{const y=r?0:i,p=y*4;let x=m.clippingState||null;l.value=x,x=h(g,f,p,d);for(let w=0;w!==p;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const m=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let p=0,x=d;p!==v;++p,x+=4)o.copy(u[p]).applyMatrix4(y,a),o.normal.toArray(_,x),_[x+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function Ip(n){let e=new WeakMap;function t(o,a){return a===to?o.mapping=ii:a===no&&(o.mapping=Pi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Vn=4,nl=[.125,.215,.35,.446,.526,.582],ti=20,Dp=256,Hi=new ua,il=new Je;let Fr=null,Or=0,Br=0,zr=!1;const Lp=new L;class sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Lp}=r;Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=zr,e.scissorTest=!1,yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Kt,format:ln,colorSpace:si,depthBuffer:!1},s=rl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Up(r)),this._blurMaterial=Fp(r,e,t),this._ggxMaterial=Np(r,e,t)}return s}_compileMaterial(e){const t=new T(new At,e);this._renderer.compile(t,Hi)}_sceneToCubeUV(e,t,i,s,r){const l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(il),u.toneMapping=pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new T(new he,new Lt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let m=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,m=!0):(_.color.copy(il),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(l.up.set(0,c[p],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[p],r.y,r.z)):x===1?(l.up.set(0,0,c[p]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[p],r.z)):(l.up.set(0,c[p],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[p]));const w=this._cubeSize;yi(s,x*w,p>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ii||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;yi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hi)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,v=this._sizeLods[i],_=3*v*(i>g-Vn?i-g+Vn:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,yi(r,_,m,3*v,2*v),s.setRenderTarget(r),s.render(a,Hi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,yi(e,_,m,3*v,2*v),s.setRenderTarget(e),s.render(a,Hi)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ti-1),v=r/g,_=isFinite(r)?1+Math.floor(h*v):ti;_>ti&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ti}`);const m=[];let y=0;for(let C=0;C<ti;++C){const I=C/v,M=Math.exp(-I*I/2);m.push(M),C===0?y+=M:C<_&&(y+=2*M)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=g,f.mipInt.value=p-i;const x=this._sizeLods[s],w=3*x*(s>p-Vn?s-p+Vn:0),E=4*(this._cubeSize-x);yi(t,w,E,3*x,2*x),l.setRenderTarget(t),l.render(u,Hi)}}function Up(n){const e=[],t=[],i=[];let s=n;const r=n-Vn+1+nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Vn?l=nl[o-n+Vn-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,_=2,m=1,y=new Float32Array(v*g*d),p=new Float32Array(_*g*d),x=new Float32Array(m*g*d);for(let E=0;E<d;E++){const C=E%3*2/3-1,I=E>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(M,v*g*E),p.set(f,_*g*E);const b=[E,E,E,E,E,E];x.set(b,m*g*E)}const w=new At;w.setAttribute("position",new gn(y,v)),w.setAttribute("uv",new gn(p,_)),w.setAttribute("faceIndex",new gn(x,m)),i.push(new T(w,null)),s>Vn&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function rl(n,e,t){const i=new mn(n,e,t);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yi(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Np(n,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ir(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fp(n,e,t){const i=new Float32Array(ti),s=new L(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ol(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function al(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ir(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Op(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===to||l===no,h=l===ii||l===Pi;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new sl(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new sl(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Bp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&is("WebGLRenderer: "+i+" extension not supported."),s}}}function zp(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let p=0,x=y.length;p<x;p+=3){const w=y[p+0],E=y[p+1],C=y[p+2];f.push(w,E,E,C,C,w)}}else if(g!==void 0){const y=g.array;v=g.version;for(let p=0,x=y.length/3-1;p<x;p+=3){const w=p+0,E=p+1,C=p+2;f.push(w,E,E,C,C,w)}}else return;const _=new(jl(f)?ec:Ql)(f,1);_.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,_)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kp(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let _=0;for(let m=0;m<g;m++)_+=d[m];t.update(_,i,1)}function u(f,d,g,v){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*v[y];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vp(n,e,t){const i=new WeakMap,s=new Mt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let p=0;d===!0&&(p=1),g===!0&&(p=2),v===!0&&(p=3);let x=a.attributes.position.count*p,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*w*4*u),C=new Kl(E,x,w,u);C.type=jt,C.needsUpdate=!0;const I=p*4;for(let b=0;b<u;b++){const R=_[b],U=m[b],N=y[b],k=x*w*4*b;for(let H=0;H<R.count;H++){const z=H*I;d===!0&&(s.fromBufferAttribute(R,H),E[k+z+0]=s.x,E[k+z+1]=s.y,E[k+z+2]=s.z,E[k+z+3]=0),g===!0&&(s.fromBufferAttribute(U,H),E[k+z+4]=s.x,E[k+z+5]=s.y,E[k+z+6]=s.z,E[k+z+7]=0),v===!0&&(s.fromBufferAttribute(N,H),E[k+z+8]=s.x,E[k+z+9]=s.y,E[k+z+10]=s.z,E[k+z+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ae(x,w)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Hp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Wp={[Ul]:"LINEAR_TONE_MAPPING",[Nl]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Ol]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function Xp(n,e,t,i,s){const r=new mn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new mn(e,t,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),a=new At;a.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new et([0,2,0,0,2,0],2));const l=new Ru({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new T(a,l),h=new ua(-1,1,1,-1,0,1);let u=null,f=null,d=!1,g,v=null,_=[],m=!1;this.setSize=function(y,p){r.setSize(y,p),o.setSize(y,p);for(let x=0;x<_.length;x++){const w=_[x];w.setSize&&w.setSize(y,p)}},this.setEffects=function(y){_=y,m=_.length>0&&_[0].isRenderPass===!0;const p=r.width,x=r.height;for(let w=0;w<_.length;w++){const E=_[w];E.setSize&&E.setSize(p,x)}},this.begin=function(y,p){if(d||y.toneMapping===pn&&_.length===0)return!1;if(v=p,p!==null){const x=p.width,w=p.height;(r.width!==x||r.height!==w)&&this.setSize(x,w)}return m===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=pn,!0},this.hasRenderPass=function(){return m},this.end=function(y,p){y.toneMapping=g,d=!0;let x=r,w=o;for(let E=0;E<_.length;E++){const C=_[E];if(C.enabled!==!1&&(C.render(y,w,x,p),C.needsSwap!==!1)){const I=x;x=w,w=I}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},ot.getTransfer(u)===ht&&(l.defines.SRGB_TRANSFER="");const E=Wp[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(v),y.render(c,h),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const vc=new Dt,Go=new ss(1,1),Mc=new Kl,Sc=new Ah,yc=new ic,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Fi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ll[s];if(r===void 0&&(r=new Float32Array(s),ll[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sr(n,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function jp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;dl.set(i),n.uniformMatrix2fv(this.addr,!1,dl),Tt(t,i)}}function Kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;ul.set(i),n.uniformMatrix3fv(this.addr,!1,ul),Tt(t,i)}}function Jp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;hl.set(i),n.uniformMatrix4fv(this.addr,!1,hl),Tt(t,i)}}function Qp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function a0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Go.compareFunction=t.isReversedDepthBuffer()?Ko:jo,r=Go):r=vc,t.setTexture2D(e||r,s)}function l0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sc,s)}function c0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yc,s)}function h0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mc,s)}function u0(n){switch(n){case 5126:return Yp;case 35664:return qp;case 35665:return Zp;case 35666:return $p;case 35674:return jp;case 35675:return Kp;case 35676:return Jp;case 5124:case 35670:return Qp;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(n,e){n.uniform1fv(this.addr,e)}function f0(n,e){const t=Fi(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=Fi(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=Fi(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=Fi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _0(n,e){const t=Fi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x0(n,e){const t=Fi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v0(n,e){n.uniform1iv(this.addr,e)}function M0(n,e){n.uniform2iv(this.addr,e)}function S0(n,e){n.uniform3iv(this.addr,e)}function y0(n,e){n.uniform4iv(this.addr,e)}function b0(n,e){n.uniform1uiv(this.addr,e)}function w0(n,e){n.uniform2uiv(this.addr,e)}function E0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){const i=this.cache,s=e.length,r=sr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Go:o=vc;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function R0(n,e,t){const i=this.cache,s=e.length,r=sr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sc,r[o])}function C0(n,e,t){const i=this.cache,s=e.length,r=sr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yc,r[o])}function P0(n,e,t){const i=this.cache,s=e.length,r=sr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mc,r[o])}function I0(n){switch(n){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return y0;case 5125:return b0;case 36294:return w0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I0(t.type)}}class U0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function fl(n,e){n.seq.push(e),n.map[e.id]=e}function N0(n,e,t){const i=n.name,s=i.length;for(kr.lastIndex=0;;){const r=kr.exec(i),o=kr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fl(t,c===void 0?new D0(a,n,e):new L0(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new U0(a),fl(t,u)),t=u}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);N0(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function pl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const F0=37297;let O0=0;function B0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ml=new Ze;function z0(n){ot._getMatrix(ml,ot.workingColorSpace,n);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case qs:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+B0(n.getShaderSource(e),a)}else return r}function k0(n,e){const t=z0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const G0={[Ul]:"Linear",[Nl]:"Reinhard",[Fl]:"Cineon",[Ol]:"ACESFilmic",[zl]:"AgX",[kl]:"Neutral",[Bl]:"Custom"};function V0(n,e){const t=G0[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new L;function H0(){ot.getLuminanceCoefficients(Bs);const n=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function X0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Y0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zi(n){return n!==""}function _l(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(n){return n.replace(q0,$0)}const Z0=new Map;function $0(n,e){let t=je[e];if(t===void 0){const i=Z0.get(e);if(i!==void 0)t=je[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(n){return n.replace(j0,K0)}function K0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ml(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J0={[ks]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function Q0(n){return J0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const em={[ii]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE_UV"};function tm(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":em[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const nm={[Pi]:"ENVMAP_MODE_REFRACTION"};function im(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sm={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[ah]:"ENVMAP_BLENDING_MIX",[lh]:"ENVMAP_BLENDING_ADD"};function rm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sm[n.combine]||"ENVMAP_BLENDING_NONE"}function om(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function am(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Q0(t),c=tm(t),h=im(t),u=rm(t),f=om(t),d=W0(t),g=X0(r),v=s.createProgram();let _,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`)):(_=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?je.tonemapping_pars_fragment:"",t.toneMapping!==pn?V0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Vo(o),o=_l(o,t),o=xl(o,t),a=Vo(a),a=_l(a,t),a=xl(a,t),o=vl(o),a=vl(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const p=y+_+o,x=y+m+a,w=pl(s,s.VERTEX_SHADER,p),E=pl(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(E)||"",H=U.trim(),z=N.trim(),W=k.trim();let J=!0,fe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,E);else{const ie=gl(s,w,"vertex"),ce=gl(s,E,"fragment");it("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+ie+`
`+ce)}else H!==""?Ye("WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(fe=!1);fe&&(R.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:_},fragmentShader:{log:W,prefix:m}})}s.deleteShader(w),s.deleteShader(E),I=new Ys(s,v),M=Y0(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,F0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hm(e),t.set(e,i)),i}}class hm{constructor(e){this.id=lm++,this.code=e,this.usedTimes=0}}function um(n,e,t,i,s,r,o){const a=new ta,l=new cm,c=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,b,R,U,N){const k=U.fog,H=N.geometry,z=M.isMeshStandardMaterial?U.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),J=W&&W.mapping===Js?W.image.height:null,fe=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=ie!==void 0?ie.length:0;let Ne=0;H.morphAttributes.position!==void 0&&(Ne=1),H.morphAttributes.normal!==void 0&&(Ne=2),H.morphAttributes.color!==void 0&&(Ne=3);let Ie,tt,st,j;if(fe){const lt=dn[fe];Ie=lt.vertexShader,tt=lt.fragmentShader}else Ie=M.vertexShader,tt=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ae=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,ze=!!M.map,rt=!!M.matcap,Ge=!!W,Q=!!M.aoMap,se=!!M.lightMap,te=!!M.bumpMap,Me=!!M.normalMap,D=!!M.displacementMap,Ee=!!M.emissiveMap,Se=!!M.metalnessMap,Be=!!M.roughnessMap,ue=M.anisotropy>0,P=M.clearcoat>0,S=M.dispersion>0,F=M.iridescence>0,q=M.sheen>0,K=M.transmission>0,$=ue&&!!M.anisotropyMap,Pe=P&&!!M.clearcoatMap,me=P&&!!M.clearcoatNormalMap,Le=P&&!!M.clearcoatRoughnessMap,We=F&&!!M.iridescenceMap,re=F&&!!M.iridescenceThicknessMap,ve=q&&!!M.sheenColorMap,Ue=q&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,xe=!!M.specularColorMap,Ke=!!M.specularIntensityMap,B=K&&!!M.transmissionMap,Te=K&&!!M.thicknessMap,de=!!M.gradientMap,Re=!!M.alphaMap,oe=M.alphaTest>0,ee=!!M.alphaHash,ge=!!M.extensions;let qe=pn;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qe=n.toneMapping);const pt={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:tt,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:si,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:rt,envMap:Ge,envMapMode:Ge&&W.mapping,envMapCubeUVHeight:J,aoMap:Q,lightMap:se,bumpMap:te,normalMap:Me,displacementMap:D,emissiveMap:Ee,normalMapObjectSpace:Me&&M.normalMapType===uh,normalMapTangentSpace:Me&&M.normalMapType===$l,metalnessMap:Se,roughnessMap:Be,anisotropy:ue,anisotropyMap:$,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:me,clearcoatRoughnessMap:Le,dispersion:S,iridescence:F,iridescenceMap:We,iridescenceThicknessMap:re,sheen:q,sheenColorMap:ve,sheenRoughnessMap:Ue,specularMap:Fe,specularColorMap:xe,specularIntensityMap:Ke,transmission:K,transmissionMap:B,thicknessMap:Te,gradientMap:de,opaque:M.transparent===!1&&M.blending===Ai&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:oe,alphaHash:ee,combine:M.combine,mapUv:ze&&v(M.map.channel),aoMapUv:Q&&v(M.aoMap.channel),lightMapUv:se&&v(M.lightMap.channel),bumpMapUv:te&&v(M.bumpMap.channel),normalMapUv:Me&&v(M.normalMap.channel),displacementMapUv:D&&v(M.displacementMap.channel),emissiveMapUv:Ee&&v(M.emissiveMap.channel),metalnessMapUv:Se&&v(M.metalnessMap.channel),roughnessMapUv:Be&&v(M.roughnessMap.channel),anisotropyMapUv:$&&v(M.anisotropyMap.channel),clearcoatMapUv:Pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(M.sheenRoughnessMap.channel),specularMapUv:Fe&&v(M.specularMap.channel),specularColorMapUv:xe&&v(M.specularColorMap.channel),specularIntensityMapUv:Ke&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:Te&&v(M.thicknessMap.channel),alphaMapUv:Re&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Me||ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(ze||Re),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===ht,decodeVideoTextureEmissive:Ee&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(b,M),p(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function p(M,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const b=g[M.type];let R;if(b){const U=dn[b];R=Hh.clone(U.uniforms)}else R=M.uniforms;return R}function w(M,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new am(n,b,M,r),h.push(R),u.set(b,R)),R}function E(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function C(M){l.remove(M)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function dm(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,v,_){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:_},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=_),e++,m}function a(u,f,d,g,v,_){const m=o(u,f,d,g,v,_);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,g,v,_){const m=o(u,f,d,g,v,_);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||fm),i.length>1&&i.sort(f||Sl),s.length>1&&s.sort(f||Sl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function pm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new yl,n.set(i,[o])):s>=r.length?(o=new yl,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Je};break;case"SpotLight":t={position:new L,direction:new L,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function gm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _m=0;function xm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vm(n){const e=new mm,t=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new gt,o=new gt;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,v=0,_=0,m=0,y=0,p=0,x=0,w=0,E=0,C=0;c.sort(xm);for(let M=0,b=c.length;M<b;M++){const R=c[M],U=R.color,N=R.intensity,k=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ii?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],N);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,J=t.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=R.shadow.matrix,y++}i.directional[d]=z,d++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(U).multiplyScalar(N),z.distance=k,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[v]=z;const W=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,W.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[v]=W.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=H,x++}v++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(U).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=z,_++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const W=R.shadow,J=t.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=R.shadow.matrix,p++}i.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[m]=z,m++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==p||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=_,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=p,i.pointShadowMap.length=p,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=p,i.spotLightMatrix.length=x+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=p,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=C,i.version=_m++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const _=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const p=c[m];if(p.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),u++}else if(p.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),d++}else if(p.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(p.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(p.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(_),f++}else if(p.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function bl(n){const e=new vm(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mm(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bl(n),e.set(s,[a])):r>=o.length?(a=new bl(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bm=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],wm=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],wl=new gt,Wi=new L,Gr=new L;function Em(n,e,t){let i=new na;const s=new ae,r=new ae,o=new Mt,a=new Cu,l=new Pu,c={},h=t.maxTextureSize,u={[Hn]:zt,[zt]:Hn,[Ft]:Ft},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Sm,fragmentShader:ym}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new T(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let m=this.type;this.render=function(E,C,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;E.type===Vc&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=ks);const M=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Pn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=m!==this.type;N&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(H=>H.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,H=E.length;k<H;k++){const z=E[k],W=z.shadow;if(W===void 0){Ye("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const J=W.getFrameExtents();if(s.multiply(J),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,W.mapSize.y=r.y)),W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Yi){if(z.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new mn(s.x,s.y,{format:Ii,type:Kt,minFilter:St,magFilter:St,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new ss(s.x,s.y,jt),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=Dn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=It,W.map.depthTexture.magFilter=It}else{z.isPointLight?(W.map=new sc(s.x),W.map.depthTexture=new Kh(s.x,_n)):(W.map=new mn(s.x,s.y),W.map.depthTexture=new ss(s.x,s.y,_n)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=Dn;const ie=n.state.buffers.depth.getReversed();this.type===ks?(W.map.depthTexture.compareFunction=ie?Ko:jo,W.map.depthTexture.minFilter=St,W.map.depthTexture.magFilter=St):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=It,W.map.depthTexture.magFilter=It)}W.camera.updateProjectionMatrix()}const fe=W.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<fe;ie++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(W.map),n.clear());const ce=W.getViewport(ie);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),U.viewport(o)}if(z.isPointLight){const ce=W.camera,Ne=W.matrix,Ie=z.distance||ce.far;Ie!==ce.far&&(ce.far=Ie,ce.updateProjectionMatrix()),Wi.setFromMatrixPosition(z.matrixWorld),ce.position.copy(Wi),Gr.copy(ce.position),Gr.add(bm[ie]),ce.up.copy(wm[ie]),ce.lookAt(Gr),ce.updateMatrixWorld(),Ne.makeTranslation(-Wi.x,-Wi.y,-Wi.z),wl.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),W._frustum.setFromProjectionMatrix(wl,ce.coordinateSystem,ce.reversedDepth)}else W.updateMatrices(z);i=W.getFrustum(),x(C,I,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===Yi&&y(W,I),W.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(M,b,R)};function y(E,C){const I=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mn(s.x,s.y,{format:Ii,type:Kt})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,I,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,I,d,v,null)}function p(E,C,I,M){let b=null;const R=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)b=R;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=b.uuid,N=C.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let H=k[N];H===void 0&&(H=b.clone(),k[N]=H,C.addEventListener("dispose",w)),b=H}if(b.visible=C.visible,b.wireframe=C.wireframe,M===Yi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=n.properties.get(b);U.light=I}return b}function x(E,C,I,M,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Yi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const N=e.update(E),k=E.material;if(Array.isArray(k)){const H=N.groups;for(let z=0,W=H.length;z<W;z++){const J=H[z],fe=k[J.materialIndex];if(fe&&fe.visible){const ie=p(E,fe,M,b);E.onBeforeShadow(n,E,C,I,N,ie,J),n.renderBufferDirect(I,null,N,ie,E,J),E.onAfterShadow(n,E,C,I,N,ie,J)}}}else if(k.visible){const H=p(E,k,M,b);E.onBeforeShadow(n,E,C,I,N,H,null),n.renderBufferDirect(I,null,N,H,E,null),E.onAfterShadow(n,E,C,I,N,H,null)}}const U=E.children;for(let N=0,k=U.length;N<k;N++)x(U[N],C,I,M,b)}function w(E){E.target.removeEventListener("dispose",w);for(const I in c){const M=c[I],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Tm={[Zr]:$r,[jr]:Qr,[Kr]:eo,[Ci]:Jr,[$r]:Zr,[Qr]:jr,[eo]:Kr,[Jr]:Ci};function Am(n,e){function t(){let B=!1;const Te=new Mt;let de=null;const Re=new Mt(0,0,0,0);return{setMask:function(oe){de!==oe&&!B&&(n.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){B=oe},setClear:function(oe,ee,ge,qe,pt){pt===!0&&(oe*=qe,ee*=qe,ge*=qe),Te.set(oe,ee,ge,qe),Re.equals(Te)===!1&&(n.clearColor(oe,ee,ge,qe),Re.copy(Te))},reset:function(){B=!1,de=null,Re.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,de=null,Re=null,oe=null;return{setReversed:function(ee){if(Te!==ee){const ge=e.get("EXT_clip_control");ee?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),Te=ee;const qe=oe;oe=null,this.setClear(qe)}},getReversed:function(){return Te},setTest:function(ee){ee?Z(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ee){de!==ee&&!B&&(n.depthMask(ee),de=ee)},setFunc:function(ee){if(Te&&(ee=Tm[ee]),Re!==ee){switch(ee){case Zr:n.depthFunc(n.NEVER);break;case $r:n.depthFunc(n.ALWAYS);break;case jr:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case Kr:n.depthFunc(n.EQUAL);break;case Jr:n.depthFunc(n.GEQUAL);break;case Qr:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ee}},setLocked:function(ee){B=ee},setClear:function(ee){oe!==ee&&(Te&&(ee=1-ee),n.clearDepth(ee),oe=ee)},reset:function(){B=!1,de=null,Re=null,oe=null,Te=!1}}}function s(){let B=!1,Te=null,de=null,Re=null,oe=null,ee=null,ge=null,qe=null,pt=null;return{setTest:function(lt){B||(lt?Z(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(lt){Te!==lt&&!B&&(n.stencilMask(lt),Te=lt)},setFunc:function(lt,hn,yn){(de!==lt||Re!==hn||oe!==yn)&&(n.stencilFunc(lt,hn,yn),de=lt,Re=hn,oe=yn)},setOp:function(lt,hn,yn){(ee!==lt||ge!==hn||qe!==yn)&&(n.stencilOp(lt,hn,yn),ee=lt,ge=hn,qe=yn)},setLocked:function(lt){B=lt},setClear:function(lt){pt!==lt&&(n.clearStencil(lt),pt=lt)},reset:function(){B=!1,Te=null,de=null,Re=null,oe=null,ee=null,ge=null,qe=null,pt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,_=null,m=null,y=null,p=null,x=null,w=null,E=null,C=new Je(0,0,0),I=0,M=!1,b=null,R=null,U=null,N=null,k=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=W>=2);let fe=null,ie={};const ce=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Ie=new Mt().fromArray(ce),tt=new Mt().fromArray(Ne);function st(B,Te,de,Re){const oe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(B,ee),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<de;ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(Te+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ee}const j={};j[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Ci),te(!1),Me(Sa),Z(n.CULL_FACE),Q(Pn);function Z(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function _e(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Ae(B,Te){return u[B]!==Te?(n.bindFramebuffer(B,Te),u[B]=Te,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function pe(B,Te){let de=d,Re=!1;if(B){de=f.get(Te),de===void 0&&(de=[],f.set(Te,de));const oe=B.textures;if(de.length!==oe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ge=oe.length;ee<ge;ee++)de[ee]=n.COLOR_ATTACHMENT0+ee;de.length=oe.length,Re=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Re=!0);Re&&n.drawBuffers(de)}function ze(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const rt={[ei]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};rt[Yc]=n.MIN,rt[qc]=n.MAX;const Ge={[Zc]:n.ZERO,[$c]:n.ONE,[jc]:n.SRC_COLOR,[Yr]:n.SRC_ALPHA,[nh]:n.SRC_ALPHA_SATURATE,[eh]:n.DST_COLOR,[Jc]:n.DST_ALPHA,[Kc]:n.ONE_MINUS_SRC_COLOR,[qr]:n.ONE_MINUS_SRC_ALPHA,[th]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[ih]:n.CONSTANT_COLOR,[sh]:n.ONE_MINUS_CONSTANT_COLOR,[rh]:n.CONSTANT_ALPHA,[oh]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(B,Te,de,Re,oe,ee,ge,qe,pt,lt){if(B===Pn){v===!0&&(_e(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),B!==Hc){if(B!==_||lt!==M){if((m!==ei||x!==ei)&&(n.blendEquation(n.FUNC_ADD),m=ei,x=ei),lt)switch(B){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qi:n.blendFunc(n.ONE,n.ONE);break;case ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",B);break}else switch(B){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ya:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ba:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",B);break}y=null,p=null,w=null,E=null,C.set(0,0,0),I=0,_=B,M=lt}return}oe=oe||Te,ee=ee||de,ge=ge||Re,(Te!==m||oe!==x)&&(n.blendEquationSeparate(rt[Te],rt[oe]),m=Te,x=oe),(de!==y||Re!==p||ee!==w||ge!==E)&&(n.blendFuncSeparate(Ge[de],Ge[Re],Ge[ee],Ge[ge]),y=de,p=Re,w=ee,E=ge),(qe.equals(C)===!1||pt!==I)&&(n.blendColor(qe.r,qe.g,qe.b,pt),C.copy(qe),I=pt),_=B,M=!1}function se(B,Te){B.side===Ft?_e(n.CULL_FACE):Z(n.CULL_FACE);let de=B.side===zt;Te&&(de=!de),te(de),B.blending===Ai&&B.transparent===!1?Q(Pn):Q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Re=B.stencilWrite;a.setTest(Re),Re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function Me(B){B!==kc?(Z(n.CULL_FACE),B!==R&&(B===Sa?n.cullFace(n.BACK):B===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),R=B}function D(B){B!==U&&(z&&n.lineWidth(B),U=B)}function Ee(B,Te,de){B?(Z(n.POLYGON_OFFSET_FILL),(N!==Te||k!==de)&&(n.polygonOffset(Te,de),N=Te,k=de)):_e(n.POLYGON_OFFSET_FILL)}function Se(B){B?Z(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Be(B){B===void 0&&(B=n.TEXTURE0+H-1),fe!==B&&(n.activeTexture(B),fe=B)}function ue(B,Te,de){de===void 0&&(fe===null?de=n.TEXTURE0+H-1:de=fe);let Re=ie[de];Re===void 0&&(Re={type:void 0,texture:void 0},ie[de]=Re),(Re.type!==B||Re.texture!==Te)&&(fe!==de&&(n.activeTexture(de),fe=de),n.bindTexture(B,Te||j[B]),Re.type=B,Re.texture=Te)}function P(){const B=ie[fe];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function q(){try{n.texSubImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function K(){try{n.texSubImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function me(){try{n.texStorage2D(...arguments)}catch(B){it("WebGLState:",B)}}function Le(){try{n.texStorage3D(...arguments)}catch(B){it("WebGLState:",B)}}function We(){try{n.texImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function re(){try{n.texImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function ve(B){Ie.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ie.copy(B))}function Ue(B){tt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Fe(B,Te){let de=c.get(Te);de===void 0&&(de=new WeakMap,c.set(Te,de));let Re=de.get(B);Re===void 0&&(Re=n.getUniformBlockIndex(Te,B.name),de.set(B,Re))}function xe(B,Te){const Re=c.get(Te).get(B);l.get(Te)!==Re&&(n.uniformBlockBinding(Te,Re,B.__bindingPointIndex),l.set(Te,Re))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,ie={},u={},f=new WeakMap,d=[],g=null,v=!1,_=null,m=null,y=null,p=null,x=null,w=null,E=null,C=new Je(0,0,0),I=0,M=!1,b=null,R=null,U=null,N=null,k=null,Ie.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:_e,bindFramebuffer:Ae,drawBuffers:pe,useProgram:ze,setBlending:Q,setMaterial:se,setFlipSided:te,setCullFace:Me,setLineWidth:D,setPolygonOffset:Ee,setScissorTest:Se,activeTexture:Be,bindTexture:ue,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:We,texImage3D:re,updateUBOMapping:Fe,uniformBlockBinding:xe,texStorage2D:me,texStorage3D:Le,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:$,compressedTexSubImage3D:Pe,scissor:ve,viewport:Ue,reset:Ke}}function Rm(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return d?new OffscreenCanvas(P,S):ns("canvas")}function v(P,S,F){let q=1;const K=ue(P);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(q*K.width),Pe=Math.floor(q*K.height);u===void 0&&(u=g($,Pe));const me=S?g($,Pe):u;return me.width=$,me.height=Pe,me.getContext("2d").drawImage(P,0,0,$,Pe),Ye("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+Pe+")."),me}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function p(P,S,F,q,K=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=S;if(S===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),S===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),S===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),S===n.RGBA){const Pe=K?qs:ot.getTransfer(q);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=Pe===ht?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(P,S){let F;return P?S===null||S===_n||S===ts?F=n.DEPTH24_STENCIL8:S===jt?F=n.DEPTH32F_STENCIL8:S===es&&(F=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_n||S===ts?F=n.DEPTH_COMPONENT24:S===jt?F=n.DEPTH_COMPONENT32F:S===es&&(F=n.DEPTH_COMPONENT16),F}function w(P,S){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==It&&P.minFilter!==St?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){const S=P.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&h.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),b(S)}function I(P){const S=i.get(P);if(S.__webglInit===void 0)return;const F=P.source,q=f.get(F);if(q){const K=q[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(P),Object.keys(q).length===0&&f.delete(F)}i.remove(P)}function M(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const F=P.source,q=f.get(F);delete q[S.__cacheKey],o.memory.textures--}function b(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let K=0;K<S.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[q][K]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=P.textures;for(let q=0,K=F.length;q<K;q++){const $=i.get(F[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(P)}let R=0;function U(){R=0}function N(){const P=R;return P>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function H(P,S){const F=i.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&F.__version!==P.version){const q=P.image;if(q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,P,S);return}}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function z(P,S){const F=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){j(F,P,S);return}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function W(P,S){const F=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){j(F,P,S);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function J(P,S){const F=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&F.__version!==P.version){Z(F,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const fe={[io]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},ie={[It]:n.NEAREST,[ch]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[lr]:n.LINEAR_MIPMAP_NEAREST,[Gn]:n.LINEAR_MIPMAP_LINEAR},ce={[dh]:n.NEVER,[_h]:n.ALWAYS,[fh]:n.LESS,[jo]:n.LEQUAL,[ph]:n.EQUAL,[Ko]:n.GEQUAL,[mh]:n.GREATER,[gh]:n.NOTEQUAL};function Ne(P,S){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===St||S.magFilter===lr||S.magFilter===ms||S.magFilter===Gn||S.minFilter===St||S.minFilter===lr||S.minFilter===ms||S.minFilter===Gn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,fe[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,fe[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,fe[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ie[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===It||S.minFilter!==ms&&S.minFilter!==Gn||S.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(P,S){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));const q=S.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const $=k(S);if($!==P.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[$].usedTimes++;const Pe=K[P.__cacheKey];Pe!==void 0&&(K[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(S)),P.__cacheKey=$,P.__webglTexture=K[$].texture}return F}function tt(P,S,F){return Math.floor(Math.floor(P/F)/S)}function st(P,S,F,q){const $=P.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,F,q,S.data);else{$.sort((re,ve)=>re.start-ve.start);let Pe=0;for(let re=1;re<$.length;re++){const ve=$[Pe],Ue=$[re],Fe=ve.start+ve.count,xe=tt(Ue.start,S.width,4),Ke=tt(ve.start,S.width,4);Ue.start<=Fe+1&&xe===Ke&&tt(Ue.start+Ue.count-1,S.width,4)===xe?ve.count=Math.max(ve.count,Ue.start+Ue.count-ve.start):(++Pe,$[Pe]=Ue)}$.length=Pe+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),We=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let re=0,ve=$.length;re<ve;re++){const Ue=$[re],Fe=Math.floor(Ue.start/4),xe=Math.ceil(Ue.count/4),Ke=Fe%S.width,B=Math.floor(Fe/S.width),Te=xe,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ke,B,Te,de,F,q,S.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,We)}}function j(P,S,F){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const K=Ie(P,S),$=S.source;t.bindTexture(q,P.__webglTexture,n.TEXTURE0+F);const Pe=i.get($);if($.version!==Pe.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const me=ot.getPrimaries(ot.workingColorSpace),Le=S.colorSpace===kn?null:ot.getPrimaries(S.colorSpace),We=S.colorSpace===kn||me===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let re=v(S.image,!1,s.maxTextureSize);re=Be(S,re);const ve=r.convert(S.format,S.colorSpace),Ue=r.convert(S.type);let Fe=p(S.internalFormat,ve,Ue,S.colorSpace,S.isVideoTexture);Ne(q,S);let xe;const Ke=S.mipmaps,B=S.isVideoTexture!==!0,Te=Pe.__version===void 0||K===!0,de=$.dataReady,Re=w(S,re);if(S.isDepthTexture)Fe=x(S.format===ni,S.type),Te&&(B?t.texStorage2D(n.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Fe,re.width,re.height,0,ve,Ue,null));else if(S.isDataTexture)if(Ke.length>0){B&&Te&&t.texStorage2D(n.TEXTURE_2D,Re,Fe,Ke[0].width,Ke[0].height);for(let oe=0,ee=Ke.length;oe<ee;oe++)xe=Ke[oe],B?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,ve,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Fe,xe.width,xe.height,0,ve,Ue,xe.data);S.generateMipmaps=!1}else B?(Te&&t.texStorage2D(n.TEXTURE_2D,Re,Fe,re.width,re.height),de&&st(S,re,ve,Ue)):t.texImage2D(n.TEXTURE_2D,0,Fe,re.width,re.height,0,ve,Ue,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){B&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Fe,Ke[0].width,Ke[0].height,re.depth);for(let oe=0,ee=Ke.length;oe<ee;oe++)if(xe=Ke[oe],S.format!==ln)if(ve!==null)if(B){if(de)if(S.layerUpdates.size>0){const ge=tl(xe.width,xe.height,S.format,S.type);for(const qe of S.layerUpdates){const pt=xe.data.subarray(qe*ge/xe.data.BYTES_PER_ELEMENT,(qe+1)*ge/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,qe,xe.width,xe.height,1,ve,pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,re.depth,ve,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Fe,xe.width,xe.height,re.depth,0,xe.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,re.depth,ve,Ue,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Fe,xe.width,xe.height,re.depth,0,ve,Ue,xe.data)}else{B&&Te&&t.texStorage2D(n.TEXTURE_2D,Re,Fe,Ke[0].width,Ke[0].height);for(let oe=0,ee=Ke.length;oe<ee;oe++)xe=Ke[oe],S.format!==ln?ve!==null?B?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Fe,xe.width,xe.height,0,xe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,ve,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Fe,xe.width,xe.height,0,ve,Ue,xe.data)}else if(S.isDataArrayTexture)if(B){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Fe,re.width,re.height,re.depth),de)if(S.layerUpdates.size>0){const oe=tl(re.width,re.height,S.format,S.type);for(const ee of S.layerUpdates){const ge=re.data.subarray(ee*oe/re.data.BYTES_PER_ELEMENT,(ee+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ve,Ue,ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Ue,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,ve,Ue,re.data);else if(S.isData3DTexture)B?(Te&&t.texStorage3D(n.TEXTURE_3D,Re,Fe,re.width,re.height,re.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Ue,re.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,ve,Ue,re.data);else if(S.isFramebufferTexture){if(Te)if(B)t.texStorage2D(n.TEXTURE_2D,Re,Fe,re.width,re.height);else{let oe=re.width,ee=re.height;for(let ge=0;ge<Re;ge++)t.texImage2D(n.TEXTURE_2D,ge,Fe,oe,ee,0,ve,Ue,null),oe>>=1,ee>>=1}}else if(Ke.length>0){if(B&&Te){const oe=ue(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Re,Fe,oe.width,oe.height)}for(let oe=0,ee=Ke.length;oe<ee;oe++)xe=Ke[oe],B?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ve,Ue,xe):t.texImage2D(n.TEXTURE_2D,oe,Fe,ve,Ue,xe);S.generateMipmaps=!1}else if(B){if(Te){const oe=ue(re);t.texStorage2D(n.TEXTURE_2D,Re,Fe,oe.width,oe.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ue,re)}else t.texImage2D(n.TEXTURE_2D,0,Fe,ve,Ue,re);_(S)&&m(q),Pe.__version=$.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Z(P,S,F){if(S.image.length!==6)return;const q=Ie(P,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+F);const $=i.get(K);if(K.version!==$.__version||q===!0){t.activeTexture(n.TEXTURE0+F);const Pe=ot.getPrimaries(ot.workingColorSpace),me=S.colorSpace===kn?null:ot.getPrimaries(S.colorSpace),Le=S.colorSpace===kn||Pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!We&&!re?ve[ee]=v(S.image[ee],!0,s.maxCubemapSize):ve[ee]=re?S.image[ee].image:S.image[ee],ve[ee]=Be(S,ve[ee]);const Ue=ve[0],Fe=r.convert(S.format,S.colorSpace),xe=r.convert(S.type),Ke=p(S.internalFormat,Fe,xe,S.colorSpace),B=S.isVideoTexture!==!0,Te=$.__version===void 0||q===!0,de=K.dataReady;let Re=w(S,Ue);Ne(n.TEXTURE_CUBE_MAP,S);let oe;if(We){B&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ke,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){oe=ve[ee].mipmaps;for(let ge=0;ge<oe.length;ge++){const qe=oe[ge];S.format!==ln?Fe!==null?B?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,qe.width,qe.height,Fe,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ke,qe.width,qe.height,0,qe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,qe.width,qe.height,Fe,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ke,qe.width,qe.height,0,Fe,xe,qe.data)}}}else{if(oe=S.mipmaps,B&&Te){oe.length>0&&Re++;const ee=ue(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Fe,xe,ve[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,ve[ee].width,ve[ee].height,0,Fe,xe,ve[ee].data);for(let ge=0;ge<oe.length;ge++){const pt=oe[ge].image[ee].image;B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,pt.width,pt.height,Fe,xe,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ke,pt.width,pt.height,0,Fe,xe,pt.data)}}else{B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,xe,ve[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Fe,xe,ve[ee]);for(let ge=0;ge<oe.length;ge++){const qe=oe[ge];B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Fe,xe,qe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ke,Fe,xe,qe.image[ee])}}}_(S)&&m(n.TEXTURE_CUBE_MAP),$.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _e(P,S,F,q,K,$){const Pe=r.convert(F.format,F.colorSpace),me=r.convert(F.type),Le=p(F.internalFormat,Pe,me,F.colorSpace),We=i.get(S),re=i.get(F);if(re.__renderTarget=S,!We.__hasExternalTextures){const ve=Math.max(1,S.width>>$),Ue=Math.max(1,S.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,$,Le,ve,Ue,S.depth,0,Pe,me,null):t.texImage2D(K,$,Le,ve,Ue,0,Pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ee(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,re.__webglTexture,0,D(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,re.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const q=S.depthTexture,K=q&&q.isDepthTexture?q.type:null,$=x(S.stencilBuffer,K),Pe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(S),$,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(S),$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,P)}else{const q=S.textures;for(let K=0;K<q.length;K++){const $=q[K],Pe=r.convert($.format,$.colorSpace),me=r.convert($.type),Le=p($.internalFormat,Pe,me,$.colorSpace);Ee(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(S),Le,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(S),Le,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Le,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(P,S,F){const q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,S.depthTexture);const We=r.convert(S.depthTexture.format),re=r.convert(S.depthTexture.type);let ve;S.depthTexture.format===Dn?ve=n.DEPTH_COMPONENT24:S.depthTexture.format===ni&&(ve=n.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,ve,S.width,S.height,0,We,re,null)}}else H(S.depthTexture,0);const $=K.__webglTexture,Pe=D(S),me=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Le=S.depthTexture.format===ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Dn)Ee(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,me,$,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,Le,me,$,0);else if(S.depthTexture.format===ni)Ee(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,me,$,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,Le,me,$,0);else throw new Error("Unknown depthTexture format")}function ze(P){const S=i.get(P),F=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)pe(S.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?pe(S.__webglFramebuffer[0],P,0):pe(S.__webglFramebuffer,P,0)}else if(F){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),Ae(S.__webglDepthbuffer[q],P,!1);else{const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,$)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ae(S.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(P,S,F){const q=i.get(P);S!==void 0&&_e(q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ze(P)}function Ge(P){const S=P.texture,F=i.get(P),q=i.get(S);P.addEventListener("dispose",C);const K=P.textures,$=P.isWebGLCubeRenderTarget===!0,Pe=K.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[me]=[];for(let Le=0;Le<S.mipmaps.length;Le++)F.__webglFramebuffer[me][Le]=n.createFramebuffer()}else F.__webglFramebuffer[me]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)F.__webglFramebuffer[me]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let me=0,Le=K.length;me<Le;me++){const We=i.get(K[me]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ee(P)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let me=0;me<K.length;me++){const Le=K[me];F.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[me]);const We=r.convert(Le.format,Le.colorSpace),re=r.convert(Le.type),ve=p(Le.internalFormat,We,re,Le.colorSpace,P.isXRRenderTarget===!0),Ue=D(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,F.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)_e(F.__webglFramebuffer[me][Le],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le);else _e(F.__webglFramebuffer[me],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,Le=K.length;me<Le;me++){const We=K[me],re=i.get(We);let ve=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),Ne(ve,We),_e(F.__webglFramebuffer,P,We,n.COLOR_ATTACHMENT0+me,ve,0),_(We)&&m(ve)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,q.__webglTexture),Ne(me,S),S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)_e(F.__webglFramebuffer[Le],P,S,n.COLOR_ATTACHMENT0,me,Le);else _e(F.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,me,0);_(S)&&m(me),t.unbindTexture()}P.depthBuffer&&ze(P)}function Q(P){const S=P.textures;for(let F=0,q=S.length;F<q;F++){const K=S[F];if(_(K)){const $=y(P),Pe=i.get(K).__webglTexture;t.bindTexture($,Pe),m($),t.unbindTexture()}}}const se=[],te=[];function Me(P){if(P.samples>0){if(Ee(P)===!1){const S=P.textures,F=P.width,q=P.height;let K=n.COLOR_BUFFER_BIT;const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(P),me=S.length>1;if(me)for(let We=0;We<S.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let We=0;We<S.length;We++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const re=i.get(S[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,K,n.NEAREST),l===!0&&(se.length=0,te.length=0,se.push(n.COLOR_ATTACHMENT0+We),P.depthBuffer&&P.resolveDepthBuffer===!1&&(se.push($),te.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let We=0;We<S.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const re=i.get(S[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function D(P){return Math.min(s.maxSamples,P.samples)}function Ee(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Be(P,S){const F=P.colorSpace,q=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==si&&F!==kn&&(ot.getTransfer(F)===ht?(q!==ln||K!==$t)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",F)),S}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=rt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cm(n,e){function t(i,s=kn){let r;const o=ot.getTransfer(s);if(i===$t)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vl)return n.BYTE;if(i===Hl)return n.SHORT;if(i===es)return n.UNSIGNED_SHORT;if(i===Wo)return n.INT;if(i===_n)return n.UNSIGNED_INT;if(i===jt)return n.FLOAT;if(i===Kt)return n.HALF_FLOAT;if(i===Yl)return n.ALPHA;if(i===ql)return n.RGB;if(i===ln)return n.RGBA;if(i===Dn)return n.DEPTH_COMPONENT;if(i===ni)return n.DEPTH_STENCIL;if(i===Zl)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===Ii)return n.RG;if(i===Zo)return n.RG_INTEGER;if(i===$o)return n.RGBA_INTEGER;if(i===Gs||i===Vs||i===Hs||i===Ws)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ro||i===oo||i===ao||i===lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===co||i===ho)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fo)return r.COMPRESSED_R11_EAC;if(i===po)return r.COMPRESSED_SIGNED_R11_EAC;if(i===mo)return r.COMPRESSED_RG11_EAC;if(i===go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_o||i===xo||i===vo||i===Mo||i===So||i===yo||i===bo||i===wo||i===Eo||i===To||i===Ao||i===Ro||i===Co||i===Po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_o)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===So)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===To)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ro)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Po)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===Do||i===Lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uo||i===No||i===Fo||i===Oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new oc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:Pm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new T(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lm extends oi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",_=new Dm,m={},y=t.getContextAttributes();let p=null,x=null;const w=[],E=[],C=new ae;let I=null;const M=new Zt;M.viewport=new Mt;const b=new Zt;b.viewport=new Mt;const R=[M,b],U=new Gu;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=w[j];return Z===void 0&&(Z=new Pr,w[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=w[j];return Z===void 0&&(Z=new Pr,w[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=w[j];return Z===void 0&&(Z=new Pr,w[j]=Z),Z.getHandSpace()};function H(j){const Z=E.indexOf(j.inputSource);if(Z===-1)return;const _e=w[Z];_e!==void 0&&(_e.update(j.inputSource,j.frame,c||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let j=0;j<w.length;j++){const Z=E[j];Z!==null&&(E[j]=null,w[j].disconnect(Z))}N=null,k=null,_.reset();for(const j in m)delete m[j];e.setRenderTarget(p),d=null,f=null,u=null,s=null,x=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ae=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?ni:Dn,Ae=y.stencil?ts:_n);const ze={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new mn(f.textureWidth,f.textureHeight,{format:ln,type:$t,depthTexture:new ss(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new mn(d.framebufferWidth,d.framebufferHeight,{format:ln,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(j){for(let Z=0;Z<j.removed.length;Z++){const _e=j.removed[Z],Ae=E.indexOf(_e);Ae>=0&&(E[Ae]=null,w[Ae].disconnect(_e))}for(let Z=0;Z<j.added.length;Z++){const _e=j.added[Z];let Ae=E.indexOf(_e);if(Ae===-1){for(let ze=0;ze<w.length;ze++)if(ze>=E.length){E.push(_e),Ae=ze;break}else if(E[ze]===null){E[ze]=_e,Ae=ze;break}if(Ae===-1)break}const pe=w[Ae];pe&&pe.connect(_e)}}const J=new L,fe=new L;function ie(j,Z,_e){J.setFromMatrixPosition(Z.matrixWorld),fe.setFromMatrixPosition(_e.matrixWorld);const Ae=J.distanceTo(fe),pe=Z.projectionMatrix.elements,ze=_e.projectionMatrix.elements,rt=pe[14]/(pe[10]-1),Ge=pe[14]/(pe[10]+1),Q=(pe[9]+1)/pe[5],se=(pe[9]-1)/pe[5],te=(pe[8]-1)/pe[0],Me=(ze[8]+1)/ze[0],D=rt*te,Ee=rt*Me,Se=Ae/(-te+Me),Be=Se*-te;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(Se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pe[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ue=rt+Se,P=Ge+Se,S=D-Be,F=Ee+(Ae-Be),q=Q*Ge/P*ue,K=se*Ge/P*ue;j.projectionMatrix.makePerspective(S,F,q,K,ue,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Z=j.near,_e=j.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),U.near=b.near=M.near=Z,U.far=b.far=M.far=_e,(N!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,k=U.far),U.layers.mask=j.layers.mask|6,M.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const Ae=j.parent,pe=U.cameras;ce(U,Ae);for(let ze=0;ze<pe.length;ze++)ce(pe[ze],Ae);pe.length===2?ie(U,M,b):U.projectionMatrix.copy(M.projectionMatrix),Ne(j,U,Ae)};function Ne(j,Z,_e){_e===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$s*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function(j){return m[j]};let Ie=null;function tt(j,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ae=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Ae=!0);for(let Ge=0;Ge<_e.length;Ge++){const Q=_e[Ge];let se=null;if(d!==null)se=d.getViewport(Q);else{const Me=u.getViewSubImage(f,Q);se=Me.viewport,Ge===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let te=R[Ge];te===void 0&&(te=new Zt,te.layers.enable(Ge),te.viewport=new Mt,R[Ge]=te),te.matrix.fromArray(Q.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Q.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(se.x,se.y,se.width,se.height),Ge===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ae===!0&&U.cameras.push(te)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Ge=u.getDepthInformation(_e[0]);Ge&&Ge.isValid&&Ge.texture&&_.init(Ge,s.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ge=0;Ge<_e.length;Ge++){const Q=_e[Ge].camera;if(Q){let se=m[Q];se||(se=new oc,m[Q]=se);const te=u.getCameraImage(Q);se.sourceTexture=te}}}}for(let _e=0;_e<w.length;_e++){const Ae=E[_e],pe=w[_e];Ae!==null&&pe!==void 0&&pe.update(Ae,Z,c||o)}Ie&&Ie(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const st=new xc;st.setAnimationLoop(tt),this.setAnimationLoop=function(j){Ie=j},this.dispose=function(){}}}const Qn=new xn,Um=new gt;function Nm(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,tc(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,y,p,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),h(_,m)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&d(_,m,x)):m.isMeshMatcapMaterial?(r(_,m),g(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),v(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,y,p):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===zt&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===zt&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const y=e.get(m),p=y.envMap,x=y.envMapRotation;p&&(_.envMap.value=p,Qn.copy(x),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),_.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Qn)),_.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,y,p){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=p*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function d(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const y=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fm(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,p){const x=p.program;i.uniformBlockBinding(y,x)}function c(y,p){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",_));const w=p.program;i.updateUBOMapping(y,w);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const p=u();y.__bindingPointIndex=p;const x=n.createBuffer(),w=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,p,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const p=s[y.id],x=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,p);for(let E=0,C=x.length;E<C;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,b=I.length;M<b;M++){const R=I[M];if(d(R,E,M,w)===!0){const U=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let H=0;H<N.length;H++){const z=N[H],W=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,U+k,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,p,x,w){const E=y.value,C=p+"_"+x;if(w[C]===void 0)return typeof E=="number"||typeof E=="boolean"?w[C]=E:w[C]=E.clone(),!0;{const I=w[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return w[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(y){const p=y.uniforms;let x=0;const w=16;for(let C=0,I=p.length;C<I;C++){const M=Array.isArray(p[C])?p[C]:[p[C]];for(let b=0,R=M.length;b<R;b++){const U=M[b],N=Array.isArray(U.value)?U.value:[U.value];for(let k=0,H=N.length;k<H;k++){const z=N[k],W=v(z),J=x%w,fe=J%W.boundary,ie=J+fe;x+=fe,ie!==0&&w-ie<W.storage&&(x+=w-ie),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=W.storage}}}const E=x%w;return E>0&&(x+=w-E),y.__size=x,y.__cache={},this}function v(y){const p={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(p.boundary=4,p.storage=4):y.isVector2?(p.boundary=8,p.storage=8):y.isVector3||y.isColor?(p.boundary=16,p.storage=12):y.isVector4?(p.boundary=16,p.storage=16):y.isMatrix3?(p.boundary=48,p.storage=48):y.isMatrix4?(p.boundary=64,p.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",y),p}function _(y){const p=y.target;p.removeEventListener("dispose",_);const x=o.indexOf(p.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[p.id]),delete s[p.id],delete r[p.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const Om=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function Bm(){return un===null&&(un=new rc(Om,16,16,Ii,Kt),un.name="DFG_LUT",un.minFilter=St,un.magFilter=St,un.wrapS=an,un.wrapT=an,un.generateMipmaps=!1,un.needsUpdate=!0),un}class $_{constructor(e={}){const{canvas:t=xh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=$t}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=d,_=new Set([$o,Zo,qo]),m=new Set([$t,_n,es,ts,Xo,Yo]),y=new Uint32Array(4),p=new Int32Array(4);let x=null,w=null;const E=[],C=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let b=!1;this._outputColorSpace=Pt;let R=0,U=0,N=null,k=-1,H=null;const z=new Mt,W=new Mt;let J=null;const fe=new Je(0);let ie=0,ce=t.width,Ne=t.height,Ie=1,tt=null,st=null;const j=new Mt(0,0,ce,Ne),Z=new Mt(0,0,ce,Ne);let _e=!1;const Ae=new na;let pe=!1,ze=!1;const rt=new gt,Ge=new L,Q=new Mt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Me(){return N===null?Ie:1}let D=i;function Ee(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r182"),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",lt,!1),D===null){const G="webgl2";if(D=Ee(G,A),D===null)throw Ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw it("WebGLRenderer: "+A.message),A}let Se,Be,ue,P,S,F,q,K,$,Pe,me,Le,We,re,ve,Ue,Fe,xe,Ke,B,Te,de,Re,oe;function ee(){Se=new Bp(D),Se.init(),de=new Cm(D,Se),Be=new Cp(D,Se,e,de),ue=new Am(D,Se),Be.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),P=new Gp(D),S=new dm,F=new Rm(D,Se,ue,S,Be,de,P),q=new Ip(M),K=new Op(M),$=new Wu(D),Re=new Ap(D,$),Pe=new zp(D,$,P,Re),me=new Hp(D,Pe,$,P),Ke=new Vp(D,Be,F),Ue=new Pp(S),Le=new um(M,q,K,Se,Be,Re,Ue),We=new Nm(M,S),re=new pm,ve=new Mm(Se),xe=new Tp(M,q,K,ue,me,g,l),Fe=new Em(M,me,Be),oe=new Fm(D,P,Be,ue),B=new Rp(D,Se,P),Te=new kp(D,Se,P),P.programs=Le.programs,M.capabilities=Be,M.extensions=Se,M.properties=S,M.renderLists=re,M.shadowMap=Fe,M.state=ue,M.info=P}ee(),v!==$t&&(I=new Xp(v,t.width,t.height,s,r));const ge=new Lm(M,D);this.xr=ge,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(A){A!==void 0&&(Ie=A,this.setSize(ce,Ne,!1))},this.getSize=function(A){return A.set(ce,Ne)},this.setSize=function(A,G,Y=!0){if(ge.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,Ne=G,t.width=Math.floor(A*Ie),t.height=Math.floor(G*Ie),Y===!0&&(t.style.width=A+"px",t.style.height=G+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ce*Ie,Ne*Ie).floor()},this.setDrawingBufferSize=function(A,G,Y){ce=A,Ne=G,Ie=Y,t.width=Math.floor(A*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(v===$t){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,G,Y,X){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,G,Y,X),ue.viewport(z.copy(j).multiplyScalar(Ie).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,G,Y,X){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,G,Y,X),ue.scissor(W.copy(Z).multiplyScalar(Ie).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){ue.setScissorTest(_e=A)},this.setOpaqueSort=function(A){tt=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Y=!0){let X=0;if(A){let V=!1;if(N!==null){const ye=N.texture.format;V=_.has(ye)}if(V){const ye=N.texture.type,Ce=m.has(ye),we=xe.getClearColor(),De=xe.getClearAlpha(),Oe=we.r,Xe=we.g,Ve=we.b;Ce?(y[0]=Oe,y[1]=Xe,y[2]=Ve,y[3]=De,D.clearBufferuiv(D.COLOR,0,y)):(p[0]=Oe,p[1]=Xe,p[2]=Ve,p[3]=De,D.clearBufferiv(D.COLOR,0,p))}else X|=D.COLOR_BUFFER_BIT}G&&(X|=D.DEPTH_BUFFER_BIT),Y&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),xe.dispose(),re.dispose(),ve.dispose(),S.dispose(),q.dispose(),K.dispose(),me.dispose(),Re.dispose(),oe.dispose(),Le.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",pa),ge.removeEventListener("sessionend",ma),Yn.stop()};function qe(A){A.preventDefault(),Ra("WebGLRenderer: Context Lost."),b=!0}function pt(){Ra("WebGLRenderer: Context Restored."),b=!1;const A=P.autoReset,G=Fe.enabled,Y=Fe.autoUpdate,X=Fe.needsUpdate,V=Fe.type;ee(),P.autoReset=A,Fe.enabled=G,Fe.autoUpdate=Y,Fe.needsUpdate=X,Fe.type=V}function lt(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hn(A){const G=A.target;G.removeEventListener("dispose",hn),yn(G)}function yn(A){Dc(A),S.remove(A)}function Dc(A){const G=S.get(A).programs;G!==void 0&&(G.forEach(function(Y){Le.releaseProgram(Y)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Y,X,V,ye){G===null&&(G=se);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,we=Uc(A,G,Y,X,V);ue.setMaterial(X,Ce);let De=Y.index,Oe=1;if(X.wireframe===!0){if(De=Pe.getWireframeAttribute(Y),De===void 0)return;Oe=2}const Xe=Y.drawRange,Ve=Y.attributes.position;let Qe=Xe.start*Oe,ut=(Xe.start+Xe.count)*Oe;ye!==null&&(Qe=Math.max(Qe,ye.start*Oe),ut=Math.min(ut,(ye.start+ye.count)*Oe)),De!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,De.count)):Ve!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Ve.count));const xt=ut-Qe;if(xt<0||xt===1/0)return;Re.setup(V,X,we,Y,De);let vt,ft=B;if(De!==null&&(vt=$.get(De),ft=Te,ft.setIndex(vt)),V.isMesh)X.wireframe===!0?(ue.setLineWidth(X.wireframeLinewidth*Me()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(V.isLine){let He=X.linewidth;He===void 0&&(He=1),ue.setLineWidth(He*Me()),V.isLineSegments?ft.setMode(D.LINES):V.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else V.isPoints?ft.setMode(D.POINTS):V.isSprite&&ft.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const He=V._multiDrawStarts,ct=V._multiDrawCounts,at=V._multiDrawCount,Wt=De?$.get(De).bytesPerElement:1,ai=S.get(X).currentProgram.getUniforms();for(let Xt=0;Xt<at;Xt++)ai.setValue(D,"_gl_DrawID",Xt),ft.render(He[Xt]/Wt,ct[Xt])}else if(V.isInstancedMesh)ft.renderInstances(Qe,xt,V.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ct=Math.min(Y.instanceCount,He);ft.renderInstances(Qe,xt,ct)}else ft.render(Qe,xt)};function fa(A,G,Y){A.transparent===!0&&A.side===Ft&&A.forceSinglePass===!1?(A.side=zt,A.needsUpdate=!0,ps(A,G,Y),A.side=Hn,A.needsUpdate=!0,ps(A,G,Y),A.side=Ft):ps(A,G,Y)}this.compile=function(A,G,Y=null){Y===null&&(Y=A),w=ve.get(Y),w.init(G),C.push(w),Y.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const X=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const we=ye[Ce];fa(we,Y,V),X.add(we)}else fa(ye,Y,V),X.add(ye)}),w=C.pop(),X},this.compileAsync=function(A,G,Y=null){const X=this.compile(A,G,Y);return new Promise(V=>{function ye(){if(X.forEach(function(Ce){S.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){V(A);return}setTimeout(ye,10)}Se.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let rr=null;function Lc(A){rr&&rr(A)}function pa(){Yn.stop()}function ma(){Yn.start()}const Yn=new xc;Yn.setAnimationLoop(Lc),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){rr=A,ge.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},ge.addEventListener("sessionstart",pa),ge.addEventListener("sessionend",ma),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Y=ge.enabled===!0&&ge.isPresenting===!0,X=I!==null&&(N===null||Y)&&I.begin(M,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(G),G=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,G,N),w=ve.get(A,C.length),w.init(G),C.push(w),rt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ae.setFromProjectionMatrix(rt,fn,G.reversedDepth),ze=this.localClippingEnabled,pe=Ue.init(this.clippingPlanes,ze),x=re.get(A,E.length),x.init(),E.push(x),ge.enabled===!0&&ge.isPresenting===!0){const Ce=M.xr.getDepthSensingMesh();Ce!==null&&or(Ce,G,-1/0,M.sortObjects)}or(A,G,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(tt,st),te=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,te&&xe.addToRenderList(x,A),this.info.render.frame++,pe===!0&&Ue.beginShadows();const V=w.state.shadowsArray;if(Fe.render(V,A,G),pe===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&I.hasRenderPass())===!1){const Ce=x.opaque,we=x.transmissive;if(w.setupLights(),G.isArrayCamera){const De=G.cameras;if(we.length>0)for(let Oe=0,Xe=De.length;Oe<Xe;Oe++){const Ve=De[Oe];_a(Ce,we,A,Ve)}te&&xe.render(A);for(let Oe=0,Xe=De.length;Oe<Xe;Oe++){const Ve=De[Oe];ga(x,A,Ve,Ve.viewport)}}else we.length>0&&_a(Ce,we,A,G),te&&xe.render(A),ga(x,A,G)}N!==null&&U===0&&(F.updateMultisampleRenderTarget(N),F.updateRenderTargetMipmap(N)),X&&I.end(M),A.isScene===!0&&A.onAfterRender(M,A,G),Re.resetDefaultState(),k=-1,H=null,C.pop(),C.length>0?(w=C[C.length-1],pe===!0&&Ue.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function or(A,G,Y,X){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ae.intersectsSprite(A)){X&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);const Ce=me.update(A),we=A.material;we.visible&&x.push(A,Ce,we,Y,Q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ae.intersectsObject(A))){const Ce=me.update(A),we=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Q.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Q.copy(Ce.boundingSphere.center)),Q.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(we)){const De=Ce.groups;for(let Oe=0,Xe=De.length;Oe<Xe;Oe++){const Ve=De[Oe],Qe=we[Ve.materialIndex];Qe&&Qe.visible&&x.push(A,Ce,Qe,Y,Q.z,Ve)}}else we.visible&&x.push(A,Ce,we,Y,Q.z,null)}}const ye=A.children;for(let Ce=0,we=ye.length;Ce<we;Ce++)or(ye[Ce],G,Y,X)}function ga(A,G,Y,X){const{opaque:V,transmissive:ye,transparent:Ce}=A;w.setupLightsView(Y),pe===!0&&Ue.setGlobalState(M.clippingPlanes,Y),X&&ue.viewport(z.copy(X)),V.length>0&&fs(V,G,Y),ye.length>0&&fs(ye,G,Y),Ce.length>0&&fs(Ce,G,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function _a(A,G,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Qe=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new mn(1,1,{generateMipmaps:!0,type:Qe?Kt:$t,minFilter:Gn,samples:Be.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ye=w.state.transmissionRenderTarget[X.id],Ce=X.viewport||z;ye.setSize(Ce.z*M.transmissionResolutionScale,Ce.w*M.transmissionResolutionScale);const we=M.getRenderTarget(),De=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(ye),M.getClearColor(fe),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),M.clear(),te&&xe.render(Y);const Xe=M.toneMapping;M.toneMapping=pn;const Ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),pe===!0&&Ue.setGlobalState(M.clippingPlanes,X),fs(A,Y,X),F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,xt=G.length;ut<xt;ut++){const vt=G[ut],{object:ft,geometry:He,material:ct,group:at}=vt;if(ct.side===Ft&&ft.layers.test(X.layers)){const Wt=ct.side;ct.side=zt,ct.needsUpdate=!0,xa(ft,Y,X,He,ct,at),ct.side=Wt,ct.needsUpdate=!0,Qe=!0}}Qe===!0&&(F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye))}M.setRenderTarget(we,De,Oe),M.setClearColor(fe,ie),Ve!==void 0&&(X.viewport=Ve),M.toneMapping=Xe}function fs(A,G,Y){const X=G.isScene===!0?G.overrideMaterial:null;for(let V=0,ye=A.length;V<ye;V++){const Ce=A[V],{object:we,geometry:De,group:Oe}=Ce;let Xe=Ce.material;Xe.allowOverride===!0&&X!==null&&(Xe=X),we.layers.test(Y.layers)&&xa(we,G,Y,De,Xe,Oe)}}function xa(A,G,Y,X,V,ye){A.onBeforeRender(M,G,Y,X,V,ye),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,G,Y,X,A,ye),V.transparent===!0&&V.side===Ft&&V.forceSinglePass===!1?(V.side=zt,V.needsUpdate=!0,M.renderBufferDirect(Y,G,X,V,A,ye),V.side=Hn,V.needsUpdate=!0,M.renderBufferDirect(Y,G,X,V,A,ye),V.side=Ft):M.renderBufferDirect(Y,G,X,V,A,ye),A.onAfterRender(M,G,Y,X,V,ye)}function ps(A,G,Y){G.isScene!==!0&&(G=se);const X=S.get(A),V=w.state.lights,ye=w.state.shadowsArray,Ce=V.state.version,we=Le.getParameters(A,V.state,ye,G,Y),De=Le.getProgramCacheKey(we);let Oe=X.programs;X.environment=A.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(A.isMeshStandardMaterial?K:q).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",hn),Oe=new Map,X.programs=Oe);let Xe=Oe.get(De);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===Ce)return Ma(A,we),Xe}else we.uniforms=Le.getUniforms(A),A.onBeforeCompile(we,M),Xe=Le.acquireProgram(we,De),Oe.set(De,Xe),X.uniforms=we.uniforms;const Ve=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Ue.uniform),Ma(A,we),X.needsLights=Fc(A),X.lightsStateVersion=Ce,X.needsLights&&(Ve.ambientLightColor.value=V.state.ambient,Ve.lightProbe.value=V.state.probe,Ve.directionalLights.value=V.state.directional,Ve.directionalLightShadows.value=V.state.directionalShadow,Ve.spotLights.value=V.state.spot,Ve.spotLightShadows.value=V.state.spotShadow,Ve.rectAreaLights.value=V.state.rectArea,Ve.ltc_1.value=V.state.rectAreaLTC1,Ve.ltc_2.value=V.state.rectAreaLTC2,Ve.pointLights.value=V.state.point,Ve.pointLightShadows.value=V.state.pointShadow,Ve.hemisphereLights.value=V.state.hemi,Ve.directionalShadowMap.value=V.state.directionalShadowMap,Ve.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ve.spotShadowMap.value=V.state.spotShadowMap,Ve.spotLightMatrix.value=V.state.spotLightMatrix,Ve.spotLightMap.value=V.state.spotLightMap,Ve.pointShadowMap.value=V.state.pointShadowMap,Ve.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Xe,X.uniformsList=null,Xe}function va(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Ys.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ma(A,G){const Y=S.get(A);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Uc(A,G,Y,X,V){G.isScene!==!0&&(G=se),F.resetTextureUnits();const ye=G.fog,Ce=X.isMeshStandardMaterial?G.environment:null,we=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:si,De=(X.isMeshStandardMaterial?K:q).get(X.envMap||Ce),Oe=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,ut=!!Y.morphAttributes.color;let xt=pn;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xt=M.toneMapping);const vt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=vt!==void 0?vt.length:0,He=S.get(X),ct=w.state.lights;if(pe===!0&&(ze===!0||A!==H)){const Ot=A===H&&X.id===k;Ue.setState(X,A,Ot)}let at=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ct.state.version||He.outputColorSpace!==we||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isBatchedMesh&&He.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&He.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==De||X.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ue.numPlanes||He.numIntersection!==Ue.numIntersection)||He.vertexAlphas!==Oe||He.vertexTangents!==Xe||He.morphTargets!==Ve||He.morphNormals!==Qe||He.morphColors!==ut||He.toneMapping!==xt||He.morphTargetsCount!==ft)&&(at=!0):(at=!0,He.__version=X.version);let Wt=He.currentProgram;at===!0&&(Wt=ps(X,G,V));let ai=!1,Xt=!1,Oi=!1;const mt=Wt.getUniforms(),kt=He.uniforms;if(ue.useProgram(Wt.program)&&(ai=!0,Xt=!0,Oi=!0),X.id!==k&&(k=X.id,Xt=!0),ai||H!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",A.projectionMatrix),mt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Gt=mt.map.cameraPosition;Gt!==void 0&&Gt.setValue(D,Ge.setFromMatrixPosition(A.matrixWorld)),Be.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Xt=!0,Oi=!0)}if(He.needsLights&&(ct.state.directionalShadowMap.length>0&&mt.setValue(D,"directionalShadowMap",ct.state.directionalShadowMap,F),ct.state.spotShadowMap.length>0&&mt.setValue(D,"spotShadowMap",ct.state.spotShadowMap,F),ct.state.pointShadowMap.length>0&&mt.setValue(D,"pointShadowMap",ct.state.pointShadowMap,F)),V.isSkinnedMesh){mt.setOptional(D,V,"bindMatrix"),mt.setOptional(D,V,"bindMatrixInverse");const Ot=V.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(D,"boneTexture",Ot.boneTexture,F))}V.isBatchedMesh&&(mt.setOptional(D,V,"batchingTexture"),mt.setValue(D,"batchingTexture",V._matricesTexture,F),mt.setOptional(D,V,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",V._indirectTexture,F),mt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",V._colorsTexture,F));const Jt=Y.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ke.update(V,Y,Wt),(Xt||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,mt.setValue(D,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(kt.envMap.value=De,kt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&G.environment!==null&&(kt.envMapIntensity.value=G.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Bm()),Xt&&(mt.setValue(D,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&Nc(kt,Oi),ye&&X.fog===!0&&We.refreshFogUniforms(kt,ye),We.refreshMaterialUniforms(kt,X,Ie,Ne,w.state.transmissionRenderTarget[A.id]),Ys.upload(D,va(He),kt,F)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ys.upload(D,va(He),kt,F),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(D,"center",V.center),mt.setValue(D,"modelViewMatrix",V.modelViewMatrix),mt.setValue(D,"normalMatrix",V.normalMatrix),mt.setValue(D,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ot=X.uniformsGroups;for(let Gt=0,ar=Ot.length;Gt<ar;Gt++){const qn=Ot[Gt];oe.update(qn,Wt),oe.bind(qn,Wt)}}return Wt}function Nc(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Fc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,G,Y){const X=S.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=G,S.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Y=S.get(A);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const Oc=D.createFramebuffer();this.setRenderTarget=function(A,G=0,Y=0){N=A,R=G,U=Y;let X=null,V=!1,ye=!1;if(A){const we=S.get(A);if(we.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(D.FRAMEBUFFER,we.__webglFramebuffer),z.copy(A.viewport),W.copy(A.scissor),J=A.scissorTest,ue.viewport(z),ue.scissor(W),ue.setScissorTest(J),k=-1;return}else if(we.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(we.__hasExternalTextures)F.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(we.__boundDepthTexture!==Xe){if(Xe!==null&&S.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ye=!0);const Oe=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[G])?X=Oe[G][Y]:X=Oe[G],V=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?X=S.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[Y]:X=Oe,z.copy(A.viewport),W.copy(A.scissor),J=A.scissorTest}else z.copy(j).multiplyScalar(Ie).floor(),W.copy(Z).multiplyScalar(Ie).floor(),J=_e;if(Y!==0&&(X=Oc),ue.bindFramebuffer(D.FRAMEBUFFER,X)&&ue.drawBuffers(A,X),ue.viewport(z),ue.scissor(W),ue.setScissorTest(J),V){const we=S.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,Y)}else if(ye){const we=G;for(let De=0;De<A.textures.length;De++){const Oe=S.get(A.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Oe.__webglTexture,Y,we)}}else if(A!==null&&Y!==0){const we=S.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,Y)}k=-1},this.readRenderTargetPixels=function(A,G,Y,X,V,ye,Ce,we=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){ue.bindFramebuffer(D.FRAMEBUFFER,De);try{const Oe=A.textures[we],Xe=Oe.format,Ve=Oe.type;if(!Be.textureFormatReadable(Xe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ve)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-X&&Y>=0&&Y<=A.height-V&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),D.readPixels(G,Y,X,V,de.convert(Xe),de.convert(Ve),ye))}finally{const Oe=N!==null?S.get(N).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,G,Y,X,V,ye,Ce,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(G>=0&&G<=A.width-X&&Y>=0&&Y<=A.height-V){ue.bindFramebuffer(D.FRAMEBUFFER,De);const Oe=A.textures[we],Xe=Oe.format,Ve=Oe.type;if(!Be.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),D.readPixels(G,Y,X,V,de.convert(Xe),de.convert(Ve),0);const ut=N!==null?S.get(N).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,ut);const xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vh(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.deleteBuffer(Qe),D.deleteSync(xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Y=0){const X=Math.pow(2,-Y),V=Math.floor(A.image.width*X),ye=Math.floor(A.image.height*X),Ce=G!==null?G.x:0,we=G!==null?G.y:0;F.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Ce,we,V,ye),ue.unbindTexture()};const Bc=D.createFramebuffer(),zc=D.createFramebuffer();this.copyTextureToTexture=function(A,G,Y=null,X=null,V=0,ye=null){ye===null&&(V!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=V,V=0):ye=0);let Ce,we,De,Oe,Xe,Ve,Qe,ut,xt;const vt=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(Y!==null)Ce=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Xe=Y.min.y,Ve=Y.isBox3?Y.min.z:0;else{const Jt=Math.pow(2,-V);Ce=Math.floor(vt.width*Jt),we=Math.floor(vt.height*Jt),A.isDataArrayTexture?De=vt.depth:A.isData3DTexture?De=Math.floor(vt.depth*Jt):De=1,Oe=0,Xe=0,Ve=0}X!==null?(Qe=X.x,ut=X.y,xt=X.z):(Qe=0,ut=0,xt=0);const ft=de.convert(G.format),He=de.convert(G.type);let ct;G.isData3DTexture?(F.setTexture3D(G,0),ct=D.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(F.setTexture2DArray(G,0),ct=D.TEXTURE_2D_ARRAY):(F.setTexture2D(G,0),ct=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),Wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ai=D.getParameter(D.UNPACK_SKIP_PIXELS),Xt=D.getParameter(D.UNPACK_SKIP_ROWS),Oi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const mt=A.isDataArrayTexture||A.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Jt=S.get(A),Ot=S.get(G),Gt=S.get(Jt.__renderTarget),ar=S.get(Ot.__renderTarget);ue.bindFramebuffer(D.READ_FRAMEBUFFER,Gt.__webglFramebuffer),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let qn=0;qn<De;qn++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(A).__webglTexture,V,Ve+qn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(G).__webglTexture,ye,xt+qn)),D.blitFramebuffer(Oe,Xe,Ce,we,Qe,ut,Ce,we,D.DEPTH_BUFFER_BIT,D.NEAREST);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||S.has(A)){const Jt=S.get(A),Ot=S.get(G);ue.bindFramebuffer(D.READ_FRAMEBUFFER,Bc),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,zc);for(let Gt=0;Gt<De;Gt++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,V,Ve+Gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,V),kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,ye,xt+Gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,ye),V!==0?D.blitFramebuffer(Oe,Xe,Ce,we,Qe,ut,Ce,we,D.COLOR_BUFFER_BIT,D.NEAREST):kt?D.copyTexSubImage3D(ct,ye,Qe,ut,xt+Gt,Oe,Xe,Ce,we):D.copyTexSubImage2D(ct,ye,Qe,ut,Oe,Xe,Ce,we);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ct,ye,Qe,ut,xt,Ce,we,De,ft,He,vt.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(ct,ye,Qe,ut,xt,Ce,we,De,ft,vt.data):D.texSubImage3D(ct,ye,Qe,ut,xt,Ce,we,De,ft,He,vt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Qe,ut,Ce,we,ft,He,vt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Qe,ut,vt.width,vt.height,ft,vt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Qe,ut,Ce,we,ft,He,vt);D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ai),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oi),ye===0&&G.generateMipmaps&&D.generateMipmap(ct),ue.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){R=0,U=0,N=null,ue.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const El={type:"change"},da={type:"start"},bc={type:"end"},zs=new ea,Tl=new zn,zm=Math.cos(70*Sh.DEG2RAD),wt=new L,Ht=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vr=1e-6;class j_ extends Vu{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Wn,this._lastTargetPosition=new L,this._quat=new Wn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new el,this._sphericalDelta=new el,this._scale=1,this._panOffset=new L,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new L,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gm.bind(this),this._onPointerDown=km.bind(this),this._onPointerUp=Vm.bind(this),this._onContextMenu=$m.bind(this),this._onMouseWheel=Xm.bind(this),this._onKeyDown=Ym.bind(this),this._onTouchStart=qm.bind(this),this._onTouchMove=Zm.bind(this),this._onMouseDown=Hm.bind(this),this._onMouseMove=Wm.bind(this),this._interceptControlDown=jm.bind(this),this._interceptControlUp=Km.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(El),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),s<-Math.PI?s+=Ht:s>Math.PI&&(s-=Ht),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zs.origin.copy(this.object.position),zs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zs.direction))<zm?this.object.lookAt(this.target):(Tl.setFromNormalAndCoplanarPoint(this.object.up,this.target),zs.intersectPlane(Tl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vr||this._lastTargetPosition.distanceToSquared(this.target)>Vr?(this.dispatchEvent(El),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function km(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Gm(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vm(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bc),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hm(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=dt.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(da)}function Wm(n){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Xm(n){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(n.preventDefault(),this.dispatchEvent(da),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bc))}function Ym(n){this.enabled!==!1&&this._handleKeyDown(n)}function qm(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=dt.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=dt.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(da)}function Zm(n){switch(this._trackPointer(n),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=dt.NONE}}function $m(n){this.enabled!==!1&&n.preventDefault()}function jm(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Km(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class K_ extends Fu{constructor(e){super(e),this.type=Kt}parse(e){const o=function(I,M){switch(I){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},u=function(I,M,b){M=M||1024;let U=I.pos,N=-1,k=0,H="",z=String.fromCharCode.apply(null,new Uint16Array(I.subarray(U,U+128)));for(;0>(N=z.indexOf(`
`))&&k<M&&U<I.byteLength;)H+=z,k+=z.length,U+=128,z+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(U,U+128)));return-1<N?(I.pos+=k+N+1,H+z.slice(0,N)):!1},f=function(I){const M=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,k={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,z;for((I.pos>=I.byteLength||!(H=u(I)))&&o(1,"no header found"),(z=H.match(M))||o(3,"bad initial token"),k.valid|=1,k.programtype=z[1],k.string+=H+`
`;H=u(I),H!==!1;){if(k.string+=H+`
`,H.charAt(0)==="#"){k.comments+=H+`
`;continue}if((z=H.match(b))&&(k.gamma=parseFloat(z[1])),(z=H.match(R))&&(k.exposure=parseFloat(z[1])),(z=H.match(U))&&(k.valid|=2,k.format=z[1]),(z=H.match(N))&&(k.valid|=4,k.height=parseInt(z[1],10),k.width=parseInt(z[2],10)),k.valid&2&&k.valid&4)break}return k.valid&2||o(3,"missing format specifier"),k.valid&4||o(3,"missing image size specifier"),k},d=function(I,M,b){const R=M;if(R<8||R>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);R!==(I[2]<<8|I[3])&&o(3,"wrong scanline width");const U=new Uint8Array(4*M*b);U.length||o(4,"unable to allocate buffer space");let N=0,k=0;const H=4*R,z=new Uint8Array(4),W=new Uint8Array(H);let J=b;for(;J>0&&k<I.byteLength;){k+4>I.byteLength&&o(1),z[0]=I[k++],z[1]=I[k++],z[2]=I[k++],z[3]=I[k++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=R)&&o(3,"bad rgbe scanline format");let fe=0,ie;for(;fe<H&&k<I.byteLength;){ie=I[k++];const Ne=ie>128;if(Ne&&(ie-=128),(ie===0||fe+ie>H)&&o(3,"bad scanline data"),Ne){const Ie=I[k++];for(let tt=0;tt<ie;tt++)W[fe++]=Ie}else W.set(I.subarray(k,k+ie),fe),fe+=ie,k+=ie}const ce=R;for(let Ne=0;Ne<ce;Ne++){let Ie=0;U[N]=W[Ne+Ie],Ie+=R,U[N+1]=W[Ne+Ie],Ie+=R,U[N+2]=W[Ne+Ie],Ie+=R,U[N+3]=W[Ne+Ie],N+=4}J--}return U},g=function(I,M,b,R){const U=I[M+3],N=Math.pow(2,U-128)/255;b[R+0]=I[M+0]*N,b[R+1]=I[M+1]*N,b[R+2]=I[M+2]*N,b[R+3]=1},v=function(I,M,b,R){const U=I[M+3],N=Math.pow(2,U-128)/255;b[R+0]=ws.toHalfFloat(Math.min(I[M+0]*N,65504)),b[R+1]=ws.toHalfFloat(Math.min(I[M+1]*N,65504)),b[R+2]=ws.toHalfFloat(Math.min(I[M+2]*N,65504)),b[R+3]=ws.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const m=f(_),y=m.width,p=m.height,x=d(_.subarray(_.pos),y,p);let w,E,C;switch(this.type){case jt:C=x.length/4;const I=new Float32Array(C*4);for(let b=0;b<C;b++)g(x,b*4,I,b*4);w=I,E=jt;break;case Kt:C=x.length/4;const M=new Uint16Array(C*4);for(let b=0;b<C;b++)v(x,b*4,M,b*4);w=M,E=Kt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:p,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case jt:case Kt:o.colorSpace=si,o.minFilter=St,o.magFilter=St,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}const Xi=new L;function en(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xi.copy(e),Xi[i]=0,Xi.normalize();const c=.5*o/(o+a),h=1-Xi.angleTo(n)/l;return Math.sign(Xi[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Ei extends he{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new L,c=new L,h=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new L,_=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:v.set(1,0,0),d[y+0]=en(v,c,"z","y",r,i),d[y+1]=1-en(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[y+0]=1-en(v,c,"z","y",r,i),d[y+1]=1-en(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[y+0]=1-en(v,c,"x","z",r,e),d[y+1]=en(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),d[y+0]=1-en(v,c,"x","z",r,e),d[y+1]=1-en(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),d[y+0]=1-en(v,c,"x","y",r,e),d[y+1]=1-en(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[y+0]=en(v,c,"x","y",r,e),d[y+1]=1-en(v,c,"y","x",r,t);break}}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.segments,e.radius)}}function wc(n,e,t,i,s){switch(n.fillStyle=s,n.fillRect(0,0,e,t),n.save(),i){case"Leather":for(let p=0;p<1e3;p++){n.fillStyle=`rgba(0,0,0,${Math.random()*.3})`;const x=Math.random()*4+1;n.fillRect(Math.random()*e,Math.random()*t,x,x)}break;case"Fabric":n.strokeStyle="rgba(255,255,255,0.25)",n.lineWidth=1;for(let p=0;p<e;p+=4)n.beginPath(),n.moveTo(p,0),n.lineTo(p,t),n.stroke();for(let p=0;p<t;p+=4)n.beginPath(),n.moveTo(0,p),n.lineTo(e,p),n.stroke();break;case"Glossy":const r=n.createLinearGradient(0,0,e,t);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,0.4)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,e,t);break;case"Matte":n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(0,0,e,t);break;case"Old Paper":n.fillStyle="#f4e4bc",n.globalAlpha=.5,n.fillRect(0,0,e,t),n.globalAlpha=.1,n.fillStyle="#553300";for(let p=0;p<5;p++){const x=Math.random()*50+20;n.beginPath(),n.arc(Math.random()*e,Math.random()*t,x,0,Math.PI*2),n.fill()}break;case"Metallic":n.strokeStyle="rgba(255,255,255,0.4)",n.lineWidth=5;for(let p=-e;p<e*2;p+=40)n.beginPath(),n.moveTo(p,0),n.lineTo(p+t,t),n.stroke();break;case"Marble":n.strokeStyle="rgba(255,255,255,0.5)",n.lineWidth=40,n.lineCap="round",n.filter="blur(20px)";for(let p=0;p<5;p++)n.beginPath(),n.moveTo(Math.random()*e,Math.random()*t),n.bezierCurveTo(Math.random()*e,Math.random()*t,Math.random()*e,Math.random()*t,Math.random()*e,Math.random()*t),n.stroke();n.filter="none";break;case"Cyberpunk":n.strokeStyle="#00ff00",n.globalAlpha=.4,n.lineWidth=2;const o=50;for(let p=0;p<e;p+=o)n.beginPath(),n.moveTo(p,0),n.lineTo(p,t),n.stroke();for(let p=0;p<t;p+=o)n.beginPath(),n.moveTo(0,p),n.lineTo(e,p),n.stroke();break;case"Canvas":for(let p=0;p<5e3;p++)n.fillStyle="rgba(200,200,200,0.25)",n.fillRect(Math.random()*e,Math.random()*t,2,2);break;case"Velvet":const a=Math.max(e,t)/1.5,l=n.createRadialGradient(e/2,t/2,0,e/2,t/2,a);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.7)"),n.fillStyle=l,n.fillRect(0,0,e,t);break;case"Wood":n.fillStyle="rgba(70, 40, 10, 0.2)";for(let p=0;p<e;p+=5)n.globalAlpha=Math.random()*.2,n.fillRect(p,0,2,t);n.globalAlpha=1;for(let p=0;p<3;p++){n.fillStyle="rgba(50, 30, 5, 0.3)";const x=Math.random()*e,w=Math.random()*t;n.beginPath(),n.ellipse(x,w,10,30,Math.random(),0,Math.PI*2),n.fill()}break;case"Stone":for(let p=0;p<2e3;p++){n.fillStyle=`rgba(30,30,30,${Math.random()*.3})`;const x=Math.random()*3+1;n.fillRect(Math.random()*e,Math.random()*t,x,x)}break;case"Holographic":const c=n.createLinearGradient(0,0,e,t);c.addColorStop(0,"rgba(255,0,0,0.2)"),c.addColorStop(.2,"rgba(255,255,0,0.2)"),c.addColorStop(.4,"rgba(0,255,0,0.2)"),c.addColorStop(.6,"rgba(0,255,255,0.2)"),c.addColorStop(.8,"rgba(0,0,255,0.2)"),c.addColorStop(1,"rgba(255,0,255,0.2)"),n.fillStyle=c,n.fillRect(0,0,e,t);break;case"Denim":n.strokeStyle="rgba(255,255,255,0.15)",n.lineWidth=1;for(let p=-e;p<e*2;p+=3)n.beginPath(),n.moveTo(p,0),n.lineTo(p-t,t),n.stroke(),n.beginPath(),n.moveTo(p,0),n.lineTo(p+t,t),n.stroke();break;case"Carbon Fiber":n.fillStyle="#111",n.fillRect(0,0,e,t),n.fillStyle="#222";for(let p=0;p<t;p+=20)for(let x=0;x<e;x+=20)(x/20+p/20)%2===0&&n.fillRect(x,p,20,20);break;case"Mosaic":const h=20;for(let p=0;p<t;p+=h)for(let x=0;x<e;x+=h)n.fillStyle=`rgba(255,255,255,${Math.random()*.2})`,n.fillRect(x+1,p+1,h-2,h-2);break;case"Knit":n.strokeStyle="rgba(255,255,255,0.1)",n.lineWidth=2;for(let p=0;p<t;p+=10)for(let x=0;x<e;x+=10)n.beginPath(),n.moveTo(x,p),n.lineTo(x+5,p+10),n.lineTo(x+10,p),n.stroke();break;case"Scales":n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth=2;const u=15;for(let p=0;p<t;p+=u){const x=p/u%2===0?0:u;for(let w=-u;w<e+u;w+=u*2)n.beginPath(),n.arc(w+x,p,u,0,Math.PI,!1),n.stroke()}break;case"Circuit":n.strokeStyle="rgba(100,255,100,0.3)",n.lineWidth=2;for(let p=0;p<20;p++){const x=Math.random()*e,w=Math.random()*t;n.beginPath(),n.moveTo(x,w),n.lineTo(x,w+Math.random()*100-50),n.lineTo(x+Math.random()*100-50,w),n.stroke(),n.fillStyle="rgba(100,255,100,0.5)",n.beginPath(),n.arc(x,w,3,0,Math.PI*2),n.fill()}break;case"Watercolor":n.globalCompositeOperation="overlay";for(let p=0;p<10;p++){const x=Math.random()*100+50;n.fillStyle=`rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.1)`,n.beginPath(),n.arc(Math.random()*e,Math.random()*t,x,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";break;case"Geometric":n.strokeStyle="rgba(255,255,255,0.1)",n.lineWidth=1;for(let p=0;p<20;p++)n.beginPath(),n.moveTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t),n.closePath(),n.stroke();break;case"Floral":n.fillStyle="rgba(255,255,255,0.1)";for(let p=0;p<30;p++){const x=Math.random()*e,w=Math.random()*t,E=Math.random()*10+5;n.beginPath();for(let C=0;C<5;C++)n.arc(x+Math.cos(C/5*Math.PI*2)*E,w+Math.sin(C/5*Math.PI*2)*E,E/2,0,Math.PI*2);n.fill()}break;case"Confetti":for(let p=0;p<100;p++)n.fillStyle=`hsl(${Math.random()*360}, 70%, 50%)`,n.globalAlpha=.5,n.beginPath(),n.arc(Math.random()*e,Math.random()*t,Math.random()*5+2,0,Math.PI*2),n.fill();n.globalAlpha=1;break;case"Plaid":n.globalCompositeOperation="multiply",n.fillStyle="rgba(0,0,0,0.1)";for(let p=0;p<e;p+=40)n.fillRect(p,0,20,t);for(let p=0;p<t;p+=40)n.fillRect(0,p,e,20);n.fillStyle="rgba(255,255,255,0.1)";for(let p=20;p<e;p+=40)n.fillRect(p,0,5,t);for(let p=20;p<t;p+=40)n.fillRect(0,p,e,5);n.globalCompositeOperation="source-over";break;case"Leopard":n.fillStyle="rgba(0,0,0,0.3)";for(let p=0;p<200;p++){const x=Math.random()*e,w=Math.random()*t;n.beginPath(),n.arc(x,w,Math.random()*8+4,0,Math.PI*2),n.arc(x+5,w+2,Math.random()*6+3,0,Math.PI*2),n.fill()}break;case"Zebra":n.strokeStyle="rgba(0,0,0,0.3)",n.lineWidth=10,n.lineCap="round";for(let p=0;p<t;p+=20)n.beginPath(),n.moveTo(0,p),n.bezierCurveTo(e*.3,p+Math.random()*50-25,e*.7,p+Math.random()*50-25,e,p),n.stroke();break;case"Polka Dot":n.fillStyle="rgba(255,255,255,0.2)";for(let p=0;p<t;p+=30)for(let x=0;x<e;x+=30)n.beginPath(),n.arc(x,p,8,0,Math.PI*2),n.fill();break;case"Camouflage":for(let p=0;p<50;p++)n.fillStyle=p%2==0?"rgba(50,100,50,0.5)":"rgba(100,100,50,0.5)",n.beginPath(),n.arc(Math.random()*e,Math.random()*t,Math.random()*50+20,0,Math.PI*2),n.fill();break;case"Neon":n.fillStyle="#000",n.fillRect(0,0,e,t);for(let p=0;p<10;p++)n.strokeStyle=`hsl(${Math.random()*360}, 100%, 50%)`,n.lineWidth=3,n.shadowBlur=10,n.shadowColor=n.strokeStyle,n.beginPath(),n.moveTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t),n.stroke();n.shadowBlur=0;break;case"Ice":n.strokeStyle="rgba(255,255,255,0.6)",n.lineWidth=1;for(let p=0;p<50;p++)n.beginPath(),n.moveTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t),n.stroke();n.fillStyle="rgba(200,240,255,0.1)",n.fillRect(0,0,e,t);break;case"Damask":n.fillStyle="rgba(0,0,0,0.15)",n.font="40px serif",n.textAlign="center";for(let p=0;p<t;p+=60)for(let x=0;x<e;x+=60){const w=p/60%2===0?0:30;n.fillText("❦",x+w,p)}break;case"Hexagon":n.strokeStyle="rgba(100,200,255,0.2)",n.lineWidth=1;const f=20,d=f*Math.sqrt(3);for(let p=0;p<t+d;p+=d)for(let x=0;x<e+f*3;x+=f*3){n.beginPath();const w=Math.round(p/d)%2===0?0:f*1.5,E=x+w,C=p;for(let I=0;I<6;I++)n.lineTo(E+f*Math.cos(I/6*Math.PI*2),C+f*Math.sin(I/6*Math.PI*2));n.stroke()}break;case"Cross Stitch":n.fillStyle="rgba(255,255,255,0.2)";const g=8;for(let p=0;p<t;p+=g)for(let x=0;x<e;x+=g)Math.random()>.7&&n.fillText("x",x,p);break;case"Brick":{n.fillStyle="rgba(100,50,50,0.3)";const p=20,x=40;for(let w=0;w<t;w+=p+2){const E=w/(p+2)%2===0?0:x/2;for(let C=-x;C<e;C+=x+2)n.fillRect(C+E,w,x,p)}break}case"Wave":n.strokeStyle="rgba(255,255,255,0.4)",n.lineWidth=2;for(let p=-20;p<t;p+=20){n.beginPath();for(let x=0;x<e;x+=10)n.lineTo(x,p+Math.sin(x/50)*20);n.stroke()}break;case"Gradient":const v=n.createLinearGradient(0,0,e,t);v.addColorStop(0,"rgba(255,0,0,0.1)"),v.addColorStop(.3,"rgba(0,0,255,0.1)"),v.addColorStop(.6,"rgba(0,255,0,0.1)"),v.addColorStop(1,"rgba(255,255,0,0.1)"),n.fillStyle=v,n.fillRect(0,0,e,t);break;case"Cork":for(let p=0;p<3e3;p++){n.fillStyle=`rgba(139,69,19, ${Math.random()*.3})`;const x=Math.random()*3;n.beginPath(),n.arc(Math.random()*e,Math.random()*t,x,0,Math.PI*2),n.fill()}break;case"Crackle":n.strokeStyle="rgba(255,255,255,0.3)",n.lineWidth=1;for(let p=0;p<30;p++){let x=Math.random()*e,w=Math.random()*t;n.beginPath(),n.moveTo(x,w);for(let E=0;E<20;E++)x+=(Math.random()-.5)*50,w+=(Math.random()-.5)*50,n.lineTo(x,w);n.stroke()}break;case"Herringbone":n.strokeStyle="rgba(0,0,0,0.2)",n.lineWidth=1;const _=20;for(let p=0;p<e;p+=_)for(let x=0;x<t;x+=_)(Math.floor(p/_)+Math.floor(x/_))%2===0?(n.beginPath(),n.moveTo(p,x),n.lineTo(p+_,x+_),n.stroke()):(n.beginPath(),n.moveTo(p+_,x),n.lineTo(p,x+_),n.stroke());break;case"Splatter":for(let p=0;p<50;p++){n.fillStyle=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255}, 0.5)`;let x=Math.random()*15+5,w=Math.random()*e,E=Math.random()*t;n.beginPath(),n.arc(w,E,x,0,Math.PI*2),n.fill();for(let C=0;C<5;C++)n.beginPath(),n.arc(w+(Math.random()-.5)*x*3,E+(Math.random()-.5)*x*3,x/4,0,Math.PI*2),n.fill()}break;case"Paisley":n.fillStyle="rgba(255,255,255,0.1)";for(let p=0;p<20;p++){const x=Math.random()*e,w=Math.random()*t,E=Math.random()*30+10;n.beginPath(),n.moveTo(x,w),n.bezierCurveTo(x+E,w-E,x+E*2,w+E,x,w+E*2),n.bezierCurveTo(x-E,w+E,x-E,w-E,x,w),n.fill(),n.beginPath(),n.arc(x+E/2,w+E/2,E/4,0,Math.PI*2),n.stroke()}break;case"Chevron":n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth=5;const m=40,y=20;for(let p=-y;p<t;p+=y*2){n.beginPath();for(let x=0;x<e+m;x+=m)n.lineTo(x,p),n.lineTo(x+m/2,p+y);n.stroke()}break;case"Galaxy":n.fillStyle="#050510",n.fillRect(0,0,e,t);for(let p=0;p<5;p++){const x=n.createRadialGradient(Math.random()*e,Math.random()*t,0,Math.random()*e,Math.random()*t,200);x.addColorStop(0,`rgba(${Math.random()*255},0,${Math.random()*255},0.2)`),x.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=x,n.fillRect(0,0,e,t)}n.fillStyle="white";for(let p=0;p<200;p++)n.beginPath(),n.arc(Math.random()*e,Math.random()*t,Math.random()*1.5,0,Math.PI*2),n.fill();break;case"Grunge":n.fillStyle="rgba(0,0,0,0.2)";for(let p=0;p<500;p++){const x=Math.random()*50,w=Math.random()*2,E=Math.random()*e,C=Math.random()*t;n.fillRect(E,C,x,w)}n.strokeStyle="rgba(255,255,255,0.3)",n.lineWidth=1;for(let p=0;p<50;p++)n.beginPath(),n.moveTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t),n.stroke();break;case"Bamboo":{n.fillStyle="rgba(100,200,50,0.1)";const p=30;for(let x=10;x<e;x+=p+10){n.fillRect(x,0,p,t),n.fillStyle="rgba(50,100,20,0.3)";for(let w=Math.random()*50;w<t;w+=100)n.fillRect(x-2,w,p+4,5);n.fillStyle="rgba(100,200,50,0.1)"}break}case"Clouds":for(let p=0;p<20;p++){n.fillStyle=`rgba(255,255,255, ${Math.random()*.3})`;const x=Math.random()*e,w=Math.random()*t,E=Math.random()*100+50;n.beginPath(),n.arc(x,w,E,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(x+E/2,w+E/4,E*.8,0,Math.PI*2),n.fill()}break;case"Lace":n.strokeStyle="rgba(255,255,255,0.4)",n.lineWidth=1;for(let p=0;p<t;p+=40)for(let x=0;x<e;x+=40)n.beginPath(),n.arc(x,p,15,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(x,p,5,0,Math.PI*2),n.stroke();break;case"Blueprint":n.fillStyle="#104080",n.fillRect(0,0,e,t),n.strokeStyle="rgba(255,255,255,0.3)",n.lineWidth=1;for(let p=0;p<e;p+=20)n.beginPath(),n.moveTo(p,0),n.lineTo(p,t),n.stroke();for(let p=0;p<t;p+=20)n.beginPath(),n.moveTo(0,p),n.lineTo(e,p),n.stroke();n.lineWidth=3,n.strokeRect(50,50,e-100,t-100);break;case"Tie Dye":for(let p=0;p<5;p++){const x=Math.random()*e,w=Math.random()*t,E=n.createRadialGradient(x,w,0,x,w,300);E.addColorStop(0,`hsl(${Math.random()*360}, 100%, 50%)`),E.addColorStop(.5,`hsl(${Math.random()*360}, 100%, 50%)`),E.addColorStop(1,"rgba(0,0,0,0)"),n.globalCompositeOperation="screen",n.fillStyle=E,n.fillRect(0,0,e,t)}n.globalCompositeOperation="source-over";break;case"Terrazzo":n.fillStyle="#EEE";for(let p=0;p<200;p++){n.fillStyle=`hsl(${Math.random()*360}, 50%, 50%)`,n.beginPath();const x=Math.random()*e,w=Math.random()*t;n.moveTo(x,w),n.lineTo(x+Math.random()*20-10,w+Math.random()*20-10),n.lineTo(x+Math.random()*20-10,w+Math.random()*20-10),n.fill()}break}switch(n.save(),i){case"Foil":const r=n.createLinearGradient(0,0,e,t);r.addColorStop(0,"rgba(255,255,255,0.1)"),r.addColorStop(.5,"rgba(255,255,255,0.4)"),r.addColorStop(1,"rgba(255,255,255,0.1)"),n.fillStyle=r,n.fillRect(0,0,e,t);for(let g=0;g<50;g++)n.strokeStyle=`rgba(0,0,0,${Math.random()*.1})`,n.beginPath(),n.moveTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t),n.stroke();break;case"Linen":n.strokeStyle="rgba(255,255,255,0.15)",n.lineWidth=1;for(let g=0;g<e;g+=3)n.beginPath(),n.moveTo(g,0),n.lineTo(g,t),n.stroke();for(let g=0;g<t;g+=3)n.beginPath(),n.moveTo(0,g),n.lineTo(e,g),n.stroke();break;case"Kraft":n.fillStyle="rgba(0,0,0,0.05)";for(let g=0;g<3e3;g++)n.fillRect(Math.random()*e,Math.random()*t,2,2);n.strokeStyle="rgba(100,50,0,0.1)";for(let g=0;g<200;g++){n.beginPath();const v=Math.random()*e,_=Math.random()*t;n.moveTo(v,_),n.lineTo(v+Math.random()*10,_+Math.random()*10),n.stroke()}break;case"Sandpaper":for(let g=0;g<1e4;g++)n.fillStyle=Math.random()>.5?"rgba(0,0,0,0.2)":"rgba(255,255,255,0.2)",n.fillRect(Math.random()*e,Math.random()*t,1.5,1.5);break;case"Argyle":const o=60,a=100;for(let g=0;g<t;g+=a)for(let v=0;v<e;v+=o){const _=g/a%2===0?0:o/2,m=v+_,y=g;n.fillStyle=(v/o+g/a)%2===0?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",n.beginPath(),n.moveTo(m,y),n.lineTo(m+o/2,y+a/2),n.lineTo(m,y+a),n.lineTo(m-o/2,y+a/2),n.fill()}n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth=1;for(let g=0;g<t;g+=a)for(let v=0;v<e;v+=o){const _=g/a%2===0?0:o/2,m=v+_;n.beginPath(),n.moveTo(m,0),n.lineTo(m,t)}break;case"Houndstooth":const l=40;n.fillStyle="rgba(0,0,0,0.2)";for(let g=0;g<t;g+=l)for(let v=0;v<e;v+=l)(v/l+g/l)%2===0&&(n.fillRect(v,g,l,l),n.beginPath(),n.moveTo(v+l,g),n.lineTo(v+l*1.5,g+l/2),n.lineTo(v+l,g+l),n.fill());break;case"Sunburst":const c=e/2,h=t/2;n.fillStyle="rgba(255,255,255,0.1)";for(let g=0;g<20;g++)n.beginPath(),n.moveTo(c,h),n.arc(c,h,Math.max(e,t)*1.5,g/20*Math.PI*2,(g+.5)/20*Math.PI*2),n.fill();break;case"Stars":n.fillStyle="rgba(255,255,255,0.6)";for(let g=0;g<100;g++){const v=Math.random()*e,_=Math.random()*t,m=Math.random()*2+1;n.beginPath(),n.arc(v,_,m,0,Math.PI*2),n.fill()}for(let g=0;g<10;g++){const v=Math.random()*e,_=Math.random()*t,m=Math.random()*10+5;Jm(n,v,_,5,m,m/2)}break;case"Checkerboard":const u=50;n.fillStyle="rgba(0,0,0,0.15)";for(let g=0;g<t;g+=u)for(let v=0;v<e;v+=u)(v/u+g/u)%2===0&&n.fillRect(v,g,u,u);break;case"Stripes":n.fillStyle="rgba(255,255,255,0.1)";for(let g=0;g<e;g+=40)n.fillRect(g,0,20,t);break;case"Diamonds":const f=40;n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth=1;for(let g=0;g<t;g+=f)for(let v=0;v<e;v+=f)n.strokeRect(v+g/f%2*f/2,g,f/Math.sqrt(2),f/Math.sqrt(2)),n.save(),n.translate(v,g),n.rotate(Math.PI/4),n.strokeRect(-f/2,-f/2,f,f),n.restore();break;case"Triangles":n.fillStyle="rgba(255,255,255,0.1)";const d=50;for(let g=0;g<t;g+=d)for(let v=0;v<e;v+=d)Math.random()>.5&&(n.beginPath(),n.moveTo(v,g),n.lineTo(v+d,g),n.lineTo(v+d/2,g+d),n.fill());break}n.restore()}function Jm(n,e,t,i,s,r){let o=Math.PI/2*3,a=e,l=t,c=Math.PI/i;n.beginPath(),n.moveTo(e,t-s);for(let h=0;h<i;h++)a=e+Math.cos(o)*s,l=t+Math.sin(o)*s,n.lineTo(a,l),o+=c,a=e+Math.cos(o)*r,l=t+Math.sin(o)*r,n.lineTo(a,l),o+=c;n.lineTo(e,t-s),n.closePath(),n.fill()}function Ec(n,e,t,i,s){n.save(),n.strokeStyle=s,n.lineWidth=5;const r=20;switch(i){case"Titled":n.strokeRect(r,r,e-r*2,t-r*2),n.lineWidth=1,n.strokeRect(r+5,r+5,e-(r+5)*2,t-(r+5)*2);break;case"OrnateCorners":n.strokeRect(r,r,e-r*2,t-r*2);const o=30,a=(f,d,g,v)=>{n.beginPath(),n.moveTo(f,d+v*o),n.quadraticCurveTo(f,d,f+g*o,d),n.stroke()};n.lineWidth=3,a(r+5,r+5,1,1),a(e-r-5,r+5,-1,1),a(e-r-5,t-r-5,-1,-1),a(r+5,t-r-5,1,-1);break;case"Dotted":n.setLineDash([5,10]),n.strokeRect(r,r,e-r*2,t-r*2),n.setLineDash([]);break;case"SolidThick":n.lineWidth=15,n.strokeRect(r,r,e-r*2,t-r*2);break;case"DoubleFrame":n.lineWidth=2,n.strokeRect(r,r,e-r*2,t-r*2),n.strokeRect(r+15,r+15,e-(r+15)*2,t-(r+15)*2);break;case"Minimal":n.beginPath(),n.moveTo(r,t-r*2),n.lineTo(e-r,t-r*2),n.stroke();break;case"Classic":n.strokeRect(r,r,e-r*2,t-r*2),n.lineWidth=2;const l=(f,d)=>{n.strokeRect(f-10,d-10,20,20),n.strokeRect(f-5,d-5,10,10)};l(r,r),l(e-r,r),l(e-r,t-r),l(r,t-r);break;case"SciFi":n.lineWidth=4;const c=60;n.beginPath(),n.moveTo(r,r+c),n.lineTo(r,r),n.lineTo(r+c,r),n.stroke(),n.beginPath(),n.moveTo(e-r-c,r),n.lineTo(e-r,r),n.lineTo(e-r,r+c),n.stroke(),n.beginPath(),n.moveTo(e-r,t-r-c),n.lineTo(e-r,t-r),n.lineTo(e-r-c,t-r),n.stroke(),n.beginPath(),n.moveTo(r+c,t-r),n.lineTo(r,t-r),n.lineTo(r,t-r-c),n.stroke(),n.lineWidth=2,n.beginPath(),n.moveTo(e-r,r+c+20),n.lineTo(e-r,t-r-c-20),n.setLineDash([5,5]),n.stroke(),n.setLineDash([]);break;case"Business":n.fillStyle=n.strokeStyle,n.fillRect(r,80,e-r*2,2),n.fillRect(r,t-80,e-r*2,2),n.lineWidth=1,n.beginPath(),n.moveTo(40,80),n.lineTo(40,t-80),n.stroke();break;case"Fantasy":n.lineWidth=2;const h=(f,d,g,v)=>{n.beginPath(),n.moveTo(f,d+v*60),n.bezierCurveTo(f,d,f+g*60,d,f+g*60,d),n.moveTo(f,d),n.quadraticCurveTo(f+g*30,d+v*30,f+g*40,d+v*40),n.stroke()};h(r,r,1,1),h(e-r,r,-1,1),h(e-r,t-r,-1,-1),h(r,t-r,1,-1),n.strokeRect(r+10,r+10,e-(r+10)*2,t-(r+10)*2);break;case"Generic":const u=30;n.beginPath(),n.roundRect(r,r,e-r*2,t-r*2,u),n.stroke();break;default:n.strokeRect(r,r,e-r*2,t-r*2);break}n.restore()}const Al=[9109504,8388608,10824234,11674146,13458524,10361650,7212325,128,1644912,139,4734347,4620980,6266528,9062,1004218,25600,5597999,3050327,9419919,2263842,3497531,4873507,9127187,10506797,13789470,13468991,14596231,16113331,4798251,7294519,3100495,7372944,7833753,6908265,1842204,3556687,2631723,4915330,4734347,3092303,6113163,3152180],Ho={"Sci-Fi":["Orbitron","Roboto","Montserrat"],Fantasy:["Cormorant Garamond","Cinzel","Playfair Display"],Horror:["Creepster","Oswald","Anton"],Romance:["Great Vibes","Dancing Script","Lora"],History:["Crimson Text","Merriweather"],Mystery:["Courier Prime","Special Elite","Roboto Mono"],Biography:["Libre Baskerville","Lora","Georgia"],Philosophy:["EB Garamond","Cardo","Philosopher"],Travel:["Montserrat","Raleway","Ubuntu"],Art:["Jost","Hind","Raleway"],Classics:["EB Garamond","Cinzel","Playfair Display"],Children:["Comic Neue","Fredoka","Outfit"],Default:["Josefin Sans","Roboto","Outfit","Lato","Open Sans","Montserrat","Raleway","Ubuntu","Merriweather","Lora","Crimson Text","Cardo","Philosopher"]};async function J_(){const n=new Set(Object.values(Ho).flat()),e=[];n.forEach(t=>{e.push(document.fonts.load(`1em "${t}"`))}),console.log(`Preloading ${n.size} fonts for canvas...`),await Promise.all(e),console.log("All fonts loaded.")}function Qm(n,e,t,i,s){const r=i*.35,o=i*.12,a=[-Math.PI/2,-Math.PI/2-Math.PI*2/5*1,-Math.PI/2-Math.PI*2/5*2,-Math.PI/2-Math.PI*2/5*3,-Math.PI/2-Math.PI*2/5*4];n.save(),n.translate(e,t),a.forEach((l,c)=>{const h=Math.cos(l)*r,u=Math.sin(l)*r,f=Math.max(0,Math.min(1,s-c));eg(n,h,u,o,f)}),n.restore()}function eg(n,e,t,i,s){n.save(),n.translate(e,t),n.beginPath();const r=5,o=i,a=i/2;let l=Math.PI/2*3;const c=Math.PI/r;n.moveTo(0,0-o);for(let h=0;h<r;h++){let u=Math.cos(l)*o,f=Math.sin(l)*o;n.lineTo(u,f),l+=c,u=Math.cos(l)*a,f=Math.sin(l)*a,n.lineTo(u,f),l+=c}if(n.lineTo(0,0-o),n.closePath(),n.fillStyle="rgba(0,0,0,0.3)",n.fill(),s>0){n.save(),n.clip(),n.fillStyle="#FFD700";const h=i*2*s;n.fillRect(-i,-i,h,i*2),n.restore()}n.strokeStyle="#B8860B",n.lineWidth=1.5,n.stroke(),n.restore()}function tg(n,e,t,i,s,r="#F7F5E6"){const a=i*.05,l=(i-a*4)/5,c=l/2,h=e-i/2+c;n.save();for(let u=0;u<5;u++){const f=h+u*(l+a),d=Math.max(0,Math.min(1,s-u));ng(n,f,t,c,d,r)}n.restore()}function ng(n,e,t,i,s,r){n.save(),n.translate(e,t),n.beginPath();const o=5,a=i,l=i*.4;let c=Math.PI/2*3;const h=Math.PI/o;n.moveTo(0,0-a);for(let u=0;u<o;u++){let f=Math.cos(c)*a,d=Math.sin(c)*a;n.lineTo(f,d),c+=h,f=Math.cos(c)*l,d=Math.sin(c)*l,n.lineTo(f,d),c+=h}if(n.lineTo(0,0-a),n.closePath(),n.fillStyle="rgba(0,0,0,0.2)",n.fill(),s>0){n.save(),n.clip(),n.fillStyle=r;const u=i*2*s;n.fillRect(-i,-i,u,i*2),n.restore()}n.strokeStyle=r,n.lineWidth=1,n.stroke(),n.restore()}function ig(n){const e=n.title||"book";let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);const i=Math.abs(t)%Al.length;return new Je(Al[i])}function Tc(n){const t=((n.genre||"")+" "+(n.title||"")).toLowerCase();return t.includes("science fiction")||t.includes("sci-fi")||t.includes("space")||t.includes("robot")||t.includes("cyberpunk")||t.includes("alien")||t.includes("dune")?"Sci-Fi":t.includes("fantasy")||t.includes("dragon")||t.includes("magic")||t.includes("wizard")||t.includes("potter")?"Fantasy":t.includes("horror")||t.includes("ghost")||t.includes("dead")||t.includes("zombie")?"Horror":t.includes("mystery")||t.includes("thriller")||t.includes("crime")||t.includes("detective")||t.includes("murder")?"Mystery":t.includes("romance")||t.includes("love")||t.includes("kiss")?"Romance":t.includes("biography")||t.includes("memoir")||t.includes("autobiography")||t.includes("life of")||t.includes("diaries")?"Biography":t.includes("philosophy")||t.includes("psychology")||t.includes("thinking")||t.includes("logic")||t.includes("mind")||t.includes("wisdom")?"Philosophy":t.includes("travel")||t.includes("journey")||t.includes("voyage")||t.includes("trip")||t.includes("adventure")?"Travel":t.includes("art")||t.includes("design")||t.includes("painter")||t.includes("architecture")?"Art":t.includes("history")||t.includes("historical")||t.includes("war")?"History":t.includes("classic")||t.includes("literature")||t.includes("homer")||t.includes("iliad")||t.includes("odyssey")?"Classics":t.includes("children")?"Children":"Default"}function sg(n){let e="Default";typeof n=="object"?e=Tc(n):typeof n=="string"&&(e=n);const t=Ho[e]||Ho.Default;return t[Math.floor(Math.random()*t.length)]}function Hr(n,e){if(!n)return"#000000";n=n.replace(/^\s*#|\s*$/g,""),n.length===3&&(n=n.replace(/(.)/g,"$1$1"));let t=parseInt(n.substr(0,2),16),i=parseInt(n.substr(2,2),16),s=parseInt(n.substr(4,2),16);const r=Math.floor(2.55*e);return t=Math.min(255,Math.max(0,t+r)),i=Math.min(255,Math.max(0,i+r)),s=Math.min(255,Math.max(0,s+r)),"#"+t.toString(16).padStart(2,"0")+i.toString(16).padStart(2,"0")+s.toString(16).padStart(2,"0")}function rg(n){n=n.replace(/^\s*#|\s*$/g,""),n.length===3&&(n=n.replace(/(.)/g,"$1$1"));const e=parseInt(n.substr(0,2),16)/255,t=parseInt(n.substr(2,2),16)/255,i=parseInt(n.substr(4,2),16)/255,s=[e,t,i].map(function(r){return r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)});return s[0]*.2126+s[1]*.7152+s[2]*.0722}function og(n,e,t,i){if(n.save(),i==="Leather"){n.globalAlpha=.1,n.fillStyle="#000";for(let s=0;s<1e3;s++){const r=Math.random()*3+1;n.beginPath(),n.arc(Math.random()*e,Math.random()*t,r,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(0,0,0,0.1)",n.beginPath();for(let s=0;s<20;s++)n.moveTo(Math.random()*e,Math.random()*t),n.lineTo(Math.random()*e,Math.random()*t);n.stroke()}else if(i==="Cloth"){n.globalAlpha=.15,n.fillStyle="#111";for(let s=0;s<t;s+=2)s%4===0&&n.fillRect(0,s,e,1);for(let s=0;s<e;s+=2)s%4===0&&n.fillRect(s,0,1,t)}else if(i==="Buckram"){n.globalAlpha=.2,n.fillStyle="#000";for(let s=0;s<t;s+=3)n.fillRect(0,s,e,1);for(let s=0;s<e;s+=3)n.fillRect(s,0,1,t);n.globalAlpha=.1;for(let s=0;s<300;s++)n.fillRect(Math.random()*e,Math.random()*t,2,2)}else if(i==="Paper"){n.globalAlpha=.08,n.fillStyle="#222";for(let s=0;s<800;s++)n.fillRect(Math.random()*e,Math.random()*t,1,1)}n.restore()}function Ac(n){const e=["Leather","Cloth","Buckram","Paper","Leather","Cloth"],t=(n.title||"").length+(parseInt(n.year)||0);return e[t%e.length]}function Rl(n,e,t,i,s=null,r=null){const o=document.createElement("canvas"),a=n/e,l=1024,c=Math.ceil(l*a);o.width=c,o.height=l;const h=o.getContext("2d"),u=new Date().getFullYear(),f=parseInt(i.year),d=isNaN(f)?0:Math.max(0,u-f),g=Math.min(d,100)/100,v=h.createLinearGradient(0,0,c,0),_="#"+t.getHexString();v.addColorStop(0,Hr(_,-40)),v.addColorStop(.2,_),v.addColorStop(.5,Hr(_,20)),v.addColorStop(.8,_),v.addColorStop(1,Hr(_,-40)),h.fillStyle=v,h.fillRect(0,0,c,l);const m=s||Ac(i);og(h,c,l,m);const y=Tc(i),x=rg(_)<.5,w=x?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.4)",E=x?`rgba(255, 255, 255, ${.9-g*.4})`:`rgba(0, 0, 0, ${.8-g*.4})`;h.save(),h.strokeStyle=w,h.fillStyle=w,h.lineWidth=Math.max(2,c*.05);const C=c/2,M=Math.min(60,c*.85),b=50,R=c*.5,U=b+M/2+30+R/2,N=l-c*.6,k=i.average_rating||0;if(k>0&&Qm(h,C,b,M,k),y==="Sci-Fi")h.beginPath(),h.arc(C,U,R/2,0,Math.PI*2),h.stroke(),h.beginPath(),h.arc(C,N,R/2,0,Math.PI*2),h.stroke(),h.beginPath(),h.moveTo(C,U+R/2),h.lineTo(C,N-R/2),h.stroke();else if(y==="Fantasy")h.beginPath(),h.moveTo(C,U-R/2),h.lineTo(C+R/2,U),h.lineTo(C,U+R/2),h.lineTo(C-R/2,U),h.closePath(),h.stroke(),h.beginPath(),h.moveTo(C,N-R/2),h.lineTo(C+R/2,N),h.lineTo(C,N+R/2),h.lineTo(C-R/2,N),h.closePath(),h.stroke();else if(y==="Mystery")h.beginPath(),h.arc(C,U,R/2,0,Math.PI*2),h.stroke(),h.beginPath(),h.arc(C,U,R/4,0,Math.PI*2),h.fill(),h.beginPath(),h.arc(C,N,R/2,0,Math.PI*2),h.stroke(),h.beginPath(),h.arc(C,N,R/4,0,Math.PI*2),h.fill();else if(y==="Horror")h.beginPath(),h.moveTo(C-R/2,U-R/2),h.lineTo(C,U+R/4),h.lineTo(C+R/2,U-R/2),h.stroke(),h.beginPath(),h.arc(C,N,R/3,0,Math.PI*2),h.fill();else if(y==="Romance")h.beginPath(),h.arc(C,U,R/3,0,Math.PI*2),h.stroke(),h.beginPath(),h.arc(C,N,R/3,0,Math.PI*2),h.stroke();else if(y==="History"){const Z=R/3;h.beginPath(),h.moveTo(c*.2,U-Z),h.lineTo(c*.8,U-Z),h.moveTo(c*.2,U+Z),h.lineTo(c*.8,U+Z),h.stroke(),h.beginPath(),h.moveTo(c*.2,N-Z),h.lineTo(c*.8,N-Z),h.moveTo(c*.2,N+Z),h.lineTo(c*.8,N+Z),h.stroke()}else y==="Biography"?(h.beginPath(),h.ellipse(C,U,R/2,R/1.5,0,0,Math.PI*2),h.stroke(),h.beginPath(),h.ellipse(C,N,R/2,R/1.5,0,0,Math.PI*2),h.stroke()):y==="Philosophy"?(h.strokeRect(C-R/2,U-R/2,R,R),h.strokeRect(C-R/4,U-R/4,R/2,R/2),h.strokeRect(C-R/2,N-R/2,R,R),h.strokeRect(C-R/4,N-R/4,R/2,R/2)):y==="Travel"?(h.beginPath(),h.moveTo(C,U-R/2),h.lineTo(C+R/4,U),h.lineTo(C,U+R/2),h.lineTo(C-R/4,U),h.closePath(),h.stroke(),h.beginPath(),h.moveTo(C,N-R/2),h.lineTo(C+R/4,N),h.lineTo(C,N+R/2),h.lineTo(C-R/4,N),h.closePath(),h.stroke()):y==="Art"?(h.fillStyle="rgba(255,255,255,0.3)",h.fillRect(C-R/2,U-R/2,R/2,R/2),h.strokeRect(C,U,R/2,R/2),h.strokeRect(C-R/2,N-R/2,R,R)):y==="Classics"?(h.beginPath(),h.moveTo(c*.2,U),h.lineTo(c*.2,U-R/3),h.lineTo(c*.5,U-R/3),h.stroke(),h.beginPath(),h.moveTo(c*.8,U),h.lineTo(c*.8,U-R/3),h.lineTo(c*.5,U-R/3),h.stroke(),h.beginPath(),h.moveTo(c*.2,N),h.lineTo(c*.2,N+R/3),h.lineTo(c*.5,N+R/3),h.stroke(),h.beginPath(),h.moveTo(c*.8,N),h.lineTo(c*.8,N+R/3),h.lineTo(c*.5,N+R/3),h.stroke()):(h.fillStyle="rgba(255,255,255,0.2)",h.fillRect(c*.2,U,c*.6,c*.1),h.fillRect(c*.2,N,c*.6,c*.1));h.fillStyle="rgba(0,0,0,0.2)";for(let Z=1;Z<5;Z++){const _e=l/5*Z;h.fillRect(0,_e-2,c,4)}if(h.restore(),r){const Z=c*.1,_e=c-Z*2,Ae=r.width/r.height;let pe=_e,ze=pe/Ae;ze>l*.2&&(ze=l*.2,pe=ze*Ae);const rt=(c-pe)/2,Ge=l-ze-Z;h.save(),h.shadowColor="rgba(0,0,0,0.5)",h.shadowBlur=4,h.shadowOffsetY=2,h.drawImage(r,rt,Ge,pe,ze),h.lineWidth=1,h.strokeStyle="rgba(255,255,255,0.3)",h.strokeRect(rt,Ge,pe,ze),h.restore()}if(d>0&&(h.fillStyle=`rgba(40, 30, 15, ${.1+g*.7})`,h.fillRect(0,0,c,l),d>5)){h.save(),h.globalAlpha=.2+g*.4,h.fillStyle="#111";for(let Z=0;Z<20+g*50;Z++){const _e=Math.random()*c,Ae=Math.random()*l;h.fillRect(_e,Ae,Math.random()*c*.3,1+Math.random()*2)}h.restore()}const H=sg(y);h.fillStyle=E,h.textAlign="center",h.textBaseline="middle";let z=i.title||"Unknown";const W=[":","-","–","("];for(const Z of W)if(z.includes(Z)){z=z.split(Z)[0].trim();break}const J=z.split(" "),fe=[70,60,55,50,45,40,35,30];let ie=30,ce=[z];const Ne=l*.85;let Ie=3;const tt=c/l;tt<.18?Ie=1:tt<.3&&(Ie=2);for(const Z of fe){const _e=Z*1.2,Ae=Math.floor(c/_e);if(!(Ae<1)){if(Ae>=1&&Wr(h,z,Z,H)<=Ne){ie=Z,ce=[z];break}if(Ae>=2){const pe=Cl(J,2);if(pe.length<=2&&pe.every(ze=>Wr(h,ze,Z,H)<=Ne)){ie=Z,ce=pe;break}}if(Ae>=3&&Ie>=3){const pe=Cl(J,3);if(pe.length<=3&&pe.every(ze=>Wr(h,ze,Z,H)<=Ne)){ie=Z,ce=pe;break}}}}i.fontName=H,h.font=`bold ${ie}px "${H}", sans-serif`;const st=ie*1.2;h.save(),h.translate(c/2,l/2),h.rotate(-Math.PI/2),ce.forEach((Z,_e)=>{const pe=-((ce.length-1)*st/2)+_e*st;h.fillText(Z,0,pe)}),h.restore();const j=new Qs(o);return j.colorSpace=Pt,j.anisotropy=16,j}function Wr(n,e,t,i){return n.font=`bold ${t}px "${i}", sans-serif`,n.measureText(e).width}function Cl(n,e){const t=n.join(" ").length,i=Math.ceil(t/e);let s=[],r="";for(let o=0;o<n.length;o++){const a=n[o],l=r?r+" "+a:a;l.length>i&&r.length>0?(s.push(r),r=a):r=l}for(r&&s.push(r);s.length>e;){const o=s.pop();s[s.length-1]+=" "+o}return s}function ag(n,e,t="Leather",i=0,s){const r=document.createElement("canvas");r.width=512,r.height=800;const o=r.getContext("2d"),a=typeof e=="string"?e:"#"+e.getHexString();wc(o,r.width,r.height,t,a),Ec(o,r.width,r.height,s,"#ebd5b3");const l=40;let c=150;const{mainTitle:h}=Cc(n.title),u=Pc(n.title);o.textAlign="center";const f=r.width-l*2,d=60,g=d+10,v=ug(o,h,f,`bold ${d}px "${u}"`);o.font=`bold ${d}px "${u}"`,v.forEach(y=>{o.fillStyle="rgba(255, 255, 255, 0.4)",o.fillText(y,r.width/2+2,c+2),o.fillStyle="rgba(0, 0, 0, 0.5)",o.fillText(y,r.width/2-1,c-1),o.fillStyle="#e6c88c",o.fillText(y,r.width/2,c),o.strokeStyle="rgba(0,0,0,0.3)",o.lineWidth=1,o.strokeText(y,r.width/2,c),c+=g}),o.font="italic 40px Times New Roman",o.fillStyle="#eee",o.lineWidth=3;const _=r.height-150;n.author&&(o.strokeText("by "+n.author,r.width/2,_),o.fillText("by "+n.author,r.width/2,_)),i>0&&Rc(o,r.width,r.height,i);const m=new Qs(r);return m.colorSpace=Pt,m}function lg(n,e=0){const t=document.createElement("canvas");t.width=512,t.height=512;const i=t.getContext("2d"),s=t.width,r=t.height;i.fillStyle=n,i.fillRect(0,0,s,r);for(let l=0;l<s;l+=1){const c=(Math.random()-.5)*.1;i.fillStyle=`rgba(0,0,0,${.05+c})`,i.fillRect(l,0,1,r)}for(let l=0;l<s;l+=Math.random()*2+1)i.fillStyle=`rgba(0,0,0,${.15+Math.random()*.1})`,i.fillRect(l,0,1,r);for(let l=0;l<s;l+=15+Math.random()*10)i.fillStyle="rgba(50, 30, 10, 0.3)",i.fillRect(l,0,2,r);i.fillStyle="rgba(0,0,0,0.03)";for(let l=0;l<1e3;l++)i.fillRect(Math.random()*s,Math.random()*r,2,1);const o=i.createLinearGradient(0,0,s,0);o.addColorStop(0,"rgba(50,40,30,0.3)"),o.addColorStop(.1,"rgba(50,40,30,0.05)"),o.addColorStop(.5,"rgba(50,40,30,0.0)"),o.addColorStop(.9,"rgba(50,40,30,0.05)"),o.addColorStop(1,"rgba(50,40,30,0.3)"),i.fillStyle=o,i.fillRect(0,0,s,r);const a=new Qs(t);return a.colorSpace=Pt,a}function cg(n,e,t="Leather",i=0,s=300,r="#F7F5E6",o){const a=document.createElement("canvas");a.width=512,a.height=800;const l=a.getContext("2d"),c=typeof e=="string"?e:"#"+e.getHexString(),h=typeof r=="string"?r:"#"+r.getHexString();wc(l,a.width,a.height,t,c),l.fillStyle="rgba(0, 0, 0, 0.4)",l.fillRect(0,0,a.width,a.height),Ec(l,a.width,a.height,o,"#ebd5b3");const u=40,f=a.width-u*2;let d=80;const g=Pc(n.title),{mainTitle:v,subTitle:_}=Cc(n.title);l.fillStyle="white",l.font=`bold 45px "${g}"`,l.textAlign="center";const m=Xr(l,v,a.width/2,d,f,55);if(d+=m*55+10,_){l.font="italic 30px Arial",l.fillStyle="#ddd";const w=Xr(l,_,a.width/2,d,f,35);d+=w*35+20}else d+=20;l.font="italic 30px Arial",l.fillStyle="#ddd",n.author&&l.fillText("by "+n.author,a.width/2,d),d+=60,l.strokeStyle="rgba(255,255,255,0.3)",l.lineWidth=1,l.beginPath(),l.moveTo(u+20,d),l.lineTo(a.width-u-20,d),l.stroke(),d+=50;const y=n.year;y&&(l.font="22px Arial",l.fillStyle="#aaa",l.fillText(`Published in ${y}`,a.width/2,d),d+=60);const p=n.average_rating||0;if(p>0&&(tg(l,a.width/2,d+20,200,p,h),d+=70,l.font="bold 18px Arial",l.fillStyle=h,l.textAlign="center",l.fillText(`${p}/5`,a.width/2,d),d+=40),n.genre){const w=n.genre.replace(/;/g,", ");l.font="italic 20px Arial",l.fillStyle="#ccc",Xr(l,w,a.width/2,d,a.width-80,26),d+=50}if(l.fillStyle="#bbb",l.font="bold 24px Courier New",l.fillText((parseInt(s)||"?")+" Pages",a.width/2,a.height-110),n.date_read){l.strokeStyle="rgba(255,255,255,0.2)",l.lineWidth=1,l.beginPath(),l.moveTo(u+40,a.height-85),l.lineTo(a.width-u-40,a.height-85),l.stroke(),l.fillStyle="#fff",l.font="italic 20px Arial";const w=hg(n.date_read);l.fillText(`Finished: ${w}`,a.width/2,a.height-50)}i>0&&Rc(l,a.width,a.height,i);const x=new Qs(a);return x.colorSpace=Pt,x}function Rc(n,e,t,i,s=!1){if(i<=0)return;const r=Math.min(1,i/80);n.save();const o=s?10:40,a=r*.7;if(a>.05){const h=n.createRadialGradient(e/2,t/2,t/3,e/2,t/2,t/1.5);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,`rgba(60,40,20,${a})`),n.fillStyle=h,n.fillRect(0,0,e,t),n.lineWidth=o,n.strokeStyle=`rgba(40,20,10,${a})`,n.strokeRect(0,0,e,t)}const l=Math.floor(r*(s?10:50));n.globalCompositeOperation="overlay",n.strokeStyle=`rgba(255,255,255,${.1+r*.2})`,n.lineWidth=1;for(let h=0;h<l;h++){n.beginPath();const u=Math.random()*e,f=Math.random()*t,d=10+Math.random()*50,g=Math.random()*Math.PI*2;n.moveTo(u,f),n.lineTo(u+Math.cos(g)*d,f+Math.sin(g)*d),n.stroke()}const c=Math.floor(r*(s?3:10));n.strokeStyle=`rgba(20,10,5,${.2+r*.3})`,n.lineWidth=2;for(let h=0;h<c;h++){n.beginPath();const u=Math.random()*e,f=Math.random()*t,d=20+Math.random()*80,g=u+Math.random()*20-10,v=f+d;n.moveTo(u,f),n.quadraticCurveTo(u+Math.random()*20-10,f+d/2,g,v),n.stroke()}if(r>.2){const h=Math.floor(e*t*1e-4*r);n.fillStyle="rgba(200,190,180,0.3)";for(let u=0;u<h;u++){const f=Math.random()*e,d=Math.random()*t,g=Math.random()*2;n.fillRect(f,d,g,g)}}if(r>.25){const h=(r-.2)*4,u="rgba(210, 200, 185, 0.9)";n.fillStyle=u;const f=(v,_,m,y)=>{n.save(),n.beginPath();const p=12;for(let E=0;E<=p;E++){const C=E/p*Math.PI*2,I=Math.random()*.6+.4,M=v+Math.cos(C)*m*I,b=_+Math.sin(C)*y*I;E===0?n.moveTo(M,b):n.lineTo(M,b)}n.clip(),n.fillStyle=u,n.fill();const x=Math.floor(m*y*.5);n.fillStyle="rgba(100, 80, 60, 0.4)";for(let E=0;E<x;E++){const C=v+(Math.random()-.5)*2*m,I=_+(Math.random()-.5)*2*y;n.fillRect(C,I,2,2)}n.strokeStyle="rgba(255, 255, 255, 0.3)",n.lineWidth=1;const w=5;for(let E=0;E<w;E++){n.beginPath();const C=v+(Math.random()-.5)*m,I=_+(Math.random()-.5)*y;n.moveTo(C,I),n.lineTo(C+(Math.random()-.5)*10,I+(Math.random()-.5)*10),n.stroke()}n.restore()},d=25+r*60;Math.random()<h&&f(0,0,d,d),Math.random()<h&&f(e,0,d,d),Math.random()<h&&f(e,t,d,d),Math.random()<h&&f(0,t,d,d);const g=Math.floor(r*30);for(let v=0;v<g;v++){const _=Math.floor(Math.random()*4),m=10+Math.random()*20;let y,p;_===0?(y=Math.random()*e,p=0):_===1?(y=e,p=Math.random()*t):_===2?(y=Math.random()*e,p=t):(y=0,p=Math.random()*t),f(y,p,m,m)}}n.restore()}function Cc(n){if(!n)return{mainTitle:"",subTitle:""};let e=n,t="";const i=n.indexOf(":"),s=n.indexOf("(");let r=-1,o=!1;return i>-1&&s>-1?i<s?r=i:(r=s,o=!0):i>-1?r=i:s>-1&&(r=s,o=!0),r>-1&&(e=n.substring(0,r).trim(),t=n.substring(r+1).trim(),o&&t.endsWith(")")&&(t=t.slice(0,-1).trim())),{mainTitle:e,subTitle:t}}function Pc(n){const e=["Comic Neue","Share Tech Mono","Orbitron","Audiowide","Jolly Lodger","Cinzel Decorative","Oswald","Henny Penny","MedievalSharp","Special Elite","Lora","Playfair Display","Roboto Slab","Merriweather","Lobster","Pacifico","Bangers","Monoton","Creepster","Rye","Amatic SC"];if(!n)return e[0];let t=0;for(let s=0;s<n.length;s++)t=n.charCodeAt(s)+((t<<5)-t);const i=Math.abs(t)%e.length;return e[i]}function hg(n){if(!n)return"";try{const e=new Date(n);return isNaN(e.getTime())?n:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function ug(n,e,t,i){n.font=i;const s=e.split(" "),r=[];let o="";for(let a=0;a<s.length;a++){const l=o+s[a]+" ";n.measureText(l).width>t&&a>0?(r.push(o),o=s[a]+" "):o=l}return r.push(o),r}function Xr(n,e,t,i,s,r,o=!1){const a=e.split(" ");let l="",c="",h=1;for(let u=0;u<a.length;u++)c=l+a[u]+" ",n.measureText(c).width>s&&u>0?(o&&n.strokeText(l,t,i),n.fillText(l,t,i),l=a[u]+" ",i+=r,h++):l=c;return o&&n.strokeText(l,t,i),n.fillText(l,t,i),h}const Pl=[{name:"Leather",roughness:.6,metalness:.1},{name:"Fabric",roughness:.9,metalness:.05},{name:"Glossy",roughness:.2,metalness:.15},{name:"Matte",roughness:.8,metalness:0},{name:"Old Paper",roughness:.95,metalness:0},{name:"Metallic",roughness:.3,metalness:.8},{name:"Marble",roughness:.1,metalness:.05},{name:"Cyberpunk",roughness:.4,metalness:.6},{name:"Canvas",roughness:1,metalness:0},{name:"Velvet",roughness:.9,metalness:.1},{name:"Wood",roughness:.8,metalness:0},{name:"Stone",roughness:.9,metalness:.1},{name:"Holographic",roughness:.2,metalness:.9},{name:"Denim",roughness:1,metalness:0},{name:"Carbon Fiber",roughness:.4,metalness:.5},{name:"Mosaic",roughness:.3,metalness:.2},{name:"Knit",roughness:1,metalness:0},{name:"Scales",roughness:.4,metalness:.3},{name:"Circuit",roughness:.6,metalness:.7},{name:"Watercolor",roughness:1,metalness:0},{name:"Geometric",roughness:.5,metalness:.1},{name:"Floral",roughness:.7,metalness:0},{name:"Confetti",roughness:.4,metalness:.1},{name:"Plaid",roughness:.9,metalness:0},{name:"Leopard",roughness:.6,metalness:0},{name:"Zebra",roughness:.6,metalness:0},{name:"Polka Dot",roughness:.5,metalness:.1},{name:"Camouflage",roughness:.9,metalness:0},{name:"Neon",roughness:.2,metalness:.5},{name:"Ice",roughness:.1,metalness:.1},{name:"Damask",roughness:.6,metalness:.1},{name:"Hexagon",roughness:.3,metalness:.4},{name:"Cross Stitch",roughness:1,metalness:0},{name:"Brick",roughness:.9,metalness:0},{name:"Wave",roughness:.5,metalness:.2},{name:"Gradient",roughness:.4,metalness:.1},{name:"Cork",roughness:1,metalness:0},{name:"Crackle",roughness:.8,metalness:.1},{name:"Herringbone",roughness:.7,metalness:.1},{name:"Splatter",roughness:.6,metalness:0},{name:"Paisley",roughness:.7,metalness:.1},{name:"Chevron",roughness:.5,metalness:.1},{name:"Galaxy",roughness:.3,metalness:.8},{name:"Grunge",roughness:1,metalness:0},{name:"Bamboo",roughness:.6,metalness:0},{name:"Clouds",roughness:.9,metalness:0},{name:"Lace",roughness:.8,metalness:0},{name:"Blueprint",roughness:.9,metalness:0},{name:"Tie Dye",roughness:.6,metalness:0},{name:"Terrazzo",roughness:.4,metalness:.1},{name:"Foil",roughness:.2,metalness:.9},{name:"Linen",roughness:.9,metalness:0},{name:"Kraft",roughness:1,metalness:0},{name:"Sandpaper",roughness:1,metalness:0},{name:"Rubber",roughness:.9,metalness:0},{name:"Clay",roughness:.9,metalness:0},{name:"Silk",roughness:.4,metalness:.4},{name:"Obsidian",roughness:.1,metalness:.8},{name:"Concrete",roughness:.9,metalness:.1},{name:"Distressed",roughness:.8,metalness:.1},{name:"Argyle",roughness:.9,metalness:0},{name:"Houndstooth",roughness:.9,metalness:0},{name:"Stars",roughness:.4,metalness:.6},{name:"Sunburst",roughness:.3,metalness:.4},{name:"Checkerboard",roughness:.5,metalness:.1},{name:"Stripes",roughness:.6,metalness:.1},{name:"Diamonds",roughness:.4,metalness:.2},{name:"Triangles",roughness:.5,metalness:.1}],Il=["Titled","OrnateCorners","Dotted","SolidThick","DoubleFrame","Minimal","Standard","Classic","SciFi","Business","Fantasy","Generic"];function Q_(n){const{title:e,author:t,year:i,pages:s,rating:r,cover_url:o}=n,a=new Date().getFullYear(),l=parseInt(i)||a,c=Math.max(0,a-l),h=[{age:0,pageColor:16645629,roughnessBonus:0,metalFactor:1,dustMix:0},{age:5,pageColor:16579577,roughnessBonus:.02,metalFactor:.95,dustMix:.01},{age:10,pageColor:16513520,roughnessBonus:.05,metalFactor:.9,dustMix:.02},{age:20,pageColor:16250342,roughnessBonus:.1,metalFactor:.8,dustMix:.05},{age:30,pageColor:16051904,roughnessBonus:.2,metalFactor:.7,dustMix:.1},{age:40,pageColor:15787660,roughnessBonus:.3,metalFactor:.6,dustMix:.2},{age:50,pageColor:15128208,roughnessBonus:.4,metalFactor:.5,dustMix:.3},{age:60,pageColor:14596231,roughnessBonus:.5,metalFactor:.4,dustMix:.4},{age:80,pageColor:13808780,roughnessBonus:.65,metalFactor:.2,dustMix:.5},{age:100,pageColor:9132587,roughnessBonus:.8,metalFactor:0,dustMix:.65}];let u=h[0],f=h[h.length-1];for(let Ee=0;Ee<h.length-1;Ee++)if(c>=h[Ee].age&&c<=h[Ee+1].age){u=h[Ee],f=h[Ee+1];break}let d=0;f.age!==u.age&&(d=(c-u.age)/(f.age-u.age)),d=Math.min(Math.max(d,0),1);const g=new Je(u.pageColor).lerp(new Je(f.pageColor),d),v=u.roughnessBonus+(f.roughnessBonus-u.roughnessBonus)*d,_=u.metalFactor+(f.metalFactor-u.metalFactor)*d,m=u.dustMix+(f.dustMix-u.dustMix)*d,y=.35*2.25,p=.25*2.25;let w=(parseInt(s)||300)*45e-5;const E=Math.min(Math.max(w,.04),.4),C=.008*1.5,I=.01*1.5,M=new le,b=ig(n),R=Ac(n);let U="Matte";R==="Leather"?U="Leather":R==="Cloth"?U="Fabric":R==="Buckram"?U="Canvas":R==="Paper"&&(U="Matte");const N=Pl.find(Ee=>Ee.name===U)||Pl[0];let k="Standard";if(e){let Ee=0;for(let Se=0;Se<e.length;Se++)Ee=e.charCodeAt(Se)+((Ee<<5)-Ee);k=Il[Math.abs(Ee)%Il.length]}const H=new Je(5921354),z=b.clone().lerp(H,m),W=Math.min(1,N.roughness+v),J=Math.max(0,N.metalness*_);let ie=new O({color:z,roughness:W,metalness:J}).clone();const ce=ag(n,z.getStyle(),R,c,k);ie=new O({map:ce,roughness:W,metalness:J});const Ne=Rl(E,y,z,n,R),Ie=new O({map:Ne,roughness:W,metalness:J}),tt=cg(n,z.getStyle(),R,c,s,g,k),st=new O({map:tt,roughness:W,metalness:J}),j=lg(g.getStyle(),c),Z=new O({map:j,roughness:.9,metalness:0}),_e=new Ei(p,y,C,4,.01),Ae=new T(_e,ie);Ae.position.z=E/2,Ae.castShadow=!0,Ae.receiveShadow=!0,M.add(Ae);const pe=new Ei(E,y,C,4,.01),ze=new T(pe,Ie);ze.position.x=-p/2,ze.rotation.y=-Math.PI/2,ze.castShadow=!0,ze.receiveShadow=!0,M.add(ze);const rt=new Ei(p,y,C,4,.01),Ge=new T(rt,st);Ge.position.z=-E/2,Ge.rotation.y=Math.PI,Ge.castShadow=!0,Ge.receiveShadow=!0,M.add(Ge);const Q=p-I,se=y-.02*1.5,te=E-C*2,Me=new Ei(Q,se,te,4,.005),D=new T(Me,Z);return D.position.x=0,D.position.x=I*.5,D.castShadow=!0,D.receiveShadow=!0,M.add(D),M.userData={...n,isTextureLoaded:!1,loadTexture:()=>{if(M.userData.isTextureLoaded)return;const Ee=n.cover_urls&&n.cover_urls.length>0?n.cover_urls:o?[o]:[];if(Ee.length===0)return;M.userData.isTextureLoaded=!0;const Se=new Ou().setCrossOrigin("anonymous");let Be=0;const ue=S=>{Se.load(S,F=>{if(F.image.width<10||F.image.height<10){console.warn(`Cover image for ${e} is too small (${F.image.width}x${F.image.height}), trying next...`),P();return}F.colorSpace=Pt;const q=Math.min(1,.5+v),K=Ae.material.clone();K.map=F,K.roughness=q,K.metalness=0,c>40&&K.color.setHex(16777200),c>80&&K.color.lerp(new Je(12628112),.2),Ae.material=K,Ae.material.needsUpdate=!0;const $=Rl(E,y,z,n,R,F.image),Pe=ze.material.clone();Pe.map=$,ze.material=Pe,ze.material.needsUpdate=!0},void 0,F=>{console.warn(`Texture load failed for ${e} (${S})`,F),P()})},P=()=>{Be++,Be<Ee.length?ue(Ee[Be]):console.warn(`All cover URLs failed for ${e}`)};ue(Ee[0])}},{mesh:M,thickness:E,height:y,width:p}}const Dl=[65535,16711935,16776960,65280,16729344,2003199,16716947,9699539,64154,16766720];function Mn(){return Dl[Math.floor(Math.random()*Dl.length)]}new O({roughness:.4,metalness:.1});function dg(){const n=new le,e=Mn(),t=new O({color:e,emissive:e,emissiveIntensity:.5,roughness:.2}),i=new T(new ke(.2,16,16),t);n.add(i);const s=new O({color:8947848,roughness:.4,metalness:.8});for(let r=0;r<3;r++){const o=new le,a=new T(new nt(.6,.01,8,32),s);o.add(a);const l=new T(new ke(.05,8,8),t);l.position.x=.6,o.add(l),o.rotation.x=Math.random()*Math.PI,o.rotation.y=Math.random()*Math.PI,n.add(o)}return n}function fg(){const n=new le,e=Mn(),t=Mn(),i=new O({color:e,roughness:.3}),s=new O({color:t,roughness:.3}),r=new O({color:16777215,roughness:.5}),o=.3,a=1,l=1,c=10;for(let h=0;h<=c;h++){const u=h/c,f=u*Math.PI*2*l,d=(u-.5)*a,g=Math.cos(f)*o,v=Math.sin(f)*o,_=Math.cos(f+Math.PI)*o,m=Math.sin(f+Math.PI)*o,y=new T(new ke(.08,12,12),i);y.position.set(g,d,v),n.add(y);const p=new T(new ke(.08,12,12),s);p.position.set(_,d,m),n.add(p);const x=o*2,w=new T(new ne(.02,.02,x,4),r);w.position.y=d,w.rotation.y=-f,w.rotation.z=Math.PI/2,w.rotation.y=-f,n.add(w)}return n}function pg(){const n=new le,e=Mn(),t=new O({color:16777215,transparent:!0,opacity:.3,roughness:.1,metalness:.9}),i=new O({color:e,emissive:e,emissiveIntensity:.6,transparent:!0,opacity:.8});new yt(.35,.6,16,1,!0);const s=new T(new yt(.35,.6,16),t);n.add(s);const r=new T(new ne(.1,.1,.4,16),t);r.position.y=.4,n.add(r);const o=new T(new yt(.3,.5,16),i);o.position.y=-.05,n.add(o);const a=new T(new nt(.1,.03,4,16),t);a.rotation.x=Math.PI/2,a.position.y=.6,n.add(a);for(let l=0;l<3;l++){const c=new T(new ke(.05,8,8),i);c.position.set((Math.random()-.5)*.2,.3+Math.random()*.3,(Math.random()-.5)*.2),n.add(c)}return n}function mg(){const n=new le,e=Mn(),t=new O({color:e,emissive:e,emissiveIntensity:.2,roughness:.1,metalness:.1,transparent:!0,opacity:.9,flatShading:!0}),i=new T(new ne(0,.15,.9,6),t);i.position.y=.1,n.add(i);for(let s=0;s<5;s++){const r=.3+Math.random()*.4,o=new T(new ne(0,.08,r,5),t);o.position.y=-.3+r/2;const a=Math.PI*2/5*s;o.position.x=Math.sin(a)*.15,o.position.z=Math.cos(a)*.15,o.rotation.x=(Math.random()-.5)*.5,o.rotation.z=(Math.random()-.5)*.5,n.add(o)}return n}function gg(){const n=new le,e=new O({color:13421772,metalness:.9,roughness:.2}),t=Mn(),i=new O({color:t,roughness:.6}),s=new O({color:16766720,metalness:.8}),r=new T(new ne(.02,.15,1.4,4),e);r.scale.z=.1,r.position.y=.5,n.add(r);const o=new T(new he(.6,.08,.1),s);o.position.y=-.2,n.add(o);const a=new T(new ke(.08),s);a.position.set(-.3,-.2,0),n.add(a);const l=new T(new ke(.08),s);l.position.set(.3,-.2,0),n.add(l);const c=new T(new ne(.05,.05,.35,8),i);c.position.y=-.4,n.add(c);const h=new T(new us(.12),s);return h.position.y=-.6,n.add(h),n}function _g(){const n=new le,e=Mn(),t=new O({color:e,metalness:.4,roughness:.4}),i=new O({color:11184810,metalness:.8,roughness:.3}),s=new O({color:16766720,metalness:.9,roughness:.2}),r=new T(new ke(.6,32,16,0,Math.PI*2,0,Math.PI*.25),t);r.rotation.x=-Math.PI/2,r.scale.z=.5,n.add(r);const o=new T(new nt(.5,.03,8,32),i);o.scale.set(.85,.85,1),o.position.z=.15,n.add(o);const a=new T(new ke(.15,16,16),s);return a.position.z=.2,a.scale.z=.5,n.add(a),n}function xg(){const n=new le,e=new O({color:16766720,metalness:1,roughness:.3}),t=new T(new ne(.3,.3,.05,32),e);t.rotation.x=Math.PI/2,n.add(t);const i=new T(new nt(.28,.02,8,32),e);i.position.z=.025,n.add(i);const s=i.clone();s.position.z=-.025,n.add(s);const r=new T(new he(.04,.3,.01),e);r.position.z=.03,n.add(r);const o=new T(new nt(.1,.02,4,16,Math.PI*1.5),e);return o.position.set(0,.05,.03),o.rotation.z=Math.PI/4,n.add(o),n}function vg(){const n=new le,e=new O({color:6044193,roughness:.6,metalness:.1}),t=new O({color:14540253,metalness:.8,roughness:.2}),i=new T(new he(.6,.45,.15),e);n.add(i);const s=new he(.1,.1,.16);[[-.26,-.18],[.26,-.18],[-.26,.18],[.26,.18]].forEach(l=>{const c=new T(s,t);c.position.set(l[0],l[1],0),n.add(c)});const o=new nt(.08,.02,4,8,Math.PI),a=new T(o,e);return a.position.y=.23,n.add(a),n}function Mg(){const n=new le;for(let s=0;s<4;s++){const r=.2+s*.15,o=s===3?65280:4474111,a=new O({color:o,roughness:.2}),l=new T(new he(.1,r,.05),a);l.position.x=(s-1.5)*.15,l.position.y=r/2-.25,n.add(l)}const e=new O({color:16711680,emissive:5570560}),t=new T(new he(.6,.02,.02),e);t.rotation.z=Math.PI/6,t.position.set(0,0,.05),n.add(t);const i=new T(new yt(.05,.1,4),e);return i.position.set(.25,.15,.05),i.rotation.z=-Math.PI/3,n.add(i),n}function Sg(){const n=new le,e=new O({color:14540253,metalness:.8,roughness:.3}),t=new O({color:1118617,metalness:.5,roughness:.2,emissive:68}),i=new T(new ne(.15,.15,.4,8),e);i.rotation.z=Math.PI/2,n.add(i);const s=new T(new ke(.15,16,8,0,Math.PI*2,0,.6),e);s.position.y=.15,s.rotation.x=-Math.PI/4,n.add(s);const r=new he(.6,.2,.02),o=new T(r,t);o.position.x=-.5,n.add(o);const a=new T(r,t);return a.position.x=.5,n.add(a),n}function yg(){const n=new le,e=new O({color:8947848,metalness:.8,roughness:.3}),t=new T(new ne(.15,.5,.15,32),e);n.add(t);const i=new O({color:11193599,opacity:.6,transparent:!0,metalness:.9,roughness:.1}),s=new T(new ke(.2,32,16,0,Math.PI*2,0,Math.PI/2),i);s.position.y=.05,n.add(s);const r=new O({color:65280,emissive:65280,emissiveIntensity:1});for(let o=0;o<8;o++){const a=o/8*Math.PI*2,l=new T(new ke(.04,8,8),r);l.position.set(Math.cos(a)*.4,-.05,Math.sin(a)*.4),n.add(l)}return n}function bg(){const n=new le,e=Mn(),t=new O({color:e,roughness:.6}),i=new T(new ke(.35,32,32),t);n.add(i);const s=new O({color:11184810,side:Ft,transparent:!0,opacity:.7,roughness:.4}),r=new tr(.45,.7,32),o=new T(r,s);o.rotation.x=Math.PI/2,o.rotation.y=Math.PI/6,n.add(o);const a=new O({color:8947848}),l=new T(new ke(.08,16,16),a);return l.position.set(.6,.3,0),n.add(l),n}function wg(){const n=new le,e=new O({color:11141120,roughness:.6}),t=new O({color:16711680,roughness:.4}),i=new T(new oa(.2,1),e);return n.add(i),i.geometry.getAttribute("position"),new L,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1],[1,1,1],[-1,-1,-1],[1,-1,1],[-1,1,-1]].forEach(r=>{const o=new L(r[0],r[1],r[2]).normalize(),a=new T(new ne(.015,.015,.15,4),t),l=new Wn().setFromUnitVectors(new L(0,1,0),o);a.setRotationFromQuaternion(l),a.position.copy(o.clone().multiplyScalar(.25)),n.add(a);const c=new T(new ke(.03),t);c.position.copy(o.clone().multiplyScalar(.33)),n.add(c)}),n}function Eg(){const n=new le,e=new O({color:16777215,transparent:!0,opacity:.4,roughness:.1}),t=new O({color:16755336,roughness:.3}),i=new T(new ne(.3,.3,.05,32),e);i.rotation.x=Math.PI/2,n.add(i);const s=new T(new nt(.3,.02,4,32),e);s.position.z=.03,n.add(s);const r=new T(new tn(.28,32),t);r.position.z=.026,n.add(r);const o=new O({color:16777164,roughness:1});for(let a=0;a<5;a++){const l=Math.random()*.05+.02,c=new T(new ke(l,8,4),o);c.scale.z=.2;const h=Math.random()*Math.PI*2,u=Math.random()*.2;c.position.set(Math.cos(h)*u,Math.sin(h)*u,.04),n.add(c)}return n}function Tg(){const n=new le,e=new O({color:16777198,roughness:.9}),t=new T(new ne(.06,.08,.3,8),e);n.add(t);const i=Mn(),s=new O({color:i,roughness:.5}),r=new T(new ke(.25,16,16,0,Math.PI*2,0,Math.PI/2),s);r.position.y=.15,n.add(r);const o=new O({color:16777215});for(let a=0;a<5;a++){const l=new T(new ke(.03,4,4),o),c=Math.random()*Math.PI*2,h=Math.random()*.8;l.position.set(.24*Math.sin(h)*Math.cos(c),.15+.24*Math.cos(h),.24*Math.sin(h)*Math.sin(c)),n.add(l)}return n}function Ag(){const n=new le,e=new O({color:11904578,metalness:.8,roughness:.3}),t=new T(new ne(.3,.3,.05,32),e);t.rotation.x=Math.PI/2,n.add(t);const i=new O({color:16777215,transparent:!0,opacity:.3,roughness:0}),s=new T(new tn(.28,32),i);s.position.z=.026,n.add(s);const r=new O({color:16777215}),o=new T(new tn(.27,32),r);o.position.z=.024,n.add(o);const a=new O({color:16711680}),l=new T(new he(.04,.4,.01),a);l.position.z=.03,l.rotation.z=Math.random()*Math.PI,n.add(l);const c=new T(new nt(.05,.01,8,16),e);return c.position.y=.35,n.add(c),n}function Rg(){const n=new le,e=new O({color:16049340,roughness:.9,side:Ft}),t=new T(new ne(.6,.6,.5,16,1,!0,0,Math.PI/2),e);t.scale.set(1,.2,1),t.rotation.z=Math.PI/2,t.rotation.y=Math.PI/4,n.add(t);const i=new ne(.03,.03,.6,8),s=new T(i,e);s.position.x=-.25,s.rotation.x=Math.PI/2,n.remove(t);const r=new T(new Ni(.5,.6),e);n.add(r);const o=new T(new ne(.04,.04,.55,8),e);o.position.y=.3,o.rotation.z=Math.PI/2,n.add(o);const a=new T(new ne(.04,.04,.55,8),e);a.position.y=-.3,a.rotation.z=Math.PI/2,n.add(a);const l=new O({color:6044193}),c=new T(new ne(.02,.02,.7,8),l);c.position.y=.3,c.rotation.z=Math.PI/2,n.add(c);const h=new T(new ne(.02,.02,.7,8),l);return h.position.y=-.3,h.rotation.z=Math.PI/2,n.add(h),n}function Cg(){const n=new le,e=new O({color:2236962,metalness:.6,roughness:.7}),t=new T(new ne(.05,.2,.1,6),e);t.position.y=.25,n.add(t);const i=new T(new ne(.15,.12,.05,6),e);i.position.y=-.25,n.add(i);for(let a=0;a<6;a++){const l=Math.PI*2/6*a,c=new T(new ne(.01,.01,.5,4),e);c.position.set(Math.sin(l)*.18,0,Math.cos(l)*.18),n.add(c)}const s=new O({color:16755200,emissive:16755200,emissiveIntensity:1.5,transparent:!0,opacity:.8}),r=new T(new ne(.12,.12,.45,16),s);n.add(r);const o=new T(new nt(.06,.01,4,16),e);return o.position.y=.35,n.add(o),n}function Pg(){const n=new le,e=16711680,t=new O({color:e,roughness:.4,emissive:3342336}),i=new ra;i.moveTo(.25,.25),i.bezierCurveTo(.25,.25,.2,0,0,0),i.bezierCurveTo(-.3,0,-.3,.35,-.3,.35),i.bezierCurveTo(-.3,.55,-.1,.77,.25,.95),i.bezierCurveTo(.6,.77,.8,.55,.8,.35),i.bezierCurveTo(.8,.35,.8,0,.5,0),i.bezierCurveTo(.35,0,.25,.25,.25,.25);const s={depth:.2,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.05,bevelThickness:.05},r=new er(i,s);r.center();const o=new T(r,t);return o.rotation.z=Math.PI,o.scale.set(.5,.5,.5),n.add(o),n}function Ig(){const n=new le,e=new O({color:16711782,side:Ft,roughness:.5});for(let o=0;o<5;o++){const a=new ke(.15+o*.02,8,8,0,Math.PI,0,Math.PI*.4),l=new T(a,e);l.rotation.x=-Math.PI/2,l.rotation.z=o*Math.PI*2/2.5,l.position.y=.05+o*.01,n.add(l)}const t=new O({color:43520}),i=new T(new ne(.02,.02,.5,6),t);i.position.y=-.25,n.add(i);const s=new yt(.05,.15,4),r=new T(s,t);return r.position.set(.05,-.2,0),r.rotation.z=-Math.PI/4,n.add(r),n}function Dg(){const n=new le,e=new O({color:16766720,metalness:1,roughness:.1}),t=new T(new nt(.15,.03,8,32),e);n.add(t);const i=new T(new ne(.04,.02,.05,6),e);i.position.y=.16,n.add(i);const s=new O({color:255,roughness:0,metalness:.1,transparent:!0,opacity:.9,emissive:68}),r=new T(new aa(.06),s);return r.position.y=.19,n.add(r),n}function Lg(){const n=new le,e=new O({color:52224,metalness:.4,roughness:.4}),t=new T(new ne(.25,.25,.6,24),e);n.add(t);const i=new O({color:26112,metalness:.5}),s=new T(new nt(.26,.02,4,24),i);s.rotation.x=Math.PI/2,s.position.y=.15,n.add(s);const r=new T(new nt(.26,.02,4,24),i);r.rotation.x=Math.PI/2,r.position.y=-.15,n.add(r);const o=new O({color:0}),a=new T(new ne(.1,.1,.01,3),o);return a.position.z=.25,a.rotation.x=Math.PI/2,n.add(a),n}function Ug(){const n=new le,e=new O({color:8947848,metalness:.7,roughness:.5}),t=new T(new ne(.25,.25,.05,24),e);t.rotation.x=Math.PI/2,n.add(t);for(let s=0;s<8;s++){const r=new T(new he(.1,.1,.05),e),o=Math.PI*2/8*s;r.position.set(Math.sin(o)*.28,Math.cos(o)*.28,0),r.rotation.z=-o,n.add(r)}const i=new T(new ne(.08,.08,.06,16),new O({color:2236962}));return i.rotation.x=Math.PI/2,n.add(i),n}function Ng(){const n=new le,e=new O({color:16777215,roughness:.3}),t=new O({color:1118481}),i=new O({color:13421772,transparent:!0,opacity:.8}),s=new T(new he(.2,.08,.3),e);n.add(s);const r=new T(new he(.7,.04,.04),e);r.rotation.y=Math.PI/4,n.add(r);const o=new T(new he(.7,.04,.04),e);return o.rotation.y=-Math.PI/4,n.add(o),[[.25,.25],[-.25,-.25],[.25,-.25],[-.25,.25]].forEach(l=>{const c=new T(new ne(.04,.04,.06,8),t);c.position.set(l[0],.04,l[1]),n.add(c);const h=new T(new ne(.12,.12,.01,8),i);h.position.set(l[0],.07,l[1]),n.add(h)}),n}function Fg(){const n=new le,e=new O({color:3355443,metalness:.5}),t=new T(new nt(.2,.02,8,32),e);n.add(t);const i=new O({color:13434879,transparent:!0,opacity:.2,roughness:0,metalness:.9}),s=new T(new ke(.2,32,16,0,Math.PI*2,0,.2),i);s.scale.z=.1,n.add(s);const r=new O({color:5913129,roughness:.8}),o=new T(new ne(.03,.03,.3,16),r);return o.position.y=-.35,n.add(o),n}function Og(){const n=new le,e=new O({color:1118481,roughness:.7}),t=new O({color:1118481,metalness:.5,roughness:.2}),i=new O({color:5570730,metalness:1,roughness:.1}),s=new T(new he(.35,.22,.1),e);n.add(s);const r=new T(new ne(.08,.08,.15,24),t);r.rotation.x=Math.PI/2,r.position.z=.1,n.add(r);const o=new T(new ke(.06,16,16),i);o.position.z=.16,o.scale.z=.5,n.add(o);const a=new T(new he(.12,.06,.1),e);a.position.y=.14,n.add(a);const l=new T(new ne(.03,.03,.02,8),new O({color:16711680}));return l.position.set(.1,.12,0),n.add(l),n}function Bg(){const n=new le,e=new O({color:2236962,roughness:.8}),t=new T(new he(.14,.35,.08),e);n.add(t);const i=new T(new ne(.01,.015,.25,8),e);i.position.set(-.04,.28,0),n.add(i);const s=new O({color:1118481}),r=new T(new he(.1,.12,.01),s);r.position.set(0,.05,.041),n.add(r);const o=new T(new ne(.025,.025,.05,12),e);o.position.set(.04,.2,0),n.add(o);const a=new O({color:16755200,emissive:11162880,emissiveIntensity:.5}),l=new T(new Ni(.08,.05),a);return l.position.set(0,-.08,.041),n.add(l),n}function zg(){const n=new le,e=new O({color:1131690,roughness:.4}),t=new T(new ke(.3,32,32),e);n.add(t);const i=new O({color:3385907,roughness:.8});for(let o=0;o<8;o++){const a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=.05+Math.random()*.1,h=new T(new ke(c,7,6),i);h.scale.z=.2;const u=.3,f=u*Math.sin(l)*Math.cos(a),d=u*Math.sin(l)*Math.sin(a),g=u*Math.cos(l);h.position.set(f,d,g),h.lookAt(0,0,0),n.add(h)}const s=new O({color:12632256,metalness:.8}),r=new T(new nt(.35,.015,8,64),s);return n.add(r),n}function kg(){const n=new le,e=new O({color:16777215,roughness:.3}),t=new O({color:1118532,metalness:.5}),i=new T(new Xn(.08,.5,8,16),e);i.rotation.z=Math.PI/2,n.add(i);const s=new ra;s.moveTo(0,0),s.lineTo(.15,-.4),s.lineTo(.25,-.4),s.lineTo(.3,0);const r={depth:.02,bevelEnabled:!0,bevelSize:.01,bevelThickness:.01},o=new er(s,r),a=new T(o,e);a.rotation.x=Math.PI/2,a.position.set(-.15,0,0);const l=new T(new he(.25,.03,.8),e);l.position.x=.05,n.add(l);const c=new T(new he(.15,.2,.02),e);c.position.set(-.25,.1,0),n.add(c);const h=new T(new he(.12,.02,.3),e);h.position.set(-.25,.02,0),n.add(h);const u=new T(new ne(.079,.079,.15,8,1,!1,0,Math.PI),t);return u.rotation.z=Math.PI/2,u.position.set(.15,.02,0),n.add(u),n}function Gg(){const n=new le,e=new O({color:102,roughness:.6}),t=new O({color:15658734}),i=new T(new he(.32,.44,.04),e);n.add(i);const s=new T(new he(.3,.42,.035),t);s.position.x=.015,n.add(s);const r=new O({color:16766720,metalness:.8}),o=new T(new ne(.06,.06,.01,16),r);o.rotation.x=Math.PI/2,o.position.z=.022,o.scale.y=2,n.add(o);const a=new T(new he(.15,.01,.01),r);return a.position.set(0,.12,.022),n.add(a),n}function Vg(){const n=new le,e=new O({color:2236962,roughness:.7}),t=new T(new he(.4,.4,.04),e);n.add(t);const i=new O({color:1118481,roughness:.2,metalness:.5}),s=new T(new he(.2,.2,.045),i);n.add(s);const r=new O({color:14540253,metalness:1,roughness:.3});for(let a=0;a<6;a++){const l=new T(new he(.04,.02,.02),r),c=l.clone();c.position.set(-.23,-.15+a*.06,0),n.add(c);const h=l.clone();h.position.set(.23,-.15+a*.06,0),n.add(h)}const o=new T(new tn(.02,8),new O({color:8947848}));return o.position.set(-.15,.15,.025),n.add(o),n}function Hg(){const n=new le,e=new O({color:15658734,metalness:.3,roughness:.4}),t=new O({color:65535,emissive:43690,emissiveIntensity:1}),i=new T(new he(.35,.35,.35),e);n.add(i);const s=new T(new he(.28,.08,.05),t);s.position.set(0,.05,.18),n.add(s);const r=new T(new ne(.08,.08,.05,16),e);r.rotation.z=Math.PI/2,r.position.x=-.2,n.add(r);const o=new T(new ne(.08,.08,.05,16),e);o.rotation.z=Math.PI/2,o.position.x=.2,n.add(o);const a=new T(new ne(.01,.01,.2,4),e);a.position.y=.25,n.add(a);const l=new T(new ke(.03),new O({color:16711680,emissive:16711680}));return l.position.y=.35,n.add(l),n}function Wg(){const n=new le,e=Mn(),t=new O({color:e,roughness:.6}),i=new T(new he(.4,.4,.03),t);n.add(i);const s=new O({color:13421772,metalness:.8}),r=new T(new he(.24,.14,.035),s);r.position.set(0,.13,0),n.add(r);const o=new O({color:16777215}),a=new T(new he(.3,.18,.032),o);a.position.set(0,-.05,.002),n.add(a);const l=new T(new he(.04,.04,.04),new Lt({color:0}));return l.position.set(.15,-.15,0),n.add(l),n}function Xg(){const n=new le,e=new O({color:2236962,roughness:.7}),t=new O({color:1118481,roughness:.5,metalness:.3}),i=new O({color:11141120,roughness:.2}),s=new O({color:16711680,emissive:5570560}),r=new O({color:3355443,roughness:.9}),o=new T(new he(.4,.1,.4),e);n.add(o);const a=new T(new yt(.08,.1,8),r);a.position.y=.1,n.add(a);const l=new T(new ne(.02,.02,.35),t);l.position.y=.25,n.add(l);const c=new T(new ke(.08,16,16),i);c.position.y=.42,n.add(c);const h=new T(new ne(.04,.045,.02,16),s);return h.position.set(.12,.06,.12),n.add(h),n}function Yg(){const n=new le,e=new O({color:4473924,roughness:.7}),t=new O({color:13421772,roughness:.5}),i=new O({color:43520,metalness:.5}),s=new T(new he(.35,.45,.06),e);n.add(s);for(let a=0;a<3;a++){const l=new T(new he(.35,.015,.065),e);l.position.y=.15+a*.03,n.add(l)}const r=new T(new he(.28,.32,.065),t);r.position.y=-.05,n.add(r);const o=new T(new he(.25,.05,.01),i);return o.position.y=-.24,n.add(o),n}function qg(){const n=new le,e=new O({color:14735042,roughness:.8}),t=new O({color:1118481,roughness:.2,metalness:.4,emissive:4352,emissiveIntensity:.2}),i=new T(new he(.5,.4,.4),e);n.add(i);const s=new T(new ke(.25,32,16,0,Math.PI*2,0,.8),t);s.rotation.x=-Math.PI/2,s.scale.y=.8,s.position.z=.15,n.add(s);const r=new T(new ne(.05,.05,.1),e);r.position.y=-.25,n.add(r);const o=new T(new he(.3,.05,.3),e);return o.position.y=-.3,n.add(o),n}function Zg(){const n=new le,e=new O({color:14735042,roughness:.9}),t=new O({color:13682354,roughness:.9}),i=new O({color:5592405,roughness:1}),s=new T(new he(.22,.1,.35),e);n.add(s);const r=new T(new he(.09,.03,.1),t);r.position.set(-.055,.065,.12),n.add(r);const o=new T(new he(.09,.03,.1),t);o.position.set(.055,.065,.12),n.add(o);const a=new T(new ne(.015,.015,.05),i);return a.rotation.x=Math.PI/2,a.position.z=.2,n.add(a),n}function $g(){const n=new le,e=new O({color:15658734,roughness:.7}),t=new O({color:3355443}),i=new T(new he(.25,.05,.25),e);i.position.y=.1,n.add(i);const s=new T(new ne(.2,.3,.2,4),e);s.rotation.y=Math.PI/4,n.add(s);const r=new he(.1,.01,.15),o=new T(r,t);return o.position.y=.126,n.add(o),n}function jg(){const n=new le,e=new O({color:26316,roughness:.3,metalness:.2}),t=new O({color:14540253,metalness:.9,roughness:.2});new O({color:0,transparent:!0,opacity:.3});const i=new T(new he(.18,.08,.4),e);n.add(i);const s=new T(new he(.12,.04,.12),t);s.position.z=.26,n.add(s);const r=new T(new ke(.02),new O({color:65280,emissive:65280}));return r.position.set(0,.04,0),n.add(r),n}function Kg(){const n=new le,e=new O({color:3355443,roughness:.6}),t=new O({color:7833719,roughness:.4,metalness:.1}),i=new O({color:6710886}),s=new O({color:16746496}),r=new T(new he(.35,.6,.05),e);n.add(r);const o=new T(new he(.3,.15,.06),e);o.position.y=.18,n.add(o);const a=new T(new he(.26,.11,.062),t);a.position.y=.18,n.add(a);for(let l=0;l<4;l++)for(let c=0;c<4;c++){const h=c===3?s:i,u=new T(new he(.06,.04,.06),h);u.position.set((c-1.5)*.08,-.05-l*.07,.01),n.add(u)}return n}function Jg(){const n=new le,e=new O({color:1118481,roughness:.6,metalness:.5}),t=new O({color:328965,roughness:.9}),i=new O({color:35071,emissive:35071}),s=new O({color:65280,emissive:65280}),r=new T(new he(.4,.8,.4),e);n.add(r);for(let o=0;o<6;o++){const a=new T(new he(.36,.1,.41),t);a.position.y=.3-o*.12,n.add(a);const l=new T(new he(.02,.02,.01),Math.random()>.5?i:s);l.position.set(.15,.3-o*.12,.21),n.add(l);const c=new T(new he(.02,.02,.01),Math.random()>.5?i:s);c.position.set(.12,.3-o*.12,.21),n.add(c)}return n}function Qg(){const n=new le,e=new O({color:0,roughness:.3}),t=new O({color:2236962,roughness:.5}),i=new O({color:65280,emissive:65280,emissiveIntensity:2}),s=new T(new he(.5,.08,.3),e);n.add(s);const r=new ne(.015,.02,.3),o=new T(r,t);o.position.set(-.2,.15,-.1),n.add(o);const a=new T(r,t);a.position.set(.2,.15,-.1),n.add(a);const l=new T(r,t);l.position.set(0,.15,-.12),n.add(l);for(let c=0;c<4;c++){const h=new T(new ke(.01),i);h.position.set(-.1+c*.05,.045,.14),n.add(h)}return n}function e_(){const n=new le,e=new O({color:0,roughness:.3}),t=new O({color:13612347,metalness:.9,roughness:.2}),i=new O({color:15658734,metalness:.8}),s=new T(new ne(.12,.12,.45,32),e);n.add(s);const r=new T(new ne(.05,.05,.04,32),i);r.position.y=.24,n.add(r);const o=new T(new ne(.121,.121,.04,32),t);return o.position.y=.2,n.add(o),n}function t_(){const n=new le,e=new O({color:8912896,metalness:.6,roughness:.4}),t=new O({color:13421772,metalness:.9,roughness:.2}),i=new O({color:65280,emissive:65280,emissiveIntensity:2}),s=new T(new ne(.04,.06,.25,8),e);s.rotation.x=Math.PI/6,s.position.y=-.15,s.position.z=.05,n.add(s);const r=new T(new Xn(.08,.3,4,8),e);r.rotation.x=Math.PI/2,n.add(r);for(let a=0;a<3;a++){const l=new T(new nt(.09,.01,4,16),t);l.position.z=.1+a*.1,n.add(l)}const o=new T(new ke(.05),i);return o.position.z=.42,n.add(o),n}function n_(){const n=new le,e=new O({color:15658734,roughness:.3,metalness:.1}),t=new O({color:16755200,metalness:1,roughness:0,envMapIntensity:1}),i=new T(new ke(.3,32,32),e);n.add(i);const s=new T(new ke(.27,32,24,0,Math.PI*2,0,Math.PI*.35),t);s.rotation.x=-Math.PI/1.8,s.position.z=.04,s.position.y=.02,n.add(s);const r=new T(new nt(.2,.05,8,32),new O({color:10066329}));return r.rotation.x=Math.PI/2,r.position.y=-.25,n.add(r),n}function i_(){const n=new le,e=new O({color:3355443,roughness:1,flatShading:!0}),t=new O({color:16733440,emissive:16720384,emissiveIntensity:1,transparent:!0,opacity:.5}),i=new T(new us(.25,1),e),s=i.geometry.attributes.position;for(let r=0;r<s.count;r++)s.setXYZ(r,s.getX(r)*(.8+Math.random()*.4),s.getY(r)*(.8+Math.random()*.4),s.getZ(r)*(.8+Math.random()*.4));n.add(i);for(let r=0;r<5;r++){const o=new T(new yt(.15-r*.02,.8,8,1,!0),t);o.rotation.x=Math.PI/2,o.position.z=-.4-r*.2,o.rotation.z=Math.random()*Math.PI,n.add(o)}return n}function s_(){const n=new le,e=new Lt({color:0}),t=new O({color:16755200,emissive:16729088,emissiveIntensity:1.5,side:Ft,transparent:!0,opacity:.9}),i=new T(new ke(.22,32,16),e);n.add(i);const s=new T(new nt(.4,.15,16,64),t);return s.scale.z=.05,s.rotation.x=Math.PI/3,n.add(s),n}function r_(){const n=new le,e=new O({color:15658734,metalness:.7,roughness:.2}),t=new O({color:3355443,metalness:.5}),i=new T(new nt(.5,.04,8,32),e);n.add(i);const s=new T(new nt(.3,.03,8,32),e);n.add(s);const r=new T(new ne(.05,.05,.8),t);n.add(r);const o=new T(new he(1,.05,.05),e);n.add(o);const a=o.clone();return a.rotation.z=Math.PI/2,n.add(a),n}function o_(){const n=new le,e=new O({color:1127185,roughness:.4,metalness:.2}),t=new O({color:4521796,emissive:17408}),i=new T(new ke(.25,32,32),e);i.scale.y=1.4,n.add(i);for(let s=0;s<8;s++){const r=new T(new nt(.15,.01+Math.random()*.01,4,16),t);r.rotation.x=Math.random()*Math.PI,r.rotation.y=Math.random()*Math.PI,r.scale.set(1,1,1),n.add(r)}return n}function a_(){const n=new le,e=new O({color:328965,roughness:.05,metalness:.6}),t=new T(new he(.2,.8,.05),e);return n.add(t),n}function l_(){const n=new le,e=new O({color:13421772,metalness:.8}),t=new vn({color:8965375,transmission:.8,opacity:.6,roughness:.1}),i=new T(new Xn(.15,.5,4,16),e);n.add(i);const s=new T(new Xn(.155,.25,4,16),t);return s.position.z=.01,n.add(s),n}function c_(){const n=new le,e=new O({color:3355443}),t=new Lt({color:65535,transparent:!0,opacity:.4,side:Ft,depthWrite:!1,blending:Qi}),i=new T(new ne(.2,.25,.05,16),e);i.position.y=-.3,n.add(i);for(let r=0;r<3;r++){const o=new T(new yt(.2+r*.1,.4,32,1,!0),t);o.position.y=-.1,o.rotation.y=r,n.add(o)}const s=new T(new he(.05,.1,.05),t);return s.position.y=-.2,n.add(s),n}function h_(){const n=new le,e=new O({color:5592405,roughness:.9}),t=new Lt({color:16711935}),i=new Lt({color:255,transparent:!0,opacity:.7,blending:Qi}),s=new T(new nt(.4,.08,8,32),e);n.add(s);for(let o=0;o<8;o++){const a=new T(new he(.1,.05,.02),t),l=o/8*Math.PI*2;a.position.set(.4*Math.cos(l),.4*Math.sin(l),.08),a.rotation.z=l,n.add(a)}const r=new T(new tn(.35,32),i);return n.add(r),n}function u_(){const n=new le,e=new O({color:6044193,roughness:.8}),t=new Lt({color:11197951,transparent:!0,opacity:.8}),i=new Lt({color:16777215}),s=new T(new ne(.008,.025,.55,8),e);n.add(s);const r=new T(new ne(.03,.02,.15,8),e);r.position.y=-.3,n.add(r);const o=new T(new ke(.03),i);o.position.y=.28,n.add(o);const a=new T(new ke(.05),t);return a.position.y=.28,n.add(a),n}function d_(){const n=new le,e=new O({color:3342438,roughness:1,side:Ft}),t=new O({color:10035916,roughness:.8}),i=new O({color:16766720,metalness:.8}),s=new T(new yt(.25,.4,16,1,!0),e);s.position.y=.2,n.add(s);const r=new T(new yt(.14,.3,16),e);r.position.set(.05,.5,0),r.rotation.z=-.3,n.add(r);const o=new T(new tr(.24,.5,16),e);o.rotation.x=-Math.PI/2,n.add(o);const a=new T(new ne(.26,.28,.08,16),t);a.position.y=.04,n.add(a);const l=new T(new he(.08,.08,.02),i);return l.position.set(0,.04,.28),n.add(l),n}function f_(){const n=new le,e=8912896,t=new O({color:e,roughness:.5,metalness:.3}),i=new T(new ke(.25,16,16),t);i.scale.y=1.35,n.add(i);const s=new O({color:11149858,metalness:.4});for(let r=0;r<15;r++){const o=new T(new yt(.08,.05,5),s),a=Math.acos(-1+2*r/15),l=Math.sqrt(15*Math.PI)*a;o.position.setFromSphericalCoords(.26,a,l),o.lookAt(0,0,0),o.scale.y=1.3,n.add(o)}return n}function p_(){const n=new le,e=new O({color:4006676,roughness:.9}),t=new vn({color:16777215,transition:1,opacity:.3,roughness:0}),i=new O({color:14535850,roughness:1}),s=new T(new ne(.22,.22,.04,6),e);s.position.y=.28,n.add(s);const r=new T(new ne(.22,.22,.04,6),e);r.position.y=-.28,n.add(r);for(let h=0;h<3;h++){const u=new T(new ne(.02,.02,.56),e),f=h/3*Math.PI*2;u.position.set(.18*Math.cos(f),0,.18*Math.sin(f)),n.add(u)}const o=new T(new ke(.18,16,16,0,Math.PI*2,0,Math.PI/2),t);o.position.y=.02,n.add(o);const a=new T(new ke(.18,16,16,0,Math.PI*2,0,Math.PI/2),t);a.rotation.x=Math.PI,a.position.y=-.02,n.add(a);const l=new T(new yt(.14,.14,16),i);l.position.y=-.12,n.add(l);const c=new T(new ne(.01,.01,.26),i);return n.add(c),n}function m_(){const n=new le,e=new O({color:16763904,metalness:1,roughness:.15,envMapIntensity:1}),t=new vn({color:16711680,metalness:.1,roughness:.1,transmission:.6,thickness:.5}),i=new T(new ne(.15,.05,.15,16),e);i.position.y=.15,n.add(i);const s=new T(new ne(.25,.15,.15,16,1,!0),e);s.position.y=.3,n.add(s);const r=new T(new ne(.02,.03,.2,8),e);n.add(r);const o=new T(new ke(.04),e);n.add(o);const a=new T(new ne(.03,.18,.05,16),e);a.position.y=-.12,n.add(a);for(let l=0;l<4;l++){const c=new T(new ke(.03),t),h=l/4*Math.PI*2;c.position.set(.16*Math.cos(h),.32,.16*Math.sin(h)),n.add(c)}return n}function g_(){const n=new le,e=new O({color:13421772,metalness:.95,roughness:.1}),t=new O({color:2232576,roughness:.8}),i=new O({color:11175987,metalness:.8}),s=new T(new yt(.08,.5,4),e);s.scale.z=.1,s.position.y=.25,n.add(s);const r=new T(new ne(.03,.04,.15,8),t);r.position.y=-.15,r.scale.z=.7,n.add(r);const o=new T(new ke(.05),i);o.position.y=-.24,n.add(o);const a=new T(new he(.24,.03,.06),i);return a.position.y=-.02,n.add(a),n}function __(){const n=new le,e=new O({color:3355443,roughness:1,flatShading:!0}),t=new Lt({color:56831,transparent:!0,opacity:.8}),i=new T(new us(.3,0),e);i.scale.y=1.4,i.scale.z=.5;const s=i.geometry.attributes.position;for(let o=0;o<s.count;o++)s.setY(o,s.getY(o)*(.9+Math.random()*.2));n.add(i);const r=new T(new la(.08,.01,32,4,2,3),t);return r.position.z=.16,r.scale.z=.2,n.add(r),n}function x_(){const n=new le,e=new O({color:16766720,metalness:1,roughness:.2}),t=new O({color:16711680,metalness:.8,roughness:.1}),i=new T(new ne(.25,.25,.08,16,1,!0),e);n.add(i);for(let s=0;s<6;s++){const r=new T(new yt(.05,.2,4),e),o=s/6*Math.PI*2;r.position.set(.25*Math.cos(o),.1,.25*Math.sin(o)),r.rotation.y=-o,n.add(r);const a=new T(new ke(.03),t);a.position.set(.26*Math.cos(o),0,.26*Math.sin(o)),n.add(a)}return n}function v_(){const n=new le,e=new O({color:1118481,metalness:.6,roughness:.7}),t=new O({color:65280,emissive:17408,opacity:.9,transparent:!0}),i=new T(new ke(.25,24,24,0,Math.PI*2,0,Math.PI*.7),e);i.position.y=.1,i.rotation.x=Math.PI,n.add(i);const s=new T(new nt(.23,.02,16,24),e);s.position.y=.28,s.rotation.x=Math.PI/2,n.add(s);const r=new T(new tn(.22,16),t);r.rotation.x=-Math.PI/2,r.position.y=.2,n.add(r);for(let o=0;o<3;o++){const a=new T(new ke(.04),t);a.position.set((Math.random()-.5)*.2,.2,(Math.random()-.5)*.2),n.add(a)}for(let o=0;o<3;o++){const a=new T(new ne(.02,.03,.12,8),e),l=o/3*Math.PI*2;a.position.set(.15*Math.cos(l),-.18,.15*Math.sin(l)),a.rotation.x=.2,a.lookAt(0,-.5,0),n.add(a)}return n}function M_(){const n=new le,e=new O({color:6044193}),t=new O({color:15658734}),i=new O({color:8947848,metalness:.8}),s=new T(new ne(.015,.015,.7,8),e);s.rotation.z=Math.PI/2,n.add(s);const r=new T(new yt(.04,.1,4),i);r.position.x=.4,r.rotation.z=-Math.PI/2,r.rotation.y=Math.PI/4,n.add(r);for(let o=0;o<3;o++){const a=new T(new he(.15,.05,.005),t);a.position.x=-.28;const l=o/3*Math.PI*2;a.position.y=.03*Math.cos(l),a.position.z=.03*Math.sin(l),a.rotation.x=l,n.add(a)}return n}function S_(){const n=new le,e=new O({color:7829367,metalness:.8,roughness:.3}),t=new O({color:11904578,metalness:.6,roughness:.4}),i=new Lt({color:26367,transparent:!0,opacity:.7,blending:Qi}),s=new T(new ne(.2,.25,.05,16),e);n.add(s);const r=new T(new ne(.04,.04,.4,16),e);r.position.y=.2,n.add(r);const o=new T(new ne(.05,.05,.05,16),t);o.position.y=.08,n.add(o);const a=new T(new yt(.05,.2,16),i);a.position.y=.5,n.add(a);const l=new T(new yt(.02,.1,16),new Lt({color:16777215}));return l.position.y=.45,n.add(l),n}function y_(){const n=new le,e=new O({color:10506797,roughness:.8}),t=new vn({color:16777215,transmission:.9,opacity:.3,roughness:0});new Lt({color:65280});const i=new T(new he(.5,.02,.15),e);i.position.y=.1,n.add(i);const s=new T(new he(.5,.02,.15),e);s.position.y=-.1,n.add(s);const r=new T(new he(.02,.3,.15),e);r.position.x=-.26,n.add(r);const o=new T(new he(.02,.3,.15),e);o.position.x=.26,n.add(o);for(let a=0;a<4;a++){const l=new T(new ne(.03,.03,.35,12),t);l.position.set(-.15+a*.1,.1,0),n.add(l);const c=a%2===0?65280:16711680,h=new T(new ne(.025,.025,.15,8),new Lt({color:c,opacity:.8,transparent:!0}));h.position.set(-.15+a*.1,0,0),n.add(h)}return n}function b_(){const n=new le,e=new O({color:13369344,metalness:.3,roughness:.5}),t=new O({color:15658734,metalness:.9,roughness:.2}),i=new T(new nt(.2,.08,16,24,Math.PI),e);i.rotation.z=Math.PI,n.add(i);const s=new T(new ne(.08,.08,.3,16),e);s.position.set(-.2,-.15,0),n.add(s);const r=new T(new ne(.08,.08,.3,16),e);r.position.set(.2,-.15,0),n.add(r);const o=new T(new he(.18,.1,.18),t);o.position.set(-.2,-.35,0),n.add(o);const a=new T(new he(.18,.1,.18),t);return a.position.set(.2,-.35,0),n.add(a),n}function w_(){const n=new le,e=new vn({color:16777215,transparent:!0,opacity:.4,roughness:0,clearcoat:1}),t=new Lt({color:65535}),i=new O({color:11184810,metalness:.9});new O({color:2236962});const s=new T(new ne(.06,.06,.4,16),e);n.add(s);const r=new T(new ne(.05,.05,.3,16),t);n.add(r);const o=new T(new ne(.005,.005,.3,8),i);o.position.y=.35,n.add(o);const a=new T(new ne(.05,.05,.1,16),e);a.position.y=-.25,n.add(a);const l=new T(new ne(.08,.08,.02,16),e);return l.position.y=-.2,n.add(l),n}function E_(){const n=new le,e=new vn({color:16711680,roughness:.1,clearcoat:.5}),t=new vn({color:16777215,roughness:.1,clearcoat:.5}),i=new T(new Xn(.12,.25,4,16),e);i.position.y=.125,n.add(i);const s=new T(new Xn(.12,.25,4,16),t);return s.position.y=-.125,n.add(s),n}function T_(){const n=new le,e=new O({color:16752800,roughness:.5,bumpScale:.05}),t=new T(new ke(.25,32,32),e);t.position.x=-.18,t.scale.set(.9,1,1.3),n.add(t);const i=new T(new ke(.25,32,32),e);i.position.x=.18,i.scale.set(.9,1,1.3),n.add(i);const s=new T(new ke(.15,16,16),e);return s.position.set(0,-.2,.2),s.scale.set(1.5,1,1),n.add(s),n}function A_(){const n=new le,e=new O({color:16776960,emissive:4473856,emissiveIntensity:.5,transparent:!0,opacity:.8}),t=new T(new ke(.15,16,16),e);n.add(t);for(let s=0;s<8;s++){const r=new T(new yt(.03,.5,4),e),o=s/8*Math.PI*2,a=s%2===0?.3:-.3;r.position.set(.25*Math.cos(o),.25*Math.sin(o),.25*Math.sin(a)),r.lookAt(0,0,0),r.rotation.x+=Math.PI,r.position.set(.15*Math.cos(o),.15*Math.sin(o),.15*Math.sin(a)),n.add(r)}const i=new T(new ne(.02,.04,.8),e);return i.rotation.z=Math.PI/2,i.position.x=.4,n.add(i),n}function R_(){const n=new le,e=new vn({color:16777130,transparent:!0,opacity:.3,roughness:0,transmission:.9,thickness:.1}),t=new O({color:11184810,metalness:.8}),i=new O({color:16755200,emissive:16755200,emissiveIntensity:2}),s=new T(new ke(.25,32,32),e);s.position.y=.2,n.add(s);const r=new T(new ne(.25,.12,.15,32,1,!0),e);r.position.y=.05,n.add(r);const o=new T(new ne(.12,.1,.2,16),t);o.position.y=-.15,n.add(o);const a=new T(new nt(.05,.005,8,16),i);return a.position.y=.2,a.rotation.x=Math.PI/2,n.add(a),n}function C_(){const n=new le,e=new vn({color:16777215,transmission:1,roughness:0,thickness:1,ior:1.5,dispersion:1}),t=new T(new ne(.3,.3,.8,3),e);return t.rotation.z=Math.PI/2,t.rotation.x=Math.PI/2,n.add(t),n}function P_(){const n=new le,e=new O({color:14540253,metalness:.7,roughness:.3}),t=new T(new he(.08,.6,.04),e);n.add(t);const i=new T(new ne(.18,.18,.04,6),e);i.rotation.x=Math.PI/2,i.position.y=.32,n.add(i),new T(new he(.15,.2,.06),new Lt({color:0}));const s=new T(new nt(.12,.04,8,16),e);return s.position.y=-.32,n.add(s),n}function I_(){const n=new le,e=new O({color:328965,roughness:.05,metalness:.4}),t=new O({color:16766720,metalness:1,roughness:.2}),i=new T(new ne(.04,.04,.4,16),e);n.add(i);const s=new T(new ne(.045,.045,.2,16),e);s.position.y=.15,n.add(s);const r=new T(new he(.01,.15,.02),t);r.position.set(.05,.15,0),n.add(r);const o=new T(new ne(.035,.03,.1,16),e);o.position.y=-.25,n.add(o);const a=new T(new yt(.02,.08,4),t);return a.position.y=-.33,a.rotation.z=Math.PI,n.add(a),n}function D_(){const n=new le,e=new O({color:16645629,roughness:.9,side:Ft}),t=new O({color:15658734}),i=new ac([new L(0,-.3,0),new L(0,0,0),new L(.05,.3,0)]),s=new ca(i,8,.015,8,!1),r=new T(s,t);n.add(r);for(let o=0;o<10;o++){const a=new T(new he(.12,.05,.002),e);a.position.y=-.1+o*.045,a.position.x=.05+o*.005,a.rotation.z=-.2,n.add(a)}return n}function L_(){const n=new le,e=new O({color:16119260,roughness:.9}),t=new O({color:10027008,roughness:.4}),i=new T(new he(.5,.35,.01),e);n.add(i);const s=new T(new he(.36,.005,.012),e);s.rotation.z=-.5,s.position.set(-.1,.05,0),n.add(s);const r=new T(new he(.36,.005,.012),e);r.rotation.z=.5,r.position.set(.1,.05,0),n.add(r);const o=new T(new ne(.05,.06,.02,16),t);return o.rotation.x=Math.PI/2,o.position.z=.01,n.add(o),n}function U_(){const n=new le,e=new O({color:16777215,roughness:.2}),t=new O({color:3878703,roughness:.6}),i=new O({color:3355443}),s=new T(new ne(.2,.2,.35,24,1,!0),e);n.add(s);const r=new T(new tn(.2,24),e);r.rotation.x=Math.PI/2,r.position.y=-.175,n.add(r);const o=new T(new tn(.19,24),t);o.rotation.x=-Math.PI/2,o.position.y=.12,n.add(o);const a=new T(new nt(.08,.03,8,16,Math.PI),e);a.position.x=.22,a.rotation.z=-Math.PI/2,n.add(a);const l=new T(new he(.15,.1,.02),i);return l.position.z=.2,n.add(l),n}function N_(){const n=new le,e=new O({color:3355443,roughness:.5}),t=new vn({color:13434879,transmission:.9,opacity:.2,roughness:0}),i=new T(new nt(.12,.015,8,24),e);i.position.x=-.15,n.add(i);const s=new T(new tn(.11,24),t);s.position.x=-.15,n.add(s);const r=new T(new nt(.12,.015,8,24),e);r.position.x=.15,n.add(r);const o=new T(new tn(.11,24),t);o.position.x=.15,n.add(o);const a=new T(new ne(.01,.01,.08,4),e);a.rotation.z=Math.PI/2,n.add(a);const l=new T(new ne(.01,.01,.4,4),e);l.position.x=-.27,l.position.z=-.2,l.rotation.x=Math.PI/2,n.add(l);const c=new T(new ne(.01,.01,.4,4),e);return c.position.x=.27,c.position.z=-.2,c.rotation.x=Math.PI/2,n.add(c),n}function F_(){const n=new le,e=new O({color:9132587,roughness:.6}),t=new O({color:13382451,roughness:.9});new O({color:0});const i=new T(new ke(.1,16,16),e);i.position.y=.2,n.add(i);const s=new T(new ne(.04,.06,.2,16),e);n.add(s);const r=new T(new he(.25,.05,.15),e);r.position.y=-.12,n.add(r);const o=new T(new he(.23,.02,.13),t);return o.position.y=-.155,n.add(o),n}function O_(){const n=new le,e=new O({color:13421772,metalness:.8,roughness:.4});new fc;const t=new T(new nt(.12,.02,8,16,Math.PI),e);t.position.y=.2,n.add(t);const i=new T(new ne(.02,.02,.5),e);i.position.set(-.12,-.05,0),n.add(i);const s=new T(new ne(.02,.02,.5),e);s.position.set(.12,-.05,0),n.add(s);const r=new T(new nt(.08,.02,8,16,Math.PI),e);return r.position.set(.04,-.3,0),r.rotation.z=Math.PI,n.add(r),n}function B_(){const n=new le,e=new O({color:16766720,metalness:1,roughness:.1}),t=new O({color:1118481,roughness:.5}),i=new T(new ne(.25,.12,.28,24,1,!0),e);i.position.y=.25,n.add(i);const s=new T(new nt(.1,.03,8,16,Math.PI),e);s.position.x=-.22,s.position.y=.3,s.rotation.z=Math.PI/2,n.add(s);const r=new T(new nt(.1,.03,8,16,Math.PI),e);r.position.x=.22,r.position.y=.3,r.rotation.z=-Math.PI/2,n.add(r);const o=new T(new ne(.04,.08,.2,16),e);n.add(o);const a=new T(new he(.3,.08,.3),t);return a.position.y=-.14,n.add(a),n}function z_(){const n=new le,e=new O({color:13938487,metalness:.6,roughness:.4}),t=new O({color:13421772,metalness:.9,roughness:.3}),i=new T(new he(.35,.3,.12),e);n.add(i);const s=new T(new ne(.04,.04,.02,16),new Lt({color:0}));s.rotation.x=Math.PI/2,s.position.z=.06,s.position.y=-.05,n.add(s);const r=new T(new nt(.14,.04,8,24,Math.PI),t);r.position.y=.15,n.add(r);const o=new T(new ne(.04,.04,.2),t);o.position.set(-.14,.15,0),n.add(o);const a=new T(new ne(.04,.04,.2),t);return a.position.set(.14,.15,0),n.add(a),n}function k_(){const n=new le,e=new O({color:12623968,metalness:.7,roughness:.6}),t=new T(new nt(.08,.02,8,16),e);t.position.x=-.25,n.add(t);const i=new T(new ne(.03,.03,.5,8),e);i.rotation.z=Math.PI/2,n.add(i);const s=new T(new he(.05,.08,.02),e);s.position.x=.15,s.position.y=-.05,n.add(s);const r=new T(new he(.05,.06,.02),e);return r.position.x=.22,r.position.y=-.04,n.add(r),n}const G_=[dg,fg,pg,mg,gg,_g,xg,vg,Mg,Sg,yg,bg,wg,Eg,Tg,Ag,Rg,Cg,Pg,Ig,Dg,Lg,Ug,Ng,Fg,Og,Bg,zg,kg,Gg,Vg,Hg,Wg,Xg,Yg,qg,Zg,$g,jg,Kg,Jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,v_,M_,S_,y_,b_,w_,E_,T_,A_,R_,C_,P_,I_,D_,L_,U_,N_,F_,O_,B_,z_,k_],Ic=[];let Ji=null,Ks=null;function ex(n,e=0){Ji&&(Ji.uTime.value=n*.2,Ji.uDirection.value=e)}function tx(n){const e=`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,t=`
        uniform float uTime;
        uniform float uDirection; // -1.0 to 1.0 (or higher for speed)
        varying vec2 vUv;
        
        // Simple Pseudo-Random Noise
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        // 2D Noise
        float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            // Four corners in 2D of a tile
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            // Smooth Interpolation
            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }

        // Rotation helper
        mat2 rotate2d(float _angle){
            return mat2(cos(_angle),-sin(_angle),
                        sin(_angle),cos(_angle));
        }

        void main() {
            // INTERSTELLAR BACKGROUND BASE
            vec3 spaceColor = vec3(0.01, 0.01, 0.03); 

            // SMOKE RIBBONS V11 - 10 OSCILLATING & COLOR SHIFTING
            // Complex Data Beam
            
            vec3 finalColor = spaceColor;
            
            // Shared UVs
            vec2 st = vUv;
            
            // Stars (Background Layer)
            float starNoise = noise(st * 50.0);
            float stars = smoothstep(0.95, 1.0, starNoise);
            float twinkle = sin(uTime * 5.0 + st.x * 10.0) * 0.5 + 0.5;
            finalColor += vec3(stars * twinkle);
            
            // Ribbon Logic - Procedural Loop
            vec3 smokeAccumulation = vec3(0.0);
            float globalFlow = uTime * 0.05 + (uDirection * uTime * 0.2);
            
            for (float i = 0.0; i < 10.0; i++) {
                // Determine Type: 0.0 = Ribbon (Even), 1.0 = Smoke (Odd)
                float isSmoke = mod(i, 2.0); // 0 or 1
                
                // Unique characteristics based on index
                float indexNorm = i / 10.0;
                
                // Direction Flip: Some go Left->Right (1.0), others Right->Left (-1.0)
                // We'll flip every 3rd one or based on hash
                float direction = (mod(i, 2.0) == 0.0) ? 1.0 : -1.0; 
                if (mod(i, 4.0) == 0.0) direction *= -1.0; // Mix it up
                
                // Base Y Position (Grouped around 0.5)
                // Smoke slightly wider spread than ribbons
                float spread = mix(0.08, 0.25, isSmoke);
                float yBase = 0.5 + (indexNorm - 0.5) * spread; 
                
                // Frequency & Speed
                float speedBase = mix(0.5, 0.2, isSmoke); 
                float speed = speedBase + (i * 0.1); 
                float freq = 2.0 + (i * 1.5);    
                
                // Oscillating Y Offset
                // Direction impacts phase direction too? Maybe not Y oscillation, just X flow.
                float hueOffset = mix(0.02, 0.1, isSmoke); 
                float oscillation = sin(uTime * speed + st.x * freq + (i * 10.0)) * hueOffset;
                
                // UVs for Noise & Flow
                // APPLY DIRECTION HERE
                float flowMult = mix(0.8, 0.4, isSmoke);
                
                // Global Flow is the base "User Navigation" drift.
                // We want: Native Movement (Direction) + User Drift (GlobalFlow)
                // Native: uTime * speed * direction
                
                float nativeFlow = uTime * 0.1 * direction * speed;
                
                // If moving opposite to user nav, they might speed up relative to cam or slow down?
                // Let's just add them.
                
                vec2 ribUv = vec2(st.x * (1.0 + indexNorm) - globalFlow * flowMult - nativeFlow, st.y);
                float noiseVal = noise(ribUv + vec2(i, uTime * 0.1));
                
                // Distance Field with Oscillation
                float noiseAmp = mix(0.01, 0.15, isSmoke); 
                float dist = abs(st.y - yBase - oscillation + noiseVal * noiseAmp);
                
                // Mask (Sharpness vs Softness)
                // Ribbon: 0.001 (Sharp) -> Smoke: 0.02 (Soft)
                float widthArg = mix(0.001, 0.02, isSmoke);
                float edgeArg  = mix(0.005, 0.08, isSmoke);
                
                float mask = 1.0 - smoothstep(widthArg, widthArg + edgeArg, dist);
                
                // Glow / Intensity
                // Ribbons have bloom, Smoke is just diffuse
                if (isSmoke < 0.5) {
                     // Ribbon Glow
                     mask += (1.0 - smoothstep(widthArg + 0.005, 0.03, dist)) * 0.4;
                }
                
                // Color Shifting
                // "Too Neony" -> Reduce saturation and brightness
                // Old: 0.5 + 0.5 * cos(...) -> Full Spectrum
                // New: 0.6 + 0.3 * cos(...) -> Pastel / Desaturated
                vec3 col = 0.6 + 0.3 * cos(uTime * 0.2 + (i * 0.6) + vec3(0.0, 2.0, 4.0));
                
                // Smoke is dimmer, Ribbons are now Soft Glowing (not Neon)
                // Reduced max intensity from 1.5 to 0.9 for ribbons
                float intensity = mix(0.9, 0.5, isSmoke);
                col *= intensity; 
                
                // Accumulate
                smokeAccumulation += col * mask * 0.6;
            }
            
            // Additive blending for "Glowing" look
            finalColor += smokeAccumulation;
            
            // Vignette
            vec2 centered = st - 0.5;
            finalColor *= (1.0 - length(centered) * 0.3);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `,i=new ke(200,64,64);Ji={uTime:{value:0},uDirection:{value:0}};const s=new cn({uniforms:Ji,vertexShader:e,fragmentShader:t,side:zt});Ks=new T(i,s),n.add(Ks)}function nx(n,e=10){const s=[...G_].sort(()=>.5-Math.random());for(let r=0;r<10;r++){const o=s[r%s.length],a=o(),l=r%2,c=r%2===0?1:-1,h=l?3:1.5,u=1.5+(Math.random()-.5)*h,d=((l?.3:.5)+Math.random()*.2)*c,g=-3-Math.random()*5;a.position.x=(Math.random()-.5)*20,a.position.y=u,a.position.z=g,a.userData={velocity:new L(d,0,0),rotSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.02},oscillation:{freq:.5+Math.random(),amp:.2+Math.random()*.3,phase:Math.random()*Math.PI*2},yBase:u},a.scale.set(.5,.5,.5),n.add(a),Ic.push(a)}}function ix(n){if(!n)return;Ks&&Ks.position.copy(n.position);const e=Date.now()*.001,t=24,i=t/2,s=n.position.x,r=s-i,o=s+i;Ic.forEach(a=>{const l=a.userData;a.position.x+=l.velocity.x*.01;const c=l.yBase-1.5;a.position.y=n.position.y+c+Math.sin(e*l.oscillation.freq+l.oscillation.phase)*l.oscillation.amp,a.rotation.x+=l.rotSpeed.x,a.rotation.y+=l.rotSpeed.y,a.rotation.z+=l.rotSpeed.z,a.position.x<r-2?a.position.x+=t+4:a.position.x>o+2&&(a.position.x-=t+4)})}function sx(n,e){if(!n)return;const t=Math.sin(e*.8)*.15;let i=n.rotation.y;n.userData&&n.userData.targetRot?i=n.userData.targetRot.y:n.userData&&n.userData.baseRotationY!==void 0&&(i=n.userData.baseRotationY);const s=i+t;n.rotation.y+=(s-n.rotation.y)*.05}export{Y_ as A,Qs as C,Ft as D,xn as E,le as G,K_ as H,St as L,T as M,j_ as O,Ni as P,Wn as Q,Ei as R,V_ as S,ae as V,$_ as W,Lt as a,vn as b,Q_ as c,Z_ as d,Je as e,tx as f,nx as g,Zt as h,Vc as i,X_ as j,H_ as k,W_ as l,to as m,q_ as n,ex as o,J_ as p,ix as q,L as r,sx as s,O as t,Pt as u};
