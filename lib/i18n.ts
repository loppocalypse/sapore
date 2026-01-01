// Define the type for the translations object
type Translation = {
  addToCart: string;
  cart: string;
  close: string;
  confirmOrder: string;
  tableNumber: string;
  selectTable: string;
  branch: string;
  selectBranch: string;
  total: string;
  cartEmpty: string;
  startShopping: string;
  discover: string;
  error: {
    missingProductInfo: string;
    selectVariant: string;
    invalidTableNumber: string;
    selectBranch: string;
    emptyCart: string;
    orderFailed: string;
    priceMissing: string;
    noData: string;
  };
  home: {
    subtitle: string;
    description: string;
    discoverMenu: string;
    ourHeritage: string;
  };
  nav: {
    aboutUs: string;
    menu: string;
    events: string;
    contact: string;
    report: string;
    signIn: string;
    signUp: string;
    customerLine: string;
  };
  showcase: {
    descriptionTitle: string;
    highlightedTastes: string;
    categories: {
      turkishDelights: string;
      savories: string;
      boxes: string;
      baklavas: string;
      cookies: string;
      hotDrinks: string;
    };
    descriptions: {
      turkishDelights: string;
      savories: string;
      boxes: string;
      baklavas: string;
      cookies: string;
    };
  };
  faq: {
      title: string;
      subtitle: string;
      //description: string;
      searchPlaceholder: string;
      noResults: string;
      clearSearch: string;
      categoriesTitle: string;
      stillQuestions: string;
      supportDesc: string;
      contactSupport: string;
      contactUs: string;
      data: {
        id: string;
        category: string;
        questions: {
          q: string;
          a: string;
        }[];
      }[];
    };
  shops: {
    title: string;
    subtitle: string;
    seeDetails: string;
    writeToUs: string;
    writeToUsDesc: string;
    contactForm: string;
    locateTitle: string;
    seeOnMaps: string;
    tags: {
      mainBranch: string;
      touristic: string;
      takeAway: string;
      cafe: string;
      production: string;
      fresh: string;
      premium: string;
    }
  };
  aboutUs: {
    heroTitle: string;
    section1974: {
      title: string;
      description: string;
      imageAlt: string;
    };
    section1980: {
      title: string;
      description: string;
      imageAlt: string;
    };
    section1996: {
      title: string;
      description: string;
      imageAlt: string;
    };
    section2003: {
      imageAlt: string;
    };
    section2016_2020: {
      title: string;
      description: string;
      imageAlt: string;
    };
    sectionToday: {
      title: string;
      description: string;
      imageAlt: string;
    };
  };
  aboutPage: {
    hero: {
      badge: string;
      title1: string;
      title2: string;
    };
    manifesto: {
      title: string;
      subtitle: string;
      quote: string;
      desc1: string;
      desc2: string;
    };
    expansion: {
      title: string;
      desc: string;
    };
    values: {
      v2008: { title: string; desc: string };
      v2016: { title: string; desc: string };
      v2025: { title: string; desc: string };
    };
    final: {
      title: string;
      subtitle: string;
      footer: string;
    };
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    instagram: string;
    tiktok: string;
    address: {
      ialbuzi9: string;
      koteApkhazis31: string;
      davitAghmashenebeli95: string;
      davitAghmashenebeli134: string;
    };
  };
  report: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      branch: string;
      issue: string;
      selectBranch: string;
      placeholderName: string;
      placeholderEmail: string;
      placeholderIssue: string;
      submit: string;
      submitting: string;
    };
    messages: {
      success: string;
      error: string;
    };
  };
};

