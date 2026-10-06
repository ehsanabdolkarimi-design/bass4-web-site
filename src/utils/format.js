// Persian number & price formatting helpers
const FA_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export const toFa = (v) => String(v).replace(/\d/g, (d) => FA_DIGITS[Number(d)])

/** 5,000,000 → «۵٬۰۰۰٬۰۰۰ تومان» */
export const faPrice = (n) => `${n.toLocaleString('fa-IR')} تومان`

export const faDate = (iso) => new Date(iso).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' })
