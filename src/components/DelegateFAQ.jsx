import React, { useRef, useCallback } from 'react';

const faqData = [
  {
    q: 'Who is Dr. Brooks McKenzie?',
    a: 'Former Assistant Director of Research at the TCU Institute of Child Development — a principled conservative grounded in scripture, committed to servant leadership and protecting families over insider agendas. Note: He was not always a Christian, which shapes his testimony and resolve.',
    defaultOpen: true,
  },
  {
    q: 'What qualifies him to lead the Republican Party of Texas?',
    a: 'He has exposed corruption without big donors or insider backing, supported by grassroots Texans and a statewide tour on the Magic Bus. Over two decades of frontline work with Texas families, DFPS/CPS, attorneys, and judges gives him real-world knowledge no career politician can match.',
  },
  {
    q: 'What is his record on parental rights and family integrity?',
    a: 'He treats parental rights and child protection as non-negotiable conservative duties, grounded in faith and the God-ordained responsibility to defend families.',
  },
  {
    q: 'What has he done in grassroots Republican politics?',
    a: 'He has stood shoulder-to-shoulder with delegates, fought for conservative priorities at past conventions, and in the 2025 session helped deliver SB293 and SJR27 (Prop 12). In 2024 he helped protect Rule 44 during the Wednesday night Rules Committee vote, including adding judges to the list of censurable officials.',
  },
  {
    q: 'What is his involvement with SB293, SJR27, and Rule 44?',
    a: 'He was directly engaged in SB293 and SJR27 at every phase. During the 2024 Convention he gave one of the final testimonies on Rule 44 after it appeared killed in committee — and he personally added the ability to censure judges. Rule 44 must be strengthened, streamlined, and used with intent.',
  },
  {
    q: 'What does he plan to change as RPT Chair?',
    a: "Open meetings, clean contracts, and real accountability — using the RPT's authority to hold legislators answerable to the grassroots. He will bow neither to D.C. nor to donors. The RPT panders no more.",
  },
  {
    q: 'Favorite food?',
    a: 'Anything fried with gravy.',
  },
  {
    q: 'Favorite Scripture?',
    a: '"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth!" — Psalm 46:10',
    italic: true,
  },
  {
    q: 'Favorite Quote?',
    a: '"The most terrifying force of death, comes from the hands of men who wanted to be left alone. They try, so very hard, to mind their own business and provide for themselves and those they love. They resist every impulse to fight back, knowing the forced and permanent change of life that will come from it. They know, that the moment they fight back, their lives as they have lived them, are over. The moment the men who wanted to be left alone are forced to fight back, it is a form of suicide. They are literally killing off who they used to be. Which is why, when forced to take up violence, these men who wanted to be left alone, fight with unholy vengeance against those who murdered their former lives. They fight with raw hate, and a drive that cannot be fathomed by those who are merely play-acting at politics and terror. TRUE TERROR will arrive at these people\'s door, and they will cry, scream and beg for mercy… but it will fall upon the deaf ears of the men who just wanted to be left alone."',
    attribution: '— Alexandr Solzhenitsyn',
    italic: true,
  },
  {
    q: 'Why did he step forward?',
    a: '"I never wanted to enter politics. I wanted to be left alone. I wanted the constitution to be honored. Tarrant County refused. So here I am."',
    italic: true,
  },
];

const DelegateFAQ = () => {
  const wrapRef = useRef(null);

  const handleToggle = useCallback((e) => {
    const currentItem = e.currentTarget;
    if (currentItem.open && wrapRef.current) {
      wrapRef.current.querySelectorAll('.faq-item').forEach((other) => {
        if (other !== currentItem) other.open = false;
      });
    }
  }, []);

  return (
    <section id="delegate-faq" className="section" role="region" aria-label="Delegate FAQ">
      <div className="section-header reveal">
        <div className="section-tag">Delegate FAQ</div>
        <h2 className="section-h2">Straight Answers for Texas GOP Delegates</h2>
      </div>

      <div className="reveal faq-wrap faq-accordion" ref={wrapRef}>
        {faqData.map((item, i) => (
          <details
            key={i}
            className="faq-item"
            open={item.defaultOpen || false}
            onToggle={handleToggle}
          >
            <summary>{item.q}</summary>
            <div className="faq-answer">
              <p style={{
                color: 'var(--mid-strong)',
                fontSize: '1rem',
                lineHeight: '1.8',
                fontWeight: '400',
                fontStyle: item.italic ? 'italic' : 'normal',
              }}>
                {item.a}
              </p>
              {item.attribution && (
                <p style={{
                  color: 'var(--gold)',
                  fontFamily: "'Bebas Neue',sans-serif",
                  letterSpacing: '2px',
                  fontSize: '0.8rem',
                  marginTop: '0.8rem',
                }}>
                  {item.attribution}
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default DelegateFAQ;
