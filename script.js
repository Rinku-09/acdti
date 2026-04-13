const questions = [
  {
    text: "群里突然有人提议开个新坑，你第一反应通常是？",
    options: [
      { text: "先上车再说，不管是什么类型的游戏，总之开了再研究", dimension: "AC", letter: "A", weight: 2, roles: ["ADRS", "ATRI", "ATLI"] },
      { text: "可以先试一小段，边玩边判断值不值得继续", dimension: "AC", letter: "A", weight: 1, roles: ["ADRS", "ATRI", "ATLI"] },
      { text: "先看规则、时长、配置和群友活跃度，再决定要不要投入", dimension: "AC", letter: "C", weight: 2, roles: ["CDRS", "CDLI", "CTRI", "CTLS"] },
      { text: "先旁观两天，等评价和翻车案例出来再说", dimension: "AC", letter: "C", weight: 1, roles: ["CDRS", "CDLS", "CTLS"] }
    ]
  },
  {
    text: "看到一个没玩过但讨论度很高的作品时，你更容易被什么打动？",
    options: [
      { text: "它够怪、够香、够有独特审美，最好还能戳中什么奇妙癖好", dimension: "DT", letter: "D", weight: 2, roles: ["ADRI", "ADLI", "ATLS", "CDRS"] },
      { text: "只要角色和氛围够有味道，我就愿意进去看看", dimension: "DT", letter: "D", weight: 1, roles: ["ADRI", "ADLS", "CDLS"] },
      { text: "它系统够硬、流程够、扎实经得起啃", dimension: "DT", letter: "T", weight: 2, roles: ["ADRS", "ATRI", "CDLS", "CTRI"] },
      { text: "只要玩法做得好，我会比设定更先记住它", dimension: "DT", letter: "T", weight: 1 }
    ]
  },
  {
    text: "群友吵了半天还没定今晚玩什么时，你更像哪种人？",
    options: [
      { text: "直接拍板自己最想玩的那个，哪怕最后只剩两个人也先开", dimension: "IS", letter: "I", weight: 2, roles: ["ADRI", "ATRI", "CDRI", "CTRI"] },
      { text: "我会先扔几个备选，但明显更偏向自己的主张", dimension: "IS", letter: "I", weight: 1, roles: ["ATLI", "CTLI"] },
      { text: "优先协调大家口味，尽量让大部分人都能参与", dimension: "IS", letter: "S", weight: 2, roles: ["ADRS", "ADLS", "ATRS", "CTRS"] },
      { text: "谁掉队我都会在意，所以宁愿为了整体体验改计划", dimension: "IS", letter: "S", weight: 1, roles: ["CDRS", "CTLS"] }
    ]
  },
  {
    text: "联机计划突然炸了，队友临时咕咕两个人，你会？",
    options: [
      { text: "立刻重组名单、换人选、换项目，反正今晚必须有节目", dimension: "RL", letter: "R", weight: 2 },
      { text: "先想个替代方案，尽量别让这段时间浪费掉", dimension: "RL", letter: "R", weight: 1 },
      { text: "那就顺势开摆，各玩各的", dimension: "RL", letter: "L", weight: 2 },
      { text: "看其他人怎么说，有什么玩什么", dimension: "RL", letter: "L", weight: 1 }
    ]
  },
  {
    text: "群友给你安利一个超级长的世界观作品时，你通常怎么入坑？",
    options: [
      { text: "先冲进去玩，边踩坑边理解设定，路线和系统后面再说", dimension: "AC", letter: "A", weight: 2 },
      { text: "先开个头，能不能继续就看第一感觉和沉浸度", dimension: "AC", letter: "A", weight: 1 },
      { text: "先查背景、路线、评价和雷点，确认值得投入时间和情绪再进", dimension: "AC", letter: "C", weight: 2 },
      { text: "我会先问玩过的人核心卖点，确认适配度后再开", dimension: "AC", letter: "C", weight: 1 }
    ]
  },
  {
    text: "你评价一个人“很对味”的标准，通常更靠近？",
    options: [
      { text: "品味够怪、tag 够鲜明", dimension: "DT", letter: "D", weight: 2 },
      { text: "只要他有明确气质和独特偏好，我就会觉得这人有意思", dimension: "DT", letter: "D", weight: 1 },
      { text: "稳定输出、有体系、有硬实力", dimension: "DT", letter: "T", weight: 2 },
      { text: "我更欣赏能把兴趣沉淀成方法和积累的人", dimension: "DT", letter: "T", weight: 1 }
    ]
  },
  {
    text: "群友来吐槽上班或上学痛苦时，你通常会？",
    options: [
      { text: "直接给建议或者锐评", dimension: "IS", letter: "I", weight: 2 },
      { text: "我会先判断问题核心，再把结论讲清楚", dimension: "IS", letter: "I", weight: 1 },
      { text: "先陪着骂两句，再接住情绪，顺手补几张表情包或者梗图", dimension: "IS", letter: "S", weight: 2 },
      { text: "我更在意对方有没有被理解，而不是立刻被解决", dimension: "IS", letter: "S", weight: 1 }
    ]
  },
  {
    text: "如果这周空出一段完整时间，你更倾向于怎么安排？",
    options: [
      { text: "先把游戏项目和杂事统统排个顺序再执行，效率最大化", dimension: "RL", letter: "R", weight: 2 },
      { text: "我至少会先定一个主线目标，剩下的再灵活处理", dimension: "RL", letter: "R", weight: 1 },
      { text: "看当天状态决定，说不定临时有人喊联机", dimension: "RL", letter: "L", weight: 2 },
      { text: "如果心情变了，原计划随时可以扔掉", dimension: "RL", letter: "L", weight: 1 }
    ]
  },
  {
    text: "看到限时超低价打折游戏时，你通常会？",
    options: [
      { text: "不管是什么类型的游戏直接购入，错过才是真的亏", dimension: "AC", letter: "A", weight: 2, roles: ["ADLI", "ATLI", "ATRI"] },
      { text: "只要是感兴趣的先收着再说，后面玩不玩以后再考虑", dimension: "AC", letter: "A", weight: 1, roles: ["ADLI", "CTLS"] },
      { text: "先判断自己会不会真玩、真开、真上线，避免库存继续爆炸", dimension: "AC", letter: "C", weight: 2, roles: ["CDRS", "CDLI", "CTLS", "CTRI"] },
      { text: "折扣不是问题，时间和精力才是，我会先算账", dimension: "AC", letter: "C", weight: 1 }
    ]
  },
  {
    text: "聊到喜欢的作品时，你通常最在意它哪一点？",
    options: [
      { text: "设定、角色、风格和癖好浓度", dimension: "DT", letter: "D", weight: 2 },
      { text: "我会先记住它给我的感觉和气质", dimension: "DT", letter: "D", weight: 1 },
      { text: "系统、流程、构筑、玩法深度和完成度，能让我反复啃才算真好", dimension: "DT", letter: "T", weight: 2 },
      { text: "我更在意它有没有长期研究的价值", dimension: "DT", letter: "T", weight: 1 }
    ]
  },
  {
    text: "在一个长期待着的群里，你更希望自己是什么定位？",
    options: [
      { text: "有自己明确的风格和存在感，不必常驻语音，偶尔一发言就能让人认出来", dimension: "IS", letter: "I", weight: 2, roles: ["ADRI", "CDRS", "CTLI", "CTLS"] },
      { text: "我更想被记住的是观点和个人风格，而不是在线时长", dimension: "IS", letter: "I", weight: 1 },
      { text: "能和大家持续来回接梗，发梗图、搬屎、发生活都有人接", dimension: "IS", letter: "S", weight: 2, roles: ["ATRS", "ATLI", "CTRS"] },
      { text: "我希望自己是能持续维持群里温度的人", dimension: "IS", letter: "S", weight: 1 }
    ]
  },
  {
    text: "计划被打乱、多出一整天自由时间时，你大概率会？",
    options: [
      { text: "列清单，把想补游戏或者现实杂事一口气推进", dimension: "RL", letter: "R", weight: 2 },
      { text: "我会优先把积压最久的事情清掉，空窗期不能白给", dimension: "RL", letter: "R", weight: 1 },
      { text: "凭心情开摆，有人喊联机就顺势漂流", dimension: "RL", letter: "L", weight: 2 },
      { text: "这种意外空档最适合随便逛、随便刷、随便活", dimension: "RL", letter: "L", weight: 1 }
    ]
  },
  {
    text: "如果你在群里持续输出内容，你更可能输出哪一类？",
    options: [
      { text: "游戏评价、路线推荐、系统理解、受苦心得或者某部作品的深度安利", dimension: "DT", letter: "T", weight: 2, roles: ["ADRI", "CDRS", "CDLS", "CTRI"] },
      { text: "我更想留下的是能复用的经验和判断", dimension: "DT", letter: "T", weight: 1 },
      { text: "神秘发言、生活神人、表情包连发或者抽象瞬间", dimension: "DT", letter: "D", weight: 2, roles: ["ADLS", "ATLI", "ATLS", "CTRS"] },
      { text: "我更喜欢制造气味独特、会被人记住的表达", dimension: "DT", letter: "D", weight: 1, roles: ["ATLS", "CDLS"] }
    ]
  },
  {
    text: "你在语音频道里的默认状态更接近哪种？",
    options: [
      { text: "想上就上，不一定常驻，但进来一般会带自己的节奏和观点", dimension: "IS", letter: "I", weight: 2, roles: ["ADRS", "ATRI", "CDRI", "CTLI"] },
      { text: "我不是为了陪伴感上线的，更多是为了表达和参与关键段落", dimension: "IS", letter: "I", weight: 1 },
      { text: "有没有我都行，主要看大家在不在、气氛热不热、有没有人接话", dimension: "IS", letter: "S", weight: 2, roles: ["ADLS", "ATRS", "ATLI", "CTRS"] },
      { text: "语音对我来说更像一起待着，比发言多少更重要", dimension: "IS", letter: "S", weight: 1 }
    ]
  },
  {
    text: "面对现实生活里的身份标签时，你通常更像？",
    options: [
      { text: "就算我很忙，也照样会主动挤出时间整点自己想玩的", dimension: "AC", letter: "A", weight: 2, roles: ["ADRS", "ATRI", "CDLI", "CTLI"] },
      { text: "我通常是先开搞，再在过程中想办法平衡现实", dimension: "AC", letter: "A", weight: 1 },
      { text: "会根据现实阶段决定投入方式，先保证生活秩序，再安排兴趣浓度", dimension: "AC", letter: "C", weight: 2, roles: ["ADLS", "CDRS", "CTRI", "CTLS"] },
      { text: "现实优先不是认输，是我判断投入产出后的选择", dimension: "AC", letter: "C", weight: 1 }
    ]
  },
  {
    text: "当群里出现争议话题，你通常会？",
    options: [
      { text: "很快加入表达，不一定求共识，但一定有自己那套说法", dimension: "IS", letter: "I", weight: 2, roles: ["CDRI", "CTLI", "ATRI"] },
      { text: "如果我有明确判断，就会直接抛出来", dimension: "IS", letter: "I", weight: 1 },
      { text: "会观察气氛再决定怎么接，尽量让话题还能继续而不是直接炸掉", dimension: "IS", letter: "S", weight: 2, roles: ["ATRS", "CTRS", "CTLS"] },
      { text: "我更关心这波讨论会不会把群聊气氛带崩", dimension: "IS", letter: "S", weight: 1 }
    ]
  },
  {
    text: "如果给你一个周末，你更理想的打开方式是？",
    options: [
      { text: "先把要打的游戏、要看的内容、要做的事排清楚", dimension: "RL", letter: "R", weight: 2 },
      { text: "我会给周末一个主线，不然容易觉得自己什么都没干", dimension: "RL", letter: "R", weight: 1 },
      { text: "先让自己舒服起来，剩下的看是联机、单机还是刷一天奇怪内容", dimension: "RL", letter: "L", weight: 2 },
      { text: "理想周末就是不要被计划绑死，状态好才是第一位", dimension: "RL", letter: "L", weight: 1 }
    ]
  },
  {
    text: "如果你要安利自己最喜欢的一类内容，你更可能从哪里讲起？",
    options: [
      { text: "先讲角色、氛围、审美和那个只有懂的人才会懂的点", dimension: "DT", letter: "D", weight: 2, roles: ["ADRI", "ADLS", "CDLS"] },
      { text: "先讲它为什么特别、有记忆点、有独一份气质", dimension: "DT", letter: "D", weight: 1 },
      { text: "先讲机制、系统、路线设计和它为什么耐玩", dimension: "DT", letter: "T", weight: 2, roles: ["ADRS", "ATRI", "CDLS", "CTRI"] },
      { text: "先讲它的完成度和为什么值得花这么多时间", dimension: "DT", letter: "T", weight: 1 }
    ]
  },
  {
    text: "别人都在犹豫要不要换环境、换工作、换圈子时，你更倾向于？",
    options: [
      { text: "只要感觉不对或者有更好机会，我会很快动起来", dimension: "AC", letter: "A", weight: 2, roles: ["ADRS", "ATRI", "CTLI"] },
      { text: "我不怕变化，甚至会把变化当成新剧情", dimension: "AC", letter: "A", weight: 1 },
      { text: "我会先衡量风险、收益和后续成本，不会只凭一时情绪", dimension: "AC", letter: "C", weight: 2, roles: ["CDRS", "CDLI", "CTRI", "CTLS"] },
      { text: "换环境可以，但我要先确保新路径是可落地的", dimension: "AC", letter: "C", weight: 1 }
    ]
  },
  {
    text: "如果你在群里突然发一条内容，最像下面哪一种？",
    options: [
      { text: "一条很有个人风格的锐评、判断或者安利，不一定长但一定像我", dimension: "IS", letter: "I", weight: 2, roles: ["ADRI", "CDRI", "CTLI"] },
      { text: "我发东西主要是因为我真的想表达，不太在意接不接得住", dimension: "IS", letter: "I", weight: 1 },
      { text: "一串能把大家都钓出来的内容，比如梗图、新闻、神人见闻或者表情包", dimension: "IS", letter: "S", weight: 2, roles: ["ATRS", "ATLI", "CTRS"] },
      { text: "我发东西通常会下意识考虑别人会怎么接", dimension: "IS", letter: "S", weight: 1 }
    ]
  },
  {
    text: "面对一个长期大坑，你更容易？",
    options: [
      { text: "先立目标和节奏，慢慢推也得稳稳往前走", dimension: "RL", letter: "R", weight: 2, roles: ["ADRI", "ATRI", "CTRI", "CTLS"] },
      { text: "我会想办法维持推进感，不喜欢坑长期悬着", dimension: "RL", letter: "R", weight: 1 },
      { text: "看心情推进，什么时候上头什么时候狠狠推一波", dimension: "RL", letter: "L", weight: 2, roles: ["ADLI", "ATLI", "CDLS"] },
      { text: "这种大坑对我来说更像可以长期来回漂流的地方", dimension: "RL", letter: "L", weight: 1 }
    ]
  }
];

