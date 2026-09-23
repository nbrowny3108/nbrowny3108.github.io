// Browny Date Widget — paste into the Scriptable app (free on the App Store)
// Then: long-press Home Screen → + → Scriptable → pick this script → Small or Medium
// Time zone: Australia/Melbourne   Locale: en-AU

const TZ = "Australia/Melbourne"
const LOCALE = "en-AU"

const now = new Date()
const fmt = (opts) => new Intl.DateTimeFormat(LOCALE, { timeZone: TZ, ...opts }).format(now)

const weekday = fmt({ weekday: "long" }).toUpperCase()
const monthFull = fmt({ month: "long" })
const day = fmt({ day: "numeric" })
const monthNum = fmt({ month: "numeric" })
const year = fmt({ year: "numeric" })
const time = fmt({ hour: "2-digit", minute: "2-digit", hour12: false })

const widget = new ListWidget()
widget.backgroundColor = new Color("#111111")
widget.setPadding(12, 14, 12, 14)

const w = widget.addText(weekday)
w.font = Font.boldSystemFont(11)
w.textColor = new Color("#FF453A")

const m = widget.addText(monthFull)
m.font = Font.boldSystemFont(16)
m.textColor = Color.white()

const d = widget.addText(day)
d.font = Font.boldSystemFont(42)
d.textColor = Color.white()

const n = widget.addText(`${day}/${monthNum}/${year}   ${time}`)
n.font = Font.mediumSystemFont(12)
n.textColor = new Color("#8E8E93")

widget.addSpacer()
const b = widget.addText("BROWNY")
b.font = Font.semiboldSystemFont(9)
b.textColor = new Color("#636366")

if (config.runsInWidget) {
  Script.setWidget(widget)
} else {
  widget.presentSmall()
}
Script.complete()
