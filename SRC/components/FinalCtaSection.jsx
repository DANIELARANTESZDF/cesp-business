import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

import {
  emailDisplay,
  emailHref,
  localAuthority,
  phoneDisplay,
  reveal,
  whatsappUrl,
} from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'

export function FinalCtaSection() {
  return (
    <motion.section
      {...reveal()}
      id="contato"
      className="section-panel section-panel-muted px-6 py-12 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="relative overflow-hidden rounded-[36px] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/14 via-slate-950/96 to-cyan-500/16 px-6 py-10 shadow-2xl shadow-emerald-500/20 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.2),transparent_30%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="section-label justify-center">Última dobra antes do concorrente</span>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Se o seu negócio local precisa vender mais, organizar melhor e parar de perder lead, a hora é agora.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
            {localAuthority} A conversa começa no WhatsApp e já sai com direção comercial clara, sem enrolação e sem reunião vazia.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href={whatsappUrl} className="w-full justify-center px-7 py-4 text-sm sm:w-auto sm:text-base">
              FALAR NO WHATSAPP AGORA
            </CtaButton>
            <CtaButton href={whatsappUrl} variant="secondary" className="w-full justify-center px-7 py-4 text-sm sm:w-auto sm:text-base">
              QUERO UM SITE QUE VENDE
            </CtaButton>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-300" />
              {phoneDisplay}
            </span>
            <a href={emailHref} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4 text-cyan-300" />
              {emailDisplay}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}