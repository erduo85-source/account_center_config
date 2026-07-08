const icons = {
  file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  panel: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/><path d="M8 7v10"/></svg>',
  "chevron-left": '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  bulb: '<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.4 14.6a6 6 0 1 1 7.2 0c-.8.6-1.2 1.3-1.4 2.4H9.8c-.2-1.1-.6-1.8-1.4-2.4z"/></svg>',
  message: '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/></svg>',
  empty: '<svg viewBox="0 0 24 24"><path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M3 8h18"/></svg>'
};

const subjects = [
  ["10001", "上海游碧曜-代号月相", "游碧曜账号体系(10001)", "Y", "月相计划", "2026/11/22 17:00", "王健"],
  ["10002", "上海游碧曜-vgame专属", "游碧曜账号体系(10001)", "V", "VGAME-国内", "2026/11/21 15:30", "王健"],
  ["10003", "杭州游卡-三国杀OL专用", "游卡账号体系(10011)", "S", "三国杀OL", "2026/11/20 14:05", "江坤02"],
  ["10004", "杭州分浪网络科技有限公司（忍村专用）", "分浪账号体系(10021)", "N", "忍村专用", "2026/11/19 18:16", "江坤02"],
  ["10005", "成都樱臻", "樱臻账号体系(10031)", "M", "大梦勇士-App国内 代号：MA", "2026/11/18 11:42", "王健"],
  ["10006", "上海祺雾", "祺雾账号体系(10041)", "Q", "勇者远征-国内", "2026/11/17 10:10", "王健"],
  ["10007", "上海莱豪网络科技发展有限公司", "莱豪账号体系(10051)", "L", "花语恋 镇魂街王者归来-国内App", "2026/11/16 16:26", "江坤02"],
  ["10008", "上海游碧曜-无logo", "游碧曜账号体系(10001)", "", "七塔：艾丽西亚之影-国内 代号：潮汐 GS SDK-PC", "2026/11/15 09:28", "王健"]
];

let games = [
  { icon: "杀", name: "三国杀移动版", appid: "10100001", ext: "+2", appeal: true, recover: false, freeze: true, time: "2025-05-28 14:01:57", owner: "系统" },
  { icon: "策", name: "三国杀一将成名", appid: "10100011", ext: "", appeal: false, recover: true, freeze: true, time: "2025-05-21 10:16:34", owner: "王健" },
  { icon: "OL", name: "三国杀OL", appid: "10100002", ext: "", appeal: true, recover: true, freeze: false, time: "2025-05-18 20:18:25", owner: "系统" },
  { icon: "将", name: "三国杀名将传", appid: "10100005", ext: "", appeal: true, recover: false, freeze: true, time: "2025-05-12 11:52:41", owner: "系统" },
  { icon: "西", name: "自在西游", appid: "10100032", ext: "", appeal: false, recover: true, freeze: true, time: "2025-05-08 09:36:20", owner: "王健" },
  { icon: "海", name: "指间山海", appid: "10100042", ext: "", appeal: true, recover: true, freeze: false, time: "2025-05-06 17:28:03", owner: "系统" },
  { icon: "觉", name: "三国杀武将觉醒", appid: "10100080", ext: "", appeal: true, recover: false, freeze: true, time: "2025-04-30 15:12:09", owner: "系统" },
  { icon: "欢", name: "欢乐三国杀", appid: "10100031", ext: "", appeal: false, recover: true, freeze: true, time: "2025-04-24 13:45:18", owner: "王健" }
];

let protocols = [
  { name: "游卡用户协议", url: "https://platform.dobest.com/#/system/sdk/subject" },
  { name: "游卡隐私协议", url: "https://platform.dobest.com/#/system/sdk/subject" }
];

