import{c as s}from"./index.500a2a7a.js";const t={schoolSave:"/oapi/school/save",schoolDetail:"/oapi/school/detail",schoolList:"/oapi/school/list",schoolRemove:"/oapi/school/remove",schoolModify:"/oapi/school/modify"},a=o=>s({method:"post",url:t.schoolSave,data:o}),e=o=>s({method:"get",url:t.schoolDetail,params:o}),h=o=>s({method:"get",url:t.schoolList,params:o}),i=o=>s({method:"post",url:t.schoolRemove,data:o}),r=o=>s({method:"post",url:t.schoolModify,data:o}),c={citys:"/oapi/dict/area/list"},m=o=>s({method:"get",url:c.citys,params:o});export{m as a,i as b,e as c,r as d,a as e,h as s};
