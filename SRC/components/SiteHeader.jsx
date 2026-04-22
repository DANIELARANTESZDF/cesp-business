import { Mail, MapPinned, Phone } from 'lucide-react'

import {
  brandLogo,
  emailDisplay,
  emailHref,
  localAuthority,
  phoneDisplay,
  whatsappUrl,
} from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/78 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <img src={brandLogo} alt="CESP Business" className="brand-glow hidden h-14 w-auto sm:block" />

          <div className="min-w-0">
            <p className="truncate font-display text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">
              CESP Business
            </p>
            <div className="hidden items-center gap-3 text-xs text-slate-300 lg:flex">
              <span className="inline-flex items-center gap-1.5">
                <MapPinned className="h-3.5 w-3.5 text-emerald-300" />
                {localAuthority}
              </span>
              <span className="text-slate-600">•</span>
              <a href={emailHref} className="inline-flex items-center gap-1.5 transition hover:text-white">
                <Mail className="h-3.5 w-3.5 text-cyan-300" />
                {emailDisplay}
              </a>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-emerald-300" />
                {phoneDisplay}
              </span>
            </div>
          </div>
        </div>

        <CtaButton href={whatsappUrl} className="px-4 py-3 text-xs sm:px-6 sm:text-sm">
          FALAR NO WHATSAPP AGORA
        </CtaButton>
      </div>
    </header>
  )
}