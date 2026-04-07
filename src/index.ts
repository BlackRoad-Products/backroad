export interface Env { STORE: KVNamespace; DB: D1Database; SERVICE_NAME: string; VERSION: string; }
const SVC = "backroad";
function json(d: unknown, s = 200) { return new Response(JSON.stringify(d,null,2),{status:s,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","X-BlackRoad-Service":SVC}}); }
async function track(env: Env, req: Request, path: string) { const cf=(req as any).cf||{}; env.DB.prepare("INSERT INTO analytics(subdomain,path,country,ua,ts)VALUES(?,?,?,?,?)").bind(SVC,path,cf.country||"",req.headers.get("User-Agent")?.slice(0,150)||"",Date.now()).run().catch(()=>{}); }

const PLATFORMS = ["Twitter/X","LinkedIn","Instagram","Threads","Bluesky","Mastodon","TikTok","YouTube","Reddit","Discord"];
const CONTENT_TYPES = ["announcement","thread","insight","research","milestone","question","update","story"];

function page(): Response {
  const html=`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>BackRoad — Content Engine</title>
<meta name="description" content="Content generation and social distribution engine for BlackRoad OS.">
<link rel="canonical" href="https://backroad.blackroad.io/">
<meta property="og:title" content="BackRoad — Content Engine">
<meta property="og:description" content="Content generation and social distribution engine for BlackRoad OS.">
<meta property="og:url" content="https://backroad.blackroad.io/">
<meta property="og:type" content="website">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"BackRoad","url":"https://backroad.blackroad.io/","description":"Content generation and social distribution engine for BlackRoad OS.","applicationCategory":"WebApplication","publisher":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#030303;--card:#0a0a0a;--border:#111;--text:#f0f0f0;--sub:#444;--pink:#FF2255;--grad:linear-gradient(135deg,#FF2255,#FF6B2B,#FF00D4)}
html,body{min-height:100vh;background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif}
.grad-bar{height:2px;background:var(--grad)}
.wrap{max-width:900px;margin:0 auto;padding:32px 20px}
h1{font-size:2rem;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px}
.sub{font-size:.75rem;color:var(--sub);font-family:'JetBrains Mono',monospace;margin-bottom:28px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:20px}
.ct{font-size:.65rem;color:var(--sub);text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace;margin-bottom:14px}
label{display:block;font-size:.7rem;color:var(--sub);font-family:'JetBrains Mono',monospace;margin-bottom:5px;margin-top:10px;text-transform:uppercase}
input,textarea,select{width:100%;padding:9px 12px;background:#0d0d0d;border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:'Space Grotesk',sans-serif;font-size:.82rem;outline:none}
input:focus,textarea:focus,select:focus{border-color:var(--pink)}
textarea{min-height:80px;resize:vertical}
.btn{margin-top:14px;padding:10px 20px;background:var(--pink);color:#fff;border:none;border-radius:7px;cursor:pointer;font-weight:700;font-size:.85rem;width:100%}
.btn:hover{opacity:.85}
.platform-grid{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.plat{padding:5px 12px;background:#0d0d0d;border:1px solid var(--border);border-radius:20px;font-size:.72rem;cursor:pointer;transition:all .15s;color:var(--sub);user-select:none}
.plat.selected{border-color:var(--pink);color:var(--pink);background:rgba(255,29,108,.08)}
.output{background:#0d0d0d;border:1px solid var(--border);border-radius:6px;padding:12px;min-height:120px;font-size:.8rem;line-height:1.6;color:#ccc;margin-top:8px;white-space:pre-wrap}
.recent-card{grid-column:1/-1}
.type-grid{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.type{padding:4px 10px;background:#0d0d0d;border:1px solid var(--border);border-radius:4px;font-size:.68rem;cursor:pointer;color:var(--sub);transition:all .15s}
.type.selected{border-color:#FF6B2B;color:#FF6B2B}
@media(max-width:600px){.grid{grid-template-columns:1fr}}
</style></head><body>
<div class="grad-bar"></div>
<div class="wrap">
<h1>BackRoad</h1>
<div class="sub">backroad.blackroad.io · content engine · social layer</div>
<div class="grid">
  <div class="card">
    <div class="ct">Compose</div>
    <label>Topic / Idea</label>
    <input type="text" id="topic" placeholder="What are you sharing?">
    <label>Context (optional)</label>
    <textarea id="context" placeholder="Add details, data, links..."></textarea>
    <label>Content Type</label>
    <div class="type-grid" id="types">
      ${CONTENT_TYPES.map(t=>`<div class="type" onclick="toggleType(this,'${t}')">${t}</div>`).join("")}
    </div>
    <label>Platforms</label>
    <div class="platform-grid" id="platforms">
      ${PLATFORMS.map(p=>`<div class="plat" onclick="togglePlat(this,'${p}')">${p}</div>`).join("")}
    </div>
    <button class="btn" onclick="generate()">Generate Content</button>
  </div>
  <div class="card">
    <div class="ct">Generated</div>
    <div class="output" id="output">Your content will appear here. Select platforms and type, then hit Generate.</div>
  </div>
  <div class="card recent-card">
    <div class="ct">Content Ideas — From Your Signals & Roadlog</div>
    <div id="ideas">Loading ideas from your data...</div>
  </div>
</div>
</div>
<script src="https://cdn.blackroad.io/br.js"></script>
<script>
var selectedPlatforms=[];var selectedType='announcement';
function togglePlat(el,p){if(selectedPlatforms.includes(p)){selectedPlatforms=selectedPlatforms.filter(x=>x!==p);el.className='plat';}else{selectedPlatforms.push(p);el.className='plat selected';}}
function toggleType(el,t){document.querySelectorAll('.type').forEach(x=>x.className='type');el.className='type selected';selectedType=t;}
async function generate(){
  var topic=document.getElementById('topic').value.trim();
  if(!topic){alert('Add a topic first');return;}
  var out=document.getElementById('output');
  out.textContent='Generating...';
  var r=await fetch('/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({topic,context:document.getElementById('context').value,type:selectedType,platforms:selectedPlatforms})});
  var d=await r.json();
  out.textContent=d.content||'No content generated.';
}
async function loadIdeas(){
  var r=await fetch('/api/ideas');var d=await r.json();
  var el=document.getElementById('ideas');
  if(!d.ideas||!d.ideas.length){el.textContent='No signals yet — ideas appear as signals come in.';return;}
  el.innerHTML=d.ideas.map(function(i){return '<div style="padding:8px 0;border-bottom:1px solid #0d0d0d;font-size:.8rem"><strong>'+i.title+'</strong><div style="color:var(--sub);font-size:.7rem;margin-top:2px">'+i.source+'</div></div>';}).join('');
}
loadIdeas();
document.querySelectorAll('.type')[0]?.click();
</script>
</body></html>`;
  return new Response(html,{headers:{"Content-Type":"text/html;charset=UTF-8"}});
}

function generateContent(topic: string, context: string, type: string, platforms: string[]): string {
  const plats = platforms.length ? platforms : ["Twitter/X"];
  const lines: string[] = [];
  for(const p of plats) {
    lines.push(`── ${p} (${type}) ──`);
    if(p==="Twitter/X"||p==="Threads"||p==="Bluesky") {
      lines.push(`${topic}${context?"\n\n"+context.slice(0,200):""}${type==="thread"?"\n\n🧵 Thread below:":""}\n\n#BlackRoadOS #BuildInPublic`);
    } else if(p==="LinkedIn") {
      lines.push(`${topic}\n\n${context||"Building in public with BlackRoad OS."}\n\nWhat we're learning: every deploy is a lesson.\n\n#BlackRoad #EdgeAI #BuildInPublic`);
    } else if(p==="Reddit") {
      lines.push(`[${type.toUpperCase()}] ${topic}\n\n${context||"More details in comments."}`);
    } else {
      lines.push(`${topic}\n\n${context||""}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if(req.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":"*"}});
    const url=new URL(req.url);const path=url.pathname;
    track(env,req,path);
    if(path==="/health")return json({service:SVC,status:"ok",version:env.VERSION,ts:Date.now()});
    if(path==="/api/generate"&&req.method==="POST"){
      const b=await req.json() as {topic:string;context:string;type:string;platforms:string[]};
      const content=generateContent(b.topic||"",b.context||"",b.type||"announcement",b.platforms||[]);
      await env.STORE.put(`draft:${Date.now()}`,JSON.stringify({...b,content,ts:Date.now()}),{expirationTtl:86400*7});
      return json({ok:true,content,platforms:b.platforms,type:b.type});
    }
    if(path==="/api/ideas"){
      const {results}=await env.DB.prepare("SELECT title,source,relevance_score FROM signals_log ORDER BY relevance_score DESC LIMIT 10").all().catch(()=>({results:[]}));
      return json({ideas:results});
    }
    return page();
  }
};
