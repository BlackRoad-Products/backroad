const ROOT_HTML = `<!-- PROPRIETARY. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source. -->
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>BackRoad — BlackRoad OS</title>
<meta name="description" content="Sovereign social network with posts, DMs, groups, chat rooms, polls, and AI-powered content. No ads, no tracking, no algorithms. Your feed, your rules.">
<meta property="og:title" content="BackRoad — Sovereign Social Network — BlackRoad OS"><meta property="og:description" content="Posts, DMs, groups, chat rooms, polls, and AI content. No ads, no tracking. Your feed, your rules.">
<meta property="og:url" content="https://backroad.blackroad.io"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://backroad.blackroad.io/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"BackRoad","url":"https://backroad.blackroad.io","author":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400&family=Inter:wght@400&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#000;--card:#0a0a0a;--border:#1a1a1a;--text:#f5f5f5;--sub:#737373;--muted:#444;--sg:'Space Grotesk',sans-serif;--jb:'JetBrains Mono',monospace;--in:'Inter',sans-serif;--grad:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--accent:#00D4FF}html{scroll-behavior:smooth}body{background:var(--bg);color:var(--text);font-family:var(--sg);overflow-x:hidden}a{color:inherit;text-decoration:none}.bar{height:3px;background:var(--grad);position:fixed;top:0;left:0;right:0;z-index:1000}nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}.n-left{display:flex;align-items:center;gap:8px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:15px}.n-tag{font-family:var(--jb);font-size:10px;color:var(--muted);margin-left:8px}.n-right{margin-left:auto;display:flex;gap:12px;align-items:center}.n-right a{font-family:var(--in);font-size:12px;color:var(--sub)}.n-right a:hover{color:var(--text)}.cta{font-size:11px;font-weight:600;padding:6px 16px;border-radius:5px;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.hero{min-height:70vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 24px 60px;position:relative;overflow:hidden}.orb{position:absolute;border-radius:50%;filter:blur(100px);opacity:.1}h1{font-size:clamp(32px,7vw,64px);font-weight:700;letter-spacing:-.03em;line-height:1.05;max-width:700px;margin-bottom:12px;position:relative}.sub{font-family:var(--in);font-size:clamp(14px,2vw,17px);color:var(--sub);max-width:500px;line-height:1.6;margin-bottom:32px;position:relative}.badge{font-family:var(--jb);font-size:10px;color:var(--sub);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px;position:relative;display:flex;align-items:center;gap:8px}.badge::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.3}}.btns{display:flex;gap:10px;position:relative;flex-wrap:wrap;justify-content:center}.btn-p{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.btn-g{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:transparent;color:var(--text);border:1px solid var(--border);cursor:pointer;font-family:var(--sg)}.btn-g:hover{border-color:#444}.section{max-width:900px;margin:0 auto;padding:48px 24px}.status{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:14px 18px;display:flex;align-items:center;gap:10px;margin-bottom:24px}.status-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:p 2s infinite}.status-text{font-family:var(--jb);font-size:11px;color:var(--sub)}.dash{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:32px}.dash-card{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:18px}.dash-card h3{font-size:12px;color:var(--sub);font-family:var(--jb);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}.dash-card .val{font-size:28px;font-weight:700}.dash-card .meta{font-size:11px;color:var(--muted);margin-top:4px;font-family:var(--in)}.feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;margin:32px 0}.feat{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:20px;transition:border-color .2s}.feat:hover{border-color:#333}.feat h3{font-size:14px;margin-bottom:6px}.feat p{font-size:12px;color:var(--sub);font-family:var(--in);line-height:1.5}.feat code{font-family:var(--jb);font-size:10px;color:var(--muted);display:block;margin-top:8px}footer{border-top:1px solid var(--border);padding:32px 24px;text-align:center}.f-links{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:12px}.f-links a{font-family:var(--in);font-size:11px;color:var(--sub)}.f-links a:hover{color:var(--text)}.f-copy{font-family:var(--jb);font-size:9px;color:var(--muted)}@media(max-width:768px){nav{padding:0 16px}.dash{grid-template-columns:1fr 1fr}}</style></head><body>
<div class="bar"></div>
<nav><div class="n-left"><div class="n-dot"></div><span class="n-name">BackRoad</span><span class="n-tag">BLACKROAD OS</span></div><div class="n-right"><a href="#features">Features</a><a href="#dashboard">Dashboard</a><a href="https://blackroad.io">Highway</a><a href="https://app.blackroad.io" class="cta">Open OS</a></div></nav>
<section class="hero"><div class="orb" style="width:400px;height:400px;background:#00D4FF;top:-10%;left:-15%"></div><div class="orb" style="width:300px;height:300px;background:#8844FF;bottom:-5%;right:-10%"></div><div class="badge">LIVE ON BLACKROAD OS</div><h1>The scenic route. Your content, everywhere.</h1><p class="sub">Social Automation with AI agents, content calendars, A/B testing, audience personas, and branded links. Part of BlackRoad OS.</p><div class="btns"><a href="https://app.blackroad.io"><button class="btn-p">Open BlackRoad OS</button></a><a href="#dashboard"><button class="btn-g">View Dashboard</button></a></div></section>

<section class="section" id="dashboard"><div class="status"><div class="status-dot"></div><div class="status-text" id="st">Connecting...</div></div>
<div class="dash" id="dash-cards"></div>
</section>

<section class="section" id="features"><h2 style="font-size:20px;margin-bottom:24px">Platform Features</h2>
<div class="feature-grid">
<div class="feat"><h3>Content Calendar</h3><p>Schedule posts for specific dates and times. View weekly and monthly calendars. Never miss a posting window.</p><code>POST /api/calendar</code></div>
<div class="feat"><h3>Analytics Dashboard</h3><p>Engagement metrics over time, best posting times, audience growth tracking, and performance breakdowns.</p><code>GET /api/analytics</code></div>
<div class="feat"><h3>Hashtag Research</h3><p>AI-suggested hashtags based on your content. Trending tags and performance history across platforms.</p><code>POST /api/hashtags/suggest</code></div>
<div class="feat"><h3>Content Templates</h3><p>Pre-built post templates for threads, carousels, stories, announcements, and more. Platform-optimized.</p><code>GET /api/templates</code></div>
<div class="feat"><h3>A/B Testing</h3><p>Create post variants and track which performs better. Data-driven content optimization.</p><code>POST /api/ab-test</code></div>
<div class="feat"><h3>Audience Personas</h3><p>Define target audience segments. Tailor content per segment. Understand who engages with what.</p><code>GET /api/personas</code></div>
<div class="feat"><h3>Brand Voice</h3><p>Configure brand voice and tone that all agents follow. Consistent messaging across every platform.</p><code>GET /api/voice</code></div>
<div class="feat"><h3>Link Shortener</h3><p>Create branded short links with click tracking. Know exactly where your traffic comes from.</p><code>POST /api/shorten</code></div>
<div class="feat"><h3>Ghost Mode</h3><p>Preview how your content looks on every platform before publishing. No risk, full visibility.</p><code>POST /api/ghost</code></div>
<div class="feat"><h3>Agent Roster</h3><p>9 specialized AI agents handle your social presence. Each tuned for specific platforms and content types.</p><code>GET /api/agents</code></div>
<div class="feat"><h3>Publishing Engine</h3><p>Real platform connectors for Instagram, Threads, X, Dev.to, Medium, and Hashnode.</p><code>POST /api/publish/:id</code></div>
<div class="feat"><h3>Live Stream</h3><p>Real-time SSE feed of agent activity, brainstorming sessions, and content ideas.</p><code>GET /api/stream</code></div>
<div class="feat"><h3>Influencer Database</h3><p>Track influencers by platform, follower count, engagement rate, contact info, and collaboration history.</p><code>GET /api/influencers</code></div>
<div class="feat"><h3>Content Repurposing</h3><p>Take one piece of content and adapt it for 5+ platforms automatically. Blog to tweet to newsletter to LinkedIn.</p><code>POST /api/repurpose</code></div>
<div class="feat"><h3>Sentiment Monitor</h3><p>AI-powered sentiment analysis of comments and mentions across platforms. Track sentiment trends over time.</p><code>GET /api/sentiment</code></div>
<div class="feat"><h3>Competitor Watch</h3><p>Track competitor social accounts, compare metrics, and identify content gaps to exploit.</p><code>GET /api/competitors</code></div>
<div class="feat"><h3>Social Inbox</h3><p>Unified inbox for all social platform messages, comments, and mentions in one chronological feed.</p><code>GET /api/inbox</code></div>
<div class="feat"><h3>Content Scoring</h3><p>AI-powered content quality scoring before publishing. Engagement prediction, readability, and brand alignment.</p><code>POST /api/score</code></div>
<div class="feat"><h3>Viral Tracker</h3><p>Detect when posts are going viral with sudden engagement spikes. Alert system for trending content.</p><code>GET /api/viral</code></div>
<div class="feat"><h3>Campaign ROI</h3><p>Track campaign costs, conversions, and calculate ROI. Attribution modeling across platforms.</p><code>POST /api/roi</code></div>
<div class="feat"><h3>Story Generator</h3><p>AI-generated brand stories with narrative arcs, character integration with Roadie agents, and customizable themes.</p><code>POST /api/story</code></div>
<div class="feat"><h3>Meme Generator</h3><p>AI-powered meme creation with trending templates, caption generation, and brand-safe content filters.</p><code>POST /api/memes</code></div>
<div class="feat"><h3>Social Listening</h3><p>Monitor keywords and topics across platforms. Get alerts on brand mentions and trending conversations.</p><code>GET /api/listening</code></div>
<div class="feat"><h3>UGC Manager</h3><p>Collect and curate user-generated content. Rights management, feature requests, and content approval workflows.</p><code>GET /api/ugc</code></div>
<div class="feat"><h3>Engagement Automation</h3><p>Auto-like, auto-reply rules based on keywords and sentiment. Set it and let the agents handle it.</p><code>GET /api/auto-engage</code></div>
<div class="feat"><h3>Platform Insights</h3><p>Per-platform deep analytics including best formats, optimal posting frequency, and audience behavior patterns.</p><code>GET /api/insights</code></div>
<div class="feat"><h3>Collaboration Requests</h3><p>Manage inbound and outbound brand collaboration requests. Track status, terms, and deliverables.</p><code>GET /api/collab-requests</code></div>
<div class="feat"><h3>Social Proof</h3><p>Testimonials, case studies, and metrics badges for embedding on websites. Build trust at scale.</p><code>GET /api/social-proof</code></div>
</div></section>

<footer><div class="f-links"><a href="https://os.blackroad.io">OS</a><a href="https://roadtrip.blackroad.io">Agents</a><a href="https://roadie.blackroad.io">Tutor</a><a href="https://roadview.blackroad.io">Search</a><a href="https://backroad.blackroad.io">Social</a><a href="https://roadchain.blackroad.io">Chain</a><a href="https://github.com/BlackRoadOS">GitHub</a></div><div class="f-copy">2025-2026 BlackRoad OS, Inc. Remember the Road. Pave Tomorrow.</div></footer>
<script>
fetch('/api/stats').then(r=>r.json()).then(d=>{
  document.getElementById('st').textContent='BackRoad is live — '+d.posts+' posts, '+d.campaigns+' campaigns, '+d.agents+' agents';
  const dc=document.getElementById('dash-cards');
  const cards=[
    {t:'Posts',v:d.posts,m:'Total content created'},
    {t:'Campaigns',v:d.campaigns,m:'Active campaigns'},
    {t:'Engagement',v:d.total_engagement,m:'Total interactions'},
    {t:'Reach',v:d.total_reach,m:'People reached'},
  ];
  dc.innerHTML=cards.map(c=>'<div class="dash-card"><h3>'+c.t+'</h3><div class="val">'+c.v+'</div><div class="meta">'+c.m+'</div></div>').join('');
}).catch(()=>{document.getElementById('st').textContent='BackRoad is running'});
</script>
</body></html>`;

// BackRoad — Social Automation for BlackRoad OS
// The scenic route. Your content, everywhere, on autopilot.
// Copyright 2025-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY.

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type,Authorization', 'Content-Type': 'application/json' };
function json(d, s = 200) { return new Response(JSON.stringify(d), { status: s, headers: CORS }); }

// 27 canonical agents with social specializations
const SOCIAL_AGENTS = {
  thalia:    { name: 'Thalia',    role: 'Creative Sprint / Social Lead', division: 'creative', platforms: ['x','tiktok','instagram'], style: 'punchy, witty, viral-optimized' },
  calliope:  { name: 'Calliope',  role: 'Narrative / Long-Form', division: 'creative', platforms: ['linkedin','blog','medium'], style: 'eloquent, persuasive, brand-voice' },
  aria:      { name: 'Aria',      role: 'Conversational / Replies', division: 'creative', platforms: ['x','threads','comments'], style: 'natural, warm, quick' },
  sapphira:  { name: 'Sapphira',  role: 'Brand / Visual Direction', division: 'creative', platforms: ['instagram','pinterest'], style: 'premium, aesthetic, high-impact' },
  seraphina: { name: 'Seraphina', role: 'Launch Campaigns', division: 'creative', platforms: ['all'], style: 'elevated, keynote-energy, big moments' },
  sebastian: { name: 'Sebastian', role: 'Client-Facing Polish', division: 'operations', platforms: ['linkedin','email'], style: 'professional, refined, diplomatic' },
  cicero:    { name: 'Cicero',    role: 'Persuasion / Advocacy', division: 'governance', platforms: ['linkedin','x','blog'], style: 'rhetorical, confident, case-building' },
  roadie:    { name: 'Roadie',    role: 'Quick Posts / Momentum', division: 'core', platforms: ['x','threads'], style: 'fast, encouraging, action-oriented' },
  lyra:      { name: 'Lyra',      role: 'Copy Polish / Rhythm', division: 'creative', platforms: ['all'], style: 'feels-right, polished, rhythmic' },
};

const PLATFORMS = ['instagram','x','linkedin','tiktok','youtube','threads','facebook','pinterest','blog','newsletter'];

