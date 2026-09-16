import { ArrowUpRight, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const copy = {
  en: { badge: "PRODUCT REQUEST", title: "Can't find exactly what you need?", text: "Send your specifications, quantity, shipping details and reference images. Our sourcing team will review them and prepare the right options.", button: "Start a Product Request" },
  ar: { badge: "طلب منتج", title: "لم تجد المنتج المطلوب بالمواصفات المناسبة؟", text: "أرسل المواصفات والكمية وبيانات الشحن والصور المرجعية، وسيقوم فريق التوريد بمراجعتها وتجهيز الخيارات المناسبة.", button: "ابدأ طلب منتج" },
  zh: { badge: "产品需求", title: "没有找到完全符合需求的产品？", text: "发送规格、数量、运输信息和参考图片，我们的采购团队将审核并为您准备合适的方案。", button: "提交产品需求" },
  ru: { badge: "ЗАПРОС ТОВАРА", title: "Не нашли товар с нужными характеристиками?", text: "Отправьте характеристики, количество, данные доставки и изображения. Наша команда подготовит подходящие варианты.", button: "Создать запрос" },
  de: { badge: "PRODUKTANFRAGE", title: "Nicht genau das passende Produkt gefunden?", text: "Senden Sie Spezifikationen, Menge, Versanddetails und Referenzbilder. Unser Team stellt passende Optionen zusammen.", button: "Produktanfrage starten" },
  pl: { badge: "ZAPYTANIE PRODUKTOWE", title: "Nie znalazłeś dokładnie tego, czego potrzebujesz?", text: "Prześlij specyfikację, ilość, dane wysyłki i zdjęcia referencyjne. Nasz zespół przygotuje odpowiednie opcje.", button: "Rozpocznij zapytanie" },
};

const ProductRequestCTA = ({ categorySlug }) => {
  const { lang } = useLanguage();
  const content = copy[lang] || copy.en;
  const isAr = lang === "ar";

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-neutral-950 shadow-[0_28px_80px_rgba(0,0,0,0.18)] lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="p-8 sm:p-11 lg:p-14">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-red-500">
            <ClipboardList size={18} /> {content.badge}
          </div>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">{content.title}</h2>
          <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-neutral-400 sm:text-base">{content.text}</p>
        </div>
        <div className="px-8 pb-10 lg:px-14 lg:pb-0">
          <Link
            to={`/request/${categorySlug}`}
            className="inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            {content.button}<ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductRequestCTA;
