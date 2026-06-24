import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./preload-helper-DB-v99-l.js";var t=(await e(()=>import(`https://cdn.jsdelivr.net/npm/p5@1.9.0/+esm`),[])).default,{setStepRender:n}=await e(async()=>{let{setStepRender:e}=await import(`./steps-DuqAAvko.js`);return{setStepRender:e}},[]),r={cols:25,rows:25,cellSize:35,renderTrain:!0,renderSpeed:10,stepMode:!0,stop:!1,trainEpisodes:300,maxSteps:400,currentEpisode:0,EpRenderInterval:20,alpha:.1,gamma:.95,epsilon:.1,now_train_step:0,now_test_step:0,draw_maze:!0,draw_heatmap:!0,draw_paths:!0,draw_current_path:!0,draw_policy:!0,draw_agent:!0,draw_goal:!0,draw_tooltip:!0,high_render:!1},i=new Proxy(structuredClone(r),{set(e,t,n){return e[t]=n,t===`currentEpisode`&&l(`currentEpisode`,n),!0}}),a={Qagent_s:j(1,1),Qagent_a:-1,Qagent_r:0,Qagent_qs:j(1,1)},o=new Proxy(structuredClone(a),{set(e,t,n){return e[t]=n,(t===`Qagent_s`||t===`Qagent_a`||t===`Qagent_r`||t===`Qagent_qs`)&&l(t,n),!0}}),s={};function c(e,t){s[e]||(s[e]=[]),s[e].push(t)}function l(e,t){s[e]&&s[e].forEach(e=>e(t))}var u=[],d={},f,p,m={},h={},g={},_={},v=[],y=null,b=0,x=400,S=!1,C=[],w=[],T={};function E(e){for(let t=0;t<i.rows;t++)for(let n=0;n<i.cols;n++)u[t][n].wall?e.fill(30,40,60):e.fill(240),e.stroke(200),e.rect(n*i.cellSize,t*i.cellSize,i.cellSize,i.cellSize,4)}function ee(e){let t=1;for(let e in g)t=Math.max(t,g[e]);e.noStroke();for(let n=0;n<i.rows;n++)for(let r=0;r<i.cols;r++){if(u[n][r].wall)continue;let a=j(r,n),o=g[a]||0;if(o===0)continue;let s=o/t*120;e.fill(0,0,123,s),e.rect(r*i.cellSize,n*i.cellSize,i.cellSize,i.cellSize)}}function te(e){if(!y||performance.now()-b<x)return;let t=document.getElementById(`maze_tooltip`),[n,r]=y.split(`,`).map(Number),i=j(n,r),a=P(i),o=N?N(i):null,s=[`↑`,`↓`,`←`,`→`],c=`<b>${i}</b><br/>`;c+=`
    <div style="
        font-size: 20px;
        font-family: 'Times New Roman', serif;
    ">
        Q(s,a) += α[r + γ max_a' Q(s',a') − Q(s,a)]
    </div>
`;for(let e=0;e<4;e++){c+=`<div style="font-size:18px;">${e}${s[e]}: ${a[e].toFixed(3)}</div>`;let t=`#0ff`;i in _&&_[i]==e&&(t=`#80fa4c`),o&&o[e]&&(c+=`<div style="font-size:18px;color:${t}">
        ${o[e].values}
      </div>`)}t.innerHTML=c,t.style.left=e.mouseX+300+`px`,t.style.top=e.mouseY+12+`px`,t.style.display=`block`}function ne(e){e.fill(220,50,50),e.rect(p.x*i.cellSize,p.y*i.cellSize,i.cellSize,i.cellSize,6)}function re(e){let t=d.x*i.cellSize+i.cellSize/2,n=d.y*i.cellSize+i.cellSize/2,r=i.cellSize*.8,a=d.dir;if(e.fill(100,200,255),e.noStroke(),!a){e.circle(t,n,r);return}e.beginShape(),a===`right`?(e.vertex(t+r/2,n),e.vertex(t-r/2,n-r/3),e.vertex(t-r/2,n+r/3)):a===`left`?(e.vertex(t-r/2,n),e.vertex(t+r/2,n-r/3),e.vertex(t+r/2,n+r/3)):a===`down`?(e.vertex(t,n+r/2),e.vertex(t-r/3,n-r/2),e.vertex(t+r/3,n-r/2)):a===`up`&&(e.vertex(t,n-r/2),e.vertex(t-r/3,n+r/2),e.vertex(t+r/3,n+r/2)),e.endShape(e.CLOSE)}function D(e){e.textAlign(e.CENTER,e.CENTER),e.textSize(22),e.fill(30);for(let t=0;t<i.rows;t++)for(let n=0;n<i.cols;n++){if(u[t][n].wall)continue;let r=P(j(n,t)),a=Math.max(...r),o=[];for(let e=0;e<4;e++)r[e]===a&&o.push(e);let s=``;if(o.length===4)s=`·`;else{let e=o[0];e===0&&(s=`↑`),e===1&&(s=`↓`),e===2&&(s=`←`),e===3&&(s=`→`)}e.fill(0),e.text(s,n*i.cellSize+i.cellSize/2,t*i.cellSize+i.cellSize/2)}}function O(e){e.noFill();for(let t=0;t<C.length;t++){let n=C[t];for(let t=1;t<n.length;t++){let r=n[t-1],a=n[t],o=`${r.x},${r.y}->${a.x},${a.y}`,s=T[o]||1,c=(1-t/n.length)*6+s*.5,l=Math.min(200,30+s*20);e.stroke(255,0,0,l),e.strokeWeight(c),e.line(r.x*i.cellSize+i.cellSize/2,r.y*i.cellSize+i.cellSize/2,a.x*i.cellSize+i.cellSize/2,a.y*i.cellSize+i.cellSize/2)}}e.strokeWeight(1),e.stroke(200)}function k(e){e.noFill(),e.push();for(let t=0;t<C.length;t++){let n=C[t],r=.7+t/C.length*.3;for(let t=1;t<n.length;t++){let a=n[t-1],o=n[t],s=`${a.x},${a.y}->${o.x},${o.y}`,c=T[s]||1,l=(1-t/n.length)**1.6,u=(Math.max(8,C.length*.6)*l+c*.2)*r,d=Math.min(160,(100+c*5)*r);e.stroke(255,0,0,d),e.strokeWeight(u);let f=a.x*i.cellSize+i.cellSize/2,p=a.y*i.cellSize+i.cellSize/2,m=o.x*i.cellSize+i.cellSize/2,h=o.y*i.cellSize+i.cellSize/2;for(let t=0;t<7;t++){let n=t/7,r=(t+1)/7,i=(1-n)**1.6,a=e.lerp(f,m,n),o=e.lerp(p,h,n),s=e.lerp(f,m,r),c=e.lerp(p,h,r),l=u*i,g=d*(.6+.4*i);e.stroke(255,0,0,g),e.strokeWeight(l),e.line(a,o,s,c)}}}e.strokeWeight(1),e.stroke(200),e.pop()}function ie(e){if(!(w.length<2)){e.push(),e.stroke(255,0,0,180),e.strokeWeight(3),e.noFill();for(let t=1;t<w.length;t++){let n=w[t-1],r=w[t],a=`${n.x},${n.y}->${r.x},${r.y}`;T[a],e.line(n.x*i.cellSize+i.cellSize/2,n.y*i.cellSize+i.cellSize/2,r.x*i.cellSize+i.cellSize/2,r.y*i.cellSize+i.cellSize/2)}e.pop()}}function ae(e){if(!(w.length<2)){e.push();for(let t=1;t<w.length;t++){let n=w[t-1],r=w[t],a=n.x*i.cellSize+i.cellSize/2,o=n.y*i.cellSize+i.cellSize/2,s=r.x*i.cellSize+i.cellSize/2,c=r.y*i.cellSize+i.cellSize/2;for(let t=0;t<7;t++){let i=t/7,l=(1-i)**1.8,u=e.lerp(a,s,i),d=e.lerp(o,c,i),f=10*l,p=`${n.x},${n.y}->${r.x},${r.y}`,m=T?.[p]||1;e.stroke(255,0,0,120+m*10),e.strokeWeight(f);let h=e.lerp(a,s,(t+1)/7),g=e.lerp(o,c,(t+1)/7);e.line(u,d,h,g)}}e.pop()}}function oe(){let e=document.getElementById(`QTable`),t=[`↑`,`↓`,`←`,`→`],n=`
  <tr>
    <th>a\\Q</th>
    <th id="q_sa">Q(s,a)</th>
    <th id="q_s2a2">Q(s',a')</th>
  </tr>
  `;for(let e=0;e<4;e++)n+=`
      <tr>
        <th>${e}(${t[e]})</th>
        <td id="q_sa_${e}">0</td>
        <td id="q_s2a_${e}">0</td>
      </tr>
    `;e.innerHTML=n}function se(e,t,n,r=.3){for(let i=1;i<n-1;i++)for(let n=1;n<t-1;n++)Math.random()<r&&e[i][n].wall&&(e[i][n].wall=!1)}function ce(e,t){let n=[];for(let r=0;r<t;r++){let t=[];for(let n=0;n<e;n++)t.push({x:n,y:r,wall:!0,visited:!1});n.push(t)}let r=[],i=n[1][1];i.wall=!1,i.visited=!0,r.push(i);let a=[[0,-2],[2,0],[0,2],[-2,0]];function o(r){let i=[];for(let[o,s]of a){let a=r.x+o,c=r.y+s;a>0&&c>0&&a<e&&c<t&&!n[c][a].visited&&i.push(n[c][a])}return i}for(;r.length>0;){let e=r[r.length-1],t=o(e);if(t.length===0){r.pop();continue}let i=t[Math.floor(Math.random()*t.length)],a=(e.x+i.x)/2,s=(e.y+i.y)/2;n[s][a].wall=!1,i.wall=!1,i.visited=!0,r.push(i)}return se(n,e,t),n}function A(e,t,n=1){let r=`${e.x},${e.y}->${t.x},${t.y}`,i=(T[r]||0)+n;i>0?T[r]=i:delete T[r]}function j(e,t){return`${e},${t}`}function M(e){let[t,n]=e.split(`,`);return{x:t,y:n}}function N(e){return h[e]||(h[e]=[null,null,null,null]),h[e]}function P(e){return m[e]||(m[e]=[0,0,0,0]),m[e]}function F(e){let t=P(e);return!S&&Math.random()<i.epsilon?Math.floor(Math.random()*4):t.indexOf(Math.max(...t))}function I(e,t,n,r){let a=P(e),o=P(r),s=Math.max(...o),c=a[t],l=n+i.gamma*s-c,u=c+i.alpha*l;a[t]=u;let d=N(e);d[t]={values:`
= ${c.toFixed(3)} + ${i.alpha} × (${n.toFixed(3)} + ${i.gamma} × ${s.toFixed(3)} - ${c.toFixed(3)})
`,result:u.toFixed(3)},_[e]=t;let f=M(e),p=M(r);document.getElementById(`q_sa`).textContent=`Q(${f.x}-${f.y},a)`,document.getElementById(`q_s2a2`).textContent=`Q(${p.x}-${p.y},a')`;for(let t=0;t<4;t++){let n=`#e6e6e6`;e in _&&_[e]==t&&(n=`#80fa4c`),document.getElementById(`q_sa_${t}`).textContent=a[t].toFixed(3),document.getElementById(`q_sa_${t}`).style.color=n;let r=document.getElementById(`q_s2a_${t}`);r.textContent=o[t].toFixed(3),o[t]===s?(r.style.color=`#eb5454`,r.style.fontWeight=`bold`):(r.style.color=`#e6e6e6`,r.style.fontWeight=`normal`)}}var L=e=>(e.setup=()=>{e.createCanvas(i.cols*i.cellSize,i.rows*i.cellSize).parent(`game`),K()},e.draw=()=>{e.background(245),i.draw_maze&&E(e),i.draw_heatmap&&ee(e),i.draw_paths&&(i.high_render?k(e):O(e)),i.draw_current_path&&(i.high_render?ae(e):ie(e)),i.draw_policy&&D(e),i.draw_agent&&re(e),i.draw_goal&&ne(e),i.draw_tooltip&&te(e)},document.getElementById(`maze_tooltip`),e.mouseMoved=()=>{let t=Math.floor(e.mouseX/i.cellSize),n=Math.floor(e.mouseY/i.cellSize);if(t<0||n<0||t>=i.cols||n>=i.rows){y=null;return}let r=`${t},${n}`;y!==r&&(y=r,b=performance.now(),document.getElementById(`maze_tooltip`).style.display=`none`)},e);async function R(){i.stepMode?(z[i.now_train_step](),await n(`train`,i.now_train_step)):await n(`test`,i.now_test_step),i.now_train_step=(i.now_train_step+1)%3,i.now_test_step=(i.now_test_step+1)%3}var z={0:B,1:V,2:H};function B(){}function V(){}function H(){}function U(){let e=j(d.x,d.y),t=F(e),{s2:n,reward:r,done:a}=W(t);o.Qagent_s=e,o.Qagent_a=t,o.Qagent_r=r,o.Qagent_qs=n,i.stepMode&&I(e,t,r,n),a&&alert(`end`)}function W(e){(e==null||typeof e!=`number`||e<0||e>=4)&&(console.warn(`invalid action:`,e),e=Math.floor(Math.random()*4));let[t,n]=[[0,-1],[0,1],[-1,0],[1,0]][e];switch(e){case 0:d.dir=`up`;break;case 1:d.dir=`down`;break;case 2:d.dir=`left`;break;case 3:d.dir=`right`;break;default:d.dir=null}let r=d.x+t,a=d.y+n,o=-.01,s=!1,c=d.x,l=d.y;r<0||a<0||r>=i.cols||a>=i.rows||u[a][r].wall?o=-.1:(c=r,l=a),c===d.prevX&&l===d.prevY&&!(c===d.x&&l===d.y)&&(o-=.05),d.prevX=d.x,d.prevY=d.y,d.tx=c,d.ty=l,d.x=d.tx,d.y=d.ty,d.x===p.x&&d.y===p.y&&(o=20,s=!0);let f=j(d.x,d.y),m=j(d.tx,d.ty);return w.push({x:d.x,y:d.y}),S||(g[m]=(g[m]||0)+1),{s:f,s2:m,reward:o,done:s}}async function G(e=0){J();let t=j(d.x,d.y),n=!1,r=0,a=0;for(;!n&&r<i.maxSteps&&!i.stop;){let e=F(t),{s2:s,reward:c,done:l}=W(e);a+=c,I(t,e,c,s),o.Qagent_s=t,o.Qagent_a=e,o.Qagent_r=c,o.Qagent_qs=s,t=s,n=l,r++,i.renderTrain&&await new Promise(e=>setTimeout(e,i.renderSpeed))}if(n||r>=i.maxSteps){if(!S){C.push([...w]);for(let e=1;e<w.length;e++)A(w[e-1],w[e]);if(C.length>20){for(let e=1;e<C[0].length;e++)A(C[0][e-1],C[0][e],-1);C.shift()}}w=[]}let s={episode:e,steps:r,reward:a,win:n};console.log(s),i.stop||v.push(s)}async function le(){i.currentEpisode++,await G(i.currentEpisode)}async function ue(){for(i.currentEpisode=0;i.currentEpisode<i.trainEpisodes&&!i.stop;i.currentEpisode++)await G(i.currentEpisode),(i.currentEpisode===i.trainEpisodes-1||!i.renderTrain&&i.currentEpisode%i.EpRenderInterval===0)&&await new Promise(e=>setTimeout(e,i.renderSpeed));alert(`训练完成`)}async function de(){J();let e=j(d.x,d.y),t=!1,n=0;for(S=!0;!t&&n<i.maxSteps;){let{s2:r,reward:a,done:o}=W(F(e));e=r,t=o,n++,await new Promise(e=>setTimeout(e,i.renderSpeed))}S=!1,alert(`测试完成,总步数：`+n+`,是否到达终点：`+t)}function K(){u=ce(i.cols,i.rows),f={x:1,y:1},p={x:i.cols-2,y:i.rows-2},q(),Y(),C=[],w=[],T={}}function q(){d={x:f.x,y:f.y,tx:f.x,ty:f.y,prevX:f.x,prevY:f.y,dir:null},m={},g={},h={},_={},v=[],i.stop=!1,i.currentEpisode=0,S=!1,C=[],w=[],T={};let e=structuredClone(a);Object.keys(e).forEach(t=>{o[t]=e[t]}),oe(),document.getElementById(`cfgQValue`).value=X(m),document.getElementById(`cfgQValue`).style.display=`none`}function J(){d={x:f.x,y:f.y,tx:f.x,ty:f.y,prevX:f.x,prevY:f.y,dir:null};let e=structuredClone(a);Object.keys(e).forEach(t=>{o[t]=e[t]}),i.stop=!1,Y(),w=[]}function Y(){y=null,b=0,S=!1,_={}}function X(e){let t=[`0`,`1`,`2`,`3`],n=Object.keys(e).map(e=>e.split(`,`).map(Number)).sort((e,t)=>e[0]-t[0]||e[1]-t[1]),r=``;r+=`  Q   `+t.map(e=>e.padEnd(8)).join(``)+`
`;for(let[t,i]of n){let n=`${t},${i}`,a=e[n]||[0,0,0,0],o=`${n}  `;for(let e=0;e<4;e++)o+=a[e].toFixed(2).padEnd(8);r+=o+`
`}return r}function fe(){console.log(`Q:`,m),document.getElementById(`cfgQValue`).value=X(m),document.getElementById(`cfgQValue`).style.display=`block`}function pe(){i.stop=!0}function me(){let e=structuredClone(r);Object.keys(e).forEach(t=>{i[t]=e[t]}),document.getElementById(`cfgQValue`).style.display=`none`,alert(`已恢复初始配置`)}function he(){let e=e=>document.getElementById(e);e(`cfgRenderTrain`).onchange=e=>{i.renderTrain=e.target.checked},e(`cfgRenderSpeed`).oninput=e=>i.renderSpeed=+e.target.value,e(`cfgStepMode`).onchange=e=>i.stepMode=e.target.checked,e(`cfgHighRender`).onchange=e=>i.high_render=e.target.checked,e(`cfgShowPath`).onchange=e=>{i.draw_current_path=e.target.checked,i.draw_paths=e.target.checked},e(`cfgShowMarkers`).onchange=e=>{i.draw_policy=e.target.checked},e(`cfgShowHeatmap`).onchange=e=>i.draw_heatmap=e.target.checked,e(`cfgEpisodes`).oninput=e=>i.trainEpisodes=+e.target.value,e(`cfgEpRenderInterval`).oninput=e=>i.EpRenderInterval=+e.target.value,e(`cfgMaxSteps`).oninput=e=>i.maxSteps=+e.target.value,e(`cfgCols`).oninput=e=>i.cols=+e.target.value,e(`cfgRows`).oninput=e=>i.rows=+e.target.value,e(`cfgAlpha`).oninput=e=>i.alpha=+e.target.value,e(`cfgGamma`).oninput=e=>i.gamma=+e.target.value,e(`cfgEpsilon`).oninput=e=>i.epsilon=+e.target.value}new t(L),document.getElementById(`resetBtn`).addEventListener(`click`,J),document.getElementById(`trainBtn`).addEventListener(`click`,ue),document.getElementById(`testBtn`).addEventListener(`click`,de),document.getElementById(`stepBtn`).addEventListener(`click`,U),document.getElementById(`debugBtn`).addEventListener(`click`,fe),document.getElementById(`resetAgentBtn`).addEventListener(`click`,q),document.getElementById(`fresh`).addEventListener(`click`,K),document.getElementById(`stepTrainBtn`).addEventListener(`click`,le),document.getElementById(`stepRenderBtn`).addEventListener(`click`,R),document.getElementById(`stopBtn`).addEventListener(`click`,pe),document.getElementById(`restoreBtn`).addEventListener(`click`,me),document.getElementById(`cfgConsole`).addEventListener(`change`,Q);var Z=document.getElementById(`currentEpisode`);function ge(){document.getElementById(`cfgRenderTrain`).checked=i.renderTrain,document.getElementById(`cfgStepMode`).checked=i.stepMode,document.getElementById(`cfgHighRender`).checked=i.high_render,document.getElementById(`cfgShowPath`).checked=i.draw_current_path||i.draw_paths,document.getElementById(`cfgShowMarkers`).checked=i.draw_policy,document.getElementById(`cfgShowHeatmap`).checked=i.draw_heatmap,document.getElementById(`cfgEpisodes`).value=i.trainEpisodes,document.getElementById(`cfgMaxSteps`).value=i.maxSteps,document.getElementById(`cfgRenderSpeed`).value=i.renderSpeed,document.getElementById(`cfgCols`).value=i.cols,document.getElementById(`cfgRows`).value=i.rows,document.getElementById(`cfgAlpha`).value=i.alpha,document.getElementById(`cfgGamma`).value=i.gamma,document.getElementById(`cfgEpsilon`).value=i.epsilon,document.getElementById(`currentEpisode`).textContent=`episode: ${i.currentEpisode}`,document.getElementById(`cfgConsole`).checked=!0,Q()}c(`currentEpisode`,e=>{Z.textContent=`episode: ${e}`}),c(`Qagent_s`,e=>{document.getElementById(`cfgQagent_s`).textContent=`s(当前状态): ${e}`}),c(`Qagent_a`,e=>{document.getElementById(`cfgQagent_a`).textContent=`a(当前动作): ${e}`}),c(`Qagent_r`,e=>{document.getElementById(`cfgQagent_r`).textContent=`r(即时奖励): ${e.toFixed(3)}`}),c(`Qagent_qs`,e=>{document.getElementById(`cfgQagent_qs`).textContent=`s'(下一状态): ${e}`});function Q(){document.getElementById(`cfgConsole`).checked?(document.getElementById(`cfgQagent_s`).style.display=`block`,document.getElementById(`cfgQagent_a`).style.display=`block`,document.getElementById(`cfgQagent_r`).style.display=`block`,document.getElementById(`cfgQagent_qs`).style.display=`block`,document.getElementById(`QTable`).style.display=`block`,document.getElementById(`maze_formula`).style.display=`flex`):(document.getElementById(`cfgQagent_s`).style.display=`none`,document.getElementById(`cfgQagent_a`).style.display=`none`,document.getElementById(`cfgQagent_r`).style.display=`none`,document.getElementById(`cfgQagent_qs`).style.display=`none`,document.getElementById(`QTable`).style.display=`none`,document.getElementById(`cfgQValue`).style.display=`none`,document.getElementById(`maze_formula`).style.display=`none`)}ge(),he();var _e=document.getElementById(`maze_explainer_text`),ve=document.getElementById(`maze_formula`);ve.innerHTML=`
    $$Q(s, a)=Q(s, a)\\alpha \\Big[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Big]$$
`,_e.innerHTML=`
  <h2>Q-Learning 强化学习算法</h2>

  <p>
    Q-Learning 是一种经典的 <b>无模型（Model-Free）强化学习算法</b>，
    属于 <b>时序差分学习（Temporal Difference Learning）</b>，
    通过学习 <b>状态-动作价值函数 Q(s, a)</b> 来寻找最优策略。
  </p>

  <h3>一、算法核心思想</h3>

  <p>
    在环境中，智能体通过不断与环境交互：
  </p>

  <ul>
    <li>观察当前状态 \\( s \\)</li>
    <li>选择动作 \\( a \\)</li>
    <li>获得奖励 \\( r \\)</li>
    <li>转移到新状态 \\( s' \\)</li>
  </ul>

  <p>
    并通过不断更新 Q 值，使得长期回报最大化。
  </p>

  <h3>二、Q-learning 更新公式</h3>

  <p>
   $$Q(s, a) \\leftarrow Q(s, a) + \\alpha \\Big[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Big]$$
  </p>

  <h3>三、参数解释</h3>

  <ul>
    <li><b>Q(s, a)</b>：状态-动作价值函数</li>
    <li><b>\\(\\alpha\\)</b>：学习率（learning rate）</li>
    <li><b>\\(\\gamma\\)</b>：折扣因子（discount factor）</li>
    <li><b>r</b>：即时奖励</li>
    <li><b>\\(s'\\)</b>：下一状态</li>
    <li><b>\\(\\max_{a'} Q(s', a')\\)</b>：下一状态的最优预期收益</li>
  </ul>

  <h3>四、算法特征</h3>

  <ul>
    <li>✔ 无需环境模型（Model-Free）</li>
    <li>✔ 离线/在线均可学习</li>
    <li>✔ 收敛到最优策略（在满足条件下）</li>
    <li>✔ 适用于离散状态空间</li>
    <li>⚠ 不适合超大/连续状态空间（需要 DQN）</li>
  </ul>

  <h3>五、适用场景</h3>

  <ul>
    <li>迷宫路径搜索（当前项目）</li>
    <li>棋类游戏策略学习</li>
    <li>简单控制问题（GridWorld）</li>
  </ul>

  <hr />

  <h2>在当前 Maze 环境中的训练流程</h2>

  <h3>阶段一：初始化</h3>

  <ol>
    <li>初始化 Q 表 \\( Q(s, a) = 0 \\)</li>
    <li>设定学习率 \\( \\alpha \\)、折扣因子 \\( \\gamma \\)</li>
    <li>设定探索率 \\( \\epsilon \\)（epsilon-greedy）</li>
    <li>重置环境（reset agent position）</li>
  </ol>

  <h3>阶段二：训练过程（Episode Loop）</h3>

  <ol>
    <li>获取当前状态 \\( s \\)</li>

    <li>
      <b>ε-greedy 选择动作：</b><br/>
      - 以 \\( \\epsilon \\) 概率随机选择动作（探索）<br/>
      - 以 \\( 1 - \\epsilon \\) 概率选择
      \\( \\arg\\max_a Q(s, a) \\)（利用）
    </li>

    <li>执行动作 \\( a \\)，进入新状态 \\( s' \\)</li>

    <li>获得奖励 \\( r \\)</li>

    <li>
      计算 TD 目标：
      $$
      target = r + \\gamma \\max_{a'} Q(s', a')
      $$
    </li>

    <li>
      更新 Q 值：
      $$
      Q(s, a) \\leftarrow Q(s, a) + \\alpha (target - Q(s, a))
      $$
    </li>

    <li>重复直到 episode 结束</li>
  </ol>

  <h3>阶段三：策略收敛</h3>

  <ul>
    <li>\\( \\epsilon \\) 逐渐衰减（例如 0.1 → 0.01）</li>
    <li>Q 值逐渐稳定</li>
    <li>路径趋向最优解</li>
  </ul>

  <h3>阶段四：测试阶段（Test Mode）</h3>

  <ol>
    <li>关闭探索：\\( \\epsilon = 0 \\)</li>
    <li>始终选择 \\( \\arg\\max_a Q(s, a) \\)</li>
    <li>智能体按最优策略执行</li>
    <li>不再更新 Q 表</li>
  </ol>

  <h3>测试阶段策略行为</h3>

  <p>
    在测试模式中，智能体完全依赖已学习策略：
  </p>

  <p>
    $$
    a = \\arg\\max_a Q(s, a)
    $$
  </p>
`,window.MathJax.typesetPromise();var $=document.getElementById(`maze_tooltip`);document.addEventListener(`mousemove`,e=>{let t=e.target.closest(`.flow-node`);if(!t){$.style.display=`none`;return}$.innerHTML=t.dataset.info,$.style.left=e.pageX+12+`px`,$.style.top=e.pageY+12+`px`,$.style.display=`block`});