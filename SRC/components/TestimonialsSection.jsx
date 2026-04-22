import { motion } from 'framer-motion'

import {
  reveal,
  testimonials,
  whatsappProofAssetName,
  whatsappUrl,
} from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'
import { SectionIntro } from './ui/SectionIntro'

function WhatsappProofImage({ imageSrc, imageAlt, label }) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0f172a]/80 p-3 shadow-2xl shadow-emerald-500/10">
      <div className="rounded-[24px] border border-emerald-300/15 bg-[#0b1019] p-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              {label}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Prova social simulada em formato de conversa. Asset: {whatsappProofAssetName}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
        </div>

        <img
          src={imageSrc}
          alt={imageAlt}
          className="mt-4 block w-full rounded-[20px] border border-white/8 bg-[#111b21]"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="prova-social" className="section-panel section-panel-muted px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
      <SectionIntro
        badge="💬 Depoimentos de Quem Cresceu"
        title="Do papel para o lucro digital: Histórias de quem acelerou seu negócio conosco."
        description={'O nosso padrão de entrega não é apenas "fazer um site", é criar máquinas de vendas reais e seguras para os donos de negócios locais.'}
        center
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.map(({ body, icon: Icon, name, proofAlt, proofImage, quoteIcon: QuoteIcon, role, highlight }, index) => (
          <motion.article key={name} {...reveal(0.08 + index * 0.08)} className="testimonial-card">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-200 shadow-2xl shadow-emerald-500/15">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-slate-200">
                <QuoteIcon className="h-5 w-5" />
              </div>
            </div>

            {highlight && proofImage ? (
              <div className="mt-6">
                <WhatsappProofImage imageSrc={proofImage} imageAlt={proofAlt} label={highlight} />
              </div>
            ) : null}

            <p className="mt-6 text-base leading-8 text-slate-200">"{body}"</p>

            <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold tracking-[-0.04em] text-white">{name}</p>
                <p className="text-sm text-slate-400">{role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton href={whatsappUrl} className="px-7 py-4 text-sm sm:text-base">
          FALAR NO WHATSAPP AGORA
        </CtaButton>
      </div>
    </section>
  )
}