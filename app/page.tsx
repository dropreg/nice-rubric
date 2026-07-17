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

const readingList = [
  {
    tag: "SURVEY",
    title: "The Rules of the Game: A Survey of Rubrics for Large Language Models",
    meta: "Liu et al. · 2026",
    href: "https://github.com/RUC-NLPIR/Rubrics_Survey",
  },
  {
    tag: "AGENT / RL",
    title: "RubricEM: Meta-RL with Rubric-guided Policy Decomposition beyond Verifiable Rewards",
    meta: "Li et al. · 2026",
    href: "https://arxiv.org/abs/2605.10899",
  },
  {
    tag: "BENCHMARK",
    title: "RubricBench: Aligning Model-Generated Rubrics with Human Standards",
    meta: "Zhang et al. · ACL 2026",
    href: "https://arxiv.org/abs/2603.01562",
  },
  {
    tag: "REASONING / RL",
    title: "Breaking the Exploration Bottleneck: Rubric-Scaffolded RL for General LLM Reasoning",
    meta: "Zhou et al. · ICML 2026",
    href: "https://arxiv.org/abs/2508.16949",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rubric Reward Model Workshop 首页">
          <span className="brand-mark">R²M</span>
          <span className="brand-line" />
          <span className="brand-partner">with NICE</span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">About</a>
          <a href="#speakers">Speakers</a>
          <a href="#materials">Materials</a>
          <a href="#watch">Watch</a>
        </nav>
        <a className="nav-cta" href="#watch">观看入口 <span aria-hidden="true">→</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-glow hero-glow-purple" />
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow"><span /> NICE × ACADEMIC COMMUNITY · SESSION 01</p>
          <h1>
            RUBRIC
            <span>REWARD MODEL</span>
            WORKSHOP
          </h1>
          <div className="hero-bottom">
            <p className="hero-lead">
              当答案不再只有对与错，<strong>我们如何定义、评估并优化“好答案”？</strong>
              四位青年研究者，从 rubric 构建、自动评测到强化学习，共同拆解下一代可解释奖励信号。
            </p>
            <div className="hero-meta">
              <div><span>FORMAT</span><strong>线上学术 Workshop</strong></div>
              <div><span>STATUS</span><strong className="live-dot">预热中 · Coming Soon</strong></div>
              <div><span>LANGUAGE</span><strong>中文 / Chinese</strong></div>
            </div>
          </div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <div className="topic-marquee" aria-label="活动主题">
        <div>
          <span>RUBRIC GENERATION</span><b>✦</b><span>REWARD MODELING</span><b>✦</b>
          <span>LLM-AS-A-JUDGE</span><b>✦</b><span>REINFORCEMENT LEARNING</span><b>✦</b>
          <span>AUTO-EVALUATION</span><b>✦</b><span>AGENTIC SEARCH</span><b>✦</b>
        </div>
      </div>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span /> 01 / CONCEPT</p>
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
            <span>R(x, y)</span>
            <b>=</b>
            <span>AGG</span>
            <i>(</i>
            <code>r₁: factuality</code>
            <code>r₂: coverage</code>
            <code>r₃: reasoning</code>
            <i>)</i>
          </div>
        </div>
      </section>

      <section className="process" aria-label="Rubric Reward Model 工作流程">
        {steps.map((step) => (
          <article key={step.key}>
            <span>{step.key}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="section speakers-section" id="speakers">
        <div className="section-heading speaker-heading">
          <p className="eyebrow"><span /> 02 / INVITED SPEAKERS</p>
          <h2>四种视角，<br />一套更好的标准。</h2>
          <p>从研究版图到前沿方法，从评测基准到强化学习实践。</p>
        </div>
        <div className="speakers-list">
          {speakers.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-number">{speaker.number}</div>
              <div className="portrait-wrap">
                <img src={`${basePath}${speaker.image}`} alt={`${speaker.name}肖像`} />
              </div>
              <div className="speaker-main">
                <p className="speaker-focus">{speaker.focus}</p>
                <h3>{speaker.name}<span>{speaker.englishName}</span></h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-bio">{speaker.bio}</p>
              </div>
              <div className="speaker-topic">
                <span>RESEARCH THREAD</span>
                <p>{speaker.topic}</p>
                <div className="speaker-links">
                  <a href={speaker.homepage} target="_blank" rel="noreferrer">个人主页 <Arrow /></a>
                  <a href={speaker.paper} target="_blank" rel="noreferrer">{speaker.paperName} <Arrow /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section materials" id="materials">
        <div className="section-heading">
          <p className="eyebrow"><span /> 03 / READING ROOM</p>
          <h2>会前阅读</h2>
          <p>四条精选研究线索，帮助你带着更具体的问题进入 workshop。</p>
        </div>
        <div className="reading-list">
          {readingList.map((item, index) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span className="reading-index">0{index + 1}</span>
              <div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.meta}</p></div>
              <Arrow />
            </a>
          ))}
        </div>
        <div className="resource-note">
          <span>SLIDES & MORE</span>
          <p>嘉宾 PPT、讲义与补充资料将在活动后持续更新到本页。</p>
          <strong>COMING SOON</strong>
        </div>
      </section>

      <section className="watch" id="watch">
        <div className="watch-orbit orbit-one" />
        <div className="watch-orbit orbit-two" />
        <div className="watch-inner">
          <p className="eyebrow"><span /> 04 / RECORDINGS</p>
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
        <div className="footer-brand"><strong>R²M</strong><span>Rubric Reward Model Workshop</span></div>
        <p>与 NICE 联合发起 · 连接研究者、实践者与每一个对可信 AI 好奇的人。</p>
        <div className="footer-links">
          <a href="https://nice-intl.github.io/" target="_blank" rel="noreferrer">NICE <Arrow /></a>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </footer>
    </main>
  );
}
