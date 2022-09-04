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
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%89%A7%E7%BE%8A%E7%8A%AC/622470?fr=aladdin',
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
      'https://baike.baidu.com/item/%E4%BC%AF%E7%91%9E%E7%8A%AC/1360966?fr=aladdin',
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
      'https://baike.baidu.com/item/%E6%B3%95%E5%9B%BD%E6%96%97%E7%89%9B%E7%8A%AC/277646?fr=kg_general',
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
      'https://baike.baidu.com/item/%E5%90%89%E5%A8%83%E5%A8%83/124178?fr=kg_general',
  },
  chow: {
    translation: '松狮犬',
    source:
      'https://baike.baidu.com/item/%E6%9D%BE%E7%8B%AE%E7%8A%AC/223935?fr=kg_general',
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
      'https://baike.baidu.com/item/%E8%BE%B9%E5%A2%83%E7%89%A7%E7%BE%8A%E7%8A%AC/406513?fr=kg_general',
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
      'https://baike.baidu.com/item/%E8%8A%AC%E5%85%B0%E6%8B%89%E6%99%AE%E7%8C%8E%E7%8A%AC/625536?fr=aladdin',
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
      'https://baike.baidu.com/item/%E5%93%88%E7%93%A6%E9%82%A3%E7%8A%AC/630324?fr=aladdin',
  },
  hound_afghan: {
    translation: '阿富汗猎犬⭐️',
    source:
      'https://baike.baidu.com/item/%E9%98%BF%E5%AF%8C%E6%B1%97%E7%8C%8E%E7%8A%AC/439730?fr=kg_general',
  },
  hound_basset: {
    translation: '巴吉度猎犬',
    source:
      'https://baike.baidu.com/item/%E5%B7%B4%E5%90%89%E5%BA%A6%E7%8C%8E%E7%8A%AC/1390268?fr=aladdin',
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
      'https://baike.baidu.com/item/%E8%8D%B7%E5%85%B0%E6%AF%9B%E7%8B%AE%E7%8A%AC/134243?fr=aladdin',
  },
  kelpie: {
    translation: '澳大利亚卡尔比犬',
    source:
      'https://baike.baidu.com/item/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%8D%A1%E5%B0%94%E6%AF%94%E7%8A%AC/622306?fr=aladdin',
  },
  komondor: {
    translation: '可蒙犬⭐️',
    source:
      'https://baike.baidu.com/item/%E5%8F%AF%E8%92%99%E7%8A%AC/526491?fr=aladdin',
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
      'https://baike.baidu.com/item/%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A%E7%8C%8E%E7%8A%AC/452983?fr=aladdin',
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
      'https://baike.baidu.com/item/%E7%BA%BD%E8%8A%AC%E5%85%B0%E7%8A%AC/528501?fr=aladdin',
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
      'https://baike.baidu.com/item/%E5%A8%81%E5%B0%94%E5%A3%AB%E6%9F%AF%E5%9F%BA%E7%8A%AC/84385?fr=aladdin',
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
      'https://baike.baidu.com/item/%E5%BE%B7%E5%9B%BD%E7%9F%AD%E6%AF%9B%E6%8C%87%E7%A4%BA%E7%8A%AC/444022?fr=aladdin',
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
  poodle_miniature: { translation: '', source: '' },
  poodle_standard: { translation: '', source: '' },
  poodle_toy: { translation: '', source: '' },
  pug: { translation: '', source: '' },
  puggle: { translation: '', source: '' },
  pyrenees: { translation: '', source: '' },
  redbone: { translation: '', source: '' },
  retriever_chesapeake: { translation: '', source: '' },
  retriever_curly: { translation: '', source: '' },
  retriever_flatcoated: { translation: '', source: '' },

  retriever_golden: { translation: '', source: '' },
  ridgeback_rhodesian: { translation: '', source: '' },
  rottweiler: { translation: '', source: '' },
  saluki: { translation: '', source: '' },
  samoyed: { translation: '', source: '' },
  schipperke: { translation: '', source: '' },
  schnauzer_giant: { translation: '', source: '' },
  schnauzer_miniature: { translation: '', source: '' },
  setter_english: { translation: '', source: '' },
  setter_gordon: { translation: '', source: '' },

  setter_irish: { translation: '', source: '' },
  sharpei: { translation: '', source: '' },
  sheepdog_english: { translation: '', source: '' },
  sheepdog_shetland: { translation: '', source: '' },
  shiba: { translation: '', source: '' },
  shihtzu: { translation: '', source: '' },
  spaniel_blenheim: { translation: '', source: '' },
  spaniel_brittany: { translation: '', source: '' },
  spaniel_cocker: { translation: '', source: '' },
  spaniel_irish: { translation: '', source: '' },

  spaniel_japanese: { translation: '', source: '' },
  spaniel_sussex: { translation: '', source: '' },
  spaniel_welsh: { translation: '', source: '' },
  springer_english: { translation: '', source: '' },
  stbernard: { translation: '', source: '' },
  terrier_american: { translation: '', source: '' },
  terrier_australian: { translation: '', source: '' },
  terrier_bedlington: { translation: '', source: '' },
  terrier_border: { translation: '', source: '' },
  terrier_cairn: { translation: '', source: '' },

  terrier_dandie: { translation: '', source: '' },
  terrier_fox: { translation: '', source: '' },
  terrier_irish: { translation: '', source: '' },
  terrier_kerryblue: { translation: '', source: '' },
  terrier_lakeland: { translation: '', source: '' },
  terrier_norfolk: { translation: '', source: '' },
  terrier_norwich: { translation: '', source: '' },
  terrier_patterdale: { translation: '', source: '' },
  terrier_russell: { translation: '', source: '' },
  terrier_scottish: { translation: '', source: '' },

  terrier_sealyham: { translation: '', source: '' },
  terrier_silky: { translation: '', source: '' },
  terrier_tibetan: { translation: '', source: '' },
  terrier_toy: { translation: '', source: '' },
  terrier_welsh: { translation: '', source: '' },
  terrier_westhighland: { translation: '', source: '' },
  terrier_wheaten: { translation: '', source: '' },
  terrier_yorkshire: { translation: '', source: '' },
  tervuren: { translation: '', source: '' },
  vizsla: { translation: '', source: '' },

  waterdog_spanish: { translation: '', source: '' },
  weimaraner: { translation: '', source: '' },
  whippet: { translation: '', source: '' },
  wolfhound_irish: { translation: '', source: '' },
};
