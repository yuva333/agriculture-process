import React, { useEffect, useMemo, useState } from "react";

import green from "./assets/greenhouse.jpg";
import vertical from "./assets/vertical.jpg";
import organic from "./assets/organic.jpg";
import precision from "./assets/precision.jpg";
import regenaration from "./assets/regenarative.jpg";
import smart from "./assets/smart.jpg";

/** ---------- Local fallback data (used if API not ready) ---------- */
const FALLBACK_DATA = [
  {
    id: "iot",
    title: "Smart Farming (IoT, Sensors & Drones)",
    tagline: "Real-time farm intelligence → higher yield, lower inputs.",
    bullets: [

      "Smart farming integrates Internet of Things (IoT) devices, sensors, and drones to monitor soil, crops, and weather in real-time. Farmers receive live data on their mobile apps, helping them make data-driven decisions.",
      "Soil sensors track moisture, EC, temperature; automate irrigation.",
      "LoRaWAN/BLE gateways send data to dashboards & mobile apps.",
      "Drones map NDVI, spot pest stress, spray micro-doses precisely.",
      "Cattle wearables monitor health, rumination & heat cycles.",
      "AI-powered smart sensors that can even predict plant diseases before visible symptoms.",
      "Drones for spraying pesticides and crop health imaging.",
    ],
    kpis: [
      { label: "Water saved", value: "25–40%" },
      { label: "Yield gain", value: "10–20%" },
      { label: "Input cut", value: "15–30%" }
    ],
    image: smart,
  },
  {
    id: "organic",
    title: "Organic Farming",
    tagline: "Soil-first practices with zero synthetic chemicals.",
    bullets: [
      "Organic farming avoids synthetic fertilizers and pesticides, focusing on natural alternatives like compost, green manure, and bio-fertilizers.",
      "Use farmyard manure, compost, green manures & biofertilizers.",
      "Biocontrols (Trichoderma, Bacillus) for diseases & pests.",
      "Crop rotations and trap crops to break pest cycles.",
      "Soil organic carbon rebuilds → better water holding.",
      "Growing global demand for organic exports in Europe & USA.",
      "Emphasis on biodiversity and ecological balance.",
      "Produces healthier, chemical-free food.",
      "Increases soil fertility and water retention.",
      "Supports sustainability and reduces carbon footprint",
    ],
    kpis: [
      { label: "Soil C gain", value: "0.2–0.4%/yr" },
      { label: "Residue use", value: "100%" },
      { label: "Premium", value: "10–30%" }
    ],
    image: organic,
  },
  {
    id: "precision",
    title: "Precision Agriculture",
    tagline: "Right input, right place, right time, right amount.",
    bullets: [
      "Precision agriculture uses GPS, GIS, satellite images, and AI tools to apply water, fertilizers, and pesticides only where needed.",
      "VRT for seed & fertilizer via prescription maps.",
      "Auto-steer & section control reduce overlaps.",
      "Edge-AI cameras for in-row weeding & spot spraying.",
      "Yield monitors create zone-based management.",
      "Integration with autonomous tractors & AI-powered robotic harvesters.",
      "Variable rate technology (VRT) for targeted input application.",
      "Satellite imaging for crop health Predictive analytics for yield estimation.",
    ],
    kpis: [
      { label: "Fertilizer cut", value: "10–25%" },
      { label: "Chemicals cut", value: "20–60%" },
      { label: "Fuel saved", value: "8–15%" }
    ],
    image: precision,
  },
  {
    id: "greenhouse",
    title: "Greenhouse / Protected Cultivation",
    tagline: "Climate control for off-season, high-value crops.",
    bullets: [
      "Greenhouse farming involves growing crops in controlled environments using glass/plastic houses where temperature, humidity, and light are regulated.",
      "Polyhouse, shade-net & fan-pad systems regulate microclimate.",
      "Drip + fertigation with EC/pH control.",
      "Sticky traps + netting for physical pest exclusion.",
      "AI-driven smart greenhouses with automatic climate adjustment.",
      "CO₂ enrichment & vertical trellising boost yields.",
      "Protection from pests, diseases, and extreme weather.",
      "Hydroponics and vertical farming can be integrated.",
    ],
    kpis: [
      { label: "Yield gain", value: "2–4×" },
      { label: "Water saved", value: "50–70%" },
      { label: "Cycle time", value: "−20–30%" }
    ],
    image: green,
  },
  {
    id: "hydroponics",
    title: "Hydroponics & Vertical Farming",
    tagline: "Soilless, precise nutrition, year-round leafy greens.",
    bullets: [
      "Hydroponics is a method of growing plants without soil, using nutrient-rich water solutions. Vertical farming stacks layers of crops in a controlled environment, often inside greenhouses or urban buildings. Both techniques allow for year-round farming in limited spaces, reduce dependency on arable land, and use less water compared to traditional farming.",
      "NFT, DWC, coco-peat slabs; closed-loop recirculation.",
      "LED spectra tuning for growth & nutraceuticals.",
      "Compact footprint near cities → low food miles.",
      "Sensor-based EC/pH automation via dosers.",
      "AI-powered monitoring for plant growth and health.",
      "Sustainable: No pesticides, eco-friendly, and reduces transportation costs.",
    ],
    kpis: [
      { label: "Water saved", value: "80–95%" },
      { label: "Space use", value: "3–10×" },
      { label: "Pesticide use", value: "Near-zero" }
    ],
    image: vertical,
  },
  {
    id: "regen",
    title: "Regenerative Agriculture",
    tagline: "Cover crops, reduced tillage & livestock integration.",
    bullets: [
      "Regenerative Agriculture is a holistic farming approach that goes beyond sustainability. Its goal is not only to maintain but to restore and improve soil health, biodiversity, and ecosystems. By working with nature instead of against it, regenerative farming increases long-term productivity while healing the environment.",
      "Keep soil covered: mulches & multi-species covers.",
      "Minimize disturbance to protect soil biology.",
      "Integrate grazing to cycle nutrients naturally.",
      "Increase biodiversity & landscape resilience.",
      "Carbon Sequestration: Captures carbon from the atmosphere, fighting climate change.",
      "Soil Regeneration: Builds organic matter, improves soil fertility and structure.",
    ],
    kpis: [
      { label: "Erosion cut", value: "30–70%" },
      { label: "SOC trend", value: "↑ yearly" },
      { label: "Input reliance", value: "↓" }
    ],
    image: regenaration,
  }
];

