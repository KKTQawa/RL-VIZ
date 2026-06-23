import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./preload-helper-DB-v99-l.js";var t=(await e(()=>import(`https://cdn.jsdelivr.net/npm/p5@1.9.0/+esm`),[])).default,n={cols:25,rows:25,cellSize:35,renderTrain:!0,renderSpeed:10,stepMode:!1,stop:!1,trainEpisodes:300,maxSteps:400,currentEpisode:0,EpRenderInterval:20,alpha:.1,gamma:.95,epsilon:.1,draw_maze:!0,draw_heatmap:!0,draw_paths:!0,draw_current_path:!0,draw_policy:!0,draw_agent:!0,draw_goal:!0,draw_tooltip:!0,high_render:!1},r=new Proxy(structuredClone(n),{set(e,t,n){return e[t]=n,t===`currentEpisode`&&c(`currentEpisode`,n),!0}}),i={Qagent_s:P(1,1),Qagent_a:-1,Qagent_r:0,Qagent_qs:P(1,1)},a=new Proxy(structuredClone(i),{set(e,t,n){return e[t]=n,(t===`Qagent_s`||t===`Qagent_a`||t===`Qagent_r`||t===`Qagent_qs`)&&c(t,n),!0}}),o={};function s(e,t){o[e]||(o[e]=[]),o[e].push(t)}function c(e,t){o[e]&&o[e].forEach(e=>e(t))}var l=[],u={},d,f,p={},m={},h={},g={},_=[],v=null,y=0,ee=400,b=!1,x=[],S=[],C={};function te(e){for(let t=0;t<r.rows;t++)for(let n=0;n<r.cols;n++)l[t][n].wall?e.fill(30,40,60):e.fill(240),e.stroke(200),e.rect(n*r.cellSize,t*r.cellSize,r.cellSize,r.cellSize,4)}function w(e){let t=1;for(let e in h)t=Math.max(t,h[e]);e.noStroke();for(let n=0;n<r.rows;n++)for(let i=0;i<r.cols;i++){if(l[n][i].wall)continue;let a=P(i,n),o=h[a]||0;if(o===0)continue;let s=o/t*120;e.fill(0,0,123,s),e.rect(i*r.cellSize,n*r.cellSize,r.cellSize,r.cellSize)}}function T(e){if(!v||performance.now()-y<ee)return;let t=document.getElementById(`maze_tooltip`),[n,r]=v.split(`,`).map(Number),i=P(n,r),a=L(i),o=I?I(i):null,s=[`↑`,`↓`,`←`,`→`],c=`<b>${i}</b><br/>`;c+=`
    <div style="
        font-size: 20px;
        font-family: 'Times New Roman', serif;
    ">
        Q(s,a) += α[r + γ max_a' Q(s',a') − Q(s,a)]
    </div>
`;for(let e=0;e<4;e++){c+=`<div style="font-size:18px;">${e}${s[e]}: ${a[e].toFixed(3)}</div>`;let t=`#0ff`;i in g&&g[i]==e&&(t=`#80fa4c`),o&&o[e]&&(c+=`<div style="font-size:18px;color:${t}">
        ${o[e].values}
      </div>`)}t.innerHTML=c,t.style.left=e.mouseX+12+`px`,t.style.top=e.mouseY+12+`px`,t.style.display=`block`}function E(e){e.fill(220,50,50),e.rect(f.x*r.cellSize,f.y*r.cellSize,r.cellSize,r.cellSize,6)}function D(e){let t=u.x*r.cellSize+r.cellSize/2,n=u.y*r.cellSize+r.cellSize/2,i=r.cellSize*.8,a=u.dir;if(e.fill(100,200,255),e.noStroke(),!a){e.circle(t,n,i);return}e.beginShape(),a===`right`?(e.vertex(t+i/2,n),e.vertex(t-i/2,n-i/3),e.vertex(t-i/2,n+i/3)):a===`left`?(e.vertex(t-i/2,n),e.vertex(t+i/2,n-i/3),e.vertex(t+i/2,n+i/3)):a===`down`?(e.vertex(t,n+i/2),e.vertex(t-i/3,n-i/2),e.vertex(t+i/3,n-i/2)):a===`up`&&(e.vertex(t,n-i/2),e.vertex(t-i/3,n+i/2),e.vertex(t+i/3,n+i/2)),e.endShape(e.CLOSE)}function O(e){e.textAlign(e.CENTER,e.CENTER),e.textSize(22),e.fill(30);for(let t=0;t<r.rows;t++)for(let n=0;n<r.cols;n++){if(l[t][n].wall)continue;let i=L(P(n,t)),a=Math.max(...i),o=[];for(let e=0;e<4;e++)i[e]===a&&o.push(e);let s=``;if(o.length===4)s=`·`;else{let e=o[0];e===0&&(s=`↑`),e===1&&(s=`↓`),e===2&&(s=`←`),e===3&&(s=`→`)}e.fill(0),e.text(s,n*r.cellSize+r.cellSize/2,t*r.cellSize+r.cellSize/2)}}function k(e){e.noFill();for(let t=0;t<x.length;t++){let n=x[t];for(let t=1;t<n.length;t++){let i=n[t-1],a=n[t],o=`${i.x},${i.y}->${a.x},${a.y}`,s=C[o]||1,c=(1-t/n.length)*6+s*.5,l=Math.min(200,30+s*20);e.stroke(255,0,0,l),e.strokeWeight(c),e.line(i.x*r.cellSize+r.cellSize/2,i.y*r.cellSize+r.cellSize/2,a.x*r.cellSize+r.cellSize/2,a.y*r.cellSize+r.cellSize/2)}}e.strokeWeight(1),e.stroke(200)}function A(e){e.noFill(),e.push();for(let t=0;t<x.length;t++){let n=x[t],i=.7+t/x.length*.3;for(let t=1;t<n.length;t++){let a=n[t-1],o=n[t],s=`${a.x},${a.y}->${o.x},${o.y}`,c=C[s]||1,l=(1-t/n.length)**1.6,u=(Math.max(8,x.length*.6)*l+c*.2)*i,d=Math.min(160,(100+c*5)*i);e.stroke(255,0,0,d),e.strokeWeight(u);let f=a.x*r.cellSize+r.cellSize/2,p=a.y*r.cellSize+r.cellSize/2,m=o.x*r.cellSize+r.cellSize/2,h=o.y*r.cellSize+r.cellSize/2;for(let t=0;t<7;t++){let n=t/7,r=(t+1)/7,i=(1-n)**1.6,a=e.lerp(f,m,n),o=e.lerp(p,h,n),s=e.lerp(f,m,r),c=e.lerp(p,h,r),l=u*i,g=d*(.6+.4*i);e.stroke(255,0,0,g),e.strokeWeight(l),e.line(a,o,s,c)}}}e.strokeWeight(1),e.stroke(200),e.pop()}function j(e){if(!(S.length<2)){e.push(),e.stroke(255,0,0,180),e.strokeWeight(3),e.noFill();for(let t=1;t<S.length;t++){let n=S[t-1],i=S[t],a=`${n.x},${n.y}->${i.x},${i.y}`;C[a],e.line(n.x*r.cellSize+r.cellSize/2,n.y*r.cellSize+r.cellSize/2,i.x*r.cellSize+r.cellSize/2,i.y*r.cellSize+r.cellSize/2)}e.pop()}}function M(e){if(!(S.length<2)){e.push();for(let t=1;t<S.length;t++){let n=S[t-1],i=S[t],a=n.x*r.cellSize+r.cellSize/2,o=n.y*r.cellSize+r.cellSize/2,s=i.x*r.cellSize+r.cellSize/2,c=i.y*r.cellSize+r.cellSize/2;for(let t=0;t<7;t++){let r=t/7,l=(1-r)**1.8,u=e.lerp(a,s,r),d=e.lerp(o,c,r),f=10*l,p=`${n.x},${n.y}->${i.x},${i.y}`,m=C?.[p]||1;e.stroke(255,0,0,120+m*10),e.strokeWeight(f);let h=e.lerp(a,s,(t+1)/7),g=e.lerp(o,c,(t+1)/7);e.line(u,d,h,g)}}e.pop()}}function ne(){let e=document.getElementById(`QTable`),t=[`↑`,`↓`,`←`,`→`],n=`
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
    `;e.innerHTML=n}function re(e,t,n,r=.3){for(let i=1;i<n-1;i++)for(let n=1;n<t-1;n++)Math.random()<r&&e[i][n].wall&&(e[i][n].wall=!1)}function ie(e,t){let n=[];for(let r=0;r<t;r++){let t=[];for(let n=0;n<e;n++)t.push({x:n,y:r,wall:!0,visited:!1});n.push(t)}let r=[],i=n[1][1];i.wall=!1,i.visited=!0,r.push(i);let a=[[0,-2],[2,0],[0,2],[-2,0]];function o(r){let i=[];for(let[o,s]of a){let a=r.x+o,c=r.y+s;a>0&&c>0&&a<e&&c<t&&!n[c][a].visited&&i.push(n[c][a])}return i}for(;r.length>0;){let e=r[r.length-1],t=o(e);if(t.length===0){r.pop();continue}let i=t[Math.floor(Math.random()*t.length)],a=(e.x+i.x)/2,s=(e.y+i.y)/2;n[s][a].wall=!1,i.wall=!1,i.visited=!0,r.push(i)}return re(n,e,t),n}function N(e,t,n=1){let r=`${e.x},${e.y}->${t.x},${t.y}`,i=(C[r]||0)+n;i>0?C[r]=i:delete C[r]}function P(e,t){return`${e},${t}`}function F(e){let[t,n]=e.split(`,`);return{x:t,y:n}}function I(e){return m[e]||(m[e]=[null,null,null,null]),m[e]}function L(e){return p[e]||(p[e]=[0,0,0,0]),p[e]}function R(e){let t=L(e);return Math.random()<r.epsilon?Math.floor(Math.random()*4):t.indexOf(Math.max(...t))}function z(e,t,n,i){let a=L(e),o=L(i),s=Math.max(...o),c=a[t],l=n+r.gamma*s-c,u=c+r.alpha*l;a[t]=u;let d=I(e);d[t]={values:`
= ${c.toFixed(3)} + ${r.alpha} × (${n.toFixed(3)} + ${r.gamma} × ${s.toFixed(3)} - ${c.toFixed(3)})
`,result:u.toFixed(3)},g[e]=t;let f=F(e),p=F(i);document.getElementById(`q_sa`).textContent=`Q(${f.x}-${f.y},a)`,document.getElementById(`q_s2a2`).textContent=`Q(${p.x}-${p.y},a')`;for(let t=0;t<4;t++){let n=`#e6e6e6`;e in g&&g[e]==t&&(n=`#80fa4c`);let r=`#e6e6e6`;i in g&&g[i]==t&&(r=`#80fa4c`),document.getElementById(`q_sa_${t}`).textContent=a[t].toFixed(3),document.getElementById(`q_sa_${t}`).style.color=n,document.getElementById(`q_s2a_${t}`).textContent=o[t].toFixed(3),document.getElementById(`q_s2a_${t}`).style.color=r}}var B=e=>(e.setup=()=>{e.createCanvas(r.cols*r.cellSize,r.rows*r.cellSize).parent(`game`),q()},e.draw=()=>{e.background(245),r.draw_maze&&te(e),r.draw_heatmap&&w(e),r.draw_paths&&(r.high_render?A(e):k(e)),r.draw_current_path&&(r.high_render?M(e):j(e)),r.draw_policy&&O(e),r.draw_agent&&D(e),r.draw_goal&&E(e),r.draw_tooltip&&T(e)},document.getElementById(`maze_tooltip`),e.mouseMoved=()=>{let t=Math.floor(e.mouseX/r.cellSize),n=Math.floor(e.mouseY/r.cellSize);if(t<0||n<0||t>=r.cols||n>=r.rows){v=null;return}let i=`${t},${n}`;v!==i&&(v=i,y=performance.now(),document.getElementById(`maze_tooltip`).style.display=`none`)},e);function V(){let e=P(u.x,u.y),t=R(e),{s2:n,reward:i,done:o}=H(t);a.Qagent_s=e,a.Qagent_a=t,a.Qagent_r=i,a.Qagent_qs=n,r.stepMode&&z(e,t,i,n),o&&alert(`end`)}function H(e){(e==null||typeof e!=`number`||e<0||e>=4)&&(console.warn(`invalid action:`,e),e=Math.floor(Math.random()*4));let[t,n]=[[0,-1],[0,1],[-1,0],[1,0]][e];switch(e){case 0:u.dir=`up`;break;case 1:u.dir=`down`;break;case 2:u.dir=`left`;break;case 3:u.dir=`right`;break;default:u.dir=null}let i=u.x+t,a=u.y+n,o=-.01,s=!1,c=u.x,d=u.y;i<0||a<0||i>=r.cols||a>=r.rows||l[a][i].wall?o=-.1:(c=i,d=a),c===u.prevX&&d===u.prevY&&!(c===u.x&&d===u.y)&&(o-=.05),u.prevX=u.x,u.prevY=u.y,u.tx=c,u.ty=d,u.x=u.tx,u.y=u.ty,u.x===f.x&&u.y===f.y&&(o=20,s=!0);let p=P(u.x,u.y),m=P(u.tx,u.ty);return S.push({x:u.x,y:u.y}),b||(h[m]=(h[m]||0)+1),{s:p,s2:m,reward:o,done:s}}async function U(e=0){Y();let t=P(u.x,u.y),n=!1,i=0,o=0;for(;!n&&i<r.maxSteps&&!r.stop;){let e=R(t),{s2:s,reward:c,done:l}=H(e);o+=c,z(t,e,c,s),a.Qagent_s=t,a.Qagent_a=e,a.Qagent_r=c,a.Qagent_qs=s,t=s,n=l,i++,r.renderTrain&&await new Promise(e=>setTimeout(e,r.renderSpeed))}if(n||i>=r.maxSteps){if(!b){x.push([...S]);for(let e=1;e<S.length;e++)N(S[e-1],S[e]);if(x.length>20){for(let e=1;e<x[0].length;e++)N(x[0][e-1],x[0][e],-1);x.shift()}}S=[]}let s={episode:e,steps:i,reward:o,win:n};console.log(s),r.stop||_.push(s)}async function W(){r.currentEpisode++,await U(r.currentEpisode)}async function G(){for(r.currentEpisode=0;r.currentEpisode<r.trainEpisodes&&!r.stop;r.currentEpisode++)await U(r.currentEpisode),(r.currentEpisode===r.trainEpisodes-1||!r.renderTrain&&r.currentEpisode%r.EpRenderInterval===0)&&await new Promise(e=>setTimeout(e,r.renderSpeed));alert(`训练完成`)}async function K(){Y();let e=P(u.x,u.y),t=!1,n=0;for(b=!0;!t&&n<r.maxSteps;){let{s2:i,reward:a,done:o}=H(R(e));e=i,t=o,n++,await new Promise(e=>setTimeout(e,r.renderSpeed))}b=!1,alert(`测试完成,总步数：`+n+`,是否到达终点：`+t)}function q(){l=ie(r.cols,r.rows),d={x:1,y:1},f={x:r.cols-2,y:r.rows-2},J(),X(),x=[],S=[],C={}}function J(){u={x:d.x,y:d.y,tx:d.x,ty:d.y,prevX:d.x,prevY:d.y,dir:null},p={},h={},m={},g={},_=[],r.stop=!1,r.currentEpisode=0,b=!1,x=[],S=[],C={};let e=structuredClone(i);Object.keys(e).forEach(t=>{a[t]=e[t]}),ne()}function Y(){u={x:d.x,y:d.y,tx:d.x,ty:d.y,prevX:d.x,prevY:d.y,dir:null};let e=structuredClone(i);Object.keys(e).forEach(t=>{a[t]=e[t]}),r.stop=!1,X(),S=[]}function X(){v=null,y=0,b=!1,g={}}function ae(){console.log(p)}function oe(){r.stop=!0}function se(){let e=structuredClone(n);Object.keys(e).forEach(t=>{r[t]=e[t]}),alert(`已恢复初始配置`)}function ce(){let e=e=>document.getElementById(e);e(`cfgRenderTrain`).onchange=e=>{r.renderTrain=e.target.checked},e(`cfgRenderSpeed`).oninput=e=>r.renderSpeed=+e.target.value,e(`cfgStepMode`).onchange=e=>r.stepMode=e.target.checked,e(`cfgHighRender`).onchange=e=>r.high_render=e.target.checked,e(`cfgShowPath`).onchange=e=>{r.draw_current_path=e.target.checked,r.draw_paths=e.target.checked},e(`cfgEpisodes`).oninput=e=>r.trainEpisodes=+e.target.value,e(`cfgEpRenderInterval`).oninput=e=>r.EpRenderInterval=+e.target.value,e(`cfgMaxSteps`).oninput=e=>r.maxSteps=+e.target.value,e(`cfgCols`).oninput=e=>r.cols=+e.target.value,e(`cfgRows`).oninput=e=>r.rows=+e.target.value,e(`cfgAlpha`).oninput=e=>r.alpha=+e.target.value,e(`cfgGamma`).oninput=e=>r.gamma=+e.target.value,e(`cfgEpsilon`).oninput=e=>r.epsilon=+e.target.value}new t(B);async function Z(e,t,n=150){let r=document.getElementById(`maze_`+e+`Steps`).querySelectorAll(`.flow-node`);for(let e=0;e<r.length;e++)e<=t?(r[e].classList.add(`active`),r[e].classList.add(`done`),await new Promise(e=>setTimeout(e,n))):r[e].classList.remove(`active`)}await Z(`train`,2),await Z(`test`,2);function Q(e,t){let n=document.querySelector(`#maze_${e}Steps`).querySelectorAll(`.step-node`);n.forEach(e=>e.classList.remove(`active`)),n[t]&&n[t].classList.add(`active`)}document.getElementById(`resetBtn`).addEventListener(`click`,Y),document.getElementById(`trainBtn`).addEventListener(`click`,G),document.getElementById(`testBtn`).addEventListener(`click`,K),document.getElementById(`stepBtn`).addEventListener(`click`,V),document.getElementById(`debugBtn`).addEventListener(`click`,ae),document.getElementById(`resetAgentBtn`).addEventListener(`click`,J),document.getElementById(`fresh`).addEventListener(`click`,q),document.getElementById(`stepTrainBtn`).addEventListener(`click`,W),document.getElementById(`stopBtn`).addEventListener(`click`,oe),document.getElementById(`restoreBtn`).addEventListener(`click`,se);var le=document.getElementById(`currentEpisode`);function $(){document.getElementById(`cfgRenderTrain`).checked=r.renderTrain,document.getElementById(`cfgStepMode`).checked=r.stepMode,document.getElementById(`cfgHighRender`).checked=r.high_render,document.getElementById(`cfgShowPath`).checked=r.draw_current_path||r.draw_paths,document.getElementById(`cfgEpisodes`).value=r.trainEpisodes,document.getElementById(`cfgMaxSteps`).value=r.maxSteps,document.getElementById(`cfgRenderSpeed`).value=r.renderSpeed,document.getElementById(`cfgCols`).value=r.cols,document.getElementById(`cfgRows`).value=r.rows,document.getElementById(`cfgAlpha`).value=r.alpha,document.getElementById(`cfgGamma`).value=r.gamma,document.getElementById(`cfgEpsilon`).value=r.epsilon,document.getElementById(`currentEpisode`).textContent=`episode: ${r.currentEpisode}`}s(`currentEpisode`,e=>{le.textContent=`episode: ${e}`}),s(`Qagent_s`,e=>{document.getElementById(`cfgQagent_s`).textContent=`s: ${e}`}),s(`Qagent_a`,e=>{document.getElementById(`cfgQagent_a`).textContent=`a: ${e}`}),s(`Qagent_r`,e=>{document.getElementById(`cfgQagent_r`).textContent=`r: ${e.toFixed(3)}`}),s(`Qagent_qs`,e=>{document.getElementById(`cfgQagent_qs`).textContent=`s': ${e}`}),$(),ce();var ue=document.getElementById(`maze_explainer_text`),de=document.getElementById(`maze_formula`);de.innerHTML=`
    $$Q(s, a)=Q(s, a)\\alpha \\Big[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Big]$$
`,ue.innerHTML=`
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
`,window.MathJax.typesetPromise(),Q(`train`,0),Q(`train`,1),Q(`test`,0);