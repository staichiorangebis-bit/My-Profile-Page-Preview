const TimelineData = () =>{
    return [
        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'edu' as const,
            title: 'XXXXX県立XXXX高等学校 XXXX科',
            description: 'XXXX科 卒業',
            subItems: [
                {
                    period: '20xx年xx月 〜 20xx年xx月',
                    type: 'part' as const,
                    title: 'ファストフードチェーン',
                    description: '担当：調理',
                },
            ],
        },
        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'edu' as const,
            title: 'XXXXX県立XXXXXXXXX大学校 XXXXXXXX科',
            description: 'XXXXXXXX科 卒業',
            subItems: [
                {
                    period: '20xx年xx月 〜 20xx年xx月',
                    type: 'part' as const,
                    title: 'コンビニエンスストア',
                    description: '担当：レジ、接客、商品管理',
                },
            ],
        },
        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'edu' as const,
            title: 'XXXXXXXXX大学 XXXX学部XXXX学科',
            description: 'XXXX学部XXXX学科 卒業',
            subItems: [
                {
                    period: '20xx年xx月 〜 20xx年xx月',
                    type: 'part' as const,
                    title: '個別指導塾',
                    description: '担当：理科・数学担当講師、面談',
                },
            ],
        },
        {
            type: 'part' as const,
            period: '20xx年xx月 〜 20xx年xx月',
            subItems: [
                {
                    title: '個別指導塾',
                    description: '担当：理科・数学担当講師、面談、事務',
                },
                {
                    title: 'イベントスタッフ',
                    description: '担当：案内、警備スタッフ',
                },
            ],

        }, 

        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'career' as const,
            title: '株式会社XXXXXXXX',
            description: 'xxxxxxxxx 入社',
            subItems: [
                {
                    period: '20xx年xx月 〜 20xx年xx月',
                    title: '業務管理用WEBアプリ開発',
                    description: '担当：フロントエンド、API　使用言語：JavaScript、PHP 使用ライブラリ：JQuery',
                },
                {
                    period: '20xx年xx月 〜 20xx年xx月',
                    title: '在庫管理用端末のAndroidアプリ新規機能開発、運用保守',
                    description: '担当：新規機能開発、運用保守　使用言語：Kotlin、JAVA（一部）',
                },
            ],
        },
        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'another' as const,
            title: 'WEB系職業訓練校 入校',
        },
        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'career' as const,
            title: '派遣社員として従事',
            subItems: [
                {
                    title: '医療事務のRPAツールの作成',
                    description: '担当：RPAツール、操作対応マニュアルの作成　使用言語：Excel VBA',
                },
                {
                    title: '情報管理システム変更補助、定期メンテナンス業務の半自動化・RPAツールの作成',
                    description: '担当：システムメンテナンス自動化の設計・開発、RPAツール・操作対応マニュアルの作成　\n使用言語：JavaScript',
                },
            ],
        },
        

        {
            period: '20xx年xx月 〜 20xx年xx月',
            type: 'another' as const,
            title: 'オーストラリア留学',
            description: 'ワーキングホリデーでオーストラリアのシドニーに留学',
            subItems: [
                {
                    type: 'edu' as const,
                    period: '20xx年xx月 〜 20xx年xx月',
                    title: 'XXXXXXXX校 入学',
                    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
                },
                {
                    type: 'part' as const,
                    period: '20xx年xx月 〜 20xx年xx月',
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxに従事',
                },
            ],
        },
        {
            period: '20xx年xx月 〜 現在',
            type: 'part' as const,
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
    ];
}
export default TimelineData