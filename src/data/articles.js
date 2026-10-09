// Real blog posts of atryaelectronic.com — same titles, images and links as the
// original site. Images are local copies of the exact files the site uses
// (downloaded verbatim into public/wp-content/uploads); links open the same
// article on atryaelectronic.com.
import { CDN, SITE_URL } from './site'

const img = (path) => `${CDN}/${path}`
const post = (slug, title, path) => ({
  id: slug,
  title,
  image: img(path),
  url: `${SITE_URL}/${slug}/`,
})

export const articles = [
  post(
    'power-switching-fan-dar-ya-bedon-fan',
    'پاور سوئیچینگ فن‌دار یا بدون فن؟ راهنمای انتخاب هوشمندانه',
    '2026/09/power-fan-vs-fanless-atrya-500x500-1-300x300.webp',
  ),
  post(
    'rahnama-jame-manbe-taghzie-switching',
    'راهنمای جامع منبع تغذیه سوئیچینگ: از انتخاب ولتاژ تا کاربردهای صنعتی',
    '2026/09/راهنمای-جامع-منبع-تغذیه-سوئیچینگ-500x500-1-300x300.webp',
  ),
  post(
    'power-12v-10a-4-vs-5-capacitor',
    'پاور 12 ولت 10 آمپر با 4 خازن بهتره یا 5 خازن؟',
    '2026/09/power_12v_10a_4_vs_5_capacitors_atrya_500x500-300x300.webp',
  ),
  post(
    'tablo-led-sabet-pawer-12-ya-24-volt',
    'تابلو LED ثابت را با پاور ۲۴ ولت بسازیم یا ۱۲ ولت؟',
    '2026/09/led_panel_12v_vs_24v_atrya_500x500-300x300.webp',
  ),
  post(
    'pawer-eslim-24v-400w-vizhegi-va-karbord',
    'چرا پاور اسلیم ۲۴ ولت ۴۰۰ وات انتخاب اول پروژه‌های حرفه‌ای روشنایی است؟',
    '2026/09/power_slim_24v_400w_atrya_500x500-300x300.webp',
  ),
  post(
    'tafavot-led-hooshmand-va-sonati',
    'تفاوت LED هوشمند و سنتی: کدام برای خانه یا مغازه شما بهتر است؟',
    '2026/09/led-smart-vs-traditional-atrya-300x300.webp',
  ),
  post(
    'adaptor-khatti-ya-switching-baraye-noise',
    'برای جلوگیری از نویز، آداپتور خطی بهتر است یا سوئیچینگ؟',
    '2026/09/atrya-adaptor-noise-featured-500x500-1-300x300.jpg',
  ),
  post(
    'tashkhis-adaptor-asli-taghalobi',
    'تفاوت آداپتور اورجینال و تقلبی؛ چگونه تشخیص دهیم؟',
    '2026/09/tafarot-adaptor-original-fake-atrya-300x300.webp',
  ),
  post(
    'tasir-dama-bar-omr-power-switching',
    'تاثیر دما بر عمر پاور سوئیچینگ',
    '2026/09/atrya-tasir-dama-omr-power-featured-500x500-1-300x300.jpg',
  ),
  post(
    'tafavot-adaptor-va-charger',
    'تفاوت آداپتور و شارژر چیست؟ راهنمای فنی برای انتخاب درست',
    '2026/08/tafarot-adaptor-charger-atrya-300x300.webp',
  ),
  post(
    'behtarin-tablo-led-sabet',
    'بهترین تابلو ال ای دی ثابت چه ویژگی‌هایی دارد؟',
    '2026/08/ATRYA_LED_board_web-300x300.webp',
  ),
  post(
    'tafavot-led-kolahi-va-5mm',
    'تفاوت ال ای دی کلاهی و ال ای دی ۵ میل',
    '2026/08/led-kolahi-vs-5mm-difference-300x300.webp',
  ),
  post(
    'best-power-24v-15a-specs',
    'بهترین پاور 24 ولت 15 آمپر چه مشخصاتی دارد؟ راهنمای کامل انتخاب',
    'wp-content/uploads/2026/08/ATRYA_power_24V_15A.webp',
  ),
  post(
    'power-24v-20a-fan-cooled',
    'تشریح کامل پاور 24 ولت 20 آمپر فن‌دار؛ چرا این مدل انتخاب صنعتی‌هاست؟',
    'wp-content/uploads/2026/08/power-24v-20a-fandar.webp',
  ),
  post(
    'power-12v-10a-onyx',
    'پاور 12 ولت 10 آمپر ONYX',
    'wp-content/uploads/2026/08/power-12v-10a-onyx1.webp',
  ),
  post(
    'power-24v-vs-12v-10a',
    'مقایسه پاور 24 ولت 10 آمپر و 12 ولت 10 آمپر',
    'wp-content/uploads/2026/08/atrya-power-24v-vs-12v-10a-featured-500x500-1.jpg',
  ),
  post(
    'adaptor-ya-switching-5-amper',
    'آداپتور 5 آمپر یا سوییچینگ 5 آمپر؟ کدام را برای پروژه خود انتخاب کنیم؟',
    'wp-content/uploads/2026/08/atrya-adaptor-vs-switching-5a-featured-500x500-1.jpg',
  ),
  post(
    'karbord-power-slim-24v-100w',
    'کاربردهای پاور اسلیم 24 ولت 100 وات',
    'wp-content/uploads/2026/08/atrya-power-slim-24v-100w-applications.webp',
  ),
  post(
    'onyx-hat-dome-led-guide',
    'همه چیز درباره ال ای دی کلاهی ONYX',
    'wp-content/uploads/2026/08/Codex-Image-Aug-22-2026-11_02_59-AM.webp',
  ),
  post(
    'adaptor-12v-6a-complete-guide',
    'همه چیز درباره آداپتور 12 ولت 6 آمپر؛ از انتخاب تا نصب اصولی',
    'wp-content/uploads/2026/08/adapter_12v_6a_atrya_500x500.webp',
  ),
  post(
    'advantages-of-fixed-led-signboard-for-shops',
    'مزیت‌های ساخت تابلو LED ثابت برای مغازه چیست؟',
    'wp-content/uploads/2026/08/LED_fixed_shop_sign_Atrya_500x500.webp',
  ),
  post(
    'everything-about-led-oval-onyx',
    'همه چیز درباره‌ی LED اوال ONYX',
    'wp-content/uploads/2026/08/LED_Oval_ONYX_Atrya_500x500.webp',
  ),
  post(
    'pawer-24v-10a-karbord-asansor',
    'کاربردهای پاور ۲۴ ولت ۱۰ آمپر در آسانسور؛ از تابلو فرمان تا مدار ایمنی',
    'wp-content/uploads/2026/08/elevator-power-24v-10a-500x500-1.webp',
  ),
  post(
    'best-cctv-power-supply',
    'بهترین پاور برای دوربین مداربسته چیست؟ راهنمای خرید پاور ۱۲ ولت دوربین',
    'wp-content/uploads/2026/08/best-cctv-power-supply-500x500-1.webp',
  ),
  post(
    'adaptor-switching-baraye-radio-hasas',
    'آیا آداپتور سوئیچینگ برای رادیوهای حساس مناسب است؟ بررسی فنی و راه‌حل عملی',
    'wp-content/uploads/2026/08/ATRYA_adapter_radio_web.webp',
  ),
  post(
    'raveshaye-az-bein-bordan-noise-adapter',
    '۷ راهکار مهندسی برای از بین بردن نویز آداپتور',
    'wp-content/uploads/2026/08/atrya-noise-adapter-featured-image.webp',
  ),
  post(
    'power-eslim-chist',
    'پاور اسلیم چیست؟ همه چیزی که قبل از خرید باید بدانید',
    'wp-content/uploads/2026/08/Power-Slim-ATRYA.webp',
  ),
  post(
    'power-12v-20a-fan-cooled',
    'پاور ۱۲ ولت ۲۰ آمپر فن‌دار؛ راهکار خنک و پایدار برای مصرف‌های بالا',
    'wp-content/uploads/2026/08/atrya-power-12v-20a-fandar-featured-500x500-1.jpg',
  ),
  post(
    'elat-seda-pawer-switching',
    'علت صدا در پاور سوییچینگ',
    'wp-content/uploads/2026/08/atrya-noise-switching-psu-featured-500x500-1.jpg',
  ),
  post(
    'manbae-taghzie-switching-chist',
    'منبع تغذیه سوییچینگ چیست؟',
    'wp-content/uploads/2026/08/atrya-switching-psu-featured-500x500-1.jpg',
  ),
  post(
    'pawer-12v-30a-fan-onyx',
    'پاور ۱۲ ولت ۳۰ آمپر فن‌دار ONYX',
    'wp-content/uploads/2026/08/Power-12V-30A-ONYX-ATRYA.webp',
  ),
  post(
    'pawer-12-volt-10-amper',
    'پاور ۱۲ ولت ۱۰ آمپر',
    'wp-content/uploads/2026/08/power-12v-10a-chist-atrya.webp',
  ),
  post(
    'adaptor-chist-va-anvae-an',
    'آداپتور چیست؟',
    'wp-content/uploads/2026/07/adapter-chist-atrya.webp',
  ),
  post(
    'pixel-angoshti-rahnama-nasb',
    'پیکسل انگشتی',
    'wp-content/uploads/2026/07/pixel-angeshti-atrya.webp',
  ),
  post(
    'edge-ai-noorpardazi-hooshmand',
    'کاربرد Edge AI در سیستم‌های نورپردازی هوشمند خانگی',
    'wp-content/uploads/2026/07/Edge-AI-Home-Lighting-ATRYA.webp',
  ),
  post(
    'ai-led-sign-initial-design',
    'طراحی تابلو LED با هوش مصنوعی',
    'wp-content/uploads/2026/07/featured-image-500x500-1.webp',
  ),
  post(
    'adapter-5-amper-karbordha',
    'آداپتور 5 آمپر کجا استفاده می‌شود؟ راهنمای کامل کاربردها و انتخاب صحیح',
    'wp-content/uploads/2026/07/ATRYA-Adapter-5A-Article.webp',
  ),
  post(
    'led-kolahi-hat-led-guide',
    'همه‌چیز درباره ال‌ای‌دی کلاهی؛ از ساختار تا کاربرد در تابلوسازی',
    'wp-content/uploads/2026/07/ATRYA_LED_Article_500x500.webp',
  ),
  post(
    'tafavot-led-kolahi-va-oval',
    'LED کلاهی یا اوال؛ کدام‌یک برای پروژه شما مناسب‌تر است؟',
    'wp-content/uploads/2026/07/LED-کلاهی-یا-اوال-ATRYA.webp',
  ),
  post(
    'power-switching-24v-10a-guide',
    'راهنمای فنی انتخاب و کاربرد پاور سوییچینگ 24 ولت 10 آمپر',
    'wp-content/uploads/2026/07/ATRYA-Power-24V-10A.webp',
  ),
  post(
    'tasir-tablo-tablighati-dar-maghaze',
    'فروشنده‌ای که هیچ‌وقت نمی‌خوابد؛ تابلو مغازه شما چقدر برایتان کار می‌کند؟',
    'wp-content/uploads/2026/07/atrya-tasir-tablo-tablighati-featured-500x500-1.jpg',
  ),
  post(
    'behtarin-rang-tablo-led-baraye-moshtari',
    'چرا رنگ تابلو LED شما مهم‌تر از متن روی آن است؟',
    'wp-content/uploads/2026/07/atrya-behtarin-rang-tablo-led-featured-500x500-1.jpg',
  ),
  post(
    'blog-sakhtar-shematik-led-oval',
    'ساختار و شماتیک ال‌ای‌دی اوال؛ بررسی فنی کامل لایه‌ها، پارامترها و کاربردها',
    'wp-content/uploads/2026/07/LED_Oval_Featured_500x500.webp',
  ),
  post(
    '%d8%b4%d8%a7%d8%b1%da%98%d8%b1-%d9%84%d9%be%d8%aa%d8%a7%d9%be-%d8%b1%d8%a7-%d9%87%d9%85%db%8c%d8%b4%d9%87-%d8%a8%d9%87-%d8%a8%d8%b1%d9%82-%d9%88%d8%b5%d9%84-%d8%a8%da%af%d8%b0%d8%a7%d8%b1',
    'شارژر لپ‌تاپ را همیشه به برق وصل بگذاریم یا نه؟ حقیقت علمی درباره آسیب آداپتور به باتری و مادربرد',
    'wp-content/uploads/2026/07/atrya-laptop-adapter-featured-500x500-v2.jpg',
  ),
  post(
    '%d9%87%d9%88%d8%b4-%d9%85%d8%b5%d9%86%d9%88%d8%b9%db%8c-%d8%af%d8%b1-%d8%b5%d9%86%d8%b9%d8%aa-%d8%b1%d9%88%d8%b4%d9%86%d8%a7%db%8c%db%8c%d8%8c-led-%d9%88-%d9%85%d9%86%d8%a7%d8%a8%d8%b9-%d8%aa%d8%ba',
    'هوش مصنوعی در صنعت روشنایی، LED و منابع تغذیه؛ مروری جامع و دانشگاهی بر فناوری، فواید و چالش‌ها',
    'wp-content/uploads/2026/07/atrya-featured-500x500-1.webp',
  ),
  post(
    '%da%86%d8%b1%d8%a7-%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-%d9%85%db%8c%d8%b3%d9%88%d8%b2%d8%af%d8%9f-%d8%b1%db%8c%d8%b4%d9%87-%db%8c%d8%a7%d8%a8%db%8c',
    'چرا پاور سوئیچینگ می‌سوزد؟ ریشه‌یابی تخصصی سوختن مبدل‌های سوییچینگ به‌خاطر ماسفت بی‌کیفیت',
    'wp-content/uploads/2026/07/atrya-featured-image-500x500-1.jpg',
  ),
  post(
    '%d8%aa%d9%81%d8%a7%d9%88%d8%aa-%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%da%a9%d9%84%d8%a7%d9%87%db%8c-%d9%88-%d8%a7%d9%88%d8%a7%d9%84',
    'تفاوت ال ای دی کلاهی و اوال',
    'wp-content/uploads/2026/07/atrya-led-kolahi-vs-oval-featured.jpg',
  ),
  post(
    '%d8%a7%d8%b5%d9%88%d9%84-%d9%86%d9%88%d8%b1%d9%be%d8%b1%d8%af%d8%a7%d8%b2%db%8c-%d8%af%d8%b1-%d8%ae%d8%a7%d9%86%d9%87%d8%9b-%d8%b1%d8%a7%d8%b2-%d8%b7%d9%84%d8%a7%db%8c%db%8c-%d8%af%da%a9%d9%88%d8%b1',
    'اصول نورپردازی در خانه؛ راز طلایی دکوراسیون داخلی + ۸ ترفند حرفه‌ای',
    'wp-content/uploads/2026/07/featured-interior-500x500-1.jpg',
  ),
  post(
    'sakht-tablo-led-sabet',
    'ساخت تابلو LED ثابت از صفر تا صد | آموزش کامل + اجزا | آتریا الکترونیک',
    'wp-content/uploads/2026/06/تصویر-شاخص-تابلو-LED-ثابت-500x500-1.png',
  ),
  post(
    '%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%da%a9%d8%a7%d9%85%d9%84-%d9%82%d8%a8%d9%84-%d8%a7%d8%b2',
    'خرید ال ای دی نواری | راهنمای کامل قبل از خرید | آتریا الکترونیک',
    'wp-content/uploads/2026/06/featured_lux.png',
  ),
  post(
    'mohasebe-tavan-power-switching-led-2',
    'محاسبه توان پاور سوئیچینگ برای نوار و تابلو LED',
    'wp-content/uploads/2026/06/featured-image-mahasebe-tavan-power-led.png',
  ),
  post(
    '%d8%b1%d9%85%d8%b2-%d8%b9%d9%85%d9%84%da%a9%d8%b1%d8%af-%d9%be%db%8c%da%a9%d8%b3%d9%84%d9%87%d8%a7%db%8c-%d8%a2%d8%af%d8%b1%d8%b3%d9%be%d8%b0%db%8c%d8%b1-led',
    'رمز عملکرد پیکسل‌های آدرس‌پذیر LED',
    'wp-content/uploads/2026/06/تصویر-شاخص-پیکسل-LED-500x500-1.png',
  ),
  post(
    'cheap-lighting-hidden-costs',
    'چرا خرید تجهیزات روشنایی ارزان در نهایت گران‌تر تمام می‌شود؟',
    'wp-content/uploads/2026/06/lighting_article_feature_optimized-کم-حجم.webp',
  ),
  post(
    'blog-original-vs-fake-switching-power-supply',
    'راهنمای خرید پاور سوئیچینگ صنعتی؛ چطور اورجینال را از تقلبی تشخیص دهیم؟',
    'wp-content/uploads/2026/06/atrya-article2-featured.png',
  ),
  post(
    '%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-%db%8c%d8%a7-%d8%a2%d8%af%d8%a7%d9%be%d8%aa%d9%88%d8%b1%d8%9f',
    'پاور سوئیچینگ یا آداپتور؟',
    'wp-content/uploads/2026/06/atrya-infographic.png',
  ),
  post(
    '%da%86%da%af%d9%88%d9%86%d9%87-%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-%d9%85%d9%86%d8%a7%d8%b3%d8%a8-%d8%a7%d9%86%d8%aa%d8%ae%d8%a7%d8%a8-%da%a9%d9%86%db%8c%d9%85',
    'چگونه پاور سوئیچینگ مناسب انتخاب کنیم؟ راهنمای کامل خرید پاور 12 ولت',
    'wp-content/uploads/2026/05/ChatGPT-Image-May-25-2026-10_06_27-AM-1024x1024.png',
  ),
  post(
    '%d8%a7%db%8c%d8%b1%d8%a7%d8%af%d9%87%d8%a7%db%8c-%d8%b1%d8%a7%db%8c%d8%ac-%d8%af%d8%b1-%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-%d9%88-%d8%b1%d9%88%d8%b4',
    'ایرادهای رایج در پاور سوئیچینگ و روش‌های عیب‌یابی آن',
    'wp-content/uploads/2026/05/ChatGPT-Image-May-24-2026-02_43_27-PM-ATRYA-LOGO-1024x1024.png',
  ),
  post(
    'power-switching-24v-20a',
    'خرید پاور سوئیچینگ 24 ولت 20 آمپر | کاربردها، مزایا و معایب',
    'wp-content/uploads/2026/02/1d75076d-6f55-4b92-8912-775a0604a868.png',
  ),
  post(
    'onyx-switching-power-supply-review',
    'پاور سوئیچینگ ONYX | بررسی فنی، کیفیت ساخت و راهنمای خرید',
    'wp-content/uploads/2026/01/unnamed-1.jpg',
  ),
  post(
    'smps-design-guide',
    'راهنمای جامع طراحی منبع تغذیه سوئیچینگ (SMPS) | آتریا الکترونیک',
    'wp-content/uploads/2026/01/unnamed-40.jpg',
  ),
  post(
    'switching-power-supply-buying-guide',
    'راهنمای خرید منبع تغذیه سوئیچینگ | محاسبه توان، ولتاژ و انتخاب پاور مناسب',
    'wp-content/uploads/2025/12/unnamed-36-1.jpg',
  ),
  post(
    'ai-in-switching-power-supplies',
    'کاربرد هوش مصنوعی در منابع تغذیه سوئیچینگ؛ انقلابی در الکترونیک قدرت | آتریا الکترونیک',
    'wp-content/uploads/2025/12/6c10caad-9429-47b4-9244-69d1a60b9b2b.jpg',
  ),
  post(
    '%d8%aa%d9%81%d8%a7%d9%88%d8%aa-%d8%aa%d8%b1%d8%a7%d9%86%d8%b3-%d8%b3%d9%88%db%8c%db%8c%da%86%db%8c%d9%86%da%af-%d8%a8%d8%a7-%d8%aa%d8%b1%d8%a7%d9%86%d8%b3-%d9%87%d8%b3%d8%aa%d9%87-%d8%a2%d9%87%d9%86',
    'تفاوت ترانس سوییچینگ با ترانس هسته آهنی (معمولی)',
    'wp-content/uploads/2025/12/unnamed-35.jpg',
  ),
  post(
    '%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ac%d8%a7%d9%85%d8%b9-%d9%86%d9%88%d8%b1%d9%be%d8%b1%d8%af%d8%a7%d8%b2%db%8c-%d8%ae%d8%a7%d9%86%d9%87-%d9%87%d9%86%d8%b1-%d8%aa%d8%a8%d8%af%db%8c%d9%84',
    'راهنمای جامع نورپردازی خانه: هنر تبدیل فضا با جادوی نور (اصول، تکنیک‌ها و ترندها)',
    'wp-content/uploads/2025/12/adbd0dd9-a2fa-4ec0-8847-cfa545825435.png',
  ),
  post(
    '%d8%a2%db%8c%d9%86%d8%af%d9%87-%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-%d8%aa%d8%b1%d9%86%d8%af%d9%87%d8%a7-%d9%88-%d9%81%d9%86%d8%a7%d9%88%d8%b1%db%8c-%d8%ae%d8%b1',
    'آینده پاور سوئیچینگ: ترندها و فناوری‌های نوین',
    'wp-content/uploads/2025/12/unnamed-18.jpg',
  ),
  post(
    '%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-smps-%db%8c%d8%a7-%d9%87%d9%85%d9%88%d9%86-switched-mode-power',
    'پاور سوئیچینگ (SMPS): صفر تا صد عملکرد و اجزا',
    'wp-content/uploads/2025/11/unnamed-19.jpg',
  ),
  post(
    '%d8%aa%d8%b4%d8%b1%db%8c%d8%ad-%da%a9%d8%a7%d9%85%d9%84-%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87',
    'تشریح کامل منبع تغذیه',
    'wp-content/uploads/2025/11/unnamed.jpg',
  ),
  post(
    '%da%a9%d8%a7%d8%b1%d8%a8%d8%b1%d8%af-%d8%b3%db%8c%d8%b3%d8%aa%d9%85-%d9%87%d8%a7%db%8c-%d8%ae%d9%88%d8%b1%d8%b4%db%8c%d8%af%db%8c-%d8%af%d8%b1-%d8%ae%d8%a7%d9%86%d9%87-%d8%b3%d9%88%d9%84%d8%a7%d8%b1',
    'سولار',
    'wp-content/uploads/2025/11/400.400.jpg',
  ),
]
