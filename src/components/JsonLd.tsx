export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bidaya-academy.vercel.app/#website",
        "url": "https://bidaya-academy.vercel.app/",
        "name": "أكاديمية بداية",
        "alternateName": [
          "أكاديمية بداية لتحفيظ القرآن الكريم",
          "أكاديمية الشيخ عبد الله جلال",
          "أكاديمية الشيخ عبدالله جلال",
          "اكاديمية بداية",
          "اكاديميه بدايه",
          "اكاديمية الشيخ عبد الله جلال",
          "اكاديمية الشيخ عبدالله جلال",
          "الشيخ عبد الله جلال",
          "الشيخ عبدالله جلال",
          "Bidaya Academy",
          "Bidaya Quran Academy"
        ],
        "description": "أكاديمية بداية لتحفيظ القرآن الكريم وتعليم أحكام التجويد والعلوم الشرعية بإشراف الشيخ عبد الله جلال",
        "inLanguage": "ar",
        "publisher": {
          "@id": "https://bidaya-academy.vercel.app/#organization"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://bidaya-academy.vercel.app/#organization",
        "name": "أكاديمية بداية لتحفيظ القرآن الكريم",
        "alternateName": [
          "أكاديمية بداية",
          "اكاديمية بداية",
          "اكاديميه بدايه",
          "أكاديمية الشيخ عبد الله جلال",
          "أكاديمية الشيخ عبدالله جلال",
          "اكاديمية الشيخ عبدالله جلال",
          "Bidaya Academy"
        ],
        "url": "https://bidaya-academy.vercel.app/",
        "logo": "https://bidaya-academy.vercel.app/bedaya.jpeg",
        "image": "https://bidaya-academy.vercel.app/bedaya.jpeg",
        "description": "أكاديمية متخصصة في تحفيظ القرآن الكريم وتدريس أحكام التجويد والعلوم الشرعية لجميع الفئات العمرية بنظام التعليم المباشر وعن بُعد بإشراف فضيلة الشيخ عبد الله جلال.",
        "telephone": "+201025197043",
        "email": "info@bidaya-academy.com",
        "founder": {
          "@type": "Person",
          "@id": "https://bidaya-academy.vercel.app/#sheikh-abdullah-galal",
          "name": "الشيخ عبد الله جلال",
          "alternateName": [
            "الشيخ عبدالله جلال",
            "عبد الله جلال",
            "عبدالله جلال",
            "Sheikh Abdullah Galal"
          ],
          "jobTitle": "المشرف العام ومؤسس الأكاديمية ومقرئ القرآن الكريم",
          "description": "مجاز في القرآن الكريم برواية حفص عن عاصم، وخبرة أكثر من 15 عاماً في تحفيظ كتاب الله وتعليم أحكام التجويد وتخريج الحفظة."
        },
        "sameAs": [
          "https://www.facebook.com/share/1BUbLYv1DW/",
          "https://wa.me/201025197043"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+201025197043",
          "contactType": "customer service",
          "availableLanguage": ["Arabic", "ar"]
        }
      },
      {
        "@type": "Person",
        "@id": "https://bidaya-academy.vercel.app/#sheikh-abdullah-galal",
        "name": "الشيخ عبد الله جلال",
        "alternateName": [
          "الشيخ عبدالله جلال",
          "عبد الله جلال",
          "عبدالله جلال",
          "أكاديمية الشيخ عبدالله جلال",
          "أكاديمية الشيخ عبد الله جلال"
        ],
        "jobTitle": "معلم ومقرئ قرآن كريم والمشرف العام على أكاديمية بداية",
        "worksFor": {
          "@id": "https://bidaya-academy.vercel.app/#organization"
        },
        "description": "حاصل على إجازة في القرآن الكريم برواية حفص عن عاصم بالسند المتصل، خريج كلية الشريعة والدراسات الإسلامية، مشرف ومؤسس أكاديمية بداية لتحفيظ القرآن الكريم."
      },
      {
        "@type": "Course",
        "name": "برنامج الحفظ المتقن",
        "description": "برنامج شامل لتحفيظ القرآن الكريم كاملاً أو أجزاء منه للأطفال والكبار مع مراجعة دورية ومتابعة فردية وشهادات معتمدة بإشراف الشيخ عبد الله جلال.",
        "provider": {
          "@id": "https://bidaya-academy.vercel.app/#organization"
        }
      },
      {
        "@type": "Course",
        "name": "دورة التجويد وأحكام التلاوة",
        "description": "دورة متخصصة لتعليم أحكام التجويد من مخارج الحروف وصفاتها والمدود والنون والميم الساكنة مع التطبيق العملي المباشر.",
        "provider": {
          "@id": "https://bidaya-academy.vercel.app/#organization"
        }
      },
      {
        "@type": "Course",
        "name": "الحلقات المسائية للمبتدئين وتصحيح التلاوة",
        "description": "تعليم القراءة الصحيحة من الصفر وحفظ قصار السور في مجموعات تفاعلية صغيرة.",
        "provider": {
          "@id": "https://bidaya-academy.vercel.app/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي أكاديمية بداية لتحفيظ القرآن الكريم؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "أكاديمية بداية هي صرح تعليمي رائد متخصص في تحفيظ القرآن الكريم وتعليم أحكام التجويد والعلوم الإسلامية (العقيدة، الحديث، السيرة، الأذكار) لمختلف الأعمار بطرق علمية مبسطة بإشراف الشيخ عبد الله جلال."
            }
          },
          {
            "@type": "Question",
            "name": "من هو المشرف العام على أكاديمية بداية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "المشرف العام ومؤسس الأكاديمية هو فضيلة الشيخ عبد الله جلال (الشيخ عبدالله جلال)، الحاصل على إجازة في القرآن الكريم برواية حفص عن عاصم بخبرة تزيد عن 15 عاماً في تعليم وتخريج حفظة كتاب الله."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقبل أكاديمية الشيخ عبدالله جلال الأطفال والكبار؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، توفر أكاديمية بداية بإشراف الشيخ عبد الله جلال مسارات مخصصة للأطفال من سن مبكرة، وللكبار، وكذلك للمبتدئين في تعلم القراءة الصحيحة من الصفر وأحكام التجويد."
            }
          },
          {
            "@type": "Question",
            "name": "كيف يمكن التواصل والاشتراك في أكاديمية بداية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يمكنك التواصل والتسجيل المباشر عبر رقم الهاتف أو الواتساب الرسمي 01025197043 (+201025197043) أو من خلال نموذج التسجيل على موقعنا الإلكتروني."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