let faqs = [
  { order: "1", question: "如何找回账号？", answer: "可通过绑定手机、安全邮箱或客服申诉找回账号。" },
  { order: "2", question: "登录手机和安全手机有什么区别？", answer: "登录手机用于登录验证，安全手机用于敏感操作校验。" },
  { order: "3", question: "账号被冻结后怎么办？", answer: "请确认对应游戏的账号冻结能力，并按客服指引处理。" },
  { order: "4", question: "收不到验证码怎么办？", answer: "请确认手机或邮箱可用，并检查短信/邮件拦截设置。" }
];

const moduleMeta = {
  brand: ["品牌与合规", "配置账号中心前台品牌露出、备案版权和协议入口"],
  passport: ["通行证能力", "从顶部下沉到账户中心内部，按能力卡片配置"],
  game: ["游戏配置", "账号申诉、账号找回、账号冻结使用开启/关闭状态卡片"],
  appeal: ["账号申诉", "配置账号中心申诉条款、跳转链接和申诉须知"],
  cancel: ["账号注销", "保留账号注销配置入口，字段待业务规则确认后补充"],
  help: ["问题帮助", ""]
};

let currentModule = "brand";
let pendingModalAction = null;
let draggedGameIndex = null;
let pendingGameDropIndex = null;
let draggedFaqIndex = null;
let pendingFaqDropIndex = null;
let editingFaqIndex = null;

