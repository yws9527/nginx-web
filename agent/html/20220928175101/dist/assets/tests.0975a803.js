import{c as e}from"./index.500a2a7a.js";const o={planGroupRuleSave:"/oapi/plan/student/group/save",planGroupRuleModify:"/oapi/plan/student/group/modify",planGroupRuleDetail:"/oapi/plan/student/group/detail",planStudentPage:"/oapi/plan/student/list",planStudentProgramList:"/oapi/plan/student/programList",planStudentDetail:"/oapi/plan/student/detail",planStudentModify:"/oapi/plan/student/modify",planStudentClear:"/oapi/plan/student/clear",planStudentRemove:"/oapi/plan/student/remove",planStudentRegistration:"/oapi/plan/student/registration",planScoreClear:"/oapi/plan/score/clear",planScoreRemove:"/oapi/plan/score/remove",planScoreShowList:"/oapi/plan/score/showList",planScoreShow:"/oapi/plan/score/show",planScoreList:"/oapi/plan/score/list",planScoreDetail:"/oapi/plan/score/detail",planScoreSave:"/oapi/plan/score/save",planList:"/oapi/plan/list",planSave:"/oapi/plan/save",planSchool:"/oapi/plan/school",planGrade:"/oapi/plan/grade",planClasses:"/oapi/plan/classes",planStudentClasses:"/oapi/plan/student/classes",planModify:"/oapi/plan/modify",planRemove:"/oapi/plan/remove",planDetail:"/oapi/plan/detail",planScoreGrade:"/oapi/plan/score/grand",planScoreClasses:"/oapi/plan/score/classes"},t=a=>e({data:a,method:"post",url:o.planGroupRuleSave}),p=a=>e({data:a,method:"post",url:o.planGroupRuleModify}),n=a=>e({params:a,method:"get",url:o.planGroupRuleDetail}),s=a=>e({params:a,method:"get",url:o.planStudentPage}),r=a=>e({params:a,method:"get",url:o.planStudentDetail}),i=a=>e({data:a,method:"post",url:o.planStudentModify}),d=a=>e({url:o.planStudentRemove,method:"post",data:a}),u=a=>e({url:o.planStudentRegistration,method:"post",data:a}),c=a=>e({data:a,method:"post",url:o.planScoreClear}),S=a=>e({url:o.planScoreRemove,method:"post",data:a}),m=a=>e({url:o.planScoreShowList,method:"post",data:a}),h=a=>e({url:o.planScoreShow,method:"post",data:a}),g=a=>e({url:o.planScoreList,method:"post",data:a}),v=a=>e({params:a,method:"get",url:o.planScoreDetail}),R=a=>e({params:a,method:"get",url:o.planList}),G=a=>e({data:a,method:"post",url:o.planSave}),f=()=>e({method:"get",url:o.planSchool}),y=a=>e({params:a,method:"get",url:o.planGrade}),C=a=>e({params:a,method:"get",url:o.planClasses}),D=a=>e({params:a,method:"get",url:o.planStudentClasses}),L=a=>e({data:a,method:"post",url:o.planModify}),w=a=>e({data:a,method:"post",url:o.planRemove}),M=a=>e({params:a,method:"get",url:o.planDetail}),P=a=>e({data:a,method:"post",url:o.planScoreGrade}),x=a=>e({data:a,method:"post",url:o.planScoreClasses});export{f as a,M as b,L as c,G as d,y as e,C as f,s as g,n as h,t as i,p as j,u as k,r as l,i as m,D as n,d as o,R as p,g as q,P as r,x as s,m as t,c as u,h as v,S as w,w as x,v as y};