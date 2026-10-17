/* ============================================================
   Reasoning GP — Case Library batch 74 (final gap-fill):
   Themes confirmed absent across Native 246 / Bassam / Emily /
   MRCGP casebook: transgender health (bridging/shared care);
   frontotemporal dementia / Pick's (young-onset behavioural change);
   substance misuse in a teenager (safeguarding + harm reduction);
   abdominal migraine in a child (recurrent abdominal pain).
   No NG12 cancer pathway applies. Load AFTER sca-cases73.js.
   ============================================================ */
(function(){

  /* ===== 265. Transgender health ===== */
  const c265 = {
    "id": "transgender-health",
    "title": "“The nurse says a blood result needs talking about — I’ve waited years for this, so nobody’s touching my dose”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 26,
      "sex": "M",
      "setting": "Video consultation — to discuss routine monitoring blood tests.",
      "system": "Gender & sexual health / Results — testosterone shared care: raised haematocrit, plus contraception, emergency contraception and pregnancy risk in a trans man",
      "checked": "October 2026"
    },
    "brief": "Sam Ellis, 26, a trans man (he/him), started testosterone two years ago after assessment by an NHS gender service; the GP practice now prescribes under a shared-care agreement, with monitoring bloods every 6–12 months. Today’s results: haematocrit 0.55 (previously 0.49), haemoglobin 178 g/L, trough testosterone at the upper end of the male range, LFTs and lipids normal. The shared-care protocol asks the GP to repeat the test and contact the gender service about the dose or interval if haematocrit is above 0.54, and to look for contributing factors. Sam smokes 10 a day, recently increased his injection frequency himself “to keep levels steady”, and has been getting headaches. He is anxious that his dose will be cut. Hidden agenda, disclosed only if the doctor asks about relationships, sexual health or contraception in a respectful way: he has a new partner, Kieran (a cis man), and they have had vaginal sex without condoms several times over the last month, most recently last night. Sam believes testosterone means he cannot get pregnant because his periods stopped. His record shows a cervix and no previous cervical screening invitation (he is registered as male). The task: use his name and pronouns; explain the result and why it matters (thrombosis and stroke risk); explore causes (self-adjusted dosing, smoking, possible sleep apnoea, dehydration) without blame; agree to repeat and liaise with the gender service rather than stopping testosterone; then open the sexual-health conversation and correct the myth that testosterone is contraception (testosterone can harm a developing pregnancy); offer emergency contraception (a copper IUD is most effective; oral options are suitable and testosterone does not interact), a pregnancy test now and at 3 weeks, an STI screen, and a plan for ongoing non-oestrogen contraception; and mention cervical screening.",
    "script": {
      "opening": "“The nurse rang and said one of my blood results needs talking about. I’ve waited years for this, so if you’re going to say my dose has to come down, I’m going to struggle.”",
      "facts": [
        {
          "topic": "Testosterone",
          "text": "Two years on testosterone injections from the NHS gender service, now prescribed by the practice. Three months ago he started having the injections more often than prescribed, “because I felt flat at the end of each cycle”. Has not told anyone."
        },
        {
          "topic": "Symptoms (if asked)",
          "text": "Headaches for a few weeks, flushed face. No chest pain, no breathlessness, no leg swelling, no visual disturbance, no weakness or numbness. Snores loudly according to Kieran; sometimes wakes up gasping."
        },
        {
          "topic": "Lifestyle",
          "text": "Smokes 10 a day. Drinks little water at work (warehouse). Alcohol weekends. Gym three times a week."
        },
        {
          "topic": "Only if asked about relationships or sexual health",
          "text": "New partner, Kieran (a cis man), for a month. Vaginal sex without condoms several times, most recently last night. “I can’t get pregnant on T — my periods stopped.” No previous STI tests."
        },
        {
          "topic": "Pregnancy facts (if asked)",
          "text": "No periods for about 20 months. Has not done a pregnancy test. Does not want a pregnancy. Would be frightened to be pregnant."
        },
        {
          "topic": "Cervical screening (if raised)",
          "text": "Never invited. Did not know he could have one. Anxious about examinations but would consider a self-sample if offered locally."
        },
        {
          "topic": "How to play it",
          "text": "Defensive about the dose at first. Relaxes if the doctor uses his name and pronouns, explains the risk clearly and says testosterone will not simply be stopped. Shocked to learn testosterone is not contraception; then practical and keen to act."
        }
      ],
      "ice": {
        "ideas": "“My blood is a bit thick from the T, but that’s normal for guys.”",
        "concerns": "HIDDEN AGENDA: unprotected sex with his new partner in the belief that testosterone is contraception; also fear of losing his testosterone or being treated as ‘not a real man’ by the system.",
        "expectations": "“Keep my dose the same, and keep this quick.”"
      },
      "cues": [
        "“Nobody’s touching my dose” — fear of losing treatment; reassure about the process.",
        "Self-increased injection frequency — a cause of the result, to explore without blame.",
        "Snoring and waking up gasping — possible sleep apnoea contributing to erythrocytosis.",
        "A new partner mentioned in passing — open the sexual-health and contraception conversation."
      ]
    },
    "checkpoints": [
      {
        "dom": "ro",
        "text": "Uses Sam’s name and pronouns, acknowledges how much testosterone matters to him, and explains that the plan is to make it safe rather than stop it"
      },
      {
        "dom": "dg",
        "text": "Interprets the result: haematocrit 0.55 on testosterone is above the shared-care action threshold and raises the risk of thrombosis and stroke; asks about symptoms of hyperviscosity and thrombosis"
      },
      {
        "dom": "dg",
        "text": "Explores contributing factors without blame: self-adjusted dosing, smoking, possible obstructive sleep apnoea, dehydration"
      },
      {
        "dom": "cm",
        "text": "Follows the shared-care agreement: repeat the test, contact the gender service about dose or interval, advise taking injections as prescribed, smoking cessation support, hydration, and assessment for sleep apnoea"
      },
      {
        "dom": "dg",
        "text": "Asks respectfully about relationships, sexual practices and contraception, and identifies unprotected vaginal sex with a cis male partner, most recently last night"
      },
      {
        "dom": "cm",
        "text": "Explains that testosterone is not a contraceptive and can harm a developing pregnancy; offers emergency contraception (a copper IUD is most effective; levonorgestrel or ulipristal are suitable and testosterone does not interact; check the SPC), a pregnancy test now and 3 weeks after the last unprotected sex"
      },
      {
        "dom": "cm",
        "text": "Plans ongoing contraception without oestrogen (copper IUD, LNG-IUS, implant or injection), an STI screen, and offers cervical screening as he has a cervix"
      },
      {
        "dom": "cm",
        "text": "Safety-nets for thrombosis and stroke symptoms and for a positive pregnancy test (stop testosterone and seek urgent advice), and arranges follow-up of the repeat result"
      }
    ],
    "worked": [
      {
        "lbl": "Reassure about the process",
        "txt": "“Sam, I know how long you waited for testosterone. My aim isn’t to take it away. It’s to keep you safe on it. Can I explain what the result means?”"
      },
      {
        "lbl": "Explain the result",
        "txt": "“Testosterone makes the body produce more red blood cells. Yours have gone up to a level where the blood can get thick, which raises the chance of clots and strokes. It’s fixable.”"
      },
      {
        "lbl": "Without blame",
        "txt": "“Lots of people adjust their injections to feel steadier. Thanks for telling me. Taking it more often is the most likely reason for the jump, so let’s talk to the gender team about a safer way to even out the levels.”"
      },
      {
        "lbl": "Opening sexual health",
        "txt": "“You mentioned Kieran. I ask everyone about sexual health and contraception. What kind of sex are you having, and are you using anything?”"
      },
      {
        "lbl": "Correct the myth",
        "txt": "“Testosterone stops periods, but it doesn’t reliably stop ovulation, so pregnancy is possible. And testosterone can harm a developing baby, which is why contraception really matters.”"
      },
      {
        "lbl": "Act today",
        "txt": "“Because you had sex last night, emergency contraception today is important. A copper coil is the most effective and also works as ongoing contraception. A pill is also fine with testosterone. Let’s do a pregnancy test today and again in three weeks.”"
      }
    ],
    "learning": "Testosterone therapy in trans men commonly raises haemoglobin and haematocrit (erythrocytosis), which increases the risk of thrombosis and stroke. Shared-care protocols from NHS gender services set monitoring and action thresholds; a haematocrit above about 0.54 usually prompts repeating the test, looking for contributing factors and contacting the gender service about dose or interval adjustment, rather than stopping testosterone. Contributing factors include supratherapeutic or self-adjusted dosing, smoking, obstructive sleep apnoea, dehydration and lung disease. RCGP guidance describes the GP’s role as working with specialist gender services, including prescribing and monitoring under shared care. Respectful care means using the person’s name and pronouns and recognising how much treatment matters to them. The hidden agenda is a common, dangerous myth: testosterone does not reliably suppress ovulation, so trans men with a uterus who have vaginal sex with partners who produce sperm can become pregnant, and testosterone can harm a developing pregnancy. FSRH guidance advises non-oestrogen methods for people using testosterone: copper IUD, LNG-IUS, progestogen-only implant or injection (and the progestogen-only pill). Emergency contraception options are the same as for anyone else; a copper IUD is the most effective, and oral levonorgestrel or ulipristal acetate can be used, with no interaction with testosterone (check the SPC). Arrange a pregnancy test now and 3 weeks after the last unprotected sex, offer an STI screen, and if pregnant, stop testosterone and seek urgent advice. People registered as male are not automatically invited for cervical screening; anyone with a cervix aged 25–64 should be offered it.",
    "knowledge": {
      "guideline": "[1] NHS gender dysphoria clinic shared-care protocol for testosterone (local version; check current) · [2] RCGP position statement: the role of the GP in caring for gender-questioning and transgender patients (2024) · [3] FSRH CEU Statement: Contraceptive choices and sexual health for transgender and non-binary people (check current version) · [4] FSRH Clinical Guideline: Emergency contraception (2017, amended) · [5] NHS cervical screening programme guidance for trans and non-binary people · [6] GMC Good medical practice (2024) · [7] Product SPCs for testosterone, levonorgestrel and ulipristal acetate",
      "summary": "A trans man on shared-care testosterone with haematocrit 0.55 after self-increasing his injection frequency, plus smoking and possible sleep apnoea. Repeat, liaise with the gender service about dose or interval, and address contributors without stopping testosterone. The hidden agenda: unprotected vaginal sex in the belief that testosterone is contraception, most recently last night. Offer emergency contraception, pregnancy testing, an STI screen, non-oestrogen contraception and cervical screening.",
      "points": [
        {
          "h": "Erythrocytosis on testosterone",
          "t": "Haematocrit rises with testosterone. Above the protocol threshold (commonly 0.54), repeat the test, look for causes and contact the gender service about dose or interval [1]."
        },
        {
          "h": "Contributing factors",
          "t": "Supratherapeutic or self-adjusted dosing, smoking, obstructive sleep apnoea, dehydration, chronic lung disease. Ask about headache, visual symptoms and thrombosis."
        },
        {
          "h": "GP role",
          "t": "Working with the specialist gender service under shared care, as with other specialties; prescribing and monitoring per the agreement [2]."
        },
        {
          "h": "Testosterone is not contraception",
          "t": "Amenorrhoea on testosterone does not mean no ovulation. Pregnancy is possible, and testosterone can harm a developing pregnancy [3]."
        },
        {
          "h": "Contraception choices",
          "t": "Non-oestrogen methods: copper IUD, LNG-IUS, implant, injection, progestogen-only pill. Oestrogen-containing methods are generally avoided [3]."
        },
        {
          "h": "Emergency contraception",
          "t": "Copper IUD is most effective. Levonorgestrel or ulipristal acetate are options; no interaction with testosterone. Pregnancy test 3 weeks after the last unprotected sex [4,7]."
        },
        {
          "h": "STI and cervical screening",
          "t": "Offer an STI screen. People with a cervix aged 25–64 should be offered screening even if registered as male; they are not automatically invited [5]."
        },
        {
          "h": "Respectful care",
          "t": "Use the person’s name and pronouns, avoid unnecessary questions about transition, and do not make testosterone conditional on unrelated matters [6]."
        }
      ]
    }
  };

  /* ===== 266. Frontotemporal dementia (Pick's) ===== */
  const c266 = {
    id: 'frontotemporal-dementia',
    title: '"My husband\u2019s only 58 but he\u2019s become rude, reckless with money and oddly uncaring \u2014 it\u2019s like his personality\u2019s changed"',
    type: 'video',
    duration: 12,
    meta: {
      age: 58,
      sex: 'M',
      setting: 'Video consultation, spouse present with Brian\u2019s agreement, with the physical and neurological examination arranged face to face \u2014 personality/behaviour change in a younger adult.',
      system: 'Neurology / Old-age (young-onset) \u2014 frontotemporal dementia: behavioural change, not "just stress"',
      checked: 'October 2026'
    },
    brief: 'A wife brings her 58-year-old husband, Brian, with ~1\u20132 years of progressive PERSONALITY and BEHAVIOUR change \u2014 disinhibition (socially inappropriate/rude remarks), loss of empathy, apathy, impulsivity (reckless spending), repetitive/compulsive behaviours and changed eating \u2014 with relatively PRESERVED memory early on; insight is poor. Recognise the pattern of FRONTOTEMPORAL DEMENTIA (FTD \u2014 here the behavioural variant, bvFTD; Pick\u2019s disease is a pathological subtype, not a synonym; international consensus criteria, Rascovsky 2011) \u2014 a young-onset dementia presenting with early PERSONALITY/behavioural change and language problems rather than the memory-led picture of Alzheimer\u2019s \u2014 and that it is often MISATTRIBUTED to psychiatric illness, midlife crisis, stress or relationship problems, delaying diagnosis; take a COLLATERAL history with Brian\u2019s consent (the spouse is key; keep him involved), screen the differential (depression, bipolar/mania, psychosis, alcohol/substance, medicines, other dementias, structural/endocrine causes; ask about family history of dementia, motor neurone disease or psychiatric illness, and motor features, as FTD can overlap with MND; rapid progression, headache, seizures, vomiting or focal signs suggest a structural lesion needing urgent imaging), examine face to face and do the NICE NG97 blood tests (FBC, calcium, glucose, renal and liver function, thyroid function, B12 and folate) \u2014 NG97: do not rule out dementia solely because of a normal score on a cognitive instrument \u2014 recognise the impact on the FAMILY and any RISK/safeguarding (finances \u2014 discuss practical protection and LASTING POWER OF ATTORNEY NOW, while he may still have capacity to make it (Mental Capacity Act 2005); driving \u2014 a person diagnosed with dementia must tell the DVLA, and he should not drive while being assessed if judgement is a concern; vulnerability), and REFER to a specialist dementia diagnostic service (young-onset service or cognitive neurology at 58) for assessment (cognitive testing, imaging). NG97: acetylcholinesterase inhibitors and memantine are not offered in FTD. Support the carer (carer\u2019s assessment under the Care Act 2014; NICE NG150). Support the carer. The skill is recognising young-onset behavioural-variant dementia, not mislabelling it stress/psychiatric, collateral history, risk/driving, referral and carer support.',
    script: {
      opening: '(Wife, husband present and somewhat indifferent.) "I don\u2019t recognise my husband any more. Over the last year or two Brian\u2019s become rude and tactless \u2014 says awful things in public \u2014 he\u2019s spent thousands on nonsense, he doesn\u2019t seem to care about anything or anyone, and he\u2019s eating strangely. His memory\u2019s actually fine. People say it\u2019s a midlife crisis or stress, but this isn\u2019t him. He doesn\u2019t think anything\u2019s wrong."',
      facts: [
        {
          topic: 'Who is on the call',
          text: 'Wife, Carol (56), and Brian (58), sitting together. Brian agrees to Carol speaking: "If she wants. I\u2019m fine."'
        },
        {
          topic: 'Behaviour (Carol)',
          text: 'Over about 2 years: makes rude comments about people\u2019s weight in shops, told a neighbour her husband\u2019s funeral was "a waste of a Saturday", no embarrassment afterwards. Lost interest in his grandchildren and hobbies. Doesn\u2019t react when Carol is upset \u2014 "as if he\u2019s switched off".'
        },
        {
          topic: 'Money and impulsivity',
          text: 'Spent about \u00a312,000 on online gadgets and a second car they don\u2019t need; signed up to several subscriptions. Carol found out from the bank statements. He still has full access to their accounts.'
        },
        {
          topic: 'Eating and routines',
          text: 'Craves sweets \u2014 eats a whole packet of biscuits at once; put on a stone. Insists on the same meal every day. Repeats the same phrases and walks the same route at the same time daily.'
        },
        {
          topic: 'Memory and other negatives',
          text: 'Memory for events and appointments is fine; doesn\u2019t get lost. No hallucinations. Not low or tearful; no talk of suicide. No headaches, no fits, no weakness, no swallowing problems, no twitching. Drinks 2 pints a week. No head injury.'
        },
        {
          topic: 'Work and driving',
          text: 'Was a bank branch manager; took early retirement last year after complaints about his "attitude". Still drives daily; Carol thinks he drives faster and closer to other cars and "doesn\u2019t seem to notice".'
        },
        {
          topic: 'Family and health',
          text: 'Carol doesn\u2019t know of anything in the family \u2014 Brian\u2019s parents died young (accident and heart attack). No regular medicines; no allergies.'
        },
        {
          topic: 'How to play it',
          text: 'Carol: tearful, exhausted, relieved to be taken seriously; becomes upset if it is brushed off as stress. Brian: flat, unconcerned, a little inappropriate ("Can we hurry up?"), denies any problem. If the word dementia is used, Carol says: "Dementia? But his memory\u2019s fine."'
        }
      ],
      ice: {
        ideas: 'Carol: "Everyone keeps saying stress. I think something is actually wrong with him." Brian: "Nothing\u2019s wrong with me."',
        concerns: 'HIDDEN AGENDA \u2014 Carol is frightened about money (the spending is draining their savings), about his driving, and that their marriage is over and she is scared of what it might be.',
        expectations: 'Carol: "For someone to find out what this is, and help me know what to do about the money."'
      },
      cues: [
        '"His memory\u2019s actually fine" \u2014 a dementia that does not start with memory.',
        '"He\u2019s spent thousands" \u2014 financial risk and lasting power of attorney.',
        '"He still drives every day" (if asked) \u2014 driving safety and DVLA.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises FRONTOTEMPORAL DEMENTIA (behavioural variant; Pick\u2019s is a pathological subtype) \u2014 early personality/behaviour change (disinhibition, loss of empathy, apathy, impulsivity/reckless spending, altered eating) with relatively preserved memory and poor insight, young-onset'
      },
      {
        dom: 'cm',
        text: 'Does NOT mislabel it as a midlife crisis/stress/primary psychiatric illness \u2014 recognising personality change in a younger adult warrants considering an organic/neurodegenerative cause'
      },
      {
        dom: 'dg',
        text: 'Takes a COLLATERAL history with Brian\u2019s consent (spouse essential given poor insight) and screens the differential (depression, bipolar/mania, psychosis, alcohol/substance, other dementias, MND overlap, family history, structural/endocrine \u2014 NICE NG97 bloods + cognitive assessment, not excluding dementia on a normal score)'
      },
      {
        dom: 'dg',
        text: 'Assesses RISK/safeguarding \u2014 financial vulnerability/reckless spending (lasting power of attorney discussed now while he may have capacity), behavioural risk, and DRIVING (DVLA duty; no driving pending assessment if judgement is a concern)'
      },
      {
        dom: 'cm',
        text: 'REFERS to a specialist dementia diagnostic/young-onset/neurology service for assessment (cognitive testing, neuroimaging), knowing NG97 advises against acetylcholinesterase inhibitors or memantine in FTD'
      },
      {
        dom: 'ro',
        text: 'SUPPORTS the carer \u2014 validates the distress, explains it is an illness not a choice (so the patient isn\u2019t blamed), and signposts carer support, including a carer\u2019s assessment (Care Act 2014)'
      },
      {
        dom: 'ro',
        text: 'Communicates sensitively with both the patient (poor insight) and the spouse, and checks understanding'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: referral to a young-onset dementia service, basic investigations, risk/finance/driving advice, carer support, and review \u2014 recognising FTD, not dismissing it as stress'
      }
    ],
    worked: [
      {
        lbl: 'Validate + take seriously',
        txt: '"Thank you for describing it so clearly \u2014 and you know him best. A real change in personality like this, over a year or two in someone Brian\u2019s age, is NOT just a midlife crisis or stress; it can be a medical condition affecting the front of the brain, and it deserves proper assessment."'
      },
      {
        lbl: 'Name the possibility',
        txt: '"One cause of exactly this pattern \u2014 becoming disinhibited, less empathetic, impulsive with money, with memory actually preserved \u2014 is a type of dementia called frontotemporal dementia. It often gets missed because the memory is fine and people assume it\u2019s behaviour or stress."'
      },
      {
        lbl: 'Collateral + exclude mimics',
        txt: '"Brian, is it all right with you if your wife tells me what she\u2019s noticed? Your account is invaluable, because Brian may not feel anything\u2019s wrong. I\u2019d like to examine Brian in person, and I\u2019ll do some blood tests \u2014 blood count, calcium, sugar, kidney, liver and thyroid tests, B12 and folate \u2014 and a cognitive check, and think about other causes like depression or alcohol, to be thorough. A normal memory test wouldn\u2019t rule this out. Has anyone in the family had dementia, motor neurone disease or mental illness?"'
      },
      {
        lbl: 'Address risk',
        txt: '"A couple of practical things: the spending may need protecting, and it\u2019s worth thinking about a lasting power of attorney now, while Brian can make that decision himself. And I have to ask about driving \u2014 I\u2019d advise not driving while this is assessed, and if dementia is diagnosed it must be declared to the DVLA. I know that\u2019s hard."'
      },
      {
        lbl: 'Refer + carer support',
        txt: '"I\u2019m referring Brian to a young-onset dementia/neurology service for detailed assessment and a scan. And importantly \u2014 how are YOU coping? This is bewildering, and none of it is his fault or yours. There\u2019s support for carers, including a carer\u2019s assessment from the council, and I\u2019ll connect you."'
      },
      {
        lbl: 'Safety-net',
        txt: '"Come back if things escalate or there\u2019s any risk to him or others. We\u2019ll get the assessment moving and support you both through it."'
      }
    ],
    learning: 'FRONTOTEMPORAL DEMENTIA (FTD), here the behavioural variant (bvFTD; Pick\u2019s disease is a pathological subtype, not a synonym), is a YOUNG-ONSET dementia (often 50s\u201360s) presenting with early PERSONALITY and BEHAVIOUR change \u2014 disinhibition (socially inappropriate remarks/actions), loss of EMPATHY, apathy, impulsivity and poor judgement (e.g. reckless spending), repetitive/compulsive behaviours and altered eating \u2014 with relatively PRESERVED memory early on and often POOR INSIGHT (a language variant presents with progressive speech/language decline). It is frequently MISATTRIBUTED to a midlife crisis, stress, relationship breakdown, depression or primary psychiatric illness, causing diagnostic delay, so personality change of this kind in a younger adult \u2014 especially with a clear timeline and collateral history \u2014 should prompt consideration of an organic/neurodegenerative cause rather than "just stress". Take a COLLATERAL history with the patient\u2019s consent (the spouse is essential given poor insight) and screen the differential (depression, bipolar/mania, psychosis, alcohol/substance misuse, other dementias such as Alzheimer\u2019s which is memory-led, FTD\u2013motor neurone disease overlap, family history, and structural/endocrine/metabolic causes \u2014 examination face to face, NICE NG97 bloods (FBC, calcium, glucose, renal and liver function, thyroid function, B12 and folate) and a cognitive assessment, remembering NG97 advises not ruling out dementia on a normal cognitive score alone). Assess RISK and safeguarding: financial vulnerability/reckless spending (lasting power of attorney discussed now, while he may have capacity \u2014 Mental Capacity Act 2005), behavioural risk, and DRIVING (a person diagnosed with dementia must notify the DVLA; advise not driving while assessed if judgement is a concern). Refer to a specialist dementia diagnostic service \u2014 a YOUNG-ONSET DEMENTIA service/cognitive neurology clinic at this age \u2014 for detailed cognitive testing and neuroimaging (NG97 advises against acetylcholinesterase inhibitors or memantine in FTD), and crucially SUPPORT THE CARER \u2014 validating the distress, explaining it is an illness not a choice (so the patient is not blamed), offering a carer\u2019s assessment (Care Act 2014; NICE NG150) and signposting carer support. The skill is recognising young-onset behavioural-variant dementia, taking a collateral history, excluding mimics, addressing risk/driving, referring, and supporting the family \u2014 not mislabelling it stress.',
    knowledge: {
      guideline: 'Frontotemporal dementia (behavioural variant) \u00b7 young-onset personality/behaviour change \u00b7 collateral history \u00b7 risk/DVLA \u00b7 young-onset dementia referral \u00b7 carer support \u00b7 [1] NICE NG97 Dementia: assessment, management and support for people living with dementia and their carers (2018) \u00b7 [2] International consensus criteria for behavioural-variant frontotemporal dementia, Rascovsky et al., Brain 2011 (international) \u00b7 [3] DVLA Assessing fitness to drive: dementia \u00b7 [4] GMC Confidentiality: patients\u2019 fitness to drive and reporting concerns to the DVLA (2017) \u00b7 [5] Mental Capacity Act 2005 and Care Act 2014 \u00b7 [6] NICE NG150 Supporting adult carers (2020)',
      points: [
        {
          h: 'Recognise FTD',
          t: 'Young-onset (50s\u201360s) early personality/behaviour change: disinhibition, loss of empathy, apathy, impulsivity/reckless spending, altered eating, repetitive behaviours; memory relatively preserved; poor insight (possible bvFTD: three of six consensus features [2]). (Language variant: progressive speech decline.)'
        },
        {
          h: 'Don\u2019t mislabel',
          t: 'Frequently misattributed to midlife crisis/stress/depression/psychiatric illness \u2192 delay. Personality change in a younger adult warrants considering an organic cause.'
        },
        {
          h: 'Collateral & differential',
          t: 'Collateral history with consent (spouse essential \u2014 poor insight). Exclude depression, bipolar/mania, psychosis, alcohol/substance, other dementias, structural/endocrine causes; ask about MND features and family history; NG97 bloods (FBC, calcium, glucose, renal, liver, thyroid, B12, folate) + cognitive assessment \u2014 a normal score does not exclude dementia [1].'
        },
        {
          h: 'Risk & driving',
          t: 'Financial vulnerability/reckless spending (protect finances; LPA now while capacity remains [5]), behavioural risk, DVLA duty (a person diagnosed with dementia must notify; no driving while assessed if judgement is a concern) [3,4].'
        },
        {
          h: 'Refer',
          t: 'Specialist dementia diagnostic service \u2014 young-onset service/cognitive neurology \u2014 for cognitive testing and neuroimaging [1]. No acetylcholinesterase inhibitors or memantine in FTD (NG97).'
        },
        {
          h: 'Support the carer',
          t: 'Validate distress; explain it is an illness not a choice; carer\u2019s assessment (Care Act 2014 [5]; NICE NG150 [6]); signpost carer support. Reduces blame of patient/self.'
        },
        {
          h: 'Never do',
          t: 'Never dismiss young-onset personality change as stress/midlife crisis; never skip collateral history; never overlook finances/driving risk; never neglect the carer.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Referral + basic investigations; risk/finance/driving advice; carer support; review; escalate if risk to patient/others.'
        }
      ]
    }
  };

  /* ===== 267. Substance misuse in a teenager ===== */
  const c267 = {
    id: 'teen-substance-misuse',
    title: '"My mate\u2019s mum found vapes and some pills in my bag \u2014 it\u2019s no big deal, everyone does it. You won\u2019t tell my parents, right?"',
    type: 'video',
    duration: 12,
    meta: {
      age: 15,
      sex: 'M',
      setting: 'Video consultation, seen on his own \u2014 a teenager who attends reluctantly over substance use (no examination needed).',
      system: 'Adolescent health / Safeguarding \u2014 substance misuse in a teenager: HEADSS, harm reduction & confidentiality',
      checked: 'October 2026'
    },
    brief: 'A 15-year-old, Kai, attends reluctantly ("I was made to") after a friend\u2019s mother found pills/vapes in his bag; he minimises it ("everyone does it") and is worried about confidentiality and his parents being told (who made him come, and what his parents already know, are not stated \u2014 ask him). The task is the ADOLESCENT consultation done well: build RAPPORT and engage him directly, clarify CONFIDENTIALITY honestly (GMC 0\u201318 years: young people are owed the same duty of confidentiality as adults; information can be shared without consent only where needed to protect him or others from a risk of SERIOUS HARM, such as abuse or exploitation \u2014 explain this up front, see him on his own, and tell him before sharing unless that would increase the risk), take a non-judgemental SUBSTANCE history (what, how much, route, frequency, context, other drugs/alcohol, mental health) within a HEADSS psychosocial assessment (Home, Education, Activities, Drugs, Sexuality, Suicide/mood/Safety), assess RISK and SAFEGUARDING (exploitation/county lines, abuse, mental health/self-harm, dependence, risky behaviours), assess and record Gillick COMPETENCE, deliver HARM-REDUCTION and motivational, non-lecturing advice (the pills are unidentified \u2014 illicit pills may not contain what the seller claims, and UK public health alerts have described counterfeit benzodiazepine tablets containing potent synthetic opioids (nitazenes), so: don\u2019t use alone, don\u2019t mix with alcohol or other drugs, and call 999 if someone cannot be woken; selling vapes to under-18s is illegal in the UK and unregulated vapes may contain other substances), screen mood and self-harm (NICE NG225), and signpost/refer to young people\u2019s SUBSTANCE-MISUSE services (NICE NG64: targeted support for those at risk or experimenting) with follow-up, encouraging a trusted adult without making it a condition of help, and involving safeguarding (practice safeguarding lead, local children\u2019s social care \u2014 Working Together to Safeguard Children 2023; Home Office county lines guidance) where indicated and proportionate. The skill is engaging the adolescent, handling confidentiality correctly, HEADSS/safeguarding (incl. exploitation), harm reduction not lecturing, and appropriate signposting/referral.',
    script: {
      opening: '"My mate\u2019s mum found some vapes and a few pills in my bag and made a massive deal of it. Honestly it\u2019s nothing \u2014 everyone at school does it, it\u2019s no big deal. I only came because I was made to. You\u2019re not going to tell my parents or get me in trouble, are you?"',
      facts: [
        {
          topic: 'Who made him come',
          text: 'His mum booked it after the friend\u2019s mum rang her. Mum knows about the vapes and pills; she is waiting in the car. Kai is on the video call alone in his bedroom.'
        },
        {
          topic: 'Home (HEADSS)',
          text: 'Lives with Mum and younger sister. Dad left 2 years ago; sees him "now and then". Rows with Mum about curfew. "Fine. Normal."'
        },
        {
          topic: 'Education and activities',
          text: 'Year 10. "School\u2019s all right." Grades dropped this year; had two detentions for lateness. Used to play football; stopped last season. Hangs out with mates at the park and an older lad\u2019s flat.'
        },
        {
          topic: 'Drugs and alcohol (if asked without judgement)',
          text: 'Vapes most days \u2014 "everyone does". The pills were "just something going round" from an older lad, Dee (19); took half of one twice, "maybe with a drink". Doesn\u2019t know what they are. Drinks cider at weekends, 3\u20134 cans. Has tried cannabis a few times.'
        },
        {
          topic: 'Safety and exploitation (if asked)',
          text: 'Dee gave him the pills "for free" and keeps offering more. If asked whether anyone has asked him to carry, sell or hold anything: "No. It\u2019s not like that." No extra phone, no unexplained money, not threatened, never missing overnight. Not been hurt by anyone. If asked about online contacts: nothing worrying.'
        },
        {
          topic: 'Sex and mood',
          text: 'Has a girlfriend; "not really" sexually active \u2014 declines to say more. Mood "I\u2019m all right"; sleeps late, tired. No self-harm, no suicidal thoughts.'
        },
        { topic: 'Health', text: 'No medicines, no allergies, mild asthma as a child.' },
        {
          topic: 'How to play it',
          text: 'Guarded, monosyllabic, slouching. Open up a little only if the doctor explains confidentiality honestly and talks to you, not at you. If lectured, shut down ("Whatever"). If the doctor asks about older friends, mention Dee; deny being asked to carry anything. Admit a mate was sick after the pills only if asked whether anything has gone wrong. Take harm-reduction advice about the pills seriously.'
        }
      ],
      ice: {
        ideas: '"It\u2019s no big deal. Everyone vapes."',
        concerns: 'HIDDEN AGENDA \u2014 he is quietly uneasy that Dee keeps giving him free stuff, and frightened after a friend was sick on the pills; mostly afraid his mum will find out about the cider and the cannabis.',
        expectations: '"For you to say it\u2019s fine and not tell my mum."'
      },
      cues: [
        '"You\u2019re not going to tell my parents, are you?" \u2014 confidentiality to explain honestly, with its limits.',
        '"Just something going round" \u2014 unknown pills; harm-reduction message.',
        '"An older lad" (if friends are explored) \u2014 possible criminal exploitation to screen for.'
      ]
    },
    checkpoints: [
      {
        dom: 'ro',
        text: 'Builds RAPPORT and engages the teenager DIRECTLY and non-judgementally, rather than lecturing, recognising he attended reluctantly'
      },
      {
        dom: 'ro',
        text: 'Clarifies CONFIDENTIALITY honestly up front, in line with GMC 0\u201318 years guidance \u2014 confidential unless there is a risk of serious harm to him/others (then information may be shared/safeguarding, telling him first where safe) \u2014 rather than promising blanket secrecy'
      },
      {
        dom: 'dg',
        text: 'Takes a structured HEADSS psychosocial assessment with a non-judgemental substance history (what/how much/route/frequency/context/funding/other drugs/alcohol)'
      },
      {
        dom: 'cm',
        text: 'Actively screens RISK and SAFEGUARDING \u2014 child criminal/sexual EXPLOITATION (county lines), abuse/neglect, mental-health/self-harm, dependence, risky behaviours'
      },
      {
        dom: 'dg',
        text: 'Assesses and records GILLICK competence and provides HARM-REDUCTION/motivational advice (unknown pills and counterfeit tablets containing nitazenes; not alone, no alcohol, 999 if someone can\u2019t be woken; vapes illegal to sell to under-18s; his goals) rather than moralising'
      },
      {
        dom: 'cm',
        text: 'Signposts/refers to young people\u2019s SUBSTANCE-MISUSE (NICE NG64) and mental-health services (self-harm per NICE NG225), and involves parents/safeguarding where proportionate and in his interests'
      },
      {
        dom: 'ro',
        text: 'Explains any information-sharing or safeguarding step to him before acting, keeping him engaged and informed rather than feeling betrayed, and agrees a plan he is willing to follow'
      },
      {
        dom: 'cm',
        text: 'Reaches a safe, supportive plan with appropriate safeguarding action, harm-reduction, signposting, competence/confidentiality handled correctly, and follow-up \u2014 engaging the teenager, not lecturing or breaching trust unnecessarily'
      }
    ],
    worked: [
      {
        lbl: 'Engage, not lecture',
        txt: '"Thanks for coming in, even if you were made to \u2014 I\u2019m not here to tell you off or get you in trouble. I\u2019d genuinely just like to understand what\u2019s going on from your side. Is that okay?"'
      },
      {
        lbl: 'Confidentiality honestly',
        txt: '"Let me be straight about confidentiality, because it matters: what you tell me stays between us \u2014 I won\u2019t automatically tell your parents. The only exception is if I\u2019m worried you or someone else is at serious risk of harm, when I might need to involve others to keep you safe. I\u2019ll always try to talk to you first. Can I ask \u2014 who made you come today, and do your parents know about this?"'
      },
      {
        lbl: 'HEADSS + substance history',
        txt: '"Tell me a bit about things generally \u2014 home, school, what you do for fun \u2014 and then about the vapes and pills: what are they, how often, who with, and how do you get them? No judgement, I just need the real picture."'
      },
      {
        lbl: 'Screen exploitation/safeguarding',
        txt: '"A couple of important questions: where do the pills come from, and does anyone older give them to you or ask you to carry or sell things? Do you owe anyone money? And how\u2019s your mood \u2014 ever felt like harming yourself?"'
      },
      {
        lbl: 'Harm reduction + signpost',
        txt: '"Can I share a couple of facts, and you decide what to do with them? Pills that don\u2019t come from a pharmacy can contain something completely different \u2014 some fake tablets in the UK have had very strong opioids in them. So never take them alone, don\u2019t mix them with alcohol, and if someone can\u2019t be woken, call 999. There\u2019s a young people\u2019s service that\u2019s confidential and really helpful \u2014 I can refer you. What would YOU want to change, if anything?"'
      },
      {
        lbl: 'Safety-net + trusted adult',
        txt: '"If I\u2019m worried about your safety I\u2019ll be honest with you about what I need to do. It\u2019s also worth having a trusted adult in your corner \u2014 we can think about that together. Come back any time; you\u2019re not in trouble with me."'
      }
    ],
    learning: 'Substance misuse in a teenager is an ADOLESCENT consultation where engagement and safeguarding matter as much as the drugs. Build RAPPORT and engage the young person directly and non-judgementally \u2014 a lecture loses them. Clarify CONFIDENTIALITY honestly at the outset, seeing the young person alone: under GMC 0\u201318 years guidance they are owed the same duty of confidentiality as adults, and information is shared without consent only where needed to protect them or others from a risk of serious harm (safeguarding), telling them first where safe; being upfront builds trust and is more honest than promising blanket secrecy. Take a structured HEADSS psychosocial assessment \u2014 Home, Education/employment, Activities, Drugs (and alcohol/vaping: what, how much, route, frequency, context, who with, how funded), Sexuality/relationships, and Suicide/self-harm/mood/Safety \u2014 framing the substance use within the whole of the young person\u2019s life. Critically, assess RISK and SAFEGUARDING: child criminal/sexual EXPLOITATION (county lines \u2014 unexplained money/items, older "friends", going missing, being recruited to carry or sell, owing money/debt bondage), abuse/neglect, mental-health/self-harm, dependence and risky behaviours \u2014 questions about where substances come from, who supplies them and any debts can reveal exploitation \u2014 and involve safeguarding where indicated (practice safeguarding lead and children\u2019s social care, Working Together to Safeguard Children 2023; Home Office county lines guidance). Assess and record GILLICK competence, provide HARM-REDUCTION and motivational advice (honest information without scare-mongering, exploring the young person\u2019s own goals \u2014 unidentified illicit pills may be counterfeit and contain nitazenes, so not alone, not with alcohol, 999 if someone can\u2019t be woken; selling vapes to under-18s is illegal) rather than moralising, screen mood and self-harm (NICE NG225), and signpost/refer to young people\u2019s substance-misuse (NICE NG64) and mental-health services, involving parents/a trusted adult and safeguarding where proportionate and in the young person\u2019s interests. The skill is engaging the adolescent, handling confidentiality correctly, HEADSS/safeguarding (especially exploitation), harm reduction not lecturing, and appropriate signposting/referral.',
    knowledge: {
      guideline: 'Adolescent substance misuse \u00b7 HEADSS assessment \u00b7 confidentiality & Gillick \u00b7 safeguarding/child exploitation (county lines) \u00b7 harm reduction & youth services \u00b7 [1] GMC 0\u201318 years: guidance for all doctors (2007, updated 2018) \u00b7 [2] NICE NG64 Drug misuse prevention: targeted interventions (2017) \u00b7 [3] HM Government Working Together to Safeguard Children (2023) \u00b7 [4] Home Office Criminal exploitation of children and vulnerable adults: county lines guidance (2018) \u00b7 [5] NICE NG225 Self-harm: assessment, management and preventing recurrence (2022) \u00b7 [6] Gillick v West Norfolk and Wisbech AHA (1985)',
      points: [
        {
          h: 'Engage, don\u2019t lecture',
          t: 'Build rapport, engage the teenager directly and non-judgementally; the relationship determines honest disclosure.'
        },
        {
          h: 'Confidentiality honestly',
          t: 'Same duty of confidentiality as adults (GMC 0\u201318 [1]); shared without consent only for a risk of serious harm to self/others (safeguarding [3]), telling him first where safe. Explain up front; don\u2019t promise blanket secrecy.'
        },
        {
          h: 'HEADSS',
          t: 'Home, Education, Activities, Drugs/alcohol/vaping (what/how much/route/frequency/context/funding), Sexuality, Suicide/mood/Safety \u2014 non-judgemental.'
        },
        {
          h: 'Safeguarding/exploitation',
          t: 'Screen child criminal/sexual exploitation (county lines [4] \u2014 money/items, older "friends", going missing, carrying/selling, debts), abuse/neglect, mental health/self-harm (NG225 [5]), dependence. Involve safeguarding if indicated [3].'
        },
        {
          h: 'Competence & harm reduction',
          t: 'Assess and record Gillick competence [6]; give harm-reduction/motivational advice (unknown pills may be counterfeit with nitazenes \u2014 not alone, no alcohol, 999; vapes illegal to sell to under-18s; the young person\u2019s goals) rather than moralising.'
        },
        {
          h: 'Signpost/refer',
          t: 'Young people\u2019s substance-misuse (NICE NG64 [2]) and mental-health services; involve parents/trusted adult (not a condition of help) and safeguarding where proportionate and in their interests; follow-up in about two weeks.'
        },
        {
          h: 'Never do',
          t: 'Never lecture/moralise; never promise unconditional secrecy; never miss exploitation/safeguarding or mental-health risk; never ignore Gillick competence.'
        },
        {
          h: 'Safety-net & follow-up',
          t: 'Safeguarding action if needed; harm-reduction; youth-service referral; trusted-adult involvement; honest about any information-sharing; follow-up.'
        }
      ]
    }
  };

  /* ===== 268. Abdominal migraine ===== */
  const c268 = {
    id: 'abdominal-migraine',
    title: '"My 8-year-old keeps getting episodes of severe tummy pain with sickness and pallor \u2014 then she\u2019s completely fine. Tests are normal"',
    type: 'telephone',
    duration: 12,
    meta: {
      age: 8,
      sex: 'F',
      setting: 'Telephone \u2014 recurrent episodic abdominal pain in a child, parent calling (a face-to-face review is arranged to examine her, plot growth and test urine).',
      system: 'Paediatrics \u2014 abdominal migraine: recognising the pattern after excluding red flags',
      checked: 'October 2026'
    },
    brief: 'A mother calls about her 8-year-old, Mia, who has recurrent STEREOTYPED episodes of severe MIDLINE/central abdominal pain lasting hours, with nausea/vomiting, PALLOR, anorexia and lethargy, occurring every few weeks, with COMPLETE wellness between episodes and normal growth; basic tests have been normal, and there is a family history of migraine. The task is to recognise ABDOMINAL MIGRAINE \u2014 a recognised paediatric variant of migraine causing recurrent episodic central abdominal pain with associated features (pallor, nausea/vomiting, anorexia) and symptom-free intervals, often with a family/personal history of migraine, typically resolving or evolving into typical migraine later \u2014 as a diagnosis made AFTER excluding red flags and other causes (it is largely clinical/of exclusion); take a history on the phone and crucially screen RED FLAGS for organic disease (Rome IV alarm features, international: weight loss/faltering growth, pain or vomiting waking from sleep, significant vomiting \u2014 BILIOUS vomiting is an EMERGENCY (possible malrotation/obstruction: 999 or A&E) \u2014 GI bleeding, chronic severe diarrhoea, fever, persistent right-sided/localised pain, dysuria, joint or perianal problems, family history of IBD, abnormal examination, symptoms between attacks), then arrange a FACE-TO-FACE review to examine her, plot growth and test urine (abdominal pain in a child should not be diagnosed without examination); consider differentials (constipation per NICE CG99, UTI per NICE NG224, coeliac \u2014 serology per NICE NG20 if not done \u2014 IBD, surgical causes, intermittent pelviureteric junction obstruction, cyclical vomiting syndrome, functional abdominal pain); manage with reassurance/explanation, trigger identification, lifestyle, acute symptomatic treatment (quiet dark room, fluids, early paracetamol or ibuprofen, dose per BNFC \u2014 antiemetics are not routine at her age: domperidone is not licensed under 12, MHRA December 2019, and metoclopramide is restricted in under-18s, MHRA August 2013; triptans are not licensed at 8) and, in frequent/severe cases, paediatric referral (preventive medicines are a specialist decision); and reassure the family while safety-netting. The skill is recognising the stereotyped episodic pattern with symptom-free intervals, excluding red flags, and reassuring/managing \u2014 not endless re-investigation.',
    script: {
      opening: '"I\u2019m worried about Mia \u2014 she keeps getting these attacks of really bad tummy pain in the middle of her tummy, lasting hours, where she goes pale, feels sick, sometimes vomits, and just wants to lie down. Then it passes and she\u2019s totally back to normal for weeks. The GP did some tests and they were normal. I get migraines myself. What is it, and why do the tests keep coming back fine?"',
      facts: [
        { topic: 'Who is calling', text: 'Mother, Rachel, on the phone. Mia (8) is at school today and well.' },
        {
          topic: 'The attacks',
          text: 'For about a year, every 3\u20135 weeks. Always the same: dull pain around the belly button, goes very pale with dark rings under her eyes, feels sick, vomits once or twice, off her food, wants to lie in a dark quiet room. Lasts 3\u201312 hours. Sleep helps.'
        },
        {
          topic: 'Between attacks',
          text: 'Completely normal \u2014 "you\u2019d never know". Eating well, playing football, no tummy aches in between.'
        },
        {
          topic: 'Red-flag questions (all negative)',
          text: 'Vomit never green, no blood. No blood in stools; bowels daily, soft. No weight loss \u2014 growing out of clothes normally. Never woken at night by pain. No fevers, no rashes, no joint pains, no mouth ulcers. Pain never on one side. No pain or burning passing urine. No headaches she complains of.'
        },
        {
          topic: 'Triggers (if asked)',
          text: 'Often after a late night, a long car journey, or a missed breakfast. One attack the day before a school play.'
        },
        {
          topic: 'Tests and history',
          text: 'Had blood tests at the surgery 2 months ago ("all normal, including the coeliac one"). Not sure if a urine test was done. No medicines; gives Calpol in attacks. No allergies. Born at term, healthy.'
        },
        {
          topic: 'Family and social',
          text: 'Rachel has migraine with aura; Mia\u2019s grandma too. Lives with Mum, Dad and a brother (5). Happy at school, no bullying Rachel knows of.'
        },
        {
          topic: 'How to play it',
          text: 'Worried, a bit frustrated that "nothing is being found". Ask "But why are the tests normal?" and "Will she grow out of it?". Relieved to hear it is a recognised condition. Happy to keep a diary and bring Mia in to be weighed, measured and examined.'
        }
      ],
      ice: {
        ideas: '"I keep thinking something\u2019s being missed because the tests are normal."',
        concerns: 'HIDDEN AGENDA \u2014 a school friend\u2019s sister had appendicitis "that the GP missed", and Rachel is scared of the same; also feels guilty that Mia might have "got my migraines".',
        expectations: '"To know what it is \u2014 maybe a scan or a referral to a specialist."'
      },
      cues: [
        '"She\u2019s totally back to normal for weeks" \u2014 well between attacks, which supports the diagnosis.',
        '"I get migraines myself" \u2014 the family history.',
        '"Why do the tests keep coming back fine?" \u2014 explain that normal tests support the diagnosis.'
      ]
    },
    checkpoints: [
      {
        dom: 'dg',
        text: 'Recognises ABDOMINAL MIGRAINE \u2014 recurrent stereotyped central abdominal pain with pallor/nausea/vomiting/anorexia/lethargy lasting hours, with complete wellness between episodes, normal growth and often a migraine history'
      },
      {
        dom: 'dg',
        text: 'Understands it is largely a CLINICAL diagnosis of EXCLUSION and explains that NORMAL investigations SUPPORT (not undermine) the diagnosis'
      },
      {
        dom: 'dg',
        text: 'Screens the RED FLAGS that would not fit (weight loss/faltering growth, nocturnal/waking or persistent vomiting, bilious vomiting as an emergency, GI bleeding, fever, localised/RIF pain, abnormal exam, dysuria, symptoms between attacks) and arranges a face-to-face examination with growth and urine'
      },
      {
        dom: 'dg',
        text: 'Considers the differential (constipation, UTI, coeliac, IBD, surgical causes, functional abdominal pain) and uses appropriate basic tests (coeliac serology, urine) to exclude'
      },
      {
        dom: 'cm',
        text: 'Manages \u2014 reassurance/explanation, trigger identification/avoidance, lifestyle, acute symptomatic treatment (early paracetamol/ibuprofen per BNFC; no routine antiemetics under MHRA restrictions; no triptans at 8), and paediatric referral for frequent/severe episodes \u2014 with a symptom diary'
      },
      {
        dom: 'ro',
        text: 'Reassures and explains the diagnosis clearly (a real form of migraine, not "nothing"), addressing the "why are the tests normal?" concern, and checks understanding'
      },
      {
        dom: 'ro',
        text: 'Draws out and addresses the worry that something serious has been missed, explaining the safety-net and review plan so the parent feels heard rather than dismissed with \u2018the tests are normal\u2019'
      },
      {
        dom: 'cm',
        text: 'Safety-nets and follows up: red flags warranting urgent review/reassessment, trigger/acute management, review and a diary, and paediatric referral if frequent/severe or red flags \u2014 recognising the pattern, not endlessly re-investigating'
      }
    ],
    worked: [
      {
        lbl: 'Name it + reassure',
        txt: '"What you\u2019re describing \u2014 stereotyped attacks of central tummy pain with pallor and sickness lasting hours, then completely well for weeks, with your own migraines in the background \u2014 sounds like abdominal migraine. It\u2019s a recognised form of migraine in children, and it\u2019s real, not \u2018nothing\u2019."'
      },
      {
        lbl: 'Why tests are normal',
        txt: '"That\u2019s exactly why the tests keep coming back normal \u2014 it\u2019s a diagnosis we make from the pattern after ruling out other causes, not something a blood test shows. Normal results actually fit and are reassuring."'
      },
      {
        lbl: 'Red-flag check',
        txt: '"Let me just check a few things that would make me think differently: is she losing weight or off her growth? Does the pain or vomiting wake her at night, is the vomit ever green, any blood in her stool or vomit, fevers, or pain always in one spot? \u2026 None of those \u2014 reassuring. I can\u2019t examine her over the phone, though, so I\u2019d like to see her in person to examine her tummy, check her height and weight on her growth chart, and test a urine sample."'
      },
      {
        lbl: 'Exclude mimics',
        txt: '"I\u2019ll make sure constipation, a urine infection and coeliac have been considered, as those can mimic it \u2014 a urine test and a coeliac blood test if not done."'
      },
      {
        lbl: 'Manage',
        txt: '"For attacks: rest in a quiet, dark room, sips of fluid, and paracetamol or ibuprofen early in the attack. Anti-sickness medicines aren\u2019t routinely used at her age, and migraine tablets like triptans aren\u2019t licensed for her. Keep a diary to spot triggers \u2014 stress, missed meals, poor sleep, dehydration. If they\u2019re frequent or disabling, I\u2019d involve a paediatrician, who can decide about preventive options."'
      },
      {
        lbl: 'Safety-net',
        txt: '"If she ever vomits green, call 999 or go to A&E \u2014 that\u2019s an emergency. Come back \u2014 or seek urgent help \u2014 if the pattern changes, she loses weight, the pain stays in one place or wakes her, you see blood, or she\u2019s unwell between attacks. Otherwise this often improves with age, sometimes turning into ordinary migraines later."'
      }
    ],
    learning: 'ABDOMINAL MIGRAINE is a recognised paediatric variant of migraine: recurrent, STEREOTYPED episodes of moderate-to-severe MIDLINE/central abdominal pain lasting hours (ICHD-3, international: 2\u201372 hours untreated; Rome IV, international: at least 1 hour) with associated PALLOR, nausea/vomiting, anorexia and lethargy, and \u2014 crucially \u2014 COMPLETE wellness between episodes with normal growth, often with a personal/family history of migraine, typically resolving or evolving into typical migraine in later childhood/adolescence. It is largely a CLINICAL diagnosis of EXCLUSION, made after history/examination and exclusion of red flags and other causes \u2014 which is why investigations are normal: normal tests SUPPORT rather than undermine the diagnosis, and explaining this prevents the family feeling nothing has been found. Screen the RED FLAGS (Rome IV alarm features) that would not fit abdominal migraine: weight loss/faltering growth, pain or vomiting waking the child from sleep/nocturnal symptoms, bilious vomiting (an emergency \u2014 possible malrotation/obstruction) or persistent vomiting, GI bleeding, chronic severe diarrhoea, fever, persistent right-sided/localised pain, abnormal examination, dysuria, joint/perianal/systemic features, family history of IBD, or symptoms between attacks \u2014 any of which warrant assessment/investigation. On the telephone, arrange a face-to-face review to examine her, plot growth and test urine. Consider the differential for recurrent paediatric abdominal pain (constipation, UTI, coeliac disease, inflammatory bowel disease, surgical causes such as intermittent obstruction/intussusception, intermittent pelviureteric junction obstruction, cyclical vomiting syndrome, mesenteric adenitis, and functional abdominal pain/IBS) and use appropriate basic tests (coeliac serology per NICE NG20, urine per NICE NG224; constipation per NICE CG99) to exclude. Manage with reassurance and clear explanation (a real form of migraine, not "nothing"), trigger identification/avoidance (stress, sleep, food, dehydration), lifestyle measures, acute symptomatic treatment (rest in a quiet dark room, early paracetamol or ibuprofen per BNFC, hydration; antiemetics are not routine at this age \u2014 domperidone not licensed under 12, MHRA December 2019; metoclopramide restricted in under-18s, MHRA August 2013 \u2014 and triptans are not licensed at 8), a symptom diary, and paediatric referral for frequent or severe episodes (preventive medicines are a specialist decision). The skill is recognising the stereotyped episodic pattern with symptom-free intervals, explaining why normal tests fit, excluding red flags, and managing/reassuring \u2014 not endless re-investigation.',
    knowledge: {
      guideline: 'Abdominal migraine (paediatric migraine variant) \u00b7 stereotyped episodic central pain + symptom-free intervals \u00b7 diagnosis of exclusion \u00b7 red flags \u00b7 trigger/acute management \u00b7 [1] International Classification of Headache Disorders, 3rd edition, 1.6.1.2 Abdominal migraine (International Headache Society 2018, international) \u00b7 [2] Rome IV childhood functional gastrointestinal disorders, Hyams et al., Gastroenterology 2016 (international) \u00b7 [3] NICE NG20 Coeliac disease (2015) \u00b7 [4] NICE NG224 Urinary tract infection in under 16s (2022) \u00b7 [5] NICE CG99 Constipation in children and young people (2010) \u00b7 [6] MHRA Drug Safety Update: domperidone (December 2019) and metoclopramide (August 2013) \u00b7 [7] BNFC',
      points: [
        {
          h: 'Recognise',
          t: 'Recurrent stereotyped central abdominal pain (hours: 2\u201372 h untreated per ICHD-3 [1]; at least 1 h per Rome IV [2]) with pallor, nausea/vomiting, anorexia, lethargy; complete wellness between; normal growth; often migraine history. Resolves/evolves into typical migraine.'
        },
        {
          h: 'Diagnosis of exclusion',
          t: 'Largely clinical \u2014 made after excluding red flags/other causes, with a face-to-face examination, growth and urine. Normal investigations support, not undermine, the diagnosis. Explain this to the family.'
        },
        {
          h: 'Red flags',
          t: 'Weight loss/faltering growth, nocturnal/waking or persistent vomiting, bilious vomiting (emergency), GI bleeding, fever, localised/RIF pain, abnormal exam, dysuria, family history of IBD, symptoms between attacks \u2192 assess/investigate [2].'
        },
        {
          h: 'Differential',
          t: 'Constipation [5], UTI [4], coeliac [3], IBD, surgical causes (intermittent obstruction/malrotation/intussusception), intermittent PUJ obstruction, cyclical vomiting syndrome, mesenteric adenitis, functional abdominal pain/IBS. Use coeliac serology/urine to exclude.'
        },
        {
          h: 'Management',
          t: 'Reassurance/explanation, trigger identification/avoidance (stress, sleep, food, dehydration), lifestyle, acute treatment (quiet dark room, early paracetamol/ibuprofen per BNFC [7], hydration; no routine antiemetic [6]; no triptan at 8), symptom diary.'
        },
        {
          h: 'Frequent/severe',
          t: 'Paediatric referral for frequent or severe episodes; preventive medicines are a specialist decision.'
        },
        {
          h: 'Never do',
          t: 'Never endlessly re-investigate once the pattern is clear and red flags excluded; never label it without excluding red flags/mimics; never dismiss it as "nothing" because tests are normal.'
        },
        {
          h: 'Safety-net & follow-up',
          t: '999/A&E for green vomiting; urgent review if pattern changes, weight loss, localised/nocturnal pain, GI bleeding, or unwell between attacks; trigger/acute management; diary; paediatric referral if frequent/severe.'
        }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c265, c266, c267, c268);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'transgender-health': {
      "ceg": [
        "Gender, reproductive & sexual health",
        "Ethnicity, culture & diversity",
        "Investigations & results"
      ],
      "stem": {
        "name": "Sam Ellis",
        "age": "26 years · male",
        "pmh": [
          "Gender incongruence: under an NHS gender service; testosterone prescribed by the practice under a shared-care agreement",
          "Smoker"
        ],
        "meds": [
          "Testosterone injection (shared care)"
        ],
        "allergy": "None recorded",
        "recent": "Shared-care monitoring bloods: haematocrit 0.55 (0.49 a year ago), haemoglobin 178 g/L, trough testosterone upper end of male reference range, LFTs and lipids normal.",
        "reason": "Practice nurse asked him to book to discuss the results."
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Name and pronouns. Reassure that the aim is safety, not stopping testosterone."
        },
        {
          "t": "1–5",
          "h": "Result",
          "d": "Explain haematocrit; symptoms; dosing (self-adjusted); smoking; snoring."
        },
        {
          "t": "5–8",
          "h": "Sexual health",
          "d": "Respectful questions; unprotected vaginal sex, last night; myth corrected; feelings."
        },
        {
          "t": "8–11",
          "h": "Plan",
          "d": "EC today; pregnancy tests; STI screen; non-oestrogen contraception; cervical screening; repeat bloods and gender service; smoking; OSA."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; 999 symptoms; stop T if pregnant."
        }
      ],
      "wordPics": {
        "fail": "Misgenders Sam; stops testosterone or ignores the result; never asks about sex or contraception, so the risk of pregnancy is missed.",
        "pass": "Explains the raised haematocrit and plans a repeat with the gender service, identifies unprotected sex and offers emergency contraception and a pregnancy test.",
        "exc": "All of the above, plus: affirming throughout; explores self-adjusted dosing without blame; addresses smoking and possible sleep apnoea; corrects the testosterone-as-contraception myth clearly; offers a copper IUD as the most effective EC and ongoing method; STI and cervical screening; clear safety-net including stopping testosterone if pregnant."
      },
      "avoid": [
        {
          "dont": "“Your blood is too thick, so we’ll have to stop the testosterone.”",
          "instead": "“We’ll repeat it and work with the gender team on the dose, so you stay safe on it.”",
          "why": "The protocol is to adjust and address causes; stopping is rarely needed and harms trust."
        },
        {
          "dont": "(Assuming no pregnancy risk) skipping sexual history.",
          "instead": "“I ask everyone about sex and contraception. What kind of sex are you having?”",
          "why": "Testosterone is not contraception."
        },
        {
          "dont": "“Have you thought about going back on the pill?”",
          "instead": "“Options without oestrogen are the coils, the implant and the injection.”",
          "why": "Oestrogen-containing methods are generally avoided with testosterone."
        }
      ]
    },
    'frontotemporal-dementia': {
      ceg: ['Older adults', 'Mental health & addiction'],
      stem: {
        name: 'Brian (wife present)',
        age: '58 years \u00b7 male',
        pmh: [
          '1\u20102 years progressive personality/behaviour change: disinhibition, loss of empathy, apathy, reckless spending, altered eating',
          '\u26a0 Memory relatively preserved; poor insight',
          'Others call it "midlife crisis/stress"'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '(Wife) "He\u2019s become rude, reckless with money and uncaring \u2014 it\u2019s like his personality\u2019s changed."',
        reason: 'Video consultation (examination arranged face to face) \u2014 personality/behaviour change in a younger adult.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Take seriously',
          d: 'Personality change over 1\u20102 years at 58 is not "just stress" \u2014 consider an organic cause.'
        },
        {
          t: '2\u20105',
          h: 'Recognise FTD',
          d: 'Disinhibition/loss of empathy/apathy/impulsivity/altered eating + preserved memory + poor insight = frontotemporal dementia.'
        },
        {
          t: '5\u20107',
          h: 'Collateral + exclude',
          d: 'Spouse history with Brian\u2019s consent; exclude depression/bipolar/psychosis/alcohol; MND features, family history; NICE NG97 bloods + cognitive assessment (normal score doesn\u2019t exclude).'
        },
        {
          t: '7\u20109',
          h: 'Risk',
          d: 'Finances/reckless spending and LPA while capacity remains, DVLA/driving, vulnerability/safeguarding.'
        },
        {
          t: '9\u201012',
          h: 'Refer + carer',
          d: 'Young-onset dementia/neurology referral; support the carer; it\u2019s an illness not a choice.'
        }
      ],
      wordPics: {
        fail: 'Mislabels it midlife crisis/stress/depression; no collateral history or referral; ignores finances/driving risk and the carer.',
        pass: 'Recognises possible FTD, takes collateral history, excludes mimics, and refers with carer support.',
        exc: 'Recognises young-onset behavioural-variant FTD, takes a collateral history and excludes mimics, addresses finance/driving risk, refers to a young-onset dementia service, and supports the carer (illness not a choice).'
      },
      avoid: [
        {
          dont: '"It\u2019s probably a midlife crisis or stress \u2014 try couples counselling."',
          instead: '"A genuine personality change over a year or two at his age can be a brain condition like frontotemporal dementia \u2014 it needs proper assessment, not just counselling."',
          why: 'Mislabelling young-onset FTD as stress/crisis delays diagnosis and support.'
        },
        {
          dont: '(No driving/finance risk) ignoring safety.',
          instead: '"We need to think about protecting finances, and conditions affecting judgement must be declared to the DVLA."',
          why: 'Financial vulnerability and driving are key risks in behavioural dementia.'
        },
        {
          dont: '(Neglecting carer) focusing only on the patient.',
          instead: '"How are you coping? This is bewildering, it\u2019s not his fault or yours \u2014 there\u2019s carer support."',
          why: 'Carer support and de-blaming are central to good dementia care.'
        }
      ]
    },
    'teen-substance-misuse': {
      ceg: ['Children & young people', 'Health disadvantage & vulnerabilities'],
      stem: {
        name: 'Kai',
        age: '15 years \u00b7 male',
        pmh: [
          'Vapes + pills found in his bag; minimises ("everyone does it"); attended reluctantly',
          'Worried about confidentiality/parents',
          'Screen safeguarding/exploitation + mental health'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"It\u2019s no big deal, everyone does it. You won\u2019t tell my parents, right?"',
        reason: 'Video consultation, seen on his own \u2014 teenager attending reluctantly over substance use.'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Engage',
          d: 'Build rapport, non-judgemental, engage him directly \u2014 not a lecture.'
        },
        {
          t: '2\u20104',
          h: 'Confidentiality honestly',
          d: 'Confidential (GMC 0\u201318) unless risk of serious harm to self/others (then may share/safeguarding, telling him first where safe); explain up front; see him alone.'
        },
        {
          t: '4\u20107',
          h: 'HEADSS + substance hx',
          d: 'Home/Education/Activities/Drugs(what/how much/route/funding)/Sexuality/Suicide-mood-Safety.'
        },
        {
          t: '7\u20109',
          h: 'Safeguarding/exploitation',
          d: 'County lines (money/items, older "friends", missing, carrying/selling, debts), abuse, mental health/self-harm.'
        },
        {
          t: '9\u201012',
          h: 'Competence + harm reduction',
          d: 'Gillick recorded; harm reduction (unknown pills/nitazenes \u2014 not alone, no alcohol, 999); youth-service referral (NICE NG64); parents/safeguarding if indicated; follow-up.'
        }
      ],
      wordPics: {
        fail: 'Lectures/moralises or promises blanket secrecy; no HEADSS or exploitation/safeguarding screen; misses mental-health risk; no signposting.',
        pass: 'Engages the teenager, handles confidentiality honestly, does a HEADSS/safeguarding screen, and signposts youth services.',
        exc: 'Builds rapport and engages directly, clarifies confidentiality honestly, does a HEADSS assessment with exploitation/safeguarding and mental-health screening, assesses Gillick competence, gives harm-reduction not lecturing, and signposts/refers with proportionate safeguarding.'
      },
      avoid: [
        {
          dont: '"Drugs are dangerous and illegal \u2014 you need to stop right now." (lecture)',
          instead: '"I\u2019m not here to tell you off \u2014 help me understand what\u2019s going on, and I\u2019ll give you honest information."',
          why: 'Lecturing/moralising disengages the adolescent and prevents honest disclosure.'
        },
        {
          dont: '"Don\u2019t worry, I won\u2019t tell anyone anything, I promise."',
          instead: '"It\u2019s confidential unless I\u2019m worried you or someone else is at serious risk \u2014 then I might need to involve others, and I\u2019d tell you first."',
          why: 'Promising unconditional secrecy is unsafe and dishonest given safeguarding duties.'
        },
        {
          dont: '(No exploitation screen) treating it as simple experimentation.',
          instead: '"Where do the pills come from, does anyone older give them to you or ask you to carry/sell, do you owe anyone?"',
          why: 'Missing child criminal exploitation/county lines is a serious safeguarding failure.'
        }
      ]
    },
    'abdominal-migraine': {
      ceg: ['Children & young people', 'New & undifferentiated presentations'],
      stem: {
        name: 'Mia (mother calling)',
        age: '8 years \u00b7 female',
        pmh: [
          'Recurrent stereotyped central abdominal pain (hours) + pallor/nausea/vomiting/lethargy every few weeks',
          'COMPLETELY well between; normal growth; basic tests normal',
          'Family history of migraine (mother)'
        ],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Episodes of severe tummy pain with sickness and pallor \u2014 then she\u2019s completely fine. Tests are normal."',
        reason: 'Telephone \u2014 recurrent episodic abdominal pain in a child (face-to-face examination, growth and urine arranged).'
      },
      timeMap: [
        {
          t: '0\u20102',
          h: 'Recognise',
          d: 'Stereotyped central pain + pallor/vomiting, well between, normal growth, family migraine = abdominal migraine.'
        },
        {
          t: '2\u20104',
          h: 'Why tests normal',
          d: 'Diagnosis of exclusion \u2014 normal tests support it; explain to the family.'
        },
        {
          t: '4\u20106',
          h: 'Red flags',
          d: 'Weight loss/faltering growth, nocturnal vomiting, bilious vomiting (emergency), GI bleeding, localised/RIF pain, fever, symptoms between attacks; face-to-face exam, growth and urine.'
        },
        {
          t: '6\u20108',
          h: 'Exclude mimics',
          d: 'Constipation, UTI, coeliac, IBD, surgical causes, PUJ obstruction, cyclical vomiting; coeliac serology/urine.'
        },
        {
          t: '8\u201012',
          h: 'Manage + safety-net',
          d: 'Triggers/diary, acute treatment (dark room/fluids/early paracetamol or ibuprofen; no routine antiemetic or triptan at 8); paediatric referral if frequent/severe; red-flag advice.'
        }
      ],
      wordPics: {
        fail: 'Endlessly re-investigates or dismisses it as "nothing" because tests are normal; misses red flags or fails to exclude coeliac/UTI.',
        pass: 'Recognises abdominal migraine, explains why tests are normal, screens red flags, and manages/reassures.',
        exc: 'Recognises abdominal migraine (stereotyped episodes + well intervals + migraine history), explains normal tests support the diagnosis, screens red flags, excludes mimics (coeliac/UTI), manages with triggers/acute treatment and a diary, and safety-nets.'
      },
      avoid: [
        {
          dont: '"The tests are normal, so there\u2019s nothing wrong \u2014 try not to worry."',
          instead: '"Normal tests actually fit \u2014 this is abdominal migraine, a real condition diagnosed from the pattern after ruling other things out."',
          why: 'Dismissing it as "nothing" because tests are normal invalidates the family and misses the diagnosis.'
        },
        {
          dont: '(Endless re-investigation) repeating scans/bloods each episode.',
          instead: '"Once the pattern\u2019s clear and red flags are excluded, we manage it rather than keep re-scanning."',
          why: 'Repeated investigation of a clear stereotyped pattern is unhelpful and anxiety-provoking.'
        },
        {
          dont: '(No red-flag check) labelling it without screening.',
          instead: '"Any weight loss, night-time or green vomiting, blood, or pain always in one spot? Those would change things."',
          why: 'Red flags must be excluded before settling on abdominal migraine.'
        }
      ]
    }
  });

})();
