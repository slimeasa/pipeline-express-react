(this["webpackJsonppipeline-express-react-example"]=this["webpackJsonppipeline-express-react-example"]||[]).push([[0],{139:function(t,e,s){"use strict";s.r(e);s(33);var n=s(6),i=s(60),a=s.n(i),c=s(20),r=s.p+"static/media/pipeline-express.1dec43b1.jpg",l=s(3);const h=c.c.init();class o extends n.Component{constructor(t){super(t),this.inputRecipient=t=>{this.setState({recipient:t.target.value})},this.inputAmount=t=>{this.setState({amount:t.target.value})},this.inputNote=t=>{this.setState({note:t.target.value})},this.handleCheckChange=()=>{this.setState({main:!this.state.main},(()=>c.c.main=this.state.main))},this.state={main:!0,myAddress:"",recipient:"",amount:0,note:"",txID:""}}render(){return Object(l.jsxs)("div",{align:"center",class:"card",children:[Object(l.jsx)("img",{alt:"Pipeline Express",src:r,width:"300"}),Object(l.jsx)("br",{}),Object(l.jsx)(c.a,{wallet:h,context:this,returnTo:"myAddress"}),Object(l.jsxs)("label",{children:["MainNet:",Object(l.jsx)("input",{name:"mainnet",type:"checkbox",checked:this.state.main,onChange:this.handleCheckChange})]}),Object(l.jsx)("h3",{children:"My Address: "+this.state.myAddress}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("label",{class:"form-label",children:["Recipient:",Object(l.jsx)("input",{type:"text",class:"form-control",onChange:this.inputRecipient})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{class:"form-label",children:["Amount:",Object(l.jsx)("input",{type:"number",class:"form-control",onChange:this.inputAmount})]}),Object(l.jsxs)("label",{class:"form-label",children:[Object(l.jsx)("br",{}),"Note:",Object(l.jsx)("input",{type:"text",class:"form-control",onChange:this.inputNote})]})]}),Object(l.jsx)(c.b,{index:0,recipient:this.state.recipient,amount:this.state.amount,note:this.state.note,myAddress:this.state.myAddress,wallet:h,context:this,returnTo:"txID"}),Object(l.jsx)("h3",{children:"Transaction ID: "+this.state.txID})]})}}var p=o;a.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))},33:function(t,e,s){},88:function(t,e){}},[[139,1,2]]]);
//# sourceMappingURL=main.25b81192.chunk.js.map