import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <main id="main-content" className="page-shell">
      <section className="hero single-hero" data-reveal>
        <div className="panel hero-main interactive-panel hero-content full-span" data-spotlight>
          <p className="eyebrow">What I Build</p>
          <h1 className="hero-title">
            AI systems that work in{' '}
            <span className="title-highlight">production</span>, not just in demos.
          </h1>
          <p className="hero-summary">
            I design and build the AI layer — retrieval pipelines that surface the right
            context, agents that use tools without going rogue, LLM integrations that behave
            under real-world conditions, and full-stack applications that tie it all together.
            Whether you need a focused AI component or an end-to-end intelligent system, this
            is what I do.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section" id="services-list" data-reveal>
        <div className="section-head">
          <p className="section-label">In-Depth</p>
          <h2 className="section-title">Detailed service breakdown.</h2>
          <p className="section-copy">
            Each service is scoped to your project's complexity, timeline, and technical
            requirements. Below is a comprehensive view of what each engagement covers.
          </p>
        </div>

        <div className="service-detail-stack">

          {/* RAG Pipeline Development */}
          <article className="panel service-detail" id="rag-pipeline">
            <div className="service-detail-body">
              <h3 className="card-title">RAG Pipeline Development</h3>
              <p className="card-copy">
                Retrieval-Augmented Generation is only as good as its retrieval. Most RAG
                implementations fail not because of the LLM — but because the wrong chunk
                showed up at the wrong time. I build retrieval pipelines that are engineered
                to surface the right context, reliably.
              </p>
              <p className="card-copy">
                That means the full stack: document ingestion with structure-aware chunking,
                vector indexing in Qdrant or FAISS, hybrid search combining dense retrieval
                with BM25, reranking with cross-encoders, and query rewriting strategies like
                HyDE to close the gap between what users ask and what the index contains.
                Built for production, not just proof of concept.
              </p>
              <ul className="service-deliverables">
                <li>Document ingestion and preprocessing pipeline</li>
                <li>Markdown-aware or structure-preserving chunking strategy</li>
                <li>Vector database setup and indexing (Qdrant / FAISS)</li>
                <li>Hybrid search implementation (dense + BM25)</li>
                <li>Reranking layer with cross-encoder models</li>
                <li>Query rewriting and HyDE integration</li>
                <li>Retrieval evaluation and relevance scoring</li>
                <li>REST API to expose the pipeline</li>
              </ul>
              <div className="service-highlight-row">
                <span className="service-highlight">Qdrant</span>
                <span className="service-highlight">Hybrid Search</span>
                <span className="service-highlight">Reranking</span>
                <span className="service-highlight">Semantic Chunking</span>
              </div>
            </div>
          </article>

          {/* LLM Integration */}
          <article className="panel service-detail" id="llm-integration">
            <div className="service-detail-body">
              <h3 className="card-title">LLM Integration</h3>
              <p className="card-copy">
                Getting an LLM to produce a clever response in a notebook takes an afternoon.
                Getting it to behave consistently in a production system — with real users,
                edge cases, and zero tolerance for hallucinations — takes actual engineering.
              </p>
              <p className="card-copy">
                I handle the full integration: model selection, prompt architecture, structured
                output design, context window management, and API wiring. Whether you're
                embedding Claude, GPT-4, or an open-source model into an existing product or
                building something new around it, I make sure the LLM does exactly what it's
                supposed to do — and nothing it isn't.
              </p>
              <ul className="service-deliverables">
                <li>LLM provider selection and API integration</li>
                <li>Prompt architecture and system prompt design</li>
                <li>Structured output schemas and validation</li>
                <li>Context window and token management strategy</li>
                <li>Fallback and error handling logic</li>
                <li>Response evaluation and quality checks</li>
                <li>Integration with existing backend systems</li>
                <li>Documentation and handoff</li>
              </ul>
              <div className="service-highlight-row">
                <span className="service-highlight">Prompt Engineering</span>
                <span className="service-highlight">Structured Outputs</span>
                <span className="service-highlight">Anthropic SDK</span>
                <span className="service-highlight">OpenAI API</span>
              </div>
            </div>
          </article>

          {/* Agentic Workflow Design */}
          <article className="panel service-detail" id="agentic-workflows">
            <div className="service-detail-body">
              <h3 className="card-title">Agentic Workflow Design</h3>
              <p className="card-copy">
                An agent that calls the wrong tool, in the wrong order, with the wrong input
                is worse than no agent at all. I design agentic workflows where the model
                reasons through a problem, selects the right tools, and executes them in a
                sequence that actually makes sense.
              </p>
              <p className="card-copy">
                I work with MCP-based tooling to connect agents to external systems —
                databases, APIs, document stores, operational runbooks — and build the
                orchestration logic that keeps the agent grounded. The result is a workflow
                that handles multi-step tasks autonomously without needing a human to babysit
                every decision.
              </p>
              <ul className="service-deliverables">
                <li>Agent architecture and reasoning flow design</li>
                <li>MCP server integration and tool registration</li>
                <li>Tool selection and orchestration logic</li>
                <li>Multi-step task decomposition</li>
                <li>Guardrails and fallback behaviour</li>
                <li>Integration with external APIs and data sources</li>
                <li>End-to-end testing of agent behaviour</li>
                <li>Deployment-ready agent pipeline</li>
              </ul>
              <div className="service-highlight-row">
                <span className="service-highlight">MCP</span>
                <span className="service-highlight">ReAct Agents</span>
                <span className="service-highlight">Tool Use</span>
                <span className="service-highlight">Agentic Pipelines</span>
              </div>
            </div>
          </article>

          {/* LLM Fine-Tuning */}
          <article className="panel service-detail" id="fine-tuning">
            <div className="service-detail-body">
              <h3 className="card-title">LLM Fine-Tuning</h3>
              <p className="card-copy">
                Sometimes a general-purpose LLM isn't enough. When the domain is specialised,
                the vocabulary is technical, or the deployment environment has no internet
                access, fine-tuning is the answer. I build end-to-end fine-tuning pipelines
                that take a base model and make it genuinely useful for your specific use case.
              </p>
              <p className="card-copy">
                I use Unsloth with LoRA adapters for efficient, resource-conscious training —
                keeping models lean enough to run locally while making them sharp enough to be
                actually useful. From dataset construction and preprocessing to training,
                evaluation, and deployment, I handle the full pipeline.
              </p>
              <ul className="service-deliverables">
                <li>Dataset extraction and preprocessing pipeline</li>
                <li>Multimodal data handling (text + base64 images)</li>
                <li>Semantic chunking and QA pair generation</li>
                <li>LoRA adapter configuration and training with Unsloth</li>
                <li>Before/after evaluation and benchmarking</li>
                <li>Model export and quantisation for local deployment</li>
                <li>Offline / edge deployment setup</li>
                <li>Documentation of training pipeline</li>
              </ul>
              <div className="service-highlight-row">
                <span className="service-highlight">LoRA</span>
                <span className="service-highlight">Unsloth</span>
                <span className="service-highlight">LLaMA 3</span>
                <span className="service-highlight">Phi-4</span>
              </div>
            </div>
          </article>

          {/* MCP Server Development & Integration */}
          <article className="panel service-detail" id="mcp-servers">
            <div className="service-detail-body">
              <h3 className="card-title">MCP Server Development &amp; Integration</h3>
              <p className="card-copy">
                MCP (Model Context Protocol) is how modern AI agents talk to the world —
                databases, APIs, document stores, external services. Getting that communication
                right is the difference between an agent that reasons with real context and one
                that hallucinates its way through a task.
              </p>
              <p className="card-copy">
                I build custom MCP servers that expose your tools, data sources, and APIs in a
                format agents can actually use — with clean tool definitions, reliable
                input/output contracts, and the error handling that makes them production-safe.
                I also integrate existing MCP servers into agentic pipelines, wiring up the
                full orchestration layer so your agent knows what tools it has, when to use
                them, and what to do when something goes wrong.
              </p>
              <ul className="service-deliverables">
                <li>Custom MCP server design and implementation</li>
                <li>Tool schema definitions and input validation</li>
                <li>Integration with external APIs, databases, and document stores</li>
                <li>Connection of existing MCP servers into agentic workflows</li>
                <li>Cross-service orchestration and tool routing logic</li>
                <li>Error handling, retries, and fallback behaviour</li>
                <li>End-to-end testing of tool calls and agent responses</li>
                <li>Documentation and deployment setup</li>
              </ul>
              <div className="service-highlight-row">
                <span className="service-highlight">MCP</span>
                <span className="service-highlight">Tool Use</span>
                <span className="service-highlight">Agentic AI</span>
                <span className="service-highlight">API Integration</span>
              </div>
            </div>
          </article>

          {/* Full Stack AI App Development */}
          <article className="panel service-detail" id="fullstack-ai">
            <div className="service-detail-body">
              <h3 className="card-title">Full Stack AI App Development</h3>
              <p className="card-copy">
                AI without a product is just a script. When the use case calls for a complete
                application — a chat interface, a search product, an internal tool — I can
                build the whole thing, from the retrieval pipeline in the backend to the
                interface a user actually interacts with.
              </p>
              <p className="card-copy">
                Django handles the backend and API layer. React handles the frontend. Qdrant
                or FAISS handles the retrieval. The LLM handles the intelligence. I wire it
                all together into something that ships.
              </p>
              <ul className="service-deliverables">
                <li>Full-stack application architecture</li>
                <li>Django backend and REST API development</li>
                <li>Vector database integration and RAG pipeline</li>
                <li>LLM API integration and prompt engineering</li>
                <li>React frontend with chat or search interface</li>
                <li>Authentication and session management</li>
                <li>End-to-end testing and QA</li>
                <li>Deployment-ready build with documentation</li>
              </ul>
              <div className="service-highlight-row">
                <span className="service-highlight">Django</span>
                <span className="service-highlight">React</span>
                <span className="service-highlight">REST APIs</span>
                <span className="service-highlight">RAG</span>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* CTA */}
      <section className="section" data-reveal>
        <div className="panel contact-strip">
          <div>
            <p className="section-label">Have something you want to build?</p>
            <h2 className="section-title compact-title">Let's talk.</h2>
            <p className="section-copy compact-copy">
              Whether it's a RAG pipeline, an agent that actually behaves, or a full
              AI-powered application — I'm happy to hear about it. Reach out and let's
              figure out if I'm the right person to build it.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:barathb.dev@gmail.com">Get In Touch</a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/barathbalasundaram/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