const dimensionLabels = {
  AC: {
    A: "A 行动驱动",
    C: "C 沉思校准"
  },
  DT: {
    D: "D 探索发散",
    T: "T 结构聚焦"
  },
  IS: {
    I: "I 独立判断",
    S: "S 协同共振"
  },
  RL: {
    R: "R 果断推进",
    L: "L 弹性流动"
  }
};

const roleMap = {
  ADRI: {
    title: "王隐蛋",
    summary: "隐藏高手，偏爱有深度、有系统、有角色投入感的内容，也总能把兴趣点拐到非常个人化的方向上。",
    strengths: ["审美取向鲜明", "沉浸式投入能力强", "擅长在复杂内容里找到乐趣", "乐于分享细节观察"],
    blindspots: ["偏好很强时容易显得过于挑食", "一旦进入兴趣领域就不太想抽离", "有时会把圈内梗密度拉得过高", "容易沉浸在自己的品味坐标里"],
    environment: "适合沉浸式剧情讨论、世界观交流、系统复杂度较高的游戏场景。",
    advice: "继续稳定输出你的品味体系，这套世界观辨识度已经很强了。"
  },
  ADRS: {
    title: "王行蛋",
    summary: "行动力拉满的整活选手，各种路线都很擅长随时切换。",
    strengths: ["进入状态快", "适应变化能力强", "能快速把气氛带热", "对新环境不怯场"],
    blindspots: ["节奏切换太快时会让人跟不上", "容易因为兴致上头而频繁换轨", "有时更享受启动而不是收尾"],
    environment: "适合需要快速接梗、快速融入、快速变化节奏的群体环境。",
    advice: "如果把整活和长期规划再多绑一点，你的压制力会更完整。"
  },
  ADLI: {
    title: "王玖蛋",
    summary: "精打细算又很会玩梗的史官玩家，会把群聊历史、Steam 资源和整活节奏都梳理得明明白白。",
    strengths: ["观察和记忆力强", "资源利用效率高", "会记关键细节", "擅长把零散信息串起来"],
    blindspots: ["容易对细节和得失过于上心", "偶尔会沉迷复盘和存档", "太会记东西时也容易顺手翻旧账"],
    environment: "适合长线聊天群、梗文化积累浓厚、需要记忆力和观察力的圈子。",
    advice: "你已经很会存档世界观了，再多一点主动输出会更有统治力。"
  },
  ADLS: {
    title: "王鎏蛋",
    summary: "罕见的稳定现充型样本，现实生活浓度很高，极具现实质感的存在。",
    strengths: ["现实生活感很强", "容易给人稳定踏实的感觉", "擅长把日常讲得有画面", "自带温和的人际亲和力"],
    blindspots: ["在抽象浓度过高的环境里容易显得画风不同", "现实事务多时在线波动会变大", "有时会被默认成成熟参考样本"],
    environment: "适合有人味、生活感强、愿意分享现实碎片的交流空间。",
    advice: "请继续维持这份罕见的现实系生态位。"
  },
  ATRI: {
    title: "王魂蛋",
    summary: "高投入高社交的重度玩家模板，资源、热情和社交欲都在线，属于会把游戏与二次元浓度同时拉满的存在。",
    strengths: ["热情外放", "愿意高投入经营兴趣", "很会带动社交场子", "对喜欢的东西有持续行动力"],
    blindspots: ["容易把热爱推到很高强度", "消费和投入上头时刹车感不足", "有时会不自觉把别人也卷进自己的热情里"],
    environment: "适合高活跃群聊、多人联机、展会和线下社交兼容的场景。",
    advice: "你的活力已经足够满了，偶尔也可以给钱包和精力条放个假。"
  },
  ATRS: {
    title: "王五蛋",
    summary: "现实行动力和兴趣表达欲都很强的一型，能在线上和线下之间丝滑切换。",
    strengths: ["行动半径大", "信息触角敏锐", "线下线上切换自然", "擅长持续提供新鲜话题"],
    blindspots: ["内容密度太高时容易让频道过载", "很会拱话题时也容易把节奏越带越大", "容易把自己的关注点推成群聊主线"],
    environment: "适合消息流密集、线下活动丰富、需要持续话题供给的社群。",
    advice: "继续做高质量情报与热情输出者，同时记得给大家一点缓冲时间。"
  },
  ATLI: {
    title: "王坏蛋",
    summary: "联机浓度很高的快乐型富哥，表情包火力和多人游戏参与欲都很足，存在感常常来自高频互动。",
    strengths: ["互动欲强", "很会活跃气氛", "多人场景参与感高", "容易让场子迅速热起来"],
    blindspots: ["表达频率高时容易变成刷屏源", "安静场合耐心偏低", "更偏爱热闹，单独沉浸感相对弱"],
    environment: "适合联机群、实时聊天频繁、需要高互动气氛的地方。",
    advice: "把你的气氛组能力再配一点精准收放，会更无敌。"
  },
  ATLS: {
    title: "王摆蛋",
    summary: "擅长用奇妙比喻和神秘表情包完成精神攻击的风格派选手，同时在系统复杂游戏上也有稳定审美。",
    strengths: ["表达方式辨识度高", "很会制造幽默瞬间", "抽象和逻辑可以同时存在", "总能给话题加一点怪味魅力"],
    blindspots: ["过于抽象时别人可能跟不上", "梗感太强会冲淡重点", "状态波动时容易在高能和摆烂之间跳变"],
    environment: "适合熟人浓度高、能接住比喻和抽象表达的聊天环境。",
    advice: "你的比喻系统已经成型，接下来只需要继续扩大弹药库。"
  },
  CDRI: {
    title: "王夜蛋",
    summary: "夜间高浓度输出型样本，偏好高压体验，也热衷分享的赤石时刻和政治表达。",
    strengths: ["抗压阈值高", "高强度内容也敢碰", "有自己的表达锋芒", "擅长把极端体验讲出戏剧性"],
    blindspots: ["讨论强度容易越聊越高", "情绪和观点上头时收束较慢", "容易把轻松聊天带进深夜硬核区"],
    environment: "适合愿意接高压游戏话题、时事讨论和深夜聊天的频道。",
    advice: "把你的高强度表达节奏控制好，会更容易收获稳定听众。"
  },
  CDRS: {
    title: "王秦蛋",
    summary: "低语音参与度但高内容品味的典型，偏向安静地沉浸在自己的游戏体系中，不太依赖联机热度建立存在感。",
    strengths: ["沉浸力强", "个人节奏稳定", "不靠高频出没也能维持存在感", "偏好成熟而专注"],
    blindspots: ["存在感建立速度偏慢", "容易被误解成过于安静", "交流往往结果导向，过程感较少"],
    environment: "适合单机浓度高、允许低频发言但高质量输出的环境。",
    advice: "偶尔多冒一下泡，别人会更容易发现你的含金量。"
  },
  CDLI: {
    title: "王二蛋",
    summary: "长期驻扎在研究生实验室生态位的学术派玩家，在现实科研和游戏兴趣之间维持独特平衡。",
    strengths: ["耐得住长期投入", "能在高压环境里维持兴趣火种", "专注度高", "在有限时间里也能认真经营爱好"],
    blindspots: ["容易被现实事务长期占线", "节奏受外部安排影响大", "有时会习惯性把自己排在最后"],
    environment: "适合理解学业节奏、能够容纳周期性失踪的熟人圈。",
    advice: "实验室之外也记得给游戏和生活留一点完整时间。"
  },
  CDLS: {
    title: "王鸽蛋",
    summary: "高性能摆烂边缘的技术型富哥，多派立场同时在线，是一种兼具战斗力与摸鱼欲的复合体。",
    strengths: ["技术力和游戏理解并存", "复杂系统上手快", "既能输出也能吐槽", "有明显的个人立场和风格"],
    blindspots: ["容易在高能力和低干劲之间横跳", "不想上班时摆烂气息会特别重", "立场鲜明时容易顺带开启辩论模式"],
    environment: "适合技术群、游戏群和价值观输出都能并行存在的环境。",
    advice: "你离完全体只差一点上班热情，但这点也许并不重要。"
  },
  CTRI: {
    title: "王河蛋",
    summary: "现实职业硬度很高的夜班生存者，身上形成了很强的耐压气质。",
    strengths: ["稳定可靠", "承压能力强", "面对高难环境也不容易慌", "给人一种很能扛事的感觉"],
    blindspots: ["容易把高压当常态", "精力透支时不一定会主动说", "生活节奏和常规作息容易脱轨"],
    environment: "适合理解职业辛苦、愿意接纳深夜出没和间歇消失的圈子。",
    advice: "高强度职业已经很硬核了，能休息的时候尽量别再给自己上难度。"
  },
  CTRS: {
    title: "王雪蛋",
    summary: "时事传播与梗图转发兼修的键政型频道活跃者，擅长在现实新闻和互联网气息之间来回切换。",
    strengths: ["信息敏感度高", "很会搬运和转译内容", "既能严肃也能玩梗", "容易成为频道消息源"],
    blindspots: ["容易把轻松聊天拉回现实议题", "信息量大时会改变群聊气压", "娱乐和公共讨论的边界有时会被冲淡"],
    environment: "适合消息传播快、愿意讨论现实议题和网络梗的社群。",
    advice: "保持信息敏感度的同时，偶尔也给群友留一点纯娱乐空间。"
  },
  CTLI: {
    title: "王笨蛋",
    summary: "还在学校阶段但游戏实力已经很能打的高频吐槽型选手，生活压力和输出欲通常同步上涨。",
    strengths: ["学习新东西很快", "游戏手感和执行力在线", "表达直接真实", "情绪有存在感，容易让人记住"],
    blindspots: ["压力一上来就容易外溢成吐槽", "现实阶段限制了节奏自由", "情绪波动时会影响持续性"],
    environment: "适合同龄交流、游戏话题充足、能接住校园日常吐槽的群体。",
    advice: "学习和游戏都别完全极端化，留点缓冲对你更舒服。"
  },
  CTLS: {
    title: "王穿蛋",
    summary: "安静省流型大学生样本，低语音、低联机、高资源利用率，用最小社交成本完成最大平台收益。",
    strengths: ["节奏克制", "资源意识强", "低存在感但稳定", "擅长用较少投入换到较高收益"],
    blindspots: ["容易被当成纯潜水成员", "主动建立存在感的频率偏低", "在热闹场里可能更倾向旁观而不是加入"],
    environment: "适合允许低频存在、以单机或轻交流为主的游戏环境。",
    advice: "你这套省流路线很稳，偶尔主动开口会让角色形象更完整。"
  }
};