async function ensureTables(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS br_posts (
      id TEXT PRIMARY KEY, content TEXT NOT NULL, original_content TEXT,
      platforms TEXT DEFAULT '[]', schedule_at TEXT, status TEXT DEFAULT 'draft',
      campaign_id TEXT, visibility TEXT DEFAULT 'public',
      engagement_likes INT DEFAULT 0, engagement_shares INT DEFAULT 0,
      engagement_comments INT DEFAULT 0, engagement_reach INT DEFAULT 0,
      engagement_score REAL DEFAULT 0, sentiment_score REAL DEFAULT 0,
      agent_id TEXT, agent_name TEXT,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_echoes (
      id TEXT PRIMARY KEY, post_id TEXT NOT NULL, platform TEXT NOT NULL,
      content TEXT, status TEXT DEFAULT 'pending', agent_id TEXT,
      engagement_score REAL DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_campaigns (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT,
      status TEXT DEFAULT 'draft', goal TEXT, target_audience TEXT,
      platforms TEXT DEFAULT '[]', posts_count INT DEFAULT 0,
      total_reach INT DEFAULT 0, total_engagement INT DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_agents (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, platform TEXT NOT NULL,
      reputation_score REAL DEFAULT 50.0, posts_assisted INT DEFAULT 0,
      replies_sent INT DEFAULT 0, quality_score REAL DEFAULT 50.0,
      last_active TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_replies (
      id TEXT PRIMARY KEY, post_id TEXT, agent_id TEXT, agent_name TEXT,
      platform TEXT, content TEXT, sentiment TEXT DEFAULT 'neutral',
      approved INT DEFAULT 0, auto_posted INT DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_activity (
      id TEXT PRIMARY KEY, type TEXT NOT NULL, entity_id TEXT,
      description TEXT NOT NULL, agent_name TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
  ]);
}

// New tables for enhanced features
async function ensureNewTables(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS br_calendar (
      id TEXT PRIMARY KEY, post_id TEXT, title TEXT NOT NULL,
      scheduled_at TEXT NOT NULL, platform TEXT, status TEXT DEFAULT 'scheduled',
      recurrence TEXT, notes TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_hashtags (
      id TEXT PRIMARY KEY, tag TEXT NOT NULL, platform TEXT,
      usage_count INT DEFAULT 0, avg_engagement REAL DEFAULT 0,
      trending INT DEFAULT 0, category TEXT,
      last_used TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_templates (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, platform TEXT NOT NULL,
      type TEXT NOT NULL, structure TEXT NOT NULL, description TEXT,
      usage_count INT DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_ab_tests (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, status TEXT DEFAULT 'running',
      variant_a_id TEXT, variant_b_id TEXT,
      variant_a_content TEXT NOT NULL, variant_b_content TEXT NOT NULL,
      variant_a_engagement INT DEFAULT 0, variant_b_engagement INT DEFAULT 0,
      variant_a_reach INT DEFAULT 0, variant_b_reach INT DEFAULT 0,
      variant_a_clicks INT DEFAULT 0, variant_b_clicks INT DEFAULT 0,
      winner TEXT, platform TEXT,
      started_at TEXT DEFAULT (datetime('now')), ended_at TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_personas (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT,
      demographics TEXT, interests TEXT, platforms TEXT,
      tone TEXT, content_preferences TEXT, pain_points TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_voice (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, tone TEXT,
      vocabulary TEXT, rules TEXT, examples TEXT,
      do_list TEXT, dont_list TEXT, active INT DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_links (
      id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, target_url TEXT NOT NULL,
      title TEXT, clicks INT DEFAULT 0, referrers TEXT DEFAULT '{}',
      utm_source TEXT, utm_medium TEXT, utm_campaign TEXT,
      expires_at TEXT, created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_influencers (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, handle TEXT, platform TEXT NOT NULL,
      follower_count INT DEFAULT 0, engagement_rate REAL DEFAULT 0,
      category TEXT, contact_email TEXT, contact_notes TEXT,
      collaboration_history TEXT DEFAULT '[]', status TEXT DEFAULT 'prospect',
      last_contacted TEXT, score REAL DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_sentiment_log (
      id TEXT PRIMARY KEY, source TEXT NOT NULL, platform TEXT,
      content TEXT NOT NULL, sentiment_score REAL DEFAULT 0,
      sentiment_label TEXT DEFAULT 'neutral', entity TEXT,
      post_id TEXT, metadata TEXT DEFAULT '{}',
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_competitors (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, handle TEXT,
      platform TEXT NOT NULL, follower_count INT DEFAULT 0,
      avg_engagement REAL DEFAULT 0, content_frequency TEXT,
      strengths TEXT, weaknesses TEXT, notes TEXT,
      last_checked TEXT DEFAULT (datetime('now')),
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_inbox (
      id TEXT PRIMARY KEY, platform TEXT NOT NULL, type TEXT NOT NULL,
      from_handle TEXT, from_name TEXT, content TEXT NOT NULL,
      post_id TEXT, reply_id TEXT, read INT DEFAULT 0,
      starred INT DEFAULT 0, archived INT DEFAULT 0,
      sentiment_score REAL DEFAULT 0, sentiment_label TEXT DEFAULT 'neutral',
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_content_scores (
      id TEXT PRIMARY KEY, content TEXT NOT NULL, platform TEXT,
      engagement_prediction REAL DEFAULT 0, readability_score REAL DEFAULT 0,
      brand_alignment REAL DEFAULT 0, overall_score REAL DEFAULT 0,
      suggestions TEXT DEFAULT '[]', word_count INT DEFAULT 0,
      agent_id TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_viral_alerts (
      id TEXT PRIMARY KEY, post_id TEXT NOT NULL, alert_type TEXT DEFAULT 'spike',
      metric TEXT, previous_value REAL DEFAULT 0, current_value REAL DEFAULT 0,
      spike_pct REAL DEFAULT 0, platform TEXT,
      acknowledged INT DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_roi (
      id TEXT PRIMARY KEY, campaign_id TEXT, campaign_name TEXT,
      cost REAL DEFAULT 0, revenue REAL DEFAULT 0,
      conversions INT DEFAULT 0, clicks INT DEFAULT 0,
      impressions INT DEFAULT 0, roi_pct REAL DEFAULT 0,
      attribution_model TEXT DEFAULT 'last-click',
      platform TEXT, notes TEXT,
      period_start TEXT, period_end TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
  ]);

  // Phase 3 tables
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS br_stories (
      id TEXT PRIMARY KEY, title TEXT NOT NULL, theme TEXT DEFAULT 'brand',
      narrative TEXT NOT NULL, characters TEXT DEFAULT '[]',
      genre TEXT DEFAULT 'origin', mood TEXT DEFAULT 'inspiring',
      word_count INT DEFAULT 0, agent_id TEXT, agent_name TEXT,
      tags TEXT DEFAULT '[]', status TEXT DEFAULT 'draft',
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_memes (
      id TEXT PRIMARY KEY, template TEXT NOT NULL, top_text TEXT,
      bottom_text TEXT, caption TEXT, style TEXT DEFAULT 'classic',
      platform TEXT DEFAULT 'x', agent_id TEXT, agent_name TEXT,
      tags TEXT DEFAULT '[]', usage_count INT DEFAULT 0,
      trending_score REAL DEFAULT 0, brand_safe INT DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_listening (
      id TEXT PRIMARY KEY, keyword TEXT NOT NULL, platform TEXT DEFAULT 'all',
      match_type TEXT DEFAULT 'contains', alert_enabled INT DEFAULT 1,
      alert_threshold INT DEFAULT 5, mentions_count INT DEFAULT 0,
      sentiment_avg REAL DEFAULT 0, last_mention TEXT,
      status TEXT DEFAULT 'active',
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_listening_mentions (
      id TEXT PRIMARY KEY, keyword_id TEXT NOT NULL, platform TEXT,
      source_handle TEXT, source_name TEXT, content TEXT NOT NULL,
      url TEXT, sentiment_score REAL DEFAULT 0, sentiment_label TEXT DEFAULT 'neutral',
      flagged INT DEFAULT 0, responded INT DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_ugc (
      id TEXT PRIMARY KEY, content TEXT NOT NULL, content_type TEXT DEFAULT 'text',
      source_platform TEXT, source_handle TEXT, source_name TEXT, source_url TEXT,
      rights_status TEXT DEFAULT 'pending', rights_granted_at TEXT,
      rights_notes TEXT, featured INT DEFAULT 0, approved INT DEFAULT 0,
      tags TEXT DEFAULT '[]', campaign_id TEXT,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_auto_engage (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, type TEXT DEFAULT 'auto-reply',
      trigger_keywords TEXT DEFAULT '[]', trigger_sentiment TEXT,
      platform TEXT DEFAULT 'all', action TEXT DEFAULT 'reply',
      response_template TEXT, agent_id TEXT DEFAULT 'aria',
      max_per_hour INT DEFAULT 10, executions INT DEFAULT 0,
      active INT DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_auto_engage_log (
      id TEXT PRIMARY KEY, rule_id TEXT NOT NULL, trigger_content TEXT,
      response_content TEXT, platform TEXT, target_handle TEXT,
      agent_name TEXT, sentiment_score REAL DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_insights (
      id TEXT PRIMARY KEY, platform TEXT NOT NULL, metric_type TEXT NOT NULL,
      metric_value TEXT NOT NULL, period TEXT DEFAULT '7d',
      confidence REAL DEFAULT 0.5, recommendation TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_collab_requests (
      id TEXT PRIMARY KEY, brand_name TEXT NOT NULL, contact_name TEXT,
      contact_email TEXT, platform TEXT DEFAULT 'all',
      direction TEXT DEFAULT 'inbound', status TEXT DEFAULT 'pending',
      type TEXT DEFAULT 'content', description TEXT,
      terms TEXT, deliverables TEXT DEFAULT '[]',
      budget REAL DEFAULT 0, deadline TEXT,
      notes TEXT, agent_id TEXT,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS br_social_proof (
      id TEXT PRIMARY KEY, type TEXT DEFAULT 'testimonial',
      author_name TEXT, author_handle TEXT, author_title TEXT,
      content TEXT NOT NULL, rating INT DEFAULT 5,
      platform TEXT, source_url TEXT,
      metric_label TEXT, metric_value TEXT,
      badge_style TEXT DEFAULT 'default',
      featured INT DEFAULT 0, approved INT DEFAULT 1,
      embed_code TEXT, campaign_id TEXT,
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    )`),
  ]);
}

async function log(db, type, id, desc, agent) {
  try { await db.prepare('INSERT INTO br_activity (id,type,entity_id,description,agent_name) VALUES (?,?,?,?,?)').bind(crypto.randomUUID(),type,id,desc,agent||null).run(); } catch {}
}

// Pick the best agent for a platform + content type
function pickAgent(content, platform) {
  const msg = content.toLowerCase();
  if (msg.match(/launch|announce|reveal|big/)) return 'seraphina';
  if (msg.match(/argue|case|persuade|investor/)) return 'cicero';
  if (platform === 'linkedin' || msg.match(/professional|business/)) return 'sebastian';
  if (platform === 'instagram' || platform === 'pinterest' || msg.match(/visual|brand|aesthetic/)) return 'sapphira';
  if (msg.match(/story|narrative|manifesto|blog/)) return 'calliope';
  if (msg.match(/reply|comment|respond/)) return 'aria';
  if (msg.match(/polish|refine|rhythm/)) return 'lyra';
  if (msg.match(/quick|fast|now|ship/)) return 'roadie';
  return 'thalia'; // default social lead
}

// Sentiment analysis (simple keyword-based + AI fallback)
function quickSentiment(text) {
  const t = text.toLowerCase();
  if (t.match(/hate|terrible|awful|worst|scam|fake/)) return { score: -0.8, label: 'negative' };
  if (t.match(/bad|disappointed|frustrated|annoying/)) return { score: -0.4, label: 'negative' };
  if (t.match(/amazing|love|incredible|fantastic|best/)) return { score: 0.9, label: 'positive' };
  if (t.match(/good|nice|great|thanks|helpful/)) return { score: 0.5, label: 'positive' };
  return { score: 0, label: 'neutral' };
}

// ─── Cross-Product Integration (RoadChain + RoadCoin) ───
async function stampChain(action, entity, details) {
  try {
    await fetch('https://roadchain-worker.blackroad.workers.dev/api/event', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({app:'backroad', type: action, data: {entity, details}, ts: new Date().toISOString()})
    });
  } catch {}
}
async function earnCoin(road_id, action, amount) {
  try {
    await fetch('https://roadcoin-worker.blackroad.workers.dev/api/earn', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({road_id: road_id || 'backroad-system', action, amount})
    });
  } catch {}
}

// ═══════════════════════════════════════════════════════
// BUILT-IN CONTENT TEMPLATES
// ═══════════════════════════════════════════════════════
const BUILTIN_TEMPLATES = [
  { id: 'thread-x', name: 'X Thread', platform: 'x', type: 'thread', description: 'Multi-tweet thread with hook, body, and CTA', structure: JSON.stringify({ parts: ['hook (attention-grabbing opener, max 280 chars)', 'context (why this matters, max 280 chars)', 'point_1 (first key insight, max 280 chars)', 'point_2 (second insight or example, max 280 chars)', 'point_3 (third insight or data, max 280 chars)', 'cta (call to action + relevant link, max 280 chars)'], tips: 'Start with a bold claim or question. Number your tweets. End with a clear ask.' }) },
  { id: 'carousel-ig', name: 'Instagram Carousel', platform: 'instagram', type: 'carousel', description: '5-10 slide carousel with cover, content slides, and CTA', structure: JSON.stringify({ parts: ['cover_slide (bold headline, minimal text)', 'problem_slide (identify the pain point)', 'solution_1 (first tip or insight)', 'solution_2 (second tip)', 'solution_3 (third tip)', 'summary_slide (recap key points)', 'cta_slide (follow + save + share ask)'], tips: 'Use large readable text. One idea per slide. Brand colors on every slide.' }) },
  { id: 'story-ig', name: 'Instagram Story', platform: 'instagram', type: 'story', description: 'Story sequence with polls, questions, and swipe-up', structure: JSON.stringify({ parts: ['attention (bold visual or question)', 'context (quick setup, 2-3 lines)', 'engagement (poll or question sticker)', 'value (key insight or tip)', 'cta (swipe up or link sticker)'], tips: 'Keep text minimal. Use stickers for engagement. Vertical format only.' }) },
  { id: 'article-li', name: 'LinkedIn Article', platform: 'linkedin', type: 'article', description: 'Long-form LinkedIn post with personal story angle', structure: JSON.stringify({ parts: ['hook (personal story or bold statement, 2-3 lines)', 'context (industry problem or trend)', 'insight_1 (your take with evidence)', 'insight_2 (practical advice)', 'insight_3 (contrarian or surprising point)', 'conclusion (lessons learned)', 'cta (question to drive comments)'], tips: 'Write like you talk. Use line breaks. No hashtag spam. Ask a genuine question at the end.' }) },
  { id: 'reel-script', name: 'Reel/TikTok Script', platform: 'tiktok', type: 'reel', description: 'Short-form video script with hook and punchline', structure: JSON.stringify({ parts: ['hook_0_3s (grab attention in first 3 seconds)', 'setup_3_10s (establish the topic)', 'content_10_25s (deliver the value)', 'twist_or_punchline_25_28s (surprise element)', 'cta_28_30s (follow for more)'], tips: 'Front-load the hook. Fast pacing. Use trending audio. Caption everything.' }) },
  { id: 'newsletter', name: 'Newsletter', platform: 'newsletter', type: 'newsletter', description: 'Email newsletter with sections', structure: JSON.stringify({ parts: ['subject_line (compelling, under 50 chars)', 'preview_text (teaser, under 100 chars)', 'intro (personal note, 2-3 sentences)', 'main_story (the key content)', 'quick_links (3-5 curated links)', 'cta (one clear ask)', 'ps (bonus tip or personal note)'], tips: 'Subject line is everything. Keep it scannable. One CTA per email.' }) },
  { id: 'announcement', name: 'Product Announcement', platform: 'all', type: 'announcement', description: 'Cross-platform product launch post', structure: JSON.stringify({ parts: ['headline (what you built, one line)', 'problem (what problem it solves)', 'solution (how your product solves it)', 'features (3 bullet points)', 'social_proof (early results or testimonials)', 'availability (how to get it)', 'cta (try it now link)'], tips: 'Lead with the benefit, not the feature. Show, do not tell.' }) },
  { id: 'poll-post', name: 'Engagement Poll', platform: 'x', type: 'poll', description: 'Poll post designed to maximize engagement', structure: JSON.stringify({ parts: ['question (debatable topic, clear options)', 'option_1', 'option_2', 'option_3 (optional)', 'option_4 (optional)', 'context (why you are asking, reply thread)'], tips: 'Controversial but not offensive. 2-4 options. Quote tweet with your own answer.' }) },
];

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    if (path === "/" || path === "") return new Response(ROOT_HTML, { headers: { ...CORS, "Content-Type": "text/html;charset=UTF-8" } });
    await ensureTables(env.DB);
    await ensureNewTables(env.DB);

    // ── Health ──

    if (path === '/robots.txt') return new Response(``, {headers:{'Content-Type':'text/plain'}});
    if (path === '/sitemap.xml') return new Response('<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://blackroad.io/</loc></url></urlset>', {headers:{'Content-Type':'application/xml'}});
    if (path === '/health' || path === '/api/health') return json({ status: 'ok', service: 'backroad', agents: Object.keys(SOCIAL_AGENTS).length, platforms: PLATFORMS.length, features: ['calendar','analytics','hashtags','templates','ab-test','personas','voice','shorten','influencers','repurpose','sentiment','competitors','inbox','score','viral','roi','story','memes','listening','ugc','auto-engage','insights','collab-requests','social-proof'], ts: new Date().toISOString() });

    // ── Stats ──
    if (path === '/api/stats') {
      const [posts, campaigns, agents, engagement, replies] = await Promise.all([
        env.DB.prepare('SELECT COUNT(*) as c FROM br_posts').first(),
        env.DB.prepare('SELECT COUNT(*) as c FROM br_campaigns').first(),
        env.DB.prepare('SELECT COUNT(*) as c FROM br_agents').first(),
        env.DB.prepare('SELECT COALESCE(SUM(engagement_likes+engagement_shares+engagement_comments),0) as t, COALESCE(SUM(engagement_reach),0) as r FROM br_posts').first(),
        env.DB.prepare('SELECT COUNT(*) as c FROM br_replies').first(),
      ]);
      return json({ posts: posts.c, campaigns: campaigns.c, agents: agents.c, total_engagement: engagement.t, total_reach: engagement.r, replies: replies.c, platforms: PLATFORMS });
    }

    // ── Social Agents ──
    if (path === '/api/agents') {
      const dbAgents = (await env.DB.prepare('SELECT * FROM br_agents ORDER BY reputation_score DESC').all()).results;
      return json({ roster: SOCIAL_AGENTS, active: dbAgents, platforms: PLATFORMS });
    }

    // ── Create Campaign ──
    if (path === '/api/campaigns' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_campaigns (id,name,description,goal,target_audience,platforms) VALUES (?,?,?,?,?,?)').bind(id, body.name, body.description||'', body.goal||'', body.target_audience||'', JSON.stringify(body.platforms||PLATFORMS)).run();
      await log(env.DB, 'campaign_created', id, `Campaign: ${body.name}`, null);
      return json({ id, name: body.name, status: 'draft' }, 201);
    }

    // ── List Campaigns ──
    if (path === '/api/campaigns' && method === 'GET') {
      const r = await env.DB.prepare('SELECT * FROM br_campaigns ORDER BY created_at DESC LIMIT 50').all();
      return json({ campaigns: r.results });
    }

    // ── Create Post (with AI optimization + agent routing) ──
    if (path === '/api/posts' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const id = crypto.randomUUID();
      const platforms = body.platforms || ['x', 'linkedin'];
      const agentId = body.agent || pickAgent(body.content, platforms[0]);
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.thalia;
      const status = body.ghost ? 'ghost' : (body.schedule_at ? 'scheduled' : 'draft');

      // Get active brand voice for AI prompt enhancement
      let voicePrompt = '';
      try {
        const voice = await env.DB.prepare('SELECT * FROM br_voice WHERE active=1 LIMIT 1').first();
        if (voice) {
          voicePrompt = ` Follow this brand voice: tone=${voice.tone || 'professional'}. Rules: ${voice.rules || 'none'}. Do: ${voice.do_list || 'be helpful'}. Do not: ${voice.dont_list || 'be generic'}.`;
        }
      } catch {}

      // Get persona context if specified
      let personaPrompt = '';
      if (body.persona_id) {
        try {
          const persona = await env.DB.prepare('SELECT * FROM br_personas WHERE id=?').bind(body.persona_id).first();
          if (persona) {
            personaPrompt = ` Target audience: ${persona.name} - ${persona.description || ''}. Their interests: ${persona.interests || 'general'}. Tone for them: ${persona.tone || 'neutral'}.`;
          }
        } catch {}
      }

      // AI optimize content
      let optimized = body.content;
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are ${agent.name}, a social media specialist. Style: ${agent.style}. Optimize this post for ${platforms.join(', ')}. Add 2-3 relevant hashtags. Keep it concise. Return ONLY the optimized post.${voicePrompt}${personaPrompt}` },
            { role: 'user', content: body.content },
          ], max_tokens: 256,
        });
        if (aiR.response) optimized = aiR.response.trim();
      } catch {}

      const sentiment = quickSentiment(optimized);
      await env.DB.prepare('INSERT INTO br_posts (id,content,original_content,platforms,schedule_at,status,campaign_id,visibility,agent_id,agent_name,sentiment_score) VALUES (?,?,?,?,?,?,?,?,?,?,?)').bind(id, optimized, body.content, JSON.stringify(platforms), body.schedule_at||null, status, body.campaign_id||null, body.visibility||'public', agentId, agent.name, sentiment.score).run();
      await log(env.DB, 'post_created', id, `${agent.name} optimized post for ${platforms.join(',')}`, agent.name);
      stampChain('post_created', id, optimized.slice(0,100)).catch(()=>{});
      earnCoin('creator', 'post', 0.5).catch(()=>{});

      // Auto-add to calendar if scheduled
      if (body.schedule_at) {
        const calId = crypto.randomUUID();
        await env.DB.prepare('INSERT INTO br_calendar (id,post_id,title,scheduled_at,platform,status) VALUES (?,?,?,?,?,?)').bind(calId, id, optimized.slice(0, 80), body.schedule_at, platforms[0], 'scheduled').run();
      }

      return json({ id, content: optimized, original: body.content, platforms, status, agent: agent.name, agent_style: agent.style, sentiment }, 201);
    }

    // ── List Posts ──
    if (path === '/api/posts' && method === 'GET') {
      const status = url.searchParams.get('status');
      const campaign = url.searchParams.get('campaign');
      let q = 'SELECT * FROM br_posts'; const p = []; const w = [];
      if (status) { w.push('status=?'); p.push(status); }
      if (campaign) { w.push('campaign_id=?'); p.push(campaign); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      q += ' ORDER BY created_at DESC LIMIT 100';
      return json({ posts: (await env.DB.prepare(q).bind(...p).all()).results });
    }

    // ── Single Post ──
    const postMatch = path.match(/^\/api\/posts\/([^/]+)$/);
    if (postMatch && method === 'GET') {
      const post = await env.DB.prepare('SELECT * FROM br_posts WHERE id=?').bind(postMatch[1]).first();
      if (!post) return json({ error: 'Not found' }, 404);
      const echoes = (await env.DB.prepare('SELECT * FROM br_echoes WHERE post_id=?').bind(postMatch[1]).all()).results;
      const replies = (await env.DB.prepare('SELECT * FROM br_replies WHERE post_id=?').bind(postMatch[1]).all()).results;
      return json({ post, echoes, replies, engagement: { likes: post.engagement_likes, shares: post.engagement_shares, comments: post.engagement_comments, reach: post.engagement_reach, score: post.engagement_score } });
    }

    // ── Echo Post to Other Platforms ──
    const echoMatch = path.match(/^\/api\/posts\/([^/]+)\/echo$/);
    if (echoMatch && method === 'POST') {
      const post = await env.DB.prepare('SELECT * FROM br_posts WHERE id=?').bind(echoMatch[1]).first();
      if (!post) return json({ error: 'Not found' }, 404);
      const targets = JSON.parse(post.platforms);
      const echoes = [];
      for (const platform of targets) {
        const echoAgent = pickAgent(post.content, platform);
        const agent = SOCIAL_AGENTS[echoAgent] || SOCIAL_AGENTS.thalia;
        let echoContent = post.content;
        try {
          const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name}. Style: ${agent.style}. Rewrite this post specifically for ${platform}. Adapt tone, length, and format. Return ONLY the rewritten post.` },
              { role: 'user', content: post.content },
            ], max_tokens: 256,
          });
          if (aiR.response) echoContent = aiR.response.trim();
        } catch {}
        const eid = crypto.randomUUID();
        await env.DB.prepare('INSERT INTO br_echoes (id,post_id,platform,content,status,agent_id) VALUES (?,?,?,?,?,?)').bind(eid, echoMatch[1], platform, echoContent, 'ready', echoAgent).run();
        echoes.push({ id: eid, platform, content: echoContent, agent: agent.name, status: 'ready' });
      }
      await log(env.DB, 'echoes_created', echoMatch[1], `${echoes.length} echoes by ${echoes.map(e=>e.agent).join(',')}`, null);
      stampChain('echoes_created', echoMatch[1], targets.join(',')).catch(()=>{});
      earnCoin('creator', 'echo', 0.25).catch(()=>{});
      return json({ post_id: echoMatch[1], echoes }, 201);
    }

    // ── Generate Agent Reply (for incoming comments/mentions) ──
    if (path === '/api/reply' && method === 'POST') {
      const body = await request.json();
      if (!body.comment) return json({ error: 'comment required' }, 400);
      const sentiment = quickSentiment(body.comment);
      const agentId = body.agent || 'aria'; // Aria handles replies by default
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.aria;

      // Sentiment shield — block toxic
      if (sentiment.score < -0.6) {
        return json({ blocked: true, reason: 'toxic content detected', sentiment, agent: agent.name });
      }

      let reply = '';
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are ${agent.name} on BlackRoad OS. Style: ${agent.style}. Reply to this social media comment warmly and helpfully. 1-2 sentences. Stay on-brand. No emojis.` },
            { role: 'user', content: `Comment: "${body.comment}"${body.post_context ? `\nOriginal post: "${body.post_context}"` : ''}` },
          ], max_tokens: 120,
        });
        if (aiR.response) reply = aiR.response.trim();
      } catch { reply = 'Thanks for engaging with us on the road.'; }

      const rid = crypto.randomUUID();
      const approved = sentiment.score >= 0 ? 1 : 0; // auto-approve positive, queue negative
      await env.DB.prepare('INSERT INTO br_replies (id,post_id,agent_id,agent_name,platform,content,sentiment,approved) VALUES (?,?,?,?,?,?,?,?)').bind(rid, body.post_id||null, agentId, agent.name, body.platform||'x', reply, sentiment.label, approved).run();
      stampChain('reply_generated', rid, 'agent:'+agent.name).catch(()=>{});

      return json({ id: rid, reply, agent: agent.name, sentiment, approved: !!approved, queued: !approved });
    }

    // ── Ghost Mode Preview (simulate campaign without posting) ──
    if (path === '/api/ghost' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const platforms = body.platforms || PLATFORMS.slice(0, 5);
      const previews = [];
      for (const platform of platforms) {
        const agentId = pickAgent(body.content, platform);
        const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.thalia;
        let adapted = body.content;
        try {
          const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name}. Style: ${agent.style}. Adapt this post for ${platform}. Return ONLY the adapted post.` },
              { role: 'user', content: body.content },
            ], max_tokens: 200,
          });
          if (aiR.response) adapted = aiR.response.trim();
        } catch {}
        previews.push({ platform, agent: agent.name, style: agent.style, content: adapted, sentiment: quickSentiment(adapted) });
      }
      return json({ ghost: true, original: body.content, previews });
    }

    // ── Viral Pulse (check engagement trends) ──
    if (path === '/api/pulse') {
      const trending = (await env.DB.prepare('SELECT id, content, agent_name, engagement_likes+engagement_shares+engagement_comments as total, engagement_reach FROM br_posts ORDER BY engagement_reach DESC LIMIT 10').all()).results;
      const recent = (await env.DB.prepare('SELECT id, content, agent_name, status, created_at FROM br_posts ORDER BY created_at DESC LIMIT 10').all()).results;
      return json({ trending, recent, tip: trending.length > 0 ? `Your top post reached ${trending[0]?.engagement_reach || 0} people. Consider echoing it to more platforms.` : 'No posts yet. Create your first post with /api/posts.' });
    }

    // ── Activity Feed ──
    if (path === '/api/feed') {
      const limit = parseInt(url.searchParams.get('limit') || '50');
      return json({ feed: (await env.DB.prepare('SELECT * FROM br_activity ORDER BY created_at DESC LIMIT ?').bind(limit).all()).results });
    }

    // ── Pending Replies (approval queue) ──
    if (path === '/api/replies/pending') {
      return json({ pending: (await env.DB.prepare('SELECT * FROM br_replies WHERE approved=0 ORDER BY created_at DESC LIMIT 50').all()).results });
    }

    // ── Approve Reply ──
    const approveMatch = path.match(/^\/api\/replies\/([^/]+)\/approve$/);
    if (approveMatch && method === 'POST') {
      await env.DB.prepare('UPDATE br_replies SET approved=1 WHERE id=?').bind(approveMatch[1]).run();
      return json({ ok: true, approved: approveMatch[1] });
    }

    // ── Platforms ──
    if (path === '/api/platforms') return json({ platforms: PLATFORMS });

    // ═══════════════════════════════════════════════════════
    // PUBLISHING ENGINE — Real platform connectors
    // ═══════════════════════════════════════════════════════

    // ── Store Credentials ──
    if (path.startsWith('/api/credentials/') && method === 'POST') {
      const platform = path.split('/').pop();
      if (!PLATFORMS.includes(platform) && !['devto','medium','hashnode'].includes(platform)) {
        return json({ error: 'Unknown platform' }, 400);
      }
      const body = await request.json();
      await env.CREDS.put(`cred:${platform}`, JSON.stringify(body));
      await log(env.DB, 'credentials_stored', platform, `Credentials stored for ${platform}`, null);
      return json({ ok: true, platform, stored_at: new Date().toISOString() });
    }

    // ── Credential Status ──
    if (path === '/api/credentials/status') {
      const allPlatforms = [...PLATFORMS, 'devto', 'medium', 'hashnode'];
      const status = {};
      for (const p of allPlatforms) {
        status[p] = !!(await env.CREDS.get(`cred:${p}`));
      }
      return json({ credentials: status });
    }

    // ── Publish Post to Platforms ──
    const publishMatch = path.match(/^\/api\/publish\/([^/]+)$/);
    if (publishMatch && method === 'POST') {
      const postId = publishMatch[1];
      const post = await env.DB.prepare('SELECT * FROM br_posts WHERE id=?').bind(postId).first();
      if (!post) return json({ error: 'Post not found' }, 404);

      const results = await publishPost(post, env);
      const anySuccess = results.some(r => r.success);

      await env.DB.prepare('UPDATE br_posts SET status=?, updated_at=datetime(\'now\') WHERE id=?')
        .bind(anySuccess ? 'published' : 'failed', postId).run();

      return json({ post_id: postId, results, published: anySuccess, published_at: new Date().toISOString() });
    }

    // ── Quick Publish (create + publish in one call) ──
    if (path === '/api/quick-publish' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const platforms = body.platforms || ['instagram', 'threads'];
      const id = crypto.randomUUID();
      const agentId = body.agent || pickAgent(body.content, platforms[0]);
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.thalia;

      await env.DB.prepare('INSERT INTO br_posts (id,content,original_content,platforms,status,agent_id,agent_name) VALUES (?,?,?,?,?,?,?)')
        .bind(id, body.content, body.content, JSON.stringify(platforms), 'publishing', agentId, agent.name).run();

      const post = { id, content: body.content, platforms: JSON.stringify(platforms) };
      const results = await publishPost(post, env);
      const anySuccess = results.some(r => r.success);

      await env.DB.prepare('UPDATE br_posts SET status=?, updated_at=datetime(\'now\') WHERE id=?')
        .bind(anySuccess ? 'published' : 'failed', id).run();

      await log(env.DB, 'quick_published', id, `${agent.name} published to ${results.filter(r=>r.success).map(r=>r.platform).join(',')}`, agent.name);
      return json({ post_id: id, agent: agent.name, results, published: anySuccess }, 201);
    }

    // ── Publish Blog Post to Dev.to/Medium/Hashnode ──
    if (path === '/api/publish/blog' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.content) return json({ error: 'title and content required' }, 400);
      const targets = body.platforms || ['devto', 'medium', 'hashnode'];
      const results = [];

      for (const platform of targets) {
        const credRaw = await env.CREDS.get(`cred:${platform}`);
        if (!credRaw) { results.push({ platform, success: false, error: 'not configured' }); continue; }
        const cred = JSON.parse(credRaw);
        try {
          const r = await publishBlog(platform, body.title, body.content, body.tags || [], cred);
          results.push({ platform, ...r });
        } catch (e) {
          results.push({ platform, success: false, error: e.message });
        }
      }

      await log(env.DB, 'blog_published', null, `Blog "${body.title}" to ${results.filter(r=>r.success).map(r=>r.platform).join(',')}`, 'calliope');
      return json({ title: body.title, results });
    }

    // ─── GET /api/stream — SSE stream of new posts and agent activity ───
    if (path === '/api/stream' && request.method === 'GET') {
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const enc = new TextEncoder();

      (async () => {
        try {
          // Send initial snapshot
          const recent = await env.DB.prepare('SELECT * FROM br_activity ORDER BY created_at DESC LIMIT 20').all();
          for (const evt of (recent.results || []).reverse()) {
            await writer.write(enc.encode(`data: ${JSON.stringify({ type: 'activity', ...evt })}\n\n`));
          }

          const recentPosts = await env.DB.prepare("SELECT id, content, agent_name, status, created_at FROM br_posts ORDER BY created_at DESC LIMIT 10").all();
          for (const post of (recentPosts.results || []).reverse()) {
            await writer.write(enc.encode(`data: ${JSON.stringify({ type: 'post', ...post })}\n\n`));
          }

          // Stream live agent thoughts using AI
          const streamAgents = ['thalia', 'calliope', 'roadie', 'seraphina', 'aria'];
          for (const agentId of streamAgents) {
            const agent = SOCIAL_AGENTS[agentId];
            if (!agent) continue;
            try {
              const aiResp = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
                messages: [
                  { role: 'system', content: `You are ${agent.name}, a ${agent.role} agent on BackRoad (BlackRoad social platform). Style: ${agent.style}. Give a brief 1-2 sentence social media thought or content idea.` },
                  { role: 'user', content: 'Share a quick thought for the live feed.' }
                ],
                max_tokens: 100, temperature: 0.8,
              });
              const content = (aiResp?.response || '').trim();
              if (content) {
                await writer.write(enc.encode(`data: ${JSON.stringify({ type: 'agent_thought', agent: agentId, name: agent.name, role: agent.role, content, ts: new Date().toISOString() })}\n\n`));
              }
            } catch {}
          }

          await writer.write(enc.encode(`data: ${JSON.stringify({ type: 'done', ts: new Date().toISOString() })}\n\n`));
        } catch (e) {
          await writer.write(enc.encode(`data: ${JSON.stringify({ type: 'error', error: e.message })}\n\n`));
        } finally {
          await writer.close();
        }
      })();

      return new Response(readable, {
        headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive', ...CORS },
      });
    }

    // ─── POST /api/stream/start — Start a live streaming session ───
    if (path === '/api/stream/start' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const topic = (body.topic || 'Social content brainstorm').slice(0, 200);
      const agentCount = Math.min(Math.max(body.agent_count || 3, 1), 9);

      // Pick agents for the session
      const agentKeys = Object.keys(SOCIAL_AGENTS);
      const shuffled = agentKeys.sort(() => Math.random() - 0.5).slice(0, agentCount);
      const sessionId = crypto.randomUUID().slice(0, 8);

      // Generate AI content for each agent in the session
      const messages = [];
      for (const agentId of shuffled) {
        const agent = SOCIAL_AGENTS[agentId];
        try {
          const aiResp = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name}, a ${agent.role} agent. Style: ${agent.style}. You are in a live brainstorming session about: "${topic}".` },
              { role: 'user', content: `Give your take on this topic in 2-3 sentences. Be specific and actionable.` }
            ],
            max_tokens: 150, temperature: 0.8,
          });
          const content = (aiResp?.response || '').trim() || `[${agent.name} is thinking...]`;
          messages.push({ agent: agentId, name: agent.name, role: agent.role, content });
        } catch {
          messages.push({ agent: agentId, name: agent.name, role: agent.role, content: `[${agent.name} is warming up...]` });
        }
      }

      // Log as activity
      await log(env.DB, 'stream_session', sessionId, `Live stream: "${topic}" with ${shuffled.length} agents`, shuffled[0]);
      stampChain('stream_start', sessionId, topic);
      earnCoin('system', 'stream', 0.5);

      return json({ session_id: sessionId, topic, agents: shuffled, messages, started_at: new Date().toISOString() }, 201);
    }

    // ─── GET /api/stream/viewers — Current viewer count ───
    if (path === '/api/stream/viewers' && request.method === 'GET') {
      // Derive viewer estimate from recent activity
      const recentActivity = await env.DB.prepare("SELECT COUNT(*) as c FROM br_activity WHERE created_at >= datetime('now', '-5 minutes')").first();
      const recentPosts = await env.DB.prepare("SELECT COUNT(*) as c FROM br_posts WHERE created_at >= datetime('now', '-1 hour')").first();

      const baseViewers = 1; // At least the current viewer
      const activityBoost = Math.min((recentActivity?.c || 0) * 2, 50);
      const postBoost = Math.min((recentPosts?.c || 0) * 5, 100);
      const viewers = baseViewers + activityBoost + postBoost;

      return json({
        viewers,
        active_agents: Object.keys(SOCIAL_AGENTS).length,
        recent_activity: recentActivity?.c || 0,
        recent_posts: recentPosts?.c || 0,
        stream_status: viewers > 10 ? 'hot' : viewers > 3 ? 'active' : 'quiet',
        ts: new Date().toISOString(),
      });
    }

    // ═══════════════════════════════════════════════════════
    // 1. CONTENT CALENDAR
    // ═══════════════════════════════════════════════════════

    // ── Schedule a calendar entry ──
    if (path === '/api/calendar' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.scheduled_at) return json({ error: 'title and scheduled_at required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_calendar (id,post_id,title,scheduled_at,platform,status,recurrence,notes) VALUES (?,?,?,?,?,?,?,?)')
        .bind(id, body.post_id||null, body.title, body.scheduled_at, body.platform||'all', 'scheduled', body.recurrence||null, body.notes||null).run();
      await log(env.DB, 'calendar_scheduled', id, `Scheduled: ${body.title} for ${body.scheduled_at}`, null);
      return json({ id, title: body.title, scheduled_at: body.scheduled_at, status: 'scheduled' }, 201);
    }

    // ── View calendar (weekly / monthly) ──
    if (path === '/api/calendar' && method === 'GET') {
      const view = url.searchParams.get('view') || 'week'; // week or month
      const from = url.searchParams.get('from') || new Date().toISOString().split('T')[0];
      let days = view === 'month' ? 30 : 7;
      const entries = (await env.DB.prepare(
        `SELECT * FROM br_calendar WHERE scheduled_at >= ? AND scheduled_at <= datetime(?, '+${days} days') ORDER BY scheduled_at ASC`
      ).bind(from, from).all()).results;

      // Group by date
      const grouped = {};
      for (const entry of entries) {
        const date = entry.scheduled_at.split('T')[0];
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(entry);
      }

      return json({ view, from, days, entries, by_date: grouped, total: entries.length });
    }

    // ── Update calendar entry ──
    const calUpdateMatch = path.match(/^\/api\/calendar\/([^/]+)$/);
    if (calUpdateMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      if (body.title) { sets.push('title=?'); vals.push(body.title); }
      if (body.scheduled_at) { sets.push('scheduled_at=?'); vals.push(body.scheduled_at); }
      if (body.status) { sets.push('status=?'); vals.push(body.status); }
      if (body.notes) { sets.push('notes=?'); vals.push(body.notes); }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      vals.push(calUpdateMatch[1]);
      await env.DB.prepare(`UPDATE br_calendar SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: calUpdateMatch[1] });
    }

    // ── Delete calendar entry ──
    if (calUpdateMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_calendar WHERE id=?').bind(calUpdateMatch[1]).run();
      return json({ ok: true, deleted: calUpdateMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 2. ANALYTICS DASHBOARD
    // ═══════════════════════════════════════════════════════

    if (path === '/api/analytics' && method === 'GET') {
      const period = url.searchParams.get('period') || '7d'; // 7d, 30d, 90d
      const daysMap = { '7d': 7, '30d': 30, '90d': 90 };
      const days = daysMap[period] || 7;

      const [overview, byPlatform, byAgent, byDay, topPosts, replyStats] = await Promise.all([
        env.DB.prepare(`SELECT COUNT(*) as total_posts, COALESCE(SUM(engagement_likes),0) as likes, COALESCE(SUM(engagement_shares),0) as shares, COALESCE(SUM(engagement_comments),0) as comments, COALESCE(SUM(engagement_reach),0) as reach, COALESCE(AVG(sentiment_score),0) as avg_sentiment FROM br_posts WHERE created_at >= datetime('now', '-${days} days')`).first(),
        env.DB.prepare(`SELECT platforms, COUNT(*) as posts, COALESCE(SUM(engagement_reach),0) as reach, COALESCE(SUM(engagement_likes+engagement_shares+engagement_comments),0) as engagement FROM br_posts WHERE created_at >= datetime('now', '-${days} days') GROUP BY platforms`).all(),
        env.DB.prepare(`SELECT agent_name, COUNT(*) as posts, COALESCE(AVG(engagement_score),0) as avg_score, COALESCE(SUM(engagement_reach),0) as total_reach FROM br_posts WHERE created_at >= datetime('now', '-${days} days') AND agent_name IS NOT NULL GROUP BY agent_name ORDER BY total_reach DESC`).all(),
        env.DB.prepare(`SELECT date(created_at) as day, COUNT(*) as posts, COALESCE(SUM(engagement_reach),0) as reach FROM br_posts WHERE created_at >= datetime('now', '-${days} days') GROUP BY date(created_at) ORDER BY day ASC`).all(),
        env.DB.prepare(`SELECT id, content, agent_name, engagement_likes, engagement_shares, engagement_comments, engagement_reach, created_at FROM br_posts WHERE created_at >= datetime('now', '-${days} days') ORDER BY engagement_reach DESC LIMIT 5`).all(),
        env.DB.prepare(`SELECT COUNT(*) as total, SUM(CASE WHEN approved=1 THEN 1 ELSE 0 END) as approved, SUM(CASE WHEN sentiment='positive' THEN 1 ELSE 0 END) as positive, SUM(CASE WHEN sentiment='negative' THEN 1 ELSE 0 END) as negative FROM br_replies WHERE created_at >= datetime('now', '-${days} days')`).first(),
      ]);

      // Best posting times (hour analysis)
      const byHour = (await env.DB.prepare(`SELECT CAST(strftime('%H', created_at) AS INTEGER) as hour, COUNT(*) as posts, COALESCE(AVG(engagement_reach),0) as avg_reach FROM br_posts GROUP BY hour ORDER BY avg_reach DESC`).all()).results;
      const bestHours = byHour.slice(0, 3).map(h => ({ hour: h.hour, avg_reach: Math.round(h.avg_reach), posts: h.posts }));

      // Growth (compare current period vs previous)
      const prevPosts = await env.DB.prepare(`SELECT COUNT(*) as c, COALESCE(SUM(engagement_reach),0) as r FROM br_posts WHERE created_at >= datetime('now', '-${days*2} days') AND created_at < datetime('now', '-${days} days')`).first();
      const growth = {
        posts: overview.total_posts - (prevPosts?.c || 0),
        posts_pct: prevPosts?.c ? Math.round(((overview.total_posts - prevPosts.c) / prevPosts.c) * 100) : 100,
        reach: overview.reach - (prevPosts?.r || 0),
        reach_pct: prevPosts?.r ? Math.round(((overview.reach - prevPosts.r) / prevPosts.r) * 100) : 100,
      };

      return json({
        period, days,
        overview: { ...overview, total_engagement: overview.likes + overview.shares + overview.comments },
        growth,
        best_posting_times: bestHours,
        by_platform: byPlatform.results,
        by_agent: byAgent.results,
        by_day: byDay.results,
        top_posts: topPosts.results,
        reply_stats: replyStats,
      });
    }

    // ═══════════════════════════════════════════════════════
    // 3. HASHTAG RESEARCH
    // ═══════════════════════════════════════════════════════

    // ── AI-suggested hashtags ──
    if (path === '/api/hashtags/suggest' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const platform = body.platform || 'x';
      const count = Math.min(body.count || 10, 30);

      let hashtags = [];
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a social media hashtag expert. Given the content and target platform (${platform}), suggest ${count} highly relevant hashtags. Mix popular broad hashtags with niche specific ones. Return ONLY a JSON array of strings like ["#tag1","#tag2"]. No explanation.` },
            { role: 'user', content: body.content },
          ], max_tokens: 256,
        });
        if (aiR.response) {
          const match = aiR.response.match(/\[[\s\S]*\]/);
          if (match) hashtags = JSON.parse(match[0]);
        }
      } catch {}

      // Fallback if AI fails
      if (hashtags.length === 0) {
        const words = body.content.toLowerCase().split(/\s+/).filter(w => w.length > 4).slice(0, 5);
        hashtags = words.map(w => '#' + w.replace(/[^a-z0-9]/g, ''));
        hashtags.push('#BlackRoadOS', '#ContentCreation', '#SocialMedia');
      }

      // Track hashtag usage
      for (const tag of hashtags.slice(0, 10)) {
        const clean = tag.replace('#', '').toLowerCase();
        try {
          const existing = await env.DB.prepare('SELECT id, usage_count FROM br_hashtags WHERE tag=? AND platform=?').bind(clean, platform).first();
          if (existing) {
            await env.DB.prepare('UPDATE br_hashtags SET usage_count=usage_count+1, last_used=datetime(\'now\') WHERE id=?').bind(existing.id).run();
          } else {
            await env.DB.prepare('INSERT INTO br_hashtags (id,tag,platform,usage_count,category) VALUES (?,?,?,1,?)').bind(crypto.randomUUID(), clean, platform, body.category||'general').run();
          }
        } catch {}
      }

      return json({ platform, content_preview: body.content.slice(0, 100), hashtags, count: hashtags.length });
    }

    // ── Trending / top hashtags ──
    if (path === '/api/hashtags' && method === 'GET') {
      const platform = url.searchParams.get('platform');
      let q = 'SELECT * FROM br_hashtags';
      const params = [];
      if (platform) { q += ' WHERE platform=?'; params.push(platform); }
      q += ' ORDER BY usage_count DESC LIMIT 50';
      const tags = params.length ? (await env.DB.prepare(q).bind(...params).all()).results : (await env.DB.prepare(q).all()).results;
      return json({ hashtags: tags, total: tags.length });
    }

    // ═══════════════════════════════════════════════════════
    // 4. CONTENT TEMPLATES
    // ═══════════════════════════════════════════════════════

    // ── List all templates (built-in + custom) ──
    if (path === '/api/templates' && method === 'GET') {
      const platform = url.searchParams.get('platform');
      const type = url.searchParams.get('type');
      let builtIn = [...BUILTIN_TEMPLATES];
      if (platform) builtIn = builtIn.filter(t => t.platform === platform || t.platform === 'all');
      if (type) builtIn = builtIn.filter(t => t.type === type);

      let q = 'SELECT * FROM br_templates';
      const params = []; const w = [];
      if (platform) { w.push('platform=?'); params.push(platform); }
      if (type) { w.push('type=?'); params.push(type); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      q += ' ORDER BY usage_count DESC';
      const custom = params.length ? (await env.DB.prepare(q).bind(...params).all()).results : (await env.DB.prepare(q).all()).results;

      return json({ builtin: builtIn, custom, total: builtIn.length + custom.length });
    }

    // ── Create custom template ──
    if (path === '/api/templates' && method === 'POST') {
      const body = await request.json();
      if (!body.name || !body.platform || !body.type || !body.structure) return json({ error: 'name, platform, type, and structure required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_templates (id,name,platform,type,structure,description) VALUES (?,?,?,?,?,?)')
        .bind(id, body.name, body.platform, body.type, typeof body.structure === 'string' ? body.structure : JSON.stringify(body.structure), body.description||'').run();
      await log(env.DB, 'template_created', id, `Template: ${body.name} (${body.platform}/${body.type})`, null);
      return json({ id, name: body.name, platform: body.platform, type: body.type }, 201);
    }

    // ── Use a template (AI fills it in) ──
    if (path === '/api/templates/use' && method === 'POST') {
      const body = await request.json();
      if (!body.template_id || !body.topic) return json({ error: 'template_id and topic required' }, 400);

      // Find template (built-in or custom)
      let template = BUILTIN_TEMPLATES.find(t => t.id === body.template_id);
      if (!template) {
        const dbT = await env.DB.prepare('SELECT * FROM br_templates WHERE id=?').bind(body.template_id).first();
        if (dbT) template = dbT;
      }
      if (!template) return json({ error: 'Template not found' }, 404);

      const structure = typeof template.structure === 'string' ? JSON.parse(template.structure) : template.structure;

      let filled = {};
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a content creator filling out a ${template.type} template for ${template.platform}. The template has these parts: ${structure.parts.join(', ')}. Tips: ${structure.tips || 'none'}. Fill in each part based on the topic. Return ONLY a JSON object with each part as a key and the content as the value. No explanation.` },
            { role: 'user', content: `Topic: ${body.topic}${body.context ? '\nContext: ' + body.context : ''}` },
          ], max_tokens: 512,
        });
        if (aiR.response) {
          const match = aiR.response.match(/\{[\s\S]*\}/);
          if (match) filled = JSON.parse(match[0]);
        }
      } catch {}

      // Track usage
      try {
        await env.DB.prepare('UPDATE br_templates SET usage_count=usage_count+1 WHERE id=?').bind(body.template_id).run();
      } catch {}

      return json({ template: { id: template.id, name: template.name, platform: template.platform, type: template.type }, topic: body.topic, filled, structure });
    }

    // ═══════════════════════════════════════════════════════
    // 5. A/B TESTING
    // ═══════════════════════════════════════════════════════

    // ── Create A/B test ──
    if (path === '/api/ab-test' && method === 'POST') {
      const body = await request.json();
      if (!body.name || !body.variant_a || !body.variant_b) return json({ error: 'name, variant_a, variant_b required' }, 400);
      const id = crypto.randomUUID();

      // Optionally create posts for each variant
      let varAId = null, varBId = null;
      if (body.create_posts) {
        varAId = crypto.randomUUID();
        varBId = crypto.randomUUID();
        const platform = body.platform || 'x';
        await env.DB.prepare('INSERT INTO br_posts (id,content,original_content,platforms,status,agent_id,agent_name) VALUES (?,?,?,?,?,?,?)')
          .bind(varAId, body.variant_a, body.variant_a, JSON.stringify([platform]), 'ab-test', 'thalia', 'Thalia').run();
        await env.DB.prepare('INSERT INTO br_posts (id,content,original_content,platforms,status,agent_id,agent_name) VALUES (?,?,?,?,?,?,?)')
          .bind(varBId, body.variant_b, body.variant_b, JSON.stringify([platform]), 'ab-test', 'thalia', 'Thalia').run();
      }

      await env.DB.prepare('INSERT INTO br_ab_tests (id,name,variant_a_id,variant_b_id,variant_a_content,variant_b_content,platform) VALUES (?,?,?,?,?,?,?)')
        .bind(id, body.name, varAId, varBId, body.variant_a, body.variant_b, body.platform||'x').run();
      await log(env.DB, 'ab_test_created', id, `A/B Test: ${body.name}`, null);
      return json({ id, name: body.name, status: 'running', variant_a_id: varAId, variant_b_id: varBId }, 201);
    }

    // ── List A/B tests ──
    if (path === '/api/ab-test' && method === 'GET') {
      const tests = (await env.DB.prepare('SELECT * FROM br_ab_tests ORDER BY started_at DESC LIMIT 50').all()).results;
      return json({ tests });
    }

    // ── Get single A/B test with analysis ──
    const abMatch = path.match(/^\/api\/ab-test\/([^/]+)$/);
    if (abMatch && method === 'GET') {
      const test = await env.DB.prepare('SELECT * FROM br_ab_tests WHERE id=?').bind(abMatch[1]).first();
      if (!test) return json({ error: 'Not found' }, 404);

      const totalA = test.variant_a_engagement + test.variant_a_reach + test.variant_a_clicks;
      const totalB = test.variant_b_engagement + test.variant_b_reach + test.variant_b_clicks;
      const analysis = {
        leading: totalA > totalB ? 'A' : totalB > totalA ? 'B' : 'tie',
        confidence: Math.abs(totalA - totalB) > 10 ? 'high' : Math.abs(totalA - totalB) > 3 ? 'medium' : 'low',
        recommendation: totalA > totalB ? `Variant A is outperforming by ${totalA - totalB} points` : totalB > totalA ? `Variant B is outperforming by ${totalB - totalA} points` : 'Results are too close to call. Need more data.',
      };

      return json({ test, analysis });
    }

    // ── Update A/B test metrics ──
    const abUpdateMatch = path.match(/^\/api\/ab-test\/([^/]+)\/record$/);
    if (abUpdateMatch && method === 'POST') {
      const body = await request.json();
      if (!body.variant || !['A', 'B'].includes(body.variant)) return json({ error: 'variant (A or B) required' }, 400);
      const col = body.variant === 'A' ? 'variant_a' : 'variant_b';
      const updates = [];
      if (body.engagement) updates.push(`${col}_engagement=${col}_engagement+${parseInt(body.engagement)||0}`);
      if (body.reach) updates.push(`${col}_reach=${col}_reach+${parseInt(body.reach)||0}`);
      if (body.clicks) updates.push(`${col}_clicks=${col}_clicks+${parseInt(body.clicks)||0}`);
      if (updates.length === 0) return json({ error: 'provide engagement, reach, or clicks' }, 400);
      await env.DB.prepare(`UPDATE br_ab_tests SET ${updates.join(',')} WHERE id=?`).bind(abUpdateMatch[1]).run();
      return json({ ok: true, test_id: abUpdateMatch[1], variant: body.variant });
    }

    // ── End A/B test and declare winner ──
    const abEndMatch = path.match(/^\/api\/ab-test\/([^/]+)\/end$/);
    if (abEndMatch && method === 'POST') {
      const test = await env.DB.prepare('SELECT * FROM br_ab_tests WHERE id=?').bind(abEndMatch[1]).first();
      if (!test) return json({ error: 'Not found' }, 404);
      const totalA = test.variant_a_engagement + test.variant_a_reach + test.variant_a_clicks;
      const totalB = test.variant_b_engagement + test.variant_b_reach + test.variant_b_clicks;
      const winner = totalA >= totalB ? 'A' : 'B';
      await env.DB.prepare("UPDATE br_ab_tests SET status='completed', winner=?, ended_at=datetime('now') WHERE id=?").bind(winner, abEndMatch[1]).run();
      await log(env.DB, 'ab_test_ended', abEndMatch[1], `A/B Test ended. Winner: Variant ${winner}`, null);
      return json({ test_id: abEndMatch[1], winner, variant_a_score: totalA, variant_b_score: totalB, winning_content: winner === 'A' ? test.variant_a_content : test.variant_b_content });
    }

    // ═══════════════════════════════════════════════════════
    // 6. AUDIENCE PERSONAS
    // ═══════════════════════════════════════════════════════

    // ── Create persona ──
    if (path === '/api/personas' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_personas (id,name,description,demographics,interests,platforms,tone,content_preferences,pain_points) VALUES (?,?,?,?,?,?,?,?,?)')
        .bind(id, body.name, body.description||'', JSON.stringify(body.demographics||{}), JSON.stringify(body.interests||[]), JSON.stringify(body.platforms||[]), body.tone||'neutral', JSON.stringify(body.content_preferences||[]), JSON.stringify(body.pain_points||[])).run();
      await log(env.DB, 'persona_created', id, `Persona: ${body.name}`, null);
      return json({ id, name: body.name }, 201);
    }

    // ── List personas ──
    if (path === '/api/personas' && method === 'GET') {
      const personas = (await env.DB.prepare('SELECT * FROM br_personas ORDER BY created_at DESC').all()).results;
      return json({ personas });
    }

    // ── Get single persona ──
    const personaMatch = path.match(/^\/api\/personas\/([^/]+)$/);
    if (personaMatch && method === 'GET') {
      const persona = await env.DB.prepare('SELECT * FROM br_personas WHERE id=?').bind(personaMatch[1]).first();
      if (!persona) return json({ error: 'Not found' }, 404);
      return json({ persona });
    }

    // ── Update persona ──
    if (personaMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['name','description','tone']) {
        if (body[field]) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      for (const field of ['demographics','interests','platforms','content_preferences','pain_points']) {
        if (body[field]) { sets.push(`${field}=?`); vals.push(JSON.stringify(body[field])); }
      }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      vals.push(personaMatch[1]);
      await env.DB.prepare(`UPDATE br_personas SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: personaMatch[1] });
    }

    // ── Delete persona ──
    if (personaMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_personas WHERE id=?').bind(personaMatch[1]).run();
      return json({ ok: true, deleted: personaMatch[1] });
    }

    // ── Generate content for a specific persona ──
    if (path === '/api/personas/generate' && method === 'POST') {
      const body = await request.json();
      if (!body.persona_id || !body.topic) return json({ error: 'persona_id and topic required' }, 400);
      const persona = await env.DB.prepare('SELECT * FROM br_personas WHERE id=?').bind(body.persona_id).first();
      if (!persona) return json({ error: 'Persona not found' }, 404);
      const platform = body.platform || 'x';

      let content = '';
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are creating social media content for ${platform}. Target audience: "${persona.name}" - ${persona.description || 'general audience'}. Their interests: ${persona.interests || '[]'}. Preferred tone: ${persona.tone || 'neutral'}. Pain points: ${persona.pain_points || '[]'}. Write a post that resonates deeply with this specific audience. Return ONLY the post content.` },
            { role: 'user', content: `Topic: ${body.topic}` },
          ], max_tokens: 256,
        });
        if (aiR.response) content = aiR.response.trim();
      } catch { content = body.topic; }

      return json({ persona: persona.name, platform, topic: body.topic, content, sentiment: quickSentiment(content) });
    }

    // ═══════════════════════════════════════════════════════
    // 7. BRAND VOICE SETTINGS
    // ═══════════════════════════════════════════════════════

    // ── Get active voice ──
    if (path === '/api/voice' && method === 'GET') {
      const voices = (await env.DB.prepare('SELECT * FROM br_voice ORDER BY active DESC, created_at DESC').all()).results;
      const active = voices.find(v => v.active) || null;
      return json({ active, all: voices });
    }

    // ── Create / update voice ──
    if (path === '/api/voice' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      const id = crypto.randomUUID();

      // Deactivate all others if this should be active
      if (body.active !== false) {
        await env.DB.prepare('UPDATE br_voice SET active=0').run();
      }

      await env.DB.prepare('INSERT INTO br_voice (id,name,tone,vocabulary,rules,examples,do_list,dont_list,active) VALUES (?,?,?,?,?,?,?,?,?)')
        .bind(id, body.name, body.tone||'professional yet warm', body.vocabulary||'', body.rules||'', body.examples||'', body.do_list||'', body.dont_list||'', body.active !== false ? 1 : 0).run();
      await log(env.DB, 'voice_created', id, `Brand voice: ${body.name}`, null);
      return json({ id, name: body.name, active: body.active !== false }, 201);
    }

    // ── Update voice ──
    const voiceMatch = path.match(/^\/api\/voice\/([^/]+)$/);
    if (voiceMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['name','tone','vocabulary','rules','examples','do_list','dont_list']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (body.active !== undefined) {
        if (body.active) await env.DB.prepare('UPDATE br_voice SET active=0').run();
        sets.push('active=?'); vals.push(body.active ? 1 : 0);
      }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      vals.push(voiceMatch[1]);
      await env.DB.prepare(`UPDATE br_voice SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: voiceMatch[1] });
    }

    // ── Delete voice ──
    if (voiceMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_voice WHERE id=?').bind(voiceMatch[1]).run();
      return json({ ok: true, deleted: voiceMatch[1] });
    }

    // ── Test voice against content ──
    if (path === '/api/voice/test' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const voice = await env.DB.prepare('SELECT * FROM br_voice WHERE active=1 LIMIT 1').first();
      if (!voice) return json({ error: 'No active brand voice configured. Create one with POST /api/voice' }, 400);

      let rewritten = body.content;
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a brand voice editor. Apply this brand voice to the content: Name: ${voice.name}. Tone: ${voice.tone}. Rules: ${voice.rules}. Do: ${voice.do_list}. Do not: ${voice.dont_list}. Examples: ${voice.examples}. Rewrite the content to match this voice perfectly. Return ONLY the rewritten content.` },
            { role: 'user', content: body.content },
          ], max_tokens: 256,
        });
        if (aiR.response) rewritten = aiR.response.trim();
      } catch {}

      return json({ original: body.content, rewritten, voice: voice.name, tone: voice.tone });
    }

    // ═══════════════════════════════════════════════════════
    // 8. LINK SHORTENER
    // ═══════════════════════════════════════════════════════

    // ── Create short link ──
    if (path === '/api/shorten' && method === 'POST') {
      const body = await request.json();
      if (!body.url) return json({ error: 'url required' }, 400);
      const id = crypto.randomUUID();
      let slug = body.slug || crypto.randomUUID().slice(0, 7);
      // Ensure slug is unique
      const existing = await env.DB.prepare('SELECT id FROM br_links WHERE slug=?').bind(slug).first();
      if (existing) slug = slug + '-' + crypto.randomUUID().slice(0, 4);

      await env.DB.prepare('INSERT INTO br_links (id,slug,target_url,title,utm_source,utm_medium,utm_campaign,expires_at) VALUES (?,?,?,?,?,?,?,?)')
        .bind(id, slug, body.url, body.title||'', body.utm_source||null, body.utm_medium||null, body.utm_campaign||null, body.expires_at||null).run();
      await log(env.DB, 'link_created', id, `Short link: ${slug} -> ${body.url.slice(0,60)}`, null);

      const shortUrl = `https://backroad.blackroad.io/r/${slug}`;
      return json({ id, slug, short_url: shortUrl, target_url: body.url, title: body.title || '' }, 201);
    }

    // ── List short links ──
    if (path === '/api/shorten' && method === 'GET') {
      const links = (await env.DB.prepare('SELECT * FROM br_links ORDER BY clicks DESC, created_at DESC LIMIT 100').all()).results;
      return json({ links: links.map(l => ({ ...l, short_url: `https://backroad.blackroad.io/r/${l.slug}` })) });
    }

    // ── Get link stats ──
    const linkStatsMatch = path.match(/^\/api\/shorten\/([^/]+)\/stats$/);
    if (linkStatsMatch && method === 'GET') {
      const link = await env.DB.prepare('SELECT * FROM br_links WHERE slug=? OR id=?').bind(linkStatsMatch[1], linkStatsMatch[1]).first();
      if (!link) return json({ error: 'Not found' }, 404);
      return json({ link: { ...link, short_url: `https://backroad.blackroad.io/r/${link.slug}` }, referrers: JSON.parse(link.referrers || '{}') });
    }

    // ── Delete short link ──
    const linkDeleteMatch = path.match(/^\/api\/shorten\/([^/]+)$/);
    if (linkDeleteMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_links WHERE slug=? OR id=?').bind(linkDeleteMatch[1], linkDeleteMatch[1]).run();
      return json({ ok: true, deleted: linkDeleteMatch[1] });
    }

    // ── Redirect handler for short links ──
    const redirectMatch = path.match(/^\/r\/([^/]+)$/);
    if (redirectMatch) {
      const link = await env.DB.prepare('SELECT * FROM br_links WHERE slug=?').bind(redirectMatch[1]).first();
      if (!link) return json({ error: 'Link not found' }, 404);

      // Check expiration
      if (link.expires_at && new Date(link.expires_at) < new Date()) {
        return json({ error: 'Link expired' }, 410);
      }

      // Track click + referrer
      const referrer = request.headers.get('referer') || 'direct';
      const referrers = JSON.parse(link.referrers || '{}');
      referrers[referrer] = (referrers[referrer] || 0) + 1;
      await env.DB.prepare('UPDATE br_links SET clicks=clicks+1, referrers=? WHERE id=?').bind(JSON.stringify(referrers), link.id).run();

      // Build target URL with UTM params
      let targetUrl = link.target_url;
      if (link.utm_source || link.utm_medium || link.utm_campaign) {
        const u = new URL(targetUrl);
        if (link.utm_source) u.searchParams.set('utm_source', link.utm_source);
        if (link.utm_medium) u.searchParams.set('utm_medium', link.utm_medium);
        if (link.utm_campaign) u.searchParams.set('utm_campaign', link.utm_campaign);
        targetUrl = u.toString();
      }

      return new Response(null, { status: 302, headers: { 'Location': targetUrl, ...CORS } });
    }


    // ═══════════════════════════════════════════════════════
    // 9. INFLUENCER DATABASE
    // ═══════════════════════════════════════════════════════

    // ── Create influencer ──
    if (path === '/api/influencers' && method === 'POST') {
      const body = await request.json();
      if (!body.name || !body.platform) return json({ error: 'name and platform required' }, 400);
      const id = crypto.randomUUID();
      const score = (body.follower_count || 0) * (body.engagement_rate || 0) / 100;
      await env.DB.prepare('INSERT INTO br_influencers (id,name,handle,platform,follower_count,engagement_rate,category,contact_email,contact_notes,status,score) VALUES (?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, body.name, body.handle||'', body.platform, body.follower_count||0, body.engagement_rate||0, body.category||'general', body.contact_email||'', body.contact_notes||'', body.status||'prospect', score).run();
      await log(env.DB, 'influencer_added', id, `Influencer: ${body.name} (${body.platform})`, null);
      return json({ id, name: body.name, platform: body.platform, score }, 201);
    }

    // ── List influencers ──
    if (path === '/api/influencers' && method === 'GET') {
      const platform = url.searchParams.get('platform');
      const status = url.searchParams.get('status');
      const sort = url.searchParams.get('sort') || 'score';
      let q = 'SELECT * FROM br_influencers'; const p = []; const w = [];
      if (platform) { w.push('platform=?'); p.push(platform); }
      if (status) { w.push('status=?'); p.push(status); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      const validSorts = { score: 'score DESC', followers: 'follower_count DESC', engagement: 'engagement_rate DESC', recent: 'created_at DESC' };
      q += ` ORDER BY ${validSorts[sort] || 'score DESC'} LIMIT 100`;
      const influencers = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;
      return json({ influencers, total: influencers.length });
    }

    // ── Get single influencer ──
    const influencerMatch = path.match(/^\/api\/influencers\/([^/]+)$/);
    if (influencerMatch && method === 'GET') {
      const inf = await env.DB.prepare('SELECT * FROM br_influencers WHERE id=?').bind(influencerMatch[1]).first();
      if (!inf) return json({ error: 'Not found' }, 404);
      return json({ influencer: { ...inf, collaboration_history: JSON.parse(inf.collaboration_history || '[]') } });
    }

    // ── Update influencer ──
    if (influencerMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['name','handle','platform','category','contact_email','contact_notes','status']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      for (const field of ['follower_count','engagement_rate']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (body.collaboration) {
        const inf = await env.DB.prepare('SELECT collaboration_history FROM br_influencers WHERE id=?').bind(influencerMatch[1]).first();
        const history = JSON.parse(inf?.collaboration_history || '[]');
        history.push({ ...body.collaboration, date: new Date().toISOString() });
        sets.push('collaboration_history=?'); vals.push(JSON.stringify(history));
      }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      sets.push("updated_at=datetime('now')");
      // Recalculate score
      if (body.follower_count !== undefined || body.engagement_rate !== undefined) {
        const inf = await env.DB.prepare('SELECT follower_count, engagement_rate FROM br_influencers WHERE id=?').bind(influencerMatch[1]).first();
        const fc = body.follower_count !== undefined ? body.follower_count : (inf?.follower_count || 0);
        const er = body.engagement_rate !== undefined ? body.engagement_rate : (inf?.engagement_rate || 0);
        sets.push('score=?'); vals.push(fc * er / 100);
      }
      vals.push(influencerMatch[1]);
      await env.DB.prepare(`UPDATE br_influencers SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: influencerMatch[1] });
    }

    // ── Delete influencer ──
    if (influencerMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_influencers WHERE id=?').bind(influencerMatch[1]).run();
      return json({ ok: true, deleted: influencerMatch[1] });
    }

    // ── Search influencers ──
    if (path === '/api/influencers/search' && method === 'POST') {
      const body = await request.json();
      if (!body.query) return json({ error: 'query required' }, 400);
      const q = `%${body.query}%`;
      const results = (await env.DB.prepare('SELECT * FROM br_influencers WHERE name LIKE ? OR handle LIKE ? OR category LIKE ? ORDER BY score DESC LIMIT 50').bind(q, q, q).all()).results;
      return json({ query: body.query, results, total: results.length });
    }

    // ═══════════════════════════════════════════════════════
    // 10. CONTENT REPURPOSING
    // ═══════════════════════════════════════════════════════

    // ── Repurpose content across platforms ──
    if (path === '/api/repurpose' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const sourcePlatform = body.source_platform || 'blog';
      const targetPlatforms = body.targets || ['x', 'linkedin', 'newsletter', 'instagram', 'threads'];
      const repurposed = [];

      for (const target of targetPlatforms) {
        const agentId = pickAgent(body.content, target);
        const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.thalia;
        let adapted = body.content;
        try {
          const platformRules = {
            x: 'Max 280 chars. Punchy, hook-driven. 2-3 hashtags. No fluff.',
            linkedin: '1300 chars max. Professional but personal. Line breaks for readability. End with a question. No hashtag spam.',
            newsletter: 'Email format. Subject line + preview text + body. Scannable. One clear CTA.',
            instagram: 'Caption format. Story-driven. Line breaks. 5-10 relevant hashtags at the end. Emoji-free.',
            threads: 'Conversational, 500 chars max. Thread-friendly. Break into digestible points.',
            tiktok: 'Script format. Hook in first 3 seconds. 30-60 second read. Casual tone.',
            pinterest: 'Pin description. Keyword-rich. 200-300 chars. Actionable.',
            facebook: 'Conversational. 1-3 paragraphs. Question or poll to drive engagement.',
            blog: 'Full article. H2 headers. 800-1500 words. SEO-optimized intro paragraph.',
            youtube: 'Video script. Hook, intro, 3-5 key points, CTA, outro. Timestamps included.',
          };
          const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name}, repurposing content from ${sourcePlatform} to ${target}. Style: ${agent.style}. Rules for ${target}: ${platformRules[target] || 'Adapt appropriately.'}. Transform the content completely for this platform. Return ONLY the adapted content.` },
              { role: 'user', content: body.content },
            ], max_tokens: 512,
          });
          if (aiR.response) adapted = aiR.response.trim();
        } catch {}
        repurposed.push({ platform: target, agent: agent.name, content: adapted, char_count: adapted.length, sentiment: quickSentiment(adapted) });
      }

      await log(env.DB, 'content_repurposed', null, `Repurposed from ${sourcePlatform} to ${targetPlatforms.join(',')}`, null);
      stampChain('content_repurposed', null, targetPlatforms.join(',')).catch(()=>{});
      return json({ source_platform: sourcePlatform, original: body.content, repurposed, platforms_count: repurposed.length });
    }

    // ═══════════════════════════════════════════════════════
    // 11. SENTIMENT MONITOR
    // ═══════════════════════════════════════════════════════

    // ── Analyze sentiment of text ──
    if (path === '/api/sentiment' && method === 'POST') {
      const body = await request.json();
      if (!body.content && !body.items) return json({ error: 'content or items[] required' }, 400);

      if (body.items && Array.isArray(body.items)) {
        // Batch analysis
        const analyzed = [];
        for (const item of body.items.slice(0, 50)) {
          const text = typeof item === 'string' ? item : item.content || '';
          const sentiment = quickSentiment(text);
          let aiSentiment = null;
          try {
            const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
              messages: [
                { role: 'system', content: 'You are a sentiment analysis engine. Analyze the sentiment of this text. Return ONLY a JSON object: {"score": -1.0 to 1.0, "label": "positive|negative|neutral|mixed", "emotions": ["joy","anger","sadness","surprise","fear","disgust","trust","anticipation"], "topics": ["topic1","topic2"]}. No explanation.' },
                { role: 'user', content: text },
              ], max_tokens: 150,
            });
            if (aiR.response) {
              const match = aiR.response.match(/\{[\s\S]*\}/);
              if (match) aiSentiment = JSON.parse(match[0]);
            }
          } catch {}

          const entry = {
            content: text.slice(0, 200),
            basic: sentiment,
            ai: aiSentiment || sentiment,
            platform: (typeof item === 'object' ? item.platform : null) || body.platform || 'unknown',
          };
          analyzed.push(entry);

          // Log to sentiment history
          const sid = crypto.randomUUID();
          try {
            await env.DB.prepare('INSERT INTO br_sentiment_log (id,source,platform,content,sentiment_score,sentiment_label,entity,post_id) VALUES (?,?,?,?,?,?,?,?)')
              .bind(sid, body.source||'manual', entry.platform, text.slice(0,500), (aiSentiment||sentiment).score, (aiSentiment||sentiment).label, body.entity||null, body.post_id||null).run();
          } catch {}
        }

        const avgScore = analyzed.reduce((sum, a) => sum + (a.ai?.score || 0), 0) / analyzed.length;
        return json({ analyzed, summary: { count: analyzed.length, avg_score: Math.round(avgScore * 100) / 100, overall: avgScore > 0.2 ? 'positive' : avgScore < -0.2 ? 'negative' : 'neutral' } });
      }

      // Single content analysis
      const sentiment = quickSentiment(body.content);
      let aiSentiment = null;
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are a sentiment analysis engine. Analyze the sentiment deeply. Return ONLY a JSON object: {"score": -1.0 to 1.0, "label": "positive|negative|neutral|mixed", "emotions": [], "topics": [], "tone": "formal|casual|urgent|humorous|aggressive|supportive", "brand_safe": true/false}. No explanation.' },
            { role: 'user', content: body.content },
          ], max_tokens: 200,
        });
        if (aiR.response) {
          const match = aiR.response.match(/\{[\s\S]*\}/);
          if (match) aiSentiment = JSON.parse(match[0]);
        }
      } catch {}

      const sid = crypto.randomUUID();
      const finalSentiment = aiSentiment || sentiment;
      try {
        await env.DB.prepare('INSERT INTO br_sentiment_log (id,source,platform,content,sentiment_score,sentiment_label,entity,post_id) VALUES (?,?,?,?,?,?,?,?)')
          .bind(sid, body.source||'manual', body.platform||'unknown', body.content.slice(0,500), finalSentiment.score, finalSentiment.label, body.entity||null, body.post_id||null).run();
      } catch {}

      return json({ content: body.content.slice(0, 200), basic: sentiment, ai: finalSentiment });
    }

    // ── Get sentiment trends over time ──
    if (path === '/api/sentiment' && method === 'GET') {
      const period = url.searchParams.get('period') || '7d';
      const platform = url.searchParams.get('platform');
      const entity = url.searchParams.get('entity');
      const daysMap = { '24h': 1, '7d': 7, '30d': 30, '90d': 90 };
      const days = daysMap[period] || 7;

      let q = `SELECT * FROM br_sentiment_log WHERE created_at >= datetime('now', '-${days} days')`;
      const params = [];
      if (platform) { q += ' AND platform=?'; params.push(platform); }
      if (entity) { q += ' AND entity=?'; params.push(entity); }
      q += ' ORDER BY created_at DESC LIMIT 500';
      const entries = params.length ? (await env.DB.prepare(q).bind(...params).all()).results : (await env.DB.prepare(q).all()).results;

      // Aggregate by day
      const byDay = {};
      for (const e of entries) {
        const day = e.created_at.split('T')[0];
        if (!byDay[day]) byDay[day] = { positive: 0, negative: 0, neutral: 0, total: 0, sum_score: 0 };
        byDay[day][e.sentiment_label || 'neutral']++;
        byDay[day].total++;
        byDay[day].sum_score += e.sentiment_score || 0;
      }
      const trend = Object.entries(byDay).sort(([a],[b]) => a.localeCompare(b)).map(([day, data]) => ({
        day, ...data, avg_score: Math.round((data.sum_score / data.total) * 100) / 100,
      }));

      const totalEntries = entries.length;
      const avgScore = totalEntries ? entries.reduce((s, e) => s + (e.sentiment_score||0), 0) / totalEntries : 0;

      return json({ period, days, total: totalEntries, avg_score: Math.round(avgScore * 100) / 100, overall: avgScore > 0.2 ? 'positive' : avgScore < -0.2 ? 'negative' : 'neutral', trend, recent: entries.slice(0, 20) });
    }

    // ═══════════════════════════════════════════════════════
    // 12. COMPETITOR WATCH
    // ═══════════════════════════════════════════════════════

    // ── Add competitor ──
    if (path === '/api/competitors' && method === 'POST') {
      const body = await request.json();
      if (!body.name || !body.platform) return json({ error: 'name and platform required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_competitors (id,name,handle,platform,follower_count,avg_engagement,content_frequency,strengths,weaknesses,notes) VALUES (?,?,?,?,?,?,?,?,?,?)')
        .bind(id, body.name, body.handle||'', body.platform, body.follower_count||0, body.avg_engagement||0, body.content_frequency||'unknown', body.strengths||'', body.weaknesses||'', body.notes||'').run();
      await log(env.DB, 'competitor_added', id, `Competitor: ${body.name} (${body.platform})`, null);
      return json({ id, name: body.name, platform: body.platform }, 201);
    }

    // ── List competitors ──
    if (path === '/api/competitors' && method === 'GET') {
      const platform = url.searchParams.get('platform');
      let q = 'SELECT * FROM br_competitors';
      const params = [];
      if (platform) { q += ' WHERE platform=?'; params.push(platform); }
      q += ' ORDER BY follower_count DESC LIMIT 100';
      const competitors = params.length ? (await env.DB.prepare(q).bind(...params).all()).results : (await env.DB.prepare(q).all()).results;
      return json({ competitors, total: competitors.length });
    }

    // ── Get single competitor ──
    const competitorMatch = path.match(/^\/api\/competitors\/([^/]+)$/);
    if (competitorMatch && method === 'GET') {
      const comp = await env.DB.prepare('SELECT * FROM br_competitors WHERE id=?').bind(competitorMatch[1]).first();
      if (!comp) return json({ error: 'Not found' }, 404);
      return json({ competitor: comp });
    }

    // ── Update competitor ──
    if (competitorMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['name','handle','platform','content_frequency','strengths','weaknesses','notes']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      for (const field of ['follower_count','avg_engagement']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      sets.push("last_checked=datetime('now')");
      vals.push(competitorMatch[1]);
      await env.DB.prepare(`UPDATE br_competitors SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: competitorMatch[1] });
    }

    // ── Delete competitor ──
    if (competitorMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_competitors WHERE id=?').bind(competitorMatch[1]).run();
      return json({ ok: true, deleted: competitorMatch[1] });
    }

    // ── Compare competitors (gap analysis) ──
    if (path === '/api/competitors/compare' && method === 'GET') {
      const competitors = (await env.DB.prepare('SELECT * FROM br_competitors ORDER BY follower_count DESC LIMIT 20').all()).results;
      const [ourPosts, ourReach, ourEngagement] = await Promise.all([
        env.DB.prepare('SELECT COUNT(*) as c FROM br_posts').first(),
        env.DB.prepare('SELECT COALESCE(SUM(engagement_reach),0) as r FROM br_posts').first(),
        env.DB.prepare('SELECT COALESCE(SUM(engagement_likes+engagement_shares+engagement_comments),0) as e FROM br_posts').first(),
      ]);

      const ourMetrics = { posts: ourPosts.c, reach: ourReach.r, engagement: ourEngagement.e };
      const comparison = competitors.map(c => ({
        name: c.name, platform: c.platform, handle: c.handle,
        their_followers: c.follower_count, their_engagement: c.avg_engagement,
        gap: { followers: c.follower_count - ourMetrics.reach, engagement_rate_diff: c.avg_engagement },
        strengths: c.strengths, weaknesses: c.weaknesses,
      }));

      let gapAnalysis = '';
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are a competitive analysis expert. Given our metrics and competitor data, identify 3-5 content gaps and opportunities. Be specific and actionable. Return a brief analysis.' },
            { role: 'user', content: `Our metrics: ${JSON.stringify(ourMetrics)}. Competitors: ${JSON.stringify(comparison.slice(0,5).map(c=>({name:c.name,followers:c.their_followers,engagement:c.their_engagement,strengths:c.strengths})))}` },
          ], max_tokens: 300,
        });
        if (aiR.response) gapAnalysis = aiR.response.trim();
      } catch { gapAnalysis = 'Add competitor data with POST /api/competitors to enable AI gap analysis.'; }

      return json({ our_metrics: ourMetrics, competitors: comparison, gap_analysis: gapAnalysis });
    }

    // ═══════════════════════════════════════════════════════
    // 13. SOCIAL INBOX
    // ═══════════════════════════════════════════════════════

    // ── Add message to inbox ──
    if (path === '/api/inbox' && method === 'POST') {
      const body = await request.json();
      if (!body.content || !body.platform || !body.type) return json({ error: 'content, platform, and type required' }, 400);
      const id = crypto.randomUUID();
      const sentiment = quickSentiment(body.content);
      await env.DB.prepare('INSERT INTO br_inbox (id,platform,type,from_handle,from_name,content,post_id,sentiment_score,sentiment_label) VALUES (?,?,?,?,?,?,?,?,?)')
        .bind(id, body.platform, body.type, body.from_handle||'', body.from_name||'', body.content, body.post_id||null, sentiment.score, sentiment.label).run();
      await log(env.DB, 'inbox_received', id, `${body.type} from ${body.from_handle||'unknown'} on ${body.platform}`, null);
      return json({ id, platform: body.platform, type: body.type, sentiment }, 201);
    }

    // ── Get inbox (unified feed) ──
    if (path === '/api/inbox' && method === 'GET') {
      const platform = url.searchParams.get('platform');
      const type = url.searchParams.get('type'); // comment, mention, dm, reply
      const unread = url.searchParams.get('unread');
      const starred = url.searchParams.get('starred');
      let q = 'SELECT * FROM br_inbox WHERE archived=0'; const p = [];
      if (platform) { q += ' AND platform=?'; p.push(platform); }
      if (type) { q += ' AND type=?'; p.push(type); }
      if (unread === 'true') { q += ' AND read=0'; }
      if (starred === 'true') { q += ' AND starred=1'; }
      q += ' ORDER BY created_at DESC LIMIT 200';
      const messages = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;

      const unreadCount = (await env.DB.prepare('SELECT COUNT(*) as c FROM br_inbox WHERE read=0 AND archived=0').first()).c;
      const byPlatform = {};
      for (const m of messages) {
        if (!byPlatform[m.platform]) byPlatform[m.platform] = 0;
        byPlatform[m.platform]++;
      }

      return json({ messages, total: messages.length, unread: unreadCount, by_platform: byPlatform });
    }

    // ── Mark inbox item read/starred/archived ──
    const inboxActionMatch = path.match(/^\/api\/inbox\/([^/]+)\/(read|star|archive)$/);
    if (inboxActionMatch && method === 'POST') {
      const [, itemId, action] = inboxActionMatch;
      const fieldMap = { read: 'read', star: 'starred', archive: 'archived' };
      const field = fieldMap[action];
      await env.DB.prepare(`UPDATE br_inbox SET ${field}=1 WHERE id=?`).bind(itemId).run();
      return json({ ok: true, id: itemId, action });
    }

    // ── Bulk mark read ──
    if (path === '/api/inbox/mark-all-read' && method === 'POST') {
      const body = await request.json().catch(() => ({}));
      if (body.platform) {
        await env.DB.prepare('UPDATE br_inbox SET read=1 WHERE platform=? AND read=0').bind(body.platform).run();
      } else {
        await env.DB.prepare('UPDATE br_inbox SET read=1 WHERE read=0').run();
      }
      return json({ ok: true });
    }

    // ── Quick reply from inbox ──
    const inboxReplyMatch = path.match(/^\/api\/inbox\/([^/]+)\/reply$/);
    if (inboxReplyMatch && method === 'POST') {
      const body = await request.json();
      const item = await env.DB.prepare('SELECT * FROM br_inbox WHERE id=?').bind(inboxReplyMatch[1]).first();
      if (!item) return json({ error: 'Not found' }, 404);

      const agentId = pickAgent(item.content, item.platform);
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.aria;
      let reply = body.content || '';

      if (!reply) {
        try {
          const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name}. Style: ${agent.style}. Reply to this ${item.type} on ${item.platform} warmly and helpfully. 1-2 sentences. Stay on-brand.` },
              { role: 'user', content: `${item.type} from ${item.from_handle || 'someone'}: "${item.content}"` },
            ], max_tokens: 120,
          });
          if (aiR.response) reply = aiR.response.trim();
        } catch { reply = 'Thanks for reaching out.'; }
      }

      // Mark as read
      await env.DB.prepare('UPDATE br_inbox SET read=1 WHERE id=?').bind(inboxReplyMatch[1]).run();

      const rid = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_replies (id,post_id,agent_id,agent_name,platform,content,sentiment,approved) VALUES (?,?,?,?,?,?,?,1)')
        .bind(rid, item.post_id||null, agentId, agent.name, item.platform, reply, 'positive').run();

      return json({ id: rid, reply, agent: agent.name, in_reply_to: inboxReplyMatch[1], platform: item.platform });
    }

    // ═══════════════════════════════════════════════════════
    // 14. CONTENT SCORING
    // ═══════════════════════════════════════════════════════

    // ── Score content before publishing ──
    if (path === '/api/score' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const platform = body.platform || 'x';
      const content = body.content;

      // Basic metrics
      const wordCount = content.split(/\s+/).length;
      const charCount = content.length;
      const hasHashtags = (content.match(/#\w+/g) || []).length;
      const hasUrls = (content.match(/https?:\/\/\S+/g) || []).length;
      const hasCTA = /\b(click|sign up|subscribe|follow|share|comment|check out|try|get|join|download)\b/i.test(content);
      const hasQuestion = content.includes('?');
      const sentenceCount = content.split(/[.!?]+/).filter(s => s.trim()).length;
      const avgSentenceLen = wordCount / Math.max(sentenceCount, 1);

      // Readability (simple Flesch-like)
      const syllables = content.toLowerCase().split(/\s+/).reduce((sum, word) => {
        const s = word.replace(/[^a-z]/g, '').replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').match(/[aeiouy]{1,2}/g);
        return sum + (s ? s.length : 1);
      }, 0);
      const readabilityRaw = 206.835 - 1.015 * (wordCount / Math.max(sentenceCount, 1)) - 84.6 * (syllables / Math.max(wordCount, 1));
      const readabilityScore = Math.max(0, Math.min(100, readabilityRaw));

      // Platform-specific scoring
      const platformLimits = {
        x: { ideal_chars: 240, max_chars: 280, ideal_hashtags: 2, max_hashtags: 5 },
        linkedin: { ideal_chars: 1000, max_chars: 3000, ideal_hashtags: 3, max_hashtags: 5 },
        instagram: { ideal_chars: 800, max_chars: 2200, ideal_hashtags: 10, max_hashtags: 30 },
        threads: { ideal_chars: 400, max_chars: 500, ideal_hashtags: 2, max_hashtags: 5 },
        tiktok: { ideal_chars: 150, max_chars: 300, ideal_hashtags: 3, max_hashtags: 8 },
        blog: { ideal_chars: 5000, max_chars: 20000, ideal_hashtags: 0, max_hashtags: 5 },
        newsletter: { ideal_chars: 2000, max_chars: 10000, ideal_hashtags: 0, max_hashtags: 0 },
      };
      const limits = platformLimits[platform] || platformLimits.x;

      // Length score
      let lengthScore = 100;
      if (charCount > limits.max_chars) lengthScore = Math.max(0, 100 - ((charCount - limits.max_chars) / limits.max_chars * 100));
      else if (charCount < limits.ideal_chars * 0.3) lengthScore = 40;
      else if (charCount <= limits.ideal_chars) lengthScore = 80 + (charCount / limits.ideal_chars * 20);

      // Engagement prediction
      let engagementPrediction = 50;
      if (hasCTA) engagementPrediction += 15;
      if (hasQuestion) engagementPrediction += 10;
      if (hasHashtags >= 1 && hasHashtags <= limits.ideal_hashtags) engagementPrediction += 10;
      if (avgSentenceLen < 20) engagementPrediction += 5;
      engagementPrediction = Math.min(100, engagementPrediction);

      // AI scoring
      let aiScore = null;
      try {
        const voice = await env.DB.prepare('SELECT * FROM br_voice WHERE active=1 LIMIT 1').first();
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a content quality analyst for ${platform}. Score this content on a 0-100 scale across these dimensions. ${voice ? `Brand voice: ${voice.name}, tone: ${voice.tone}.` : ''} Return ONLY a JSON object: {"engagement_prediction": 0-100, "brand_alignment": 0-100, "clarity": 0-100, "hook_strength": 0-100, "suggestions": ["suggestion1","suggestion2","suggestion3"]}. No explanation.` },
            { role: 'user', content: content },
          ], max_tokens: 250,
        });
        if (aiR.response) {
          const match = aiR.response.match(/\{[\s\S]*\}/);
          if (match) aiScore = JSON.parse(match[0]);
        }
      } catch {}

      const brandAlignment = aiScore?.brand_alignment || 50;
      const overallScore = Math.round((readabilityScore * 0.2 + lengthScore * 0.15 + engagementPrediction * 0.3 + brandAlignment * 0.35));
      const suggestions = aiScore?.suggestions || [];
      if (!hasCTA) suggestions.push('Add a clear call to action');
      if (!hasQuestion) suggestions.push('Consider ending with a question to boost engagement');
      if (charCount > limits.max_chars) suggestions.push(`Content exceeds ${platform} character limit (${charCount}/${limits.max_chars})`);

      // Save score
      const scoreId = crypto.randomUUID();
      try {
        await env.DB.prepare('INSERT INTO br_content_scores (id,content,platform,engagement_prediction,readability_score,brand_alignment,overall_score,suggestions,word_count) VALUES (?,?,?,?,?,?,?,?,?)')
          .bind(scoreId, content.slice(0, 1000), platform, engagementPrediction, readabilityScore, brandAlignment, overallScore, JSON.stringify(suggestions), wordCount).run();
      } catch {}

      const grade = overallScore >= 85 ? 'A' : overallScore >= 70 ? 'B' : overallScore >= 55 ? 'C' : overallScore >= 40 ? 'D' : 'F';

      return json({
        id: scoreId, platform, grade, overall_score: overallScore,
        scores: {
          readability: Math.round(readabilityScore), length_fit: Math.round(lengthScore),
          engagement_prediction: engagementPrediction, brand_alignment: brandAlignment,
          hook_strength: aiScore?.hook_strength || 50, clarity: aiScore?.clarity || 50,
        },
        metrics: { word_count: wordCount, char_count: charCount, sentences: sentenceCount, hashtags: hasHashtags, urls: hasUrls, has_cta: hasCTA, has_question: hasQuestion },
        platform_limits: limits,
        suggestions,
        publish_ready: overallScore >= 60,
        sentiment: quickSentiment(content),
      });
    }

    // ── Get scoring history ──
    if (path === '/api/score' && method === 'GET') {
      const scores = (await env.DB.prepare('SELECT * FROM br_content_scores ORDER BY created_at DESC LIMIT 50').all()).results;
      const avgScore = scores.length ? scores.reduce((s, c) => s + c.overall_score, 0) / scores.length : 0;
      return json({ scores, total: scores.length, avg_score: Math.round(avgScore) });
    }

    // ═══════════════════════════════════════════════════════
    // 15. VIRAL TRACKER
    // ═══════════════════════════════════════════════════════

    // ── Check for viral posts (engagement spike detection) ──
    if (path === '/api/viral' && method === 'GET') {
      const threshold = parseFloat(url.searchParams.get('threshold') || '200'); // % increase to count as viral

      // Get posts with high engagement relative to average
      const avgEngagement = await env.DB.prepare('SELECT COALESCE(AVG(engagement_likes+engagement_shares+engagement_comments),1) as avg FROM br_posts WHERE engagement_likes+engagement_shares+engagement_comments > 0').first();
      const avg = avgEngagement.avg || 1;

      const hotPosts = (await env.DB.prepare(`SELECT id, content, agent_name, platforms, engagement_likes, engagement_shares, engagement_comments, engagement_reach, created_at, (engagement_likes+engagement_shares+engagement_comments) as total_engagement FROM br_posts WHERE (engagement_likes+engagement_shares+engagement_comments) > ? ORDER BY total_engagement DESC LIMIT 20`).bind(avg * (threshold / 100)).all()).results;

      const viralPosts = hotPosts.map(p => ({
        ...p,
        spike_pct: Math.round(((p.total_engagement / avg) - 1) * 100),
        viral_score: Math.min(100, Math.round((p.total_engagement / avg) * 20)),
        status: p.total_engagement > avg * 5 ? 'viral' : p.total_engagement > avg * 3 ? 'trending' : 'above_average',
      }));

      // Get recent alerts
      const alerts = (await env.DB.prepare('SELECT * FROM br_viral_alerts ORDER BY created_at DESC LIMIT 20').all()).results;

      return json({ avg_engagement: Math.round(avg), threshold_pct: threshold, viral_posts: viralPosts, alerts, total_viral: viralPosts.filter(p => p.status === 'viral').length, total_trending: viralPosts.filter(p => p.status === 'trending').length });
    }

    // ── Report engagement spike (webhook-style) ──
    if (path === '/api/viral' && method === 'POST') {
      const body = await request.json();
      if (!body.post_id) return json({ error: 'post_id required' }, 400);

      const post = await env.DB.prepare('SELECT * FROM br_posts WHERE id=?').bind(body.post_id).first();
      if (!post) return json({ error: 'Post not found' }, 404);

      const currentTotal = (body.likes || post.engagement_likes) + (body.shares || post.engagement_shares) + (body.comments || post.engagement_comments);
      const previousTotal = post.engagement_likes + post.engagement_shares + post.engagement_comments;
      const spikePct = previousTotal > 0 ? Math.round(((currentTotal / previousTotal) - 1) * 100) : 100;

      // Update post metrics
      if (body.likes) await env.DB.prepare('UPDATE br_posts SET engagement_likes=?, updated_at=datetime(\'now\') WHERE id=?').bind(body.likes, body.post_id).run();
      if (body.shares) await env.DB.prepare('UPDATE br_posts SET engagement_shares=?, updated_at=datetime(\'now\') WHERE id=?').bind(body.shares, body.post_id).run();
      if (body.comments) await env.DB.prepare('UPDATE br_posts SET engagement_comments=?, updated_at=datetime(\'now\') WHERE id=?').bind(body.comments, body.post_id).run();
      if (body.reach) await env.DB.prepare('UPDATE br_posts SET engagement_reach=?, updated_at=datetime(\'now\') WHERE id=?').bind(body.reach, body.post_id).run();

      // Create alert if spike is significant
      let alert = null;
      if (spikePct >= 100) {
        const alertId = crypto.randomUUID();
        const alertType = spikePct >= 500 ? 'viral' : spikePct >= 200 ? 'trending' : 'spike';
        await env.DB.prepare('INSERT INTO br_viral_alerts (id,post_id,alert_type,metric,previous_value,current_value,spike_pct,platform) VALUES (?,?,?,?,?,?,?,?)')
          .bind(alertId, body.post_id, alertType, 'total_engagement', previousTotal, currentTotal, spikePct, body.platform||'unknown').run();
        await log(env.DB, 'viral_alert', body.post_id, `${alertType.toUpperCase()}: +${spikePct}% engagement spike`, null);
        stampChain('viral_alert', body.post_id, `${alertType}:+${spikePct}%`).catch(()=>{});
        alert = { id: alertId, type: alertType, spike_pct: spikePct };
      }

      return json({ post_id: body.post_id, previous: previousTotal, current: currentTotal, spike_pct: spikePct, alert });
    }

    // ── Acknowledge viral alert ──
    const viralAckMatch = path.match(/^\/api\/viral\/([^/]+)\/ack$/);
    if (viralAckMatch && method === 'POST') {
      await env.DB.prepare('UPDATE br_viral_alerts SET acknowledged=1 WHERE id=?').bind(viralAckMatch[1]).run();
      return json({ ok: true, acknowledged: viralAckMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 16. CAMPAIGN ROI
    // ═══════════════════════════════════════════════════════

    // ── Create ROI entry ──
    if (path === '/api/roi' && method === 'POST') {
      const body = await request.json();
      if (!body.campaign_name) return json({ error: 'campaign_name required' }, 400);
      const id = crypto.randomUUID();
      const cost = body.cost || 0;
      const revenue = body.revenue || 0;
      const roiPct = cost > 0 ? Math.round(((revenue - cost) / cost) * 100) : 0;

      await env.DB.prepare('INSERT INTO br_roi (id,campaign_id,campaign_name,cost,revenue,conversions,clicks,impressions,roi_pct,attribution_model,platform,notes,period_start,period_end) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, body.campaign_id||null, body.campaign_name, cost, revenue, body.conversions||0, body.clicks||0, body.impressions||0, roiPct, body.attribution_model||'last-click', body.platform||'all', body.notes||'', body.period_start||new Date().toISOString().split('T')[0], body.period_end||null).run();
      await log(env.DB, 'roi_tracked', id, `ROI: ${body.campaign_name} = ${roiPct}% (cost: $${cost}, revenue: $${revenue})`, null);
      return json({ id, campaign_name: body.campaign_name, cost, revenue, roi_pct: roiPct, conversions: body.conversions||0 }, 201);
    }

    // ── Get ROI dashboard ──
    if (path === '/api/roi' && method === 'GET') {
      const campaignId = url.searchParams.get('campaign_id');
      const platform = url.searchParams.get('platform');
      let q = 'SELECT * FROM br_roi'; const p = []; const w = [];
      if (campaignId) { w.push('campaign_id=?'); p.push(campaignId); }
      if (platform) { w.push('platform=?'); p.push(platform); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      q += ' ORDER BY created_at DESC LIMIT 100';
      const entries = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;

      // Aggregate totals
      const totalCost = entries.reduce((s, e) => s + (e.cost || 0), 0);
      const totalRevenue = entries.reduce((s, e) => s + (e.revenue || 0), 0);
      const totalConversions = entries.reduce((s, e) => s + (e.conversions || 0), 0);
      const totalClicks = entries.reduce((s, e) => s + (e.clicks || 0), 0);
      const totalImpressions = entries.reduce((s, e) => s + (e.impressions || 0), 0);
      const overallROI = totalCost > 0 ? Math.round(((totalRevenue - totalCost) / totalCost) * 100) : 0;
      const cpc = totalClicks > 0 ? Math.round((totalCost / totalClicks) * 100) / 100 : 0;
      const cpa = totalConversions > 0 ? Math.round((totalCost / totalConversions) * 100) / 100 : 0;
      const conversionRate = totalClicks > 0 ? Math.round((totalConversions / totalClicks) * 10000) / 100 : 0;

      // By campaign
      const byCampaign = {};
      for (const e of entries) {
        const key = e.campaign_name || 'uncategorized';
        if (!byCampaign[key]) byCampaign[key] = { cost: 0, revenue: 0, conversions: 0, clicks: 0, impressions: 0 };
        byCampaign[key].cost += e.cost || 0;
        byCampaign[key].revenue += e.revenue || 0;
        byCampaign[key].conversions += e.conversions || 0;
        byCampaign[key].clicks += e.clicks || 0;
        byCampaign[key].impressions += e.impressions || 0;
      }
      for (const key of Object.keys(byCampaign)) {
        const c = byCampaign[key];
        c.roi_pct = c.cost > 0 ? Math.round(((c.revenue - c.cost) / c.cost) * 100) : 0;
      }

      // By platform
      const byPlatform = {};
      for (const e of entries) {
        const key = e.platform || 'all';
        if (!byPlatform[key]) byPlatform[key] = { cost: 0, revenue: 0, conversions: 0 };
        byPlatform[key].cost += e.cost || 0;
        byPlatform[key].revenue += e.revenue || 0;
        byPlatform[key].conversions += e.conversions || 0;
      }

      return json({
        totals: { cost: totalCost, revenue: totalRevenue, profit: totalRevenue - totalCost, roi_pct: overallROI, conversions: totalConversions, clicks: totalClicks, impressions: totalImpressions, cpc, cpa, conversion_rate: conversionRate },
        by_campaign: byCampaign,
        by_platform: byPlatform,
        entries,
        total: entries.length,
      });
    }

    // ── Update ROI entry ──
    const roiMatch = path.match(/^\/api\/roi\/([^/]+)$/);
    if (roiMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['campaign_name','attribution_model','platform','notes','period_start','period_end']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      for (const field of ['cost','revenue','conversions','clicks','impressions']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      // Recalculate ROI
      const existing = await env.DB.prepare('SELECT cost, revenue FROM br_roi WHERE id=?').bind(roiMatch[1]).first();
      if (existing) {
        const newCost = body.cost !== undefined ? body.cost : existing.cost;
        const newRevenue = body.revenue !== undefined ? body.revenue : existing.revenue;
        const newROI = newCost > 0 ? Math.round(((newRevenue - newCost) / newCost) * 100) : 0;
        sets.push('roi_pct=?'); vals.push(newROI);
      }
      vals.push(roiMatch[1]);
      await env.DB.prepare(`UPDATE br_roi SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: roiMatch[1] });
    }

    // ── Delete ROI entry ──
    if (roiMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_roi WHERE id=?').bind(roiMatch[1]).run();
      return json({ ok: true, deleted: roiMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 17. STORY GENERATOR
    // ═══════════════════════════════════════════════════════

    // ── Generate a brand story ──
    if (path === '/api/story' && method === 'POST') {
      const body = await request.json();
      const theme = body.theme || 'brand origin';
      const genre = body.genre || 'origin';
      const mood = body.mood || 'inspiring';
      const characters = body.characters || ['thalia', 'roadie', 'calliope'];
      const wordTarget = Math.min(body.word_count || 500, 2000);

      // Resolve agent characters
      const cast = characters.map(c => {
        const agent = SOCIAL_AGENTS[c];
        return agent ? { id: c, name: agent.name, role: agent.role, style: agent.style } : { id: c, name: c, role: 'guest', style: 'natural' };
      });

      const agentId = body.agent || 'calliope';
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.calliope;
      let narrative = '';
      let title = body.title || '';

      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are ${agent.name}, a master storyteller for BlackRoad OS. Style: ${agent.style}. Write a ${mood} ${genre} story about the theme "${theme}". The story features these characters: ${cast.map(c => `${c.name} (${c.role})`).join(', ')}. The story should have a clear narrative arc: setup, rising action, climax, resolution. Target approximately ${wordTarget} words. Make it feel authentic and grounded. Return ONLY the story text, no meta commentary.` },
            { role: 'user', content: body.prompt || `Write a ${genre} story about: ${theme}` },
          ], max_tokens: Math.min(wordTarget * 2, 2048),
        });
        if (aiR.response) narrative = aiR.response.trim();
      } catch { narrative = `The road stretched out before them, ${cast.map(c=>c.name).join(' and ')} standing at the beginning of something new. This was BlackRoad, and every journey here mattered.`; }

      if (!title) {
        try {
          const aiT = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: 'Generate a compelling story title. Return ONLY the title, nothing else. No quotes.' },
              { role: 'user', content: narrative.slice(0, 500) },
            ], max_tokens: 30,
          });
          if (aiT.response) title = aiT.response.trim().replace(/^["']|["']$/g, '');
        } catch { title = `The ${theme.split(' ')[0]} Road`; }
      }

      const id = crypto.randomUUID();
      const wordCount = narrative.split(/\s+/).length;
      await env.DB.prepare('INSERT INTO br_stories (id,title,theme,narrative,characters,genre,mood,word_count,agent_id,agent_name,tags,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, title, theme, narrative, JSON.stringify(cast), genre, mood, wordCount, agentId, agent.name, JSON.stringify(body.tags||[]), 'published').run();
      await log(env.DB, 'story_generated', id, `Story: "${title}" by ${agent.name} (${wordCount} words)`, agent.name);
      stampChain('story_generated', id, title).catch(()=>{});
      earnCoin('creator', 'story', 1.0).catch(()=>{});

      return json({ id, title, theme, genre, mood, narrative, characters: cast, word_count: wordCount, agent: agent.name, sentiment: quickSentiment(narrative) }, 201);
    }

    // ── List stories ──
    if (path === '/api/story' && method === 'GET') {
      const genre = url.searchParams.get('genre');
      const agent = url.searchParams.get('agent');
      let q = 'SELECT id, title, theme, genre, mood, word_count, agent_name, tags, status, created_at FROM br_stories';
      const p = []; const w = [];
      if (genre) { w.push('genre=?'); p.push(genre); }
      if (agent) { w.push('agent_id=?'); p.push(agent); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      q += ' ORDER BY created_at DESC LIMIT 50';
      const stories = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;
      return json({ stories, total: stories.length });
    }

    // ── Get single story ──
    const storyMatch = path.match(/^\/api\/story\/([^/]+)$/);
    if (storyMatch && method === 'GET') {
      const story = await env.DB.prepare('SELECT * FROM br_stories WHERE id=?').bind(storyMatch[1]).first();
      if (!story) return json({ error: 'Not found' }, 404);
      return json({ story: { ...story, characters: JSON.parse(story.characters || '[]'), tags: JSON.parse(story.tags || '[]') } });
    }

    // ── Delete story ──
    if (storyMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_stories WHERE id=?').bind(storyMatch[1]).run();
      return json({ ok: true, deleted: storyMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 18. MEME GENERATOR
    // ═══════════════════════════════════════════════════════

    const MEME_TEMPLATES = [
      { id: 'drake', name: 'Drake Hotline', format: 'top_bottom', description: 'Drake disapproves top, approves bottom' },
      { id: 'distracted', name: 'Distracted Boyfriend', format: 'three_panel', description: 'Looking away from one thing to another' },
      { id: 'change-my-mind', name: 'Change My Mind', format: 'single_caption', description: 'Person sitting at table with sign' },
      { id: 'expanding-brain', name: 'Expanding Brain', format: 'multi_tier', description: '4 tiers of increasing enlightenment' },
      { id: 'this-is-fine', name: 'This Is Fine', format: 'single_caption', description: 'Dog in burning room' },
      { id: 'two-buttons', name: 'Two Buttons', format: 'two_choices', description: 'Sweating over two button choices' },
      { id: 'stonks', name: 'Stonks', format: 'single_caption', description: 'Meme man with stonks arrow' },
      { id: 'galaxy-brain', name: 'Galaxy Brain', format: 'multi_tier', description: 'Universe brain escalation' },
      { id: 'always-has-been', name: 'Always Has Been', format: 'two_panel', description: 'Wait, it\'s all X? Always has been.' },
      { id: 'road-diverged', name: 'Road Diverged (BlackRoad)', format: 'two_choices', description: 'Two paths, one is the BlackRoad' },
    ];

    // ── Generate meme ──
    if (path === '/api/memes' && method === 'POST') {
      const body = await request.json();
      const topic = body.topic || body.content || '';
      if (!topic) return json({ error: 'topic or content required' }, 400);
      const templateId = body.template || null;
      const platform = body.platform || 'x';

      const agentId = body.agent || 'thalia';
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.thalia;

      // Pick template if not specified
      let template = templateId ? MEME_TEMPLATES.find(t => t.id === templateId) : null;
      if (!template) template = MEME_TEMPLATES[Math.floor(Math.random() * MEME_TEMPLATES.length)];

      let memeContent = {};
      try {
        const formatInstructions = {
          top_bottom: 'Return JSON: {"top_text": "...", "bottom_text": "..."}',
          three_panel: 'Return JSON: {"panel_1": "...", "panel_2": "...", "panel_3": "..."}',
          single_caption: 'Return JSON: {"caption": "..."}',
          multi_tier: 'Return JSON: {"tier_1": "...", "tier_2": "...", "tier_3": "...", "tier_4": "..."}',
          two_choices: 'Return JSON: {"choice_a": "...", "choice_b": "..."}',
          two_panel: 'Return JSON: {"panel_1": "...", "panel_2": "..."}',
        };
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are ${agent.name}, a meme creator for BlackRoad OS. Style: ${agent.style}. Create a funny meme using the "${template.name}" template (${template.description}). ${formatInstructions[template.format] || formatInstructions.top_bottom}. Also add a "caption" field for the post caption on ${platform}. Keep text short and punchy. No explanation, ONLY JSON.` },
            { role: 'user', content: `Topic: ${topic}` },
          ], max_tokens: 256,
        });
        if (aiR.response) {
          const match = aiR.response.match(/\{[\s\S]*\}/);
          if (match) memeContent = JSON.parse(match[0]);
        }
      } catch {}

      if (Object.keys(memeContent).length === 0) {
        memeContent = { top_text: topic.slice(0, 50), bottom_text: 'BlackRoad OS knows the way', caption: topic };
      }

      const id = crypto.randomUUID();
      const brandSafe = !(topic.toLowerCase().match(/nsfw|explicit|offensive|hate/));
      await env.DB.prepare('INSERT INTO br_memes (id,template,top_text,bottom_text,caption,style,platform,agent_id,agent_name,tags,brand_safe) VALUES (?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, template.id, memeContent.top_text||memeContent.panel_1||memeContent.tier_1||'', memeContent.bottom_text||memeContent.panel_2||memeContent.tier_4||'', memeContent.caption||topic, body.style||'classic', platform, agentId, agent.name, JSON.stringify(body.tags||[]), brandSafe?1:0).run();
      await log(env.DB, 'meme_generated', id, `Meme: ${template.name} by ${agent.name}`, agent.name);

      return json({ id, template: template, content: memeContent, platform, agent: agent.name, brand_safe: brandSafe, sentiment: quickSentiment(memeContent.caption || topic) }, 201);
    }

    // ── List memes ──
    if (path === '/api/memes' && method === 'GET') {
      const memes = (await env.DB.prepare('SELECT * FROM br_memes ORDER BY created_at DESC LIMIT 50').all()).results;
      return json({ memes, templates: MEME_TEMPLATES, total: memes.length });
    }

    // ── Get meme templates ──
    if (path === '/api/memes/templates' && method === 'GET') {
      return json({ templates: MEME_TEMPLATES });
    }

    // ── Delete meme ──
    const memeMatch = path.match(/^\/api\/memes\/([^/]+)$/);
    if (memeMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_memes WHERE id=?').bind(memeMatch[1]).run();
      return json({ ok: true, deleted: memeMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 19. SOCIAL LISTENING
    // ═══════════════════════════════════════════════════════

    // ── Add keyword to monitor ──
    if (path === '/api/listening' && method === 'POST') {
      const body = await request.json();
      if (!body.keyword) return json({ error: 'keyword required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_listening (id,keyword,platform,match_type,alert_enabled,alert_threshold,status) VALUES (?,?,?,?,?,?,?)')
        .bind(id, body.keyword, body.platform||'all', body.match_type||'contains', body.alert_enabled!==false?1:0, body.alert_threshold||5, 'active').run();
      await log(env.DB, 'listening_added', id, `Monitoring keyword: "${body.keyword}" on ${body.platform||'all'}`, null);
      return json({ id, keyword: body.keyword, platform: body.platform||'all', status: 'active' }, 201);
    }

    // ── List monitored keywords ──
    if (path === '/api/listening' && method === 'GET') {
      const status = url.searchParams.get('status') || 'active';
      const keywords = (await env.DB.prepare('SELECT * FROM br_listening WHERE status=? ORDER BY mentions_count DESC, created_at DESC LIMIT 100').bind(status).all()).results;

      // Get recent mentions across all keywords
      const recentMentions = (await env.DB.prepare('SELECT * FROM br_listening_mentions ORDER BY created_at DESC LIMIT 50').all()).results;

      // Summary stats
      const totalMentions = keywords.reduce((s, k) => s + k.mentions_count, 0);
      const avgSentiment = keywords.length ? keywords.reduce((s, k) => s + k.sentiment_avg, 0) / keywords.length : 0;

      return json({ keywords, recent_mentions: recentMentions, total_keywords: keywords.length, total_mentions: totalMentions, avg_sentiment: Math.round(avgSentiment * 100) / 100 });
    }

    // ── Report a mention (webhook for ingesting mentions) ──
    if (path === '/api/listening/mention' && method === 'POST') {
      const body = await request.json();
      if (!body.keyword_id || !body.content) return json({ error: 'keyword_id and content required' }, 400);

      const keyword = await env.DB.prepare('SELECT * FROM br_listening WHERE id=?').bind(body.keyword_id).first();
      if (!keyword) return json({ error: 'Keyword not found' }, 404);

      const sentiment = quickSentiment(body.content);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_listening_mentions (id,keyword_id,platform,source_handle,source_name,content,url,sentiment_score,sentiment_label) VALUES (?,?,?,?,?,?,?,?,?)')
        .bind(id, body.keyword_id, body.platform||keyword.platform, body.source_handle||'', body.source_name||'', body.content, body.url||'', sentiment.score, sentiment.label).run();

      // Update keyword stats
      const newCount = keyword.mentions_count + 1;
      const newSentimentAvg = ((keyword.sentiment_avg * keyword.mentions_count) + sentiment.score) / newCount;
      await env.DB.prepare("UPDATE br_listening SET mentions_count=?, sentiment_avg=?, last_mention=datetime('now'), updated_at=datetime('now') WHERE id=?")
        .bind(newCount, newSentimentAvg, body.keyword_id).run();

      // Check if alert threshold reached
      let alertTriggered = false;
      if (keyword.alert_enabled && newCount % keyword.alert_threshold === 0) {
        alertTriggered = true;
        await log(env.DB, 'listening_alert', body.keyword_id, `Alert: "${keyword.keyword}" hit ${newCount} mentions (sentiment: ${sentiment.label})`, null);
      }

      return json({ id, keyword: keyword.keyword, sentiment, mention_count: newCount, alert_triggered: alertTriggered }, 201);
    }

    // ── Scan content against all keywords (batch check) ──
    if (path === '/api/listening/scan' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const content = body.content.toLowerCase();

      const keywords = (await env.DB.prepare("SELECT * FROM br_listening WHERE status='active'").all()).results;
      const matches = [];

      for (const kw of keywords) {
        const keyword = kw.keyword.toLowerCase();
        let matched = false;
        if (kw.match_type === 'exact') matched = content === keyword;
        else if (kw.match_type === 'startswith') matched = content.startsWith(keyword);
        else matched = content.includes(keyword);

        if (matched) {
          matches.push({ keyword_id: kw.id, keyword: kw.keyword, platform: kw.platform, mentions: kw.mentions_count });
        }
      }

      return json({ content_preview: body.content.slice(0, 200), matches, total_matches: matches.length, keywords_checked: keywords.length });
    }

    // ── Update keyword settings ──
    const listeningMatch = path.match(/^\/api\/listening\/([^/]+)$/);
    if (listeningMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['keyword','platform','match_type','status']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (body.alert_enabled !== undefined) { sets.push('alert_enabled=?'); vals.push(body.alert_enabled?1:0); }
      if (body.alert_threshold !== undefined) { sets.push('alert_threshold=?'); vals.push(body.alert_threshold); }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      sets.push("updated_at=datetime('now')");
      vals.push(listeningMatch[1]);
      await env.DB.prepare(`UPDATE br_listening SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: listeningMatch[1] });
    }

    // ── Delete keyword ──
    if (listeningMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_listening WHERE id=?').bind(listeningMatch[1]).run();
      await env.DB.prepare('DELETE FROM br_listening_mentions WHERE keyword_id=?').bind(listeningMatch[1]).run();
      return json({ ok: true, deleted: listeningMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 20. UGC MANAGER
    // ═══════════════════════════════════════════════════════

    // ── Submit UGC ──
    if (path === '/api/ugc' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_ugc (id,content,content_type,source_platform,source_handle,source_name,source_url,rights_status,rights_notes,tags,campaign_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, body.content, body.content_type||'text', body.source_platform||'', body.source_handle||'', body.source_name||'', body.source_url||'', body.rights_status||'pending', body.rights_notes||'', JSON.stringify(body.tags||[]), body.campaign_id||null).run();
      await log(env.DB, 'ugc_submitted', id, `UGC from ${body.source_handle||'unknown'} on ${body.source_platform||'unknown'}`, null);
      return json({ id, content_type: body.content_type||'text', rights_status: 'pending', sentiment: quickSentiment(body.content) }, 201);
    }

    // ── List UGC ──
    if (path === '/api/ugc' && method === 'GET') {
      const rights = url.searchParams.get('rights');
      const featured = url.searchParams.get('featured');
      const approved = url.searchParams.get('approved');
      let q = 'SELECT * FROM br_ugc'; const p = []; const w = [];
      if (rights) { w.push('rights_status=?'); p.push(rights); }
      if (featured === 'true') { w.push('featured=1'); }
      if (approved === 'true') { w.push('approved=1'); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      q += ' ORDER BY created_at DESC LIMIT 100';
      const items = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;

      const stats = await env.DB.prepare("SELECT COUNT(*) as total, SUM(CASE WHEN rights_status='granted' THEN 1 ELSE 0 END) as rights_granted, SUM(CASE WHEN approved=1 THEN 1 ELSE 0 END) as approved_count, SUM(CASE WHEN featured=1 THEN 1 ELSE 0 END) as featured_count FROM br_ugc").first();

      return json({ items: items.map(i => ({...i, tags: JSON.parse(i.tags||'[]')})), total: items.length, stats });
    }

    // ── Approve / feature / grant rights on UGC ──
    const ugcActionMatch = path.match(/^\/api\/ugc\/([^/]+)\/(approve|feature|grant-rights|reject)$/);
    if (ugcActionMatch && method === 'POST') {
      const [, itemId, action] = ugcActionMatch;
      const body = await request.json().catch(() => ({}));
      switch (action) {
        case 'approve':
          await env.DB.prepare("UPDATE br_ugc SET approved=1, updated_at=datetime('now') WHERE id=?").bind(itemId).run();
          break;
        case 'feature':
          await env.DB.prepare("UPDATE br_ugc SET featured=1, approved=1, updated_at=datetime('now') WHERE id=?").bind(itemId).run();
          break;
        case 'grant-rights':
          await env.DB.prepare("UPDATE br_ugc SET rights_status='granted', rights_granted_at=datetime('now'), rights_notes=?, updated_at=datetime('now') WHERE id=?").bind(body.notes||'Rights granted', itemId).run();
          break;
        case 'reject':
          await env.DB.prepare("UPDATE br_ugc SET approved=0, rights_status='denied', rights_notes=?, updated_at=datetime('now') WHERE id=?").bind(body.reason||'Rejected', itemId).run();
          break;
      }
      await log(env.DB, 'ugc_action', itemId, `UGC ${action}: ${itemId}`, null);
      return json({ ok: true, id: itemId, action });
    }

    // ── Get single UGC item ──
    const ugcMatch = path.match(/^\/api\/ugc\/([^/]+)$/);
    if (ugcMatch && method === 'GET') {
      const item = await env.DB.prepare('SELECT * FROM br_ugc WHERE id=?').bind(ugcMatch[1]).first();
      if (!item) return json({ error: 'Not found' }, 404);
      return json({ item: { ...item, tags: JSON.parse(item.tags||'[]') } });
    }

    // ── Delete UGC ──
    if (ugcMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_ugc WHERE id=?').bind(ugcMatch[1]).run();
      return json({ ok: true, deleted: ugcMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 21. ENGAGEMENT AUTOMATION
    // ═══════════════════════════════════════════════════════

    // ── Create auto-engage rule ──
    if (path === '/api/auto-engage' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      const id = crypto.randomUUID();
      const agentId = body.agent_id || 'aria';
      const agent = SOCIAL_AGENTS[agentId] || SOCIAL_AGENTS.aria;

      // If no response template, generate one with AI
      let responseTemplate = body.response_template || '';
      if (!responseTemplate && body.trigger_keywords && body.trigger_keywords.length > 0) {
        try {
          const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name}. Style: ${agent.style}. Create a warm, on-brand reply template for when someone mentions these keywords: ${body.trigger_keywords.join(', ')}. Use {{keyword}} as a placeholder for the matched keyword. Return ONLY the reply template text, 1-2 sentences.` },
              { role: 'user', content: `Create a reply template for: ${body.trigger_keywords.join(', ')}` },
            ], max_tokens: 100,
          });
          if (aiR.response) responseTemplate = aiR.response.trim();
        } catch { responseTemplate = 'Thanks for mentioning {{keyword}}. We appreciate you being part of the journey.'; }
      }

      await env.DB.prepare('INSERT INTO br_auto_engage (id,name,type,trigger_keywords,trigger_sentiment,platform,action,response_template,agent_id,max_per_hour,active) VALUES (?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, body.name, body.type||'auto-reply', JSON.stringify(body.trigger_keywords||[]), body.trigger_sentiment||null, body.platform||'all', body.action||'reply', responseTemplate, agentId, body.max_per_hour||10, 1).run();
      await log(env.DB, 'auto_engage_created', id, `Auto-engage rule: ${body.name} (${body.type||'auto-reply'})`, agent.name);
      return json({ id, name: body.name, type: body.type||'auto-reply', agent: agent.name, response_template: responseTemplate, active: true }, 201);
    }

    // ── List auto-engage rules ──
    if (path === '/api/auto-engage' && method === 'GET') {
      const rules = (await env.DB.prepare('SELECT * FROM br_auto_engage ORDER BY active DESC, executions DESC, created_at DESC LIMIT 100').all()).results;
      const recentLogs = (await env.DB.prepare('SELECT * FROM br_auto_engage_log ORDER BY created_at DESC LIMIT 50').all()).results;

      const totalExecutions = rules.reduce((s, r) => s + r.executions, 0);
      const activeRules = rules.filter(r => r.active);

      return json({
        rules: rules.map(r => ({...r, trigger_keywords: JSON.parse(r.trigger_keywords||'[]')})),
        recent_activity: recentLogs,
        total_rules: rules.length,
        active_rules: activeRules.length,
        total_executions: totalExecutions,
      });
    }

    // ── Trigger auto-engage (process incoming content against rules) ──
    if (path === '/api/auto-engage/trigger' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const content = body.content.toLowerCase();
      const sentiment = quickSentiment(body.content);
      const platform = body.platform || 'all';

      const rules = (await env.DB.prepare("SELECT * FROM br_auto_engage WHERE active=1").all()).results;
      const triggered = [];

      for (const rule of rules) {
        if (rule.platform !== 'all' && rule.platform !== platform) continue;

        // Check sentiment trigger
        if (rule.trigger_sentiment) {
          if (rule.trigger_sentiment === 'positive' && sentiment.score < 0.2) continue;
          if (rule.trigger_sentiment === 'negative' && sentiment.score > -0.2) continue;
          if (rule.trigger_sentiment === 'neutral' && Math.abs(sentiment.score) > 0.2) continue;
        }

        // Check keyword triggers
        const keywords = JSON.parse(rule.trigger_keywords || '[]');
        let matched = keywords.length === 0; // if no keywords, match on sentiment alone
        let matchedKeyword = '';
        for (const kw of keywords) {
          if (content.includes(kw.toLowerCase())) {
            matched = true;
            matchedKeyword = kw;
            break;
          }
        }
        if (!matched) continue;

        // Generate response
        const agent = SOCIAL_AGENTS[rule.agent_id] || SOCIAL_AGENTS.aria;
        let response = rule.response_template ? rule.response_template.replace(/\{\{keyword\}\}/g, matchedKeyword) : '';

        if (!response || body.generate_fresh) {
          try {
            const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
              messages: [
                { role: 'system', content: `You are ${agent.name}. Style: ${agent.style}. Write a brief, warm reply to this ${platform} comment. 1-2 sentences. Stay on-brand for BlackRoad OS.` },
                { role: 'user', content: body.content },
              ], max_tokens: 100,
            });
            if (aiR.response) response = aiR.response.trim();
          } catch { response = rule.response_template || 'Thanks for being part of the journey.'; }
        }

        // Log execution
        const logId = crypto.randomUUID();
        await env.DB.prepare('INSERT INTO br_auto_engage_log (id,rule_id,trigger_content,response_content,platform,target_handle,agent_name,sentiment_score) VALUES (?,?,?,?,?,?,?,?)')
          .bind(logId, rule.id, body.content.slice(0, 500), response, platform, body.from_handle||'', agent.name, sentiment.score).run();
        await env.DB.prepare('UPDATE br_auto_engage SET executions=executions+1, updated_at=datetime(\'now\') WHERE id=?').bind(rule.id).run();

        triggered.push({ rule_id: rule.id, rule_name: rule.name, agent: agent.name, response, matched_keyword: matchedKeyword, action: rule.action });
      }

      return json({ content_preview: body.content.slice(0, 200), sentiment, triggered, rules_checked: rules.length, rules_fired: triggered.length });
    }

    // ── Toggle auto-engage rule ──
    const autoEngageMatch = path.match(/^\/api\/auto-engage\/([^/]+)\/(activate|deactivate)$/);
    if (autoEngageMatch && method === 'POST') {
      const [, ruleId, action] = autoEngageMatch;
      await env.DB.prepare("UPDATE br_auto_engage SET active=?, updated_at=datetime('now') WHERE id=?").bind(action === 'activate' ? 1 : 0, ruleId).run();
      return json({ ok: true, id: ruleId, active: action === 'activate' });
    }

    // ── Delete auto-engage rule ──
    const autoEngageDelMatch = path.match(/^\/api\/auto-engage\/([^/]+)$/);
    if (autoEngageDelMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_auto_engage WHERE id=?').bind(autoEngageDelMatch[1]).run();
      await env.DB.prepare('DELETE FROM br_auto_engage_log WHERE rule_id=?').bind(autoEngageDelMatch[1]).run();
      return json({ ok: true, deleted: autoEngageDelMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 22. PLATFORM INSIGHTS
    // ═══════════════════════════════════════════════════════

    // ── Get insights for a platform ──
    if (path === '/api/insights' && method === 'GET') {
      const platform = url.searchParams.get('platform') || 'all';
      const period = url.searchParams.get('period') || '30d';
      const daysMap = { '7d': 7, '30d': 30, '90d': 90 };
      const days = daysMap[period] || 30;

      // Gather data from posts for the platform
      let postFilter = `created_at >= datetime('now', '-${days} days')`;
      const params = [];
      if (platform !== 'all') {
        postFilter += ` AND platforms LIKE ?`;
        params.push(`%${platform}%`);
      }

      const postData = params.length
        ? (await env.DB.prepare(`SELECT * FROM br_posts WHERE ${postFilter} ORDER BY created_at DESC LIMIT 500`).bind(...params).all()).results
        : (await env.DB.prepare(`SELECT * FROM br_posts WHERE ${postFilter} ORDER BY created_at DESC LIMIT 500`).all()).results;

      // Best posting hours
      const hourBuckets = {};
      for (const p of postData) {
        const hour = new Date(p.created_at).getHours();
        if (!hourBuckets[hour]) hourBuckets[hour] = { posts: 0, total_engagement: 0, total_reach: 0 };
        hourBuckets[hour].posts++;
        hourBuckets[hour].total_engagement += (p.engagement_likes||0) + (p.engagement_shares||0) + (p.engagement_comments||0);
        hourBuckets[hour].total_reach += p.engagement_reach || 0;
      }
      const bestHours = Object.entries(hourBuckets)
        .map(([h, d]) => ({ hour: parseInt(h), ...d, avg_engagement: d.posts ? Math.round(d.total_engagement / d.posts) : 0 }))
        .sort((a, b) => b.avg_engagement - a.avg_engagement)
        .slice(0, 5);

      // Best day of week
      const dayBuckets = {};
      const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      for (const p of postData) {
        const dayIdx = new Date(p.created_at).getDay();
        const day = dayNames[dayIdx];
        if (!dayBuckets[day]) dayBuckets[day] = { posts: 0, total_engagement: 0 };
        dayBuckets[day].posts++;
        dayBuckets[day].total_engagement += (p.engagement_likes||0) + (p.engagement_shares||0) + (p.engagement_comments||0);
      }
      const bestDays = Object.entries(dayBuckets)
        .map(([d, data]) => ({ day: d, ...data, avg_engagement: data.posts ? Math.round(data.total_engagement / data.posts) : 0 }))
        .sort((a, b) => b.avg_engagement - a.avg_engagement);

      // Content type analysis (based on agent who handled it)
      const agentPerformance = {};
      for (const p of postData) {
        const agent = p.agent_name || 'unknown';
        if (!agentPerformance[agent]) agentPerformance[agent] = { posts: 0, total_engagement: 0, total_reach: 0 };
        agentPerformance[agent].posts++;
        agentPerformance[agent].total_engagement += (p.engagement_likes||0) + (p.engagement_shares||0) + (p.engagement_comments||0);
        agentPerformance[agent].total_reach += p.engagement_reach || 0;
      }

      // Posting frequency
      const totalPosts = postData.length;
      const postsPerDay = totalPosts / Math.max(days, 1);
      let frequencyAdvice = 'Post more frequently to build momentum.';
      if (postsPerDay >= 3) frequencyAdvice = 'High frequency. Consider focusing on quality over quantity.';
      else if (postsPerDay >= 1) frequencyAdvice = 'Good posting frequency. Stay consistent.';
      else if (postsPerDay >= 0.5) frequencyAdvice = 'Moderate frequency. Try to post daily for best results.';

      // AI-generated recommendations
      let recommendations = [];
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a social media strategist analyzing ${platform} performance. Given the data, provide 3-5 specific, actionable recommendations. Return ONLY a JSON array of strings. No explanation.` },
            { role: 'user', content: `Platform: ${platform}. Period: ${days} days. Posts: ${totalPosts}. Posts/day: ${postsPerDay.toFixed(1)}. Best hours: ${bestHours.slice(0,3).map(h=>h.hour+'h').join(',')}. Best days: ${bestDays.slice(0,2).map(d=>d.day).join(',')}. Top agents: ${Object.entries(agentPerformance).slice(0,3).map(([a,d])=>`${a}(${d.posts})`).join(',')}.` },
          ], max_tokens: 256,
        });
        if (aiR.response) {
          const match = aiR.response.match(/\[[\s\S]*\]/);
          if (match) recommendations = JSON.parse(match[0]);
        }
      } catch {}
      if (recommendations.length === 0) {
        recommendations = [frequencyAdvice, 'Experiment with different content formats.', 'Engage with your audience through replies and polls.'];
      }

      // Save insights
      const insightId = crypto.randomUUID();
      try {
        await env.DB.prepare('INSERT INTO br_insights (id,platform,metric_type,metric_value,period,confidence,recommendation) VALUES (?,?,?,?,?,?,?)')
          .bind(insightId, platform, 'deep_analysis', JSON.stringify({ best_hours: bestHours, best_days: bestDays, frequency: postsPerDay }), period, 0.7, recommendations.join('; ')).run();
      } catch {}

      return json({
        platform, period, days,
        overview: { total_posts: totalPosts, posts_per_day: Math.round(postsPerDay * 10) / 10, frequency_advice: frequencyAdvice },
        best_posting_times: bestHours,
        best_days: bestDays,
        agent_performance: agentPerformance,
        recommendations,
      });
    }

    // ── Get stored insights history ──
    if (path === '/api/insights/history' && method === 'GET') {
      const platform = url.searchParams.get('platform');
      let q = 'SELECT * FROM br_insights';
      const p = [];
      if (platform) { q += ' WHERE platform=?'; p.push(platform); }
      q += ' ORDER BY created_at DESC LIMIT 50';
      const insights = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;
      return json({ insights: insights.map(i => ({...i, metric_value: JSON.parse(i.metric_value||'{}')})), total: insights.length });
    }

    // ═══════════════════════════════════════════════════════
    // 23. COLLABORATION REQUESTS
    // ═══════════════════════════════════════════════════════

    // ── Create collab request ──
    if (path === '/api/collab-requests' && method === 'POST') {
      const body = await request.json();
      if (!body.brand_name) return json({ error: 'brand_name required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO br_collab_requests (id,brand_name,contact_name,contact_email,platform,direction,status,type,description,terms,deliverables,budget,deadline,notes,agent_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, body.brand_name, body.contact_name||'', body.contact_email||'', body.platform||'all', body.direction||'inbound', 'pending', body.type||'content', body.description||'', body.terms||'', JSON.stringify(body.deliverables||[]), body.budget||0, body.deadline||null, body.notes||'', body.agent_id||'sebastian').run();
      await log(env.DB, 'collab_request', id, `Collab request ${body.direction||'inbound'}: ${body.brand_name} (${body.type||'content'})`, null);

      // AI draft response for inbound requests
      let suggestedResponse = '';
      if ((body.direction || 'inbound') === 'inbound') {
        const agent = SOCIAL_AGENTS.sebastian || SOCIAL_AGENTS.thalia;
        try {
          const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${agent.name} from BlackRoad OS. Style: ${agent.style}. Draft a professional, warm response to an inbound brand collaboration request. 2-3 sentences. Express interest and suggest next steps.` },
              { role: 'user', content: `Brand: ${body.brand_name}. Type: ${body.type||'content'}. Description: ${body.description||'Brand collaboration opportunity'}.` },
            ], max_tokens: 150,
          });
          if (aiR.response) suggestedResponse = aiR.response.trim();
        } catch {}
      }

      return json({ id, brand_name: body.brand_name, direction: body.direction||'inbound', status: 'pending', type: body.type||'content', suggested_response: suggestedResponse }, 201);
    }

    // ── List collab requests ──
    if (path === '/api/collab-requests' && method === 'GET') {
      const direction = url.searchParams.get('direction');
      const status = url.searchParams.get('status');
      let q = 'SELECT * FROM br_collab_requests'; const p = []; const w = [];
      if (direction) { w.push('direction=?'); p.push(direction); }
      if (status) { w.push('status=?'); p.push(status); }
      if (w.length) q += ' WHERE ' + w.join(' AND ');
      q += ' ORDER BY created_at DESC LIMIT 100';
      const requests = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;

      const stats = await env.DB.prepare("SELECT COUNT(*) as total, SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END) as pending, SUM(CASE WHEN status='accepted' THEN 1 ELSE 0 END) as accepted, SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END) as completed, SUM(CASE WHEN direction='inbound' THEN 1 ELSE 0 END) as inbound, SUM(CASE WHEN direction='outbound' THEN 1 ELSE 0 END) as outbound, COALESCE(SUM(budget),0) as total_budget FROM br_collab_requests").first();

      return json({ requests: requests.map(r => ({...r, deliverables: JSON.parse(r.deliverables||'[]')})), total: requests.length, stats });
    }

    // ── Get single collab request ──
    const collabMatch = path.match(/^\/api\/collab-requests\/([^/]+)$/);
    if (collabMatch && method === 'GET') {
      const req = await env.DB.prepare('SELECT * FROM br_collab_requests WHERE id=?').bind(collabMatch[1]).first();
      if (!req) return json({ error: 'Not found' }, 404);
      return json({ request: { ...req, deliverables: JSON.parse(req.deliverables||'[]') } });
    }

    // ── Update collab request status ──
    if (collabMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['brand_name','contact_name','contact_email','platform','direction','status','type','description','terms','notes','agent_id','deadline']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (body.deliverables) { sets.push('deliverables=?'); vals.push(JSON.stringify(body.deliverables)); }
      if (body.budget !== undefined) { sets.push('budget=?'); vals.push(body.budget); }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      sets.push("updated_at=datetime('now')");
      vals.push(collabMatch[1]);
      await env.DB.prepare(`UPDATE br_collab_requests SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      await log(env.DB, 'collab_updated', collabMatch[1], `Collab request updated: ${body.status || 'modified'}`, null);
      return json({ ok: true, id: collabMatch[1] });
    }

    // ── Delete collab request ──
    if (collabMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_collab_requests WHERE id=?').bind(collabMatch[1]).run();
      return json({ ok: true, deleted: collabMatch[1] });
    }

    // ═══════════════════════════════════════════════════════
    // 24. SOCIAL PROOF
    // ═══════════════════════════════════════════════════════

    // ── Add social proof (testimonial, case study, metric badge) ──
    if (path === '/api/social-proof' && method === 'POST') {
      const body = await request.json();
      if (!body.content) return json({ error: 'content required' }, 400);
      const id = crypto.randomUUID();
      const type = body.type || 'testimonial';

      await env.DB.prepare('INSERT INTO br_social_proof (id,type,author_name,author_handle,author_title,content,rating,platform,source_url,metric_label,metric_value,badge_style,featured,approved,campaign_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
        .bind(id, type, body.author_name||'', body.author_handle||'', body.author_title||'', body.content, body.rating||5, body.platform||'', body.source_url||'', body.metric_label||'', body.metric_value||'', body.badge_style||'default', body.featured?1:0, body.approved!==false?1:0, body.campaign_id||null).run();
      await log(env.DB, 'social_proof_added', id, `Social proof (${type}): ${body.author_name||'anonymous'}`, null);

      // Generate embed code
      const embedCode = `<div class="br-social-proof" data-id="${id}" data-type="${type}"><blockquote><p>${body.content.replace(/</g,'&lt;')}</p><cite>${body.author_name||''}${body.author_title ? ', ' + body.author_title : ''}</cite></blockquote></div><script src="https://backroad.blackroad.io/embed.js" async></script>`;

      await env.DB.prepare('UPDATE br_social_proof SET embed_code=? WHERE id=?').bind(embedCode, id).run();

      return json({ id, type, author: body.author_name||'anonymous', rating: body.rating||5, embed_code: embedCode, approved: body.approved !== false }, 201);
    }

    // ── List social proof ──
    if (path === '/api/social-proof' && method === 'GET') {
      const type = url.searchParams.get('type');
      const featured = url.searchParams.get('featured');
      const format = url.searchParams.get('format'); // json (default) or embed
      let q = 'SELECT * FROM br_social_proof WHERE approved=1'; const p = [];
      if (type) { q += ' AND type=?'; p.push(type); }
      if (featured === 'true') { q += ' AND featured=1'; }
      q += ' ORDER BY featured DESC, rating DESC, created_at DESC LIMIT 100';
      const items = p.length ? (await env.DB.prepare(q).bind(...p).all()).results : (await env.DB.prepare(q).all()).results;

      // Stats
      const stats = await env.DB.prepare("SELECT COUNT(*) as total, AVG(rating) as avg_rating, SUM(CASE WHEN type='testimonial' THEN 1 ELSE 0 END) as testimonials, SUM(CASE WHEN type='case_study' THEN 1 ELSE 0 END) as case_studies, SUM(CASE WHEN type='metric' THEN 1 ELSE 0 END) as metrics, SUM(CASE WHEN featured=1 THEN 1 ELSE 0 END) as featured_count FROM br_social_proof WHERE approved=1").first();

      if (format === 'embed') {
        // Return embeddable HTML widget
        const widget = `<!DOCTYPE html><html><head><style>
.br-sp{font-family:system-ui,sans-serif;max-width:600px;margin:0 auto}.br-sp-item{border:1px solid #1a1a1a;border-radius:8px;background:#0a0a0a;padding:20px;margin:12px 0;color:#f5f5f5}.br-sp-content{font-size:14px;line-height:1.6;margin-bottom:12px}.br-sp-author{font-size:12px;color:#737373}.br-sp-rating{color:#f5a623;margin-bottom:8px}.br-sp-metric{font-size:32px;font-weight:700;color:#00D4FF}.br-sp-label{font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:.05em}
</style></head><body><div class="br-sp">${items.map(i => {
          if (i.type === 'metric') return `<div class="br-sp-item"><div class="br-sp-metric">${i.metric_value}</div><div class="br-sp-label">${i.metric_label}</div></div>`;
          return `<div class="br-sp-item">${i.rating ? `<div class="br-sp-rating">${'*'.repeat(i.rating)}</div>` : ''}<div class="br-sp-content">${i.content}</div><div class="br-sp-author">${i.author_name||''}${i.author_title ? ', ' + i.author_title : ''}</div></div>`;
        }).join('')}</div></body></html>`;
        return new Response(widget, { headers: { ...CORS, 'Content-Type': 'text/html;charset=UTF-8' } });
      }

      return json({ items, total: items.length, stats: { ...stats, avg_rating: Math.round((stats.avg_rating||0) * 10) / 10 } });
    }

    // ── Get single social proof ──
    const proofMatch = path.match(/^\/api\/social-proof\/([^/]+)$/);
    if (proofMatch && method === 'GET') {
      const item = await env.DB.prepare('SELECT * FROM br_social_proof WHERE id=?').bind(proofMatch[1]).first();
      if (!item) return json({ error: 'Not found' }, 404);
      return json({ item });
    }

    // ── Update social proof ──
    if (proofMatch && method === 'PUT') {
      const body = await request.json();
      const sets = []; const vals = [];
      for (const field of ['type','author_name','author_handle','author_title','content','platform','source_url','metric_label','metric_value','badge_style','campaign_id']) {
        if (body[field] !== undefined) { sets.push(`${field}=?`); vals.push(body[field]); }
      }
      if (body.rating !== undefined) { sets.push('rating=?'); vals.push(body.rating); }
      if (body.featured !== undefined) { sets.push('featured=?'); vals.push(body.featured?1:0); }
      if (body.approved !== undefined) { sets.push('approved=?'); vals.push(body.approved?1:0); }
      if (sets.length === 0) return json({ error: 'nothing to update' }, 400);
      sets.push("updated_at=datetime('now')");
      vals.push(proofMatch[1]);
      await env.DB.prepare(`UPDATE br_social_proof SET ${sets.join(',')} WHERE id=?`).bind(...vals).run();
      return json({ ok: true, id: proofMatch[1] });
    }

    // ── Delete social proof ──
    if (proofMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM br_social_proof WHERE id=?').bind(proofMatch[1]).run();
      return json({ ok: true, deleted: proofMatch[1] });
    }

    // ── Generate social proof summary (AI) ──
    if (path === '/api/social-proof/summary' && method === 'GET') {
      const items = (await env.DB.prepare("SELECT * FROM br_social_proof WHERE approved=1 ORDER BY rating DESC LIMIT 20").all()).results;
      if (items.length === 0) return json({ summary: 'No social proof collected yet. Add testimonials, case studies, or metrics with POST /api/social-proof.', items: [] });

      let summary = '';
      try {
        const aiR = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are a marketing analyst. Summarize these social proof items into a compelling 2-3 sentence summary that could be used on a landing page. Be specific about numbers and sentiment. Return ONLY the summary text.' },
            { role: 'user', content: JSON.stringify(items.map(i => ({ type: i.type, content: i.content.slice(0, 100), rating: i.rating, author: i.author_name }))) },
          ], max_tokens: 150,
        });
        if (aiR.response) summary = aiR.response.trim();
      } catch { summary = `${items.length} pieces of social proof collected with an average rating of ${(items.reduce((s,i)=>s+i.rating,0)/items.length).toFixed(1)}/5.`; }

      return json({ summary, total: items.length, avg_rating: Math.round((items.reduce((s,i)=>s+i.rating,0)/items.length)*10)/10, top_testimonials: items.filter(i=>i.type==='testimonial').slice(0,3) });
    }

    return json({ error: 'Not found', service: 'backroad', endpoints: [
      '/api/health','/api/stats','/api/agents','/api/posts','/api/posts/:id','/api/posts/:id/echo',
      '/api/reply','/api/ghost','/api/pulse','/api/feed','/api/campaigns','/api/replies/pending',
      '/api/platforms','/api/credentials/status','/api/credentials/:platform',
      '/api/publish/:postId','/api/quick-publish','/api/publish/blog',
      '/api/stream','/api/stream/start','/api/stream/viewers',
      '/api/calendar','/api/calendar/:id',
      '/api/analytics',
      '/api/hashtags','/api/hashtags/suggest',
      '/api/templates','/api/templates/use',
      '/api/ab-test','/api/ab-test/:id','/api/ab-test/:id/record','/api/ab-test/:id/end',
      '/api/personas','/api/personas/:id','/api/personas/generate',
      '/api/voice','/api/voice/:id','/api/voice/test',
      '/api/shorten','/api/shorten/:slug/stats','/r/:slug',
      '/api/influencers','/api/influencers/:id','/api/influencers/search',
      '/api/repurpose',
      '/api/sentiment',
      '/api/competitors','/api/competitors/:id','/api/competitors/compare',
      '/api/inbox','/api/inbox/:id/read','/api/inbox/:id/star','/api/inbox/:id/archive','/api/inbox/:id/reply','/api/inbox/mark-all-read',
      '/api/score',
      '/api/viral','/api/viral/:id/ack',
      '/api/roi','/api/roi/:id',
      '/api/story','/api/story/:id',
      '/api/memes','/api/memes/templates','/api/memes/:id',
      '/api/listening','/api/listening/:id','/api/listening/mention','/api/listening/scan',
      '/api/ugc','/api/ugc/:id','/api/ugc/:id/approve','/api/ugc/:id/feature','/api/ugc/:id/grant-rights','/api/ugc/:id/reject',
      '/api/auto-engage','/api/auto-engage/trigger','/api/auto-engage/:id/activate','/api/auto-engage/:id/deactivate','/api/auto-engage/:id',
      '/api/insights','/api/insights/history',
      '/api/collab-requests','/api/collab-requests/:id',
      '/api/social-proof','/api/social-proof/:id','/api/social-proof/summary'
    ] }, 404);
  },

  // ── Cron: Auto-publish scheduled posts ──
  async scheduled(event, env, ctx) {
    try {
      await ensureTables(env.DB);
      await ensureNewTables(env.DB);
      const due = await env.DB.prepare(
        "SELECT * FROM br_posts WHERE status='scheduled' AND schedule_at <= datetime('now')"
      ).all();

      for (const post of due.results) {
        const results = await publishPost(post, env);
        const anySuccess = results.some(r => r.success);
        await env.DB.prepare('UPDATE br_posts SET status=?, updated_at=datetime(\'now\') WHERE id=?')
          .bind(anySuccess ? 'published' : 'failed', post.id).run();
        await log(env.DB, 'cron_published', post.id, `Cron published to ${results.filter(r=>r.success).map(r=>r.platform).join(',')}`, null);
      }

      // Also update calendar entries
      await env.DB.prepare("UPDATE br_calendar SET status='published' WHERE status='scheduled' AND scheduled_at <= datetime('now')").run();
    } catch {}
  },
};

// ═══════════════════════════════════════════════════════
// PLATFORM CONNECTORS
// ═══════════════════════════════════════════════════════

async function publishPost(post, env) {
  const platforms = JSON.parse(post.platforms || '[]');
  const results = [];

  for (const platform of platforms) {
    const credRaw = await env.CREDS.get(`cred:${platform}`);
    if (!credRaw) { results.push({ platform, success: false, error: 'not configured' }); continue; }
    const cred = JSON.parse(credRaw);

    try {
      let result;
      switch (platform) {
        case 'instagram': result = await publishInstagram(post.content, cred, env); break;
        case 'threads': result = await publishThreads(post.content, cred, env); break;
        case 'x': result = await publishTwitter(post.content, cred); break;
        case 'devto': result = await publishBlog('devto', post.content.slice(0, 60), post.content, [], cred); break;
        default: result = { success: false, error: `Connector not implemented for ${platform}` };
      }
      results.push({ platform, ...result });
    } catch (e) {
      results.push({ platform, success: false, error: e.message });
    }
  }
  return results;
}

// ── Instagram (via Pi proxy) ──
async function publishInstagram(content, cred, env) {
  const proxyUrl = env.PUBLISH_PROXY_URL || 'http://192.168.4.49:9090';
  const resp = await fetch(`${proxyUrl}/publish/instagram`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Publish-Secret': env.PUBLISH_PROXY_SECRET || '' },
    body: JSON.stringify({ username: cred.username, password: cred.password, caption: content, image_path: cred.default_image || null }),
  });
  const data = await resp.json();
  return data.success ? { success: true, url: data.url } : { success: false, error: data.error || 'proxy failed' };
}

// ── Threads (via Pi proxy) ──
async function publishThreads(content, cred, env) {
  const proxyUrl = env.PUBLISH_PROXY_URL || 'http://192.168.4.49:9090';
  const resp = await fetch(`${proxyUrl}/publish/threads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Publish-Secret': env.PUBLISH_PROXY_SECRET || '' },
    body: JSON.stringify({ username: cred.username, password: cred.password, caption: content }),
  });
  const data = await resp.json();
  return data.success ? { success: true, url: data.url } : { success: false, error: data.error || 'proxy failed' };
}

