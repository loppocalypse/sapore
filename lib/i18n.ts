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
  nav: {
    aboutUs: string;
    menu: string;
    events: string;
    contact: string;
    report: string;
    signIn: string;
    signUp: string;
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
    section2016_2023: {
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
    branches: {
      davitAghmashenebeli95: string;
      davitAghmashenebeli134: string;
      koteApkhazis31: string;
      ialbuzi9: string;
    };
  };
};

// Define the translations object with explicit keys
const translations: Record<string, Translation> = {
  en: {
    addToCart: 'Add to Cart',
    cart: 'Your Cart',
    close: 'Close',
    confirmOrder: 'Confirm Order',
    tableNumber: 'Table Number:',
    selectTable: 'Select a table',
    branch: 'Branch:',
    selectBranch: 'Select a branch',
    total: 'Total',
    cartEmpty: 'Cart is empty.',
    error: {
      missingProductInfo: 'Product information is missing',
      selectVariant: 'Please select a variant',
      invalidTableNumber: 'Please select a valid table number',
      selectBranch: 'Please select a branch',
      emptyCart: 'Your cart is empty',
      orderFailed: 'Order could not be created',
      priceMissing: 'Price information is missing',
      noData: 'No data found',
    },
    nav: {
      aboutUs: 'About Us',
      menu: 'Menu',
      events: 'Events',
      contact: 'Contact / Social Media',
      report: 'Report',
      signIn: 'Sign In',
      signUp: 'Sign Up',
    },
    aboutUs: {
      heroTitle: 'Our Story',
      section1974: {
        title: '1974: The Beginning',
        description: 'Mahir Benli’s journey began in 1974 in Istanbul. Guided by his uncle, he rented a small börek shop, selling his family’s dairy herd to fund it. With his own hands, he crafted poğaça and açma, laying the foundation for a legacy of artisanal baked goods.',
        imageAlt: '1974: Mahir Benli\'s first börek shop in Istanbul',
      },
      section1980: {
        title: '1980: Çakmak Patisserie',
        description: 'Mastering the art of pastry, Mahir Benli opened Çakmak Patisserie in 1980. Expanding into cakes, cookies, and baklava, he invested in new ovens and displays, growing his craft and reputation for quality.',
        imageAlt: '1980: Çakmak Pastanesi opening',
      },
      section1996: {
        title: '1996: Damla Patisserie',
        description: 'In 1996, Mahir Benli opened Damla Patisserie, a milestone in branding. His sons, Mustafa and Ömer Benli, joined the business, turning it into a family legacy that thrived until 2013.',
        imageAlt: '1996: Damla Pastanesi with family',
      },
      section2003: {
        imageAlt: '2003: First Café Sapore branch in Tbilisi',
      },
      section2016_2023: {
        title: '2016-2023: Growth & Legacy',
        description: 'From establishing their own production facility in 2016 to opening additional branches in 2018 (Kote Abkhazis No:31) and 2021 (Davit Aghmashenebeli No:134), Café Sapore grew. In 2023, a new facility and branch at Ialbuzis No:9 solidified their modern yet traditional approach.',
        imageAlt: '2016-2023: Modern Café Sapore growth',
      },
      sectionToday: {
        title: 'Today: Café Sapore',
        description: 'Today, Café Sapore operates four branches, blending its rich heritage with modern innovation. With the same dedication as Mahir Benli in 1974, they continue to serve traditional flavors to their community.',
        imageAlt: 'Today: Café Sapore family legacy',
      },
    },
    contact: {
      title: 'Get in Touch with Us',
      description: 'Join us at Cafe Sapore for a delightful experience. Reach out to share your thoughts, make a reservation, or just say hello!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'Ialbuzi 9',
        koteApkhazis31: 'Kote Apkhazis 31',
        davitAghmashenebeli95: 'Davit Aghmashenebeli Ave. 95',
        davitAghmashenebeli134: 'Davit Aghmashenebeli Ave. 134',
      },
    },
    report: {
      title: 'Report an Issue with Cafe Sapore',
      description: 'We value your feedback. Let us know about any issues so we can make your experience better!',
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
        success: 'Your issue has been reported successfully! We’ll get back to you soon.',
        error: 'Error: {message}',
      },
      branches: {
        davitAghmashenebeli95: 'Davit Aghmashenebeli Ave. 95',
        davitAghmashenebeli134: 'Davit Aghmashenebeli Ave. 134',
        koteApkhazis31: 'Kote Apkhazis 31',
        ialbuzi9: 'Ialbuzi 9',
      },
    },
  },
  tr: {
    addToCart: 'Sepete Ekle',
    cart: 'Sepetiniz',
    close: 'Kapat',
    confirmOrder: 'Siparişi Onayla',
    tableNumber: 'Masa Numarası:',
    selectTable: 'Masa seçin',
    branch: 'Şube:',
    selectBranch: 'Şube seçin',
    total: 'Toplam',
    cartEmpty: 'Sepet boş.',
    error: {
      missingProductInfo: 'Ürün bilgisi eksik',
      selectVariant: 'Lütfen bir varyant seçin',
      invalidTableNumber: 'Lütfen geçerli bir masa numarası seçin',
      selectBranch: 'Lütfen bir şube seçin',
      emptyCart: 'Sepetiniz boş',
      orderFailed: 'Sipariş oluşturulamadı',
      priceMissing: 'Fiyat bilgisi eksik',
      noData: 'Veri bulunamadı',
    },
    nav: {
      aboutUs: 'Hakkımızda',
      menu: 'Menü',
      events: 'Etkinlikler',
      contact: 'İletişim / Sosyal Medya',
      report: 'Rapor',
      signIn: 'Giriş Yap',
      signUp: 'Kayıt Ol',
    },
    aboutUs: {
      heroTitle: 'Hikayemiz',
      section1974: {
        title: '1974: Başlangıç',
        description: 'Mahir Benli’nin yolculuğu 1974’te İstanbul’da başladı. Amcasının rehberliğinde küçük bir börek dükkanı kiraladı, ailesinin süt hayvanlarını satarak finanse etti. Kendi elleriyle poğaça ve açma yaparak el yapımı unlu mamullerin mirasını oluşturdu.',
        imageAlt: '1974: Mahir Benli’nin İstanbul’daki ilk börek dükkanı',
      },
      section1980: {
        title: '1980: Çakmak Pastanesi',
        description: 'Pastacılık sanatında ustalaşan Mahir Benli, 1980’de Çakmak Pastanesi’ni açtı. Kekler, kurabiyeler ve baklavaya genişleyerek yeni fırınlar ve vitrinler yatırımı yaptı, ustalığını ve kalite itibarını büyüttü.',
        imageAlt: '1980: Çakmak Pastanesi açılışı',
      },
      section1996: {
        title: '1996: Damla Pastanesi',
        description: '1996’da Mahir Benli, Damla Pastanesi’ni açarak markalaşmada bir dönüm noktası yaşadı. Oğulları Mustafa ve Ömer Benli işe katıldı, 2013’e kadar süren bir aile mirasına dönüştü.',
        imageAlt: '1996: Damla Pastanesi aileyle birlikte',
      },
      section2003: {
        imageAlt: '2003: Tiflis’teki ilk Café Sapore şubesi',
      },
      section2016_2023: {
        title: '2016-2023: Büyüme ve Miras',
        description: '2016’da kendi üretim tesisini kurmaktan, 2018’de (Kote Abkhazis No:31) ve 2021’de (Davit Aghmashenebeli No:134) ek şubeler açmaya kadar Café Sapore büyüdü. 2023’te Ialbuzis No:9’da yeni bir tesis ve şube, modern ancak geleneksel yaklaşımı pekiştirdi.',
        imageAlt: '2016-2023: Modern Café Sapore büyümesi',
      },
      sectionToday: {
        title: 'Bugün: Café Sapore',
        description: 'Bugün Café Sapore, dört şubeyle zengin mirasını modern yeniliklerle harmanlıyor. Mahir Benli’nin 1974’teki aynı adanmışlıkla, topluluğuna geleneksel tatlar sunmaya devam ediyor.',
        imageAlt: 'Bugün: Café Sapore aile mirası',
      },
    },
    contact: {
      title: 'Bize Ulaşın',
      description: 'Cafe Sapore’da keyifli bir deneyim için bize katılın. Düşüncelerinizi paylaşmak, rezervasyon yapmak ya da sadece merhaba demek için ulaşın!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'Ialbuzi 9',
        koteApkhazis31: 'Kote Apkhazis 31',
        davitAghmashenebeli95: 'Davit Aghmashenebeli Cad. 95',
        davitAghmashenebeli134: 'Davit Aghmashenebeli Cad. 134',
      },
    },
    report: {
      title: 'Cafe Sapore ile Sorun Bildir',
      description: 'Geri bildirimlerinizi önemsiyoruz. Deneyiminizi daha iyi hale getirebilmemiz için sorunları bize bildirin!',
      form: {
        name: 'İsim',
        email: 'E-posta',
        branch: 'Şube',
        issue: 'Sorun',
        selectBranch: 'Şube seçin',
        placeholderName: 'İsminiz',
        placeholderEmail: 'E-postanız',
        placeholderIssue: 'Sorunu tarif edin',
        submit: 'Rapor Gönder',
        submitting: 'Gönderiliyor...',
      },
      messages: {
        success: 'Sorununuz başarıyla bildirildi! Yakında size geri döneceğiz.',
        error: 'Hata: {message}',
      },
      branches: {
        davitAghmashenebeli95: 'Davit Aghmashenebeli Cad. 95',
        davitAghmashenebeli134: 'Davit Aghmashenebeli Cad. 134',
        koteApkhazis31: 'Kote Apkhazis 31',
        ialbuzi9: 'Ialbuzi 9',
      },
    },
  },
  ka: {
    addToCart: 'კალათაში დამატება',
    cart: 'თქვენი კალათა',
    close: 'დახურვა',
    confirmOrder: 'შეკვეთის დადასტურება',
    tableNumber: 'მაგიდის ნომერი:',
    selectTable: 'აირჩიეთ მაგიდა',
    branch: 'ფილიალი:',
    selectBranch: 'აირჩიეთ ფილიალი',
    total: 'ჯამი',
    cartEmpty: 'კალათა ცარიელია.',
    error: {
      missingProductInfo: 'პროდუქტის ინფორმაცია არ არსებობს',
      selectVariant: 'გთხოვთ, აირჩიოთ ვარიანტი',
      invalidTableNumber: 'გთხოვთ, აირჩიოთ სწორი მაგიდის ნომერი',
      selectBranch: 'გთხოვთ, აირჩიოთ ფილიალი',
      emptyCart: 'თქვენი კალათა ცარიელია',
      orderFailed: 'შეკვეთა ვერ შეიქმნა',
      priceMissing: 'ფასის ინფორმაცია არ არსებობს',
      noData: 'მონაცემები ვერ მოიძებნა',
    },
    nav: {
      aboutUs: 'ჩვენ შესახებ',
      menu: 'მენიუ',
      events: 'ღონისძიებები',
      contact: 'კონტაქტი / სოციალური მედია',
      report: 'ანგარიში',
      signIn: 'შესვლა',
      signUp: 'რეგისტრაცია',
    },
    aboutUs: {
      heroTitle: 'ჩვენი ისტორია',
      section1974: {
        title: '1974: დასაწყისი',
        description: 'მაჰირ ბენლის მოგზაურობა 1974 წელს სტამბოლში დაიწყო. მისი ბიძის ხელმძღვანელობით, მან პატარა ბორეკის მაღაზია იქირავა, ოჯახის საწველი ნახირის გაყიდვით დააფინანსა. საკუთარი ხელებით მან მოამზადა ფოღაჩა და აჩმა, რამაც ხელნაკეთი ცომეულის მემკვიდრეობის საფუძველი ჩაუყარა.',
        imageAlt: '1974: მაჰირ ბენლის პირველი ბორეკის მაღაზია სტამბოლში',
      },
      section1980: {
        title: '1980: ჩაქმაქის საკონდიტრო',
        description: 'საკონდიტრო ხელოვნების დაუფლებით, მაჰირ ბენლიმ 1980 წელს გახსნა ჩაქმაქის საკონდიტრო. ნამცხვრებით, ორცხობილებითა და ბაქლავათი გაფართოებით, მან ინვესტიცია ჩადო ახალ ღუმელებში და ვიტრინებში, გაზარდა თავისი ხელობა და ხარისხის რეპუტაცია.',
        imageAlt: '1980: ჩაქმაქის საკონდიტროს გახსნა',
      },
      section1996: {
        title: '1996: დამლას საკონდიტრო',
        description: '1996 წელს მაჰირ ბენლიმ გახსნა დამლას საკონდიტრო, რაც ბრენდინგის მნიშვნელოვანი ეტაპი იყო. მისი ვაჟები, მუსტაფა და ომერ ბენლი, შეუერთდნენ ბიზნესს, გარდაქმნეს ის ოჯახურ მემკვიდრეობად, რომელიც 2013 წლამდე აყვავდა.',
        imageAlt: '1996: დამლას საკონდიტრო ოჯახთან ერთად',
      },
      section2003: {
        imageAlt: '2003: თბილისში Café Sapore-ის პირველი ფილიალი',
      },
      section2016_2023: {
        title: '2016-2023: ზრდა და მემკვიდრეობა',
        description: '2016 წელს საკუთარი წარმოების ობიექტის დაარსებიდან 2018 (ქოთე აფხაზის N31) და 2021 (დავით აღმაშენებელის N134) წლებში დამატებითი ფილიალების გახსნამდე, Café Sapore გაიზარდა. 2023 წელს იალბუზის N9-ზე ახალი ობიექტი და ფილიალი გააძლიერა მათი თანამედროვე, მაგრამ ტრადიციული მიდგომა.',
        imageAlt: '2016-2023: თანამედროვე Café Sapore-ის ზრდა',
      },
      sectionToday: {
        title: 'დღეს: Café Sapore',
        description: 'დღეს Café Sapore ოთხ ფილიალს მართავს, თავის მდიდარ მემკვიდრეობას თანამედროვე ინოვაციებთან აერთიანებს. მაჰირ ბენლის 1974 წლის იგივე თავდადებით, ისინი განაგრძობენ ტრადიციული გემოების მიწოდებას თავიანთი თემისთვის.',
        imageAlt: 'დღეს: Café Sapore-ის ოჯახური მემკვიდრეობა',
      },
    },
    contact: {
      title: 'ჩვენთან დაკავშირება',
      description: 'შემოგვიერთდით Cafe Sapore-ში სასიამოვნო გამოცდილებისთვის. დაგვიკავშირდით თქვენი აზრების გასაზიარებლად, დაჯავშნისთვის ან უბრალოდ მისალმებისთვის!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'იალბუზი 9',
        koteApkhazis31: 'ქოთე აფხაზის 31',
        davitAghmashenebeli95: 'დავით აღმაშენებელის გამზ. 95',
        davitAghmashenebeli134: 'დავით აღმაშენებელის გამზ. 134',
      },
    },
    report: {
      title: 'პრობლემის შეტყობინება Cafe Sapore-თან',
      description: 'ჩვენ ვაფასებთ თქვენს გამოხმაურებას. შეგვატყობინეთ ნებისმიერი პრობლემის შესახებ, რათა გავაუმჯობესოთ თქვენი გამოცდილება!',
      form: {
        name: 'სახელი',
        email: 'ელფოსტა',
        branch: 'ფილიალი',
        issue: 'პრობლემა',
        selectBranch: 'აირჩიეთ ფილიალი',
        placeholderName: 'თქვენი სახელი',
        placeholderEmail: 'თქვენი ელფოსტა',
        placeholderIssue: 'აღწერეთ პრობლემა',
        submit: 'ანგარიშის გაგზავნა',
        submitting: 'იგზავნება...',
      },
      messages: {
        success: 'თქვენი პრობლემა წარმატებით შეტყობინდა! მალე გიპასუხებთ.',
        error: 'შეცდომა: {message}',
      },
      branches: {
        davitAghmashenebeli95: 'დავით აღმაშენებელის გამზ. 95',
        davitAghmashenebeli134: 'დავით აღმაშენებელის გამზ. 134',
        koteApkhazis31: 'ქოთე აფხაზის 31',
        ialbuzi9: 'იალბუზი 9',
      },
    },
  },
  ru: {
    addToCart: 'Добавить в корзину',
    cart: 'Ваша корзина',
    close: 'Закрыть',
    confirmOrder: 'Подтвердить заказ',
    tableNumber: 'Номер стола:',
    selectTable: 'Выберите стол',
    branch: 'Филиал:',
    selectBranch: 'Выберите филиал',
    total: 'Итого',
    cartEmpty: 'Корзина пуста.',
    error: {
      missingProductInfo: 'Информация о продукте отсутствует',
      selectVariant: 'Пожалуйста, выберите вариант',
      invalidTableNumber: 'Пожалуйста, выберите действительный номер стола',
      selectBranch: 'Пожалуйста, выберите филиал',
      emptyCart: 'Ваша корзина пуста',
      orderFailed: 'Не удалось создать заказ',
      priceMissing: 'Информация о цене отсутствует',
      noData: 'Данные не найдены',
    },
    nav: {
      aboutUs: 'О нас',
      menu: 'Меню',
      events: 'Мероприятия',
      contact: 'Контакты / Социальные сети',
      report: 'Отчет',
      signIn: 'Войти',
      signUp: 'Зарегистрироваться',
    },
    aboutUs: {
      heroTitle: 'Наша история',
      section1974: {
        title: '1974: Начало',
        description: 'Путешествие Махира Бенли началось в 1974 году в Стамбуле. Под руководством своего дяди он арендовал небольшой магазин буреков, продав семейное стадо молочного скота для финансирования. Своими руками он создавал погача и ачму, заложив основу для наследия ремесленных хлебобулочных изделий.',
        imageAlt: '1974: Первый магазин буреков Махира Бенли в Стамбуле',
      },
      section1980: {
        title: '1980: Кондитерская Чакмак',
        description: 'Овладев искусством кондитерского дела, Махир Бенли открыл кондитерскую Чакмак в 1980 году. Расширяясь на торты, печенье и пахлаву, он инвестировал в новые печи и витрины, развивая свое мастерство и репутацию качества.',
        imageAlt: '1980: Открытие кондитерской Чакмак',
      },
      section1996: {
        title: '1996: Кондитерская Дамла',
        description: 'В 1996 году Махир Бенли открыл кондитерскую Дамла, что стало важной вехой в брендинге. Его сыновья, Мустафа и Омер Бенли, присоединились к бизнесу, превратив его в семейное наследие, которое процветало до 2013 года.',
        imageAlt: '1996: Кондитерская Дамла с семьей',
      },
      section2003: {
        imageAlt: '2003: Первый филиал Café Sapore в Тбилиси',
      },
      section2016_2023: {
        title: '2016-2023: Рост и наследие',
        description: 'От создания собственного производственного объекта в 2016 году до открытия дополнительных филиалов в 2018 (Коте Абхазис №31) и 2021 (Давит Агмашенебели №134) годах, Café Sapore росло. В 2023 году новый объект и филиал на Иалбузи №9 укрепили их современный, но традиционный подход.',
        imageAlt: '2016-2023: Рост современного Café Sapore',
      },
      sectionToday: {
        title: 'Сегодня: Café Sapore',
        description: 'Сегодня Café Sapore управляет четырьмя филиалами, сочетая богатое наследие с современными инновациями. С той же преданностью, что и Махир Бенли в 1974 году, они продолжают подавать традиционные вкусы своему сообществу.',
        imageAlt: 'Сегодня: Семейное наследие Café Sapore',
      },
    },
    contact: {
      title: 'Свяжитесь с нами',
      description: 'Присоединяйтесь к нам в Cafe Sapore для приятного опыта. Свяжитесь, чтобы поделиться своими мыслями, забронировать столик или просто поздороваться!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'Иалбузи 9',
        koteApkhazis31: 'Коте Апхазис 31',
        davitAghmashenebeli95: 'Проспект Давит Агмашенебели 95',
        davitAghmashenebeli134: 'Проспект Давит Агмашенебели 134',
      },
    },
    report: {
      title: 'Сообщить о проблеме с Cafe Sapore',
      description: 'Мы ценим ваши отзывы. Сообщите нам о любых проблемах, чтобы мы могли улучшить ваш опыт!',
      form: {
        name: 'Имя',
        email: 'Электронная почта',
        branch: 'Филиал',
        issue: 'Проблема',
        selectBranch: 'Выберите филиал',
        placeholderName: 'Ваше имя',
        placeholderEmail: 'Ваша электронная почта',
        placeholderIssue: 'Опишите проблему',
        submit: 'Отправить отчет',
        submitting: 'Отправляется...',
      },
      messages: {
        success: 'Ваша проблема успешно сообщена! Мы скоро свяжемся с вами.',
        error: 'Ошибка: {message}',
      },
      branches: {
        davitAghmashenebeli95: 'Проспект Давит Агмашенебели 95',
        davitAghmashenebeli134: 'Проспект Давит Агоссибидеть больше...',
        koteApkhazis31: 'Коте Апхазис 31',
        ialbuzi9: 'Иалбузи 9',
      },
    },
  },
  ar: {
    addToCart: 'أضف إلى السلة',
    cart: 'سلة التسوق الخاصة بك',
    close: 'إغلاق',
    confirmOrder: 'تأكيد الطلب',
    tableNumber: 'رقم الطاولة:',
    selectTable: 'اختر طاولة',
    branch: 'الفرع:',
    selectBranch: 'اختر فرعًا',
    total: 'المجموع',
    cartEmpty: 'السلة فارغة.',
    error: {
      missingProductInfo: 'معلومات المنتج مفقودة',
      selectVariant: 'يرجى اختيار نوع',
      invalidTableNumber: 'يرجى اختيار رقم طاولة صالح',
      selectBranch: 'يرجى اختيار فرع',
      emptyCart: 'سلة التسوق الخاصة بك فارغة',
      orderFailed: 'تعذر إنشاء الطلب',
      priceMissing: 'معلومات السعر مفقودة',
      noData: 'لم يتم العثور على بيانات',
    },
    nav: {
      aboutUs: 'معلومات عنا',
      menu: 'القائمة',
      events: 'الفعاليات',
      contact: 'الاتصال / وسائل التواصل الاجتماعي',
      report: 'تقرير',
      signIn: 'تسجيل الدخول',
      signUp: 'التسجيل',
    },
    aboutUs: {
      heroTitle: 'قصتنا',
      section1974: {
        title: '1974: البداية',
        description: 'بدأت رحلة ماهر بنلي في عام 1974 في إسطنبول. بمساعدة عمه، استأجر متجرًا صغيرًا لبيع البوريك، وباع قطيع الألبان العائلي لتمويله. بيديه، صنع البوغاتشا والأشما، مما وضع أساسًا لميراث المخبوزات الحرفية.',
        imageAlt: '1974: أول متجر بوريك لماهر بنلي في إسطنبول',
      },
      section1980: {
        title: '1980: حلويات شاكماك',
        description: 'بتقنية فن الحلويات، افتتح ماهر بنلي حلويات شاكماك في عام 1980. توسع في الكعك والبسكويت والبقلاوة، واستثمر في أفران وواجهات عرض جديدة، مما زاد من مهارته وسمعته بالجودة.',
        imageAlt: '1980: افتتاح حلويات شاكماك',
      },
      section1996: {
        title: '1996: حلويات داملا',
        description: 'في عام 1996، افتتح ماهر بنلي حلويات داملا، وهي نقطة تحول في العلامة التجارية. انضم أبناؤه، مصطفى وعمر بنلي، إلى العمل، وحولوه إلى ميراث عائلي ازدهر حتى عام 2013.',
        imageAlt: '1996: حلويات داملا مع العائلة',
      },
      section2003: {
        imageAlt: '2003: أول فرع لـ Café Sapore في تبليسي',
      },
      section2016_2023: {
        title: '2016-2023: النمو والميراث',
        description: 'من إنشاء منشأة إنتاج خاصة في عام 2016 إلى افتتاح فروع إضافية في 2018 (كوتي أبخازيس رقم 31) و2021 (ديفيت أغماشنبلي رقم 134)، نما Café Sapore. في عام 2023، عززت منشأة وفرع جديد في إيالبوزي رقم 9 نهجهم الحديث والتقليدي.',
        imageAlt: '2016-2023: نمو Café Sapore الحديث',
      },
      sectionToday: {
        title: 'اليوم: Café Sapore',
        description: 'اليوم، يدير Café Sapore أربعة فروع، يمزج بين تراثه الغني بالابتكار الحديث. بنفس التفاني الذي كان لدى ماهر بنلي في عام 1974، يواصلون تقديم النكهات التقليدية لمجتمعهم.',
        imageAlt: 'اليوم: ميراث عائلة Café Sapore',
      },
    },
    contact: {
      title: 'تواصلوا معنا',
      description: 'انضموا إلينا في Cafe Sapore لتجربة ممتعة. تواصلوا لمشاركة أفكاركم، حجز طاولة، أو مجرد التحية!',
      phone: '+995 599 64 20 08',
      email: 'saporegeo@gmail.com',
      instagram: '@sapore.tbilisi',
      tiktok: '@cafesaporetbilisi',
      address: {
        ialbuzi9: 'إيالبوزي 9',
        koteApkhazis31: 'كوتي أبخازيس 31',
        davitAghmashenebeli95: 'شارع ديفيت أغماشنبلي 95',
        davitAghmashenebeli134: 'شارع ديفيت أغماشنبلي 134',
      },
    },
    report: {
      title: 'الإبلاغ عن مشكلة مع Cafe Sapore',
      description: 'نحن نقدر ملاحظاتكم. أخبرونا عن أي مشاكل حتى نتمكن من تحسين تجربتكم!',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        branch: 'الفرع',
        issue: 'المشكلة',
        selectBranch: 'اختر فرعًا',
        placeholderName: 'اسمك',
        placeholderEmail: 'بريدك الإلكتروني',
        placeholderIssue: 'صف المشكلة',
        submit: 'إرسال التقرير',
        submitting: 'جارٍ الإرسال...',
      },
      messages: {
        success: 'تم الإبلاغ عن مشكلتك بنجاح! سنرد عليك قريبًا.',
        error: 'خطأ: {message}',
      },
      branches: {
        davitAghmashenebeli95: 'شارع ديفيت أغماشنبلي 95',
        davitAghmashenebeli134: 'شارع ديفيت أغماشنبلي 134',
        koteApkhazis31: 'كوتي أبخازيس 31',
        ialbuzi9: 'إيالبوزي 9',
      },
    },
  },
};

export const getTranslations = (lang: string): Translation => {
  return translations[lang] || translations.en;
};

export const isRtl = (lang: string): boolean => lang === 'ar';