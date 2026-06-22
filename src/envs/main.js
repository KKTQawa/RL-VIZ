import { Game } from "./env.js";
import { piece2id, rc2num, num2rc, encode_action } from "./utils.js";
import { Agent } from "./agent.js";

const env = new Game();
let agent = new Agent(env);

function reset() {
    env.reset();
}

async function train() {
    await agent.train();
}
async function test() {
    await agent.test();
}
async function load() {

}
async function save() {

}

reset();
// 挂到全局
window.reset = reset;
window.train = train;
window.test = test;
window.load = load;
window.save = save;
