import { motion } from 'framer-motion'

import {
  localAuthority,
  reveal,
  serviceCards,
  trustSignals,
  whatsappUrl,
} from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'
import { SectionIntro } from './ui/SectionIntro'

export function ServicesSection() {
  return (
    <section id="servicos" className="section-panel px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
      <SectionIntro
        badge="Benefícios e Serviços"
        title="Sem jargão. Sem site decorativo. Só estrutura comercial para vender mais e operar melhor."
        description="A proposta aqui não é te entregar uma peça bonita e sumir. É montar os ativos digitais e operacionais que colocam seu negócio local para funcionar com mais caixa, velocidade e organização."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {serviceCards.map(({ icon: Icon, title, description }, index) => (
          <motion.article key={title} {...reveal(0.08 + index * 0.06)} className="service-card">
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 text-emerald-200 shadow-2xl shadow-emerald-500/20">
              <Icon className="h-8 w-8" />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {trustSignals.map(({ icon: Icon, title, text }, index) => (
          <motion.div key={title} {...reveal(0.16 + index * 0.06)} className="rounded-[28px] border border-white/10 bg-slate-950/65 p-5 shadow-2xl shadow-slate-950/60">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/6 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold tracking-[-0.04em] text-white">{title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-[34px] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/12 via-slate-900/95 to-cyan-500/12 px-6 py-7 shadow-2xl shadow-emerald-500/20 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Autoridade local
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
            {localAuthority}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-200">
            Quem quer vender na cidade precisa ser encontrado, responder rápido e operar com menos bagunça. É isso que a gente constrói.
          </p>
        </div>

        <div className="mt-6 lg:mt-0">
          <CtaButton href={whatsappUrl} className="w-full justify-center px-7 py-4 text-sm sm:w-auto sm:text-base">
            QUERO UM SITE QUE VENDE
          </CtaButton>
        </div>
      </div>
    </section>
  )
}