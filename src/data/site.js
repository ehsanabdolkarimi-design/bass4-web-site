// ATRYA Electronic — site-wide content (nav, benefits, hours, contact)
// All external assets are the REAL brand assets from atryaelectronic.com

export const CDN = 'https://atryaelectronic.com/wp-content/uploads'

export const LOGO_HEADER = `${CDN}/2026/06/ATRYA-logo-header-optimized88888888888-350x100.webp`
export const LOGO_WHITE = `${CDN}/2026/06/ATRYA_Logo_500x500_White-300x300.png`
export const SITE_URL = 'https://atryaelectronic.com'
export const SITE_NAME = 'آتریا الکترونیک'
export const PHONE = '09126709618'
export const PHONE_INTL = '+989126709618'

export const navLinks = [
  { to: '/', label: 'صفحه اصلی' },
  { to: '/shop', label: 'فروشگاه' },
  { to: '/brands', label: 'برندها' },
  { to: '/articles', label: 'مقالات آموزشی' },
  { to: '/about', label: 'درباره ما' },
  { to: '/contact', label: 'تماس با ما' },
]

export const topBarItems = [
  { icon: 'truck', text: 'ارسال سریع' },
  { icon: 'shield', text: 'تضمین اصالت کالا' },
  { icon: 'chat', text: 'پشتیبانی تخصصی' },
  { icon: 'phone', text: PHONE, href: `tel:${PHONE_INTL}` },
]

export const benefits = [
  { icon: 'truck', title: 'ارسال سریع', text: 'ارسال به سراسر ایران' },
  { icon: 'shield', title: 'ضمانت اصالت کالا', text: 'کالای اورجینال با گارانتی' },
  { icon: 'chat', title: 'مشاوره تخصصی', text: 'پیش از خرید، با کارشناس' },
  { icon: 'gear', title: 'پشتیبانی فنی', text: 'پاسخ به سوالات فنی شما' },
  { icon: 'check', title: 'تضمین کیفیت', text: 'کالکشن تست‌شده و استاندارد' },
  { icon: 'lock', title: 'پرداخت امن', text: 'درگاه پرداخت مطمئن' },
]

export const whyAtrya = [
  { icon: 'chat', title: 'مشاوره تخصصی', text: 'کارشناسان ما پیش از خرید، ولتاژ و آمپراژ مناسب پروژه شما را دقیق محاسبه می‌کنند.' },
  { icon: 'shield', title: 'ضمانت اصالت کالا', text: 'تمام محصولات با فاکتور رسمی و ضمانت اصالت عرضه می‌شوند.' },
  { icon: 'grid', title: 'تنوع محصولات', text: 'از پاورهای صنعتی فن‌دار تا پاورهای اسلیم، ضد آب، آداپتور و محصولات LED.' },
  { icon: 'truck', title: 'ارسال سریع', text: 'سفارش‌ها در سریع‌ترین زمان ممکن به سراسر کشور ارسال می‌شود.' },
  { icon: 'gear', title: 'پشتیبانی فنی', text: 'پس از خرید هم در کنار شما هستیم؛ نصب و رفع اشکال را راهنمایی می‌کنیم.' },
  { icon: 'tag', title: 'قیمت رقابتی', text: 'قیمت‌گذاری منصفانه و به‌روز با کیفیت تضمین‌شده.' },
]

export const businessHours = [
  { days: 'شنبه تا چهارشنبه', hours: 'ساعت ۹ الی ۱۷' },
  { days: 'پنجشنبه', hours: 'ساعت ۹ الی ۱۳' },
  { days: 'جمعه', hours: 'تعطیل' },
]
