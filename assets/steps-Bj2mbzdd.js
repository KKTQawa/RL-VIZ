var e=[`ε-greedy 选择动作`,`执行动作获得 r, s'`,`更新 Q(s,a)`],t=[`<div>
    ε-greedy 贪心策略标准形式：

    <div>
$$
a_t = \\left\\{
\\begin{matrix}
\\arg\\max_{a} Q(s_t, a), & \\text{以概率 } 1-\\epsilon \\\\
\\text{随机动作}, & \\text{以概率 } \\epsilon
\\end{matrix}
\\right.
$$
    </div>

    <div>
也就是有 \\( 1-\\epsilon \\)  概率，在当前状态 \\( s \\) 对应的所有动作 a 中，取使 \\( Q(s,a) \\) 最大的那个 a，如果有多个满足条件则随机选一个；
</div>

    <div>
有 \\( \\epsilon \\)  概率选择随机动作。
    </div>
  </div>`,`<div>
智能体执行选择的动作，由环境给出执行后得到的奖励 r 和下一个状态 s'。
</div>`,`<div>
$$
Q(s, a)=Q(s, a)\\alpha \\Big[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Big]
$$

<div>
其中 \\( \\max_{a'} Q(s', a') \\)  是下一个状态 \\( s' \\) 对应的所有动作 a' 的 Q 值中最大的值。
</div>
</div>`],n=[`argmax Q(s,a) 选择动作`,`执行动作得到下一个状态s'`],r=[`<div>
    $$
    a_t = 
    argmax_{a} Q(s_t, a)
    $$
  </div>

  <div>
    即在当前状态 \\( s_t \\) 对应的所有动作 a 中，取使 \\( Q(s_t, a) \\) 最大的那个 a，如果有多个满足条件则随机选一个。
  </div>`,`<div>
    智能体执行选择的动作，不需要关心执行后得到的奖励，只需要关心下一个状态 s'。
  </div>`];function i(e,t,n){let r=document.getElementById(e);r.innerHTML=`
    <div class="flow-title">${t}</div>
    <div class="flow-column">
      ${n.map((e,t)=>`
        <div class="flow-node" data-index="${t}">
          ${t+1}. ${e}
        </div>
      `).join(``)}
    </div>
  `}async function a(e,t=150){let n=document.getElementById(`maze_Steps`).querySelectorAll(`.flow-node`);for(let r=0;r<n.length;r++)r<=e?(n[r].classList.add(`active`),n[r].classList.add(`done`),await new Promise(e=>setTimeout(e,t))):n[r].classList.remove(`active`)}async function o(t,r){t===`train`?(i(`maze_Steps`,`训练流程`,e),await a(r)):t===`test`&&(i(`maze_Steps`,`推理流程`,n),await a(r))}function s(t){t===`train`?i(`maze_Steps`,`训练流程`,e):t===`test`&&i(`maze_Steps`,`推理流程`,n)}export{e as a,r as i,o as n,t as o,n as r,s as t};