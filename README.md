#このブランチはJS学習用のブランチです


#Contact Form App -  react + spring boot
このシステムは、react+Spring boot を使用して構築した簡易のリスト管理アプリです。
Reactで構築されたフロントエンドと、Spring bootによるRestful APIを用いたバックエンドを連携させています。

#デモ
※AWSに配置予定(URL準備中)

#使用技術
##フロントエンド
- react v19.0.0
- Hooks (useState/ useEffect/ prpops)
- axios / fetchによる非同期処理
- コンポーネント分割による構造化

#実装機能
- リスト新規登録(POST)
- 一覧表示(GET)
- 各項目の編集(PUT)
- 各項目の削除(DELETE)
- バリデーション処理(空チェック、形式チェック)

#工夫したポイント
- Reactでのコンポーネント分割と状態管理
- 一覧表示と編集の切り替え制御
- Axiosとfetchの使い分けで通信処理の学習も兼ねた構成

#今後の予定
[ ] AWS上での本番デプロイ (ECS or Render or Vercel連携)
[ ] Spring securityによる認証追加
[ ] フロントのデザイン強化 (Tailwind CSSやMUI導入検討)

## 📄 ライセンス

このプロジェクトはMITライセンスのもとで公開されています。