function icon(name) {
  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function applyStaticIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function showModal({ title, body, confirmText = "确定", mode = "default", onConfirm = null }) {
  pendingModalAction = onConfirm;
  const modal = document.querySelector(".modal");
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").innerHTML = body;
  document.getElementById("modalConfirm").textContent = confirmText;
  modal.classList.toggle("modal-compact", mode === "compact");
  modal.classList.toggle("modal-danger", mode === "danger");
  document.getElementById("modalConfirm").classList.toggle("danger", mode === "danger");
  document.getElementById("modalMask").classList.add("is-open");
  document.getElementById("modalMask").setAttribute("aria-hidden", "false");
}

function hideModal() {
  pendingModalAction = null;
  document.getElementById("modalMask").classList.remove("is-open");
  document.getElementById("modalMask").setAttribute("aria-hidden", "true");
}

function renderSubjects() {
  const rows = subjects.map(([id, name, account, logo, projects, time, owner]) => {
    const logoCell = logo ? `<span class="logo-mini">${logo}</span>` : `<span class="logo-mini" style="background:#d8dde7;color:#6b7280">--</span>`;
    return `<tr>
      <td>${id}</td>
      <td title="${escapeHtml(name)}">${name}</td>
      <td>${account}</td>
      <td>${logoCell}</td>
      <td title="${escapeHtml(projects)}">${projects}</td>
      <td>${time}</td>
      <td>${owner}</td>
      <td><div class="action-links"><button class="btn link view-subject">查看</button><button class="btn link copy-subject" disabled>复制</button></div></td>
    </tr>`;
  }).join("");
  document.getElementById("subjectRows").innerHTML = rows;
}

function setView(view) {
  document.getElementById("listView").classList.toggle("is-active", view === "list");
  document.getElementById("detailView").classList.toggle("is-active", view === "detail");
  if (view === "detail") renderModule(currentModule);
}

function heading(moduleKey) {
  const [title, hint] = moduleMeta[moduleKey];
  const info = moduleKey === "passport" ? `<span class="info-dot" title="${hint}">i</span>` : "";
  return `<div class="module-heading">
    <span class="section-bar"></span>
    <h2>${title}</h2>
    ${info}
    ${hint ? `<span class="hint">${hint}</span>` : ""}
  </div>`;
}

function renderBrand() {
  return `${heading("brand")}
    <div class="brand-form">
      <div class="brand-section-title">品牌LOGO:</div>
      <div class="logo-config-grid">
        ${logoConfig("顶部LOGO")}
        ${logoConfig("底部LOGO")}
      </div>

      <div class="brand-section-title">经营许可:</div>
      ${brandFieldRow("展示文案", "ICP备案：浙B2-20160108-22", "跳转链接", "https://platform.dobest.com/#/system/sdk/subject")}

      <div class="brand-section-title">公安备案:</div>
      ${brandFieldRow("展示文案", "浙公网安备33010502006938号", "跳转链接", "https://platform.dobest.com/#/system/sdk/subject")}

      <div class="brand-section-title">版权信息:</div>
      ${brandFieldRow("展示文案", "© 2026 杭州游卡网络技术有限公司", "跳转链接", "")}

      <div class="brand-section-title">自定义协议:</div>
      <div class="protocol-list" id="protocolList">
        ${protocols.map((item, index) => protocolFieldRow(item, index)).join("")}
      </div>
      <button class="full-add-button" data-action="add-protocol">+ 添加自定义协议</button>
    </div>`;
}

function logoConfig(label) {
  return `<div class="logo-config">
    <label>${label}<span class="info-dot small">i</span></label>
    <button class="upload-square" disabled><span>＋</span><small>Upload</small></button>
    <p>Recommended<br />resolution is 640*640<br />with file size less than<br />2MB, keep visual<br />elements centered</p>
  </div>`;
}

function brandFieldRow(labelA, valueA, labelB, valueB) {
  return `<div class="brand-field-row">
    <label>${labelA}<span class="info-dot small">i</span></label>
    <input value="${escapeHtml(valueA)}" />
    <label>${labelB}<span class="info-dot small">i</span></label>
    <input value="${escapeHtml(valueB)}" placeholder="请输入跳转链接" />
  </div>`;
}

function protocolFieldRow(item, index) {
  return `<div class="brand-field-row dynamic-row" data-protocol-index="${index}">
    <label>展示文案<span class="info-dot small">i</span></label>
    <input value="${escapeHtml(item.name)}" placeholder="请输入协议名称" />
    <label>跳转链接<span class="info-dot small">i</span></label>
    <input value="${escapeHtml(item.url)}" placeholder="请输入跳转链接" />
  </div>`;
}

function renderPassport() {
  return `${heading("passport")}
    <div class="passport-grid">
      ${abilityCard({
        icon: "lock",
        title: "账密登录",
        sub: "开启后，账号中心将支持密码重置、设置和修改功能",
        rows: [{ label: "账密登录", on: false }]
      })}
      ${abilityCard({
        icon: "phone",
        title: "绑定手机",
        sub: "开启后，账号中心将支持手机绑定、换绑及通过手机找回账号名",
        rows: [{ label: "登录手机", on: true }, { label: "安全手机", on: true }]
      })}
      ${abilityCard({
        icon: "mail",
        title: "绑定邮箱",
        sub: "开启后，账号中心将支持邮箱绑定、换绑及通过邮箱找回账号名",
        rows: [{ label: "安全邮箱", on: true }]
      })}
    </div>
    <div class="note-block">
      <span class="note-icon">${icon("bulb")}</span>
      <strong>提示</strong>
      <span>功能开关直接影响账号中心内提供给玩家的能力类型。</span>
    </div>`;
}

function abilityCard(data) {
  return `<article class="ability-card">
    <div class="ability-head">
      <span class="ability-icon">${icon(data.icon)}</span>
      <div class="ability-title">
        <h3>${data.title}</h3>
        ${data.tag ? `<span class="tag">${data.tag}</span>` : ""}
      </div>
    </div>
    <div class="ability-desc"><small title="${escapeHtml(data.sub)}">${data.sub}</small></div>
    <div class="ability-settings">${data.rows.map(settingRow).join("")}</div>
  </article>`;
}

function settingRow(row) {
  const disabled = row.disabled ? " is-disabled" : "";
  const on = row.on ? " is-on" : "";
  return `<div class="setting-row${disabled}">
    <span>${row.label}</span>
    <button class="switch${on}${disabled}" ${row.disabled ? "disabled" : ""} aria-label="${row.label}"></button>
  </div>`;
}

function renderGame() {
  return `${heading("game")}
    <div class="table-wrap game-table-wrap">
      <table class="data-table game-table">
        <thead>
          <tr>
            <th></th>
            <th>游戏</th>
            <th>appid</th>
            <th>账号申诉</th>
            <th>账号找回</th>
            <th>账号冻结</th>
            <th>最近更新时间</th>
            <th>最近更新人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>${games.map(gameRow).join("")}</tbody>
      </table>
    </div>
    <button class="full-add-button" data-action="add-game">+ 添加游戏</button>`;
}

function gameRow(game, index) {
  return `<tr data-game-index="${index}">
    <td class="drag-cell" draggable="true" title="拖拽排序" aria-label="拖拽排序">⋮</td>
    <td><span class="game-name"><span class="game-icon">${game.icon}</span><span>${game.name}</span></span></td>
    <td>${game.appid}${game.ext ? `<span class="mini-tag">${game.ext}</span>` : ""}</td>
    <td>${statusCard(game.appeal)}</td>
    <td>${statusCard(game.recover)}</td>
    <td>${statusCard(game.freeze)}</td>
    <td>${game.time}</td>
    <td>${game.owner}</td>
    <td><div class="action-links"><button class="btn link" data-action="edit-game" data-index="${index}">编辑</button><button class="btn link danger-link" data-action="delete-game" data-index="${index}">删除</button></div></td>
  </tr>`;
}

function statusCard(on) {
  return `<span class="status-card ${on ? "on" : "off"}"><i></i>${on ? "开启" : "关闭"}</span>`;
}

function renderAppeal() {
  return `${heading("appeal")}
    <section class="form-section">
      <h3>申诉条款</h3>
      <div class="form-grid">
        <div class="form-control"><label>展示文案</label><input value="账号申诉服务条款" /></div>
        <div class="form-control"><label>跳转链接</label><input value="https://platform.dobest.com/#/appeal/terms" /></div>
      </div>
    </section>
    <section class="form-section">
      <h3>申诉须知</h3>
      <div class="editor">
        <div class="editor-toolbar">
          <button title="加粗">B</button><button title="斜体">I</button><button title="下划线">U</button>
          <button title="链接">🔗</button><button title="列表">☷</button><span>正文</span>
        </div>
        <div class="editor-body">
          <p>为提高申诉处理效率，请玩家尽量提供常用登录方式、近期充值记录、角色信息和可联系手机号。</p>
          <p>提交后可在账号中心查看处理进度，客服将在核验资料后反馈结果。</p>
        </div>
      </div>
    </section>`;
}

function renderCancel() {
  return `${heading("cancel")}
    <div class="empty-state">
      <span class="empty-icon">${icon("empty")}</span>
      <strong>账号注销配置待补充</strong>
      <span>当前仅保留入口，不展示未确认字段。待账号注销业务规则明确后再补充配置项。</span>
    </div>`;
}

function renderHelp() {
  return `${heading("help")}
    <div class="help-layout">
      <h3>FAQ</h3>
      <div class="table-wrap">
        <table class="data-table faq-table">
          <thead><tr><th></th><th>排序</th><th>问题</th><th>答案摘要</th><th>操作</th></tr></thead>
          <tbody>
            ${faqs.map(faqRow).join("")}
          </tbody>
        </table>
      </div>
      <button class="full-add-button" data-action="add-faq">+ 添加FAQ</button>
      <section class="support-card">
        <h3>客服</h3>
        <div class="brand-field-row support-row">
          <label>展示文案</label>
          <input value="联系客服" />
          <label>跳转链接</label>
          <input value="https://platform.dobest.com/#/service" />
        </div>
      </section>
    </div>`;
}

function faqRow(item, index) {
  const isEditing = editingFaqIndex === index;
  return `<tr data-faq-index="${index}">
    <td class="drag-cell" draggable="true" title="拖拽排序" aria-label="拖拽排序">⋮</td>
    <td>${item.order}</td>
    <td>${isEditing ? `<input class="inline-input faq-question-input" value="${escapeHtml(item.question)}" placeholder="请输入问题" />` : escapeHtml(item.question)}</td>
    <td>${isEditing ? `<input class="inline-input faq-answer-input" value="${escapeHtml(item.answer)}" placeholder="请输入答案摘要" />` : escapeHtml(item.answer)}</td>
    <td><div class="action-links">
      <button class="btn link" data-action="${isEditing ? "save-faq" : "edit-faq"}" data-index="${index}">${isEditing ? "保存" : "编辑"}</button>
      <button class="btn link danger-link" data-action="delete-faq" data-index="${index}">删除</button>
    </div></td>
  </tr>`;
}

function renderModule(moduleKey) {
  const renderers = { brand: renderBrand, passport: renderPassport, game: renderGame, appeal: renderAppeal, cancel: renderCancel, help: renderHelp };
  currentModule = moduleKey;
  document.getElementById("moduleContent").innerHTML = renderers[moduleKey]();
  document.querySelectorAll(".module-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.module === moduleKey);
  });
}

