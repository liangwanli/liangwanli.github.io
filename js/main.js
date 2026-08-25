(() => {
  "use strict";

  const copy = {
    zh: {
      pageTitle: "潘晓枞 | 学术主页", navAbout: "关于", navNews: "动态", navPublications: "论文", navProjects: "项目", navCompetitions: "竞赛", navAwards: "荣誉", menu: "菜单",
      identity: "华南农业大学 · 人工智能", profileNote: "本科生 · 2023 级", aboutTitle: "关于我", aboutStatus: "保持好奇，持续学习",
      aboutIntro: "我目前是华南农业大学人工智能专业的本科生。我的学习与研究训练主要围绕计算机视觉和深度学习展开，希望把可靠、高效的视觉模型应用到真实的农业、医疗与边缘计算场景中。",
      aboutResearch: "我做过辣椒叶片病害检测、稠密鱼苗计数、脑肿瘤分割、模型校准和水稻病害检测等项目，关注从数据处理、模型设计与训练，到指标评估和结果可视化的完整研究流程。",
      aboutFocus: "目前感兴趣的方向包括 <strong>目标检测</strong>、<strong>医学图像分割</strong>、<strong>多模态学习</strong>、<strong>轻量化模型</strong> 与 <strong>边缘智能</strong>。",
      newsTitle: "最新动态", newsCompetition: "🎉 获得中国大学生计算机设计大赛人工智能应用赛道国家级二等奖。", newsPaper: "论文 <em>MSM-Unet</em> 被 IEEE 会议 CITSC 2026 录用（第一作者）。",
      publicationsTitle: "论文成果", accepted: "已录用", firstAuthor: "（第一作者）", paperDescription: "针对医学图像病灶尺度差异大、形态不规则以及编解码器语义差异问题，提出 MSM-Unet：使用多尺度 Mamba 模块联合建模局部细节和长程依赖，并通过增强型跳跃连接融合浅层边缘与深层语义特征。在 BraTS 数据集上，WT、TC、ET 分割指标均优于 TransUNet 和基准 Mamba 模型。",
      educationTitle: "教育经历", school: "华南农业大学", degree: "人工智能专业 · 本科在读", projectsTitle: "代表项目",
      projectsIntro: "以下内容依据旧主页整理；后续可补充项目时间、导师、数据集、量化结果、论文与代码链接。",
      project1: "面向农业场景中的辣椒叶片病害识别，设计并训练目标检测流程，参与模型改进、实验设计与评估。",
      project2: "针对复杂养殖环境中的稠密鱼苗计数，完成数据准备、检测模型训练与计数结果分析。",
      project3: "提出多尺度 Mamba 模块和增强型跳跃连接，在 BraTS 数据集上开展脑肿瘤分割实验；相关论文已被 IEEE CITSC 2026 录用，本人为第一作者。",
      project4: "研究深度神经网络的置信度校准，开展损失设计探索与实验对比，以提升预测可信度。",
      project5: "使用可变形卷积增强水稻病害特征提取，参与骨干网络修改、消融实验和检测结果分析。",
      competitionsTitle: "竞赛经历", competition1: "中国大学生计算机设计大赛 · 人工智能应用赛道", competition2: "“AI for Science”大湾区杯科技竞赛", competition3: "蓝桥杯全国软件和信息技术大赛软件赛", competition4: "中国机器人及人工智能大赛", competition5: "全国大学生数学建模竞赛", nationalSecond: "国家级二等奖", nationalThird: "国家级三等奖", provincialSecond: "省级二等奖",
      awardsTitle: "奖励荣誉", award1: "国家奖学金", award2: "丁颖奖学金", award3: "国家励志奖学金", footer: "使用 HTML、CSS 与 JavaScript 构建"
    },
    en: {
      pageTitle: "Xiaocong Pan | Academic Homepage", navAbout: "About", navNews: "News", navPublications: "Publications", navProjects: "Projects", navCompetitions: "Competitions", navAwards: "Awards", menu: "Menu",
      identity: "SCAU · Artificial Intelligence", profileNote: "Undergraduate · Class of 2023", aboutTitle: "About Me", aboutStatus: "Stay curious, keep learning",
      aboutIntro: "I am an undergraduate student majoring in Artificial Intelligence at South China Agricultural University. My training focuses on computer vision and deep learning, with the goal of building reliable and efficient visual models for real-world agricultural, medical, and edge-computing scenarios.",
      aboutResearch: "My projects include pepper leaf disease detection, dense fish fry counting, brain tumor segmentation, model calibration, and rice disease detection. I am interested in the full research workflow, from data processing and model design to training, evaluation, and visualization.",
      aboutFocus: "My current interests include <strong>object detection</strong>, <strong>medical image segmentation</strong>, <strong>multimodal learning</strong>, <strong>lightweight models</strong>, and <strong>edge AI</strong>.",
      newsTitle: "News", newsCompetition: "🎉 Won the National Second Prize in the AI Application Track of the Chinese Collegiate Computing Competition.", newsPaper: "Our paper <em>MSM-Unet</em> was accepted by IEEE CITSC 2026 (first author).",
      publicationsTitle: "Publications", accepted: "Accepted", firstAuthor: "(First Author)", paperDescription: "MSM-Unet addresses large lesion-scale variations, irregular morphology, and the semantic gap between encoders and decoders. It combines a multi-scale Mamba module for local details and long-range dependencies with enhanced skip connections for shallow-edge and deep-semantic fusion. On BraTS, it outperforms TransUNet and baseline Mamba models across WT, TC, and ET segmentation metrics.",
      educationTitle: "Education", school: "South China Agricultural University", degree: "B.Eng. candidate in Artificial Intelligence", projectsTitle: "Selected Projects",
      projectsIntro: "These entries were collected from my previous homepage. Dates, advisors, datasets, quantitative results, papers, and code links can be added as they become available.",
      project1: "Designed and trained an object detection pipeline for pepper leaf disease recognition, contributing to model improvement, experiment design, and evaluation.",
      project2: "Prepared data and trained a YOLOv9-based detector for dense fish fry counting under complex aquaculture conditions, followed by counting analysis.",
      project3: "Developed a multi-scale Mamba module and enhanced skip connections for brain tumor segmentation on BraTS. The resulting first-author paper was accepted by IEEE CITSC 2026.",
      project4: "Investigated contrastive-learning-based calibration strategies to improve confidence reliability in deep neural networks.",
      project5: "Applied deformable convolution to rice disease detection, including backbone modification, ablation studies, and result analysis.",
      competitionsTitle: "Competitions", competition1: "Chinese Collegiate Computing Competition · AI Application Track", competition2: "AI for Science Greater Bay Area Cup", competition3: "Lanqiao Cup National Software and Information Technology Competition", competition4: "China Robot and Artificial Intelligence Competition", competition5: "China Undergraduate Mathematical Contest in Modeling", nationalSecond: "National Second Prize", nationalThird: "National Third Prize", provincialSecond: "Provincial Second Prize",
      awardsTitle: "Awards", award1: "National Scholarship", award2: "Ding Ying Scholarship", award3: "National Encouragement Scholarship", footer: "Built with HTML, CSS & JavaScript"
    }
  };

  const nav = document.querySelector("#top-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const languageButtons = document.querySelectorAll("[data-lang-switch]");

  function setLanguage(language) {
    const selected = copy[language] || copy.zh;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = selected.pageTitle;
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = selected[element.dataset.copy];
      if (value) element.innerHTML = value;
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.langSwitch === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem("xiaocong-homepage-language", language); } catch (_) { /* optional preference */ }
  }

  menuToggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open") || false;
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }));
  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.langSwitch)));

  const sections = document.querySelectorAll(".section");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    sections.forEach((section) => observer.observe(section));
  } else {
    sections.forEach((section) => section.classList.add("visible"));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  let initialLanguage = "zh";
  try { initialLanguage = localStorage.getItem("xiaocong-homepage-language") || "zh"; } catch (_) { initialLanguage = "zh"; }
  setLanguage(initialLanguage);
})();