export const translations: Record<string, Translation> = {
  en: {
    addToCart: 'Add To Cart',
    cart: 'Cart',
    close: 'Close',
    confirmOrder: 'Confirm Order',
    tableNumber: 'Table Number',
    selectTable: 'Select Table',
    branch: 'Branch',
    selectBranch: 'Select Branch',
    total: 'Total',
    cartEmpty: 'Your cart is empty',
    startShopping: 'Start Shopping',
    discover: 'Discover',
    error: {
      missingProductInfo: 'Missing product information',
      selectVariant: 'Please select a variant',
      invalidTableNumber: 'Please enter a valid table number',
      selectBranch: 'Please select a branch',
      emptyCart: 'Your cart is empty',
      orderFailed: 'Order failed. Please try again.',
      priceMissing: 'Price information is missing',
      noData: 'No data found',
    },
    home: {
      subtitle: "Heritage of Traditional Flavors",
      description: '"Since 2008, we preserve a story in every recipe and a heritage in every bite."',
      discoverMenu: "Discover The Menu",
      ourHeritage: "Our Heritage",
    },
    nav: {
      aboutUs: 'About Us',
      menu: 'Menu',
      events: 'Events',
      contact: 'Contact',
      report: 'Report',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      customerLine: 'Customer Line',
    },
    showcase: {
      descriptionTitle: 'Description',
      highlightedTastes: 'Highlighted Tastes',
      categories: {
        turkishDelights: 'Turkish Delights',
        savories: 'Savories',
        boxes: 'Boxes',
        baklavas: 'Baklavas',
        cookies: 'Cookies',
        hotDrinks: 'Hot Drinks',
      },
      descriptions: {
        turkishDelights: 'Classic Turkish Sweets',
        savories: 'Nostalgic Childhood Tastes',
        boxes: 'Sapore Classics',
        baklavas: 'For Those Who Love Sweetness',
        cookies: 'Home Made Classics',
      }
    },
    faq: {
      title: "Frequently Asked",
      subtitle: "Questions",
      searchPlaceholder: "Search for a topic...",
      noResults: 'No results found for "{query}"',
      clearSearch: "Clear Search",
      categoriesTitle: "Categories",
      stillQuestions: "Still have questions?",
      supportDesc: "Our guest experience team is here to assist you with any inquiries regarding our products or heritage.",
      contactSupport: "Contact Support",
      contactUs: '',
      data: [
        {
          id: "craft",
          category: "Craft & Ingredients",
          questions: [
            { q: "What is the origin of your ingredients?", a: "At Sapore, we remain faithful to our 'purity first' principle since 1974. Our butter comes from local dairies, and our chocolate is authentic 72% Ecuadorian cocoa." },
            { q: "Do you offer gluten-free or vegan options?", a: "Yes, we offer fresh artisan gluten-free breads and vegan dessert options on specific days at all our branches." }
          ]
        },
        {
          id: "orders",
          category: "Orders & Delivery",
          questions: [
            { q: "How far in advance should I order custom cakes?", a: "For custom designs and boutique cakes, we kindly ask you to contact us at least 3 business days in advance." },
            { q: "Do you provide delivery services within Tbilisi?", a: "Yes, you can place orders via Wolt and Glovo from all our branches." }
          ]
        },
        {
          id: "heritage",
          category: "Heritage & Corporate",
          questions: [
            { q: "What does the name 'Café Sapore' mean?", a: "Sapore means 'Flavor' and 'Taste' in Italian. It symbolizes the modern reinterpretation of the foundations laid in 1974." },
            { q: "Do you offer franchising opportunities?", a: "Café Sapore is managed as a family business. We grow through our own branches to preserve our quality." }
          ]
        }
      ]
    },
    shops: {
      title: 'Our Shops',
      subtitle: 'Visit Us',
      seeDetails: 'See Details →',
      writeToUs: 'Write To Us',
      writeToUsDesc: 'Your opinions and suggestions about our branches are valuable to us. Would you like to share your experience?',
      contactForm: 'Contact Form',
      locateTitle: '',
      seeOnMaps: 'See On Maps',
      tags: {
        mainBranch: 'Main Branch',
        touristic: 'Touristic Branch',
        takeAway: 'Take Away',
        cafe: 'Cafe & Patisserie',
        production: 'Production',
        fresh: 'Fresh',
        premium: 'Premium',
      }
    },
    aboutUs: {
      heroTitle: 'Our Heritage',
      section1974: {
        title: 'The Beginning',
        description: 'Mahir Benli started his career in 1974 in his small boutique patisserie. With the mastery he brought from the Black Sea, he quickly became a favorite of the neighborhood.',
        imageAlt: 'Mahir Benli at the start of his journey',
      },
      section1980: {
        title: 'Growing Legacy',
        description: 'By the 1980s, Sapore had become synonymous with traditional Turkish tastes, expanding its menu while keeping artisanal quality.',
        imageAlt: 'Sapore shop in the 80s',
      },
      section1996: {
        title: 'New Horizons',
        description: 'Our heritage was passed down to the new generation, blending traditional techniques with modern patisserie excellence.',
        imageAlt: 'Modernization of Sapore',
      },
      section2003: {
        imageAlt: 'Expanding the brand',
      },
      section2016_2020: {
        title: 'Tbilisi Chapter',
        description: 'In 2016, we brought our centuries-old recipes to the heart of Tbilisi, opening our doors to Georgian hospitality.',
        imageAlt: 'Opening in Tbilisi',
      },
      sectionToday: {
        title: 'Sapore Today',
        description: 'Today, Sapore continues to serve the same passion across multiple branches, bridging cultures through taste.',
        imageAlt: 'Sapore today',
      },
    },
    aboutPage: {
      hero: { badge: "FIFTY YEARS OF CRAFT", title1: "Pure", title2: "Heritage." },
      manifesto: {
        title: "Mahir Benli",
        subtitle: "and the Journey of Sapore.",
        quote: "His capital was the livestock in the village, his power an unshakeable discipline.",
        desc1: "In March 1974, Mahir Benli laid the foundations of Café Sapore with a small shop in Istanbul. This labor evolved into mastery in the art of pastry and baklava by 1980.",
        desc2: "With the involvement of his sons, Mustafa and Ömer, it became a family tradition. Half a century of experience has become a badge of honor, combining purity with nobility."
      },
      expansion: {
        title: "The Taste of Istanbul in Tbilisi",
        desc: "A new chapter that began in 2008 transformed Café Sapore into one of Tbilisi's most exclusive destinations."
      },
      values: {
        v2008: { title: "Global Vision", desc: "The first branch opened at Marjanishvili, bringing the legacy to Georgia." },
        v2016: { title: "Production Power", desc: "The artisan workshop established in Isani took Sapore's quality to the peak." },
        v2025: { title: "Modern Growth", desc: "Today, traditions meet modern approaches at our four main branches." }
      },
      final: { title: "Traditional Mastery,", subtitle: "Modern Touch.", footer: "Istanbul • Tbilisi / Marjanishvili • Isani • Leselidze • 300 Aragveli" }
    },
    contact: {
      title: 'Contact Us',
      description: 'We would love to hear from you! Whether it is a question, feedback, a table reservation, or just to say hello!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: '9 Ialbuzi St',
        koteApkhazis31: '31 Kote Apkhazi St',
        davitAghmashenebeli95: '95 Davit Aghmashenebeli Ave',
        davitAghmashenebeli134: '134 Davit Aghmashenebeli Ave',
      },
    },
    report: {
      title: 'Report a problem with Cafe Sapore',
      description: 'We value your feedback. Let us know about any issues so we can improve your experience!',
      form: {
        name: 'Name',
        email: 'Email',
        branch: 'Branch',
        issue: 'Issue',
        selectBranch: 'Select a branch',
        placeholderName: 'Your name',
        placeholderEmail: 'Your email',
        placeholderIssue: 'Describe the issue',
        submit: 'Submit Report',
        submitting: 'Submitting...',
      },
      messages: {
        success: 'Report submitted successfully!',
        error: 'Failed to submit report. Please try again.',
      },
    },
  },


  tr: {
    addToCart: 'Sepete Ekle',
    cart: 'Sepet',
    close: 'Kapat',
    confirmOrder: 'Siparişi Onayla',
    tableNumber: 'Masa Numarası',
    selectTable: 'Masa Seç',
    branch: 'Şube',
    selectBranch: 'Şube Seç',
    total: 'Toplam',
    cartEmpty: 'Sepetiniz boş',
    startShopping: 'Alışverişe Başla',
    discover: 'Keşfet',
    error: {
      missingProductInfo: 'Ürün bilgisi eksik',
      selectVariant: 'Lütfen bir seçenek seçin',
      invalidTableNumber: 'Geçerli bir masa numarası girin',
      selectBranch: 'Lütfen bir şube seçin',
      emptyCart: 'Sepetiniz boş',
      orderFailed: 'Sipariş başarısız. Tekrar deneyin.',
      priceMissing: 'Fiyat bilgisi eksik',
      noData: 'Veri bulunamadı',
    },
    home: {
      subtitle: "Geleneksel Tatların Mirası",
      description: '"2008\'den bu yana, her tarifte bir hikaye, her lokmada bir miras saklıyoruz."',
      discoverMenu: "Menüyü Keşfet",
      ourHeritage: "Mirasımız",
    },
    nav: {
      aboutUs: 'Hakkımızda',
      menu: 'Menü',
      events: 'Etkinlikler',
      contact: 'İletişim',
      report: 'Raporla',
      signIn: 'Giriş Yap',
      signUp: 'Kayıt Ol',
      customerLine: 'Müşteri Hattı',
    },
    showcase: {
      descriptionTitle: 'Açıklama',
      highlightedTastes: 'Öne Çıkan Lezzetler',
      categories: {
        turkishDelights: 'Lokumlar',
        savories: 'Tuzlular',
        boxes: 'Kutular',
        baklavas: 'Baklavalar',
        cookies: 'Kurabiyeler',
        hotDrinks: 'Sıcak İçecekler',
      },
      descriptions: {
        turkishDelights: 'Klasik Türk Lezzetleri',
        savories: 'Nostaljik Çocukluk Tadı',
        boxes: 'Sapore Klasikleri',
        baklavas: 'Tatlı Sevenler İçin',
        cookies: 'Ev Yapımı Klasikler',
      }
    },
    faq: {
      title: "Sıkça Sorulan",
      subtitle: "Sorular",
      searchPlaceholder: "Bir konu arayın...",
      noResults: '"{query}" için sonuç bulunamadı',
      clearSearch: "Aramayı Temizle",
      categoriesTitle: "Kategoriler",
      stillQuestions: "Başka sorunuz mu var?",
      supportDesc: "Misafir deneyimi ekibimiz, ürünlerimiz veya mirasımızla ilgili her türlü sorunuzda size yardımcı olmaktan mutluluk duyar.",
      contactSupport: "Destekle İletişime Geçin",
      contactUs: '',
      data: [
        {
          id: "craft",
          category: "Zanaat ve İçerikler",
          questions: [
            { q: "Malzemelerinizin kökeni nedir?", a: "Sapore'de 1974'ten beri 'önce saflık' ilkemize sadık kalıyoruz. Tereyağımız yerel mandıralardan geliyor ve çikolatamız %72 gerçek Ekvador kakaosudur." },
            { q: "Glutensiz veya vegan seçenekler sunuyor musunuz?", a: "Evet, tüm şubelerimizde belirli günlerde taze zanaatkar glutensiz ekmekler ve vegan tatlı seçenekleri sunuyoruz." }
          ]
        },
        {
          id: "orders",
          category: "Sipariş ve Teslimat",
          questions: [
            { q: "Özel tasarım pastalar için ne kadar önceden sipariş vermeliyim?", a: "Özel tasarımlar ve butik pastalar için lütfen en az 3 iş günü öncesinden bizimle iletişime geçin." },
            { q: "Tiflis içinde teslimat hizmetiniz var mı?", a: "Evet, tüm şubelerimizden Wolt ve Glovo aracılığıyla sipariş verebilirsiniz." }
          ]
        },
        {
          id: "heritage",
          category: "Miras ve Kurumsal",
          questions: [
            { q: "'Café Sapore' isminin anlamı nedir?", a: "Sapore, İtalyanca'da 'Lezzet' ve 'Tat' anlamına gelir. 1974 yılında atılan temellerin modern bir yorumunu simgeler." },
            { q: "Franchise fırsatları sunuyor musunuz?", a: "Café Sapore bir aile işletmesi olarak yönetilmektedir. Kalitemizi korumak adına sadece kendi şubelerimizle büyüyoruz." }
          ]
        }
      ]
    },
    shops: {
      title: 'Şubelerimiz',
      subtitle: 'Bizi Ziyaret Edin',
      seeDetails: 'Detayları Gör →',
      writeToUs: 'Bize Yazın',
      writeToUsDesc: 'Şubelerimizle ilgili görüş ve önerileriniz bizim için kıymetlidir. Deneyiminizi paylaşmak ister misiniz?',
      contactForm: 'İletişim Formu',
      locateTitle: '',
      seeOnMaps: 'Haritalarda Gör',
      tags: {
        mainBranch: 'Merkez Şube',
        touristic: 'Turistik Şube',
        takeAway: 'Gel Al',
        cafe: 'Kafe & Pastane',
        production: 'Üretim',
        fresh: 'Taze',
        premium: 'Premium',
      }
    },
    aboutUs: {
      heroTitle: 'Mirasımız',
      section1974: {
        title: 'Başlangıç',
        description: 'Mahir Benli kariyerine 1974 yılında küçük butik pastanesinde başladı. Karadeniz\'den getirdiği ustalıkla kısa sürede mahallenin favorisi oldu.',
        imageAlt: 'Mahir Benli yolculuğun başında',
      },
      section1980: {
        title: 'Büyüyen Miras',
        description: '1980\'lere gelindiğinde Sapore, geleneksel Türk tatlarıyla eşanlamlı hale gelmiş, zanaatkar kalitesini koruyarak menüsünü genişletmişti.',
        imageAlt: '80\'lerde Sapore dükkanı',
      },
      section1996: {
        title: 'Yeni Ufuklar',
        description: 'Mirasımız, geleneksel teknikleri modern pastane mükemmelliğiyle harmanlayan yeni nesle aktarıldı.',
        imageAlt: 'Sapore\'nin modernleşmesi',
      },
      section2003: {
        imageAlt: 'Markanın büyümesi',
      },
      section2016_2020: {
        title: 'Tiflis Bölümü',
        description: '2016 yılında, asırlık tariflerimizi Tiflis\'in kalbine taşıyarak kapılarımızı Gürcü misafirperverliğine açtık.',
        imageAlt: 'Tiflis\'te açılış',
      },
      sectionToday: {
        title: 'Bugün Sapore',
        description: 'Bugün Sapore, birden fazla şubede aynı tutkuyla hizmet vermeye devam ediyor ve kültürleri lezzetle birleştiriyor.',
        imageAlt: 'Bugün Sapore',
      },
    },
    aboutPage: {
      hero: { badge: "BİR ZANAATIN ELLİNCİ YILI", title1: "Saf", title2: "Miras." },
      manifesto: {
        title: "Mahir Benli",
        subtitle: "ve Sapore'nin Yolculuğu.",
        quote: "Sermayesi köydeki mandaları, gücü ise sarsılmaz zanaat disipliniydi.",
        desc1: "1974 Mart'ında Mahir Benli, İstanbul'da kiraladığı küçük bir dükkânla temelleri attı. Bu emek, 1980'de pastacılık ve baklava sanatında ustalığa evrildi.",
        desc2: "Oğulları Mustafa ve Ömer Benli’nin dahil olmasıyla bir aile geleneğine dönüştü. Yarım asırlık bu süreç, unun saflığını şekerin asaletiyle birleştirdi."
      },
      expansion: {
        title: "İstanbul'un Tadı Tiflis Semalarında",
        desc: "2008 yılında başlayan bu yeni sayfa, Café Sapore'yi Tiflis'in en seçkin duraklarından biri haline getirdi."
      },
      values: {
        v2008: { title: "Küresel Vizyon", desc: "Marjanishvili'de açılan ilk şube ile lezzet mirası Gürcistan’a taşındı." },
        v2016: { title: "Üretim Gücü", desc: "Isani’de kurulan artizan imalathane, kalite standartlarını zirveye taşıdı." },
        v2025: { title: "Modern Büyüme", desc: "Bugün geleneksel yaklaşımlar modern dokunuşlarla dört şubemizde buluşuyor." }
      },
      final: { title: "Geleneksel Ustalık,", subtitle: "Modern Dokunuş.", footer: "İstanbul • Tiflis / Marjanishvili • Isani • Leselidze • 300 Aragveli" }
    },
    contact: {
      title: 'Bize Ulaşın',
      description: 'Sizden haber almayı çok isteriz! Bir soru, geri bildirim, masa rezervasyonu veya sadece bir merhaba için!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: '9 Ialbuzi Sk.',
        koteApkhazis31: '31 Kote Apkhazi Sk.',
        davitAghmashenebeli95: '95 Davit Aghmashenebeli Blv.',
        davitAghmashenebeli134: '134 Davit Aghmashenebeli Blv.',
      },
    },
    report: {
      title: 'Cafe Sapore ile ilgili bir sorun bildir',
      description: 'Geri bildirimlerinize değer veriyoruz. Deneyiminizi iyileştirebilmemiz için herhangi bir sorunu bize bildirin!',
      form: {
        name: 'İsim',
        email: 'E-posta',
        branch: 'Şube',
        issue: 'Sorun',
        selectBranch: 'Bir şube seçin',
        placeholderName: 'İsminiz',
        placeholderEmail: 'E-postanız',
        placeholderIssue: 'Sorunu açıklayın',
        submit: 'Raporu Gönder',
        submitting: 'Gönderiliyor...',
      },
      messages: {
        success: 'Rapor başarıyla gönderildi!',
        error: 'Rapor gönderilemedi. Lütfen tekrar deneyin.',
      },
    },
    
  },


  ka: {
    addToCart: 'კალათაში დამატება',
    cart: 'კალათა',
    close: 'დახურვა',
    confirmOrder: 'შეკვეთის დადასტურება',
    tableNumber: 'მაგიდის ნომერი',
    selectTable: 'აირჩიეთ მაგიდა',
    branch: 'ფილიალი',
    selectBranch: 'აირჩიეთ ფილიალი',
    total: 'სულ',
    cartEmpty: 'კალათა ცარიელია',
    startShopping: 'შოპინგის დაწყება',
    discover: 'აღმოაჩინე',
    error: {
      missingProductInfo: 'ინფორმაცია პროდუქტზე არასრულია',
      selectVariant: 'გთხოვთ აირჩიოთ ვარიანტი',
      invalidTableNumber: 'შეიყვანეთ მაგიდის სწორი ნომერი',
      selectBranch: 'გთხოვთ აირჩიოთ ფილიალი',
      emptyCart: 'თქვენი კალათა ცარიელია',
      orderFailed: 'შეკვეთა ვერ მოხერხდა. სცადეთ ხელახლა.',
      priceMissing: 'ფასის ინფორმაცია აკლია',
      noData: 'მონაცემები ვერ მოიძებნა',
    },
    home: {
      subtitle: "ტრადიციული გემოვნების მემკვიდრეობა",
      description: '"2008 წლიდან ჩვენ ვინახავთ ისტორიას ყველა რეცეპტში და მემკვიდრეობას ყოველ ლუკმაში."',
      discoverMenu: "მენიუს აღმოჩენა",
      ourHeritage: "ჩვენი მემკვიდრეობა",
    },
    nav: {
      aboutUs: 'ჩვენს შესახებ',
      menu: 'მენიუ',
      events: 'ღონისძიებები',
      contact: 'კონტაქტი',
      report: 'რეპორტი',
      signIn: 'შესვლა',
      signUp: 'რეგისტრაცია',
      customerLine: 'მომხმარებელთა ხაზი',
    },
    showcase: {
      descriptionTitle: 'აღწერა',
      highlightedTastes: 'გამორჩეული გემოები',
      categories: {
        turkishDelights: 'თურქული ტკბილეული',
        savories: 'მარილიანი',
        boxes: 'ყუთები',
        baklavas: 'ფახლავა',
        cookies: 'ორცხობილა',
        hotDrinks: 'ცხელი სასმელები',
      },
      descriptions: {
        turkishDelights: 'კლასიკური თურქული ტკბილეული',
        savories: 'ბავშვობის ნოსტალგიური გემოები',
        boxes: 'საპორეს კლასიკა',
        baklavas: 'ტკბილეულის მოყვარულთათვის',
        cookies: 'სახლში მომზადებული კლასიკა',
      }
    },
    faq: {
      title: "ხშირად დასმული",
      subtitle: "კითხვები",
      searchPlaceholder: "მოძებნეთ თემა...",
      noResults: 'შედეგი ვერ მოიძებნა: "{query}"',
      clearSearch: "ძებნის გასუფთავება",
      categoriesTitle: "კატეგორიები",
      stillQuestions: "გაქვთ დამატებითი კითხვები?",
      supportDesc: "ჩვენი სტუმრების გამოცდილების გუნდი მზად არის დაგეხმაროთ ნებისმიერ საკითხში.",
      contactSupport: "დაუკავშირდით მხარდაჭერას",
      contactUs: '',
      data: [
        {
          id: "craft",
          category: "ხელოსნობა და ინგრედიენტები",
          questions: [
            { q: "რა არის თქვენი ინგრედიენტების წარმომავლობა?", a: "Sapore-ში ჩვენ 1974 წლიდან ვინარჩუნებთ 'სიწმინდის' პრინციპს. კარაქი ადგილობრივი ფერმებიდანაა, შოკოლადი კი 72%-იანი ეკვადორული კაკაო." },
            { q: "გაქვთ გლუტენის გარეშე ან ვეგანური პროდუქტები?", a: "დიახ, ყველა ფილიალში გვაქვს ხელოსნური უგლუტენო პური და ვეგანური დესერტები." }
          ]
        },
        {
          id: "orders",
          category: "შეკვეთები და მიწოდება",
          questions: [
            { q: "რამდენი ხნით ადრე უნდა შევუკვეთო ტორტი?", a: "ინდივიდუალური დიზაინისთვის გთხოვთ დაგვიკავშირდეთ მინიმუმ 3 სამუშაო დღით ადრე." },
            { q: "გაქვთ მიტანის სერვისი თბილისში?", a: "დიახ, შეგიძლიათ შეუკვეთოთ Wolt-ისა და Glovo-ს მეშვეობით." }
          ]
        },
        {
          id: "heritage",
          category: "მემკვიდრეობა და კორპორატიული",
          questions: [
            { q: "რას ნიშნავს სახელი 'Café Sapore'?", a: "'Sapore' იტალიურად ნიშნავს 'გემოს'. ის სიმბოლოა 1974 წელს ჩაყრილი საფუძვლების თანამედროვე ინტერპრეტაციის." },
            { q: "გაქვთ ფრანშიზის შესაძლებლობა?", a: "Café Sapore საოჯახო ბიზნესია. ჩვენ ვვითარდებით საკუთარი ფილიალებით ხარისხის შესანარჩუნებლად." }
          ]
        }
      ]
    },
    shops: {
      title: 'ჩვენი მაღაზიები',
      subtitle: 'გვეწვიეთ',
      seeDetails: 'დეტალების ნახვა →',
      writeToUs: 'მოგვწერეთ',
      writeToUsDesc: 'თქვენი აზრი ჩვენი ფილიალების შესახებ ჩვენთვის მნიშვნელოვანია. გსურთ გაგვიზიაროთ თქვენი გამოცდილება?',
      contactForm: 'საკონტაქტო ფორმა',
      locateTitle: '',
      seeOnMaps: 'რუკაზე ნახვა',
      tags: {
        mainBranch: 'მთავარი ფილიალი',
        touristic: 'ტურისტული ფილიალი',
        takeAway: 'წაიღე',
        cafe: 'კაფე-კონდიტერია',
        production: 'წარმოება',
        fresh: 'ახალი',
        premium: 'პრემიუმი',
      }
    },
    aboutUs: {
      heroTitle: 'ჩვენი მემკვიდრეობა',
      section1974: {
        title: 'დასაწყისი',
        description: 'მაჰირ ბენლიმ კარიერა 1974 წელს თავის პატარა ბუტიკ-საკონდიტროში დაიწყო. შავი ზღვისპირეთიდან ჩამოტანილი ოსტატობით მან მალევე მოიპოვა აღიარება.',
        imageAlt: 'მაჰირ ბენლი მოგზაურობის დასაწყისში',
      },
      section1980: {
        title: 'მზარდი მემკვიდრეობა',
        description: '1980-იანი წლებისთვის Sapore ტრადიციული თურქული გემოების სინონიმად იქცა, ინარჩუნებდა ხარისხს და აფართოებდა მენიუს.',
        imageAlt: 'Sapore-ს მაღაზია 80-იან წლებში',
      },
      section1996: {
        title: 'ახალი ჰორიზონტები',
        description: 'ჩვენი მემკვიდრეობა გადაეცა ახალ თაობას, რომელიც ტრადიციულ ტექნიკას თანამედროვე საკონდიტრო ხელოვნებასთან აერთიანებს.',
        imageAlt: 'Sapore-ს მოდერნიზაცია',
      },
      section2003: {
        imageAlt: 'ბრენდის გაფართოება',
      },
      section2016_2020: {
        title: 'თბილისის თავი',
        description: '2016 წელს ჩვენი მრავალწლიანი რეცეპტები თბილისის გულში ჩამოვიტანეთ და ქართულ სტუმართმოყვარეობას შევუერთდით.',
        imageAlt: 'გახსნა თბილისში',
      },
      sectionToday: {
        title: 'Sapore დღეს',
        description: 'დღეს Sapore აგრძელებს მუშაობას იმავე ვნებით რამდენიმე ფილიალში და აერთიანებს კულტურებს გემოვნებით.',
        imageAlt: 'Sapore დღეს',
      },
    },
    aboutPage: {
      hero: { badge: "ოსტატობის ორმოცდაათი წელი", title1: "სუფთა", title2: "მემკვიდრეობა." },
      manifesto: {
        title: "მაჰირ ბენლი",
        subtitle: "და Sapore-ს მოგზაურობა.",
        quote: "მისი კაპიტალი სოფლის მეურნეობა იყო, ძალა კი ურყევი დისციპლინა.",
        desc1: "1974 წლის მარტში მაჰირ ბენლიმ საფუძველი ჩაუყარა Café Sapore-ს სტამბოლში. ეს შრომა 1980 წლისთვის საკონდიტრო ხელოვნების ოსტატობად იქცა.",
        desc2: "მისი ვაჟების ჩართულობით, ეს იქცა საოჯახო ტრადიციად, რომელიც აერთიანებს ფქვილის სიწმინდეს და შაქრის კეთილშობილებას."
      },
      expansion: {
        title: "სტამბოლის გემო თბილისის ცაზე",
        desc: "2008 წელს დაწყებულმა ახალმა ფურცელმა Café Sapore თბილისის ერთ-ერთ გამორჩეულ ადგილად აქცია."
      },
      values: {
        v2008: { title: "გლობალური ხედვა", desc: "პირველი ფილიალი გაიხსნა მარჯანიშვილზე, რამაც ბენლების ოჯახის მემკვიდრეობა საქართველოში შემოიტანა." },
        v2016: { title: "წარმოების სიმძლავრე", desc: "ისანში დაარსებულმა არტიზანულმა საამქრომ Sapore-ს ხარისხი პიკზე აიყვანა." },
        v2025: { title: "თანამედროვე ზრდა", desc: "დღეს ტრადიციები და თანამედროვე მიდგომები ჩვენს ოთხ ფილიალში ხვდება ერთმანეთს." }
      },
      final: { title: "ტრადიციული ოსტატობა,", subtitle: "თანამედროვე შეხება.", footer: "სტამბოლი • თბილისი / მარჯანიშვილი • ისანი • ლესელიძე • 300 არაგველი" }
    },
    contact: {
      title: 'დაგვიკავშირდით',
      description: 'ჩვენ დიდი სიამოვნებით მოგისმენთ! კითხვისთვის, გამოხმაურებისთვის, მაგიდის დასაჯავშნად ან უბრალოდ მოსასალმებლად!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'იალბუზის ქ. 9',
        koteApkhazis31: 'კოტე აფხაზის ქ. 31',
        davitAghmashenebeli95: 'დავით აღმაშენებლის გამზ. 95',
        davitAghmashenebeli134: 'დავით აღმაშენებლის გამზ. 134',
      },
    },
    report: {
      title: 'შეატყობინეთ პრობლემის შესახებ Cafe Sapore-ს',
      description: 'ჩვენ ვაფასებთ თქვენს გამოხმაურებას. შეგვატყობინეთ ნებისმიერი ხარვეზის შესახებ, რათა გავაუმჯობესოთ თქვენი გამოცდილება!',
      form: {
        name: 'სახელი',
        email: 'ელ-ფოსტა',
        branch: 'ფილიალი',
        issue: 'პრობლემა',
        selectBranch: 'აირჩიეთ ფილიალი',
        placeholderName: 'თქვენი სახელი',
        placeholderEmail: 'თქვენი ელ-ფოსტა',
        placeholderIssue: 'აღწერეთ პრობლემა',
        submit: 'რეპორტის გაგზავნა',
        submitting: 'იგზავნება...',
      },
      messages: {
        success: 'რეპორტი წარმატებით გაიგზავნა!',
        error: 'რეპორტის გაგზავნა ვერ მოხერხდა. სცადეთ ხელახლა.',
      },
    },
  },


  ru: {
    addToCart: 'В корзину',
    cart: 'Корзина',
    close: 'Закрыть',
    confirmOrder: 'Подтвердить заказ',
    tableNumber: 'Номер стола',
    selectTable: 'Выбрать стол',
    branch: 'Филиал',
    selectBranch: 'Выбрать филиал',
    total: 'Итого',
    cartEmpty: 'Ваша корзина пуста',
    startShopping: 'Начать покупки',
    discover: 'Узнать больше',
    error: {
      missingProductInfo: 'Отсутствует информация о продукте',
      selectVariant: 'Пожалуйста, выберите вариант',
      invalidTableNumber: 'Введите корректный номер стола',
      selectBranch: 'Пожалуйста, выберите филиал',
      emptyCart: 'Ваша корзина пуста',
      orderFailed: 'Ошибка заказа. Попробуйте еще раз.',
      priceMissing: 'Информация о цене отсутствует',
      noData: 'Данные не найдены',
    },
    home: {
      subtitle: "Наследие традиционных вкусов",
      description: '"С 2008 года мы сохраняем историю в каждом рецепте и наследие в каждом кусочке."',
      discoverMenu: "Открыть меню",
      ourHeritage: "Наше наследие",
    },
    nav: {
      aboutUs: 'О нас',
      menu: 'Меню',
      events: 'События',
      contact: 'Контакт',
      report: 'Отчет',
      signIn: 'Войти',
      signUp: 'Регистрация',
      customerLine: 'Клиентская линия',
    },
    showcase: {
      descriptionTitle: 'Описание',
      highlightedTastes: 'Лучшие вкусы',
      categories: {
        turkishDelights: 'Лукум',
        savories: 'Закуски',
        boxes: 'Наборы',
        baklavas: 'Паклава',
        cookies: 'Печенье',
        hotDrinks: 'Горячие напитки',
      },
      descriptions: {
        turkishDelights: 'Классические турецкие сладости',
        savories: 'Ностальгические вкусы детства',
        boxes: 'Классика Sapore',
        baklavas: 'Для любителей сладкого',
        cookies: 'Домашняя классика',
      }
    },
    faq: {
      title: "Часто задаваемые",
      subtitle: "Вопросы",
      searchPlaceholder: "Поиск по теме...",
      noResults: 'По запросу "{query}" ничего не найдено',
      clearSearch: "Очистить поиск",
      categoriesTitle: "Категории",
      stillQuestions: "Остались вопросы?",
      supportDesc: "Наша команда по работе с гостями готова помочь вам с любыми вопросами о наших продуктах или наследии.",
      contactSupport: "Связаться с поддержкой",
      contactUs: '',
      data: [
        {
          id: "craft",
          category: "Мастерство и Ингредиенты",
          questions: [
            { q: "Каково происхождение ваших ингредиентов?", a: "В Sapore мы остаемся верны принципу «чистота прежде всего» с 1974 года. Наше масло поставляется с местных ферм, а наш шоколад — это настоящий 72% эквадорский какао." },
            { q: "Предлагаете ли вы безглютеновые или веганские варианты?", a: "Да, во всех наших филиалах в определенные дни мы предлагаем свежий ремесленный безглютеновый хлеб и веганские десерты." }
          ]
        },
        {
          id: "orders",
          category: "Заказы и Доставка",
          questions: [
            { q: "За какое время нужно заказывать индивидуальные торты?", a: "Для индивидуального дизайна и бутик-тортов мы просим вас связаться с нами как минимум за 3 рабочих дня." },
            { q: "Осуществляете ли вы доставку по Тбилиси?", a: "Да, вы можете оформить заказ через Wolt и Glovo из всех наших филиалов." }
          ]
        },
        {
          id: "heritage",
          category: "Наследие и Корпоративная этика",
          questions: [
            { q: "Что означает название «Café Sapore»?", a: "Sapore в переводе с итальянского означает «Вкус» или «Аромат». Оно символизирует современную интерпретацию основ, заложенных в 1974 году." },
            { q: "Предлагаете ли вы возможности франчайзинга?", a: "Café Sapore управляется как семейный бизнес. Мы растем только через собственные филиалы, чтобы сохранить наше качество." }
          ]
        }
      ]
    },
    shops: {
      title: 'Наши магазины',
      subtitle: 'Посетите нас',
      seeDetails: 'Подробнее →',
      writeToUs: 'Напишите нам',
      writeToUsDesc: 'Ваше мнение о наших филиалах важно для нас. Хотите поделиться своим опытом?',
      contactForm: 'Контактная форма',
      locateTitle: '',
      seeOnMaps: 'Посмотреть на картах',
      tags: {
        mainBranch: 'Главный филиал',
        touristic: 'Туристический филиал',
        takeAway: 'С собой',
        cafe: 'Кафе и кондитерская',
        production: 'Производство',
        fresh: 'Свежесть',
        premium: 'Премиум',
      }
    },
    aboutUs: {
      heroTitle: 'Наше наследие',
      section1974: {
        title: 'Начало',
        description: 'Махир Бенли начал свою карьеру в 1974 году в своей небольшой бутик-кондитерской. Благодаря мастерству, привезенному из Черноморского региона, он быстро стал любимцем района.',
        imageAlt: 'Махир Бенли в начале пути',
      },
      section1980: {
        title: 'Растущее наследие',
        description: 'К 1980-м годам Sapore стал синонимом традиционных турецких вкусов, расширяя меню при сохранении ремесленного качества.',
        imageAlt: 'Магазин Sapore в 80-х',
      },
      section1996: {
        title: 'Новые горизонты',
        description: 'Наше наследие было передано новому поколению, сочетающему традиционные методы с современным кондитерским совершенством.',
        imageAlt: 'Модернизация Sapore',
      },
      section2003: {
        imageAlt: 'Развитие бренда',
      },
      section2016_2020: {
        title: 'Глава в Тбилиси',
        description: 'В 2016 году мы привезли наши многовековые рецепты в сердце Тбилиси, открыв двери грузинскому гостеприимству.',
        imageAlt: 'Открытие в Тбилиси',
      },
      sectionToday: {
        title: 'Sapore сегодня',
        description: 'Сегодня Sapore продолжает работать с той же страстью в нескольких филиалах, объединяя культуры через вкус.',
        imageAlt: 'Sapore сегодня',
      },
    },
    aboutPage: {
      hero: { badge: "ПЯТЬДЕСЯТ ЛЕТ МАСТЕРСТВА", title1: "Чистое", title2: "Наследие." },
      manifesto: {
        title: "Махир Бенли",
        subtitle: "и путь Sapore.",
        quote: "Его капиталом было сельское хозяйство, а силой — непоколебимая дисциплина.",
        desc1: "В марте 1974 года Махир Бенли заложил основы Café Sapore в Стамбуле. К 1980 году этот труд превратился в истинное мастерство кондитерского искусства.",
        desc2: "С участием его сыновей это стало семейной традицией, объединяющей чистоту муки и благородство сахара на протяжении полувека."
      },
      expansion: {
        title: "Вкус Стамбула в небе Тбилиси",
        desc: "Новая глава, начатая в 2008 году, превратила Café Sapore в одно из самых эксклюзивных мест Тбилиси."
      },
      values: {
        v2008: { title: "Глобальное видение", desc: "Открытие первого филиала на Марджанишвили принесло наследие семьи Бенли в Грузию." },
        v2016: { title: "Мощность производства", desc: "Ремесленная мастерская в Исани вывела стандарты качества Sapore на вершину." },
        v2025: { title: "Современный рост", desc: "Сегодня традиции встречаются с современностью в наших четырех основных филиалах." }
      },
      final: { title: "Традиционное мастерство,", subtitle: "современный штрих.", footer: "Стамбул • Тбилиси / Марджанишвили • Исани • Леселидзе • 300 Арагвели" }
    },
    contact: {
      title: 'Связаться с нами',
      description: 'Мы будем рады услышать вас! Будь то вопрос, отзыв, бронирование столика или просто привет!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'ул. Иалбузи 9',
        koteApkhazis31: 'ул. Коте Апхази 31',
        davitAghmashenebeli95: 'пр. Давида Агмашенебели 95',
        davitAghmashenebeli134: 'пр. Давида Агмашенебели 134',
      },
    },
    report: {
      title: 'Сообщить о проблеме с Cafe Sapore',
      description: 'Мы ценим ваши отзывы. Сообщите нам о любых проблемах, чтобы мы могли улучшить ваш опыт!',
      form: {
        name: 'Имя',
        email: 'Email',
        branch: 'Филиал',
        issue: 'Проблема',
        selectBranch: 'Выберите филиал',
        placeholderName: 'Ваше имя',
        placeholderEmail: 'Ваш email',
        placeholderIssue: 'Опишите проблему',
        submit: 'Отправить отчет',
        submitting: 'Отправка...',
      },
      messages: {
        success: 'Отчет успешно отправлен!',
        error: 'Не удалось отправить отчет. Пожалуйста, попробуйте еще раз.',
      },
    },
  },


  ar: {
    addToCart: 'أضف إلى السلة',
    cart: 'السلة',
    close: 'إغلاق',
    confirmOrder: 'تأكيد الطلب',
    tableNumber: 'رقم الطاولة',
    selectTable: 'اختر طاولة',
    branch: 'الفرع',
    selectBranch: 'اختر فرعاً',
    total: 'الإجمالي',
    cartEmpty: 'سلة التسوق فارغة',
    startShopping: 'ابدأ التسوق',
    discover: 'اكتشف',
    error: {
      missingProductInfo: 'معلومات المنتج مفقودة',
      selectVariant: 'يرجى اختيار نوع',
      invalidTableNumber: 'يرجى إدخال رقم طاولة صحيح',
      selectBranch: 'يرجى اختيار فرع',
      emptyCart: 'سلة التسوق فارغة',
      orderFailed: 'فشل الطلب. يرجى المحاولة مرة أخرى.',
      priceMissing: 'معلومات السعر مفقودة',
      noData: 'لم يتم العثور على بيانات',
    },
    home: {
      subtitle: "تراث النكهات التقليدية",
      description: '"منذ عام 2008، نحافظ على قصة في كل وصفة وتراث في كل لقمة."',
      discoverMenu: "اكتشف القائمة",
      ourHeritage: "تراثنا",
    },
    nav: {
      aboutUs: 'من نحن',
      menu: 'القائمة',
      events: 'الفعاليات',
      contact: 'اتصل بنا',
      report: 'بلاغ',
      signIn: 'تسجيل الدخول',
      signUp: 'تسجيل جديد',
      customerLine: 'خط خدمة العملاء',
    },
    showcase: {
      descriptionTitle: 'وصف',
      highlightedTastes: 'أبرز النكهات',
      categories: {
        turkishDelights: 'حلقوم تركي',
        savories: 'موالح',
        boxes: 'صناديق هدايا',
        baklavas: 'بقلاوة',
        cookies: 'كوكيز',
        hotDrinks: 'مشروبات ساخنة',
      },
      descriptions: {
        turkishDelights: 'حلويات تركية كلاسيكية',
        savories: 'نكهات طفولة حنينية',
        boxes: 'كلاسيكيات سابوري',
        baklavas: 'لمحبي الحلويات',
        cookies: 'كلاسيكيات منزلية',
      }
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "والمتكررة",
      searchPlaceholder: "ابحث عن موضوع...",
      noResults: 'لم يتم العثور على نتائج لـ "{query}"',
      clearSearch: "مسح البحث",
      categoriesTitle: "الفئات",
      stillQuestions: "هل لا تزال لديك أسئلة؟",
      supportDesc: "فريق تجربة الضيوف لدينا هنا لمساعدتك في أي استفسارات تتعلق بمنتجاتنا أو تراثنا.",
      contactSupport: "اتصل بالدعم",
      contactUs: '',
      data: [
        {
          id: "craft",
          category: "الحرفة والمكونات",
          questions: [
            { q: "ما هو مصدر مكوناتكم؟", a: "في سابوري، نلتزم بمبدأ 'النقاء أولاً' منذ عام 1974. تأتي الزبدة من مزارع الألبان المحلية، وشوكولاتتنا هي كاكاو إكوادوري أصلي بنسبة 72%." },
            { q: "هل تقدمون خيارات خالية من الغلوتين أو نباتية؟", a: "نعم، نقدم خبزاً حرفياً طازجاً خالياً من الغلوتين وخيارات حلويات نباتية في أيام محددة في جميع فروعنا." }
          ]
        },
        {
          id: "orders",
          category: "الطلبات والتوصيل",
          questions: [
            { q: "كم من الوقت قبل الموعد يجب أن أطلب الكعك المخصص؟", a: "للتصاميم الخاصة وكعك البوتيك، نرجو منكم التواصل معنا قبل 3 أيام عمل على الأقل." },
            { q: "هل تقدمون خدمات التوصيل داخل تبليسي؟", a: "نعم، يمكنك تقديم الطلبات عبر Wolt و Glovo من جميع فروعنا." }
          ]
        },
        {
          id: "heritage",
          category: "التراث والشركة",
          questions: [
            { q: "ماذا يعني اسم 'Café Sapore'؟", a: "كلمة Sapore تعني 'النكهة' و'المذاق' باللغة الإيطالية. وهي ترمز إلى إعادة التفسير الحديث للقواعد التي وضعت في عام 1974." },
            { q: "هل تقدمون فرصاً للامتياز التجاري (Franchise)؟", a: "يتم إدارة سابوري كعمل عائلي. نحن نتوسع من خلال فروعنا الخاصة فقط للحفاظ على جودتنا." }
          ]
        }
      ]
    },
    shops: {
      title: 'متاجرنا',
      subtitle: 'تفضل بزيارتنا',
      seeDetails: 'عرض التفاصيل ←',
      writeToUs: 'اكتب لنا',
      writeToUsDesc: 'آراؤكم واقتراحاتكم حول فروعنا قيمة بالنسبة لنا. هل تود مشاركة تجربتك؟',
      contactForm: 'نموذج الاتصال',
      locateTitle: '',
      seeOnMaps: 'عرض على الخرائط',
      tags: {
        mainBranch: 'الفرع الرئيسي',
        touristic: 'فرع سياحي',
        takeAway: 'للخارج',
        cafe: 'مقهى وحلويات',
        production: 'إنتاج',
        fresh: 'طازج',
        premium: 'فاخر',
      }
    },
    aboutUs: {
      heroTitle: 'تراثنا',
      section1974: {
        title: 'البداية',
        description: 'بدأ ماهر بنلي مسيرته المهنية في عام 1974 في مخبزه الصغير. وبفضل المهارة التي جلبها من منطقة البحر الأسود، سرعان ما أصبح المفضل في الحي.',
        imageAlt: 'ماهر بنلي في بداية رحلته',
      },
      section1980: {
        title: 'تراث متنامٍ',
        description: 'بحلول الثمانينيات، أصبح سابوري مرادفاً للأذواق التركية التقليدية، حيث وسع قائمته مع الحفاظ على الجودة الحرفية.',
        imageAlt: 'متجر سابوري في الثمانينيات',
      },
      section1996: {
        title: 'آفاق جديدة',
        description: 'تم نقل تراثنا إلى الجيل الجديد، حيث تم دمج التقنيات التقليدية مع التميز الحديث في صناعة الحلويات.',
        imageAlt: 'تحديث سابوري',
      },
      section2003: {
        imageAlt: 'توسيع العلامة التجارية',
      },
      section2016_2020: {
        title: 'فصل تبليسي',
        description: 'في عام 2016، جلبنا وصفاتنا التي تعود لقرون إلى قلب تبليسي، وفتحنا أبوابنا للضيافة الجورجية.',
        imageAlt: 'الافتتاح في تبليسي',
      },
      sectionToday: {
        title: 'سابوري اليوم',
        description: 'اليوم، يستمر سابوري في العمل بنفس الشغف عبر فروع متعددة، ليجمع بين الثقافات من خلال المذاق.',
        imageAlt: 'سابوري اليوم',
      },
    },
    aboutPage: {
      hero: { badge: "خمسون عاماً من الحرفة", title1: "نقاء", title2: "التراث." },
      manifesto: {
        title: "ماهر بنلي",
        subtitle: "ورحلة سابوري.",
        quote: "كان رأس ماله مواشي القرية، وقوته انضباطه الذي لا يتزعزع.",
        desc1: "في مارس 1974، وضع ماهر بنلي حجر الأساس لـ كافيه سابوري في إسطنبول. تطور هذا الجهد إلى إتقان فن الحلويات والبقلاوة بحلول عام 1980.",
        desc2: "بمشاركة أبنائه، أصبح الأمر تقليداً عائلياً يجمع بين نقاء الدقيق ونبل السكر، ليكون وسام شرف يتوارثه الأجيال."
      },
      expansion: {
        title: "مذاق إسطنبول في سماء تبليسي",
        desc: "الفصل الجديد الذي بدأ في عام 2008 حول كافيه سابوري إلى واحدة من أرقى الوجهات في تبليسي."
      },
      values: {
        v2008: { title: "رؤية عالمية", desc: "افتتاح الفرع الأول في مرجانيشفيلي نقل إرث عائلة بنلي إلى جورجيا." },
        v2016: { title: "قوة الإنتاج", desc: "المختبر الحرفي في إيساني رفع معايير الجودة في سابوري إلى القمة." },
        v2025: { title: "نمو عصري", desc: "اليوم، تلتقي التقاليد مع الأساليب الحديثة في فروعنا الأربعة الرئيسية." }
      },
      final: { title: "إتقان تقليدي،", subtitle: "لمسة عصرية.", footer: "إسطنبول • تبليسي / مرجانيشفيلي • إيساني • ليسيليدزي • 300 أراغفيلي" }
    },
    contact: {
      title: 'اتصل بنا',
      description: 'يسعدنا أن نسمع منك! سواء كان سؤالاً، أو ملاحظة، أو حجز طاولة، أو مجرد التحية!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: '9 شارع يالبوزي',
        koteApkhazis31: '31 شارع كوتي أبخازي',
        davitAghmashenebeli95: '95 شارع ديفيت أغماشنبلي',
        davitAghmashenebeli134: '134 شارع ديفيت أغماشنبلي',
      },
    },
    report: {
      title: 'الإبلاغ عن مشكلة مع سابوري',
      description: 'نحن نقدر ملاحظاتكم. أخبرونا عن أي مشاكل حتى نتمكن من تحسين تجربتكم!',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        branch: 'الفرع',
        issue: 'المشكلة',
        selectBranch: 'اختر فرعاً',
        placeholderName: 'اسمك',
        placeholderEmail: 'بريدك الإلكتروني',
        placeholderIssue: 'صف المشكلة',
        submit: 'إرسال التقرير',
        submitting: 'جارٍ الإرسال...',
      },
      messages: {
        success: 'تم إرسال التقرير بنجاح!',
        error: 'فشل إرسال التقرير. يرجى المحاولة مرة أخرى.',
      },
    },
  },
};

// Functions to helper with logic
export const getTranslations = (lang: string): Translation => {
  return translations[lang] || translations['en'];
};

export const isRtl = (lang: string): boolean => {
  return lang === 'ar';
};