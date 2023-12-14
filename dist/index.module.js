import{useState as n,useEffect as e}from"react";import t from"prop-types";import r from"styled-components";import{ConfigProvider as i,theme as a,Form as l,Modal as o,Row as s,Col as u,Input as c,Select as d,Checkbox as h,Divider as m,Button as p}from"antd";import{CloseOutlined as f}from"@ant-design/icons";import g from"antd/locale/vi_VN";import v from"antd/locale/en_US";import x from"moment";import{jsx as y,Fragment as $,jsxs as _}from"react/jsx-runtime";function b(n,e){return e||(e=n.slice(0)),n.raw=e,n}var M,w,T,D,S,k=r.div(M||(M=b(["\n  max-width: 820px;\n  margin: 0 auto;\n  @media only screen and (max-width: 1024px) {\n    max-width: 90%;\n  }\n\n  .ant-form-item-no-colon {\n    display: none !important;\n  }\n  .form-item-wrapper {\n    position: relative;\n\n    label {\n      position: absolute;\n      top: -4px;\n      left: 24px;\n      z-index: 1;\n      font-weight: 600;\n      background: #fff;\n      padding: 0 8px 0 4px;\n    }\n  }\n  .solutions-label {\n    display: block;\n    margin-bottom: 12px;\n    font-weight: 600;\n  }\n  .gradient-btn {\n    background: linear-gradient(270deg, rgb(0, 183, 79) -22.41%, rgb(29, 66, 137) 108.33%)\n  }\n"]))),Y=r.div(w||(w=b(["\n  position: absolute;\n  top: 32px;\n  transform: translateY(-50%);\n  right: 24px;\n  cursor: pointer;\n"])));r.div(T||(T=b(["\n  position: relative;\n  text-align: center;\n  .register-logo {\n    height: 44px;\n    @media only screen and (max-width: 480px) {\n      height: 28px;\n    }\n  }\n"])));var N=r.div(D||(D=b(["\n  background: #fff;\n  border-radius: 24px;\n  padding: 16px;\n  position: relative;\n  .ant-input-lg, .ant-select-selector {\n    font-size: 14px !important;\n  }\n"]))),C=r.div(S||(S=b(["\n  text-align: center;\n  margin-bottom: 56px;  \n\n  span {\n    background: linear-gradient(270deg, #00B74F -22.41%, #1D4289 108.33%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 24px;\n    margin-bottom: 40px;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 700;\n    \n    @media only screen and (max-width: 768px) {\n      font-size: 14px;\n    }\n  }\n"]))),I="#00B74F",O=/^\w{10,20}$/,F=/^[^~'`!@#$%^*()_+={}[\]|:;"<,>?\\/\t]*$/,H=/^[^~'`!@#$%^&*()_\-+={}[\]|:;"<,>?\\/\t]*$/,L=/^((\+[1-9]{1,4}[ -]*)|(\\([0-9]{2,3}\\)[ -]*)|([0-9]{2,4})[ -]*)*?[0-9]{3,4}?[ -]*[0-9]{3,4}?$/,V=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,P={validateCompanyName:function(n,e,t){var r=F,i=null==e?void 0:e.trim();i?(null==i?void 0:i.length)>250?t("Tên doanh nghiệp không quá 250 ký tự"):r.test(i)?t():t("Tên doanh nghiệp không hợp lệ"):t("Vui lòng nhập tên doanh nghiệp")},validateTaxCode:function(n,e,t){var r=O,i=null==e?void 0:e.trim();i?r.test(i)?t():t("Mã số thuế từ 10 đến 20 ký tự"):t("Vui lòng nhập mã số thuế")},validateLegalFullName:function(n,e,t){var r=H,i=null==e?void 0:e.trim();i?(null==i?void 0:i.length)>200?t("Tên người liên hệ không quá 200 ký tự"):r.test(i)?t():t("Tên người liên hệ không hợp lệ"):t("Vui lòng nhập tên người liên hệ")},validatePhoneNumber:function(n,e,t){var r=L,i=null==e?void 0:e.trim();i?(null==i?void 0:i.length)<10||(null==i?void 0:i.length)>15?t("Số điện thoại từ 10 đến 15 ký tự"):r.test(i)?t():t("Số điện thoại không hợp lệ"):t("Vui lòng nhập số điện thoại")},validateEmail:function(n,e,t){var r=V,i=null==e?void 0:e.trim();i?(null==i?void 0:i.length)>50?t("Email tối đa 50 ký tự"):r.test(i)?t():t("Email không hợp lệ"):t("Vui lòng nhập email")},validateProvince:function(n,e,t){e?t():t("Vui lòng chọn")},validateDistrict:function(n,e,t){e?t():t("Vui lòng chọn")},validateWards:function(n,e,t){e?t():t("Vui lòng chọn")},validateActivitiesTime:function(n,e,t){e?t():t("Vui lòng chọn")},validateRecentRevenue:function(n,e,t){e?t():t("Vui lòng chọn")},validateCareSolutions:function(n,e,t){e?t():t("Vui lòng tích chọn")},validateConfirm:function(n,e,t){e?t():t("Vui lòng tích chọn")}},A=function(n){return n?n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y")).replace(/Đ/g,"D"):n};function E(n){var e={exports:{}};return n(e,e.exports),e.exports}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var W=E(function(n,e){n.exports=function(){var n=6e4,e=36e5,t="millisecond",r="second",i="minute",a="hour",l="day",o="week",s="month",u="quarter",c="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var e=["th","st","nd","rd"],t=n%100;return"["+n+(e[(t-20)%10]||e[t]||e[0])+"]"}},g=function(n,e,t){var r=String(n);return!r||r.length>=e?n:""+Array(e+1-r.length).join(t)+n},v={s:g,z:function(n){var e=-n.utcOffset(),t=Math.abs(e),r=Math.floor(t/60),i=t%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function n(e,t){if(e.date()<t.date())return-n(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(r,s),a=t-i<0,l=e.clone().add(r+(a?-1:1),s);return+(-(r+(t-i)/(a?i-l:l-i))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:s,y:c,w:o,d:l,D:d,h:a,m:i,s:r,ms:t,Q:u}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return void 0===n}},x="en",y={};y[x]=f;var $="$isDayjsObject",_=function(n){return n instanceof T||!(!n||!n[$])},b=function n(e,t,r){var i;if(!e)return x;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(i=a),t&&(y[a]=t,i=a);var l=e.split("-");if(!i&&l.length>1)return n(l[0])}else{var o=e.name;y[o]=e,i=o}return!r&&i&&(x=i),i||!r&&x},M=function(n,e){if(_(n))return n.clone();var t="object"==typeof e?e:{};return t.date=n,t.args=arguments,new T(t)},w=v;w.l=b,w.i=_,w.w=function(n,e){return M(n,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var T=function(){function f(n){this.$L=b(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[$]=!0}var g=f.prototype;return g.parse=function(n){this.$d=function(n){var e=n.date,t=n.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return t?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(n),this.init()},g.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(n,e){var t=M(n);return this.startOf(e)<=t&&t<=this.endOf(e)},g.isAfter=function(n,e){return M(n)<this.startOf(e)},g.isBefore=function(n,e){return this.endOf(e)<M(n)},g.$g=function(n,e,t){return w.u(n)?this[e]:this.set(t,n)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(n,e){var t=this,u=!!w.u(e)||e,h=w.p(n),m=function(n,e){var r=w.w(t.$u?Date.UTC(t.$y,e,n):new Date(t.$y,e,n),t);return u?r:r.endOf(l)},p=function(n,e){return w.w(t.toDate()[n].apply(t.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),t)},f=this.$W,g=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(h){case c:return u?m(1,0):m(31,11);case s:return u?m(1,g):m(0,g+1);case o:var y=this.$locale().weekStart||0,$=(f<y?f+7:f)-y;return m(u?v-$:v+(6-$),g);case l:case d:return p(x+"Hours",0);case a:return p(x+"Minutes",1);case i:return p(x+"Seconds",2);case r:return p(x+"Milliseconds",3);default:return this.clone()}},g.endOf=function(n){return this.startOf(n,!1)},g.$set=function(n,e){var o,u=w.p(n),h="set"+(this.$u?"UTC":""),m=(o={},o[l]=h+"Date",o[d]=h+"Date",o[s]=h+"Month",o[c]=h+"FullYear",o[a]=h+"Hours",o[i]=h+"Minutes",o[r]=h+"Seconds",o[t]=h+"Milliseconds",o)[u],p=u===l?this.$D+(e-this.$W):e;if(u===s||u===c){var f=this.clone().set(d,1);f.$d[m](p),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},g.set=function(n,e){return this.clone().$set(n,e)},g.get=function(n){return this[w.p(n)]()},g.add=function(t,u){var d,h=this;t=Number(t);var m=w.p(u),p=function(n){var e=M(h);return w.w(e.date(e.date()+Math.round(n*t)),h)};if(m===s)return this.set(s,this.$M+t);if(m===c)return this.set(c,this.$y+t);if(m===l)return p(1);if(m===o)return p(7);var f=(d={},d[i]=n,d[a]=e,d[r]=1e3,d)[m]||1,g=this.$d.getTime()+t*f;return w.w(g,this)},g.subtract=function(n,e){return this.add(-1*n,e)},g.format=function(n){var e=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var r=n||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,l=this.$m,o=this.$M,s=t.weekdays,u=t.months,c=function(n,t,i,a){return n&&(n[t]||n(e,r))||i[t].slice(0,a)},d=function(n){return w.s(a%12||12,n,"0")},m=t.meridiem||function(n,e,t){var r=n<12?"AM":"PM";return t?r.toLowerCase():r};return r.replace(p,function(n,r){return r||function(n){switch(n){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return c(t.monthsShort,o,u,3);case"MMMM":return c(u,o);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return c(t.weekdaysMin,e.$W,s,2);case"ddd":return c(t.weekdaysShort,e.$W,s,3);case"dddd":return s[e.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(a,l,!0);case"A":return m(a,l,!1);case"m":return String(l);case"mm":return w.s(l,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(n)||i.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(t,d,h){var m,p=this,f=w.p(d),g=M(t),v=(g.utcOffset()-this.utcOffset())*n,x=this-g,y=function(){return w.m(p,g)};switch(f){case c:m=y()/12;break;case s:m=y();break;case u:m=y()/3;break;case o:m=(x-v)/6048e5;break;case l:m=(x-v)/864e5;break;case a:m=x/e;break;case i:m=x/n;break;case r:m=x/1e3;break;default:m=x}return h?m:w.a(m)},g.daysInMonth=function(){return this.endOf(s).$D},g.$locale=function(){return y[this.$L]},g.locale=function(n,e){if(!n)return this.$L;var t=this.clone(),r=b(n,e,!0);return r&&(t.$L=r),t},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},f}(),D=T.prototype;return M.prototype=D,[["$ms",t],["$s",r],["$m",i],["$H",a],["$W",l],["$M",s],["$y",c],["$D",d]].forEach(function(n){D[n[1]]=function(e){return this.$g(e,n[0],n[1])}}),M.extend=function(n,e){return n.$i||(n(e,T,M),n.$i=!0),M},M.locale=b,M.isDayjs=_,M.unix=function(n){return M(1e3*n)},M.en=y[x],M.Ls=y,M.p={},M}()});E(function(n,e){var t,r,i;n.exports=(r=(t=W)&&"object"==typeof t&&"default"in t?t:{default:t},i={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(n){return n},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}},r.default.locale(i,null,!0),i)}),E(function(n,e){n.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var e=["th","st","nd","rd"],t=n%100;return"["+n+(e[(t-20)%10]||e[t]||e[0])+"]"}}}),x.locale("vi");var z=function(n){/*#__PURE__*/return y(i,{locale:"vi"===language?g:v,theme:{algorithm:a.defaultAlgorithm,token:{colorPrimary:I,borderRadius:4,colorLink:I,colorLinkHover:I,colorLinkActive:I,fontFamily:"SVN-Gilroy"},components:{}},children:/*#__PURE__*/y($,{children:n.children})})};z.propTypes={};var j=function(t){var r=l.useForm()[0],i=t.open,a=t.onClose,g=t.services,v=void 0===g?[{label:"Thẻ tín dụng",value:"CREDIT_CARD"},{label:"Thẻ ghi nợ",value:"DEBIT_CARD"},{label:"Ecompay Standard",value:"ES"},{label:"Ecompay Platinum",value:"EP"},{label:"Tap to phone & POS",value:"POS"}]:g,x=n([]),$=x[0],b=x[1],M=n([]),w=M[0],T=M[1],D=n([]),S=D[0],I=D[1],O=function(){T([])},F=function(){I([])},H=n(!1),L=H[0],V=H[1];return e(function(){},[]),e(function(){i||(b([]),O(),F(),r.resetFields())},[i]),/*#__PURE__*/y(o,{width:820,footer:!1,open:i,children:/*#__PURE__*/y(z,{children:/*#__PURE__*/y(k,{children:/*#__PURE__*/_(N,{children:[/*#__PURE__*/_(C,{children:[/*#__PURE__*/y("span",{children:"THÔNG TIN ĐĂNG KÝ"}),/*#__PURE__*/y(Y,{onClick:function(){a()},children:/*#__PURE__*/y(f,{style:{color:"#E10600"}})})]}),/*#__PURE__*/y(l,{onFinish:function(n){console.log(n),V(!0)},colon:!1,size:"large",layout:"vertical",form:r,children:/*#__PURE__*/_(s,{gutter:[24,0],children:[/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:12,xl:12,lg:12,md:12,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"companyName",children:"Tên doanh nghiệp"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateCompanyName}],label:"Tên doanh nghiệp",name:"companyName",children:/*#__PURE__*/y(c,{placeholder:"Nhập tên doanh nghiệp",autoComplete:"off"})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:12,xl:12,lg:12,md:12,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"taxCode",children:"Mã số thuế"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateTaxCode}],label:"Mã số thuế",name:"taxCode",children:/*#__PURE__*/y(c,{placeholder:"Nhập mã số thuế",autoComplete:"off"})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:24,xl:24,lg:24,md:24,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"legalFullName",children:"Tên người liên hệ"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateLegalFullName}],label:"Tên người liên hệ",name:"legalFullName",children:/*#__PURE__*/y(c,{placeholder:"Nhập tên người liên hệ",autoComplete:"off"})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:12,xl:12,lg:12,md:12,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"legalEmail",children:"Email người liên hệ"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateEmail}],label:"Email người liên hệ",name:"legalEmail",children:/*#__PURE__*/y(c,{placeholder:"Nhập email người liên hệ",autoComplete:"off"})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:12,xl:12,lg:12,md:12,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"phoneNumber",children:"Số điện thoại"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validatePhoneNumber}],label:"Số điện thoại",name:"phoneNumber",children:/*#__PURE__*/y(c,{placeholder:"Nhập số điện thoại",autoComplete:"off"})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:8,xl:8,lg:8,md:8,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"provinceId",children:"Tỉnh/Thành phố"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateProvince}],label:"Tỉnh/Thành phố",name:"provinceId",children:/*#__PURE__*/y(d,{showSearch:!0,onChange:function(n){if(!n)return O(),void F();F(),r.setFieldsValue({districtId:null,wardId:null})},optionFilterProp:"name",style:{width:"100%"},placeholder:"Chọn Tỉnh/Thành phố",children:$&&$.map(function(n){/*#__PURE__*/return y(d.Option,{name:n.description+" "+A(n.description),value:n.provinceId,children:n.description},n.provinceId)})})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:8,xl:8,lg:8,md:8,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"districtId",children:"Quận/Huyện"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateDistrict}],label:"Quận/Huyện",name:"districtId",children:/*#__PURE__*/y(d,{showSearch:!0,onChange:function(n){n?r.setFieldsValue({wardId:null}):F()},optionFilterProp:"name",style:{width:"100%"},placeholder:"Chọn Quận/Huyện",children:w&&w.map(function(n){/*#__PURE__*/return y(d.Option,{name:n.description+" "+A(n.description),value:n.districtId,children:n.description},n.districtId)})})})]}),/*#__PURE__*/_(u,{className:"form-item-wrapper",xxl:8,xl:8,lg:8,md:8,sm:24,xs:24,children:[/*#__PURE__*/y("label",{htmlFor:"wardId",children:"Phường/Xã"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateWards}],label:"Phường/Xã",name:"wardId",children:/*#__PURE__*/y(d,{showSearch:!0,optionFilterProp:"name",style:{width:"100%"},placeholder:"Chọn Phường/Xã",children:S&&S.map(function(n){/*#__PURE__*/return y(d.Option,{name:n.description+" "+A(n.description),value:n.wardId,children:n.description},n.wardId)})})})]}),/*#__PURE__*/_(u,{xxl:24,xl:24,lg:24,md:24,sm:24,xs:24,children:[/*#__PURE__*/y("span",{className:"solutions-label",children:"Dịch vụ quan tâm"}),/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateCareSolutions}],name:"careSolutions",valuePropName:"checked",children:/*#__PURE__*/y(h.Group,{style:{width:"100%"},children:/*#__PURE__*/y(s,{style:{width:"100%"},justify:"space-between",gutter:[8,8],children:v.map(function(n){/*#__PURE__*/return y(u,{xxl:6,xl:6,lg:6,md:8,sm:24,xs:24,children:/*#__PURE__*/y(h,{value:n.value,children:n.label})},n.value)})})})})]}),/*#__PURE__*/y(u,{className:"form-item-wrapper",xxl:24,xl:24,lg:24,md:24,sm:24,xs:24,children:/*#__PURE__*/y(m,{dashed:!0,style:{borderColor:"green",margin:"0 0 16px 0"}})}),/*#__PURE__*/y(u,{className:"",xxl:24,xl:24,lg:24,md:24,sm:24,xs:24,children:/*#__PURE__*/y(l.Item,{rules:[{validator:P.validateConfirm}],name:"confirm",valuePropName:"checked",children:/*#__PURE__*/y(h,{children:"Bằng việc đăng ký thông tin này, tôi đồng ý mở tài khoản doanh nghiệp tại VPBank và nhận các thông báo liên quan từ VPBank"})})}),/*#__PURE__*/y(u,{xxl:24,xl:24,lg:24,md:24,sm:24,xs:24,children:/*#__PURE__*/y(l.Item,{children:/*#__PURE__*/y(p,{disabled:L,style:{marginTop:16},className:"gradient-btn",type:"primary",htmlType:"submit",block:!0,children:"Gửi thông tin"})})})]})})]})})})})};j.propTypes={open:t.bool,onClose:t.func,onSuccess:t.func,onError:t.func,services:t.array};export{j as default};
//# sourceMappingURL=index.module.js.map
