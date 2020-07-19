import Const from 'src/const'

export default {
  Q1: {
    q: '「XXX」について、ご覧になったことがありますか？',
    options: [
      { label: '見たような気がする', value: '1' },
      { label: '何度も見たことがる', value: '2' },
      { label: '見たことがない', value: '0' }
    ]
  },
  Q2: {
    q: '「XXX」について、どちらでご覧になりましたか？<br>全てお知らせください。',
    options: [
      { label: '新聞', value: '1' },
      { label: 'テレビ', value: '2' },
      { label: '雑誌', value: '3' },
      { label: 'YouTube', value: '4' },
      { label: 'SNS・ブログ', value: '5' },
      { label: 'インターネット広告', value: '6' },
      { label: '弊社ホームページ', value: '7' },
      { label: 'その他', value: '99' }
    ]
  },
  Q3: {
    q: '「XXX」について、どのような印象ですか？<br>全てお知らせください。',
    options: [
      { label: '定番', value: '1' },
      { label: '伝統的', value: '2' },
      { label: '信頼できる', value: '3' },
      { label: '親しみやすい', value: '4' },
      { label: 'センスがある', value: '5' },
      { label: '個性的', value: '6' },
      { label: '保守的', value: '7' },
      { label: '先進的', value: '8' },
      { label: '高級感がある', value: '9' },
      { label: '安っぽい', value: '10' },
      { label: 'その他', value: '99' }
    ]
  },
  Q4_1: {
    q: '「XXX」がどんなものか分かった',
    options: Const.Goodness
  },
  Q4_2: {
    q: '「XXX」に興味を持った',
    options: Const.Goodness
  },
  Q4_3: {
    q: '「XXX」が印象に残った',
    options: Const.Goodness
  },
  Q4_4: {
    q: '「XXX」を購入したいと思った',
    options: Const.Goodness
  },
  Q5: {
    q: '「XXX」について、ご覧になった後、どうしましたか？<br>全てお知らせください。',
    options: [
      { label: '「XXX」について、インターネットで調べた', value: '1' },
      { label: '「XXX」について、知人に話した', value: '2' },
      { label: '「XXX」について、SNS・ブログに書き込んだ', value: '3' },
      { label: '「XXX」を購入した', value: '4' },
      { label: 'あてはまるものはない', value: '0' }
    ]
  },
  Q6: {
    q: '性別',
    options: Const.Sex
  },
  Q7: {
    q: '年齢',
    options: Const.Age
  },
  Q8: {
    q: '都道府県',
    options: Const.Prefectures
  }
}
