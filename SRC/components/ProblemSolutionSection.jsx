import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { painPoints, reveal, solutionPillars, whatsappUrl } from '../content/landingContent'
import { CtaButton } from './ui/CtaButton'
import { SectionIntro } from './ui/SectionIntro'

export function ProblemSolutionSection() {
  return (
    <section id="problema-solucao" className="section-panel section-panel-muted px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
      <SectionIntro
        badge="Problema vs. Solução"
        title="O dinheiro some quando o atendimento falha, a operação desorganiza e o Google não trabalha para você."
        description="A CESP Business entra exatamente nesses pontos: organiza o fluxo interno, acelera a resposta comercial e posiciona sua empresa para ser encontrada e chamada."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-200/80">
            Onde você está perdendo dinheiro hoje
          </p>
          {painPoints.map(({ icon: Icon, title, description }, index) => (
            <motion.article key={title} {...reveal(0.08 + index * 0.06)} className="conversion-card border-rose-400/10 bg-slate-950/70">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-400/10 text-rose-200 shadow-2xl shadow-rose-500/10">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
            O que entra no lugar do caos
          </p>
          {solutionPillars.map(({ icon: Icon, title, description }, index) => (
            <motion.article key={title} {...reveal(0.12 + index * 0.06)} className="conversion-card border-emerald-400/15 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-200 shadow-2xl shadow-emerald-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-200">{description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 rounded-[32px] border border-white/10 bg-slate-950/60 px-6 py-6 shadow-2xl shadow-cyan-500/10 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
          Se o seu comercial depende de sorte, boa vontade e correria, você está deixando faturamento na mesa. Estruture isso agora.
        </p>
        <CtaButton href={whatsappUrl} className="w-full justify-center px-6 py-4 text-sm sm:w-auto sm:text-base">
          QUERO MAIS CLIENTES
        </CtaButton>
      </div>
    </section>
  )
}