/** ---------- Small utility: friendly fetch with timeout & JSON ---------- */
async function fetchJSON(url, { timeout = 6000 } = {}) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } finally {
    clearTimeout(id);
  }
}

/** ------------------------- Main Page Component ------------------------- */
export default function ModernFarming() {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("title");
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        /** 
         * API EXPECTATION:
         * GET /api/modern-farming  ->  [{ id, title, tagline, bullets[], kpis[], image }]
         * (Sample mock setup shown after this component)
         */
        const data = await fetchJSON("/api/modern-farming");
        if (!alive) return;
        setTech(data);
        setActive(data[0]?.id || null);
      } catch (e) {
        // Fallback to local data so the page still works.
        setTech(FALLBACK_DATA);
        setActive(FALLBACK_DATA[0].id);
        setError(
          "Connected to local data. Configure /api/modern-farming for live content."
        );
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = tech.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.bullets.some((b) => b.toLowerCase().includes(q))
    );
    return [...list].sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "impact")
        return (b.kpis?.length || 0) - (a.kpis?.length || 0);
      return 0;
    });
  }, [tech, query, sort]);

  const selected = filtered.find((t) => t.id === active) || filtered[0];

  return (
    <div className="mf-root">
      {/* Internal CSS */}
      <style>{`
        ::root{
            --bg:#d9f99d;
            --bg2:#ffffff;
            --card:#f5f5f5;   /* light card background */
            --ink:#000000;    /* main text black */
            --ink-dim:#333333; /* dim text dark gray */
            --acc:#16a34a;    /* green accent */
            --line:rgba(0,0,0,0.1); /* light border */
            --glow: 0 0 0 transparent;
        }
        *{box-sizing:border-box}
        .mf-root {
  min-height: 100dvh;
  color: #000;  /* text color black */
  background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb); /* new bg */
  padding-bottom: 80px;
  overflow-x: hidden;
}

        .mf-container{
          max-width:1200px;
          margin:0 auto;
          padding:24px;
          
        }
        .hero{
          position:relative;
          border:1px solid var(--line);
          border-radius:24px;
          padding:32px 28px 36px;
          background:linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          overflow:hidden;
          box-shadow:0 20px 60px rgba(0,0,0,0.35);
          animation: pop-in 600ms ease-out both;
        }
        .hero h1{
          margin:0 0 6px;
          font-size:clamp(24px, 3.4vw, 44px);
          letter-spacing:.3px;
        }
        .hero p{
          margin:4px 0 16px;
          color:var(--ink-dim);
          font-size:clamp(14px, 1.6vw, 18px);
        }
        .chiprow{
          display:flex; gap:10px; flex-wrap:wrap;
          margin-top:10px;
        }
        .chip{
          border:1px solid var(--line);
          padding:8px 12px;
          border-radius:999px;
          background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb);
          backdrop-filter: blur(6px);
          transition: transform .2s ease, background .2s ease;
        }
        .chip:hover{ transform: translateY(-2px); background:rgba(255,255,255,0.07); }

        .controls{
          margin-top:18px;
          display:flex; gap:12px; flex-wrap:wrap;
        }
        .input, .select{
          background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb);
          border:1px solid var(--line);
          padding:12px 14px; border-radius:12px;
          outline:none; min-width:220px;
        }
        .grid{
          margin-top:28px;
          display:grid;
          grid-template-columns: 330px 1fr;
          gap:18px;
        }
        @media (max-width: 980px){
          .grid{ grid-template-columns: 1fr; }
        }
        .sidebar{
          border:1px solid var(--line);
          background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb);
          border-radius:20px;
          padding:10px;
          position:relative;
        }
        .nav-item{
          display:flex; gap:12px; align-items:center;
          padding:14px;
          margin:10px; border-radius:14px;
          cursor:pointer; border:1px solid transparent;
          background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          transition: transform .18s ease, border-color .18s ease, background .18s ease;
        }
        .nav-item:hover{ transform: translateX(4px); }
        .nav-item.active{
          border-color:rgba(119,255,179,0.45);
          background:linear-gradient(180deg, rgba(119,255,179,0.08), rgba(255,255,255,0.02));
          box-shadow: 0 0 0 1px rgba(119,255,179,0.1) inset, 0 8px 30px rgba(0,0,0,0.25);
        }
        .thumb{
          width:56px; height:56px; border-radius:12px; object-fit:cover;
          border:1px solid var(--line);
        }
        .title{ font-weight:600; }
        .tagline{ color:var(--ink-dim); font-size:13px; }
        .content{
          border:1px solid var(--line);
          background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb);
          border-radius:20px;
          overflow:hidden;
        }
        .banner{
          position:relative; height:280px; overflow:hidden;
          border-bottom:1px solid var(--line);
        }
        .banner img{
          width:100%; height:100%; object-fit:cover; display:block;
          filter:saturate(1.2) contrast(1.05);
          transform: scale(1.03);
          animation: slow-zoom 18s ease-in-out infinite alternate;
        }
        .glass{
          position:absolute; inset:auto 16px 16px auto;
          background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb); border:1px solid var(--line);
          padding:12px 14px; border-radius:14px; backdrop-filter: blur(6px);
          font-size:13px; color:var(--ink-dim);
        }
        .body{
          display:grid; grid-template-columns: 1.4fr .9fr;
          gap:16px; padding:18px;
        }
        @media (max-width: 980px){
          .body{ grid-template-columns: 1fr; }
        }
        .card{
          border:1px solid var(--line);
          border-radius:18px; padding:16px;
          background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .card:hover{
          transform: translateY(-4px);
          border-color: rgba(119,255,179,0.35);
          box-shadow: 0 24px 60px rgba(10,255,160,0.08);
        }
        .bullets{ margin:6px 0 0 2px; padding:0 0 0 18px; }
        .kpis{
          display:grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
          gap:10px; margin-top:10px;
        }
        .kpi{
          padding:12px; border:1px solid var(--line); border-radius:14px;
          background:rgba(255,255,255,0.02);
        }
        .kpi .v{ font-size:18px; font-weight:700; }
        .kpi .l{ font-size:12px; color:var(--ink-dim); }

        .cta{
          display:flex; gap:10px; flex-wrap:wrap;
          margin-top:12px;
        }
        .btn{
          appearance:none; border:none; cursor:pointer;
          padding:12px 14px; border-radius:12px; font-weight:600;
          background:linear-gradient(180deg, #35fca3, #22c17e);
          color:#072114; box-shadow:0 12px 30px rgba(34,193,126,0.3);
          transition: transform .15s ease;
        }
        .btn:hover{ transform: translateY(-2px); }
        .btn.ghost{
          background:transparent; color:var(--ink);
          border:1px solid var(--line);
          box-shadow:none;
        }

        .note{ margin-top:10px; font-size:13px; }

        /* Animations */
        @keyframes pop-in{ from{ transform: translateY(12px); opacity:0 } to{ transform:none; opacity:1 } }
        @keyframes slow-zoom{ from{ transform: scale(1.03) } to{ transform: scale(1.12) } }

        /* Floating deco dots */
        .float-dots::before, .float-dots::after{
          content:""; position:absolute; width:210px; height:210px; border-radius:50%;
          filter: blur(60px); opacity:.22; z-index:0;
          animation: drift 18s ease-in-out infinite alternate;
        }
        .float-dots::before{ background:#38f7a3; top:-50px; left:-60px; }
        .float-dots::after{ background:#3fafef; bottom:-60px; right:-60px; animation-duration:22s; }
        @keyframes drift{ from{ transform: translateY(0) } to{ transform: translateY(-30px) } }
      `}</style>

      <div className="mf-container">
        {/* HERO */}
        <section className="hero float-dots">
          <h1>Modern Farming Techniques</h1>
          <p>
            Explore smart farming with IoT, drones, precision agriculture, protected cultivation,
            and more. Compare benefits, key practices, and outcomes—all in one interactive page.
          </p>
          <div className="chiprow">
            <span className="chip">🌡️ Sensors</span>
            <span className="chip">🛰️ Drones</span>
            <span className="chip">🧪 Soil Health</span>
            <span className="chip">💧 Drip & Fertigation</span>
            <span className="chip">🧠 Edge-AI</span>
            <span className="chip">🌱 Organics</span>
          </div>

          <div className="controls">
            <input
              className="input"
              placeholder="Search techniques, e.g., 'drones' or 'fertigation'…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="title">Sort: Title (A→Z)</option>
              <option value="impact">Sort: KPI Count (High→Low)</option>
            </select>
          </div>
          {error ? <div className="note">ℹ️ {error}</div> : null}
        </section>

        {/* GRID */}
        <section className="grid">
          {/* Sidebar */}
          <aside className="sidebar">
            {filtered.map((t) => (
              <div
                key={t.id}
                className={`nav-item ${t.id === (selected?.id || active) ? "active" : ""}`}
                onClick={() => setActive(t.id)}
              >
                <img className="thumb" src={t.image} alt={t.title} />
                <div>
                  <div className="title">{t.title}</div>
                  <div className="tagline">{t.tagline}</div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="nav-item">
                <div className="title">No results</div>
                <div className="tagline">Try a different search.</div>
              </div>
            )}
          </aside>

          {/* Main content */}
          <main className="content">
            {!selected ? (
              <div style={{ padding: 24 }}>Select a technique from the left.</div>
            ) : (
              <>
                <div className="banner">
                  <img src={selected.image} alt={selected.title} />
                  <div className="glass">Featured: {selected.title}</div>
                </div>
                <div className="body">
                  <div className="card">
                    <h3 style={{ margin: "2px 0 8px" }}>{selected.title}</h3>
                    <div className="tagline">{selected.tagline}</div>
                    <ul className="bullets">
                      {selected.bullets.map((b, i) => (
                        <li key={i} style={{ margin: "8px 0" }}>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="cta">
                      <button className="btn" onClick={() => alert("Coming soon: deep-dive module!")}>
                        📘 Read Deep-Dive
                      </button>
                      <button
                        className="btn ghost"
                        onClick={() =>
                          alert("Coming soon: ROI calculator (water, inputs, yield)!")
                        }
                      >
                        📊 ROI Calculator
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="card">
                      <h4 style={{ marginTop: 0 }}>Key Outcomes</h4>
                      <div className="kpis">
                        {selected.kpis.map((k, i) => (
                          <div className="kpi" key={i}>
                            <div className="v">{k.value}</div>
                            <div className="l">{k.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="card" style={{ marginTop: 12 }}>
                      <h4 style={{ marginTop: 0 }}>Starter Checklist</h4>
                      <ul className="bullets">
                        <li>Assess soil & water: baseline tests, mapping.</li>
                        <li>Start small: pilot 0.25–1 acre for rapid learning.</li>
                        <li>Pick a crop fit for your climate & market demand.</li>
                        <li>Plan capex vs. opex; explore subsidies & FPO programs.</li>
                        <li>Train operators; set SOPs for scouting & records.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </main>
        </section>
      </div>
    </div>
  );
}