// ── X/Twitter (OAuth 1.0a direct from Worker) ──
async function publishTwitter(content, cred) {
  const method = 'POST';
  const url = 'https://api.twitter.com/2/tweets';
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomUUID().replace(/-/g, '');

  const params = {
    oauth_consumer_key: cred.api_key,
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_token: cred.access_token,
    oauth_version: '1.0',
  };

  // Build signature base string
  const paramStr = Object.keys(params).sort().map(k => `${enc(k)}=${enc(params[k])}`).join('&');
  const baseStr = `${method}&${enc(url)}&${enc(paramStr)}`;
  const signingKey = `${enc(cred.api_secret)}&${enc(cred.access_secret)}`;

  // HMAC-SHA1
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(signingKey), { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(baseStr));
  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(sig)));

  params.oauth_signature = sigB64;
  const authHeader = 'OAuth ' + Object.keys(params).sort().map(k => `${enc(k)}="${enc(params[k])}"`).join(', ');

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': authHeader, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: content }),
  });

  const data = await resp.json();
  if (data.data?.id) {
    return { success: true, url: `https://x.com/i/web/status/${data.data.id}` };
  }
  return { success: false, error: JSON.stringify(data.errors || data) };
}

function enc(s) { return encodeURIComponent(s).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase()); }

