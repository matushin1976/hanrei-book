const PAGES = [
  {
    title: "宇奈月温泉事件",
    date: "1935-10-05",
    category: "民法｜権利濫用｜大審院 昭和10年10月5日",
    image: "https://drive.google.com/thumbnail?id=1LcqCSwx2wjhI68GKGkxhqUeIxbm0l4YK&sz=w1600",
    imageSource: "https://drive.google.com/file/d/1LcqCSwx2wjhI68GKGkxhqUeIxbm0l4YK/view",
    story: "温泉の引湯管が通る土地を取得した人物が、温泉事業者に対し、土地の高額な買い取りを求め、応じなければ管を撤去するよう請求した。",
    judgment: "請求は権利の濫用に当たり、認められなかった。",
    point: "民法1条3項。所有権に基づく請求でも、目的や相手方の不利益などから権利濫用となることがある。"
  },
  {
    title: "マクリーン事件",
    date: "1978-10-04",
    category: "憲法｜外国人の人権・政治活動の自由｜最高裁大法廷 昭和53年10月4日",
    image: "https://drive.google.com/thumbnail?id=1hjrPdha7K-qomVh2Ue5PbEz0K2pJtfE-&sz=w1600",
    imageSource: "https://drive.google.com/file/d/1hjrPdha7K-qomVh2Ue5PbEz0K2pJtfE-/view",
    story: "日本に在留する米国籍の英語教師が、ベトナム反戦運動などの政治活動に参加した。法務大臣が転職や政治活動を考慮して在留期間の更新を認めなかったため、その取消しを求めた。",
    judgment: "外国人にも権利の性質上日本国民だけを対象とするものを除き基本的人権の保障が及び、政治活動の自由も一定の範囲で保障される。ただし在留期間の更新には法務大臣の広い裁量があり、本件の更新不許可は違法ではないとした。",
    point: "「在留中の政治活動が直ちに違法」なのではない。適法な政治活動でも、在留更新の判断で消極的事情として考慮され得る。外国人には憲法上、在留の継続を要求する権利は保障されない。"
  },
  {
    title: "薬局距離制限違憲判決",
    date: "1975-04-30",
    category: "憲法｜職業選択の自由・消極目的規制｜最高裁大法廷 昭和50年4月30日",
    image: "https://drive.google.com/thumbnail?id=11zvZ3m4bgbD_QY7rDNAs_c_vhvTr7-sS&sz=w1600",
    imageSource: "https://drive.google.com/file/d/11zvZ3m4bgbD_QY7rDNAs_c_vhvTr7-sS/view",
    story: "医薬品の一般販売業を始めようとした事業者が広島県知事に許可を申請したところ、既存店との距離が県条例の配置基準に合わないとして不許可とされた。事業者は旧薬事法の距離制限が職業選択の自由に反すると訴えた。",
    judgment: "最高裁大法廷は、距離制限を定めた旧薬事法の規定は、不良医薬品の供給防止という目的のために必要かつ合理的とはいえず、憲法22条1項に違反し無効と判断した。",
    point: "違憲とされたのは薬局等の許可制そのものではなく『距離制限』。生命・健康への危険防止を目的とする消極的・警察的規制では、営業方法の規制など、より緩やかな手段で目的を達成できないかが重要。"
  },
  {
    title: "神戸高専剣道実技拒否事件",
    date: "1996-03-08",
    category: "憲法・行政法｜信教の自由・学校長の裁量権｜最高裁第二小法廷 平成8年3月8日",
    image: "https://drive.google.com/thumbnail?id=1SHlmDlxob32TkoAVM25Sb8VlhlqHDFiA&sz=w1600",
    imageSource: "https://drive.google.com/file/d/1SHlmDlxob32TkoAVM25Sb8VlhlqHDFiA/view",
    story: "神戸市立高専の学生が、信仰上の理由から体育の剣道実技を受けず、レポート提出などの代替措置を求めた。学校側は検討せず拒否し、体育の単位を認定しないまま2年連続で原級留置とし、その後退学処分にした。",
    judgment: "最高裁は、代替措置が不可能ではないのに検討せず、学生に重大な不利益を与える原級留置・退学処分をしたことは社会観念上著しく妥当を欠き、校長の裁量権の範囲を超えて違法と判断した（学校側の上告を棄却）。",
    point: "校長には教育上の裁量があるが無制限ではない。信仰上の真摯な理由、他の体育種目への参加意思、代替措置の可能性、処分の重大さを総合考慮する。適切な代替措置を認めること自体は政教分離に反しない。"
  }
  ,{
    title: "在外邦人選挙権訴訟",
    imagePendingFile: "a_colorful_hand_drawn_crayon_colored_pencil_illust.png",
    date: "2005-09-14",
    category: "憲法・行政法｜選挙権・立法不作為・国家賠償｜最高裁大法廷 平成17年9月14日",
    image: "https://drive.google.com/thumbnail?id=19oXETFET1bb62QoYm-Kfd-0uzj87_YYE&sz=w1600",
    imageSource: "https://drive.google.com/file/d/19oXETFET1bb62QoYm-Kfd-0uzj87_YYE/view",
    story: "海外に住む日本国民が、国内に住所がないため1996年の衆議院総選挙で投票できなかった。1998年に在外選挙制度ができても、当初は比例代表選挙に限られていたため、国を相手に選挙権行使の地位確認と国家賠償などを求めた。",
    judgment: "最高裁大法廷は、在外国民の国政選挙での投票を一切認めなかったことを違憲とし、比例代表に限る制限も次回選挙時には違憲と判断。選挙区選挙で投票できる地位を確認し、国の立法不作為について国家賠償（各5000円）を認めた。",
    point: "選挙権の制限は原則許されず、選挙の公正を確保しつつ行使を認めることが事実上不能・著しく困難な場合など『やむを得ない事由』が必要。立法不作為も、必要不可欠な措置を正当な理由なく長期間怠れば例外的に国賠法上違法となる。"
  },
  {
    "title": "北方ジャーナル事件",
    "date": "1986-06-11",
    "category": "憲法｜表現の自由・事前抑制・検閲｜最高裁大法廷 昭和61年6月11日",
    "image": "https://drive.google.com/thumbnail?id=1RVEyAuRmhNgxqJQSJAs0mhtlM9R0NOJ7&sz=w1600",
    "imageSource": "https://drive.google.com/file/d/1RVEyAuRmhNgxqJQSJAs0mhtlM9R0NOJ7/view",
    "story": "北海道知事選挙への立候補予定者を批判する記事を月刊誌が掲載しようとしたところ、記事の対象者が名誉侵害を理由に出版差止めの仮処分を申し立て、裁判所が出版を事前に差し止めた。出版社は、この仮処分は表現の自由を侵害するとして損害賠償を求めた。",
    "judgment": "最高裁大法廷は、裁判所による個別の出版差止め仮処分は憲法21条2項の「検閲」には当たらず、名誉権に基づく差止めは厳格な条件のもとで例外的に許されるとして、出版社の上告を棄却した。",
    "point": "公職候補者等への批判の事前差止めは原則禁止。ただし、記事が真実でないか、専ら公益目的でないことが明白で、かつ重大で著しく回復困難な損害のおそれがある場合には例外的に許容される。「事前抑制」と「憲法上禁止される検閲」は区別する。"
  }
];