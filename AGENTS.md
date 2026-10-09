<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Estudio Oloroso 開発エージェント運用ルール

### GitHub Issues 自動タスク管理
ユーザーから新たな機能実装、不具合修正、UI改善、コンテンツ追加等の要望を受けた際は、**自動的にGitHub Issueを起票・管理すること**（事前の許可確認は不要）。
- `scripts/manage_issue.py` を用いて起票・クローズを行う。
- 作業完了時は `status:done` ラベルを付与してクローズし、ユーザー報告時にIssue番号とURLを提示する。
