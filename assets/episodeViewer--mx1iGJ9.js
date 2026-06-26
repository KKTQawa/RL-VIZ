import{d as e,l as t}from"./utils-CgTkuXIv.js";function n(){if(document.getElementById(`episode-viewer-styles`))return;let e=document.createElement(`style`);e.id=`episode-viewer-styles`,e.textContent=`
    .episode-viewer {
      width: min(1180px, 100%);
      margin: 18px auto 0;
      display: grid;
      gap: 16px;
      color: var(--ink-text, #2C3432);
    }
    .episode-viewer__shell {
      border-radius: 28px;
      background: rgba(255, 255, 255, 0.78);
      border: 1px solid rgba(60, 70, 60, 0.08);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
      backdrop-filter: blur(12px);
      padding: 18px;
      display: grid;
      gap: 14px;
    }
    .episode-viewer__header {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .episode-viewer__title {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
    }
    .episode-viewer__subtitle {
      margin: 6px 0 0;
      color: var(--ink-text-muted, #68716D);
      font-size: 13px;
      line-height: 1.6;
    }
    .episode-viewer__episode-select {
      min-width: 180px;
      padding: 10px 12px;
      border-radius: 14px;
      border: 1px solid rgba(60, 70, 60, 0.12);
      background: rgba(255, 255, 255, 0.95);
      color: var(--ink-text, #2C3432);
    }
    .episode-viewer__controls {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    .episode-viewer__button {
      width: auto;
      min-width: 88px;
      padding: 10px 14px;
    }
    .episode-viewer__step-indicator {
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.82);
      border: 1px solid rgba(60, 70, 60, 0.08);
      color: var(--ink-text-muted, #68716D);
      font-size: 13px;
    }
    .episode-viewer__summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
    }
    .episode-viewer__summary-card {
      padding: 12px 14px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.86);
      border: 1px solid rgba(60, 70, 60, 0.06);
    }
    .episode-viewer__summary-label {
      display: block;
      font-size: 12px;
      color: var(--ink-text-muted, #68716D);
      margin-bottom: 6px;
      letter-spacing: 0.04em;
    }
    .episode-viewer__summary-value {
      display: block;
      font-size: 20px;
      font-weight: 700;
      color: var(--ink-text, #2C3432);
    }
    .episode-viewer__grid {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 16px;
      align-items: stretch;
    }
    .episode-viewer__panel {
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(60, 70, 60, 0.08);
      padding: 14px;
      display: grid;
      gap: 12px;
      min-height: 100%;
    }
    .episode-viewer__panel-title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
    }
    .episode-viewer__empty {
      margin: 0;
      color: var(--ink-text-muted, #68716D);
      font-size: 13px;
    }
    .episode-viewer__rollout-stage {
      min-height: 420px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: rgba(243, 244, 242, 0.85);
      border: 1px solid rgba(60, 70, 60, 0.08);
      overflow: hidden;
      padding: 14px;
    }
    .episode-viewer__meta {
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }
    .episode-viewer__meta-item {
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(95, 158, 160, 0.06);
      border: 1px solid rgba(95, 158, 160, 0.08);
    }
    .episode-viewer__meta-label {
      display: block;
      font-size: 12px;
      color: var(--ink-text-muted, #68716D);
      margin-bottom: 4px;
    }
    .episode-viewer__meta-value {
      display: block;
      font-size: 14px;
      color: var(--ink-text, #2C3432);
      line-height: 1.5;
      word-break: break-word;
    }
    .episode-viewer__charts {
      display: grid;
      gap: 16px;
    }
    .episode-viewer__chart {
      width: 100%;
      height: 220px;
    }
    .episode-viewer__chart--compact {
      height: 200px;
    }
    .episode-viewer__chess-board {
      display: grid;
      grid-template-columns: repeat(9, minmax(40px, 1fr));
      gap: 6px;
      width: min(100%, 520px);
    }
    .episode-viewer__chess-cell {
      aspect-ratio: 1 / 1;
      border-radius: 14px;
      border: 1px solid rgba(92, 79, 66, 0.18);
      background: linear-gradient(180deg, rgba(255,253,248,0.92) 0%, rgba(244,236,223,0.92) 100%);
      display: grid;
      place-items: center;
      font-size: 22px;
      color: #505755;
      position: relative;
    }
    .episode-viewer__chess-cell--red {
      color: #C75B5B;
    }
    .episode-viewer__chess-cell--from {
      box-shadow: inset 0 0 0 2px rgba(201, 163, 74, 0.7);
    }
    .episode-viewer__chess-cell--to {
      box-shadow: inset 0 0 0 2px rgba(95, 158, 160, 0.88);
      background: linear-gradient(180deg, rgba(240,249,249,0.98) 0%, rgba(226,241,241,0.96) 100%);
    }
    .episode-viewer__maze-board {
      display: grid;
      gap: 2px;
      width: min(100%, 520px);
      background: rgba(104, 113, 109, 0.08);
      padding: 8px;
      border-radius: 18px;
    }
    .episode-viewer__maze-cell {
      aspect-ratio: 1 / 1;
      border-radius: 4px;
      background: #F3F4F2;
      position: relative;
    }
    .episode-viewer__maze-cell--wall {
      background: #505755;
    }
    .episode-viewer__maze-cell--start {
      background: #6E8B74;
    }
    .episode-viewer__maze-cell--goal {
      background: #C75B5B;
    }
    .episode-viewer__maze-cell--path {
      background: rgba(201, 163, 74, 0.35);
    }
    .episode-viewer__maze-cell--agent {
      box-shadow: inset 0 0 0 2px rgba(95, 158, 160, 0.9);
      background: rgba(95, 158, 160, 0.28);
    }
    .episode-viewer__maze-agent-dot {
      position: absolute;
      inset: 22%;
      border-radius: 999px;
      background: #5F9EA0;
    }
    @media (max-width: 980px) {
      .episode-viewer__grid {
        grid-template-columns: 1fr;
      }
    }
  `,document.head.appendChild(e)}function r(e,t=3){return e==null?`--`:typeof e!=`number`||!Number.isFinite(e)?String(e):e.toFixed(t)}function i(e){return e==null||!Number.isFinite(e)?`--`:`${(e*100).toFixed(1)}%`}function a(){return typeof window<`u`&&window.echarts?window.echarts:null}function o(){return{backgroundColor:`#ffffff`,animationDuration:240,grid:{left:`8%`,right:`6%`,top:`14%`,bottom:`12%`,containLabel:!0},tooltip:{trigger:`axis`,backgroundColor:`rgba(255,255,255,0.96)`,borderColor:`rgba(60,70,60,0.08)`,borderWidth:1,textStyle:{color:`#2C3432`,fontSize:13}},xAxis:{axisLine:{lineStyle:{color:`#D6DBD8`}},axisLabel:{color:`#68716D`,fontSize:12},splitLine:{lineStyle:{color:`#E8EBE8`}}},yAxis:{axisLine:{lineStyle:{color:`#D6DBD8`}},axisLabel:{color:`#68716D`,fontSize:12},splitLine:{lineStyle:{color:`#E8EBE8`}}}}}function s(e){let t=Array.isArray(e?.policyTopActions)?e.policyTopActions:[];return t.length===0?{...o(),graphic:{type:`text`,left:`center`,top:`middle`,style:{text:`No policy data for this step`,fill:`#68716D`,fontSize:13}}}:{...o(),tooltip:{...o().tooltip,formatter:n=>{let i=Array.isArray(n)?n[0]:n,a=t[i.dataIndex],o=typeof i.value==`number`?`${(i.value*100).toFixed(2)}%`:`--`,s=r(e?.entropy,4);return`${a.label}<br/>Prob: ${o}<br/>Entropy: ${s}`}},xAxis:{...o().xAxis,type:`value`,max:1,name:`Probability`,nameTextStyle:{color:`#68716D`,fontSize:12}},yAxis:{...o().yAxis,type:`category`,inverse:!0,data:t.map(e=>e.label)},series:[{type:`bar`,data:t.map(e=>e.probability??0),itemStyle:{color:`#5F9EA0`,borderRadius:[0,8,8,0]},label:{show:!0,position:`right`,color:`#2C3432`,formatter:({value:e})=>`${(e*100).toFixed(1)}%`}}]}}function c(e){return e>0?`#6E8B74`:e<0?`#C75B5B`:`#AAB4B1`}function l(e){let t=e?.rewardBreakdown??{},n=Object.entries(t);return n.length===0?{...o(),graphic:{type:`text`,left:`center`,top:`middle`,style:{text:`No reward breakdown for this step`,fill:`#68716D`,fontSize:13}}}:{...o(),xAxis:{...o().xAxis,type:`value`,name:`Reward`,nameTextStyle:{color:`#68716D`,fontSize:12}},yAxis:{...o().yAxis,type:`category`,inverse:!0,data:n.map(([e])=>e)},series:[{type:`bar`,data:n.map(([,e])=>e??0),itemStyle:{color:e=>c(e.value),borderRadius:[0,8,8,0]},label:{show:!0,position:`right`,color:`#2C3432`,formatter:({value:e})=>r(e,3)}}]}}function u(n){let r=[];if(!Array.isArray(n))return r;for(let i=0;i<n.length;i++){if(n[i]===90)continue;let a=t(i);if(!a)continue;let[o,s,c]=a,[l,u]=e(n[i]);r.push({id:i,side:o,pieceName:s,pieceNum:c,r:l,c:u})}return r}function d(e,t){let n=t?.info?.move??{},r=n.from?`${n.from.r},${n.from.c}`:null,i=n.to?`${n.to.r},${n.to.c}`:null,a=new Map(u(t?.stateAfter??t?.stateBefore).map(e=>[`${e.r},${e.c}`,e])),o=document.createElement(`div`);o.className=`episode-viewer__chess-board`;for(let e=0;e<10;e++)for(let t=0;t<9;t++){let n=document.createElement(`div`),s=`${e},${t}`,c=a.get(s);n.className=`episode-viewer__chess-cell`,c?.side===`red`&&n.classList.add(`episode-viewer__chess-cell--red`),s===r&&n.classList.add(`episode-viewer__chess-cell--from`),s===i&&n.classList.add(`episode-viewer__chess-cell--to`),n.textContent=c?.pieceName??``,n.title=c?`${c.side===`red`?`红`:`黑`}${c.pieceName}${c.pieceNum>0?c.pieceNum:``}`:`(${e+1}, ${t+1})`,o.appendChild(n)}e.innerHTML=``,e.appendChild(o)}function f(e,t,n){let r=n?.metadata?.mazeGrid;if(!Array.isArray(r)||r.length===0){e.innerHTML=`<p class="episode-viewer__empty">No maze grid data.</p>`;return}let i=r.length,a=r[0]?.length??0,o=document.createElement(`div`);o.className=`episode-viewer__maze-board`,o.style.gridTemplateColumns=`repeat(${a}, minmax(0, 1fr))`;let s=new Set(Array.isArray(t?.info?.pathSoFar)?t.info.pathSoFar.map(e=>`${e.x},${e.y}`):[]),c=t?.info?.positionAfter??null,l=n?.metadata?.start??null,u=n?.metadata?.goal??null;for(let e=0;e<i;e++)for(let t=0;t<a;t++){let n=document.createElement(`div`);if(n.className=`episode-viewer__maze-cell`,r[e][t])n.classList.add(`episode-viewer__maze-cell--wall`);else if(s.has(`${t},${e}`)&&n.classList.add(`episode-viewer__maze-cell--path`),l&&l.x===t&&l.y===e&&n.classList.add(`episode-viewer__maze-cell--start`),u&&u.x===t&&u.y===e&&n.classList.add(`episode-viewer__maze-cell--goal`),c&&c.x===t&&c.y===e){n.classList.add(`episode-viewer__maze-cell--agent`);let e=document.createElement(`div`);e.className=`episode-viewer__maze-agent-dot`,n.appendChild(e)}o.appendChild(n)}e.innerHTML=``,e.appendChild(o)}function p(e,t,n){if(!t||!n){e.innerHTML=`<p class="episode-viewer__empty">暂无 episode 轨迹数据。</p>`;return}if(t.envType===`maze`){f(e,n,t);return}d(e,n,t)}function m(e,t,n){e.innerHTML=[{label:`Episode`,value:String((t?.episode??0)+1),color:`#C9A34A`},{label:`Total Reward`,value:r(t?.totalReward,3),color:`#5F9EA0`},{label:`Total Steps`,value:r(t?.totalSteps,0),color:`#2C3432`},{label:`Step Reward`,value:r(n?.reward,3),color:c(n?.reward??0)}].map(e=>`
    <div class="episode-viewer__summary-card">
      <span class="episode-viewer__summary-label">${e.label}</span>
      <span class="episode-viewer__summary-value" style="color:${e.color}">${e.value}</span>
    </div>
  `).join(``)}function h(e,t,n){let a=n?.selectedAction??{};e.innerHTML=[{label:`Selected Action`,value:a.label||n?.actionLabel||`--`},{label:`Selected Probability`,value:a.probability===null||a.probability===void 0?`--`:i(a.probability)},{label:`Entropy`,value:r(n?.entropy,4)},{label:`Done`,value:n?.done?`Yes`:`No`},{label:`Episode Summary`,value:t?.summary?.outcome??t?.summary?.successLabel??`--`},{label:`Extra Info`,value:n?.info?.detail??`--`}].map(e=>`
    <div class="episode-viewer__meta-item">
      <span class="episode-viewer__meta-label">${e.label}</span>
      <span class="episode-viewer__meta-value">${e.value}</span>
    </div>
  `).join(``)}function g({containerId:e,title:t=`Single Episode RL Viewer`,subtitle:i=`Replay one training episode with rollout, policy, and reward details.`}={}){let o=document.getElementById(e);if(!o)return{clear(){},pushEpisode(){},setEpisodes(){}};n(),o.classList.add(`episode-viewer`),o.innerHTML=`
    <div class="episode-viewer__shell">
      <div class="episode-viewer__header">
        <div>
          <h2 class="episode-viewer__title">${t}</h2>
          <p class="episode-viewer__subtitle">${i}</p>
        </div>
        <select class="episode-viewer__episode-select" id="${e}-episode-select"></select>
      </div>
      <div class="episode-viewer__controls">
        <button class="episode-viewer__button" id="${e}-prev">上一步</button>
        <button class="episode-viewer__button" id="${e}-play">自动播放</button>
        <button class="episode-viewer__button" id="${e}-next">下一步</button>
        <span class="episode-viewer__step-indicator" id="${e}-step-indicator">Step -- / --</span>
      </div>
      <div class="episode-viewer__summary" id="${e}-summary"></div>
      <div class="episode-viewer__grid">
        <div class="episode-viewer__panel">
          <h3 class="episode-viewer__panel-title">Rollout Layer</h3>
          <div class="episode-viewer__rollout-stage" id="${e}-rollout"></div>
          <div class="episode-viewer__meta" id="${e}-meta"></div>
        </div>
        <div class="episode-viewer__charts">
          <div class="episode-viewer__panel">
            <h3 class="episode-viewer__panel-title">Policy Layer</h3>
            <div class="episode-viewer__chart episode-viewer__chart--compact" id="${e}-policy-chart"></div>
          </div>
          <div class="episode-viewer__panel">
            <h3 class="episode-viewer__panel-title">Reward Layer</h3>
            <div class="episode-viewer__chart episode-viewer__chart--compact" id="${e}-reward-chart"></div>
          </div>
        </div>
      </div>
    </div>
  `;let c=document.getElementById(`${e}-episode-select`),u=document.getElementById(`${e}-step-indicator`),d=document.getElementById(`${e}-rollout`),f=document.getElementById(`${e}-summary`),g=document.getElementById(`${e}-meta`),_=a(),v=_?_.init(document.getElementById(`${e}-policy-chart`)):null,y=_?_.init(document.getElementById(`${e}-reward-chart`)):null,b=[],x=-1,S=0,C=null;function w(){C&&=(window.clearInterval(C),null);let t=document.getElementById(`${e}-play`);t&&(t.textContent=`自动播放`)}function T(){return b[x]??null}function E(){let e=T();return!e||!Array.isArray(e.steps)||e.steps.length===0?null:e.steps[Math.max(0,Math.min(S,e.steps.length-1))]}function D(){c.innerHTML=b.length===0?`<option value="-1">暂无 episode</option>`:b.map((e,t)=>`<option value="${t}">${`Episode ${e.episode+1} · reward ${r(e.totalReward,2)} · steps ${e.totalSteps}`}</option>`).join(``),c.value=String(x)}function O(){let e=T(),t=E();if(!e||!t){d.innerHTML=`<p class="episode-viewer__empty">暂无 episode 轨迹数据。</p>`,f.innerHTML=``,g.innerHTML=``,u.textContent=`Step -- / --`,v?.setOption(s(null),!0),y?.setOption(l(null),!0);return}u.textContent=`Step ${S+1} / ${e.steps.length}`,m(f,e,t),h(g,e,t),p(d,e,t),v?.setOption(s(t),!0),y?.setOption(l(t),!0)}function k(e){if(b.length===0){x=-1,S=0,D(),O();return}x=Math.max(0,Math.min(e,b.length-1)),S=0,D(),O()}function A(e){let t=T();t&&(S=Math.max(0,Math.min(e,t.steps.length-1)),O())}return document.getElementById(`${e}-prev`).addEventListener(`click`,()=>{w(),A(S-1)}),document.getElementById(`${e}-next`).addEventListener(`click`,()=>{w(),A(S+1)}),document.getElementById(`${e}-play`).addEventListener(`click`,()=>{let t=T();if(!t||t.steps.length===0)return;if(C){w();return}let n=document.getElementById(`${e}-play`);n&&(n.textContent=`暂停`),C=window.setInterval(()=>{if(!T()){w();return}if(S>=T().steps.length-1){w();return}A(S+1)},800)}),c.addEventListener(`change`,e=>{w(),k(Number(e.target.value))}),window.__episodeViewerResizeBound||(window.__episodeViewerResizeBound=!0,window.addEventListener(`resize`,()=>{v?.resize(),y?.resize()})),O(),{clear(){b=[],x=-1,S=0,w(),D(),O()},setEpisodes(e=[]){b=e.slice(-20),x=b.length>0?b.length-1:-1,S=0,w(),D(),O()},pushEpisode(e){!e||!Array.isArray(e.steps)||e.steps.length===0||(b=[...b.slice(-19),e],x=b.length-1,S=0,w(),D(),O())}}}export{g as createEpisodeViewer};