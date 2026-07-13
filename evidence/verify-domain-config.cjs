const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const evidenceDir = path.resolve(__dirname);
const nodeModulesRoot = "C:\\Users\\wangjian02\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules";
process.env.NODE_PATH = [nodeModulesRoot, path.join(nodeModulesRoot, ".pnpm", "node_modules"), process.env.NODE_PATH || ""]
  .filter(Boolean)
  .join(path.delimiter);
require("module").Module._initPaths();

const { chromium } = require("playwright");

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const localUrl = process.env.DOMAIN_CONFIG_URL || "http://127.0.0.1:8765/";

function requireFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`);
  }
}

async function captureAndValidate() {
  const browser = await chromium.launch({ headless: true, executablePath: edgePath });
  const page = await browser.newPage({ viewport: { width: 1912, height: 1140 }, deviceScaleFactor: 1 });
  const consoleMessages = [];
  const pageErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      consoleMessages.push({ type: message.type(), text: message.text() });
    }
  });
  page.on("pageerror", (error) => pageErrors.push(String(error && error.stack ? error.stack : error)));

  await page.goto(localUrl, { waitUntil: "domcontentloaded" });
  await page.locator(".view-subject[data-subject-index=\"0\"]").click();
  await page.waitForTimeout(100);

  const initial = await page.evaluate(() => ({
    region: document.querySelector("#regionSelect")?.textContent?.trim(),
    activeTab: document.querySelector(".tabs .tab.active")?.textContent?.trim(),
    heading: document.querySelector(".domain-form-panel h2")?.textContent?.trim(),
    activeDomainMenu: document.querySelector(".domain-menu-item.active")?.textContent?.trim(),
    groupTitles: [...document.querySelectorAll(".domain-field-group h3")].map((node) => node.textContent.trim()),
    fieldValues: [...document.querySelectorAll(".domain-field input")].map((node) => node.value)
  }));

  await page.screenshot({ path: path.join(evidenceDir, "domain-config-local-1912.png"), fullPage: false });

  await page.locator(".tab[data-config-type=\"account\"]").click();
  await page.waitForTimeout(100);
  const account = await page.evaluate(() => ({
    activeTab: document.querySelector(".tabs .tab.active")?.textContent?.trim(),
    activeModule: document.querySelector(".module-item.active")?.textContent?.trim()
  }));

  await page.locator(".module-item[data-module=\"passport\"]").click();
  await page.waitForTimeout(100);
  const domesticPassport = await page.evaluate(() => ({
    heading: document.querySelector("#moduleContent .module-heading h2")?.textContent?.trim(),
    cards: [...document.querySelectorAll(".ability-card")].map((card) => ({
      title: card.querySelector("h3")?.textContent?.trim(),
      checks: [...card.querySelectorAll(".ability-checks label")].map((node) => node.textContent.trim())
    }))
  }));

  await page.locator(".module-item[data-module=\"game\"]").click();
  await page.waitForTimeout(100);
  const domesticGame = await page.evaluate(() => ({
    heading: document.querySelector("#moduleContent .module-heading h2")?.textContent?.trim(),
    headers: [...document.querySelectorAll(".game-table thead th")].map((node) => node.textContent.trim())
  }));
  await page.locator("[data-action=\"add-game\"]").click();
  await page.waitForTimeout(100);
  const domesticGameModal = await page.evaluate(() => ({
    title: document.querySelector("#modalTitle")?.textContent?.trim(),
    labels: [...document.querySelectorAll("#modalText .modal-field-row > label")].map((node) => node.textContent.trim())
  }));
  await page.locator("#modalCancel").click();
  await page.waitForTimeout(80);

  await page.locator(".tab[data-config-type=\"domain\"]").click();
  await page.locator("#regionSelect").click();
  await page.locator("#regionMenu [data-region=\"overseas\"]").click();
  await page.waitForTimeout(100);
  const overseas = await page.evaluate(() => ({
    region: document.querySelector("#regionSelect")?.textContent?.trim(),
    activeTab: document.querySelector(".tabs .tab.active")?.textContent?.trim(),
    heading: document.querySelector(".domain-form-panel h2")?.textContent?.trim(),
    subject: document.querySelector("#detailSubjectName")?.textContent?.trim(),
    fieldCount: document.querySelectorAll(".domain-field input").length
  }));

  await page.locator(".tab[data-config-type=\"account\"]").click();
  await page.waitForTimeout(100);
  const overseasSite = await page.evaluate(() => ({
    activeTab: document.querySelector(".tabs .tab.active")?.textContent?.trim(),
    activeModule: document.querySelector(".module-item.active")?.textContent?.trim(),
    selectedLanguages: [...document.querySelectorAll(".language-checks input:checked")].map((node) => node.dataset.lang),
    rowBadges: [...document.querySelectorAll(".site-table tbody tr")].map((row) => [...row.querySelectorAll(".language-badge")].map((node) => node.textContent.trim()))
  }));

  await page.locator("[data-action=\"add-top-menu\"]").click();
  await page.waitForTimeout(100);
  const addMenuModal = await page.evaluate(() => ({
    title: document.querySelector("#modalTitle")?.textContent?.trim(),
    labels: [...document.querySelectorAll("#modalText .modal-field-row > label")].map((node) => node.textContent.trim()),
    placeholders: [...document.querySelectorAll(".modal-language-display-input")].map((node) => node.getAttribute("placeholder"))
  }));
  await page.locator("#modalCancel").click();
  await page.waitForTimeout(80);

  await page.locator("[data-action=\"edit-menu\"][data-type=\"top\"][data-index=\"0\"]").click();
  await page.waitForTimeout(100);
  const editMenuModal = await page.evaluate(() => ({
    title: document.querySelector("#modalTitle")?.textContent?.trim(),
    labels: [...document.querySelectorAll("#modalText .modal-field-row > label")].map((node) => node.textContent.trim()),
    placeholders: [...document.querySelectorAll(".modal-language-display-input")].map((node) => node.getAttribute("placeholder"))
  }));
  await page.locator("#modalCancel").click();
  await page.waitForTimeout(80);

  while (await page.locator(".language-checks input:not(:checked)").count()) {
    await page.locator(".language-checks input:not(:checked)").first().click();
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(100);
  const overseasAllLanguages = await page.evaluate(() => ({
    selectedLanguages: [...document.querySelectorAll(".language-checks input:checked")].map((node) => node.dataset.lang),
    rowBadges: [...document.querySelectorAll(".site-table tbody tr")].map((row) => [...row.querySelectorAll(".language-badge")].map((node) => node.textContent.trim()))
  }));
  await page.locator("[data-action=\"add-top-menu\"]").click();
  await page.waitForTimeout(100);
  const addMenuAllLanguagesModal = await page.evaluate(() => ({
    placeholders: [...document.querySelectorAll(".modal-language-display-input")].map((node) => node.getAttribute("placeholder"))
  }));

  await browser.close();

  const expectedGroups = ["核心域名:", "非核心域名:", "CAID域名:", "广告域名:"];
  const expectedAbilityTitles = ["设置密码", "绑定手机", "绑定邮箱"];
  const expectedThreeLanguagePlaceholders = ["请输入简中语言展示", "请输入繁中语言展示", "请输入英语语言展示"];
  const expectedSixLanguagePlaceholders = ["请输入简中语言展示", "请输入繁中语言展示", "请输入英语语言展示", "请输入韩语语言展示", "请输入泰语语言展示", "请输入越南语语言展示"];
  const failures = [];
  if (initial.region !== "国内") failures.push(`expected initial region 国内, got ${initial.region}`);
  if (initial.activeTab !== "域名配置") failures.push(`expected initial active tab 域名配置, got ${initial.activeTab}`);
  if (initial.heading !== "国内通行证") failures.push(`expected initial heading 国内通行证, got ${initial.heading}`);
  if (initial.activeDomainMenu !== "国内通行证") failures.push(`expected initial active menu 国内通行证, got ${initial.activeDomainMenu}`);
  if (JSON.stringify(initial.groupTitles) !== JSON.stringify(expectedGroups)) failures.push(`unexpected group titles: ${initial.groupTitles.join(", ")}`);
  if (initial.fieldValues.length !== 6) failures.push(`expected 6 domain fields, got ${initial.fieldValues.length}`);
  if (account.activeTab !== "账号中心") failures.push(`expected account tab, got ${account.activeTab}`);
  if (account.activeModule !== "品牌与合规") failures.push(`expected active module 品牌与合规, got ${account.activeModule}`);
  if (domesticPassport.heading !== "通行证能力") failures.push(`expected domestic passport heading, got ${domesticPassport.heading}`);
  if (JSON.stringify(domesticPassport.cards.map((card) => card.title)) !== JSON.stringify(expectedAbilityTitles)) failures.push(`unexpected ability cards: ${domesticPassport.cards.map((card) => card.title).join(", ")}`);
  const phoneCard = domesticPassport.cards.find((card) => card.title === "绑定手机");
  if (JSON.stringify(phoneCard?.checks || []) !== JSON.stringify(["登录手机", "安全手机"])) failures.push(`expected domestic phone card checks 登录手机/安全手机, got ${(phoneCard?.checks || []).join(", ")}`);
  if (domesticGame.headers.includes("多语言配置")) failures.push("domestic game table should not include 多语言配置");
  if (domesticGameModal.labels.some((label) => label.includes("多语言配置"))) failures.push("domestic add game modal should not include 多语言配置");
  if (overseas.region !== "海外") failures.push(`expected overseas region, got ${overseas.region}`);
  if (overseas.activeTab !== "域名配置") failures.push(`expected overseas active tab 域名配置, got ${overseas.activeTab}`);
  if (overseas.heading !== "海外通行证") failures.push(`expected overseas heading 海外通行证, got ${overseas.heading}`);
  if (overseas.fieldCount !== 6) failures.push(`expected 6 overseas domain fields, got ${overseas.fieldCount}`);
  if (overseasSite.activeTab !== "账号中心") failures.push(`expected overseas account tab, got ${overseasSite.activeTab}`);
  if (overseasSite.activeModule !== "网站信息") failures.push(`expected overseas site module, got ${overseasSite.activeModule}`);
  if (JSON.stringify(overseasSite.selectedLanguages) !== JSON.stringify(["简中", "繁中", "英语"])) failures.push(`expected initial overseas selected languages 简中/繁中/英语, got ${overseasSite.selectedLanguages.join(", ")}`);
  if (!overseasSite.rowBadges.every((badges) => JSON.stringify(badges) === JSON.stringify(["简中", "繁中", "英语"]))) failures.push(`expected every table row badge synced to three languages, got ${JSON.stringify(overseasSite.rowBadges)}`);
  if (addMenuModal.title !== "添加导航菜单") failures.push(`expected add menu modal title, got ${addMenuModal.title}`);
  if (!addMenuModal.labels.includes("多语言展示")) failures.push(`expected add menu modal label 多语言展示, got ${addMenuModal.labels.join(", ")}`);
  if (JSON.stringify(addMenuModal.placeholders) !== JSON.stringify(expectedThreeLanguagePlaceholders)) failures.push(`expected three language placeholders, got ${addMenuModal.placeholders.join(", ")}`);
  if (editMenuModal.title !== "编辑导航菜单") failures.push(`expected edit menu modal title, got ${editMenuModal.title}`);
  if (!editMenuModal.labels.includes("多语言展示")) failures.push(`expected edit menu modal label 多语言展示, got ${editMenuModal.labels.join(", ")}`);
  if (JSON.stringify(editMenuModal.placeholders) !== JSON.stringify(expectedThreeLanguagePlaceholders)) failures.push(`expected edit modal three language placeholders, got ${editMenuModal.placeholders.join(", ")}`);
  if (overseasAllLanguages.selectedLanguages.length !== 6) failures.push(`expected six selected languages after toggling all, got ${overseasAllLanguages.selectedLanguages.join(", ")}`);
  if (!overseasAllLanguages.rowBadges.every((badges) => JSON.stringify(badges) === JSON.stringify(overseasAllLanguages.selectedLanguages))) failures.push(`expected table badges synced to all selected languages, got ${JSON.stringify(overseasAllLanguages.rowBadges)}`);
  if (JSON.stringify(addMenuAllLanguagesModal.placeholders) !== JSON.stringify(expectedSixLanguagePlaceholders)) failures.push(`expected six language placeholders, got ${addMenuAllLanguagesModal.placeholders.join(", ")}`);
  if (consoleMessages.length) failures.push(`console warnings/errors: ${JSON.stringify(consoleMessages)}`);
  if (pageErrors.length) failures.push(`page errors: ${JSON.stringify(pageErrors)}`);

  return {
    initial,
    account,
    domesticPassport,
    domesticGame,
    domesticGameModal,
    overseas,
    overseasSite,
    addMenuModal,
    editMenuModal,
    overseasAllLanguages,
    addMenuAllLanguagesModal,
    consoleMessages,
    pageErrors,
    failures
  };
}

async function computeVisualMetrics() {
  const sharpPath = path.join(nodeModulesRoot, "sharp");
  const referencePath = path.join(evidenceDir, "domain-config-figma-mcp-998-8322.png");
  const localPath = path.join(evidenceDir, "domain-config-local-1912.png");
  if (!fs.existsSync(referencePath) || !fs.existsSync(localPath) || !fs.existsSync(sharpPath)) {
    return null;
  }

  const sharp = require("sharp");
  const reference = await sharp(referencePath).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const resizedLocal = await sharp(localPath)
    .resize(reference.info.width, reference.info.height)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ref = reference.data;
  const local = resizedLocal.data;
  let totalDelta = 0;
  let totalSquared = 0;
  const thresholds = { gt_10: 0, gt_20: 0, gt_40: 0, gt_80: 0 };
  const pixels = reference.info.width * reference.info.height;
  for (let i = 0; i < ref.length; i += 3) {
    const d0 = Math.abs(ref[i] - local[i]);
    const d1 = Math.abs(ref[i + 1] - local[i + 1]);
    const d2 = Math.abs(ref[i + 2] - local[i + 2]);
    const avg = (d0 + d1 + d2) / 3;
    totalDelta += avg;
    totalSquared += (d0 * d0 + d1 * d1 + d2 * d2) / 3;
    if (avg > 10) thresholds.gt_10 += 1;
    if (avg > 20) thresholds.gt_20 += 1;
    if (avg > 40) thresholds.gt_40 += 1;
    if (avg > 80) thresholds.gt_80 += 1;
  }

  const metrics = {
    reference: "evidence/domain-config-figma-mcp-998-8322.png",
    local: "evidence/domain-config-local-1912.png",
    comparison_size: [reference.info.width, reference.info.height],
    mean_abs_delta: Number((totalDelta / pixels).toFixed(4)),
    rms_delta: Number(Math.sqrt(totalSquared / pixels).toFixed(4)),
    pixel_delta_percent: Object.fromEntries(Object.entries(thresholds).map(([key, count]) => [key, Number((count / pixels * 100).toFixed(4))]))
  };
  fs.writeFileSync(path.join(evidenceDir, "domain-config-visual-metrics.json"), `${JSON.stringify(metrics, null, 2)}\n`, "utf8");
  return metrics;
}

(async () => {
  requireFile(edgePath);
  const validation = await captureAndValidate();
  const metrics = await computeVisualMetrics();
  const result = { validation, metrics };
  fs.writeFileSync(path.join(evidenceDir, "domain-config-runtime-result.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(result, null, 2));
  if (validation.failures.length) {
    process.exitCode = 1;
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
