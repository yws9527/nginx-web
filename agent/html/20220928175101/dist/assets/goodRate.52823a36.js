import{_ as J}from"./index.500a2a7a.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               */import{d as G,e as S,r as C,c as K,z as Q,aL as f,C as X,D as Y,aI as e,aH as t,u as _,aN as i,aO as Z,aR as w,b1 as $,b2 as ee,be as te,bz as oe,bA as ae,bs as ue,b8 as ne,aW as le,bk as se,b6 as de,bq as re,bl as ce}from"./arco.f893a4fd.js";import{u as ie}from"./loading.c2b41a1f.js";import{f as pe}from"./vue.de90413b.js";import{j as _e}from"./dataview.9e365703.js";import{d as g,g as E}from"./enums.4b6db02f.js";import"./chart.3eba121e.js";const me={class:"container"},fe=i("\u7537"),Ce=i("\u5973"),ge=i(" \u67E5\u8BE2 "),xe=i(" \u91CD\u7F6E "),Fe=i(" \u8FD4\u56DE "),he=G({__name:"goodRate",setup(be){const{loading:N,setLoading:D}=ie(!0),x=pe(),F=S(),u=C({planCode:"",totalRate:"",gradeCode:"",schoolCode:"",classesCode:""}),n=C({sex:"",studentName:"",identityCard:"",userStudentNo:""}),h=S([]),y=[{title:"\u5E8F\u53F7",dataIndex:"index",width:70,render:({rowIndex:a})=>a+1},{title:"\u5B66\u751F\u59D3\u540D",dataIndex:"studentName",width:140},{title:"\u6027\u522B",dataIndex:"sex",width:100,render:({record:a})=>g[a.sex]},{title:"\u5E74\u7EA7",dataIndex:"gradeName",width:140},{title:"\u73ED\u7EA7",dataIndex:"simpleName",width:140},{title:"\u5B66\u7C4D\u53F7",dataIndex:"userStudentNo",width:140},{title:"\u6807\u51C6\u5206",dataIndex:"standardScore",width:140},{title:"\u9644\u52A0\u5206",dataIndex:"totalExtraPoint",width:140},{title:"\u4F53\u6D4B\u603B\u5206",dataIndex:"totalWeightScore",width:140},{title:"\u603B\u5206\u7B49\u7EA7",dataIndex:"totalRate",width:140,render:({record:a})=>a.totalRate?E[Number(a.totalRate)]:"--"}],l=C({total:0,current:1,pageSize:10,showTotal:!0,showJumper:!0,showPageSize:!0}),p=async()=>{const{succ:a,data:o,msg:d}=await _e({sex:n.sex,planCode:u.planCode,totalRate:u.totalRate,gradeCode:u.gradeCode,schoolCode:u.schoolCode,classesCode:u.classesCode,studentName:n.studentName,identityCard:n.identityCard,userStudentNo:n.userStudentNo,pageNum:l.current,pageSize:l.pageSize});a?(h.value=(o==null?void 0:o.list)||o||[],l.total=(o==null?void 0:o.total)||0):w.error(d),D(!1)},v=()=>{l.current=1,p()},I=()=>{F.value.resetFields(),l.current=1,p()},A=a=>{l.current=a,p()},V=a=>{l.pageSize=a,l.current=1,p()},k=()=>{x.back()},z=()=>{w.warning("\u529F\u80FD\u6682\u672A\u5F00\u653E")},H=K(()=>u.totalRate==="1"?"\u603B\u5206\u4F18\u79C0\u4EBA\u6570":u.totalRate==="2"?"\u603B\u5206\u826F\u597D\u4EBA\u6570":u.totalRate==="3"?"\u603B\u5206\u53CA\u683C\u4EBA\u6570":"\u603B\u5206\u4E0D\u53CA\u683C\u4EBA\u6570");return Q(()=>{const{query:{planCode:a,totalRate:o,schoolCode:d,gradeCode:c,classesCode:s}}=x.currentRoute.value;u.planCode=a,u.totalRate=o,u.schoolCode=d,u.gradeCode=c,u.classesCode=s,p()}),(a,o)=>{const d=$,c=ee,s=te,b=oe,T=ae,B=ue,q=ne,P=f("icon-search"),m=le,U=f("icon-refresh"),R=se,L=f("icon-export"),M=de,O=re,W=ce,j=f("icon-arrow-left");return X(),Y("div",me,[e(R,{class:"general-card mb20",title:_(H)},{default:t(()=>[e(B,null,{default:t(()=>[e(s,{flex:"auto"},{default:t(()=>[e(q,{ref_key:"goodFormRef",ref:F,model:n,"label-col-props":{span:7},"wrapper-col-props":{span:17}},{default:t(()=>[e(B,{gutter:16},{default:t(()=>[e(s,{flex:"340px"},{default:t(()=>[e(c,{field:"studentName",label:"\u5B66\u751F\u540D\u79F0"},{default:t(()=>[e(d,{modelValue:n.studentName,"onUpdate:modelValue":o[0]||(o[0]=r=>n.studentName=r),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{flex:"340px"},{default:t(()=>[e(c,{field:"sex",label:"\u6027\u522B"},{default:t(()=>[e(T,{modelValue:n.sex,"onUpdate:modelValue":o[1]||(o[1]=r=>n.sex=r),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[e(b,{value:_(g).\u7537},{default:t(()=>[fe]),_:1},8,["value"]),e(b,{value:_(g).\u5973},{default:t(()=>[Ce]),_:1},8,["value"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{flex:"340px"},{default:t(()=>[e(c,{field:"userStudentNo",label:"\u5B66\u7C4D\u53F7"},{default:t(()=>[e(d,{modelValue:n.userStudentNo,"onUpdate:modelValue":o[2]||(o[2]=r=>n.userStudentNo=r),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{flex:"340px"},{default:t(()=>[e(c,{field:"identityCard",label:"\u8EAB\u4EFD\u8BC1\u53F7"},{default:t(()=>[e(d,{modelValue:n.identityCard,"onUpdate:modelValue":o[3]||(o[3]=r=>n.identityCard=r),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(s,{flex:"224px",class:"text-rt"},{default:t(()=>[e(m,{type:"primary",class:"mr16",onClick:v},{icon:t(()=>[e(P)]),default:t(()=>[ge]),_:1}),e(m,{onClick:I},{icon:t(()=>[e(U)]),default:t(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),e(W,{loading:_(N),style:{width:"100%"}},{default:t(()=>[e(R,{class:"general-card"},{default:t(()=>[e(M,{class:"mb16 mt16"},{default:t(()=>[e(m,{type:"primary",onClick:z},{icon:t(()=>[e(L)]),default:t(()=>[i(" \u5BFC\u51FA\u6240\u6709"+Z(_(E)[Number(u.totalRate)])+"\u5B66\u751F\u540D\u5355 ",1)]),_:1})]),_:1}),e(O,{stripe:"",scroll:{x:2e3},"row-key":"id",bordered:!1,columns:y,data:h.value,hoverable:!1,pagination:l,onPageChange:A,onPageSizeChange:V},null,8,["data","pagination"])]),_:1})]),_:1},8,["loading"]),e(m,{class:"cus-back-btn",size:"small",onClick:k},{icon:t(()=>[e(j)]),default:t(()=>[Fe]),_:1})])}}});const Le=J(he,[["__scopeId","data-v-867b40b8"]]);export{Le as default};
