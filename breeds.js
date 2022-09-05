const breeds = {
  affenpinscher: {
    translation: '猴犬',
    source:
      'https://baike.baidu.com/item/%E7%8C%B4%E7%8A%AC/6813870?fr=kg_general',
  },
  african: {
    translation: '非洲野犬',
    source:
      'https://baike.baidu.com/item/%E9%9D%9E%E6%B4%B2%E9%87%8E%E7%8A%AC/4119706?fr=kg_general',
  },
  airedale: {
    translation: '万能梗',
    source:
      'https://baike.baidu.com/item/%E4%B8%87%E8%83%BD%E6%A2%97/4657199?fr=kg_general',
  },
  akita: {
    translation: '秋田犬',
    source:
      'https://baike.baidu.com/item/%E7%A7%8B%E7%94%B0%E7%8A%AC/504109?fr=kg_general',
  },
  appenzeller: {
    translation: '阿彭则牧牛犬',
    source:
      'https://baike.baidu.com/item/%E9%98%BF%E5%BD%AD%E5%88%99%E7%89%A7%E7%89%9B%E7%8A%AC/6795143?fr=aladdin',
  },
  australian_shepherd: {
    translation: '澳大利亚牧羊犬',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%89%A7%E7%BE%8A%E7%8A%AC/622470?fr=kg_general',
  },
  basenji: {
    translation: '巴仙吉犬',
    source:
      'https://baike.baidu.com/item/%E5%B7%B4%E4%BB%99%E5%90%89%E7%8A%AC/2019883?fr=aladdin',
  },
  beagle: {
    translation: '米格鲁猎兔犬',
    source:
      'https://baike.baidu.com/item/%E7%B1%B3%E6%A0%BC%E9%B2%81%E7%8C%8E%E5%85%94%E7%8A%AC/9633496?fr=kg_general',
  },
  bluetick: {
    translation: '布鲁克浣熊猎犬',
    source:
      'https://baike.baidu.com/item/%E5%B8%83%E9%B2%81%E5%85%8B%E6%B5%A3%E7%86%8A%E7%8C%8E%E7%8A%AC/19901362?fr=aladdin',
  },
  borzoi: {
    translation: '俄罗斯猎狼犬⭐️',
    source:
      'https://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E7%8C%8E%E7%8B%BC%E7%8A%AC/10908630?fr=aladdin',
  },
  bouvier: {
    translation: '弗兰德牧羊犬',
    source:
      'https://baike.baidu.com/item/%E5%BC%97%E5%85%B0%E5%BE%B7%E7%89%A7%E7%BE%8A%E7%8A%AC/1866921?fr=aladdin',
  },
  boxer: {
    translation: '拳师犬',
    source:
      'https://baike.baidu.com/item/%E6%8B%B3%E5%B8%88%E7%8A%AC/504465?fr=kg_general',
  },
  brabancon: {
    translation: '布鲁塞尔格里芬犬',
    source:
      'https://baike.baidu.com/item/%E5%B8%83%E9%B2%81%E5%A1%9E%E5%B0%94%E6%A0%BC%E9%87%8C%E8%8A%AC%E7%8A%AC/547797?fr=aladdin',
  },
  briard: {
    translation: '伯瑞犬',
    source:
      'https://baike.baidu.com/item/%E4%BC%AF%E7%91%9E%E7%8A%AC/1360966?fr=kg_general',
  },
  buhund_norwegian: {
    translation: '挪威牧羊犬',
    source:
      'https://baike.baidu.com/item/%E6%8C%AA%E5%A8%81%E7%89%A7%E7%BE%8A%E7%8A%AC/7510044?fr=aladdin',
  },
  bulldog_boston: {
    translation: '波士顿斗牛犬',
    source:
      'https://baike.baidu.com/item/%E6%B3%A2%E5%A3%AB%E9%A1%BF%E6%96%97%E7%89%9B%E7%8A%AC/15617277?fr=aladdin',
  },
  bulldog_english: {
    translation: '英国斗牛犬',
    source:
      'https://baike.baidu.com/item/%E8%8B%B1%E5%9B%BD%E6%96%97%E7%89%9B%E7%8A%AC/4656668?fr=aladdin',
  },
  bulldog_french: {
    translation: '法国斗牛犬',
    source:
      'https://baike.baidu.com/item/%E6%B3%95%E5%9B%BD%E6%96%97%E7%89%9B%E7%8A%AC/277646?fr=aladdin',
  },
  bullterrier_staffordshire: {
    translation: '斯塔福郡斗牛梗',
    source:
      'https://baike.baidu.com/item/%E6%96%AF%E5%A1%94%E7%A6%8F%E9%83%A1%E6%96%97%E7%89%9B%E6%A2%97/7461866?fr=kg_general',
  },
  cattledog_australian: {
    translation: '澳洲牧牛犬',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E6%B4%B2%E7%89%A7%E7%89%9B%E7%8A%AC/4905398?fr=kg_general',
  },
  chihuahua: {
    translation: '吉娃娃',
    source:
      'https://baike.baidu.com/item/%E5%90%89%E5%A8%83%E5%A8%83/124178?fr=aladdin',
  },
  chow: {
    translation: '松狮犬',
    source:
      'https://baike.baidu.com/item/%E6%9D%BE%E7%8B%AE%E7%8A%AC/223935?fr=aladdin',
  },
  clumber: {
    translation: '克伦伯犬',
    source:
      'https://baike.baidu.com/item/%E5%85%8B%E4%BC%A6%E4%BC%AF%E7%8A%AC/10426352?fr=aladdin',
  },
  cockapoo: {
    translation: '可卡颇犬',
    source:
      'https://baike.baidu.com/item/%E5%8F%AF%E5%8D%A1%E9%A2%87%E7%8A%AC/4997385?fr=aladdin',
  },
  collie_border: {
    translation: '边境牧羊犬',
    source:
      'https://baike.baidu.com/item/%E8%BE%B9%E5%A2%83%E7%89%A7%E7%BE%8A%E7%8A%AC/406513?fr=aladdin',
  },
  coonhound: {
    translation: '黑褐猎浣熊犬',
    source:
      'https://baike.baidu.com/item/%E9%BB%91%E8%A4%90%E7%8C%8E%E6%B5%A3%E7%86%8A%E7%8A%AC/4436627?fr=kg_general',
  },
  corgi_cardigan: {
    translation: '卡狄根威尔斯柯基犬',
    source:
      'https://baike.baidu.com/item/%E5%8D%A1%E7%8B%84%E6%A0%B9%E5%A8%81%E5%B0%94%E6%96%AF%E6%9F%AF%E5%9F%BA%E7%8A%AC/5378420?fr=aladdin',
  },
  cotondetulear: {
    translation: '图莱亚尔绒毛犬',
    source:
      'https://baike.baidu.com/item/%E5%9B%BE%E8%8E%B1%E4%BA%9A%E5%B0%94%E7%BB%92%E6%AF%9B%E7%8A%AC/9994665?fr=aladdin',
  },
  dachshund: {
    translation: '腊肠犬',
    source:
      'https://baike.baidu.com/item/%E8%85%8A%E8%82%A0%E7%8A%AC/842373?fr=aladdin',
  },
  dalmatian: {
    translation: '大麦町犬',
    source:
      'https://baike.baidu.com/item/%E5%A4%A7%E9%BA%A6%E7%94%BA%E7%8A%AC/785633?fr=aladdin',
  },
  dane_great: {
    translation: '大丹犬',
    source:
      'https://baike.baidu.com/item/%E5%A4%A7%E4%B8%B9%E7%8A%AC/873106?fr=kg_general',
  },
  deerhound_scottish: {
    translation: '猎鹿犬',
    source:
      'https://baike.baidu.com/item/%E7%8C%8E%E9%B9%BF%E7%8A%AC/508562?fr=aladdin',
  },
  dhole: {
    translation: '豺',
    source: 'https://baike.baidu.com/item/%E8%B1%BA/16506779?fr=kg_general',
  },
  dingo: {
    translation: '澳大利亚犬',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%8A%AC/6553850?fr=aladdin',
  },
  doberman: {
    translation: '杜宾犬',
    source:
      'https://baike.baidu.com/item/%E6%9D%9C%E5%AE%BE%E7%8A%AC/1482770?fr=kg_general',
  },
  elkhound_norwegian: {
    translation: '挪威猎麋犬',
    source:
      'https://baike.baidu.com/item/%E6%8C%AA%E5%A8%81%E7%8C%8E%E9%BA%8B%E7%8A%AC/523821?fr=kg_general',
  },
  entlebucher: {
    translation: '恩特雷布赫山地犬',
    source:
      'https://baike.baidu.com/item/%E6%81%A9%E7%89%B9%E9%9B%B7%E5%B8%83%E8%B5%AB%E5%B1%B1%E5%9C%B0%E7%8A%AC/12590742?fr=aladdin',
  },
  eskimo: {
    translation: '爱斯基摩犬❌',
    source:
      'https://baike.baidu.com/item/%E7%88%B1%E6%96%AF%E5%9F%BA%E6%91%A9%E7%8A%AC/447333?fr=aladdin',
  },
  finnish_lapphund: {
    translation: '芬兰拉普猎犬',
    source:
      'https://baike.baidu.com/item/%E8%8A%AC%E5%85%B0%E6%8B%89%E6%99%AE%E7%8C%8E%E7%8A%AC/625536?fr=kg_general',
  },
  frise_bichon: {
    translation: '比熊犬',
    source:
      'https://baike.baidu.com/item/%E6%AF%94%E7%86%8A%E7%8A%AC/6139?fr=kg_general',
  },
  germanshepherd: {
    translation: '德国牧羊犬',
    source:
      'https://baike.baidu.com/item/%E5%BE%B7%E5%9B%BD%E7%89%A7%E7%BE%8A%E7%8A%AC/82321?fr=kg_general',
  },
  greyhound_italian: {
    translation: '格力犬',
    source:
      'https://baike.baidu.com/item/%E6%A0%BC%E5%8A%9B%E7%8A%AC/10863882?fr=kg_general',
  },
  groenendael: {
    translation: '格罗安达犬',
    source:
      'https://baike.baidu.com/item/%E6%A0%BC%E7%BD%97%E5%AE%89%E8%BE%BE%E7%8A%AC/625736?fr=aladdin',
  },
  havanese: {
    translation: '哈瓦那犬',
    source:
      'https://baike.baidu.com/item/%E5%93%88%E7%93%A6%E9%82%A3%E7%8A%AC/630324?fr=kg_general',
  },
  hound_afghan: {
    translation: '阿富汗猎犬⭐️',
    source:
      'https://baike.baidu.com/item/%E9%98%BF%E5%AF%8C%E6%B1%97%E7%8C%8E%E7%8A%AC/439730?fr=kg_general',
  },
  hound_basset: {
    translation: '巴吉度猎犬',
    source:
      'https://baike.baidu.com/item/%E5%B7%B4%E5%90%89%E5%BA%A6%E7%8C%8E%E7%8A%AC/1390268?fr=kg_general',
  },
  hound_blood: {
    translation: '德国寻血猎犬',
    source:
      'https://baike.baidu.com/item/%E5%BE%B7%E5%9B%BD%E5%AF%BB%E8%A1%80%E7%8C%8E%E7%8A%AC/15767255?fr=aladdin',
  },
  hound_english: {
    translation: '英国猎狐犬',
    source:
      'https://baike.baidu.com/item/%E8%8B%B1%E5%9B%BD%E7%8C%8E%E7%8B%90%E7%8A%AC/8301576?fr=aladdin',
  },
  hound_ibizan: {
    translation: '依比沙猎犬',
    source:
      'https://baike.baidu.com/item/%E4%BE%9D%E6%AF%94%E6%B2%99%E7%8C%8E%E7%8A%AC/8301482?fr=aladdin',
  },
  hound_plott: {
    translation: '普罗特猎犬',
    source:
      'https://baike.baidu.com/item/%E6%99%AE%E7%BD%97%E7%89%B9%E7%8C%8E%E7%8A%AC/518536?fr=kg_general',
  },
  hound_walker: {
    translation: '赶上树竞走者猎浣熊犬',
    source:
      'https://baike.baidu.com/item/%E8%B5%B6%E4%B8%8A%E6%A0%91%E7%AB%9E%E8%B5%B0%E8%80%85%E7%8C%8E%E6%B5%A3%E7%86%8A%E7%8A%AC/502995?fr=aladdin',
  },
  husky: {
    translation: '西伯利亚雪橇犬',
    source:
      'https://baike.baidu.com/item/%E8%A5%BF%E4%BC%AF%E5%88%A9%E4%BA%9A%E9%9B%AA%E6%A9%87%E7%8A%AC/540855?fr=kg_general',
  },
  keeshond: {
    translation: '荷兰毛狮犬',
    source:
      'https://baike.baidu.com/item/%E8%8D%B7%E5%85%B0%E6%AF%9B%E7%8B%AE%E7%8A%AC/134243?fr=kg_general',
  },
  kelpie: {
    translation: '澳大利亚卡尔比犬',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%8D%A1%E5%B0%94%E6%AF%94%E7%8A%AC/622306?fr=aladdin',
  },
  komondor: {
    translation: '可蒙犬⭐️',
    source:
      'https://baike.baidu.com/item/%E5%8F%AF%E8%92%99%E7%8A%AC/526491?fr=kg_general',
  },
  kuvasz: {
    translation: '库瓦兹犬',
    source:
      'https://baike.baidu.com/item/%E5%BA%93%E7%93%A6%E5%85%B9%E7%8A%AC/527818?fr=aladdin',
  },
  labradoodle: {
    translation: '拉布拉多德利犬',
    source:
      'https://baike.baidu.com/item/%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A%E5%BE%B7%E5%88%A9%E7%8A%AC/9972974?fr=aladdin',
  },
  labrador: {
    translation: '拉布拉多猎犬',
    source:
      'https://baike.baidu.com/item/%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A%E7%8C%8E%E7%8A%AC/452983?fr=kg_general',
  },
  leonberg: {
    translation: '莱昂贝格犬',
    source:
      'https://baike.baidu.com/item/%E8%8E%B1%E6%98%82%E8%B4%9D%E6%A0%BC%E7%8A%AC/10037560?fr=aladdin',
  },
  lhasa: {
    translation: '拉萨犬',
    source:
      'https://baike.baidu.com/item/%E6%8B%89%E8%90%A8%E7%8A%AC/2798612?fr=aladdin',
  },
  malamute: {
    translation: '阿拉斯加雪橇犬',
    source:
      'https://baike.baidu.com/item/%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E9%9B%AA%E6%A9%87%E7%8A%AC/275557?fr=kg_general',
  },
  malinois: {
    translation: '比利时马林诺斯犬',
    source:
      'https://baike.baidu.com/item/%E6%AF%94%E5%88%A9%E6%97%B6%E9%A9%AC%E6%9E%97%E8%AF%BA%E6%96%AF%E7%8A%AC/15677333?fr=aladdin',
  },
  maltese: {
    translation: '马尔济斯犬',
    source:
      'https://baike.baidu.com/item/%E9%A9%AC%E5%B0%94%E6%B5%8E%E6%96%AF%E7%8A%AC/8208051?fr=aladdin',
  },
  mastiff_bull: {
    translation: '斗牛獒',
    source:
      'https://baike.baidu.com/item/%E6%96%97%E7%89%9B%E7%8D%92/528575?fr=aladdin',
  },
  mastiff_english: {
    translation: '马士提夫犬',
    source:
      'https://baike.baidu.com/item/%E9%A9%AC%E5%A3%AB%E6%8F%90%E5%A4%AB%E7%8A%AC/8302632?fr=kg_general',
  },
  mastiff_tibetan: {
    translation: '藏獒',
    source:
      'https://baike.baidu.com/item/%E8%97%8F%E7%8D%92/5311?fr=kg_general',
  },
  mexicanhairless: {
    translation: '墨西哥无毛犬',
    source:
      'https://baike.baidu.com/item/%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%97%A0%E6%AF%9B%E7%8A%AC/632695?fr=aladdin',
  },
  // mix: { translation: '', source: '' },
  mountain_bernese: {
    translation: '伯恩山犬',
    source:
      'https://baike.baidu.com/item/%E4%BC%AF%E6%81%A9%E5%B1%B1%E7%8A%AC/5320300?fr=kg_general',
  },
  mountain_swiss: {
    translation: '大瑞士山地犬',
    source:
      'https://baike.baidu.com/item/%E5%A4%A7%E7%91%9E%E5%A3%AB%E5%B1%B1%E5%9C%B0%E7%8A%AC/525101?fr=aladdin',
  },
  newfoundland: {
    translation: '纽芬兰犬',
    source:
      'https://baike.baidu.com/item/%E7%BA%BD%E8%8A%AC%E5%85%B0%E7%8A%AC/528501?fr=kg_general',
  },
  otterhound: {
    translation: '奥达猎犬',
    source:
      'https://baike.baidu.com/item/%E5%A5%A5%E8%BE%BE%E7%8C%8E%E7%8A%AC/2639604?fr=aladdin',
  },
  ovcharka_caucasian: {
    translation: '高加索牧羊犬',
    source:
      'https://baike.baidu.com/item/%E9%AB%98%E5%8A%A0%E7%B4%A2%E7%89%A7%E7%BE%8A%E7%8A%AC/7969416?fr=kg_general',
  },
  papillon: {
    translation: '佩比伦犬',
    source:
      'https://baike.baidu.com/item/%E4%BD%A9%E6%AF%94%E4%BC%A6%E7%8A%AC/9952627?fr=aladdin',
  },
  pekinese: {
    translation: '京巴犬',
    source:
      'https://baike.baidu.com/item/%E4%BA%AC%E5%B7%B4%E7%8A%AC/8042899?fr=kg_general',
  },
  pembroke: {
    translation: '威尔士柯基犬',
    source:
      'https://baike.baidu.com/item/%E5%A8%81%E5%B0%94%E5%A3%AB%E6%9F%AF%E5%9F%BA%E7%8A%AC/84385?fr=kg_general',
  },
  pinscher_miniature: {
    translation: '小鹿犬',
    source:
      'https://baike.baidu.com/item/%E5%B0%8F%E9%B9%BF%E7%8A%AC/3326079?fr=aladdin',
  },
  pitbull: {
    translation: '比特犬',
    source:
      'https://baike.baidu.com/item/%E6%AF%94%E7%89%B9%E7%8A%AC/8841036?fr=kg_general',
  },
  pointer_german: {
    translation: '德国短毛指示犬',
    source:
      'https://baike.baidu.com/item/%E5%BE%B7%E5%9B%BD%E7%9F%AD%E6%AF%9B%E6%8C%87%E7%A4%BA%E7%8A%AC/444022?fr=kg_general',
  },
  pointer_germanlonghair: {
    translation: '德国长毛指示猎犬',
    source:
      'https://baike.baidu.com/item/%E5%BE%B7%E5%9B%BD%E9%95%BF%E6%AF%9B%E6%8C%87%E7%A4%BA%E7%8C%8E%E7%8A%AC/5883695?fr=kg_general',
  },
  pomeranian: {
    translation: '博美犬',
    source:
      'https://baike.baidu.com/item/%E5%8D%9A%E7%BE%8E%E7%8A%AC/225714?fr=kg_general',
  },
  poodle_medium: {
    translation: '中型贵宾犬',
    source:
      'https://baike.baidu.com/item/%E4%B8%AD%E5%9E%8B%E8%B4%B5%E5%AE%BE%E7%8A%AC/15730626?fr=aladdin',
  },
  poodle_miniature: {
    translation: '迷你贵宾犬',
    source:
      'https://baike.baidu.com/item/%E8%BF%B7%E4%BD%A0%E8%B4%B5%E5%AE%BE%E7%8A%AC/5487677?fr=aladdin',
  },
  poodle_standard: {
    translation: '贵宾犬',
    source:
      'https://baike.baidu.com/item/%E8%B4%B5%E5%AE%BE%E7%8A%AC/787021?fr=kg_general',
  },
  poodle_toy: {
    translation: '玩具贵宾犬',
    source:
      'https://baike.baidu.com/item/%E7%8E%A9%E5%85%B7%E8%B4%B5%E5%AE%BE%E7%8A%AC/6518976?fr=aladdin',
  },
  pug: {
    translation: '巴哥犬',
    source:
      'https://baike.baidu.com/item/%E5%B7%B4%E5%93%A5%E7%8A%AC/369789?fr=kg_general',
  },
  puggle: { translation: '哈巴小猎犬❎', source: '' },
  pyrenees: {
    translation: '大白熊犬',
    source:
      'https://baike.baidu.com/item/%E5%A4%A7%E7%99%BD%E7%86%8A%E7%8A%AC/524686?fr=aladdin',
  },
  redbone: {
    translation: '瑞德朋猎浣熊犬',
    source:
      'https://baike.baidu.com/item/%E7%91%9E%E5%BE%B7%E6%9C%8B%E7%8C%8E%E6%B5%A3%E7%86%8A%E7%8A%AC/518753?fr=aladdin',
  },
  retriever_chesapeake: {
    translation: '切萨皮克海湾寻回犬',
    source:
      'https://baike.baidu.com/item/%E5%88%87%E8%90%A8%E7%9A%AE%E5%85%8B%E6%B5%B7%E6%B9%BE%E5%AF%BB%E5%9B%9E%E7%8A%AC/2684571?fr=aladdin',
  },
  retriever_curly: {
    translation: '卷毛寻回犬',
    source:
      'https://baike.baidu.com/item/%E5%8D%B7%E6%AF%9B%E5%AF%BB%E5%9B%9E%E7%8A%AC/2636005?fr=aladdin',
  },
  retriever_flatcoated: {
    translation: '平毛巡回猎犬',
    source:
      'https://baike.baidu.com/item/%E5%B9%B3%E6%AF%9B%E5%B7%A1%E5%9B%9E%E7%8C%8E%E7%8A%AC/5303260?fr=aladdin',
  },
  retriever_golden: {
    translation: '金毛寻回犬',
    source:
      'https://baike.baidu.com/item/%E9%87%91%E6%AF%9B%E5%AF%BB%E5%9B%9E%E7%8A%AC/1955498?fr=kg_general',
  },
  ridgeback_rhodesian: {
    translation: '罗得西亚脊背犬',
    source:
      'https://baike.baidu.com/item/%E7%BD%97%E5%BE%97%E8%A5%BF%E4%BA%9A%E8%84%8A%E8%83%8C%E7%8A%AC/2017482?fr=kg_general',
  },
  rottweiler: {
    translation: '罗威纳犬',
    source:
      'https://baike.baidu.com/item/%E7%BD%97%E5%A8%81%E7%BA%B3%E7%8A%AC/4656437?fr=kg_general',
  },
  saluki: {
    translation: '萨路基猎犬',
    source:
      'https://baike.baidu.com/item/%E8%90%A8%E8%B7%AF%E5%9F%BA%E7%8C%8E%E7%8A%AC/519537?fr=aladdin',
  },
  samoyed: {
    translation: '萨摩耶犬',
    source:
      'https://baike.baidu.com/item/%E8%90%A8%E6%91%A9%E8%80%B6%E7%8A%AC/6397?fr=kg_general',
  },
  schipperke: {
    translation: '舒柏奇犬',
    source:
      'https://baike.baidu.com/item/%E8%88%92%E6%9F%8F%E5%A5%87%E7%8A%AC/4605219?fr=aladdin',
  },
  schnauzer_giant: {
    translation: '大型雪纳瑞犬',
    source:
      'https://baike.baidu.com/item/%E5%A4%A7%E5%9E%8B%E9%9B%AA%E7%BA%B3%E7%91%9E%E7%8A%AC/5954304?fr=aladdin',
  },
  schnauzer_miniature: {
    translation: '迷你雪纳瑞犬',
    source:
      'https://baike.baidu.com/item/%E8%BF%B7%E4%BD%A0%E9%9B%AA%E7%BA%B3%E7%91%9E%E7%8A%AC/76236?fr=aladdin',
  },
  setter_english: {
    translation: '英格兰塞特猎犬',
    source:
      'https://baike.baidu.com/item/%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%A1%9E%E7%89%B9%E7%8C%8E%E7%8A%AC/1062158?fr=aladdin',
  },
  setter_gordon: {
    translation: '戈登蹲猎犬',
    source:
      'https://baike.baidu.com/item/%E6%88%88%E7%99%BB%E8%B9%B2%E7%8C%8E%E7%8A%AC/444950?fr=aladdin',
  },
  setter_irish: {
    translation: '爱尔兰雪达犬',
    source:
      'https://baike.baidu.com/item/%E7%88%B1%E5%B0%94%E5%85%B0%E9%9B%AA%E8%BE%BE%E7%8A%AC/8368946?fr=kg_general',
  },
  sharpei: {
    translation: '沙皮犬',
    source:
      'https://baike.baidu.com/item/%E6%B2%99%E7%9A%AE%E7%8A%AC/503573?fr=kg_general',
  },
  sheepdog_english: {
    translation: '英国古代牧羊犬',
    source:
      'https://baike.baidu.com/item/%E8%8B%B1%E5%9B%BD%E5%8F%A4%E4%BB%A3%E7%89%A7%E7%BE%8A%E7%8A%AC/1483765?fr=kg_general',
  },
  sheepdog_shetland: {
    translation: '柯利牧羊犬',
    source:
      'https://baike.baidu.com/item/%E6%9F%AF%E5%88%A9%E7%89%A7%E7%BE%8A%E7%8A%AC/8264064?fr=kg_general',
  },
  shiba: {
    translation: '柴犬',
    source:
      'https://baike.baidu.com/item/%E6%9F%B4%E7%8A%AC/524441?fr=kg_general',
  },
  shihtzu: {
    translation: '西施犬',
    source:
      'https://baike.baidu.com/item/%E8%A5%BF%E6%96%BD%E7%8A%AC/106051?fr=kg_general',
  },
  spaniel_blenheim: {
    translation: '骑士查理王猎犬',
    source:
      'https://baike.baidu.com/item/%E9%AA%91%E5%A3%AB%E6%9F%A5%E7%90%86%E7%8E%8B%E7%8C%8E%E7%8A%AC/633000?fr=kg_general',
  },
  spaniel_brittany: {
    translation: '布列塔尼猎犬',
    source:
      'https://baike.baidu.com/item/%E5%B8%83%E5%88%97%E5%A1%94%E5%B0%BC%E7%8C%8E%E7%8A%AC/8302581?fr=aladdin',
  },
  spaniel_cocker: {
    translation: '可卡犬',
    source:
      'https://baike.baidu.com/item/%E5%8F%AF%E5%8D%A1%E7%8A%AC/1200981?fr=kg_general',
  },
  spaniel_irish: {
    translation: '爱尔兰水猎犬',
    source:
      'https://baike.baidu.com/item/%E7%88%B1%E5%B0%94%E5%85%B0%E6%B0%B4%E7%8C%8E%E7%8A%AC/441403?fr=aladdin',
  },
  spaniel_japanese: {
    translation: '日本狆',
    source:
      'https://baike.baidu.com/item/%E6%97%A5%E6%9C%AC%E7%8B%86/633461?fr=kg_general',
  },
  spaniel_sussex: {
    translation: '萨塞克斯猎犬',
    source:
      'https://baike.baidu.com/item/%E8%90%A8%E5%A1%9E%E5%85%8B%E6%96%AF%E7%8C%8E%E7%8A%AC/454788?fr=aladdin',
  },
  spaniel_welsh: {
    translation: '威尔士史宾格犬',
    source:
      'https://baike.baidu.com/item/%E5%A8%81%E5%B0%94%E5%A3%AB%E5%8F%B2%E5%AE%BE%E6%A0%BC%E7%8A%AC/430818?fr=aladdin',
  },
  springer_english: {
    translation: '史宾格',
    source:
      'https://baike.baidu.com/item/%E5%8F%B2%E5%AE%BE%E6%A0%BC/9064154?fr=kg_general',
  },
  stbernard: {
    translation: '圣伯纳犬',
    source:
      'https://baike.baidu.com/item/%E5%9C%A3%E4%BC%AF%E7%BA%B3%E7%8A%AC/1037285?fr=aladdin',
  },
  terrier_american: {
    translation: '美国斯塔福梗',
    source:
      'https://baike.baidu.com/item/%E7%BE%8E%E5%9B%BD%E6%96%AF%E5%A1%94%E7%A6%8F%E6%A2%97/1914797?fr=aladdin',
  },
  terrier_australian: {
    translation: '澳大利亚梗',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E6%A2%97/395160?fr=aladdin',
  },
  terrier_bedlington: {
    translation: '贝林顿',
    source:
      'https://baike.baidu.com/item/%E8%B4%9D%E6%9E%97%E9%A1%BF/1252923?fr=aladdin',
  },
  terrier_border: {
    translation: '伯德梗',
    source:
      'https://baike.baidu.com/item/%E4%BC%AF%E5%BE%B7%E6%A2%97/2021146?fr=aladdin',
  },
  terrier_cairn: {
    translation: '凯恩梗',
    source:
      'https://baike.baidu.com/item/%E5%87%AF%E6%81%A9%E6%A2%97/550352?fr=aladdin',
  },
  terrier_dandie: {
    translation: '丹迪丁蒙梗',
    source:
      'https://baike.baidu.com/item/%E4%B8%B9%E8%BF%AA%E4%B8%81%E8%92%99%E6%A2%97/548063?fr=aladdin',
  },
  terrier_fox: {
    translation: '猎狐梗',
    source:
      'https://baike.baidu.com/item/%E7%8C%8E%E7%8B%90%E6%A2%97/3757577?fr=aladdin',
  },
  terrier_irish: {
    translation: '爱尔兰梗',
    source:
      'https://baike.baidu.com/item/%E7%88%B1%E5%B0%94%E5%85%B0%E6%A2%97/544724?fr=aladdin',
  },
  terrier_kerryblue: {
    translation: '凯利蓝梗',
    source:
      'https://baike.baidu.com/item/%E5%87%AF%E5%88%A9%E8%93%9D%E6%A2%97/3757751?fr=aladdin',
  },
  terrier_lakeland: {
    translation: '湖畔梗',
    source:
      'https://baike.baidu.com/item/%E6%B9%96%E7%95%94%E6%A2%97/549428?fr=kg_general',
  },
  terrier_norfolk: {
    translation: '诺福克梗',
    source:
      'https://baike.baidu.com/item/%E8%AF%BA%E7%A6%8F%E5%85%8B%E6%A2%97/557966?fr=aladdin',
  },
  terrier_norwich: {
    translation: '诺维茨梗',
    source:
      'https://baike.baidu.com/item/%E8%AF%BA%E7%BB%B4%E8%8C%A8%E6%A2%97/22371717?fr=kg_general',
  },
  terrier_patterdale: {
    translation: '帕特大勒梗犬',
    source:
      'https://baike.baidu.com/item/%E5%B8%95%E7%89%B9%E5%A4%A7%E5%8B%92%E6%A2%97%E7%8A%AC/5194417?fr=aladdin',
  },
  terrier_russell: {
    translation: '帕尔森·罗塞尔梗',
    source:
      'https://baike.baidu.com/item/%E5%B8%95%E5%B0%94%E6%A3%AE%C2%B7%E7%BD%97%E5%A1%9E%E5%B0%94%E6%A2%97/10815707?fr=aladdin',
  },
  terrier_scottish: {
    translation: '苏格兰梗',
    source:
      'https://baike.baidu.com/item/%E8%8B%8F%E6%A0%BC%E5%85%B0%E6%A2%97/565230?fr=aladdin',
  },
  terrier_sealyham: {
    translation: '锡利哈姆梗',
    source:
      'https://baike.baidu.com/item/%E9%94%A1%E5%88%A9%E5%93%88%E5%A7%86%E6%A2%97/567352?fr=aladdin',
  },
  terrier_silky: {
    translation: '澳大利亚丝毛梗',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B8%9D%E6%AF%9B%E6%A2%97/546128?fr=aladdin',
  },
  terrier_tibetan: {
    translation: '西藏梗',
    source:
      'https://baike.baidu.com/item/%E8%A5%BF%E8%97%8F%E6%A2%97/2798480?fr=aladdin',
  },
  terrier_toy: {
    translation: '玩具猎狐梗',
    source:
      'https://baike.baidu.com/item/%E7%8E%A9%E5%85%B7%E7%8C%8E%E7%8B%90%E6%A2%97/8008240?fr=aladdin',
  },
  terrier_welsh: {
    translation: '威尔士梗',
    source:
      'https://baike.baidu.com/item/%E5%A8%81%E5%B0%94%E5%A3%AB%E6%A2%97/565632?fr=aladdin',
  },
  terrier_westhighland: {
    translation: '西部高地白梗',
    source:
      'https://baike.baidu.com/item/%E8%A5%BF%E9%83%A8%E9%AB%98%E5%9C%B0%E7%99%BD%E6%A2%97/566003?fr=aladdin',
  },
  terrier_wheaten: {
    translation: '爱尔兰软毛梗',
    source:
      'https://baike.baidu.com/item/%E7%88%B1%E5%B0%94%E5%85%B0%E8%BD%AF%E6%AF%9B%E6%A2%97/2019131?fr=kg_general',
  },
  terrier_yorkshire: {
    translation: '约克夏梗犬',
    source:
      'https://baike.baidu.com/item/%E7%BA%A6%E5%85%8B%E5%A4%8F%E6%A2%97%E7%8A%AC/2547216?fr=kg_general',
  },
  tervuren: {
    translation: '比利时坦比连犬',
    source:
      'https://baike.baidu.com/item/%E6%AF%94%E5%88%A9%E6%97%B6%E5%9D%A6%E6%AF%94%E8%BF%9E%E7%8A%AC/8301277?fr=aladdin',
  },
  vizsla: {
    translation: '维兹拉犬',
    source:
      'https://baike.baidu.com/item/%E7%BB%B4%E5%85%B9%E6%8B%89%E7%8A%AC/8264274?fr=aladdin',
  },
  waterdog_spanish: {
    translation: '西班牙水犬',
    source:
      'https://baike.baidu.com/item/%E8%A5%BF%E7%8F%AD%E7%89%99%E6%B0%B4%E7%8A%AC/10104988?fr=kg_general',
  },
  weimaraner: {
    translation: '威玛猎犬',
    source:
      'https://baike.baidu.com/item/%E5%A8%81%E7%8E%9B%E7%8C%8E%E7%8A%AC/2020702?fr=kg_general',
  },
  whippet: {
    translation: '小灵犬',
    source:
      'https://baike.baidu.com/item/%E5%B0%8F%E7%81%B5%E7%8A%AC/519841?fr=aladdin',
  },
  wolfhound_irish: {
    translation: '爱尔兰猎狼犬',
    source:
      'https://baike.baidu.com/item/%E7%88%B1%E5%B0%94%E5%85%B0%E7%8C%8E%E7%8B%BC%E7%8A%AC/441221?fr=kg_general',
  },
};
