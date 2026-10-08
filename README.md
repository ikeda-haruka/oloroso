# Estudio Oloroso（エストゥディオ・オロロソ）公式WEBサイト（ポートフォリオ作品）

> **【注意・免責事項】**  
> 本リポジトリおよびWEBサイトは、**Web制作・フロントエンド開発実績（ポートフォリオ）用の架空のフラメンコ教室サイト**です。  
> 掲載されているスタジオ所在地、施設設備、講師プロフィール、Googleマップ、予約フォーム等はすべてデモ用・イメージ設定であり、実在の店舗・人物・団体とは関係ありません。

フラメンコスタジオ「Estudio Oloroso」公式WEBサイトの Next.js + Decap CMS + GitHub 構成リポジトリです。
ヘレス特産の辛口シェリー「オロロソ」のように、歳月と対話を重ねて磨き上げる「洗練された深遠な情熱（Sophisticated Passion）」をテーマに制作されています。

---

## 🌹 特徴・技術スタック

- **フレームワーク**: Next.js (App Router, Turbopack, TypeScript)
- **スタイリング**: Tailwind CSS
- **CMS**: Decap CMS（旧 Netlify CMS）
  - 管理画面: `/admin/`
  - コンテンツフォーマット: Markdown / Frontmatter
  - データ保存先: GitHub リポジトリ（`content/news/`, `content/blog/`, `content/settings/`）
- **アイコン**: Lucide React + カスタムSVGアイコン
- **SEO & OGP**: メタタグ、Twitter Cards、構造化データ（JSON-LD DanceStudio/LocalBusiness）
- **レスポンシブ**: スマートフォン追従フローティングCTA（LINE予約 / 体験予約）、折りたたみアコーディオン、Stickyヘッダー

---

## 📁 ページ構成

| ページ名 | パス | 主な内容 |
|---|---|---|
| **トップページ** | `/` | ヒーローFV、スタジオ理念、3大クラスハイライト、体験特典バナー、インフォハブ（News/Instagram/エキテン）、アクセス案内 |
| **スタジオ紹介** | `/about` | ヘレスの伝統理念、主宰・池田遥香プロフィール・受賞歴、無垢スプリングフロア設備ギャラリー、生徒の声・発表会レポート |
| **クラス案内** | `/classes` | 入門・初級・中級・テクニカ・個人レッスンのステップアップフローチャート、カリキュラム詳細仕様 |
| **スケジュール・料金** | `/schedule` | 曜日タブ切り替え式タイムテーブル、カード型料金体系表、キャンペーン特典、振替ルールFAQ |
| **お知らせ・ブログ** | `/news` | 重要休講アラート固定表示、Markdown公式ブログ（ココログ移行対応）、Instagramフィード、エキテン連携 |
| **ブログ個別記事** | `/news/[slug]` | 記事詳細（SSG静的生成）、Markdown HTMLレンダリング、関連記事、体験予約CTA |
| **体験予約・お問い合わせ** | `/contact` | 体験レッスン受講ステップ図解、予約フォーム（バリデーション・サンクス画面）、公式LINE予約、FAQ |
| **CMS管理画面** | `/admin/` | Decap CMS 管理画面（お知らせ・ブログ・スタジオ設定の投稿・編集） |

---

## 🚀 開発・起動方法

### 1. 依存関係のインストール
```bash
npm install
```

### 2. ローカル開発サーバー起動
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

### 3. Decap CMS 管理画面の利用
- [http://localhost:3000/admin/](http://localhost:3000/admin/) にアクセスします。
- ローカル環境で管理画面を動作させる場合:
  ```bash
  npx decap-server
  ```
  を別ターミナルで起動することで、ローカルファイルへの書き込みが可能になります。
- 本番環境（GitHub / Vercel / Netlify）では、GitHub OAuth または Netlify Identity を連携して管理画面からコミット・公開が行われます。

### 4. プロダクションビルド
```bash
npm run build
npm run start
```

---

## 🎨 デザインガイドライン
- **メインカラー**: 深みのあるワインレッド（`#801336` / `#721B29`）
- **アクセントカラー**: シャンパンゴールド（`#C5A059` / `#E8C888`）
- **ベースカラー**: オフホワイト（`#FAF7F2`）、チャコールグレー（`#1C1917`）
- **タイポグラフィ**: 見出し（Noto Serif JP / 明朝体）、本文（Noto Sans JP / ゴシック体）