const introPanel = document.getElementById("intro-panel");
const quizPanel = document.getElementById("quiz-panel");
const resultPanel = document.getElementById("result-panel");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const retakeButton = document.getElementById("retake-button");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionList = document.getElementById("option-list");
const resultType = document.getElementById("result-type");
const resultTitle = document.getElementById("result-title");
const resultSummary = document.getElementById("result-summary");
const strengthList = document.getElementById("strength-list");
const blindspotList = document.getElementById("blindspot-list");
const environmentText = document.getElementById("environment-text");
const adviceText = document.getElementById("advice-text");
const breakdownContainer = document.getElementById("dimension-breakdown");
const prevButton = document.getElementById("prev-btn");
const finishButton = document.getElementById("finish-btn");

let currentIndex = 0;
let scores = createInitialScores();
let roleScores = createInitialRoleScores();
let answerHistory = new Array(questions.length).fill(null);

function createInitialScores() {
  return {
    AC: { A: 0, C: 0 },
    DT: { D: 0, T: 0 },
    IS: { I: 0, S: 0 },
    RL: { R: 0, L: 0 }
  };
}

function createInitialRoleScores() {
  return Object.fromEntries(Object.keys(roleMap).map((code) => [code, 0]));
}
function recalculateScores() {
  scores = createInitialScores();
  roleScores = createInitialRoleScores();
  answerHistory.forEach((opt) => {
    if (opt) {
      scores[opt.dimension][opt.letter] += opt.weight || 1;
      if (opt.roles) {
        opt.roles.forEach((code) => {
          if (roleScores[code] !== undefined) roleScores[code] += opt.weight || 1;
        });
      }
    }
  });
}
function startQuiz() {
  currentIndex = 0;
  scores = createInitialScores();
  roleScores = createInitialRoleScores();
  answerHistory = new Array(questions.length).fill(null);
  introPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function resetExperience() {
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  introPanel.classList.remove("hidden");
}

function renderQuestion() {
  const currentQuestion = questions[currentIndex];
  questionCounter.textContent = `第 ${currentIndex + 1} 题 / 共 ${questions.length} 题`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  questionText.textContent = currentQuestion.text;
  optionList.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.textContent = option.text;
    if (answerHistory[currentIndex] === option) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () => handleAnswer(option));
    optionList.appendChild(button);
  });
  if (currentIndex === 0) {
    prevButton.classList.add("hidden");
    finishButton.classList.add("hidden");
  } else if (currentIndex === questions.length - 1) {
    prevButton.classList.add("hidden"); // 按要求：最后一题不显示上一题
    finishButton.classList.remove("hidden");
  } else {
    prevButton.classList.remove("hidden");
    finishButton.classList.add("hidden");
  }
}

