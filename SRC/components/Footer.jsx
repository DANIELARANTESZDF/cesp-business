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

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-4 py-10 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <img src={brandLogo} alt="CESP Business" className="brand-glow h-16 w-auto sm:h-20" />
          <p className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-white">
            CESP Business
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
            Sistemas, catálogos e automações para transformar negócios locais em estruturas comerciais mais previsíveis. {localAuthority}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="inline-flex items-center gap-2">
            <MapPinned className="h-4 w-4 text-cyan-300" />
            {localAuthority}
          </p>
          <p className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-emerald-300" />
            {phoneDisplay}
          </p>
          <a href={emailHref} className="inline-flex items-center gap-2 transition hover:text-white">
            <Mail className="h-4 w-4 text-cyan-300" />
            {emailDisplay}
          </a>
        </div>

        <div className="lg:text-right">
          <CtaButton href={whatsappUrl} className="px-6 py-3.5 text-sm">
            FALAR NO WHATSAPP AGORA
          </CtaButton>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
            Copyright 2026 • CESP Business
          </p>
        </div>
      </div>
    </footer>
  )
}