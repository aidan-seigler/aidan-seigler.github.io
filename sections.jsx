// sections.jsx — section components for the portfolio

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-dot"></span>
          <span>aidan_seigler</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#about">about</a>
          <a className="nav-link" href="#experience">experience</a>
          <a className="nav-link" href="#skills">skills</a>
          <a className="nav-link" href="#projects">projects</a>
          <a className="nav-cta" href="mailto:aidanseigler@gmail.com">
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)'}}></span>
            get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-eyebrow">
          <span className="hero-status-dot"></span>
          <span>IT Support · Southwest Solutions Group · Dallas, TX</span>
        </div>
        <h1>
          Keeping the<br/>
          <span className="accent">systems &amp; people</span><br/>
          running smoothly.
        </h1>
        <p className="hero-sub">
          I'm Aidan — an IT &amp; Systems professional based in Dallas. I run endpoints, identity, and helpdesk operations day-to-day, and reach for SQL and Python when the systems we use can't answer the question on their own.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </a>
          <a className="btn" href="uploads/AidanSeigler.pdf" target="_blank" rel="noreferrer">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1V8M6 8L3 5M6 8L9 5M2 10H10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download résumé
          </a>
          <a className="btn" href="https://www.linkedin.com/in/aidanseigler" target="_blank" rel="noreferrer">
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-cell">
            <div className="hero-meta-label">Based in</div>
            <div className="hero-meta-value">Addison, TX</div>
          </div>
          <div className="hero-meta-cell">
            <div className="hero-meta-label">Education</div>
            <div className="hero-meta-value">B.S. ITS, UT Dallas · 2025</div>
          </div>
          <div className="hero-meta-cell">
            <div className="hero-meta-label">Tickets resolved</div>
            <div className="hero-meta-value">3,000+</div>
          </div>
          <div className="hero-meta-cell">
            <div className="hero-meta-label">Focus</div>
            <div className="hero-meta-value">Endpoints · Identity · M365</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head-l">
            <span className="sec-num">01 /</span>
            <h2 className="sec-title">About</h2>
          </div>
          <div className="sec-aside">background &amp; approach</div>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I sit at the seam where <strong>systems, users, and data</strong> meet — keeping endpoints, identity, and Microsoft 365 healthy, owning the helpdesk experience end-to-end, and occasionally writing SQL or Python when the tools we already have can't answer the question on their own.
            </p>
            <p>
              At <strong>Southwest Solutions Group</strong> I've grown from intern to IT Support, where I've shipped a 90% reduction in device setup time, resolved 3,000+ tickets across endpoints, networking, M365 and security, and rebuilt the Jira intake forms our team relies on every day.
            </p>
            <p>
              I graduated from <strong>UT Dallas</strong> in December 2025 with a B.S. in Information Technology &amp; Systems. I like the boring, durable work: clear runbooks, clean inventories, predictable deployments — and the small automations that make all of those things easier to keep clean.
            </p>
          </div>
          <aside className="about-side">
            <h4>At a glance</h4>
            <ul>
              <li><span>Name</span><span>Aidan Seigler</span></li>
              <li><span>Location</span><span>Addison, TX</span></li>
              <li><span>Graduated</span><span>Dec 2025</span></li>
              <li><span>Degree</span><span>B.S. IT &amp; Systems</span></li>
              <li><span>GPA</span><span>3.26 · Comet Transfer</span></li>
              <li><span>Focus</span><span>IT Systems &amp; Ops</span></li>
              <li><span>Currently</span><span style={{color:'var(--accent)'}}>IT Support, SSG</span></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    {
      period: "May 2025",
      end:    "Present",
      now:    true,
      role:   "IT Support",
      company:"Southwest Solutions Group",
      loc:    "Dallas, TX",
      bullets:[
        "Wrote SQL against Microsoft SQL Server to surface troubleshooting and operational data the standard management tools couldn't expose.",
        "Cleaned and reconciled endpoint inventory across CSV exports, MDM datasets, and cross-system comparisons to identify stale, duplicate, and inactive device records.",
        "Designed structured Jira Service Management intake forms — standardized ticket fields, improved data quality, and unlocked cleaner reporting on recurring IT issues.",
        "Resolved and documented 3,000+ tickets spanning endpoints, networking, Microsoft 365, security incidents, telephony, and internal business systems."
      ],
      tags: ["SQL Server","Jira","MDM","M365","Endpoint","Networking"]
    },
    {
      period: "May 2024",
      end:    "May 2025",
      role:   "Information Systems Intern",
      company:"Southwest Solutions Group",
      loc:    "Dallas, TX",
      bullets:[
        "Developed and modified SQL queries in Microsoft Report Builder to support operational reporting and improve report accuracy.",
        "Created a repeatable process for migrating locally-joined Active Directory computers to Microsoft Intune MDM — cutting device setup time by ~90% and tightening endpoint security.",
        "Resolved Jira helpdesk tickets across security access, vulnerability remediation, compliance issues, and endpoint support."
      ],
      tags: ["Report Builder","Active Directory","Intune","Security","Compliance"]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head-l">
            <span className="sec-num">02 /</span>
            <h2 className="sec-title">Experience</h2>
          </div>
          <div className="sec-aside">{items.length} roles · same team, growing scope</div>
        </div>
        <div className="exp-list">
          {items.map((it, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-period">
                {it.period} → {it.end}
                {it.now && <div className="now">● Current</div>}
              </div>
              <div>
                <h3 className="exp-role">{it.role}</h3>
                <div className="exp-company">
                  {it.company} <span className="loc">· {it.loc}</span>
                </div>
                <ul className="exp-bullets">
                  {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="exp-tags">
                  {it.tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { glyph: "SY", name: "Systems & Identity", items: ["Active Directory","Microsoft Intune","MDM","Endpoint Mgmt","Microsoft 365","Group Policy","Networking","Telephony"] },
    { glyph: "OP", name: "Ops & Support",      items: ["Jira Service Mgmt","Helpdesk Ops","Ticket Triage","Documentation","Vuln. Remediation","Compliance","Security Incidents"] },
    { glyph: "PY", name: "Scripting & Automation", items: ["PowerShell","Python","pandas","Bash"] },
    { glyph: "DB", name: "Data",               items: ["SQL","MS SQL Server","SQLite","Relational DBs","Report Builder","ETL Fundamentals","CSV / Excel"] },
  ];
  return (
    <section id="skills">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head-l">
            <span className="sec-num">03 /</span>
            <h2 className="sec-title">Skills</h2>
          </div>
          <div className="sec-aside">tools I reach for daily</div>
        </div>
        <div className="skills-grid">
          {groups.map(g => (
            <div className="skill-block" key={g.name}>
              <div className="skill-head">
                <div className="skill-name">{g.name}</div>
                <div className="skill-glyph">{g.glyph}</div>
              </div>
              <div className="skill-items">
                {g.items.map(s => <span className="skill-pill" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      status: "Shipped",
      date: "May 2026",
      title: "IT Helpdesk Ticket Data Pipeline",
      desc: "An ETL-style pipeline that ingests synthetic helpdesk tickets, cleans and standardizes categories, departments, priorities, and status fields, then loads them into a relational database for analysis on volume, resolution time, and recurring issue patterns.",
      stack: ["Python","pandas","SQL","SQLite","ETL"],
      vis: "pipeline"
    },
    {
      status: "Shipped · Production",
      date: "2024 – 2025",
      title: "AD → Intune MDM Migration",
      desc: "Built a structured process for migrating locally-joined Active Directory computers into Microsoft Intune. Reduced device setup time by ~90% and strengthened endpoint security posture across the org.",
      stack: ["Intune","Active Directory","PowerShell","Endpoint"],
      vis: "migration"
    },
    {
      status: "Shipped · In use",
      date: "2025",
      title: "Standardized Jira Intake Forms",
      desc: "Redesigned the team's Jira Service Management intake — structured fields, controlled vocabularies, and routing logic — to drive consistent ticket data and unlock cleaner reporting on recurring IT issues.",
      stack: ["JSM","Forms","Reporting","Ops"],
      vis: "forms"
    },
    {
      status: "Ongoing",
      date: "2024 – 2026",
      title: "Operational Reporting in Report Builder",
      desc: "Developed and modified SQL queries in Microsoft Report Builder to support recurring operational reporting — improving accuracy, surfacing trends in ticket volume and resolution, and giving leadership visibility into where time actually goes.",
      stack: ["SQL","Report Builder","Reporting","Ops"],
      vis: "reports"
    }
  ];
  return (
    <section id="projects">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head-l">
            <span className="sec-num">04 /</span>
            <h2 className="sec-title">Selected work</h2>
          </div>
          <div className="sec-aside">things I've shipped</div>
        </div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <article className="proj-card" key={i}>
              <div className="vis">
                <ProjectVis kind={p.vis} />
              </div>
              <div className="proj-meta">
                <span className={p.open ? "" : "status-shipped"}>● {p.status}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVis({ kind }) {
  // Lightweight SVG visualizations — abstract, on-brand, no placeholder feel.
  if (kind === "pipeline") {
    return (
      <svg viewBox="0 0 440 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{display:'block'}}>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.0"/>
            <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.8"/>
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.0"/>
          </linearGradient>
        </defs>
        {[0,1,2,3,4].map(i => (
          <g key={i} transform={`translate(${30+i*78}, 60)`}>
            <rect width="60" height="60" rx="6" fill="var(--bg)" stroke="var(--border-strong)"/>
            <text x="30" y="35" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">
              {["RAW","CLEAN","NORM","LOAD","SQL"][i]}
            </text>
          </g>
        ))}
        {[0,1,2,3].map(i => (
          <line key={i} x1={90+i*78} y1="90" x2={108+i*78} y2="90" stroke="url(#g1)" strokeWidth="2"/>
        ))}
        {/* Data tick marks */}
        {Array.from({length: 30}).map((_, i) => (
          <line key={i} x1={20 + i*13.5} y1="150" x2={20 + i*13.5} y2={150 - (Math.sin(i*1.3)*6 + Math.cos(i*0.7)*4 + 10)} stroke="var(--fg-muted)" strokeOpacity="0.4" strokeWidth="1"/>
        ))}
      </svg>
    );
  }
  if (kind === "migration") {
    return (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{display:'block'}}>
        {/* Left cluster - AD */}
        <g transform="translate(40,40)">
          <text x="0" y="-6" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">AD / LOCAL</text>
          {[0,1,2,3].map(i => (
            <rect key={i} x={(i%2)*40} y={Math.floor(i/2)*40} width="32" height="32" rx="4" fill="var(--bg)" stroke="var(--border-strong)"/>
          ))}
        </g>
        {/* Arrow */}
        <g transform="translate(180, 80)">
          <line x1="0" y1="10" x2="60" y2="10" stroke="var(--accent)" strokeWidth="1.5"/>
          <path d="M 56 6 L 60 10 L 56 14" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
          <text x="30" y="0" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">MIGRATE</text>
          <text x="30" y="26" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--fg-muted)">~90% faster</text>
        </g>
        {/* Right cluster - Intune */}
        <g transform="translate(270,40)">
          <text x="0" y="-6" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">INTUNE / CLOUD</text>
          {[0,1,2,3].map(i => (
            <rect key={i} x={(i%2)*40} y={Math.floor(i/2)*40} width="32" height="32" rx="4" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeOpacity="0.6"/>
          ))}
        </g>
      </svg>
    );
  }
  if (kind === "forms") {
    return (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{display:'block'}}>
        <g transform="translate(80,28)">
          <rect width="240" height="124" rx="8" fill="var(--bg)" stroke="var(--border-strong)"/>
          <text x="14" y="20" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">NEW TICKET</text>
          <line x1="14" y1="28" x2="226" y2="28" stroke="var(--border)"/>
          {[42, 62, 82, 102].map((y, i) => (
            <g key={i}>
              <rect x="14" y={y} width="60" height="10" rx="2" fill="var(--fg-muted)" fillOpacity="0.3"/>
              <rect x="84" y={y - 2} width={[140,120,90,100][i]} height="14" rx="3" fill={i === 2 ? "var(--accent)" : "var(--border-strong)"} fillOpacity={i === 2 ? 0.4 : 1}/>
            </g>
          ))}
        </g>
      </svg>
    );
  }
  // "reports"
  return (
    <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{display:'block'}}>
      {/* Bar chart */}
      <g transform="translate(40, 30)">
        <line x1="0" y1="110" x2="320" y2="110" stroke="var(--border-strong)"/>
        <line x1="0" y1="0" x2="0" y2="110" stroke="var(--border-strong)"/>
        {[62, 78, 45, 92, 70, 88, 54, 75, 60, 95, 80, 68].map((h, i) => (
          <rect
            key={i}
            x={6 + i*26}
            y={110 - h}
            width="18"
            height={h}
            rx="2"
            fill={i === 9 ? "var(--accent)" : "var(--fg-muted)"}
            fillOpacity={i === 9 ? 0.9 : 0.35}
          />
        ))}
        <text x="0" y="-10" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">TICKETS / WEEK</text>
        <text x="320" y="-10" textAnchor="end" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">PEAK ↑</text>
      </g>
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-eyebrow">● Let's connect</div>
          <h2 className="contact-title">
            Always up for a good <em>systems conversation.</em>
          </h2>
          <p className="contact-sub">
            Whether it's endpoints, identity, automation, or just trading notes on the work — happy to chat. Easiest way to reach me is email or LinkedIn.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:aidanseigler@gmail.com">
              aidanseigler@gmail.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </a>
            <a className="btn" href="https://www.linkedin.com/in/aidanseigler" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="contact-row">
            <div><span className="lbl">tel</span><a href="tel:8173660463">817.366.0463</a></div>
            <div><span className="lbl">loc</span>Addison, TX</div>
            <div><span className="lbl">resp</span>Within 24h</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',padding:0,gap:12,flexWrap:'wrap'}}>
        <div>© 2026 Aidan Seigler · Built from scratch</div>
        <div>aidanseigler.com</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, About, Experience, Skills, Projects, Contact, Footer });
