import { motion } from 'framer-motion'
import { Building2, MapPinned, ShieldCheck, Target } from 'lucide-react'

import { emailDisplay, emailHref, localAuthority, phoneDisplay, reveal, whatsappUrl } from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'

const localProofPoints = [
  {
    icon: Building2,
    title: 'Feito para empresa real, não para pitch de agência',
    text: 'A prioridade é organizar atendimento, presença digital e rotina comercial de quem depende de caixa todos os dias.',
  },
  {
    icon: Target,
    title: 'SEO local com intenção de compra',
    text: 'Sua empresa precisa aparecer quando alguém em Itajubá e região procura a solução e quer resolver agora.',
  },
  {
    icon: ShieldCheck,
    title: 'Estrutura para vender com mais segurança',
    text: 'Menos ruído no atendimento, mais clareza operacional e mais firmeza para fechar contratos e pedidos.',
  },
]

export function LocalAuthoritySection() {
  return (
    <section id="autoridade-local" className="section-panel px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div {...reveal()}>
          <span className="section-label">
            <MapPinned className="h-3.5 w-3.5 text-cyan-300" />
            Garantia e autoridade local
          </span>

          <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {localAuthority}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A CESP Business foi desenhada para resolver o que trava os negócios locais: baixa resposta, desorganização interna e pouca presença digital na hora da decisão de compra.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={whatsappUrl} className="px-7 py-4 text-sm sm:text-base">
              QUERO MAIS CLIENTES
            </CtaButton>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-300">
              Contato direto: {phoneDisplay} • {emailDisplay}
            </div>
          </div>

          <a href={emailHref} className="mt-4 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
            {emailDisplay}
          </a>
        </motion.div>

        <div className="space-y-4">
          {localProofPoints.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} {...reveal(0.1 + index * 0.06)} className="conversion-card bg-slate-950/65">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-200 shadow-2xl shadow-cyan-500/15">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}