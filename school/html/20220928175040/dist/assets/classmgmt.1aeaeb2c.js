import{c as a}from"./index.928e1f3b.js";const e={clsssesList:"/oapi/classes/list",removeClass:"/oapi/classes/remove",saveClass:"/oapi/classes/saveBatch",gradeList:"/oapi/school/grade/list",alisName:"/oapi/school/aliasName/modify",classesNumber:"/oapi/classes/number"},l=s=>a({method:"get",url:e.clsssesList,params:s}),t=s=>a({method:"post",url:e.removeClass,data:s}),r=s=>a({method:"post",url:e.saveClass,data:s}),c=()=>a({method:"get",url:e.gradeList}),m=s=>a({method:"get",url:e.classesNumber,params:s});export{m as a,l as c,c as g,t as r,r as s};