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
]

export const getArticle = (id) => articles.find((a) => a.id === id)
