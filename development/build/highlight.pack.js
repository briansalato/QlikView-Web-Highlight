var hljs=new function(){function k(w){return w.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function u(w){return w.nodeName.toLowerCase()}function i(x,y){var w=x&&x.exec(y);return w&&w.index==0}function s(x){var w=(x.className+" "+(x.parentNode?x.parentNode.className:"")).split(/\s+/);w=w.map(function(y){return y.replace(/^lang(uage)?-/,"")});return w.filter(function(y){return j(y)||/no(-?)highlight/.test(y)})[0]}function p(y,z){var w={};for(var x in y){w[x]=y[x]}if(z){for(var x in z){w[x]=z[x]}}return w}function v(y){var w=[];(function x(z,A){for(var B=z.firstChild;B;B=B.nextSibling){if(B.nodeType==3){A+=B.nodeValue.length}else{if(B.nodeType==1){w.push({event:"start",offset:A,node:B});A=x(B,A);if(!u(B).match(/br|hr|img|input/)){w.push({event:"stop",offset:A,node:B})}}}}return A})(y,0);return w}function r(x,z,D){var y=0;var G="";var A=[];function C(){if(!x.length||!z.length){return x.length?x:z}if(x[0].offset!=z[0].offset){return(x[0].offset<z[0].offset)?x:z}return z[0].event=="start"?x:z}function B(I){function H(J){return" "+J.nodeName+'="'+k(J.value)+'"'}G+="<"+u(I)+Array.prototype.map.call(I.attributes,H).join("")+">"}function F(H){G+="</"+u(H)+">"}function w(H){(H.event=="start"?B:F)(H.node)}while(x.length||z.length){var E=C();G+=k(D.substr(y,E[0].offset-y));y=E[0].offset;if(E==x){A.reverse().forEach(F);do{w(E.splice(0,1)[0]);E=C()}while(E==x&&E.length&&E[0].offset==y);A.reverse().forEach(B)}else{if(E[0].event=="start"){A.push(E[0].node)}else{A.pop()}w(E.splice(0,1)[0])}}return G+k(D.substr(y))}function n(z){function w(A){return(A&&A.source)||A}function x(B,A){return RegExp(w(B),"m"+(z.cI?"i":"")+(A?"g":""))}function y(E,D){if(E.compiled){return}E.compiled=true;E.k=E.k||E.bK;if(E.k){var A={};var F=function(H,G){if(z.cI){G=G.toLowerCase()}G.split(" ").forEach(function(I){var J=I.split("|");A[J[0]]=[H,J[1]?Number(J[1]):1]})};if(typeof E.k=="string"){F("keyword",E.k)}else{Object.keys(E.k).forEach(function(G){F(G,E.k[G])})}E.k=A}E.lR=x(E.l||/\b[A-Za-z0-9_]+\b/,true);if(D){if(E.bK){E.b="\\b("+E.bK.split(" ").join("|")+")\\b"}if(!E.b){E.b=/\B|\b/}E.bR=x(E.b);if(!E.e&&!E.eW){E.e=/\B|\b/}if(E.e){E.eR=x(E.e)}E.tE=w(E.e)||"";if(E.eW&&D.tE){E.tE+=(E.e?"|":"")+D.tE}}if(E.i){E.iR=x(E.i)}if(E.r===undefined){E.r=1}if(!E.c){E.c=[]}var C=[];E.c.forEach(function(G){if(G.v){G.v.forEach(function(H){C.push(p(G,H))})}else{C.push(G=="self"?E:G)}});E.c=C;E.c.forEach(function(G){y(G,E)});if(E.starts){y(E.starts,D)}var B=E.c.map(function(G){return G.bK?"\\.?("+G.b+")\\.?":G.b}).concat([E.tE,E.i]).map(w).filter(Boolean);E.t=B.length?x(B.join("|"),true):{exec:function(G){return null}}}y(z)}function c(U,N,L,T){function w(W,X){for(var V=0;V<X.c.length;V++){if(i(X.c[V].bR,W)){return X.c[V]}}}function A(W,V){if(i(W.eR,V)){return W}if(W.eW){return A(W.parent,V)}}function B(V,W){return !L&&i(W.iR,V)}function F(X,V){var W=O.cI?V[0].toLowerCase():V[0];return X.k.hasOwnProperty(W)&&X.k[W]}function x(ab,Z,Y,X){var V=X?"":b.classPrefix,W='<span class="'+V,aa=Y?"":"</span>";W+=ab+'">';return W+Z+aa}function P(){if(!K.k){return k(D)}var V="";var Y=0;K.lR.lastIndex=0;var W=K.lR.exec(D);while(W){V+=k(D.substr(Y,W.index-Y));var X=F(K,W);if(X){J+=X[1];V+=x(X[0],k(W[0]))}else{V+=k(W[0])}Y=K.lR.lastIndex;W=K.lR.exec(D)}return V+k(D.substr(Y))}function G(){if(K.sL&&!f[K.sL]){return k(D)}var V=K.sL?c(K.sL,D,true,I[K.sL]):g(D);if(K.r>0){J+=V.r}if(K.subLanguageMode=="continuous"){I[K.sL]=V.top}return x(V.language,V.value,false,true)}function S(){return K.sL!==undefined?G():P()}function R(X,W){var V=X.cN?x(X.cN,"",true):"";if(X.rB){E+=V;D=""}else{if(X.eB){E+=k(W)+V;D=""}else{E+=V;D=W}}K=Object.create(X,{parent:{value:K}})}function H(V,Z){D+=V;if(Z===undefined){E+=S();return 0}var X=w(Z,K);if(X){E+=S();R(X,Z);return X.rB?0:Z.length}var Y=A(K,Z);if(Y){var W=K;if(!(W.rE||W.eE)){D+=Z}E+=S();do{if(K.cN){E+="</span>"}J+=K.r;K=K.parent}while(K!=Y.parent);if(W.eE){E+=k(Z)}D="";if(Y.starts){R(Y.starts,"")}return W.rE?0:Z.length}if(B(Z,K)){throw new Error('Illegal lexeme "'+Z+'" for mode "'+(K.cN||"<unnamed>")+'"')}D+=Z;return Z.length||1}var O=j(U);if(!O){throw new Error('Unknown language: "'+U+'"')}n(O);var K=T||O;var I={};var E="";for(var M=K;M!=O;M=M.parent){if(M.cN){E=x(M.cN,"",true)+E}}var D="";var J=0;try{var C,z,y=0;while(true){K.t.lastIndex=y;C=K.t.exec(N);if(!C){break}z=H(N.substr(y,C.index-y),C[0]);y=C.index+z}H(N.substr(y));for(var M=K;M.parent;M=M.parent){if(M.cN){E+="</span>"}}return{r:J,value:E,language:U,top:K}}catch(Q){if(Q.message.indexOf("Illegal")!=-1){return{r:0,value:k(N)}}else{throw Q}}}function g(z,y){y=y||b.languages||Object.keys(f);var w={r:0,value:k(z)};var x=w;y.forEach(function(A){if(!j(A)){return}var B=c(A,z,false);B.language=A;if(B.r>x.r){x=B}if(B.r>w.r){x=w;w=B}});if(x.language){w.second_best=x}return w}function h(w){if(b.tabReplace){w=w.replace(/^((<[^>]+>|\t)+)/gm,function(x,A,z,y){return A.replace(/\t/g,b.tabReplace)})}if(b.useBR){w=w.replace(/\n/g,"<br>")}return w}function d(x,z,y){var A=z?o[z]:y,w=[x.trim()];if(!x.match(/(\s|^)hljs(\s|$)/)){w.push("hljs")}if(A){w.push(A)}return w.join(" ").trim()}function q(B){var C=s(B);if(/no(-?)highlight/.test(C)){return}var z;if(b.useBR){z=document.createElementNS("http://www.w3.org/1999/xhtml","div");z.innerHTML=B.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")}else{z=B}var A=z.textContent;var w=C?c(C,A,true):g(A);var y=v(z);if(y.length){var x=document.createElementNS("http://www.w3.org/1999/xhtml","div");x.innerHTML=w.value;w.value=r(y,v(x),A)}w.value=h(w.value);B.innerHTML=w.value;B.className=d(B.className,C,w.language);B.result={language:w.language,re:w.r};if(w.second_best){B.second_best={language:w.second_best.language,re:w.second_best.r}}}var b={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function t(w){b=p(b,w)}function m(){if(m.called){return}m.called=true;var w=document.querySelectorAll("pre code");Array.prototype.forEach.call(w,q)}function a(){addEventListener("DOMContentLoaded",m,false);addEventListener("load",m,false)}var f={};var o={};function e(w,y){var x=f[w]=y(this);if(x.aliases){x.aliases.forEach(function(z){o[z]=w})}}function l(){return Object.keys(f)}function j(w){return f[w]||f[o[w]]}this.highlight=c;this.highlightAuto=g;this.fixMarkup=h;this.highlightBlock=q;this.configure=t;this.initHighlighting=m;this.initHighlightingOnLoad=a;this.registerLanguage=e;this.listLanguages=l;this.getLanguage=j;this.inherit=p;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/};this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]};this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]};this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0};this.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}}();hljs.registerLanguage("javascript",function(a){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},a.ASM,a.QSM,a.CLCM,a.CBCM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBCM,a.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:true,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+a.IR,r:0}]}});hljs.registerLanguage("qlikview-expression",function(b){var d={keyword:"All Total Distinct Nodistinct",built_in:"Above acos AddMonths AddYears After Age Aggr Alt ApplyCodepage ApplyMap ARGB asin atan atan2 Author Avg Before Below BitCount Black BlackAndSchole Blue Bottom Brown Capitalize Ceil Chi2Test_chi2 Chi2Test_df Chi2Test_p CHIDIST CHIINV Chr Class ClientPlatform Color ColorMapHue ColorMapJet ColorMix1 ColorMix2 Column ColumnNo Combin ComputerName Concat ConvertToLocalTime Correl cos cosh Count Cyan DarkGray Date Date# Day DayEnd DaylightSaving DayName DayNumberOfQuarter DayNumberOfYear DayStart Dimensionality Div DocumentName DocumentPath DocumentTitle Dual e Even exp fabs Fact False FDIST FieldIndex FieldValue FieldValueCount FindOneOf FINV First FirstSortedValue FirstWorkDate Floor fmod Frac Fractile FV GetActiveSheetId GetAlternativeCount GetCurrentField GetCurrentSelections GetExcludedCount GetExtendedProperty GetFieldSelections GetNotSelectedCount GetObjectField GetPossibleCount GetRegistryString GetSelectedCount GMT Green Hash128 Hash160 Hash256 Hour HRank HSL If InDay InDayToTime Index Info InLunarWeek InLunarWeekToDate InMonth InMonths InMonthsToDate InMonthToDate InputAvg InputSum InQuarter InQuarterToDate Interval Interval# InWeek InWeekToDate InYear InYearToDate IRR IsNull IsNum IsText KeepChar Kurtosis Last LastWorkDate Left Len LightBlue LightCyan LightGray LightGreen LightMagenta LightRed LINEST_B LINEST_DF LINEST_F LINEST_M LINEST_R2 LINEST_SEB LINEST_SEM LINEST_SEY LINEST_SSREG LINEST_SSRESID LocalTime log log10 Lower LTrim LunarWeekEnd LunarWeekName LunarWeekStart Magenta MakeDate MakeTime MakeWeekDate MapSubString Match Max MaxString Median Mid Min MinString Minute MissingCount MixMatch Mod Mode Money Money# Month MonthEnd MonthName MonthsEnd MonthsName MonthsStart MonthStart NATIVE NetWorkDays NoOfColumns NoOfReports NoOfRows NORMDIST NORMINV Now nPer NPV Null NullCount Num Num# NumAvg NumCount NumericCount NumMax NumMin NumSum Odd Only Ord OSUser Permut Pi Pick Pmt pow PurgeChar PV QlikTechBlue QlikTechGray QlikViewVersion QuarterEnd QuarterName QuarterStart QVUser Rand RangeAvg RangeCorrel RangeCount RangeFractile RangeIRR RangeKurtosis RangeMax RangeMaxString RangeMin RangeMinString RangeMissingCount RangeMode RangeNPV RangeNullCount RangeNumericCount RangeOnly RangeSkew RangeStdev RangeSum RangeTextCount RangeXIRR RangeXNPV Rank Rate Red ReloadTime Repeat Replace ReportComment ReportId ReportName ReportNumber RGB Right Round RowNo RTrim Second SecondaryDimensionality SetDateYear SetDateYearMonth Sign sin sinh Skew sqr sqrt StateName Stdev Sterr STEYX SubField SubStringCount Sum SysColor tan tanh TDIST Text TextBetween TextCount Time Time# Timestamp Timestamp# TimeZone TINV Today Top Trim True TTest1_conf TTest1_df TTest1_dif TTest1_lower TTest1_sig TTest1_sterr TTest1_t TTest1_upper TTest1w_conf TTest1w_df TTest1w_dif TTest1w_lower TTest1w_sig TTest1w_sterr TTest1w_t TTest1w_upper TTest_conf TTest_df TTest_dif TTest_lower TTest_sig TTest_sterr TTest_t TTest_upper TTestw_conf TTestw_df TTestw_dif TTestw_lower TTestw_sig TTestw_sterr TTestw_t TTestw_upper Upper UTC ValueList ValueLoop VRank Week WeekDay WeekEnd WeekName WeekStart WeekYear White WildMatch WildMatch5 XIRR XNPV Year Year2Date YearEnd YearName YearStart YearToDate Yellow ZTest_conf ZTest_dif ZTest_lower ZTest_sig ZTest_sterr ZTest_upper ZTest_z ZTestw_conf ZTestw_dif ZTestw_lower ZTestw_sig ZTestw_sterr ZTestw_upper ZTestw_z"};var a={cN:"string",b:"'",e:"'",i:"\\n",c:[b.BE,{b:"''"}],r:0};var e={cN:"string",b:'"',e:'"',i:"\\n",c:[b.BE,{b:'""'}],r:0};var c={cN:"variable",b:"\\$\\(",e:"\\)",i:"\\n",r:10};return{aliases:["exp","qlikview-exp","qv-exp"],cI:true,k:d,c:[b.CLCM,b.CBCM,b.QSM,a,e,{cN:"field",b:"\\[",e:"\\]",r:0},c]}});hljs.registerLanguage("qlikview-script",function(b){var a={keyword:"Add Alias And As Autogenerate|10 Binary Buffer Bundle By Call Case Comment Concatenate Connect Crosstable Default Directory Disconnect Distinct Do Drop Each Else Elseif End Endif Endsub Endswitch Execute Exit Field Fields First For Force From From_Field Generic Group Hierarchy|10 HierarchyBelongsTo|10 If Image_size Info Inline Inner Inputfield|10 Intervalmatch|10 Into Join Keep Left Let Load Loop Loosen Map Mapping Next Noconcatenate|10 Not NullAsNull NullAsValue Or Outer Qualify Rename Replace Resident Right Sample Script Section Select Semantic Set Sleep SQL SQLColumns SQLTables SQLTypes Star Step Store Sub Switch Table Tables Tag Then To Trace Unless Unmap Unqualify Untag Until Using When Where While With",built_in:"Acos Addmonths Addyears Age Alt Applycodepage Applymap Argb Asin Atan Atan2 Attribute Author Autonumber Autonumberhash128 Autonumberhash256 Avg Bitcount Black Blackandschole Blue Brown Capitalize Ceil Chi2test_chi2 Chi2test_df Chi2test_p Chidist Chiinv Chr Class Clientplatform Color Colormaphue Colormapjet Colormix1 Colormix2 Combin Computername Concat Connectstring Converttolocaltime Correl Cos Cosh Count Cyan Darkgray Date# Date Day Dayend Daylightsaving Dayname Daynumberofquarter Daynumberofyear Daystart Div DocumentName DocumentPath DocumentTitle Dual E Evaluate Even Exists Exp Fabs Fact False Fdist FieldIndex FieldName FieldNumber FieldValue FieldValueCount FileBaseName FileDir FileExtension FileName FilePath FileSize FileTime FindOneOf Finv FirstSortedValue FirstValue FirstWorkDate Floor Fmod Frac Fractile Fv GetExtendedProperty GetFolderPath GetObjectField GetRegistryString GMT Green Hash128 Hash160 Hash256 Hour HSL if InDay InDayToTime Index InLunarWeek InLunarWeekToDate InMonth InMonths InMonthsToDate InMonthToDate Input InputAvg InputSum InQuarter InQuarterToDate Interval Interval# InWeek InWeekToDate InYear InYearToDate IRR IsNull IsNum IsPartialReload IsText IterNo KeepChar Kurtosis LastValue LastWorkDate Len LightBlue LightCyan LightGray LightGreen LightMagenta LightRed LINEST_B LINEST_DF LINEST_F LINEST_M LINEST_R2 LINEST_SEB LINEST_SEM LINEST_SEY LINEST_SSREG LINEST_SSRESID LocalTime log log10 Lookup Lower LTrim LunarWeekEnd LunarWeekName LunarWeekStart Magenta MakeDate MakeTime MakeWeekDate MapSubString Match Max MaxString Median Mid Min MinString Minute MissingCount MixMatch Mod Mode Money Money# Month MonthEnd MonthName MonthsEnd MonthsName MonthsStart MonthStart MsgBox NetWorkDays NoOfFields NoOfReports NoOfRows NoOfTables NORMDIST NORMINV Now nPer NPV Null NullCount Num Num# NumAvg NumCount NumericCount NumMax NumMin NumSum Odd Only Ord OSUser Peek Permut Pi Pick Pmt pow Previous PurgeChar PV QlikTechBlue QlikTechGray QlikViewVersion QuarterEnd QuarterName QuarterStart QvdCreateTime QvdFieldName QvdNoOfFields QvdNoOfRecords QvdTableName QVUser Rand RangeAvg RangeCorrel RangeCount RangeFractile RangeIRR RangeKurtosis RangeMax RangeMaxString RangeMin RangeMinString RangeMissingCount RangeMode RangeNPV RangeNullCount RangeNumericCount RangeOnly RangeSkew RangeStdev RangeSum RangeTextCount RangeXIRR RangeXNPV Rate RecNo Red ReloadTime Repeat Replace ReportComment ReportId ReportName ReportNumber RGB Right Round RowNo RTrim Second SetDateYear SetDateYearMonth Sign sin sinh Skew sqr sqrt Stdev Sterr STEYX SubField|10 SubStringCount Sum SysColor TableName TableNumber tan tanh TDIST Text TextBetween TextCount Time Time# Timestamp Timestamp# TimeZone TINV Today Trim True TTest1_conf TTest1_df TTest1_dif TTest1_lower TTest1_sig TTest1_sterr TTest1_t TTest1_upper TTest1w_conf TTest1w_df TTest1w_dif TTest1w_lower TTest1w_sig TTest1w_sterr TTest1w_t TTest1w_upper TTest_conf TTest_df TTest_dif TTest_lower TTest_sig TTest_sterr TTest_t TTest_upper TTestw_conf TTestw_df TTestw_dif TTestw_lower TTestw_sig TTestw_sterr TTestw_t TTestw_upper Upper UTC Week WeekDay WeekEnd WeekName WeekStart WeekYear White WildMatch WildMatch5 XIRR XNPV Year Year2Date YearEnd YearName YearStart YearToDate Yellow ZTest_conf ZTest_dif ZTest_lower ZTest_sig ZTest_sterr ZTest_upper ZTest_z ZTestw_conf ZTestw_dif ZTestw_lower ZTestw_sig ZTestw_sterr ZTestw_upper ZTestw_z",};var d={cN:"string",b:"'",e:"'",i:"\\n",c:[b.BE,{b:"''"}],r:0};var g={cN:"string",b:'"',e:'"',i:"\\n",c:[b.BE,{b:'""'}],r:0};var c={cN:"comment",b:"^rem\\b",e:";",r:10};var e={cN:"variable",b:"\\b(let|set)\\b",e:"\\w+",k:"set let",i:"\\n",r:0};var f={cN:"variable",b:"\\$\\(",e:"\\)",i:"\\n",r:10};return{aliases:["qvs","qlikview"],cI:true,k:a,c:[b.CLCM,b.CBCM,b.QSM,d,g,c,e,f,{cN:"field",b:"\\[",e:"\\]",r:0},{cN:"sql-statement",b:"\\bsql\\b",e:";",k:"sql",c:[b.CLCM,b.CBCM,b.QSM,d,g,f,]},{cN:"load-statement",b:"\\bload\\b",e:"(;|resident|inline|autogenerate|from)",k:a,c:[b.CLCM,b.CBCM,b.QSM,d,g,],r:10}]}});hljs.registerLanguage("sql",function(a){var b={cN:"comment",b:"--",e:"$"};return{cI:true,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:true,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM,a.CBCM,b]},a.CBCM,b]}});hljs.registerLanguage("vbscript",function(a){return{aliases:["vbs"],cI:true,k:{keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",built_in:"lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",literal:"true false null nothing empty"},i:"//",c:[a.inherit(a.QSM,{c:[{b:'""'}]}),{cN:"comment",b:/'/,e:/$/,r:0},a.CNM]}});