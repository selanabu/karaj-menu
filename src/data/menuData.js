export const MENU = [
  // ---------------- SALADS ----------------
  {
    id: "salads",
    title: { ar: "سلطات", he: "סלטים", en: "Salads" },
    items: [
      { name: { ar: "سلطة يونانية", he: "סלט יווני", en: "Greek Salad" }, price: "45", image: "/images/salads/greek-salad.jpeg" },
      { name: { ar: "سلطة حلومي", he: "סלט חלומי", en: "Halloumi Salad" }, price: "48", image: "/images/salads/halloumi-salad.jpeg" },
      { name: { ar: "سلطة فتوش", he: "סלט פאטוש", en: "Fattoush Salad" }, price: "45",        extra: { ar: "جبنه +10", he: "גבינה +10", en: "Cheese +10" },
       image: "/images/salads/fattoush-salad.jpeg" },
      { name: { ar: "سلطه شنتسل", he: "סלט שניצל", en: "Schnitzel Salad" }, price: "60", image: "" },
      {
        name: { ar: "باذنجان مشوي مع خبزه المحل", he: "חציל קלוי עם לחם הבית", en: "Grilled Eggplant with House Bread" },
        price: "45",
        image: "/images/salads/eggplant.jpeg",
      },
      { name: { ar: "فوكاتشا", he: "פוקאצ'ה", en: "Focaccia" }, price: "45", image: "/images/meals/Focaccia.jpeg" },
    ],
  },

  // ---------------- PIZZA ----------------
  {
    id: "pizza",
    title: { ar: "بيتزا", he: "פיצה", en: "Pizza" },
    items: [
      { name: { ar: "بيتزا مارجريتا", he: "פיצה מרגריטה", en: "Margherita Pizza" }, price: "50", image: "/images/meals/mar.jpeg" },
      { name: { ar: "بيتزا الفريدو", he: "פיצה אלפרדו", en: "Alfredo Pizza" }, price: "55", image: "/images/meals/alf.jpeg" },
      { name: { ar: "بيتزا كراج", he: "פיצה קראג'", en: "Karaj Pizza" }, price: "65", image: "/images/meals/k.jpeg" },
      { name: { ar: "بيتزا سلامي", he: "פיצה סלמי", en: "Salami Pizza" }, price: "65", image: "/images/meals/s.jpeg" },
    ],
    notes: [
      {
        ar: "فطر / زيتون / ذرة / ريحان  +5",
        he: "פטריות / זיתים / תירס / בזיליקום  +5",
        en: "Mushrooms / Olives / Corn / Basil  +5",
      },
    ],
  },

  // ---------------- MEALS ----------------
  {
    id: "meals",
    title: { ar: "وجبات", he: "מנות", en: "Meals" },
    items: [
      {
        name: { ar: "فطيرة دجاج", he: "פאי עוף", en: "Chicken Pita" },
        price: "50",
        extra: { ar: "الفطر/الزيتون/جبنه +5", he: "פטריות/זיתים/גבינה +5", en: "Mushrooms/Olives/Cheese +5" },
        image: "/images/meals/ChickenPita.jpeg",
      },
      {
        name: { ar: "فطيرة لحم", he: "פאי בשר", en: "Beef Pita" },
        price: "85",
        extra: { ar: "طماطم/حار/بصل/جبنه +5", he: "בצל/עגבניה/חריף/גבינה +5", en: "tomato/onion/Cheese +5" },
        image: "/images/meals/meet.jpeg",
      },
      { name: { ar: "فطيرة جبن وزعتر", he: "פאי גבינה וזעתר", en: "Cheese & Za'atar Pita" }, price: "45", image: "/images/meals/Za'atarPita.jpeg" },
      {
        name: { ar: "فطيرة بطاطا", he: "פאי תפוחי אדמה", en: "Potato Pita" },
        price: "60",
        extra: { ar: "جبن/فطر", he: "גבינה/פטריות +5", en: "Cheese/Mushrooms +5" },
        image: "/images/meals/PotatoPita.jpeg",
      },
      { name: { ar: "فطيرة باستراما", he: "פאי פסטרמה", en: "Pastrami Pita" }, price: "60", image: "/images/meals/PastramiPita.jpeg" },
      {
        name: { ar: "تورتيلا دجاج", he: "טורטייה עוף", en: "Chicken Tortilla Wrap" },
        price: "45",
        extra: { ar: "جبن إضافي+8", he: "תוספת גבינה +8", en: "Extra cheese +8" },
        image: "/images/meals/tor.jpeg",
      },
      { name: { ar: "كرسبي دجاج مع تشيبس", he: "עוף קריספי עם צ׳יפס", en: "Crispy Chicken with Fries" }, price: "50", image: "/images/meals/CrispyChickenWithFries.jpeg" },
    { name: { ar: "شنتسل مع تشيبس", he: "שניצל עם צ׳יפס", en: "Schnitzel with Fries" }, price: "50", image: "/images/meals/Schnitzel.jpeg" },

      {
        name: { ar: "صدر دجاج مع خضروات مشوية", he: "חזה עוף עם ירקות קלויים", en: "Chicken Breast with Grilled Vegetables" },
        price: "70",
        image: "/images/meals/chi.jpeg",
      },
      { name: { ar: "شكشوكة مع خبزه المحل", he: "שקשוקה עם לחם הבית", en: "Shakshuka with House Bread" }, price: "50", image: "/images/meals/Shakshuka.jpeg" },
      { name: { ar: "بيض مقلي مع خبزه المحل", he: "ביצים מטוגנות עם לחם הבית", en: "Fried Eggs with House Bread" }, price: "50", image: "/images/meals/FriedEggsWithHouseBread.jpeg" },
      { name: { ar: "خاتشابوري مع صفار البيض", he: "חצ׳פורי עם חלמון ביצה", en: "Khachapuri with Egg Yolk" }, price: "50", image: "/images/meals/Khachapuri.jpeg" },
      {
        name: { ar: "سباجيتي نابوليتانا", he: "ספגטי נפוליטנה", en: "Spaghetti Napoletana" },
        price: "45",
        extra: { ar: "فطر/جبنه", he: "פטריות/גבינה", en: "Mushrooms/Cheese" },
        image: "/images/meals/Spaghetti2.jpeg",
      },
      {
        name: { ar: "سباجيتي الفريدو", he: "ספגטי אלפרדו", en: "Spaghetti Alfredo" },
        price: "55",
        extra: { ar: "فطر/جبنه", he: "פטריות/גבינה", en: "Mushrooms/Cheese" },
        image: "/images/meals/Spaghetti3.jpeg",
      },
      { name: { ar: "سباجيتي مع دجاج", he: "ספגטי עם עוף", en: "Spaghetti with Chicken" }, price: "70", image: "/images/meals/Spaghetti1.jpeg" },
      { name: { ar: "موكباتس دجاج", he: "מוקבאטס עוף", en: "Mokabets Chicken" }, price: "70", image: "/images/meals/Mokabets.jpeg" },
      { name: { ar: "توست جبنه", he: "טוסט גבינה", en: "Cheese Toast" }, price: "40", image: "/images/meals/to.jpeg" },
    ],
    notes: [
      {
        ar: "إضافات: ذرة/تونة/سلامي/خضروات/جبن بلغاري/موزاريلا  +5",
        he: "תוספות: תירס/טונה/סלמי/ירקות/גבינה בולגרית/מוצרלה  +5",
        en: "Add-ons: Corn/Tuna/Salami/Vegetables/Bulgarian Cheese/Mozzarella  +5",
      },
    ],
  },

  // ---------------- SIDES ----------------
  {
    id: "extras",
    title: { ar: "اضافات", he: "תוספות", en: "Sides" },
    items: [
      { name: { ar: "بطاطس مقلية", he: "צ׳יפס", en: "French Fries" }, price: "30", image: "/images/meals/side.jpeg" },
      { name: { ar: "كرات بطاطا", he: "כדורי תפוחי אדמה", en: "Potato Balls" }, price: "35", image: "/images/meals/side.jpeg" },
      { name: { ar: "حلقات بصل", he: "טבעות בצל", en: "Onion Rings" }, price: "35", image: "/images/meals/side.jpeg" },
    ],
  },

  // ---------------- DESSERTS ----------------
  {
    id: "desserts",
    title: { ar: "حلويات كراج", he: "קינוחים קראג'", en: "Karaj Desserts" },
    items: [
      { name: { ar: "كريب كراج", he: "קרפ קראג'", en: "Karaj Crepe" }, price: "50", image: "/images/desserts/kar.jpeg" },
      { name: { ar: "كريب محشي كيندر", he: "קרפ קינדר", en: "Crepe kinder" }, price: "25 / 20", image: "/images/desserts/kind.jpeg" },
      { name: { ar: "كريب اوريو", he: "קרפ במילוי קינדר או אוראו", en: "Crepe filled with Kinder or Oreo" }, price: "30", image: "/images/desserts/ore.jpeg" },
      { name: { ar: "كريب محشي فواكه", he: "קרפ במילוי פירות", en: "Fruit-filled Crepe" }, price: "40", image: "/images/desserts/bs.jpeg" },
      { name: { ar: "كريب دبي", he: "קרפ דובאי", en: "Dubai Crepe" }, price: "40", image: "/images/desserts/dub.jpeg" },
      { name: { ar: "وافل", he: "וופל", en: "Waffle" }, price: "40", image: "/images/desserts/waf.jpeg" },
      { name: { ar: "بابل وافل", he: "באבל וופל", en: "Bubble Waffle" }, price: "35", image: "/images/desserts/bu.jpeg" },
      { name: { ar: "فشافيش", he: "פשאפיש", en: "Fshafish" }, price: "10 = 25", image: "/images/desserts/fsha.jpeg" },
      { name: { ar: "دونات", he: "דונאט", en: "Donut" }, price: "7", image: "/images/desserts/do.jpeg" },
      { name: { ar: "تشوروز", he: "צ׳ורוס", en: "Churros" }, price: "5 = 25", image: "/images/desserts/ch.jpeg" },
      { name: { ar: "سمكات الشوكولاته", he: "דגיגי שוקולד", en: "Chocolate Fish (10 = 30)" }, price: "10 = 30", image: "/images/desserts/fish.jpeg" },
      { name: { ar: "سمكه الشوكولاته", he: "דג שוקולד", en: "Chocolate Fish" }, price: "35", image: "/images/desserts/ChocolateFish.jpeg" },
      { name: { ar: "كعكه الجبن المخبوزه", he: "עוגת גבינה אפויה", en: "Baked Cheesecake" }, price: "35", image: "/images/desserts/chees.jpeg" },
      { name: { ar: "كرتوش/رول", he: "קרטוש / רול", en: "Cartouche / Roll" }, price: "40", image: "/images/desserts/rol.jpeg" },
      { name: { ar: "سوفليه شوكولاته", he: "סופלה שוקולד", en: "Chocolate Soufflé" }, price: "40", image: "/images/desserts/ChocolateSouffle.jpeg" },
        { name: { ar: "بيتزا شوكولاته", he: "פיצה שוקולד", en: "Chocolate pizza" }, price: "50", image: "/images/desserts/pizza.jpeg" },
        { name: { ar: "كعكه كوكيز ", he:"קוקייז פאדג", en: "Cookie dough" }, price: "50", image: "/images/desserts/image.png" },


    ],
  },

  // ---------------- COCKTAILS & JUICES ----------------
  {
    id: "cocktails",
    title: { ar: "كوكتيلات", he: "קוקטיילים", en: "Cocktails" },
    items: [
      { name: { ar: "كوكتيل كيندر بوينو", he: "קוקטייל קינדר בואנו", en: "Kinder Bueno Cocktail" }, price: "20 / 25", image: "" },
      { name: { ar: "كوكتيل أوريو", he: "קוקטייל אוראו", en: "Oreo Cocktail" }, price: "20 / 25", image: "" },
      { name: { ar: "كوكتيل نوتيلا", he: "קוקטייל נוטלה", en: "Nutella Cocktail" }, price: "20 / 25", image: "" },
      { name: { ar: "كوكتيل الفراولة/الموز", he: "קוקטייל תות/בננה", en: "Strawberry/Banana Cocktail" }, price: "20 / 25", image: "" },
      { name: { ar: "كوكتيل فواكه", he: "קוקטייל פירות", en: "Fruit Cocktail" }, price: "25", image: "" },
      { name: { ar: "عصير الجزر", he: "מיץ גזר", en: "Carrot Juice" }, price: "20 / 25", image: "" },
      { name: { ar: "عصير البرتقال", he: "מיץ תפוזים", en: "Orange Juice" }, price: "20 / 25", image: "" },
      { name: { ar: "عصير الجزر والبرتقال", he: "מיץ גזר ותפוז", en: "Carrot & Orange Juice" }, price: "20 / 25", image: "" },
      { name: { ar: "نعنع جروس", he: "נענע גרוס", en: "Mint Granita" }, price: "20 / 25", image: "" },
      { name: { ar: "قمقم ليموناظة", he: "בקבוק לימונדה", en: "Lemonade Bottle" }, price: "30", image: "" },
      { name: { ar: "قمقم نعنع جروس", he: "בקבוק נענע גרוס", en: "Mint Granita Bottle" }, price: "50", image: "" },
    ],
  },

  // ---------------- DESSERT SETS ----------------
  {
    id: "dessert_combo",
    title: { ar: "تشكيله حلويات", he: "מארזי קינוחים", en: "Dessert Sets" },
    items: [
      { name: { ar: "كريب كيندر , 10 فشافيش , وافل", he: "קרפ קינדר, 10 פשאפיש, וופל", en: "Kinder crepe, 10 Fshafish, Waffle" }, price: "100", image: "" },
      {
        name: {
          ar: "كريب محشي , وافل , 10 فشافيش , 10 سمكات , كعكه جبن/سوفليه شوكولاتة , 7 تشورز",
          he: "קרפ ממולא, וופל, 10 פשאפיש, 10 דגיגים, עוגת גבינה/סופלה שוקולד, 7 צ׳ורוס",
          en: "Stuffed crepe, waffle, 10 Fshafish, 10 chocolate fish, cheesecake/chocolate soufflé, 7 churros",
        },
        price: "200",
        image: "",
      },
    ],
  },

  // ---------------- COLD DRINKS ----------------
  {
    id: "cold_drinks",
    title: { ar: "مشروبات بارده", he: "שתייה קרה", en: "Cold Drinks" },
    items: [
      { name: { ar: "كوكاكولا", he: "קוקה קולה", en: "Coca-Cola" }, price: "10", image: "" },
      { name: { ar: "كولا زيرو", he: "קולה זירו", en: "Coke Zero" }, price: "10", image: "" },
      { name: { ar: "سبرايت", he: "ספרייט", en: "Sprite" }, price: "10", image: "" },
      { name: { ar: "صودا", he: "סודה", en: "Soda" }, price: "10", image: "" },
      { name: { ar: "XL", he: "XL", en: "XL" }, price: "10", image: "" },
      { name: { ar: "Blue", he: "בלו", en: "Blue" }, price: "10", image: "" },
      { name: { ar: "xl موخيتو", he: "XL מוחיטו", en: "XL Mojito" }, price: "20", image: "" },
      { name: { ar: "قهوه بارده", he: "קפה קר", en: "Iced Coffee" }, price: "20", image: "" },
      { name: { ar: "قهوه بارده مع كريمه النسكافيه", he: "קפה קר עם קרם נסקפה", en: "Iced Coffee with Nescafé Cream" }, price: "25", image: "" },
    ],
  },

  // ---------------- HOT DRINKS ----------------
  {
    id: "hot_drinks",
    title: { ar: "مشروبات ساخنه", he: "שתייה חמה", en: "Hot Drinks" },
    items: [
      { name: { ar: "إسبريسو", he: "אספרסו", en: "Espresso" }, price: "8 / 10", image: "" },
      { name: { ar: "هفوخ", he: "הפוך", en: "Caffè Latte" }, price: "14 / 16", image: "" },
      { name: { ar: "نسكافيه", he: "נסקפה", en: "Nescafé" }, price: "14 / 16", image: "" },
      { name: { ar: "أمريكانو", he: "אמריקנו", en: "Americano" }, price: "12", image: "" },
      { name: { ar: "شوكو", he: "שוקו", en: "Choco" }, price: "14 / 16", image: "" },
      { name: { ar: "شوكولاته ساخنه", he: "שוקולד חם", en: "Hot Chocolate" }, price: "16 / 18", image: "" },
    ],
    notes: [{ ar: "حليب شوفان  +2", he: "חלב שיבולת שועל +2", en: "Oat milk +2" }],
  },
];