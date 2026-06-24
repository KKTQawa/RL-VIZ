var e=[`ε-greedy 选择动作`,`执行动作获得 r, s'`,`更新 Q(s,a)`],t=[`获取当前状态 s`,`argmax Q(s,a) 选择动作`,`执行动作`];function n(e,t,n){let r=document.getElementById(e);r.innerHTML=`
    <div class="flow-title">${t}</div>
    <div class="flow-column">
      ${n.map((e,t)=>`
        <div class="flow-node" data-info="${e}" data-index="${t}">
          ${t+1}. ${e}
        </div>
      `).join(``)}
    </div>
  `}async function r(e,t=150){let n=document.getElementById(`maze_Steps`).querySelectorAll(`.flow-node`);for(let r=0;r<n.length;r++)r<=e?(n[r].classList.add(`active`),n[r].classList.add(`done`),await new Promise(e=>setTimeout(e,t))):n[r].classList.remove(`active`)}async function i(i,a){i===`train`?(n(`maze_Steps`,`训练流程`,e),await r(a)):i===`test`&&(n(`maze_Steps`,`测试流程`,t),await r(a))}export{i as setStepRender};