// ── Blog Connectors (Dev.to, Medium, Hashnode) ──
async function publishBlog(platform, title, content, tags, cred) {
  switch (platform) {
    case 'devto': {
      const resp = await fetch('https://dev.to/api/articles', {
        method: 'POST',
        headers: { 'api-key': cred.api_key, 'Content-Type': 'application/json' },
        body: JSON.stringify({ article: { title, body_markdown: content, published: true, tags: tags.slice(0, 4) } }),
      });
      const data = await resp.json();
      return data.url ? { success: true, url: data.url } : { success: false, error: data.error || 'unknown' };
    }
    case 'medium': {
      const resp = await fetch(`https://api.medium.com/v1/users/${cred.author_id}/posts`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${cred.token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, contentFormat: 'markdown', content, publishStatus: 'public', tags: tags.slice(0, 5) }),
      });
      const data = await resp.json();
      return data.data?.url ? { success: true, url: data.data.url } : { success: false, error: JSON.stringify(data.errors || data) };
    }
    case 'hashnode': {
      const resp = await fetch('https://gql.hashnode.com', {
        method: 'POST',
        headers: { 'Authorization': cred.token, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `mutation { publishPost(input: { title: "${title.replace(/"/g, '\\"')}", contentMarkdown: "${content.replace(/"/g, '\\"').replace(/\n/g, '\\n')}", publicationId: "${cred.publication_id}", tags: [] }) { post { url } } }`,
        }),
      });
      const data = await resp.json();
      const postUrl = data?.data?.publishPost?.post?.url;
      return postUrl ? { success: true, url: postUrl } : { success: false, error: JSON.stringify(data.errors || data) };
    }
    default:
      return { success: false, error: `Unknown blog platform: ${platform}` };
  }
}
