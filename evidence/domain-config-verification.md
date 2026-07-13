# 域名配置页验收记录

更新时间：2026-07-13

## 范围

- Figma 文件：账号中心后台
- 目标节点：`998:8322`
- 页面：主体管理详情页默认配置项 `域名配置`
- 本地地址：`http://127.0.0.1:8765/`

## Figma MCP 状态

`codex mcp list` 当前显示：

```text
figma  https://mcp.figma.com/mcp  enabled  OAuth
```

已使用原生 Figma MCP 完成：

- `get_design_context` 读取 `yIn1zHReO8xP6IbR1Trpxo / 998:8322`
- `get_screenshot` 获取同一节点 1912x1140 截图
- `whoami` 校验当前 Figma 授权身份可用

## 设计与本地证据

- Figma MCP 截图：`evidence/domain-config-figma-mcp-998-8322.png`
- 本地 1912x1140 截图：`evidence/domain-config-local-1912.png`
- 运行时验证：`evidence/domain-config-runtime-result.json`
- 视觉指标：`evidence/domain-config-visual-metrics.json`
- Playwright 验证脚本：`evidence/verify-domain-config.cjs`

视觉指标摘要：

```json
{
  "comparison_size": [1912, 1140],
  "mean_abs_delta": 6.1042,
  "rms_delta": 31.2806,
  "pixel_delta_percent": {
    "gt_10": 5.6664,
    "gt_20": 4.8746,
    "gt_40": 3.4521,
    "gt_80": 2.8579
  }
}
```

## 已验证行为

- 页面默认区域为 `国内`
- 进入主体详情默认显示 `域名配置`
- 域名配置左侧选中 `国内通行证`
- 域名配置左侧菜单包含 `国内通行证`、`惠方/行为日志`、`防沉迷`、`GSSDK`、`H5SDK`、`版署域名`
- 域名配置右侧分组为 `核心域名:`、`非核心域名:`、`CAID域名:`、`广告域名:`
- 域名输入框数量为 6，值与 Figma 设计稿一致
- 顶部配置类型支持从 `域名配置` 切换到 `账号中心`
- 国内账号中心默认模块为 `品牌与合规`
- 国内 `通行证能力` 三张能力卡片为 `设置密码`、`绑定手机`、`绑定邮箱`
- 国内 `绑定手机` 卡片底部有 `登录手机`、`安全手机` 两项勾选
- 国内 `游戏配置` 表格和新增游戏弹窗均不展示 `多语言配置`
- 切换海外后仍可显示 `域名配置`，标题变为 `海外通行证`
- 海外切换到账号中心后默认进入 `网站信息`
- 海外网站信息的列表 `多语言配置` 与 `支持语言` 同步
- 添加和编辑导航菜单均为弹窗形式
- 弹窗字段名称为 `多语言展示`
- 支持语言为 3 种时弹窗显示 3 个输入框，占位符分别为 `请输入简中语言展示`、`请输入繁中语言展示`、`请输入英语语言展示`
- 支持语言扩展为 6 种时弹窗显示 6 个输入框，并同步表格语言展示
- 运行时无 `console` warning/error、无 `pageerror`

## 验证命令

```powershell
node --check prototype/account-center-config/app.js
node --check evidence/verify-domain-config.cjs
git diff --check -- prototype/account-center-config/app.js prototype/account-center-config/styles.css prototype/account-center-config/index.html evidence/verify-domain-config.cjs
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:8765/
node evidence/verify-domain-config.cjs
```

结果：

- `node --check` 通过
- `git diff --check` 通过，仅有 CRLF 提示
- 本地服务返回 `200`
- `verify-domain-config.cjs` 通过，输出 `failures: []`
