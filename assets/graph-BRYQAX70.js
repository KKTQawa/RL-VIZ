import{c as e,i as t,n,r,s as i}from"./trainingDiagnostics-C36u2R2c.js";var a=null,o=null,s=null,c=null,l=!1,u={text:`#f5e7a6`,textMuted:`#d8cd93`,panel:`rgba(8, 47, 53, 0.78)`,panelStrong:`rgba(10, 58, 65, 0.88)`,border:`rgba(108, 214, 203, 0.16)`,borderStrong:`rgba(108, 214, 203, 0.28)`,reward:`#63d8d0`,rewardSoft:`#93ebe4`,steps:`#93d3f2`,stepsSoft:`#c1e6f8`,actor:`#f0d572`,critic:`#8fd0ee`,success:`#7cd8bc`,warning:`#ffb48b`,danger:`#ff9e7f`,entropy:`#a8dfd0`,neutral:`#a9c7c8`,tooltip:`rgba(6, 41, 46, 0.96)`,gridLine:`rgba(108, 214, 203, 0.12)`,axisLine:`rgba(108, 214, 203, 0.24)`};function d(){if(document.getElementById(`training-dashboard-styles`))return;let e=document.createElement(`style`);e.id=`training-dashboard-styles`,e.textContent=`
    .training-dashboard {
      width: min(1200px, 96vw);
      display: grid;
      gap: 18px;
      margin: 0 auto;
      padding: 8px 0 28px;
      color: var(--ink-text, #f5e7a6);
      font-family: var(--font-ui, "PingFang SC", sans-serif);
    }
    .training-dashboard__header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: flex-end;
      flex-wrap: wrap;
    }
    .training-dashboard__title {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
      color: var(--ink-heading-primary, #fff1b8);
      font-family: var(--font-heading, serif);
    }
    .training-dashboard__subtitle {
      margin: 4px 0 0;
      color: var(--ink-copy, #d3d9ca);
      font-size: 13px;
    }
    .training-dashboard__cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
    }
    .training-dashboard__card {
      border-radius: 20px;
      background: rgba(14, 82, 92, 0.74);
      border: 1px solid ${u.border};
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.24);
      padding: 13px 15px;
      backdrop-filter: blur(12px);
    }
    .training-dashboard__card-label {
      display: block;
      font-size: 12px;
      color: rgba(184, 232, 226, 0.9);
      margin-bottom: 6px;
      letter-spacing: 0.04em;
    }
    .training-dashboard__card-value {
      display: block;
      font-size: 24px;
      font-weight: 700;
      color: var(--ink-text, #f5e7a6);
    }
    .training-dashboard__charts {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .training-dashboard__debug-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 16px;
    }
    .training-dashboard__panel {
      border-radius: 24px;
      background: rgba(8, 56, 63, 0.7);
      border: 1px solid ${u.border};
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.24);
      padding: 14px;
      backdrop-filter: blur(12px);
    }
    .training-dashboard__panel-title {
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 10px;
      color: var(--ink-heading-secondary, #f2e0a1);
    }
    .training-dashboard__chart {
      width: 100%;
      height: 280px;
    }
    .training-dashboard__chart--compact {
      height: 240px;
    }
    .training-dashboard__list {
      display: grid;
      gap: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .training-dashboard__list-item {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(14, 82, 92, 0.68);
    }
    .training-dashboard__list-label {
      font-size: 13px;
      color: var(--ink-text, #f5e7a6);
      font-weight: 600;
    }
    .training-dashboard__list-value {
      font-size: 12px;
      color: rgba(184, 232, 226, 0.88);
      text-align: right;
    }
    .training-dashboard__empty {
      margin: 0;
      color: rgba(184, 232, 226, 0.88);
      font-size: 13px;
    }
    @media (max-width: 860px) {
      .training-dashboard__debug-grid {
        grid-template-columns: 1fr;
      }
    }
  `,document.head.appendChild(e)}var f={Reward:u.reward,"Reward MA":u.rewardSoft,Steps:u.steps,"Steps MA":u.stepsSoft,"Actor Loss":u.actor,"Critic Loss":u.critic,"Actor Delta":u.reward,"Critic Delta":u.success,"Ratio Mean":u.reward,"Ratio Min":u.neutral,"Ratio Max":u.danger,Entropy:u.entropy,"Adv Mean":u.success,"Adv Std":u.actor,"State Nonzero":u.neutral,"Legal Actions":u.success,"Legal Rate":u.reward,"Invalid/Valid":u.danger,"Repeat Move Rate":u.danger,"Repeat State Rate":u.warning,"Attack Move Rate":u.success,"Win Episodes":u.success,"Loss Episodes":u.danger,"Truncated Episodes":u.neutral,"Q Delta":u.danger,Epsilon:u.actor,"Max Q":u.reward,"Visited States":u.steps};function p(e){return Object.entries(f).find(([t])=>e.startsWith(t))?.[1]??`#c7ced0`}function m(e){return e.map(e=>{let t=p(e.name),n=e.name.includes(`MA`);return{...e,symbol:`none`,showSymbol:!1,lineStyle:{width:n?3:2,type:n?`dashed`:`solid`,color:t},itemStyle:{color:t},areaStyle:e.name===`Reward`||e.name===`Reward MA`?{color:`${t}22`}:void 0,emphasis:{focus:`series`}}})}function h(){let e=document.getElementById(`graph-container`);if(!e)return null;d(),l||=(e.innerHTML=`
      <div class="training-dashboard">
        <div class="training-dashboard__header">
          <div>
            <h2 class="training-dashboard__title" id="training-dashboard-title">RL Training Diagnostics</h2>
            <p class="training-dashboard__subtitle" id="training-dashboard-subtitle">Track whether training is healthy and why performance stalls.</p>
          </div>
        </div>
        <div class="training-dashboard__cards" id="training-dashboard-cards"></div>
        <div class="training-dashboard__charts">
          <div class="training-dashboard__panel">
            <h3 class="training-dashboard__panel-title" id="reward-panel-title">Reward</h3>
            <div class="training-dashboard__chart" id="reward-chart"></div>
          </div>
          <div class="training-dashboard__panel">
            <h3 class="training-dashboard__panel-title" id="loss-panel-title">Loss</h3>
            <div class="training-dashboard__chart" id="loss-chart"></div>
          </div>
          <div class="training-dashboard__panel">
            <h3 class="training-dashboard__panel-title" id="diagnostics-panel-title">Diagnostics</h3>
            <div class="training-dashboard__chart" id="diagnostics-chart"></div>
          </div>
          <div class="training-dashboard__debug-grid">
            <div class="training-dashboard__panel">
              <h3 class="training-dashboard__panel-title" id="action-frequency-panel-title">Top 5 Actions Frequency</h3>
              <div id="action-frequency-summary"></div>
            </div>
            <div class="training-dashboard__panel">
              <h3 class="training-dashboard__panel-title" id="distribution-panel-title">Win vs Loss Reward Distribution</h3>
              <div class="training-dashboard__chart training-dashboard__chart--compact" id="distribution-chart"></div>
            </div>
          </div>
        </div>
      </div>
    `,e.style.width=`100%`,e.style.height=`auto`,!0);let t=document.getElementById(`reward-chart`),n=document.getElementById(`loss-chart`),r=document.getElementById(`diagnostics-chart`),i=document.getElementById(`distribution-chart`);return!a&&t&&(a=echarts.init(t)),!o&&n&&(o=echarts.init(n)),!s&&r&&(s=echarts.init(r)),!c&&i&&(c=echarts.init(i)),window.__trainingDashboardResizeBound||(window.__trainingDashboardResizeBound=!0,window.addEventListener(`resize`,()=>{a?.resize(),o?.resize(),s?.resize(),c?.resize()})),e}function g(r,i){let a=e(r,i.movingAverageWindow),o=[{label:`Latest Episode`,value:n(a.latestEpisode,0)},{label:`Reward MA(${i.movingAverageWindow})`,value:n(a.rewardMean,3)},{label:`Steps MA(${i.movingAverageWindow})`,value:n(a.stepsMean,2)},{label:`Success Rate(${i.movingAverageWindow})`,value:a.successRate===null?`--`:`${(a.successRate*100).toFixed(1)}%`},{label:`Win Rate(${i.movingAverageWindow})`,value:a.winRate===null?`--`:`${(a.winRate*100).toFixed(1)}%`}];return i.mode===`ppo`?o.push({label:`Actor Loss`,value:n(t(r,`actorLoss`),4)},{label:`Critic Loss`,value:n(t(r,`criticLoss`),4)},{label:`Actor Delta`,value:n(t(r,`actorParamDelta`),4)},{label:`Critic Delta`,value:n(t(r,`criticParamDelta`),4)},{label:`Ratio Mean`,value:n(t(r,`ratioMean`),4)},{label:`Entropy`,value:n(t(r,`entropy`),4)},{label:`Adv Std`,value:n(t(r,`advantageStd`),4)},{label:`State Nonzero`,value:n(t(r,`stateNonzeroCount`),1)},{label:`Legal Actions`,value:n(t(r,`legalActions`),1)},{label:`Legal Rate`,value:t(r,`legalRate`)===null?`--`:`${(t(r,`legalRate`)*100).toFixed(1)}%`},{label:`Invalid / Valid`,value:n(t(r,`invalidPerValid`),3)},{label:`Repeat Move Rate`,value:t(r,`repeatMoveRate`)===null?`--`:`${(t(r,`repeatMoveRate`)*100).toFixed(1)}%`}):i.mode===`qlearning`&&o.push({label:`Q Delta`,value:n(t(r,`qDelta`),4)},{label:`Epsilon`,value:n(t(r,`epsilon`),4)},{label:`Max Q`,value:n(t(r,`maxQ`),4)},{label:`Visited States`,value:n(t(r,`visitedStates`),0)}),o}function _(e,t){let n=document.getElementById(`training-dashboard-cards`);if(!n)return;let r=g(e,t),i=e=>e.includes(`Reward`)?u.reward:e.includes(`Success`)||e.includes(`Win`)?u.success:e.includes(`Loss`)||e.includes(`Invalid`)?u.danger:e.includes(`Episode`)?u.actor:e.includes(`Critic`)?u.critic:e.includes(`Actor`)?u.actor:e.includes(`Entropy`)?u.entropy:e.includes(`Repeat`)?u.warning:u.text;n.innerHTML=r.map(e=>`
    <div class="training-dashboard__card">
      <span class="training-dashboard__card-label">${e.label}</span>
      <span class="training-dashboard__card-value" style="color:${i(e.label)}">${e.value}</span>
    </div>
  `).join(``)}function v(e,t=20,n=5){let r=e.slice(-t),i=new Map,a=0;for(let e of r)for(let t of e.actionCounts??[]){let e=i.get(t.actionId)??{actionId:t.actionId,count:0,label:t.label??`action:${t.actionId}`};e.count+=t.count??0,i.set(t.actionId,e),a+=t.count??0}return Array.from(i.values()).sort((e,t)=>t.count-e.count||e.actionId-t.actionId).slice(0,n).map(e=>({...e,rate:a>0?e.count/a:0}))}function y(e,t){let n=document.getElementById(`action-frequency-summary`);if(!n)return;let r=v(e,t.movingAverageWindow,5);if(r.length===0){n.innerHTML=`<p class="training-dashboard__empty">暂无动作频率数据。</p>`;return}n.innerHTML=`
    <ol class="training-dashboard__list">
      ${r.map((e,t)=>`
        <li class="training-dashboard__list-item">
          <span class="training-dashboard__list-label">#${t+1} ${e.label}</span>
          <span class="training-dashboard__list-value">${e.count} moves · ${(e.rate*100).toFixed(1)}%</span>
        </li>
      `).join(``)}
    </ol>
  `}function b(e,t=12){let n={win:e.filter(e=>e.outcome===`win`).map(e=>e.reward),loss:e.filter(e=>e.outcome===`loss`).map(e=>e.reward),truncated:e.filter(e=>e.outcome===`truncated`).map(e=>e.reward)},r=Object.values(n).flat();if(r.length===0)return null;let i=Math.min(...r),a=Math.max(...r);i===a&&(i-=.5,a+=.5);let o=(a-i)/t,s=Array(t).fill(null).map((e,n)=>({start:i+o*n,end:n===t-1?a:i+o*(n+1),win:0,loss:0,truncated:0})),c=e=>{let n=Math.floor((e-i)/o);return Math.max(0,Math.min(t-1,n))};for(let[e,t]of Object.entries(n))for(let n of t)s[c(n)][e]+=1;return{labels:s.map(e=>`${e.start.toFixed(2)} to ${e.end.toFixed(2)}`),winData:s.map(e=>e.win),lossData:s.map(e=>e.loss),truncatedData:s.map(e=>e.truncated)}}function x(e){let t=b(e);if(!t)return{title:{text:`Reward Distribution`,textStyle:{fontSize:16,fontWeight:700,color:u.text,fontFamily:`"STSong", "Songti SC", "Noto Serif SC", serif`}},graphic:{type:`text`,left:`center`,top:`middle`,style:{text:`No outcome reward data yet`,fill:u.textMuted,fontSize:13}}};let n=m([{name:`Win Episodes`,type:`bar`,stack:`reward-distribution`,data:t.winData},{name:`Loss Episodes`,type:`bar`,stack:`reward-distribution`,data:t.lossData},{name:`Truncated Episodes`,type:`bar`,stack:`reward-distribution`,data:t.truncatedData}]).map(e=>({...e,barMaxWidth:24,areaStyle:void 0}));return{backgroundColor:`transparent`,color:Object.values(f),animationDuration:300,tooltip:{trigger:`axis`,axisPointer:{type:`shadow`},backgroundColor:u.tooltip,borderColor:u.borderStrong,borderWidth:1,textStyle:{color:u.text,fontSize:13}},legend:{top:8,textStyle:{color:u.textMuted,fontSize:12}},grid:{left:`7%`,right:`4%`,bottom:`16%`,top:`20%`,containLabel:!0},xAxis:{type:`category`,data:t.labels,axisLabel:{color:u.textMuted,fontSize:11,rotate:18},axisLine:{lineStyle:{color:u.axisLine}}},yAxis:{type:`value`,name:`Episodes`,axisLabel:{color:u.textMuted,fontSize:12},axisLine:{show:!0,lineStyle:{color:u.axisLine}},splitLine:{lineStyle:{color:u.gridLine}},nameTextStyle:{color:u.textMuted,fontSize:12}},series:n}}function S(e,t){let n=i(e,`reward`,t.movingAverageWindow),r=i(e,`steps`,t.movingAverageWindow);return[{name:`Reward`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.reward)},{name:`Reward MA(${t.movingAverageWindow})`,type:`line`,smooth:!0,yAxisIndex:0,data:n},{name:`Steps`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.steps)},{name:`Steps MA(${t.movingAverageWindow})`,type:`line`,smooth:!0,yAxisIndex:1,data:r}]}function C(e,t){let n=[];return t.mode===`ppo`?(r(e,`actorLoss`)&&n.push({name:`Actor Loss`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.actorLoss)}),r(e,`criticLoss`)&&n.push({name:`Critic Loss`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.criticLoss)}),r(e,`actorParamDelta`)&&n.push({name:`Actor Delta`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.actorParamDelta)}),r(e,`criticParamDelta`)&&n.push({name:`Critic Delta`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.criticParamDelta)})):t.mode===`qlearning`&&(r(e,`qDelta`)&&n.push({name:`Q Delta`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.qDelta)}),r(e,`maxQ`)&&n.push({name:`Max Q`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.maxQ)})),n}function w(e,t){let n=[];return r(e,`success`)&&n.push({name:`Success Rate`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.success===null||e.success===void 0?null:Number(e.success))}),r(e,`win`)&&n.push({name:`Win Rate`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.win===null||e.win===void 0?null:Number(e.win))}),t.mode===`ppo`?(r(e,`legalRate`)&&n.push({name:`Legal Rate`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.legalRate)}),r(e,`ratioMean`)&&n.push({name:`Ratio Mean`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.ratioMean)}),r(e,`ratioMin`)&&n.push({name:`Ratio Min`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.ratioMin)}),r(e,`ratioMax`)&&n.push({name:`Ratio Max`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.ratioMax)}),r(e,`entropy`)&&n.push({name:`Entropy`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.entropy)}),r(e,`advantageMean`)&&n.push({name:`Adv Mean`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.advantageMean)}),r(e,`advantageStd`)&&n.push({name:`Adv Std`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.advantageStd)}),r(e,`stateNonzeroCount`)&&n.push({name:`State Nonzero`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.stateNonzeroCount)}),r(e,`legalActions`)&&n.push({name:`Legal Actions`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.legalActions)}),r(e,`invalidPerValid`)&&n.push({name:`Invalid/Valid`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.invalidPerValid)}),r(e,`repeatRate`)&&n.push({name:`Repeat State Rate`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.repeatRate)}),r(e,`repeatMoveRate`)&&n.push({name:`Repeat Move Rate`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.repeatMoveRate)}),r(e,`attackMovesRate`)&&n.push({name:`Attack Move Rate`,type:`line`,smooth:!0,yAxisIndex:0,data:e.map(e=>e.attackMovesRate)})):t.mode===`qlearning`&&(r(e,`epsilon`)&&n.push({name:`Epsilon`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.epsilon)}),r(e,`visitedStates`)&&n.push({name:`Visited States`,type:`line`,smooth:!0,yAxisIndex:1,data:e.map(e=>e.visitedStates)})),n}function T(e,t,n){let r={},i=e=>n===`reward`?e===`Reward`||e.startsWith(`Reward MA`)||e===`Steps`||e.startsWith(`Steps MA`):n===`loss`?t===`ppo`?e===`Actor Loss`||e===`Critic Loss`||e===`Actor Delta`||e===`Critic Delta`:e===`Q Delta`||e===`Max Q`:n===`diagnostics`?t===`ppo`?e===`Ratio Mean`||e===`Legal Rate`||e===`Entropy`||e===`Repeat Move Rate`||e===`State Nonzero`||e===`Invalid/Valid`:e===`Success Rate`||e===`Win Rate`||e===`Epsilon`||e===`Visited States`:!1;for(let t of e)r[t.name]=i(t.name);return r}function E(e,t,n,r,i,a){return{backgroundColor:`transparent`,color:Object.values(f),animationDuration:300,title:{text:e,textStyle:{fontSize:18,fontWeight:700,color:u.text,fontFamily:`"STSong", "Songti SC", "Noto Serif SC", serif`}},tooltip:{trigger:`axis`,backgroundColor:u.tooltip,borderColor:u.borderStrong,borderWidth:1,textStyle:{color:u.text,fontSize:14},extraCssText:`box-shadow: 0 8px 24px rgba(0,0,0,0.08); border-radius: 14px;`},legend:{type:`scroll`,top:26,itemGap:18,itemWidth:14,itemHeight:10,selected:T(r,i,a),textStyle:{color:u.textMuted,fontSize:13},pageTextStyle:{color:u.textMuted,fontSize:12},pageIconColor:u.reward},grid:{left:`5%`,right:`5%`,bottom:`12%`,top:`26%`,containLabel:!0},xAxis:{type:`category`,name:`Episode`,data:t,axisLine:{lineStyle:{color:u.axisLine}},axisLabel:{color:u.textMuted,fontSize:12},splitLine:{show:!1},nameTextStyle:{color:u.textMuted,fontSize:12}},yAxis:n.map((e,t)=>({type:`value`,name:e,position:t===0?`left`:`right`,axisLine:{show:!0,lineStyle:{color:u.axisLine}},axisLabel:{color:u.textMuted,fontSize:12},splitLine:{lineStyle:{color:u.gridLine}},nameTextStyle:{color:u.textMuted,fontSize:12}})),series:m(r)}}function D(e,t={}){if(!e||e.length===0||!h())return;let n={title:t.title??`RL Training Diagnostics`,subtitle:t.subtitle??`Use the dashboard to inspect reward trends, stability, and failure modes.`,mode:t.mode??(r(e,`qDelta`)?`qlearning`:`ppo`),movingAverageWindow:t.movingAverageWindow??20},i=e.map(e=>e.episode);document.getElementById(`training-dashboard-title`).textContent=n.title,document.getElementById(`training-dashboard-subtitle`).textContent=n.subtitle,document.getElementById(`reward-panel-title`).textContent=`Reward`,document.getElementById(`loss-panel-title`).textContent=n.mode===`ppo`?`Loss`:`Learning Signals`,document.getElementById(`diagnostics-panel-title`).textContent=`Diagnostics`,document.getElementById(`action-frequency-panel-title`).textContent=`Top 5 Actions Frequency (Last ${n.movingAverageWindow})`,document.getElementById(`distribution-panel-title`).textContent=`Win vs Loss Reward Distribution`,_(e,n),y(e,n),a?.setOption(E(`Reward`,i,[`Reward`,`Steps`],S(e,n),n.mode,`reward`),!0),o?.setOption(E(n.mode===`ppo`?`Loss`:`Learning Signals`,i,n.mode===`ppo`?[`Loss`,`Delta`]:[`Value`,`Value`],C(e,n),n.mode,`loss`),!0),s?.setOption(E(`Diagnostics`,i,n.mode===`ppo`?[`Rate`,`Diagnostics`]:[`Rate`,`Exploration`],w(e,n),n.mode,`diagnostics`),!0),c?.setOption(x(e),!0)}export{D as drawlineGraph};