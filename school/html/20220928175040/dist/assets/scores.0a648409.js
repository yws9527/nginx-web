import{c as e}from"./index.928e1f3b.js";const o={studentScoreList:"/oapi/student/score/list",studentScoreDetail:"/oapi/student/score/detail",studentScoreListPlan:"/oapi/student/score/list/plan",studentScoreScoreAndRateExport:"/oapi/student/score/scoreAndRate/export",studentScoreExport:"/oapi/student/score/export"},r=t=>e({method:"get",params:t,url:o.studentScoreList}),n=t=>e({method:"get",params:t,url:o.studentScoreDetail}),c=()=>e({method:"get",url:o.studentScoreListPlan}),d=t=>e({data:t,method:"post",responseType:"blob",url:o.studentScoreScoreAndRateExport}),a=t=>e({data:t,method:"post",responseType:"blob",url:o.studentScoreExport});export{c as a,a as b,d as c,n as d,r as s};