function handleAnswer(option) {
  answerHistory[currentIndex] = option;
  recalculateScores(); // 重算分数

  // 核心修改：如果是最后一题，点击选项后不自动跳转，仅重新渲染UI
  if (currentIndex === questions.length - 1) {
    renderQuestion(); // 刷新页面以高亮已选项，并保持“完成测试”按钮可见
    return;
  }

  // 非最后一题，正常进入下一题
  currentIndex += 1;
  renderQuestion();
}
function handlePrev() {
  if (currentIndex > 0) {
    answerHistory[currentIndex] = null; // 清除当前题记录，允许重新作答
    currentIndex--;
    recalculateScores();
    renderQuestion();
  }
}
function handleFinish() {
  // 防止在最后一题未选择时直接点击完成
  if (answerHistory[currentIndex] === null) {
    alert("请先选择最后一题的选项后再完成测试");
    return;
  }
  showResult();
}
function resolveType() {
  const ranked = Object.keys(roleMap)
    .map((code) => ({
      code,
      score: getDimensionFitScore(code) + roleScores[code]
    }))
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.code || "ATRS";
}

function getDimensionFitScore(code) {
  return (
    scores.AC[code[0]] +
    scores.DT[code[1]] +
    scores.RL[code[2]] +
    scores.IS[code[3]]
  );
}