function gameForm(game = {}) {
  const selectedProject = escapeHtml(game.project || game.name || "");
  const appleEnabled = game.appleVerify ?? true;
  const appleFieldClass = appleEnabled ? "" : " is-hidden";
  return `<div class="modal-tip">如未找到所需项目，请联系SDK部门进行添加</div>
  <div class="modal-form game-modal-form">
    <div class="modal-field-row">
      <label for="modalGameProject">项目选择 <b>*</b><span class="modal-info">i</span></label>
      <select id="modalGameProject">
        <option value="" data-appid="">请选择项目</option>
        ${games.map((item) => `<option value="${escapeHtml(item.name)}" data-appid="${escapeHtml(item.appid)}" ${item.name === selectedProject ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}
      </select>
    </div>
    <div class="modal-field-row">
      <label for="modalGameName">展示游戏名 <b>*</b><span class="modal-info">i</span></label>
      <input id="modalGameName" value="${escapeHtml(game.name || "")}" placeholder="请输入展示游戏名称" />
    </div>
    <div class="modal-field-row">
      <label>关联功能 <b>*</b><span class="modal-info">i</span></label>
      <div class="modal-checks">
        <label><input id="modalGameAppeal" type="checkbox" ${game.appeal ?? true ? "checked" : ""} />账号申诉</label>
        <label><input id="modalGameRecover" type="checkbox" ${game.recover ?? false ? "checked" : ""} />账号找回</label>
        <label><input id="modalGameFreeze" type="checkbox" ${game.freeze ?? false ? "checked" : ""} />账号冻结</label>
      </div>
    </div>
    <div class="modal-field-row">
      <label>验证苹果订单<span class="modal-info">i</span></label>
      <button class="modal-switch ${appleEnabled ? "is-on" : ""}" id="modalAppleVerify" type="button" aria-pressed="${appleEnabled ? "true" : "false"}"></button>
    </div>
    <div class="modal-field-row apple-param-row${appleFieldClass}">
      <label for="modalAppleBundle">苹果包名<span class="modal-info">i</span></label>
      <input id="modalAppleBundle" value="${escapeHtml(game.appleBundle || "")}" placeholder="请输入苹果包名" />
    </div>
    <div class="modal-field-row apple-param-row${appleFieldClass}">
      <label for="modalKeyId">KeyID<span class="modal-info">i</span></label>
      <input id="modalKeyId" value="${escapeHtml(game.keyId || "")}" placeholder="请输入 KeyID" />
    </div>
    <div class="modal-field-row apple-param-row${appleFieldClass}">
      <label for="modalIssuerId">IssuerID<span class="modal-info">i</span></label>
      <input id="modalIssuerId" value="${escapeHtml(game.issuerId || "")}" placeholder="请输入 IssuerID" />
    </div>
    <div class="modal-field-row apple-param-row${appleFieldClass}">
      <label for="modalPrivateKey">PrivateKey<span class="modal-info">i</span></label>
      <input id="modalPrivateKey" value="${escapeHtml(game.privateKey || "")}" placeholder="请输入 PrivateKey" />
    </div>
  </div>`;
}

function syncAppleParamRows() {
  const appleSwitch = document.getElementById("modalAppleVerify");
  if (!appleSwitch) return;
  const visible = appleSwitch.classList.contains("is-on");
  document.querySelectorAll(".apple-param-row").forEach((row) => {
    row.classList.toggle("is-hidden", !visible);
  });
}

function readGameForm(oldGame = {}) {
  const projectSelect = document.getElementById("modalGameProject");
  const name = document.getElementById("modalGameName").value.trim();
  const project = projectSelect.value.trim();
  const appid = projectSelect.selectedOptions[0]?.dataset.appid || oldGame.appid || "";
  const appleVerify = document.getElementById("modalAppleVerify").classList.contains("is-on");
  return {
    icon: name.slice(0, 1) || "游",
    name: name || project || "未命名游戏",
    project,
    appid: appid || oldGame.appid || "请输入appid",
    ext: oldGame.ext || "",
    appeal: document.getElementById("modalGameAppeal").checked,
    recover: document.getElementById("modalGameRecover").checked,
    freeze: document.getElementById("modalGameFreeze").checked,
    appleVerify,
    appleBundle: appleVerify ? document.getElementById("modalAppleBundle").value.trim() : "",
    keyId: appleVerify ? document.getElementById("modalKeyId").value.trim() : "",
    issuerId: appleVerify ? document.getElementById("modalIssuerId").value.trim() : "",
    privateKey: appleVerify ? document.getElementById("modalPrivateKey").value.trim() : "",
    time: oldGame.time || "2026-07-08 13:00:00",
    owner: oldGame.owner || "王健"
  };
}

function addProtocolRow() {
  protocols.push({ name: "", url: "" });
  renderModule("brand");
  showToast("已添加一行自定义协议");
}

function addFaqRow() {
  faqs.push({ order: String(faqs.length + 1), question: "", answer: "" });
  editingFaqIndex = faqs.length - 1;
  renderModule("help");
  showToast("已添加一行FAQ");
}

function clearDragState(selector) {
  document.querySelectorAll(selector).forEach((row) => {
    row.classList.remove("is-dragging", "is-drop-before", "is-drop-after");
  });
}

function clearGameDragState() {
  clearDragState(".game-table tr");
}

function clearFaqDragState() {
  clearDragState(".faq-table tr");
}

function reorderGames(fromIndex, dropIndex) {
  if (fromIndex === null || dropIndex === null) return false;
  if (fromIndex < 0 || fromIndex >= games.length) return false;
  const boundedDropIndex = Math.max(0, Math.min(dropIndex, games.length));
  if (fromIndex === boundedDropIndex || fromIndex + 1 === boundedDropIndex) return false;

  const [moved] = games.splice(fromIndex, 1);
  const adjustedDropIndex = fromIndex < boundedDropIndex ? boundedDropIndex - 1 : boundedDropIndex;
  games.splice(adjustedDropIndex, 0, moved);
  return true;
}

function reorderFaqs(fromIndex, dropIndex) {
  if (fromIndex === null || dropIndex === null) return false;
  if (fromIndex < 0 || fromIndex >= faqs.length) return false;
  const boundedDropIndex = Math.max(0, Math.min(dropIndex, faqs.length));
  if (fromIndex === boundedDropIndex || fromIndex + 1 === boundedDropIndex) return false;

  const [moved] = faqs.splice(fromIndex, 1);
  const adjustedDropIndex = fromIndex < boundedDropIndex ? boundedDropIndex - 1 : boundedDropIndex;
  faqs.splice(adjustedDropIndex, 0, moved);
  faqs.forEach((item, index) => {
    item.order = String(index + 1);
  });
  if (editingFaqIndex !== null) {
    editingFaqIndex = adjustedDropIndex;
  }
  return true;
}

function saveFaqRow(index) {
  const row = document.querySelector(`.faq-table tbody tr[data-faq-index="${index}"]`);
  if (!row) return;
  faqs[index].question = row.querySelector(".faq-question-input")?.value.trim() || "";
  faqs[index].answer = row.querySelector(".faq-answer-input")?.value.trim() || "";
  editingFaqIndex = null;
  renderModule("help");
  showToast("已保存FAQ");
}

function openDeleteFaqModal(index) {
  showModal({
    title: "确认删除",
    body: `<p>请确认是否删除该信息</p>`,
    confirmText: "确认",
    mode: "compact",
    onConfirm: () => {
      faqs.splice(index, 1);
      faqs.forEach((item, itemIndex) => {
        item.order = String(itemIndex + 1);
      });
      editingFaqIndex = null;
      renderModule("help");
      showToast("已删除FAQ");
      hideModal();
    }
  });
}

function openAddGameModal() {
  showModal({
    title: "接入其他游戏",
    body: gameForm(),
    confirmText: "确认",
    onConfirm: () => {
      games.push(readGameForm());
      renderModule("game");
      showToast("已添加游戏配置");
      hideModal();
    }
  });
}

function openEditGameModal(index) {
  const game = games[index];
  showModal({
    title: "编辑其他游戏",
    body: gameForm(game),
    confirmText: "确认",
    onConfirm: () => {
      games[index] = readGameForm(game);
      renderModule("game");
      showToast("已更新游戏配置");
      hideModal();
    }
  });
}

function openDeleteGameModal(index) {
  const game = games[index];
  showModal({
    title: "确认删除",
    body: `<p>确认后仅从暂存列表移除。</p><p>点击页面右上“保存”后正式生效。</p>`,
    confirmText: "确认",
    mode: "compact",
    onConfirm: () => {
      games.splice(index, 1);
      renderModule("game");
      showToast("已删除游戏配置");
      hideModal();
    }
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("button:disabled")) {
      return;
    }

    const viewSubject = event.target.closest(".view-subject");
    if (viewSubject) {
      currentModule = "brand";
      setView("detail");
      return;
    }

    const moduleButton = event.target.closest(".module-item");
    if (moduleButton) {
      renderModule(moduleButton.dataset.module);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (action) {
      const actionName = action.dataset.action;
      if (actionName === "add-protocol") addProtocolRow();
      if (actionName === "add-faq") addFaqRow();
      if (actionName === "add-game") openAddGameModal();
      if (actionName === "edit-game") openEditGameModal(Number(action.dataset.index));
      if (actionName === "delete-game") openDeleteGameModal(Number(action.dataset.index));
      if (actionName === "edit-faq") {
        editingFaqIndex = Number(action.dataset.index);
        renderModule("help");
      }
      if (actionName === "save-faq") saveFaqRow(Number(action.dataset.index));
      if (actionName === "delete-faq") openDeleteFaqModal(Number(action.dataset.index));
      return;
    }

    const modalSwitch = event.target.closest(".modal-switch");
    if (modalSwitch) {
      modalSwitch.classList.toggle("is-on");
      modalSwitch.setAttribute("aria-pressed", modalSwitch.classList.contains("is-on") ? "true" : "false");
      if (modalSwitch.id === "modalAppleVerify") syncAppleParamRows();
      return;
    }

    const switchButton = event.target.closest(".switch:not(.is-disabled)");
    if (switchButton) {
      switchButton.classList.toggle("is-on");
      showToast("已更新当前页面状态，请点击保存提交");
    }
  });

  document.addEventListener("dragstart", (event) => {
    const handle = event.target.closest(".drag-cell");
    if (!handle) return;
    const gameRow = handle.closest("tr[data-game-index]");
    const faqRow = handle.closest("tr[data-faq-index]");
    if (gameRow) {
      draggedGameIndex = Number(gameRow.dataset.gameIndex);
      pendingGameDropIndex = draggedGameIndex;
      gameRow.classList.add("is-dragging");
      event.dataTransfer.setData("text/plain", String(draggedGameIndex));
    } else if (faqRow) {
      draggedFaqIndex = Number(faqRow.dataset.faqIndex);
      pendingFaqDropIndex = draggedFaqIndex;
      faqRow.classList.add("is-dragging");
      event.dataTransfer.setData("text/plain", String(draggedFaqIndex));
    } else {
      return;
    }
    event.dataTransfer.effectAllowed = "move";
  });

  document.addEventListener("dragover", (event) => {
    if (draggedGameIndex === null && draggedFaqIndex === null) return;
    const row = draggedGameIndex !== null
      ? event.target.closest(".game-table tbody tr[data-game-index]")
      : event.target.closest(".faq-table tbody tr[data-faq-index]");
    if (!row) return;
    event.preventDefault();
    const targetIndex = Number(draggedGameIndex !== null ? row.dataset.gameIndex : row.dataset.faqIndex);
    const rect = row.getBoundingClientRect();
    const dropAfter = event.clientY > rect.top + rect.height / 2;
    if (draggedGameIndex !== null) {
      pendingGameDropIndex = targetIndex + (dropAfter ? 1 : 0);
      clearGameDragState();
      document.querySelector(`.game-table tbody tr[data-game-index="${draggedGameIndex}"]`)?.classList.add("is-dragging");
    } else {
      pendingFaqDropIndex = targetIndex + (dropAfter ? 1 : 0);
      clearFaqDragState();
      document.querySelector(`.faq-table tbody tr[data-faq-index="${draggedFaqIndex}"]`)?.classList.add("is-dragging");
    }
    row.classList.add(dropAfter ? "is-drop-after" : "is-drop-before");
    event.dataTransfer.dropEffect = "move";
  });

  document.addEventListener("drop", (event) => {
    if (draggedGameIndex === null && draggedFaqIndex === null) return;
    const table = event.target.closest(".game-table, .faq-table");
    if (!table) return;
    event.preventDefault();
    const changed = table.classList.contains("game-table")
      ? reorderGames(draggedGameIndex, pendingGameDropIndex)
      : reorderFaqs(draggedFaqIndex, pendingFaqDropIndex);
    const isFaqDrop = table.classList.contains("faq-table");
    draggedGameIndex = null;
    pendingGameDropIndex = null;
    draggedFaqIndex = null;
    pendingFaqDropIndex = null;
    clearGameDragState();
    clearFaqDragState();
    if (changed) {
      renderModule(isFaqDrop ? "help" : "game");
      showToast(isFaqDrop ? "已更新FAQ排序，请点击保存提交" : "已更新游戏排序，请点击保存提交");
    }
  });

  document.addEventListener("dragend", () => {
    draggedGameIndex = null;
    pendingGameDropIndex = null;
    draggedFaqIndex = null;
    pendingFaqDropIndex = null;
    clearGameDragState();
    clearFaqDragState();
  });

  document.getElementById("backToList").addEventListener("click", () => setView("list"));

  document.getElementById("saveButton").addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.classList.add("is-loading");
    button.textContent = "保存中";
    setTimeout(() => {
      button.classList.remove("is-loading");
      button.textContent = "保存";
      showToast("保存成功");
    }, 700);
  });

  document.getElementById("modalConfirm").addEventListener("click", () => {
    if (pendingModalAction) {
      pendingModalAction();
    } else {
      hideModal();
    }
  });

  ["modalClose", "modalCancel"].forEach((id) => {
    document.getElementById(id).addEventListener("click", hideModal);
  });

  document.getElementById("modalMask").addEventListener("click", (event) => {
    if (event.target.id === "modalMask") hideModal();
  });
}

renderSubjects();
applyStaticIcons();
bindEvents();
