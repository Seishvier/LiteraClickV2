/* ============ RESET & VARIABEL ============ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #f5f7fb;
  --bg-card: #ffffff;
  --bg-elevated: #ffffff;
  --text: #1a1a2e;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --border: #e5e7eb;
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #e0e7ff;
  --accent: #f59e0b;
  --success: #10b981;
  --danger: #ef4444;
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.12);
  --radius: 16px;
  --radius-sm: 10px;
}

body.dark {
  --bg: #0f172a;
  --bg-card: #1e293b;
  --bg-elevated: #293548;
  --text: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --border: #334155;
  --primary-light: #312e81;
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.4);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.3s, color 0.3s;
  min-height: 100vh;
  display: flex; /* Membuat layout kiri-kanan */
}

/* ============ SIDEBAR (KIRI) ============ */
.sidebar {
  width: 250px;
  background: var(--bg-card);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 100;
  transition: width 0.3s ease;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
  padding: 24px 20px;
  cursor: pointer;
}

.logo-icon { font-size: 1.8rem; }
.logo-text {
  font-weight: 800;
  font-size: 1.4rem;
  background: linear-gradient(135deg, var(--primary), #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 14px 20px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.2s;
  text-align: left;
}

.nav-btn:hover {
  background: var(--bg);
  color: var(--primary);
}

body.dark .nav-btn:hover { background: var(--bg-elevated); }

.nav-btn.active {
  background: var(--primary-light);
  color: var(--primary-dark);
}

body.dark .nav-btn.active { color: #e0e7ff; }

.nav-icon { font-size: 1.3rem; }

/* ============ MAIN WRAPPER (KANAN) ============ */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* Mencegah overflow */
  height: 100vh;
  overflow-y: auto;
}

/* ============ HEADER ============ */
.header {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 90;
}

.header-inner {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--text);
}

.header-stats {
  display: flex;
  gap: 12px;
  align-items: center;
}

.stat-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--primary-light);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-dark);
}

body.dark .stat-pill { color: #c7d2fe; }

.icon-btn {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.icon-btn:hover { transform: scale(1.1); }

/* ============ CONTAINER ============ */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
}

/* ============ PAGES ============ */
.page { display: none; animation: fadeIn 0.3s ease; }
.page.active { display: block; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============ HERO ============ */
.hero {
  background: linear-gradient(135deg, var(--primary) 0%, #a855f7 100%);
  border-radius: var(--radius);
  padding: 32px;
  color: white;
  margin-bottom: 32px;
  box-shadow: var(--shadow-lg);
}

.hero-greeting h1 { font-size: 1.6rem; font-weight: 800; margin-bottom: 4px; }
.hero-greeting p { opacity: 0.9; font-size: 1rem; margin-bottom: 24px; }

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.hero-stat {
  background: rgba(255,255,255,0.18);
  border-radius: var(--radius-sm);
  padding: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.hero-stat-value { font-size: 1.8rem; font-weight: 800; line-height: 1; }
.hero-stat-label { font-size: 0.75rem; opacity: 0.9; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px; }

/* ============ SECTION TITLE ============ */
.section-title { font-size: 1.2rem; font-weight: 800; margin: 32px 0 16px; display: flex; align-items: center; gap: 8px; }

/* ============ MISI CARD ============ */
.misi-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--primary-light);
  position: relative;
  overflow: hidden;
}

.misi-card::before {
  content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 6px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
}

.misi-card-emoji { font-size: 3rem; margin-bottom: 12px; }
.misi-card-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 8px; }
.misi-card-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px; }
.misi-card-excerpt { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 20px; }

/* ============ ARTICLE GRID ============ */
.article-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .article-grid { grid-template-columns: 1fr 1fr; } }

.article-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.article-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.article-card-emoji { font-size: 2.2rem; flex-shrink: 0; }
.article-card-body { flex: 1; min-width: 0; }

.article-card-cat {
  display: inline-block; font-size: 0.7rem; font-weight: 700;
  color: var(--primary); background: var(--primary-light);
  padding: 4px 10px; border-radius: 999px; margin-bottom: 8px;
  text-transform: uppercase; letter-spacing: 0.5px;
}

.article-card-title { font-weight: 700; font-size: 1rem; line-height: 1.4; margin-bottom: 6px; }
.article-card-meta { font-size: 0.8rem; color: var(--text-muted); }
.article-card.done { opacity: 0.6; }
.article-card.done .article-card-title::after { content: " ✓"; color: var(--success); }

/* ============ ARTICLE PAGE ============ */
.back-btn {
  background: transparent; border: 1px solid var(--border); padding: 10px 20px;
  border-radius: var(--radius-sm); color: var(--text); cursor: pointer;
  font-weight: 600; margin-bottom: 24px; transition: background 0.2s;
}
.back-btn:hover { background: var(--bg-card); }

