import React from 'react';

function About() {
  return (
    <main id="main-content" className="page-shell">
      {/* ── Hero ── */}
      <section className="hero about-hero" data-reveal>
        <div className="panel hero-main interactive-panel hero-content">
          <p className="eyebrow">About</p>
          <h1 className="hero-title">
            AI Engineer who actually understands what's happening{' '}
            <span className="title-highlight">under the hood</span>.
          </h1>
          <p className="hero-summary">
            I got into AI before it was the obvious career move — taught myself the parts
            college didn't cover, got my first real exposure building Gen AI systems at L&amp;T,
            and haven't looked back since. Today I build the AI layer: retrieval systems,
            agentic pipelines, LLM integrations, and everything in between. I care about how
            things work, not just that they work.
          </p>
        </div>

        <aside className="panel about-portrait-card interactive-panel" data-tilt>
          <div className="portrait-shell portrait-shell-compact">
            <img className="portrait-image" src="/assets/professional-photo.jpg"
              alt="Barath B" width="691" height="1024" />
            <div className="portrait-chip portrait-chip-top">Barath B</div>
            <div className="portrait-chip portrait-chip-bottom">AI Engineer</div>
          </div>
        </aside>
      </section>

      {/* ── Professional Summary + How I Work ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Background</p>
          <h2 className="section-title">The full picture.</h2>
        </div>

        <div className="split-grid">
          <article className="panel text-card">
            <p className="card-kicker">Professional Summary</p>
            <h3 className="card-title">Where I come from and what I build.</h3>
            <p className="card-copy">
              I'm an AI Engineer at Caladrius.ai with a background that started in full-stack
              development and took a hard turn into Generative AI the moment I got my hands on
              it during my internship at L&amp;T.
            </p>
            <p className="card-copy">
              My CS degree gave me the fundamentals. Everything beyond that — RAG architectures,
              vector databases, agentic tooling, LLM fine-tuning, prompt engineering — I chased
              down myself, because the syllabus wasn't going to cover it fast enough.
            </p>
            <p className="card-copy">
              I now work across the full AI stack: designing retrieval pipelines that surface the
              right context, building agents that orchestrate tools without going off-script, and
              integrating LLMs into production systems that behave like they're supposed to. When
              the problem calls for a Django backend or a React frontend to wrap it all together,
              I can do that too.
            </p>
            <p className="card-copy">
              My approach hasn't changed since day one — understand it deeply, then build it properly.
            </p>
          </article>

          <article className="panel text-card">
            <p className="card-kicker">How I Work</p>
            <h3 className="card-title">Process over shortcuts.</h3>

            <p className="card-copy" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: 0 }}>
              Research before I touch the keyboard.
            </p>
            <p className="card-copy" style={{ marginTop: '0.35rem' }}>
              When something new lands on my plate, I don't start coding immediately. I read,
              dig into how it actually works under the hood, then build — so I'm not just copying
              a pattern I don't understand.
            </p>

            <p className="card-copy" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: 0 }}>
              Iterate until it's right, not just until it runs.
            </p>
            <p className="card-copy" style={{ marginTop: '0.35rem' }}>
              Getting something to work is the starting line. I keep going until it works the way
              it should — right chunking strategy, right retrieval logic, right prompting structure.
              Done isn't good enough if it's fragile.
            </p>

            <p className="card-copy" style={{ fontWeight: 600, color: 'var(--text)', marginBottom: 0 }}>
              I care about the craft.
            </p>
            <p className="card-copy" style={{ marginTop: '0.35rem' }}>
              There's a difference between a pipeline that ships and a pipeline that holds up. I
              care about the details — structure, reliability, and making sure the next person who
              reads the code (or the next query that hits the system) gets a good experience.
            </p>
          </article>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Strengths</p>
          <h2 className="section-title">What I consistently bring to the table.</h2>
        </div>

        <div className="detail-grid">
          <article className="panel detail-card">
            <p className="card-kicker">01</p>
            <h3 className="card-title">Picks Things Up Fast — Then Goes Deeper</h3>
            <p className="card-copy">
              I don't just learn enough to use something. I learn how it works so I can debug it,
              extend it, and make better decisions with it. From FAISS internals to MCP protocol
              design, the curiosity doesn't stop at "it works."
            </p>
          </article>

          <article className="panel detail-card">
            <p className="card-kicker">02</p>
            <h3 className="card-title">Turns Complex AI Into Working Systems</h3>
            <p className="card-copy">
              There's a gap between understanding a research concept and shipping it in production.
              I close that gap — hybrid search, reranking pipelines, agentic workflows — none of
              it stays theoretical for long.
            </p>
          </article>

          <article className="panel detail-card">
            <p className="card-kicker">03</p>
            <h3 className="card-title">Operates Well in Ambiguity</h3>
            <p className="card-copy">
              No clear requirements? Evolving problem statement? Brand new tech with no precedent?
              That's just Tuesday. I figure out what needs to be built, make a call, and move.
            </p>
          </article>
        </div>
      </section>

      {/* ── Core Areas ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Core Areas</p>
          <h2 className="section-title">Technologies and domains I work with.</h2>
        </div>

        <div className="credentials-grid">
          <article className="panel tag-panel">
            <p className="card-kicker">AI &amp; LLMs</p>
            <div className="tag-list">
              <span className="tag">Large Language Models</span>
              <span className="tag">Prompt Engineering</span>
              <span className="tag">Fine-Tuning</span>
              <span className="tag">RAG</span>
              <span className="tag">Agentic AI</span>
              <span className="tag">MCP</span>
              <span className="tag">LangChain</span>
              <span className="tag">Embeddings</span>
              <span className="tag">Semantic Search</span>
              <span className="tag">Structured Outputs</span>
            </div>
          </article>

          <article className="panel tag-panel">
            <p className="card-kicker">Retrieval &amp; Vector Infrastructure</p>
            <div className="tag-list">
              <span className="tag">Qdrant</span>
              <span className="tag">FAISS</span>
              <span className="tag">Hybrid Search</span>
              <span className="tag">Reranking</span>
              <span className="tag">Semantic Chunking</span>
            </div>
          </article>

          <article className="panel tag-panel">
            <p className="card-kicker">Frontend &amp; Full Stack</p>
            <div className="tag-list">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML / CSS</span>
              <span className="tag">Django</span>
              <span className="tag">FastAPI</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
