const speakers = [
  {
    number: "01",
    name: "李高棠",
    englishName: "Gaotang Li",
    role: "UIUC · Computer Science Ph.D.",
    focus: "Scaling Foundation Models · Post-training",
    bio: "专注于基础模型规模化、推理与智能体能力，以及覆盖学习、评判和推理的完整后训练链路。",
    topic: "Rubric 如何从终局评判，走向长轨迹 Agent 的过程监督与策略演化。",
    image: "/speakers/gaotang-li.png",
    homepage: "https://gaotangli.github.io/",
    paper: "https://arxiv.org/abs/2605.10899",
    paperName: "RubricEM",
  },
  {
    number: "02",
    name: "刘文涵",
    englishName: "Wenhan Liu",
    role: "中国人民大学高瓴人工智能学院 · Ph.D.",
    focus: "AI Search · Ranking · Deep Search",
    bio: "研究 AI Search，包括 LLM for Ranking、Deep Search 与 Conversational Search，并持续梳理 Rubric 研究版图。",
    topic: "从概念、构建到训练与评测：Rubric for LLM 的方法谱系与开放问题。",
    image: "/speakers/wenhan-liu.jpg",
    homepage: "https://8421bcd.github.io/",
    paper: "https://github.com/RUC-NLPIR/Rubrics_Survey",
    paperName: "Rubrics Survey",
  },
  {
    number: "03",
    name: "张启源",
    englishName: "Qiyuan Zhang",
    role: "香港城市大学 · Ph.D.",
    focus: "Auto-evaluation · Reward Modeling",
    bio: "研究自动评测、奖励与偏好建模、LLM-as-a-Judge，以及面向大模型的 test-time scaling。",
    topic: "怎样评估一份 Rubric 本身：从人类标准对齐到生成式 Reward Model。",
    image: "/speakers/qiyuan-zhang.jpg",
    homepage: "https://zhangqiyuan-rico.github.io/",
    paper: "https://arxiv.org/abs/2603.01562",
    paperName: "RubricBench",
  },
  {
    number: "04",
    name: "周阳",
    englishName: "Yang Zhou",
    role: "浙江大学 · M.Eng.",
    focus: "Reinforcement Learning · Embodied AI",
    bio: "研究强化学习、Agentic LLM、VLA 与具身智能，并在 rubric-guided reasoning 与数据构建方向开展工作。",
    topic: "把 Rubric 变成探索脚手架：为通用 LLM 推理提供更细粒度的强化学习信号。",
    image: "/speakers/yang-zhou.jpg",
    homepage: "https://iannxang.github.io/",
    paper: "https://arxiv.org/abs/2508.16949",
    paperName: "Rubric-Scaffolded RL",
  },
];

