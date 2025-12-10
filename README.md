# Tomoto Masuda - AI & Economics Research Portfolio

**デプロイ済みサイト**: https://tomotoai-adgjkydc.manus.space

このリポジトリは、Tomoto Masuda 氏の AI と経済学研究に関するプロジェクトポートフォリオサイトのソースコードです。Manusサーバーにデプロイされており、73 個の公開プロジェクト、ブログセクション、管理者機能を搭載しています。

## 📋 目次

- [サイト概要](#サイト概要)
- [主な機能](#主な機能)
- [アーキテクチャ](#アーキテクチャ)
- [セットアップ方法](#セットアップ方法)
- [デプロイ方法](#デプロイ方法)
- [プロジェクト構成](#プロジェクト構成)
- [管理者機能](#管理者機能)
- [トラブルシューティング](#トラブルシューティング)

## 🎯 サイト概要

**Tomoto Masuda - AI & Economics Research Portfolio** は、以下の情報を統合的に提供するプロフェッショナルなポートフォリオウェブサイトです：

- **プロフィール**: Sussex 大学経済学博士課程の研究者
- **専門分野**: AI、経済学研究、技術と経済の融合
- **プロジェクト数**: 73 個の公開 GitHub リポジトリ
- **ブログ**: 経済学と AI に関する知見の共有
- **連絡先**: T.Masuda@sussex.ac.uk

## ✨ 主な機能

### 1. プロジェクトポートフォリオ
- **73 個のプロジェクト掲載**: GitHub から自動取得
- **検索・フィルタリング機能**: 言語別、キーワード検索に対応
- **スター数・フォーク数表示**: 各プロジェクトの人気度を可視化
- **プロジェクト詳細モーダル**: クリックで詳細情報を表示
- **Website URL リンク**: プロジェクトの公式サイトへのリンク

### 2. ブログセクション
- **5 つのブログ記事**: 経済学と AI に関する知見
- **カテゴリ・タグ表示**: 記事の分類
- **読了時間表示**: ユーザーの時間管理を支援
- **管理者編集機能**: ログイン後に記事の新規作成・編集・削除が可能

### 3. 管理者機能
- **ログイン機能**: パスワード保護された管理画面
- **ブログ記事管理**: 新規作成、編集、削除
- **リアルタイム更新**: ブログ記事の変更がリアルタイムで反映

### 4. その他の機能
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **高速読み込み**: 最適化されたアバター画像
- **プロフェッショナルデザイン**: Tailwind CSS による洗練されたUI

## 🏗️ アーキテクチャ

### フロントエンド
- **フレームワーク**: React 19
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4
- **UI コンポーネント**: shadcn/ui
- **ルーティング**: Wouter
- **ビルドツール**: Vite

### バックエンド
- **ランタイム**: Node.js
- **フレームワーク**: Express（プレースホルダー）
- **デプロイ**: Manus サーバー

### ディレクトリ構成

```
tomoto0-portfolio/
├── client/
│   ├── public/
│   │   ├── avatar.png              # アバター画像
│   │   └── ...
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # メインページ
│   │   │   └── NotFound.tsx        # 404 ページ
│   │   ├── components/
│   │   │   ├── ProjectFilterBar.tsx    # プロジェクトフィルタバー
│   │   │   ├── ProjectDetailModal.tsx  # プロジェクト詳細モーダル
│   │   │   ├── BlogCard.tsx            # ブログカード
│   │   │   ├── BlogDetailModal.tsx     # ブログ詳細モーダル
│   │   │   ├── BlogEditModal.tsx       # ブログ編集モーダル
│   │   │   ├── AdminLoginModal.tsx     # 管理者ログインモーダル
│   │   │   └── ...
│   │   ├── contexts/
│   │   │   ├── AdminContext.tsx    # 管理者認証コンテキスト
│   │   │   └── ThemeContext.tsx    # テーマコンテキスト
│   │   ├── data/
│   │   │   ├── projects.ts         # プロジェクトデータ
│   │   │   └── blog.ts             # ブログ記事データ
│   │   ├── const.ts                # 定数設定（APP_LOGO など）
│   │   ├── App.tsx                 # メインアプリケーション
│   │   ├── main.tsx                # エントリーポイント
│   │   └── index.css               # グローバルスタイル
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
├── server/
│   └── index.ts                    # サーバーエントリーポイント
├── shared/
│   └── const.ts                    # 共有定数
├── .gitignore
├── README.md                       # このファイル
└── package.json
```

## 🚀 セットアップ方法

### 前提条件
- Node.js 22.13.0 以上
- pnpm 9.0.0 以上

### インストール手順

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/tomoto0/tomoto0-portfolio.git
   cd tomoto0-portfolio
   ```

2. **依存関係をインストール**
   ```bash
   pnpm install
   ```

3. **開発サーバーを起動**
   ```bash
   pnpm dev
   ```
   ブラウザで http://localhost:3000 にアクセスします。

4. **ビルド**
   ```bash
   pnpm build
   ```
   `dist/` ディレクトリに本番用ファイルが生成されます。

## 📦 デプロイ方法

### Manus サーバーへのデプロイ

このプロジェクトは Manus サーバーにデプロイされています。再デプロイする場合は以下の手順を実行してください：

#### 方法 1: Manus UI を使用（推奨）

1. Manus Management UI にログイン
2. 「Publish」ボタンをクリック
3. 確認画面で「Deploy」を選択
4. デプロイが完了するまで待機

#### 方法 2: CLI を使用

```bash
# Manus CLI をインストール（初回のみ）
npm install -g @manus/cli

# ログイン
manus login

# デプロイ
manus deploy
```

#### デプロイ後の確認

デプロイ完了後、以下の URL でサイトが公開されます：
- **本番 URL**: https://tomotoai-adgjkydc.manus.space
- **管理 UI**: Manus Management UI

### 環境変数

以下の環境変数が自動的に注入されます：

| 変数名 | 説明 |
|--------|------|
| `VITE_APP_TITLE` | サイトのタイトル |
| `VITE_APP_LOGO` | ロゴ画像 URL |
| `VITE_APP_ID` | アプリケーション ID |
| `JWT_SECRET` | JWT シークレット |
| `OWNER_NAME` | オーナー名 |
| `OWNER_OPEN_ID` | オーナー OpenID |

## 🔐 管理者機能

### ログイン方法

1. ナビゲーションバーの「admin」ボタンをクリック
2. ログインモーダルが表示されます
3. **パスワード**: `*******`
4. 「Login」をクリック

### ブログ記事の管理

ログイン後、ブログセクションの各記事に以下のボタンが表示されます：

- **Edit**: 記事を編集
- **Delete**: 記事を削除

また、「Add New Post」ボタンで新しい記事を作成できます。

### 管理者機能の実装詳細

- **認証**: `AdminContext.tsx` で管理
- **ブログデータ**: `blog.ts` で管理（ローカルストレージに保存）
- **編集モーダル**: `BlogEditModal.tsx` で実装

## 🔧 トラブルシューティング

### ビルドエラーが発生する場合

```bash
# キャッシュをクリア
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### 開発サーバーが起動しない場合

```bash
# ポート 3000 が使用中でないか確認
lsof -i :3000

# 別のポートで起動
pnpm dev -- --port 3001
```

### アバター画像が表示されない場合

1. `client/public/avatar.png` が存在するか確認
2. `client/src/const.ts` の `APP_LOGO` 設定を確認
3. ブラウザキャッシュをクリア（Ctrl+Shift+Delete）

### プロジェクトデータが古い場合

プロジェクトデータは GitHub API から自動取得されます。更新するには：

```bash
# 手動で projects.ts を再生成
python3 scripts/update_projects.py
```

## 📝 プロジェクトデータの更新

新しいプロジェクトを GitHub に追加した場合、以下の手順でポートフォリオサイトに反映させます：

1. **GitHub にプロジェクトをプッシュ**
2. **プロジェクトデータを更新**
   ```bash
   # GitHub API から最新データを取得
   curl -s "https://api.github.com/users/tomoto0/repos?per_page=100&sort=updated" > /tmp/repos.json
   ```
3. **projects.ts を再生成**
4. **ビルドしてデプロイ**

## 📧 お問い合わせ

- **メール**: T.Masuda@sussex.ac.uk
- **GitHub**: https://github.com/tomoto0
- **ポートフォリオサイト**: https://tomotoai-adgjkydc.manus.space

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 🙏 謝辞

- **Tabibito AI**: ポートフォリオテンプレートの提供
- **Manus**: ホスティングとデプロイメント基盤
- **shadcn/ui**: UI コンポーネントライブラリ
- **Tailwind CSS**: スタイリングフレームワーク

---

**最終更新**: 2025 年 12 月 10 日
**バージョン**: 1.0.0
