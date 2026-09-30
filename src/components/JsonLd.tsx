export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bidaya-academy.vercel.app/#website",
        "url": "https://bidaya-academy.vercel.app/",
        "name": "أكاديمية بداية لتحفيظ القرآن الكريم",
        "alternateName": [
          "أكاديمية بداية",
          "اكاديمية بداية",
          "اكاديميه بدايه",
          "أكاديمية بداية الشيخ عبدالله جلال",
          "Bidaya Academy",
          "Bidaya Quran Academy"
        ],
        "description": "أكاديمية بداية لتحفيظ القرآن الكريم وتعليم أحكام التجويد والعلوم الشرعية بإشراف الشيخ عبد الله جلال",
        "inLanguage": "ar"
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://bidaya-academy.vercel.app/#organization",
        "name": "أكاديمية بداية لتحفيظ القرآن الكريم",
        "alternateName": [
          "أكاديمية بداية",
          "اكاديمية بداية",
          "اكاديميه بدايه",
          "أكاديمية بداية الشيخ عبد الله جلال"
        ],
        "url": "https://bidaya-academy.vercel.app/",
        "logo": "https://bidaya-academy.vercel.app/bedaya.jpeg",
        "image": "https://bidaya-academy.vercel.app/bedaya.jpeg",
        "description": "أكاديمية متخصصة في تحفيظ القرآن الكريم وتدريس أحكام التجويد والعلوم الشرعية لجميع الفئات العمرية بنظام التعليم المباشر وعن بُعد بإشراف الشيخ عبد الله جلال.",
        "telephone": "+201025197043",
        "email": "info@bidaya-academy.com",
        "founder": {
          "@type": "Person",
          "name": "الشيخ عبد الله جلال",
          "jobTitle": "المشرف العام ومؤسس الأكاديمية",
          "description": "مجاز في القرآن الكريم برواية حفص عن عاصم، وخبرة أكثر من 15 عاماً في تحفيظ كتاب الله وتعليم أحكام التجويد."
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
        "alternateName": ["عبد الله جلال", "عبدالله جلال", "الشيخ عبدالله جلال"],
        "jobTitle": "معلم ومقرئ قرآن كريم",
        "worksFor": {
          "@id": "https://bidaya-academy.vercel.app/#organization"
        },
        "description": "حاصل على إجازة في القرآن الكريم برواية حفص عن عاصم، خريج كلية الشريعة والدراسات الإسلامية، مشرف ومؤسس أكاديمية بداية لتحفيظ القرآن الكريم."
      },
      {
        "@type": "Course",
        "name": "برنامج الحفظ المتقن",
        "description": "برنامج شامل لتحفيظ القرآن الكريم كاملاً أو أجزاء منه للأطفال والكبار مع مراجعة دورية ومتابعة فردية وشهادات معتمدة.",
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
              "text": "المشرف العام ومؤسس الأكاديمية هو الشيخ عبد الله جلال، الحاصل على إجازة في القرآن الكريم برواية حفص عن عاصم بخبرة تزيد عن 15 عاماً في تعليم وتخريج حفظة كتاب الله."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقبل الأكاديمية الأطفال والكبار والمبتدئين؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، توفر أكاديمية بداية مسارات مخصصة للأطفال من سن مبكرة، وللكبار، وكذلك للمبتدئين في تعلم القراءة الصحيحة من الصفر وأحكام التجويد."
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
