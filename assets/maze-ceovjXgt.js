const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/steps-CxQZiGQU.js","assets/steps-Bj2mbzdd.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./preload-helper-DB-v99-l.js";import{i as t,o as n,t as r}from"./steps-Bj2mbzdd.js";var i=(await e(()=>import(`https://cdn.jsdelivr.net/npm/p5@1.9.0/+esm`),[])).default,{setStepRender:a}=await e(async()=>{let{setStepRender:e}=await import(`./steps-CxQZiGQU.js`);return{setStepRender:e}},__vite__mapDeps([0,1])),o={cols:25,rows:25,cellSize:35,renderTrain:!0,renderSpeed:10,stepMode:!0,stop:!1,trainEpisodes:300,maxSteps:400,currentEpisode:0,EpRenderInterval:20,alpha:.1,gamma:.95,epsilon:.1,now_train_step:0,now_test_step:0,draw_maze:!0,draw_heatmap:!0,draw_paths:!0,draw_current_path:!0,draw_policy:!0,draw_agent:!0,draw_goal:!0,draw_tooltip:!0,high_render:!1},s=new Proxy(structuredClone(o),{set(e,t,n){return e[t]=n,t===`currentEpisode`&&f(`currentEpisode`,n),t===`stepMode`&&f(`stepMode`,n),!0}}),c={Qagent_s:P(1,1),Qagent_a:-1,Qagent_r:0,Qagent_qs:P(1,1)},l=new Proxy(structuredClone(c),{set(e,t,n){return e[t]=n,(t===`Qagent_s`||t===`Qagent_a`||t===`Qagent_r`||t===`Qagent_qs`)&&f(t,n),!0}}),u={};function d(e,t){u[e]||(u[e]=[]),u[e].push(t)}function f(e,t){u[e]&&u[e].forEach(e=>e(t))}var p=[],m={},h,g,_={},v={},y={},b={},x=[],S=null,C=0,ee=400,w=!1,T=[],E=[],D={};function te(e){for(let t=0;t<s.rows;t++)for(let n=0;n<s.cols;n++)p[t][n].wall?e.fill(30,40,60):e.fill(240),e.stroke(200),e.rect(n*s.cellSize,t*s.cellSize,s.cellSize,s.cellSize,4)}function ne(e){let t=1;for(let e in y)t=Math.max(t,y[e]);e.noStroke();for(let n=0;n<s.rows;n++)for(let r=0;r<s.cols;r++){if(p[n][r].wall)continue;let i=P(r,n),a=y[i]||0;if(a===0)continue;let o=a/t*120;e.fill(0,0,123,o),e.rect(r*s.cellSize,n*s.cellSize,s.cellSize,s.cellSize)}}function re(e){if(!S||performance.now()-C<ee)return;let t=document.getElementById(`maze_tooltip`),[n,r]=S.split(`,`).map(Number),i=P(n,r),a=L(i),o=I?I(i):null,s=[`↑`,`↓`,`←`,`→`],c=`<b>${i}</b><br/>`;c+=`
    <div style="
        font-size: 20px;
        font-family: 'Times New Roman', serif;
    ">
        Q(s,a) += α[r + γ max_a' Q(s',a') − Q(s,a)]
    </div>
`;for(let e=0;e<4;e++){c+=`<div style="font-size:18px;">${e}${s[e]}: ${a[e].toFixed(3)}</div>`;let t=`#0ff`;i in b&&b[i]==e&&(t=`#80fa4c`),o&&o[e]&&(c+=`<div style="font-size:18px;color:${t}">
        ${o[e].values}
      </div>`)}t.innerHTML=c,t.style.left=e.mouseX+130+`px`,t.style.top=e.mouseY+12+`px`,t.style.display=`block`}function O(e){e.fill(220,50,50),e.rect(g.x*s.cellSize,g.y*s.cellSize,s.cellSize,s.cellSize,6)}function k(e){let t=m.x*s.cellSize+s.cellSize/2,n=m.y*s.cellSize+s.cellSize/2,r=s.cellSize*.8,i=m.dir;if(e.fill(100,200,255),e.noStroke(),!i){e.circle(t,n,r);return}e.beginShape(),i===`right`?(e.vertex(t+r/2,n),e.vertex(t-r/2,n-r/3),e.vertex(t-r/2,n+r/3)):i===`left`?(e.vertex(t-r/2,n),e.vertex(t+r/2,n-r/3),e.vertex(t+r/2,n+r/3)):i===`down`?(e.vertex(t,n+r/2),e.vertex(t-r/3,n-r/2),e.vertex(t+r/3,n-r/2)):i===`up`&&(e.vertex(t,n-r/2),e.vertex(t-r/3,n+r/2),e.vertex(t+r/3,n+r/2)),e.endShape(e.CLOSE)}function A(e){e.textAlign(e.CENTER,e.CENTER),e.textSize(22),e.fill(30);for(let t=0;t<s.rows;t++)for(let n=0;n<s.cols;n++){if(p[t][n].wall)continue;let r=L(P(n,t)),i=Math.max(...r),a=[];for(let e=0;e<4;e++)r[e]===i&&a.push(e);let o=``;if(a.length===4)o=`·`;else{let e=a[0];e===0&&(o=`↑`),e===1&&(o=`↓`),e===2&&(o=`←`),e===3&&(o=`→`)}e.fill(0),e.text(o,n*s.cellSize+s.cellSize/2,t*s.cellSize+s.cellSize/2)}}function j(e){e.noFill();for(let t=0;t<T.length;t++){let n=T[t];for(let t=1;t<n.length;t++){let r=n[t-1],i=n[t],a=`${r.x},${r.y}->${i.x},${i.y}`,o=D[a]||1,c=(1-t/n.length)*6+o*.5,l=Math.min(200,30+o*20);e.stroke(255,0,0,l),e.strokeWeight(c),e.line(r.x*s.cellSize+s.cellSize/2,r.y*s.cellSize+s.cellSize/2,i.x*s.cellSize+s.cellSize/2,i.y*s.cellSize+s.cellSize/2)}}e.strokeWeight(1),e.stroke(200)}function M(e){e.noFill(),e.push();for(let t=0;t<T.length;t++){let n=T[t],r=.7+t/T.length*.3;for(let t=1;t<n.length;t++){let i=n[t-1],a=n[t],o=`${i.x},${i.y}->${a.x},${a.y}`,c=D[o]||1,l=(1-t/n.length)**1.6,u=(Math.max(8,T.length*.6)*l+c*.2)*r,d=Math.min(160,(100+c*5)*r);e.stroke(255,0,0,d),e.strokeWeight(u);let f=i.x*s.cellSize+s.cellSize/2,p=i.y*s.cellSize+s.cellSize/2,m=a.x*s.cellSize+s.cellSize/2,h=a.y*s.cellSize+s.cellSize/2;for(let t=0;t<7;t++){let n=t/7,r=(t+1)/7,i=(1-n)**1.6,a=e.lerp(f,m,n),o=e.lerp(p,h,n),s=e.lerp(f,m,r),c=e.lerp(p,h,r),l=u*i,g=d*(.6+.4*i);e.stroke(255,0,0,g),e.strokeWeight(l),e.line(a,o,s,c)}}}e.strokeWeight(1),e.stroke(200),e.pop()}function ie(e){if(!(E.length<2)){e.push(),e.stroke(255,0,0,180),e.strokeWeight(3),e.noFill();for(let t=1;t<E.length;t++){let n=E[t-1],r=E[t],i=`${n.x},${n.y}->${r.x},${r.y}`;D[i],e.line(n.x*s.cellSize+s.cellSize/2,n.y*s.cellSize+s.cellSize/2,r.x*s.cellSize+s.cellSize/2,r.y*s.cellSize+s.cellSize/2)}e.pop()}}function ae(e){if(!(E.length<2)){e.push();for(let t=1;t<E.length;t++){let n=E[t-1],r=E[t],i=n.x*s.cellSize+s.cellSize/2,a=n.y*s.cellSize+s.cellSize/2,o=r.x*s.cellSize+s.cellSize/2,c=r.y*s.cellSize+s.cellSize/2;for(let t=0;t<7;t++){let s=t/7,l=(1-s)**1.8,u=e.lerp(i,o,s),d=e.lerp(a,c,s),f=10*l,p=`${n.x},${n.y}->${r.x},${r.y}`,m=D?.[p]||1;e.stroke(255,0,0,120+m*10),e.strokeWeight(f);let h=e.lerp(i,o,(t+1)/7),g=e.lerp(a,c,(t+1)/7);e.line(u,d,h,g)}}e.pop()}}function oe(){let e=document.getElementById(`QTable`),t=[`↑`,`↓`,`←`,`→`],n=`
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
    `;e.innerHTML=n}function se(e,t,n,r=.3){for(let i=1;i<n-1;i++)for(let n=1;n<t-1;n++)Math.random()<r&&e[i][n].wall&&(e[i][n].wall=!1)}function ce(e,t){let n=[];for(let r=0;r<t;r++){let t=[];for(let n=0;n<e;n++)t.push({x:n,y:r,wall:!0,visited:!1});n.push(t)}let r=[],i=n[1][1];i.wall=!1,i.visited=!0,r.push(i);let a=[[0,-2],[2,0],[0,2],[-2,0]];function o(r){let i=[];for(let[o,s]of a){let a=r.x+o,c=r.y+s;a>0&&c>0&&a<e&&c<t&&!n[c][a].visited&&i.push(n[c][a])}return i}for(;r.length>0;){let e=r[r.length-1],t=o(e);if(t.length===0){r.pop();continue}let i=t[Math.floor(Math.random()*t.length)],a=(e.x+i.x)/2,s=(e.y+i.y)/2;n[s][a].wall=!1,i.wall=!1,i.visited=!0,r.push(i)}return se(n,e,t),n}function N(e,t,n=1){let r=`${e.x},${e.y}->${t.x},${t.y}`,i=(D[r]||0)+n;i>0?D[r]=i:delete D[r]}function P(e,t){return`${e},${t}`}function F(e){let[t,n]=e.split(`,`);return{x:t,y:n}}function I(e){return v[e]||(v[e]=[null,null,null,null]),v[e]}function L(e){return _[e]||(_[e]=[0,0,0,0]),_[e]}function R(e){let t=L(e);return!w&&Math.random()<s.epsilon?Math.floor(Math.random()*4):t.indexOf(Math.max(...t))}function z(e,t,n,r){let i=L(e),a=L(r),o=Math.max(...a),c=i[t],l=n+s.gamma*o-c,u=c+s.alpha*l;i[t]=u;let d=I(e);d[t]={values:`
= ${c.toFixed(3)} + ${s.alpha} × (${n.toFixed(3)} + ${s.gamma} × ${o.toFixed(3)} - ${c.toFixed(3)})
`,result:u.toFixed(3)},b[e]=t;let f=F(e),p=F(r);document.getElementById(`q_sa`).textContent=`Q(${f.x}-${f.y},a)`,document.getElementById(`q_s2a2`).textContent=`Q(${p.x}-${p.y},a')`;for(let t=0;t<4;t++){let n=`#e6e6e6`;e in b&&b[e]==t&&(n=`#80fa4c`),document.getElementById(`q_sa_${t}`).textContent=i[t].toFixed(3),document.getElementById(`q_sa_${t}`).style.color=n;let r=document.getElementById(`q_s2a_${t}`);r.textContent=a[t].toFixed(3),a[t]===o?(r.style.color=`#eb5454`,r.style.fontWeight=`bold`):(r.style.color=`#e6e6e6`,r.style.fontWeight=`normal`)}}var B=e=>(e.setup=()=>{e.createCanvas(s.cols*s.cellSize,s.rows*s.cellSize).parent(`game`),K()},e.draw=()=>{e.background(245),s.draw_maze&&te(e),s.draw_heatmap&&ne(e),s.draw_paths&&(s.high_render?M(e):j(e)),s.draw_current_path&&(s.high_render?ae(e):ie(e)),s.draw_policy&&A(e),s.draw_agent&&k(e),s.draw_goal&&O(e),s.draw_tooltip&&re(e)},document.getElementById(`maze_tooltip`),e.mouseMoved=()=>{let t=Math.floor(e.mouseX/s.cellSize),n=Math.floor(e.mouseY/s.cellSize);if(t<0||n<0||t>=s.cols||n>=s.rows){S=null;return}let r=`${t},${n}`;S!==r&&(S=r,C=performance.now(),document.getElementById(`maze_tooltip`).style.display=`none`)},e);function V(){let e=structuredClone(c);Object.keys(e).forEach(t=>{l[t]=e[t]}),s.now_train_step=0,s.now_test_step=0}async function H(){let e={0:t,1:n,2:r};s.stepMode?(e[s.now_train_step](),await a(`train`,s.now_train_step),s.now_train_step++):(s.isTest=!0,e[s.now_test_step](),s.isTest=!1,await a(`test`,s.now_test_step),s.now_test_step++),s.now_train_step>2&&(s.now_train_step=0),s.now_test_step>1&&(s.now_test_step=0);function t(){console.log(`RunStep0`,l);let e=P(m.x,m.y);l.Qagent_s=e,l.Qagent_a=R(e)}function n(){console.log(`RunStep1`,l);let e=W(l.Qagent_a);l.Qagent_qs=e.s2,l.Qagent_r=e.reward,e.done&&alert(`到达终点`)}function r(){console.log(`RunStep2`,l),z(l.Qagent_s,l.Qagent_a,l.Qagent_r,l.Qagent_qs)}}function U(){let e=P(m.x,m.y),t=R(e),{s2:n,reward:r,done:i}=W(t);l.Qagent_s=e,l.Qagent_a=t,l.Qagent_r=r,l.Qagent_qs=n,s.stepMode&&z(e,t,r,n),i&&alert(`end`)}function W(e){(e==null||typeof e!=`number`||e<0||e>=4)&&(console.warn(`invalid action:`,e),e=Math.floor(Math.random()*4));let[t,n]=[[0,-1],[0,1],[-1,0],[1,0]][e];switch(e){case 0:m.dir=`up`;break;case 1:m.dir=`down`;break;case 2:m.dir=`left`;break;case 3:m.dir=`right`;break;default:m.dir=null}let r=m.x+t,i=m.y+n,a=-.01,o=!1,c=m.x,l=m.y;r<0||i<0||r>=s.cols||i>=s.rows||p[i][r].wall?a=-.1:(c=r,l=i),c===m.prevX&&l===m.prevY&&!(c===m.x&&l===m.y)&&(a-=.05),m.prevX=m.x,m.prevY=m.y,m.tx=c,m.ty=l,m.x=m.tx,m.y=m.ty,m.x===g.x&&m.y===g.y&&(a=20,o=!0);let u=P(m.x,m.y),d=P(m.tx,m.ty);return E.push({x:m.x,y:m.y}),w||(y[d]=(y[d]||0)+1),{s:u,s2:d,reward:a,done:o}}async function G(e=0){J();let t=P(m.x,m.y),n=!1,r=0,i=0;for(;!n&&r<s.maxSteps&&!s.stop;){let e=R(t),{s2:a,reward:o,done:c}=W(e);i+=o,z(t,e,o,a),l.Qagent_s=t,l.Qagent_a=e,l.Qagent_r=o,l.Qagent_qs=a,t=a,n=c,r++,s.renderTrain&&await new Promise(e=>setTimeout(e,s.renderSpeed))}if(n||r>=s.maxSteps){if(!w){T.push([...E]);for(let e=1;e<E.length;e++)N(E[e-1],E[e]);if(T.length>20){for(let e=1;e<T[0].length;e++)N(T[0][e-1],T[0][e],-1);T.shift()}}E=[]}let a={episode:e,steps:r,reward:i,win:n};console.log(a),s.stop||x.push(a)}async function le(){s.currentEpisode++,await G(s.currentEpisode)}async function ue(){for(s.currentEpisode=0;s.currentEpisode<s.trainEpisodes&&!s.stop;s.currentEpisode++)await G(s.currentEpisode),(s.currentEpisode===s.trainEpisodes-1||!s.renderTrain&&s.currentEpisode%s.EpRenderInterval===0)&&await new Promise(e=>setTimeout(e,s.renderSpeed));alert(`训练完成`),J()}async function de(){J();let e=P(m.x,m.y),t=!1,n=0;for(w=!0;!t&&n<s.maxSteps;){let{s2:r,reward:i,done:a}=W(R(e));e=r,t=a,n++,await new Promise(e=>setTimeout(e,s.renderSpeed))}w=!1,alert(`测试完成,总步数：`+n+`,是否到达终点：`+t),J()}function K(){p=ce(s.cols,s.rows),h={x:1,y:1},g={x:s.cols-2,y:s.rows-2},q(),Y(),T=[],E=[],D={}}function q(){m={x:h.x,y:h.y,tx:h.x,ty:h.y,prevX:h.x,prevY:h.y,dir:null},_={},y={},v={},b={},x=[],s.stop=!1,s.currentEpisode=0,w=!1,T=[],E=[],D={},V(),oe(),document.getElementById(`cfgQValue`).value=X(_),document.getElementById(`cfgQValue`).style.display=`none`}function J(){m={x:h.x,y:h.y,tx:h.x,ty:h.y,prevX:h.x,prevY:h.y,dir:null},V(),s.stop=!1,Y(),E=[]}function Y(){S=null,C=0,w=!1,b={},s.now_train_step=0,s.now_test_step=0}function X(e){let t=[`0`,`1`,`2`,`3`],n=Object.keys(e).map(e=>e.split(`,`).map(Number)).sort((e,t)=>e[0]-t[0]||e[1]-t[1]),r=``;r+=`  Q   `+t.map(e=>e.padEnd(8)).join(``)+`
`;for(let[t,i]of n){let n=`${t},${i}`,a=e[n]||[0,0,0,0],o=`${n}  `;for(let e=0;e<4;e++)o+=a[e].toFixed(2).padEnd(8);r+=o+`
`}return r}function fe(){console.log(`Q:`,_),document.getElementById(`cfgQValue`).value=X(_),document.getElementById(`cfgQValue`).style.display=`block`}function pe(){s.stop=!0}function me(){let e=structuredClone(o);Object.keys(e).forEach(t=>{s[t]=e[t]}),document.getElementById(`cfgQValue`).style.display=`none`,alert(`已恢复初始配置`)}function he(){let e=e=>document.getElementById(e);e(`cfgRenderTrain`).onchange=e=>{s.renderTrain=e.target.checked},e(`cfgRenderSpeed`).oninput=e=>s.renderSpeed=+e.target.value,e(`cfgStepMode`).onchange=e=>s.stepMode=e.target.checked,e(`cfgHighRender`).onchange=e=>s.high_render=e.target.checked,e(`cfgShowPath`).onchange=e=>{s.draw_current_path=e.target.checked,s.draw_paths=e.target.checked},e(`cfgShowMarkers`).onchange=e=>{s.draw_policy=e.target.checked},e(`cfgShowHeatmap`).onchange=e=>s.draw_heatmap=e.target.checked,e(`cfgEpisodes`).oninput=e=>s.trainEpisodes=+e.target.value,e(`cfgEpRenderInterval`).oninput=e=>s.EpRenderInterval=+e.target.value,e(`cfgMaxSteps`).oninput=e=>s.maxSteps=+e.target.value,e(`cfgCols`).oninput=e=>s.cols=+e.target.value,e(`cfgRows`).oninput=e=>s.rows=+e.target.value,e(`cfgAlpha`).oninput=e=>s.alpha=+e.target.value,e(`cfgGamma`).oninput=e=>s.gamma=+e.target.value,e(`cfgEpsilon`).oninput=e=>s.epsilon=+e.target.value}new i(B),document.getElementById(`resetBtn`).addEventListener(`click`,J),document.getElementById(`trainBtn`).addEventListener(`click`,ue),document.getElementById(`testBtn`).addEventListener(`click`,de),document.getElementById(`stepBtn`).addEventListener(`click`,U),document.getElementById(`debugBtn`).addEventListener(`click`,fe),document.getElementById(`resetAgentBtn`).addEventListener(`click`,q),document.getElementById(`fresh`).addEventListener(`click`,K),document.getElementById(`stepTrainBtn`).addEventListener(`click`,le),document.getElementById(`stepRenderBtn`).addEventListener(`click`,H),document.getElementById(`stopBtn`).addEventListener(`click`,pe),document.getElementById(`restoreBtn`).addEventListener(`click`,me),document.getElementById(`cfgConsole`).addEventListener(`change`,Q);var Z=document.getElementById(`currentEpisode`);function ge(){document.getElementById(`cfgRenderTrain`).checked=s.renderTrain,document.getElementById(`cfgStepMode`).checked=s.stepMode,document.getElementById(`cfgHighRender`).checked=s.high_render,document.getElementById(`cfgShowPath`).checked=s.draw_current_path||s.draw_paths,document.getElementById(`cfgShowMarkers`).checked=s.draw_policy,document.getElementById(`cfgShowHeatmap`).checked=s.draw_heatmap,document.getElementById(`cfgEpisodes`).value=s.trainEpisodes,document.getElementById(`cfgMaxSteps`).value=s.maxSteps,document.getElementById(`cfgRenderSpeed`).value=s.renderSpeed,document.getElementById(`cfgCols`).value=s.cols,document.getElementById(`cfgRows`).value=s.rows,document.getElementById(`cfgAlpha`).value=s.alpha,document.getElementById(`cfgGamma`).value=s.gamma,document.getElementById(`cfgEpsilon`).value=s.epsilon,document.getElementById(`currentEpisode`).textContent=`episode: ${s.currentEpisode}`,document.getElementById(`cfgConsole`).checked=!1,Q(),r(s.stepMode?`train`:`test`)}d(`currentEpisode`,e=>{Z.textContent=`episode: ${e}`}),d(`stepMode`,e=>{r(e?`train`:`test`)}),d(`Qagent_s`,e=>{document.getElementById(`cfgQagent_s`).textContent=`s(当前状态): ${e}`}),d(`Qagent_a`,e=>{document.getElementById(`cfgQagent_a`).textContent=`a(当前动作): ${e}`}),d(`Qagent_r`,e=>{document.getElementById(`cfgQagent_r`).textContent=`r(即时奖励): ${e.toFixed(3)}`}),d(`Qagent_qs`,e=>{document.getElementById(`cfgQagent_qs`).textContent=`s'(下一状态): ${e}`});function Q(){document.getElementById(`cfgConsole`).checked?(document.getElementById(`cfgQagent_s`).style.display=`block`,document.getElementById(`cfgQagent_a`).style.display=`block`,document.getElementById(`cfgQagent_r`).style.display=`block`,document.getElementById(`cfgQagent_qs`).style.display=`block`,document.getElementById(`QTable`).style.display=`block`,document.getElementById(`maze_formula`).style.display=`flex`,document.getElementById(`maze_steps`).style.display=`flex`):(document.getElementById(`cfgQagent_s`).style.display=`none`,document.getElementById(`cfgQagent_a`).style.display=`none`,document.getElementById(`cfgQagent_r`).style.display=`none`,document.getElementById(`cfgQagent_qs`).style.display=`none`,document.getElementById(`QTable`).style.display=`none`,document.getElementById(`cfgQValue`).style.display=`none`,document.getElementById(`maze_formula`).style.display=`none`,document.getElementById(`maze_steps`).style.display=`none`)}var $=document.getElementById(`maze_tooltip`);ge(),he();var _e=document.getElementById(`maze_explainer_text`),ve=document.getElementById(`maze_formula`);ve.innerHTML=`
    $$Q(s, a)=Q(s, a)+\\alpha \\Big[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Big]$$
`,_e.innerHTML=`
  <h2>Q-Learning </h2>

  <p>
    Q-Learning 是一种经典的 <b>无模型强化学习算法</b>，
    属于 <b>时序差分学习（Temporal Difference Learning）</b>，
    通过在每一步与环境交互中逐步学习、寻找最优策略。</b>
    常用于迷宫、棋类游戏等场景。
  </p>

  <h3>核心更新公式</h3>

  <p>
   $$Q(s, a) = Q(s, a) + \\alpha \\Big[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Big]$$
  </p>
  <p>其中：</p>

  <ul>
    <li><b>Q(s, a)</b>：状态-动作价值函数</li>
    <li><b>\\(\\alpha\\)</b>：学习率</li>
    <li><b>\\(\\gamma\\)</b>：折扣因子</li>
    <li><b>r</b>：即时奖励</li>
    <li><b>\\(s'\\)</b>：下一状态</li>
  </ul>

  <h3>算法特点</h3>

  <ul>
    <li> 无需环境模型</li>
    <li> 离线/在线均可学习(主要用于在线学习环境)</li>
    <li> 适用于离散状态空间、不适合过大或者连续状态的情景</li>
  </ul>

  <h3>算法流程</h3>

  <h4>初始化</h4>

  <ol>
    <li>初始化 Q 表 \\( Q(s, a) = 0 \\) 和环境</li>
    <li>设定学习率 \\( \\alpha \\)、折扣因子 \\( \\gamma \\)、探索率 \\( \\epsilon \\)（epsilon-greedy）</li>
  </ol>

  <h4>训练</h4>

  <ol>

    <li>
      <b>使用 ε-greedy 策略选择动作：</b><br/>
      - 以 \\( \\epsilon \\) 概率随机选择动作（探索）<br/>
      - 以 \\( 1 - \\epsilon \\) 概率选择
      \\( \\arg\\max_a Q(s, a) \\)（利用）
    </li>

    <li>智能体执行动作 \\( a \\)，进入新状态 \\( s' \\)，获得奖励 \\( r \\)</li>

    <li>
    更新 Q 值：
      $$
      Q(s, a) = Q(s, a) + \\alpha (r + \\gamma \\max_{a'} Q(s', a') - Q(s, a))
      $$
    </li>

    <li>重复直到 episode 结束</li>
  </ol>

  <h4>测试</h4>

  <ol>
    <li>始终选择 \\( \\arg\\max_a Q(s, a) \\)/设定\\( \\epsilon = 0 \\)（一般都这么做，但也可以不关）</li>
    <li>智能体执行动作 \\( a \\)，进入新状态 \\( s' \\)，获得奖励 \\( r \\)，不更新 Q 表</li>
  </ol>


`,window.MathJax.typesetPromise(),document.addEventListener(`mousemove`,async e=>{let r=e.target.closest(`.flow-node`);if(!r){$.style.display=`none`;return}s.stepMode?$.innerHTML=n[r.dataset.index]:$.innerHTML=t[r.dataset.index],$.style.left=e.pageX-150+`px`,$.style.top=e.pageY-50+`px`,$.style.display=`block`,MathJax.typesetPromise([$])});