import json
import subprocess
import time
import urllib.request

# 1. GitHub Token 取得
res = subprocess.run(
    ["git", "credential", "fill"],
    input="protocol=https\nhost=github.com\n",
    text=True,
    capture_output=True,
)
token = None
for line in res.stdout.splitlines():
    if line.startswith("password="):
        token = line.split("password=")[1]

if not token:
    raise ValueError("GitHub token could not be retrieved from git credential helper.")

headers = {
    "Authorization": f"Bearer {token}",
    "Accept": "application/vnd.github+json",
    "User-Agent": "Antigravity-Agent",
}

repo = "ikeda-haruka/oloroso"

# 本日対応したタスク定義
today_tasks = [
    {
        "title": "[SYS-05] モバイルハンバーガーメニュー展開時のヘッダー二重表示バグ修正",
        "body": """### 概要
スマートフォン等のモバイル環境でハンバーガーメニューを開いた際、背後に通常ヘッダーが表示・重複して重なってしまうUIバグを解消。

### 対応内容
- `src/components/GlobalHeader.astro` の z-index 階層を再構築（展開メニュー: `z-50`, ヘッダー本体: `z-40`）
- メニュー開閉時に `body` に `overflow: hidden` を適用するスクロールロック制御を実装
- 背景オーバーレイ（黒透過+backdrop-blur）のレイヤー順序を是正し、重なりを防止

### 関連コミット
- `de81420`
""",
        "labels": ["cat:system", "priority:high", "status:done"],
    },
    {
        "title": "[P03-05] スタジオ自主練習枠の予約導線改善（体験予約非表示化 ＆ 専用予約サイト連携）",
        "body": """### 概要
スタジオ自主練習枠・レンタル枠は会員（在籍生徒）専用のため、不適切な「このクラスで体験予約」ボタンを非表示化し、会員専用のスタジオ予約サイトへの直接遷移導線へ改修。

### 対応内容
- `src/pages/classes/index.astro` および `src/pages/schedule/index.astro` のクラス一覧において、自主練習・レンタル枠（category: `practice`）を判定
- 体験予約ボタンを除外し、「会員専用スタジオ予約へ」ボタンに切り替え
- LINE問い合わせ誘導からWeb予約導線へスマートに誘導

### 関連コミット
- `de81420`
""",
        "labels": ["cat:page", "priority:medium", "status:done"],
    },
    {
        "title": "[P07-01] 受付事務スタッフの採用情報ページ（/recruit）新設および全導線整備",
        "body": """### 概要
スタッフ常駐型スタジオ運営を想定し、受付事務スタッフの採用情報ページ（`/recruit`）を新規作成し、サイト全体からのアクセス導線を整備。

### 対応内容
- 新規ページ `src/pages/recruit/index.astro` の作成（募集要項、業務内容、勤務体系・時給、求める人物像、エントリーフォーム等）
- グローバルヘッダー・モバイルメニュー・フッターナビゲーションに採用情報リンクを追加
- 教室案内（`/about`）およびお問い合わせ（`/contact`）に採用案内バナー/導線を追加

### 関連コミット
- `de81420`
""",
        "labels": ["cat:page", "priority:high", "status:done"],
    },
    {
        "title": "[P06-05] 体験レッスンの所要時間とステップ内訳時間の整合性修正",
        "body": """### 概要
体験レッスンの全体所要時間（60分）と各ステップ内訳の記載時間が一致していなかった問題を解消。

### 対応内容
- `src/pages/contact/index.astro` の体験レッスンの流れにおける時間配分を再計算・統一
- 準備・カウンセリング（10分）＋ レッスン体験（40分）＋ クールダウン・ご案内（10分）＝ 合計60分に整合

### 関連コミット
- `de81420`
""",
        "labels": ["cat:page", "priority:medium", "status:done"],
    },
    {
        "title": "[SYS-06] 会員専用メニューの再編（受講生向けルールとWebサービスの分離）",
        "body": """### 概要
ヘッダー・フッターに存在した「生徒専用メニュー」が一般的な受講ルール（振替規則等）と混同されていたため、真の会員限定Webサービス（スタジオ予約・動画アーカイブ）を明確に分離・再構築。

### 対応内容
- 一般情報（レッスン受講・振替ルール、レンタル案内等）と、認証が必要な「会員限定サービス（スタジオWeb予約 / レッスン動画アーカイブ）」の区分を明確化
- グローバルナビゲーションおよびフッターのリンク構造・文言を最適化

### 関連コミット
- `0162f46`
""",
        "labels": ["cat:system", "priority:medium", "status:done"],
    },
    {
        "title": "[P08-01] 会員限定レッスン動画アーカイブ視聴ページ（/members/archive）新設",
        "body": """### 概要
在籍生徒が自宅での自習や復習に活用できるよう、過去のレッスンや振付動画を視聴できる会員限定アーカイブページを新設。

### 対応内容
- 新規ページ `src/pages/members/archive.astro` を作成
- クラス別（入門・初級・中上級・特別WS）および公開月ごとのフィルタリング機能
- 動画プレーヤープレビューUI、自主練習用チェックリストの提示
- 未ログイン時のログインページ誘導およびデモ試聴枠の設置

### 関連コミット
- `0162f46`
""",
        "labels": ["cat:page", "priority:high", "status:done"],
    },
    {
        "title": "[P02-05] スペイン文化交流イベント情報（スペイン料理会・衣装フリマ会）の追加",
        "body": """### 概要
当スタジオの特色である「フラメンコとスペイン文化を楽しむアットホームなコミュニティ」を訴求するため、スペイン料理会および衣装フリーマーケット会の開催情報を各所に追加。

### 対応内容
- スペイン料理会（手作りアヒージョ、スペイン風オムレツ/トルティージャ、冷製スープ/サルモレホ、ポテトサラダ/パパ・アリニャー作成）の情報セクションを追加
- 衣装フリーマーケット（初心者向けのお得な衣装・シューズ譲渡会）の情報セクションを追加
- 教室案内ページ（`src/pages/about/index.astro`）にコミュニティイベント紹介枠を新設
- ブログ記事 `spain-cooking-party.md`, `costume-flea-market.md` の新規作成
- トップページ（`/`）およびクラス一覧（`/classes`）にイベント導線を追加

### 関連コミット
- `0162f46`
""",
        "labels": ["cat:page", "priority:medium", "status:done"],
    },
    {
        "title": "[SYS-07] 会員認証ログイン機能・状態管理（/members/login）新設",
        "body": """### 概要
スタジオ自主練習予約や動画アーカイブなどの会員限定コンテンツへのアクセスを制御する、受講生専用ログイン認証画面およびクライアント状態管理を実装。

### 対応内容
- 新規ページ `src/pages/members/login.astro` を作成
- 会員番号/メールアドレス、パスワードによる認証フォーム
- `localStorage` を活用したセッション状態管理（ログイン・ログアウト）
- パスワード再発行モーダル、デモ用ワンクリック自動入力機能の実装
- ログイン成功時の専用ページ（予約/アーカイブ）への自動リダイレクト

### 関連コミット
- `c535721`
""",
        "labels": ["cat:system", "priority:high", "status:done"],
    },
    {
        "title": "[P08-02] 会員専用スタジオ自主練習・レンタルWeb予約システム（/members/reservation）新設",
        "body": """### 概要
受講生が自主練習や個人練習のためにスタジオ（Studio A / Studio B）の空き状況をリアルタイムで確認し、Web上で即時予約・管理できるシステムを新設。

### 対応内容
- 新規ページ `src/pages/members/reservation.astro` を作成
- 1週間分の空き状況カレンダーUI（Studio A / B 切替、時間帯別スロット表示）
- ワンクリック予約確定モーダル（利用目的・備品利用の選択）
- マイ予約一覧表示、予約キャンセル機能の実装
- 未ログイン時のログイン画面リダイレクトガード

### 関連コミット
- `c535721`
""",
        "labels": ["cat:page", "priority:high", "status:done"],
    },
]

created_issues = []

for task in today_tasks:
    # Issue 作成
    payload = {
        "title": task["title"],
        "body": task["body"],
        "labels": task["labels"],
    }
    req = urllib.request.Request(
        f"https://api.github.com/repos/{repo}/issues",
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
    )
    with urllib.request.urlopen(req) as resp:
        issue = json.loads(resp.read().decode())
        issue_number = issue["number"]
        print(f"Created Issue #{issue_number}: {issue['title']}")

    # 既に実装完了済みのため、state を closed に更新
    close_payload = {"state": "closed"}
    req_close = urllib.request.Request(
        f"https://api.github.com/repos/{repo}/issues/{issue_number}",
        data=json.dumps(close_payload).encode("utf-8"),
        headers=headers,
        method="PATCH",
    )
    with urllib.request.urlopen(req_close) as resp_close:
        closed_issue = json.loads(resp_close.read().decode())
        print(f"Closed Issue #{issue_number} (Status: Done)")

    created_issues.append({
        "number": issue_number,
        "title": task["title"],
        "url": issue["html_url"],
    })
    time.sleep(1)

print("\n--- Summary of Created Issues ---")
for it in created_issues:
    print(f"#{it['number']} {it['title']} -> {it['url']}")