const steps = [
  {
    key: "01 / SPECIFY",
    title: "把“好”说清楚",
    text: "将笼统偏好拆成事实性、完整性、推理质量、安全性等可检查的原子标准。",
  },
  {
    key: "02 / JUDGE",
    title: "逐项评判",
    text: "Judge 不只给一个总分，而是沿每条标准给出证据、判断与可追溯的细粒度反馈。",
  },
  {
    key: "03 / LEARN",
    title: "转化为学习信号",
    text: "聚合后的 rubric reward 可用于评测、数据筛选、偏好建模与开放任务强化学习。",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function RootBrand({ className = "" }: { className?: string }) {
  return (
    <span className={`root-brand ${className}`} aria-label="根号下 R 平方，M">√(R²)M</span>
  );
}

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rubric Reward Model Workshop 首页">
          <RootBrand className="brand-mark" />
          <span className="brand-line" />
          <span className="brand-partner">with NICE</span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">About</a>
          <a href="#watch">Watch</a>
        </nav>
        <div className="header-actions">
          <details className="session-menu">
            <summary><span>SESSION</span><strong>01</strong><i aria-hidden="true">⌄</i></summary>
            <div className="session-dropdown">
              <a href="#top" aria-current="page"><span>第 01 期</span><strong>Rubric Reward Model</strong><em>CURRENT</em></a>
              <div aria-disabled="true"><span>第 02 期</span><strong>主题待公布</strong><em>SOON</em></div>
              <div aria-disabled="true"><span>第 03 期</span><strong>主题待公布</strong><em>SOON</em></div>
            </div>
          </details>
          <a className="nav-cta" href="#watch">观看入口 <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-glow hero-glow-purple" />
        <div className="hero-grid" />
        <div className="hero-layout">
          <div className="hero-intro">
            <p className="eyebrow"><span /> NICE × ACADEMIC COMMUNITY</p>
            <h1>RUBRIC<br /><span>REWARD MODEL</span></h1>
            <p className="hero-lead">
              当答案不再只有对与错，<strong>我们如何定义、评估并优化“好答案”？</strong>
              首期邀请四位青年研究者，从 rubric 构建、自动评测到强化学习，共同拆解下一代可解释奖励信号。
            </p>
            <div className="hero-meta">
              <div><span>FORMAT</span><strong>线上学术 Workshop</strong></div>
              <div><span>STATUS</span><strong className="live-dot">预热中 · Coming Soon</strong></div>
            </div>
          </div>

          <div className="guest-panel" id="speakers">
            <div className="guest-panel-heading">
              <span>01 / INVITED SPEAKERS</span>
              <strong>首期嘉宾</strong>
              <p>四种研究视角，一套更好的评价标准。</p>
            </div>
            <div className="guest-grid">
              {speakers.map((speaker) => (
                <article className="guest-card" key={speaker.name}>
                  <div className="guest-image">
                    <img src={`${basePath}${speaker.image}`} alt={`${speaker.name}肖像`} />
                    <span>{speaker.number}</span>
                  </div>
                  <div className="guest-content">
                    <p>{speaker.focus}</p>
                    <h2>{speaker.name}<small>{speaker.englishName}</small></h2>
                    <strong>{speaker.role}</strong>
                    <div className="guest-links">
                      <a href={speaker.homepage} target="_blank" rel="noreferrer">主页 <Arrow /></a>
                      <a href={speaker.paper} target="_blank" rel="noreferrer">{speaker.paperName} <Arrow /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-top">
          <div className="section-heading">
            <p className="eyebrow"><span /> 02 / CONCEPT</p>
            <h2>什么是 Rubric<br />Reward Model?</h2>
          </div>
          <div className="about-copy">
            <p className="intro">
              Rubric 是一组<strong>显式、结构化、可检查</strong>的评价标准。它把“这个回答好不好”
              从模糊的整体偏好，拆解为多个有语义的质量维度。
            </p>
            <p>
              在开放式写作、Deep Research、Agent 轨迹等难以获得唯一标准答案的任务中，
              Rubric Reward Model 让模型知道<strong>为什么得分、差在哪里、下一步如何改进</strong>，
              并把这些细粒度判断转化为可用于训练的奖励信号。
            </p>
            <div className="formula" aria-label="Rubric 奖励模型计算示意">
              <span>R(x, y)</span><b>=</b><span>AGG</span><i>(</i>
              <code>r₁: factuality</code><code>r₂: coverage</code><code>r₃: reasoning</code><i>)</i>
            </div>
          </div>
        </div>
        <div className="process" aria-label="Rubric Reward Model 工作流程">
          {steps.map((step) => (
            <article key={step.key}>
              <span>{step.key}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="watch" id="watch">
        <div className="watch-orbit orbit-one" />
        <div className="watch-orbit orbit-two" />
        <div className="watch-inner">
          <p className="eyebrow"><span /> 03 / RECORDINGS</p>
          <h2>错过直播？<br /><em>思想仍在继续。</em></h2>
          <p>
            首期四场分享的完整录像、时间轴与演讲资料将在活动结束后汇总于此。
            你可以先收藏页面，或前往 NICE 视频频道关注更新。
          </p>
          <div className="watch-actions">
            <a className="primary-button" href="https://space.bilibili.com/507524288" target="_blank" rel="noreferrer">
              前往 NICE Bilibili <Arrow />
            </a>
            <a className="text-button" href="https://www.youtube.com/@niceaitalk" target="_blank" rel="noreferrer">
              YouTube 频道 <Arrow />
            </a>
          </div>
          <div className="recording-grid">
            {speakers.map((speaker) => (
              <div key={speaker.name}>
                <span>{speaker.number}</span>
                <strong>{speaker.name}</strong>
                <small>VIDEO · 待发布</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><RootBrand className="footer-logo" /><span className="footer-caption">Rubric Reward Model Workshop</span></div>
        <p>与 NICE 联合发起 · 连接研究者、实践者与每一个对可信 AI 好奇的人。</p>
        <div className="footer-links">
          <a href="https://nice-intl.github.io/" target="_blank" rel="noreferrer">NICE <Arrow /></a>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </footer>
    </main>
  );
}
