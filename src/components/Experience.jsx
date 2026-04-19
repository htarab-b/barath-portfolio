import React from 'react';

function Experience() {
  return (
    <main id="main-content" className="page-shell">
      {/* ── Hero ── */}
      <section className="hero single-hero" data-reveal>
        <div className="panel hero-main full-span">
          <p className="eyebrow">Experience</p>
          <h1 className="hero-title">
            Where I've been, what I built, and what I learned{' '}
            <span className="title-highlight">along the way</span>.
          </h1>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Career Timeline</p>
          <h2 className="section-title">From full-stack to AI systems.</h2>
        </div>

        <div className="timeline">
          {/* ── Caladrius.ai ── */}
          <article className="panel timeline-item" data-reveal>
            <div>
              <span className="timeline-period">July 2025 – Present</span>
              <p className="timeline-company">Caladrius.ai</p>
            </div>
            <div>
              <h3 className="timeline-role">AI Engineer</h3>
              <ul className="bullet-list">
                <li>
                  <strong>Confluence RAG Pipeline:</strong> Built a Markdown-aware ingestion
                  pipeline that pulls documents from Confluence, chunks them with structure intact,
                  and indexes them into Qdrant. The pipeline is live and reactive — when a document
                  updates in Confluence, the vector DB updates too. Integrated into the existing
                  MCP-based architecture that connects the platform to its external tools.
                </li>
                <li>
                  <strong>Investigation Agents:</strong> Wrote the investigation agents at the core
                  of the RCA engine — agents that don't just retrieve context but reason through it,
                  trace incident signals, and surface probable root causes autonomously.
                </li>
                <li>
                  <strong>Runbook Retrieval:</strong> Implemented RAG and retrieval over operational
                  runbooks, giving the engine access to the right remediation playbook at the right
                  moment during an investigation.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">RAG</span>
                <span className="tag">Qdrant</span>
                <span className="tag">MCP</span>
                <span className="tag">Agentic AI</span>
                <span className="tag">Confluence</span>
              </div>
            </div>
          </article>

          {/* ── L&T ── */}
          <article className="panel timeline-item" data-reveal>
            <div>
              <span className="timeline-period">Jan 2025 – May 2025</span>
              <p className="timeline-company">Larsen &amp; Toubro</p>
            </div>
            <div>
              <h3 className="timeline-role">Generative AI Engineer (Intern)</h3>
              <ul className="bullet-list">
                <li>
                  <strong>Data Extraction &amp; Preprocessing Pipeline:</strong> Built pipelines to
                  extract and structure content from technical machinery user manuals — messy PDFs
                  with mixed text and images. Images were converted to base64 and fed into the
                  pipeline alongside text, with semantic chunking to preserve context across
                  document sections.
                </li>
                <li>
                  <strong>LLM Fine-Tuning:</strong> Fine-tuned LLaMA 3 and Phi-4 using Unsloth
                  with LoRA adapters on the extracted manual data — keeping the training efficient
                  and the models lean enough to run locally. The result: low-latency, fully offline
                  LLM inference purpose-built for industrial kiosk environments.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">LLaMA 3</span>
                <span className="tag">Phi-4</span>
                <span className="tag">LoRA</span>
                <span className="tag">Unsloth</span>
                <span className="tag">Fine-Tuning</span>
                <span className="tag">PDF Extraction</span>
              </div>
            </div>
          </article>

          {/* ── QRes Corp ── */}
          <article className="panel timeline-item" data-reveal>
            <div>
              <span className="timeline-period">Jun 2024 – Oct 2024</span>
              <p className="timeline-company">QRes Corp</p>
            </div>
            <div>
              <h3 className="timeline-role">Full-Stack Developer Intern</h3>
              <ul className="bullet-list">
                <li>
                  <strong>Blog Text Editor:</strong> Designed and built a rich text editor for the
                  company's blog platform — advanced styling controls, clean UX, and a 30% lift in
                  writer engagement after launch.
                </li>
                <li>
                  <strong>Portal Stability &amp; Error Handling:</strong> Audited the company portal
                  for broken links and brittle failure points, then fixed them. Implemented proper
                  error-handling mechanisms so users stopped hitting dead ends.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Full Stack</span>
                <span className="tag">React</span>
                <span className="tag">UX</span>
                <span className="tag">Error Handling</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Experience;
