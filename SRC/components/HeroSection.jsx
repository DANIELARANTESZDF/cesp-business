import { motion } from 'framer-motion'
import { ArrowRight, BadgeDollarSign, MapPinned, Sparkles } from 'lucide-react'

import {
  brandLogo,
  heroStats,
  localAuthority,
  reveal,
  whatsappUrl,
} from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'

export function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <motion.div {...reveal()} className="relative z-10">
        <span className="section-label">
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
          Máquina digital para negócios locais
        </span>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200/90">
          <BadgeDollarSign className="h-4 w-4" />
          Mais lucro, menos improviso
        </p>

        <h1 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
          Transformamos o seu comércio local em uma máquina digital de vendas e organização.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          Sistemas, Catálogos e Automações que fazem empresas venderem e escalarem todos os dias.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaButton href={whatsappUrl} className="px-7 py-4 text-sm sm:text-base">
            QUERO UM SITE QUE VENDE
          </CtaButton>
          <CtaButton href={whatsappUrl} variant="secondary" className="px-7 py-4 text-sm sm:text-base">
            QUERO MAIS CLIENTES
          </CtaButton>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
          <MapPinned className="h-4 w-4 text-cyan-300" />
          <span>{localAuthority}</span>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <span className="hidden sm:inline">Google, WhatsApp e operação alinhados para vender mais.</span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {heroStats.map(({ value, label }, index) => (
            <motion.div key={value} {...reveal(0.08 + index * 0.06)} className="metric-card">
              <p className="text-4xl font-black tracking-[-0.07em] text-white sm:text-5xl">
                <span className="accent-gradient">{value}</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.aside {...reveal(0.14)} className="section-panel section-panel-muted relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_26%),radial-gradient(circle_at_80%_22%,rgba(6,182,212,0.22),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.65),transparent_48%)]" />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                O que muda quando a casa entra no eixo
              </p>
              <h2 className="mt-3 max-w-md font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Você para de apagar incêndio e começa a operar com previsibilidade.
              </h2>
            </div>

            <img src={brandLogo} alt="CESP Business" className="brand-glow hidden h-16 w-auto lg:block" />
          </div>

          <div className="mt-8 space-y-4">
            {[
              'Site e catálogo preparados para captar demanda sem parecer vitrine morta.',
              'Atendimento organizado para reduzir o tempo entre interesse e fechamento.',
              'Operação interna mais clara para não perder dinheiro no caos do dia a dia.',
            ].map((item, index) => (
              <motion.div
                key={item}
                {...reveal(0.18 + index * 0.08)}
                className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-emerald-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/12 to-cyan-500/12 p-5 shadow-2xl shadow-emerald-500/20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
              Resultado comercial
            </p>
            <p className="mt-3 text-base leading-8 text-slate-100">
              Menos papel, menos atraso, menos cliente escapando. Mais controle, mais resposta e mais vendas no fluxo certo.
            </p>
          </div>
        </div>
      </motion.aside>
    </section>
  )
}