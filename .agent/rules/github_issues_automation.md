---
name: github-issues-automation
description: "ユーザーからの作業指示（新機能・バグ修正・UI変更・コンテンツ更新等）に対して、自動的にGitHub Issuesにタスクを起票・管理・クローズするルール"
trigger: always_on
---

# GitHub Issues 自動タスク管理ルール

## 概要
当リポジトリ（ikeda-haruka/oloroso）における開発・保守作業において、ユーザーから新たな機能実装、不具合修正、UI/UX改善、コンテンツ追加等の要望を受けた際は、**自動的かつ自律的にGitHub Issueを起票し、タスクの進捗・完了を管理すること**。ユーザーへの事前の起票許可は不要。

## 実行ルール
1. **タスク発生時の自動起票**:
   ユーザーから作業指示を受けた際、または作業実施時に、リポジトリ内の `scripts/manage_issue.py` を使用してGitHub Issueを起票する。
   ```bash
   python scripts/manage_issue.py create --title "[種別-番号] タスクタイトル" --body "### 概要\n...\n### 対応内容\n..." --labels "ラベル一覧"
   ```
   すでに作業が完了してコミット済みの場合には、`--close` オプションを付けて即時クローズとして起票する。
   ```bash
   python scripts/manage_issue.py create --title "[種別-番号] タスクタイトル" --body "..." --labels "cat:...,priority:...,status:done" --close
   ```

2. **Issue タイトル規約**:
   - `[SYS-xx]` : システム・共通コンポーネント・認証・全体設計
   - `[Pxx-xx]` : 画面・ページ単位の実装・改修（P01:Top, P02:About, P03:Classes, P04:Schedule, P05:News/Blog, P06:Contact, P07:Recruit, P08:Members等）
   - `[INT-xx]` : 外部サービス連携・インフラ

3. **ラベル体系**:
   - 分類: `cat:page`, `cat:system`, `cat:integration`
   - 優先度: `priority:high`, `priority:medium`, `priority:low`
   - 完了状態: `status:done`

4. **タスク完了時の処理**:
   - 実装・検証が完了したら、該当Issueが未クローズの場合はクローズする。
   ```bash
   python scripts/manage_issue.py close --number <Issue番号> --comment "実装・検証完了"
   ```
   - ユーザーへの最終回答時に、起票・対応したIssueの番号、タイトル、GitHub URLを報告する。