function buildDimensionSummary() {
  const mappings = [
    { key: "AC", left: "A", right: "C" },
    { key: "DT", left: "D", right: "T" },
    { key: "RL", left: "R", right: "L" },
    { key: "IS", left: "I", right: "S" }
  ];

  const items = mappings.map(({ key, left, right }) => {
    const leftScore = scores[key][left];
    const rightScore = scores[key][right];
    const winningLetter = leftScore >= rightScore ? left : right;
    const diff = Math.abs(leftScore - rightScore);
    const intensity = diff === 0 ? "非常接近，说明你会视情况切换。" : `偏好明显度 ${diff + 1}/4。`;

    return `
      <li>
        <strong>${dimensionLabels[key][winningLetter]}</strong>
        <span>${dimensionLabels[key][left]} ${leftScore} : ${rightScore} ${dimensionLabels[key][right]}</span>
        <p>${intensity}</p>
      </li>
    `;
  });

  breakdownContainer.innerHTML = `
    <h3>维度拆解</h3>
    <ul>${items.join("")}</ul>
  `;
}

function showResult() {
  const typeCode = resolveType();
  const result = roleMap[typeCode] || roleMap.ATRS;

  resultType.textContent = typeCode;
  resultTitle.textContent = result.title;
  resultSummary.textContent = result.summary;
  environmentText.textContent = result.environment;
  adviceText.textContent = result.advice;
  strengthList.innerHTML = result.strengths.map((item) => `<li>${item}</li>`).join("");
  blindspotList.innerHTML = result.blindspots.map((item) => `<li>${item}</li>`).join("");

  buildDimensionSummary();

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetExperience);
retakeButton.addEventListener("click", startQuiz);
prevButton.addEventListener("click", handlePrev);
finishButton.addEventListener("click", handleFinish);