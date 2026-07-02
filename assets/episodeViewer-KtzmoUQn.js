import{d as e,l as t}from"./utils-CgTkuXIv.js";var n=20,r={text:`#f5e7a6`,textMuted:`#d8cd93`,panel:`rgba(8, 47, 53, 0.78)`,panelStrong:`rgba(10, 58, 65, 0.88)`,panelSoft:`rgba(12, 66, 74, 0.62)`,border:`rgba(108, 214, 203, 0.16)`,borderStrong:`rgba(108, 214, 203, 0.28)`,reward:`#63d8d0`,success:`#7cd8bc`,danger:`#ff9e7f`,tooltip:`rgba(6, 41, 46, 0.96)`,axis:`rgba(108, 214, 203, 0.24)`,grid:`rgba(108, 214, 203, 0.12)`};function i(){if(document.getElementById(`episode-viewer-styles`))return;let e=document.createElement(`style`);e.id=`episode-viewer-styles`,e.textContent=`
    .episode-viewer {
      width: min(1180px, 100%);
      margin: 18px auto 0;
      display: grid;
      gap: 16px;
      color: var(--ink-text, #f5e7a6);
    }
    .episode-viewer--empty {
      gap: 0;
    }
    .episode-viewer__shell {
      border-radius: 28px;
      background: ${r.panel};
      border: 1px solid ${r.border};
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.24);
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
      color: var(--ink-heading-primary, #fff1b8);
    }
    .episode-viewer__subtitle {
      margin: 6px 0 0;
      color: var(--ink-copy, #d3d9ca);
      font-size: 13px;
      line-height: 1.6;
    }
    .episode-viewer__episode-select {
      min-width: 180px;
      padding: 10px 12px;
      border-radius: 14px;
      border: 1px solid ${r.border};
      background: ${r.panelSoft};
      color: var(--ink-text, #f5e7a6);
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
      background: ${r.panelSoft};
      border: 1px solid ${r.border};
      color: var(--ink-text-muted, #d8cd93);
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
      background: rgba(14, 82, 92, 0.74);
      border: 1px solid ${r.border};
    }
    .episode-viewer__summary-label {
      display: block;
      font-size: 12px;
      color: rgba(184, 232, 226, 0.9);
      margin-bottom: 6px;
      letter-spacing: 0.04em;
    }
    .episode-viewer__summary-value {
      display: block;
      font-size: 20px;
      font-weight: 700;
      color: var(--ink-text, #f5e7a6);
    }
    .episode-viewer__grid {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 16px;
      align-items: stretch;
      min-width: 0;
    }
    .episode-viewer__panel {
      border-radius: 24px;
      background: rgba(8, 56, 63, 0.7);
      border: 1px solid ${r.border};
      padding: 14px;
      display: grid;
      gap: 12px;
      min-height: 100%;
      min-width: 0;
      overflow: hidden;
    }
    .episode-viewer__panel-title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--ink-heading-secondary, #f2e0a1);
    }
    .episode-viewer__empty {
      margin: 0;
      color: rgba(184, 232, 226, 0.88);
      font-size: 13px;
    }
    .episode-viewer__rollout-stage {
      min-height: 420px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: rgba(8, 56, 63, 0.58);
      border: 1px solid ${r.border};
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
      background: rgba(14, 82, 92, 0.68);
      border: 1px solid ${r.border};
    }
    .episode-viewer__meta-label {
      display: block;
      font-size: 12px;
      color: rgba(184, 232, 226, 0.9);
      margin-bottom: 4px;
    }
    .episode-viewer__meta-value {
      display: block;
      font-size: 14px;
      color: var(--ink-text, #f5e7a6);
      line-height: 1.5;
      word-break: break-word;
    }
    .episode-viewer__charts {
      display: grid;
      gap: 16px;
      min-width: 0;
    }
    .episode-viewer__chart {
      width: 100%;
      height: 220px;
      min-width: 0;
    }
    .episode-viewer__chart--compact {
      height: 200px;
    }
    .episode-viewer__empty-note {
      margin: 0;
      padding: 14px 16px;
      border-radius: 18px;
      background: ${r.panelSoft};
      border: 1px dashed ${r.borderStrong};
      color: var(--ink-copy-soft, #a9c3bf);
      font-size: 13px;
      line-height: 1.7;
    }
    .episode-viewer--empty .episode-viewer__controls,
    .episode-viewer--empty .episode-viewer__summary,
    .episode-viewer--empty .episode-viewer__grid {
      display: none;
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
  `,document.head.appendChild(e)}function a(e,t=3){return e==null?`--`:typeof e!=`number`||!Number.isFinite(e)?String(e):e.toFixed(t)}function o(e){return e==null||!Number.isFinite(e)?`--`:`${(e*100).toFixed(1)}%`}function s(){return typeof window<`u`&&window.echarts?window.echarts:null}function c(){return{backgroundColor:`transparent`,animationDuration:240,grid:{left:`8%`,right:`6%`,top:`14%`,bottom:`12%`,containLabel:!0},tooltip:{trigger:`axis`,backgroundColor:r.tooltip,borderColor:r.borderStrong,borderWidth:1,textStyle:{color:r.text,fontSize:13}},xAxis:{axisLine:{lineStyle:{color:r.axis}},axisLabel:{color:r.textMuted,fontSize:12},splitLine:{lineStyle:{color:r.grid}}},yAxis:{axisLine:{lineStyle:{color:r.axis}},axisLabel:{color:r.textMuted,fontSize:12},splitLine:{lineStyle:{color:r.grid}}}}}function l(e){let t=Array.isArray(e?.policyTopActions)?e.policyTopActions:[];return t.length===0?{...c(),graphic:{type:`text`,left:`center`,top:`middle`,style:{text:`No policy data for this step`,fill:r.textMuted,fontSize:13}}}:{...c(),tooltip:{...c().tooltip,formatter:n=>{let r=Array.isArray(n)?n[0]:n,i=t[r.dataIndex],o=typeof r.value==`number`?`${(r.value*100).toFixed(2)}%`:`--`,s=a(e?.entropy,4);return`${i.label}<br/>Prob: ${o}<br/>Entropy: ${s}`}},xAxis:{...c().xAxis,type:`value`,max:1,name:`Probability`,nameTextStyle:{color:r.textMuted,fontSize:12}},yAxis:{...c().yAxis,type:`category`,inverse:!0,data:t.map(e=>e.label)},series:[{type:`bar`,data:t.map(e=>e.probability??0),itemStyle:{color:`#63d8d0`,borderRadius:[0,8,8,0]},label:{show:!0,position:`right`,color:r.text,formatter:({value:e})=>`${(e*100).toFixed(1)}%`}}]}}function u(e){return e>0?r.success:e<0?r.danger:`#AAB4B1`}function d(e){let t=e?.rewardBreakdown??{},n=Object.entries(t);return n.length===0?{...c(),graphic:{type:`text`,left:`center`,top:`middle`,style:{text:`No reward breakdown for this step`,fill:r.textMuted,fontSize:13}}}:{...c(),xAxis:{...c().xAxis,type:`value`,name:`Reward`,nameTextStyle:{color:r.textMuted,fontSize:12}},yAxis:{...c().yAxis,type:`category`,inverse:!0,data:n.map(([e])=>e)},series:[{type:`bar`,data:n.map(([,e])=>e??0),itemStyle:{color:e=>u(e.value),borderRadius:[0,8,8,0]},label:{show:!0,position:`right`,color:r.text,formatter:({value:e})=>a(e,3)}}]}}function f(n){let r=[];if(!Array.isArray(n))return r;for(let i=0;i<n.length;i++){if(n[i]===90)continue;let a=t(i);if(!a)continue;let[o,s,c]=a,[l,u]=e(n[i]);r.push({id:i,side:o,pieceName:s,pieceNum:c,r:l,c:u})}return r}function p(e,t){let n=t?.info?.move??{},r=n.from?`${n.from.r},${n.from.c}`:null,i=n.to?`${n.to.r},${n.to.c}`:null,a=new Map(f(t?.stateAfter??t?.stateBefore).map(e=>[`${e.r},${e.c}`,e])),o=document.createElement(`div`);o.className=`episode-viewer__chess-board`;for(let e=0;e<10;e++)for(let t=0;t<9;t++){let n=document.createElement(`div`),s=`${e},${t}`,c=a.get(s);n.className=`episode-viewer__chess-cell`,c?.side===`red`&&n.classList.add(`episode-viewer__chess-cell--red`),s===r&&n.classList.add(`episode-viewer__chess-cell--from`),s===i&&n.classList.add(`episode-viewer__chess-cell--to`),n.textContent=c?.pieceName??``,n.title=c?`${c.side===`red`?`红`:`黑`}${c.pieceName}${c.pieceNum>0?c.pieceNum:``}`:`(${e+1}, ${t+1})`,o.appendChild(n)}e.innerHTML=``,e.appendChild(o)}function m(e,t,n){let r=n?.metadata?.mazeGrid;if(!Array.isArray(r)||r.length===0){e.innerHTML=`<p class="episode-viewer__empty">No maze grid data.</p>`;return}let i=r.length,a=r[0]?.length??0,o=document.createElement(`div`);o.className=`episode-viewer__maze-board`,o.style.gridTemplateColumns=`repeat(${a}, minmax(0, 1fr))`;let s=new Set(Array.isArray(t?.info?.pathSoFar)?t.info.pathSoFar.map(e=>`${e.x},${e.y}`):[]),c=t?.info?.positionAfter??null,l=n?.metadata?.start??null,u=n?.metadata?.goal??null;for(let e=0;e<i;e++)for(let t=0;t<a;t++){let n=document.createElement(`div`);if(n.className=`episode-viewer__maze-cell`,r[e][t])n.classList.add(`episode-viewer__maze-cell--wall`);else if(s.has(`${t},${e}`)&&n.classList.add(`episode-viewer__maze-cell--path`),l&&l.x===t&&l.y===e&&n.classList.add(`episode-viewer__maze-cell--start`),u&&u.x===t&&u.y===e&&n.classList.add(`episode-viewer__maze-cell--goal`),c&&c.x===t&&c.y===e){n.classList.add(`episode-viewer__maze-cell--agent`);let e=document.createElement(`div`);e.className=`episode-viewer__maze-agent-dot`,n.appendChild(e)}o.appendChild(n)}e.innerHTML=``,e.appendChild(o)}function h(e,t,n){if(!t||!n){e.innerHTML=`<p class="episode-viewer__empty">暂无 episode 轨迹数据。</p>`;return}if(t.envType===`maze`){m(e,n,t);return}p(e,n,t)}function g(e,t,n){e.innerHTML=[{label:`Episode`,value:String((t?.episode??0)+1),color:`#C9A34A`},{label:`Total Reward`,value:a(t?.totalReward,3),color:r.reward},{label:`Total Steps`,value:a(t?.totalSteps,0),color:r.text},{label:`Step Reward`,value:a(n?.reward,3),color:u(n?.reward??0)}].map(e=>`
    <div class="episode-viewer__summary-card">
      <span class="episode-viewer__summary-label">${e.label}</span>
      <span class="episode-viewer__summary-value" style="color:${e.color}">${e.value}</span>
    </div>
  `).join(``)}function _(e,t,n){let r=n?.selectedAction??{};e.innerHTML=[{label:`Selected Action`,value:r.label||n?.actionLabel||`--`},{label:`Selected Probability`,value:r.probability===null||r.probability===void 0?`--`:o(r.probability)},{label:`Entropy`,value:a(n?.entropy,4)},{label:`Done`,value:n?.done?`Yes`:`No`},{label:`Episode Summary`,value:t?.summary?.outcome??t?.summary?.successLabel??`--`},{label:`Extra Info`,value:n?.info?.detail??`--`}].map(e=>`
    <div class="episode-viewer__meta-item">
      <span class="episode-viewer__meta-label">${e.label}</span>
      <span class="episode-viewer__meta-value">${e.value}</span>
    </div>
  `).join(``)}function v({containerId:e,title:t=`Single Episode RL Viewer`,subtitle:r=`Replay one training episode with rollout, policy, and reward details.`,maxEpisodes:o=n}={}){let c=document.getElementById(e);if(!c)return{clear(){},pushEpisode(){},setEpisodes(){}};i(),c.classList.add(`episode-viewer`),c.innerHTML=`
    <div class="episode-viewer__shell">
      <div class="episode-viewer__header">
        <div>
          <h2 class="episode-viewer__title">${t}</h2>
          <p class="episode-viewer__subtitle">${r}</p>
        </div>
        <select class="episode-viewer__episode-select" id="${e}-episode-select"></select>
      </div>
      <p class="episode-viewer__empty-note" id="${e}-empty-note">训练产生 episode 后，这里会显示单回合回放、Policy Layer 和 Reward Layer。</p>
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
  `;let u=document.getElementById(`${e}-episode-select`),f=document.getElementById(`${e}-step-indicator`),p=document.getElementById(`${e}-rollout`),m=document.getElementById(`${e}-summary`),v=document.getElementById(`${e}-meta`),y=document.getElementById(`${e}-empty-note`),b=s(),x=b?b.init(document.getElementById(`${e}-policy-chart`)):null,S=b?b.init(document.getElementById(`${e}-reward-chart`)):null,C=[],w=-1,T=0,E=null;function D(){E&&=(window.clearInterval(E),null);let t=document.getElementById(`${e}-play`);t&&(t.textContent=`自动播放`)}function O(){return C[w]??null}function k(){let e=O();return!e||!Array.isArray(e.steps)||e.steps.length===0?null:e.steps[Math.max(0,Math.min(T,e.steps.length-1))]}function A(){u.innerHTML=C.length===0?`<option value="-1">暂无 episode</option>`:C.map((e,t)=>`<option value="${t}">${`Episode ${e.episode+1} · reward ${a(e.totalReward,2)} · steps ${e.totalSteps}`}</option>`).join(``),u.value=String(w)}function j(){let e=O(),t=k();if(!e||!t){c.classList.add(`episode-viewer--empty`),y&&(y.style.display=`block`),p.innerHTML=`<p class="episode-viewer__empty">暂无 episode 轨迹数据。</p>`,m.innerHTML=``,v.innerHTML=``,f.textContent=`Step -- / --`,x?.setOption(l(null),!0),S?.setOption(d(null),!0);return}c.classList.remove(`episode-viewer--empty`),y&&(y.style.display=`none`),f.textContent=`Step ${T+1} / ${e.steps.length}`,g(m,e,t),_(v,e,t),h(p,e,t),x?.setOption(l(t),!0),S?.setOption(d(t),!0)}function M(e){if(C.length===0){w=-1,T=0,A(),j();return}w=Math.max(0,Math.min(e,C.length-1)),T=0,A(),j()}function N(e){let t=O();t&&(T=Math.max(0,Math.min(e,t.steps.length-1)),j())}return document.getElementById(`${e}-prev`).addEventListener(`click`,()=>{D(),N(T-1)}),document.getElementById(`${e}-next`).addEventListener(`click`,()=>{D(),N(T+1)}),document.getElementById(`${e}-play`).addEventListener(`click`,()=>{let t=O();if(!t||t.steps.length===0)return;if(E){D();return}let n=document.getElementById(`${e}-play`);n&&(n.textContent=`暂停`),E=window.setInterval(()=>{if(!O()){D();return}if(T>=O().steps.length-1){D();return}N(T+1)},800)}),u.addEventListener(`change`,e=>{D(),M(Number(e.target.value))}),window.__episodeViewerResizeBound||(window.__episodeViewerResizeBound=!0,window.addEventListener(`resize`,()=>{x?.resize(),S?.resize()})),j(),{clear(){C=[],w=-1,T=0,D(),A(),j()},setEpisodes(e=[]){C=e.slice(-o),w=C.length>0?C.length-1:-1,T=0,D(),A(),j()},pushEpisode(e){!e||!Array.isArray(e.steps)||e.steps.length===0||(C=[...C.slice(-(o-1)),e],w=C.length-1,T=0,D(),A(),j())}}}export{v as createEpisodeViewer};