.article-full { background: var(--bg-card); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow); }
.article-meta { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
.article-full h1 { font-size: 1.8rem; line-height: 1.3; margin-bottom: 24px; font-weight: 800; }
.article-body { color: var(--text); font-size: 1.05rem; line-height: 1.8; }
.article-body p { margin-bottom: 20px; }
.article-body h3 { margin: 24px 0 12px; font-size: 1.2rem; font-weight: 700; }
.article-body ul, .article-body ol { margin: 0 0 20px 24px; }
.article-body li { margin-bottom: 8px; }

.article-actions { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border); }

/* ============ BUTTONS ============ */
.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white; border: none; padding: 14px 28px; border-radius: var(--radius-sm);
  font-size: 1rem; font-weight: 700; cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); }
.btn-primary.full { width: 100%; }

.btn-secondary { background: var(--bg-elevated); color: var(--text); border: 1px solid var(--border); padding: 10px 20px; border-radius: var(--radius-sm); font-weight: 600; cursor: pointer; }
.btn-secondary.small { padding: 8px 16px; font-size: 0.85rem; }
.btn-danger { background: var(--danger); color: white; border: none; padding: 12px 24px; border-radius: var(--radius-sm); font-weight: 600; cursor: pointer; }

/* ============ QUIZ ============ */
.quiz-container { background: var(--bg-card); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow); }
.quiz-header { margin-bottom: 32px; }
.quiz-progress { height: 8px; background: var(--border); border-radius: 999px; overflow: hidden; margin-bottom: 12px; }
.quiz-progress-bar { height: 100%; background: linear-gradient(90deg, var(--primary), #a855f7); width: 0%; transition: width 0.4s ease; border-radius: 999px; }
.quiz-counter { font-size: 0.9rem; color: var(--text-secondary); font-weight: 600; }
.quiz-question { font-size: 1.3rem; font-weight: 700; line-height: 1.4; margin-bottom: 24px; }
.quiz-options { display: flex; flex-direction: column; gap: 12px; }

.quiz-option {
  background: var(--bg-elevated); border: 2px solid var(--border);
  padding: 16px 20px; border-radius: var(--radius-sm); cursor: pointer;
  text-align: left; font-size: 1rem; color: var(--text);
  transition: all 0.2s; font-family: inherit;
}
.quiz-option:hover { border-color: var(--primary); background: var(--primary-light); }
body.dark .quiz-option:hover { background: var(--primary-light); color: #e0e7ff; }
.quiz-option.selected { border-color: var(--primary); background: var(--primary-light); font-weight: 700; }
body.dark .quiz-option.selected { color: #e0e7ff; }
.quiz-option.correct { border-color: var(--success); background: #d1fae5; color: #065f46; }
.quiz-option.wrong { border-color: var(--danger); background: #fee2e2; color: #991b1b; }
.quiz-option:disabled { cursor: default; }

.quiz-result { text-align: center; padding: 24px 0; }
.quiz-result-emoji { font-size: 4.5rem; margin-bottom: 16px; animation: bounce 0.6s ease; }
@keyframes bounce { 0% { transform: scale(0); } 60% { transform: scale(1.2); } 100% { transform: scale(1); } }
.quiz-result-title { font-size: 1.6rem; font-weight: 800; margin-bottom: 12px; }
.quiz-result-score { font-size: 3.5rem; font-weight: 800; background: linear-gradient(135deg, var(--primary), #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 12px; }
.quiz-result-sub { color: var(--text-secondary); margin-bottom: 24px; }
.quiz-result-points { display: inline-flex; align-items: center; gap: 8px; background: var(--primary-light); color: var(--primary-dark); padding: 12px 24px; border-radius: 999px; font-weight: 800; font-size: 1.2rem; margin-bottom: 32px; }
body.dark .quiz-result-points { color: #e0e7ff; }
.quiz-result-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* ============ LEADERBOARD ============ */
.page-title { font-size: 1.8rem; font-weight: 800; margin-bottom: 8px; }
.page-sub { color: var(--text-secondary); margin-bottom: 24px; font-size: 1rem; }
.leaderboard { display: flex; flex-direction: column; gap: 12px; }
.lb-item { background: var(--bg-card); border-radius: var(--radius-sm); padding: 16px 20px; display: flex; align-items: center; gap: 16px; box-shadow: var(--shadow); border: 1px solid var(--border); }
.lb-item.you { border: 2px solid var(--primary); background: var(--primary-light); }
body.dark .lb-item.you { background: var(--primary-light); }
.lb-rank { font-weight: 800; font-size: 1.2rem; width: 36px; text-align: center; color: var(--text-secondary); flex-shrink: 0; }
.lb-item:nth-child(1) .lb-rank { color: #f59e0b; font-size: 1.5rem; }
.lb-item:nth-child(2) .lb-rank { color: #94a3b8; font-size: 1.5rem; }
.lb-item:nth-child(3) .lb-rank { color: #cd7f32; font-size: 1.5rem; }
.lb-name { flex: 1; font-weight: 600; font-size: 1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lb-points { font-weight: 800; color: var(--primary); font-size: 1rem; display: flex; align-items: center; gap: 6px; }
.lb-you-badge { font-size: 0.7rem; background: var(--primary); color: white; padding: 2px 10px; border-radius: 999px; font-weight: 700; margin-left: 8px; }

/* ============ PROFILE ============ */
.profile-card { background: var(--bg-card); border-radius: var(--radius); padding: 32px; text-align: center; box-shadow: var(--shadow); margin-bottom: 24px; }
.profile-avatar { font-size: 4rem; margin-bottom: 12px; }
.profile-name { font-size: 1.5rem; font-weight: 800; margin-bottom: 4px; }
.profile-class { color: var(--text-secondary); font-size: 1rem; margin-bottom: 20px; }
.profile-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
.profile-stat-box { background: var(--bg-card); border-radius: var(--radius-sm); padding: 20px 12px; text-align: center; box-shadow: var(--shadow); }
.profile-stat-value { font-size: 1.8rem; font-weight: 800; color: var(--primary); }
.profile-stat-label { font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; }
.badge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.badge-item { background: var(--bg-card); border-radius: var(--radius-sm); padding: 20px 16px; text-align: center; box-shadow: var(--shadow); border: 1px solid var(--border); transition: transform 0.2s; }
.badge-item:hover { transform: translateY(-3px); }
.badge-item.locked { opacity: 0.4; filter: grayscale(1); }
.badge-emoji { font-size: 2.5rem; margin-bottom: 8px; }
.badge-name { font-weight: 700; font-size: 0.9rem; margin-bottom: 4px; }
.badge-desc { font-size: 0.75rem; color: var(--text-secondary); }
.danger-zone { margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--border); text-align: center; }

/* ============ MODAL ============ */
.modal { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: none; align-items: center; justify-content: center; padding: 20px; z-index: 1000; backdrop-filter: blur(4px); }
.modal.active { display: flex; }
.modal-content { background: var(--bg-card); border-radius: var(--radius); padding: 32px 24px; max-width: 400px; width: 100%; text-align: center; animation: slideUp 0.3s ease; }
@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.modal-emoji { font-size: 3.5rem; margin-bottom: 12px; }
.modal-content h2 { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; }
.modal-sub { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; }
.modal-content input { width: 100%; padding: 14px 16px; border-radius: var(--radius-sm); border: 2px solid var(--border); background: var(--bg-elevated); color: var(--text); font-size: 1rem; font-family: inherit; margin-bottom: 16px; transition: border 0.2s; }
.modal-content input:focus { outline: none; border-color: var(--primary); }

/* ============ TOAST ============ */
.toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--text); color: var(--bg); padding: 14px 24px; border-radius: 999px; font-weight: 700; font-size: 0.95rem; box-shadow: var(--shadow-lg); z-index: 999; opacity: 0; transition: all 0.3s ease; pointer-events: none; max-width: 90vw; text-align: center; }
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ============ RESPONSIVE (MOBILE) ============ */
@media (max-width: 768px) {
  body { flex-direction: row; }
  
  .sidebar { width: 75px; }
  .logo { padding: 20px 0; justify-content: center; }
  .logo-text { display: none; }
  .nav-menu { padding: 10px 8px; }
  .nav-btn { padding: 14px 0; justify-content: center; flex-direction: column; gap: 4px; }
  .nav-label { font-size: 0.65rem; }
  
  .container { padding: 16px; }
  .hero { padding: 20px; }
  .hero-greeting h1 { font-size: 1.3rem; }
  .hero-stat-value { font-size: 1.4rem; }
  
  .header-inner { padding: 12px 16px; }
  .header-title { font-size: 1rem; }
  .stat-pill { font-size: 0.8rem; padding: 4px 10px; }
  
  .article-full { padding: 20px; }
  .article-full h1 { font-size: 1.4rem; }
  
  .quiz-container { padding: 20px; }
  .quiz-question { font-size: 1.1rem; }
  
  .profile-card { padding: 20px; }
  .profile-stats { gap: 8px; }
  .profile-stat-box { padding: 16px 8px; }
  .profile-stat-value { font-size: 1.4rem; }
}
