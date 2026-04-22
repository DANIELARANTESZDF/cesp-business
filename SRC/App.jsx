import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Clock3,
  FileText,
  Globe,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Workflow,
} from 'lucide-react'

const brandLogo = '/cesp-business-logo.png'
const brandMark = '/cesp-business-mark.svg'
const phoneDisplay = '(17) 99184-5380'
const phoneHref = 'tel:+5517991845380'
const whatsappUrl =
  'https://wa.me/5517991845380?text=Ol%C3%A1%2C%20quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20digitalizar%20minha%20empresa%20e%20vender%20mais.'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
})

const heroSignals = [
  {
    icon: Sparkles,
    label: 'Entrega acelerada',
    text: 'Da ideia à implantação com velocidade comercial, não com cronograma de agência lenta.',
  },
  {
    icon: Clock3,
    label: 'Atendimento sem gargalo',
    text: 'WhatsApp, agendamento e funil funcionando de forma contínua, inclusive fora do horário.',
  },
  {
    icon: ShieldCheck,
    label: 'Operação com controle',
    text: 'Menos improviso, mais clareza sobre pedidos, fluxo e oportunidades de venda.',
  },
]

const problems = [
  {
    icon: MessageCircle,
    text: 'Perde vendas no WhatsApp porque demora a responder.',
  },
  {
    icon: FileText,
    text: 'Não sabe o lucro real porque o controle é no papel.',
  },
  {
    icon: Search,
    text: 'Sumiu do Google e ninguém te acha na cidade.',
  },
]

const solutions = [
  {
    icon: ShoppingCart,
    title: '🛒 Vendas & Captação',
    description:
      'Sites de alta conversão, Catálogos e Cardápios Digitais Integrados, e Gestão de Anúncios (Tráfego Pago) para lotar seu WhatsApp de clientes.',
  },
  {
    icon: Bot,
    title: '🤖 Atendimento com Inteligência Artificial',
    description:
      'Robôs de WhatsApp hiper-realistas (integrados com IA) que vendem e tiram dúvidas por você, além de Sistemas de Agendamento 24h.',
  },
  {
    icon: Workflow,
    title: '📊 Gestão & Automação',
    description:
      'Sistemas Internos Sob Medida para Caixa e Estoque, CRMs de Fidelização e Automação de tarefas chatas e repetitivas.',
  },
  {
    icon: Globe,
    title: '📍 Presença de Marca',
    description:
      'Domínio total do Google Meu Negócio, Criação de Logotipos, Banners e Máquina de Avaliações 5 estrelas.',
  },
]

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(16,185,129,0.18),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.09),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <a href="#top" aria-label="CESP Business" className="inline-flex items-center">
              <img
                src={brandLogo}
                alt="CESP Business"
                className="brand-glow hidden h-12 w-auto sm:block lg:h-14"
              />
              <span className="brand-frame inline-flex items-center gap-3 sm:hidden">
                <img src={brandMark} alt="" aria-hidden="true" className="h-9 w-9" />
                <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-zinc-100">
                  CESP Business
                </span>
              </span>
            </a>

            <a
              href={phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-emerald-300/30 hover:text-white lg:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-300" />
              {phoneDisplay}
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="neon-button px-4 py-3 text-xs sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Falar com Consultor
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 pb-8 pt-4 lg:grid-cols-[1.08fr_0.92fr] lg:pt-10">
          <motion.div {...reveal()} className="relative z-10">
            <div className="brand-frame mb-6 inline-flex items-center justify-center">
              <img
                src={brandLogo}
                alt="CESP Business"
                className="brand-glow h-20 w-auto sm:h-24 lg:h-28"
              />
            </div>

            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
              🚀 Pare de perder vendas para a concorrência.
            </span>

            <p className="mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.22em] text-amber-300/85 sm:text-[0.92rem]">
              Enquanto você demora para responder, seu concorrente fecha a venda.
            </p>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-zinc-50 sm:text-5xl lg:text-7xl">
              Seu negócio está deixando dinheiro na mesa por não estar digitalizado.
              Nós resolvemos isso em dias.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Esqueça o caderninho, as planilhas confusas e o WhatsApp
              desorganizado. A CESP Business implementa Sistemas, Catálogos
              Inteligentes e Automações que fazem sua empresa vender 24h por dia.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="neon-button">
                Quero Digitalizar Minha Empresa
                <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#solucoes" className="ghost-button">
                Ver Soluções
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                Atendimento 24h
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                Google + WhatsApp + Operação
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                Foco em lucro e ganho de tempo
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-300 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-emerald-300 transition hover:text-emerald-200"
              >
                <Phone className="h-4 w-4" />
                WhatsApp direto: {phoneDisplay}
              </a>
              <span className="hidden text-zinc-600 sm:inline">•</span>
              <span>Diagnóstico gratuito, resposta rápida e conversa comercial sem enrolação.</span>
            </div>
          </motion.div>

          <motion.aside
            {...reveal(0.12)}
            className="glass-card relative overflow-hidden p-6 sm:p-8"
            aria-label="Resumo estratégico da CESP Business"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.16),transparent_30%)]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                    Máquina de conversão
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-3xl">
                    Mais resposta. Mais pedidos. Mais controle.
                  </h2>
                </div>

                <div className="highlight-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {heroSignals.map(({ icon: Icon, label, text }, index) => (
                  <motion.div
                    key={label}
                    {...reveal(0.16 + index * 0.08)}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/6 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-50">{label}</h3>
                        <p className="mt-1 text-sm leading-7 text-zinc-300">{text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-sm leading-7 text-emerald-50">
                  Implantação enxuta, discurso simples e entrega orientada a
                  resultado para transformar tecnologia em caixa, velocidade e
                  presença digital real.
                </p>
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section {...reveal()} id="problemas" className="pt-16 sm:pt-24">
          <div className="max-w-3xl">
            <span className="section-label">Gatilho de Identificação</span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">
              Se você sofre com isso, nós somos a cura:
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {problems.map(({ icon: Icon, text }, index) => (
              <motion.article
                key={text}
                {...reveal(0.08 + index * 0.06)}
                className="glass-card group relative overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%)]" />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6 text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-500">0{index + 1}</span>
                  </div>
                  <p className="text-lg font-semibold leading-8 text-zinc-50">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal()} id="solucoes" className="pt-16 sm:pt-24">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="section-label">O Arsenal Completo</span>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">
              Nossas Soluções
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {solutions.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                {...reveal(0.08 + index * 0.06)}
                className="glass-card group relative overflow-hidden p-6 sm:p-7"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.14),transparent_24%)]" />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-white/6 text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.12)] transition duration-500 group-hover:-translate-y-1 group-hover:text-cyan-300">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-zinc-50">
                      {title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-zinc-300">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal()} id="metodologia" className="pt-16 sm:pt-24">
          <div className="glass-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <span className="section-label">Por que a CESP Business?</span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">
                Metodologia orientada a lucro.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8 text-zinc-200">
                Usamos tecnologia de ponta e Inteligência Artificial no
                desenvolvimento para entregar em 1/3 do tempo das agências
                tradicionais. Sem jargão técnico, focado apenas no seu Lucro.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-semibold text-zinc-50">Entrega em ritmo comercial</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-semibold text-zinc-50">Sem enrolação técnica</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-semibold text-zinc-50">Decisão guiada por lucro</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal()} id="contato" className="pb-10 pt-16 sm:pt-24">
          <div className="glass-card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_28%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="section-label">Urgência</span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl">
                O comércio vizinho já está se atualizando. E você?
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
                Clique agora e agende um diagnóstico gratuito do seu negócio.
              </p>

              <a
                href={phoneHref}
                className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                <Phone className="h-4 w-4" />
                {phoneDisplay}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-button mt-8 min-w-[260px] text-base"
              >
                Chamar no WhatsApp Agora
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-zinc-400 sm:px-6 lg:px-8">
        <img
          src={brandLogo}
          alt="CESP Business"
          className="brand-glow mx-auto h-20 w-auto max-w-[280px]"
        />
        <p className="mt-4 font-display text-base font-semibold text-zinc-100">
          CESP Business - Tecnologia e Estratégia.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 font-medium text-emerald-300 transition hover:text-emerald-200"
        >
          <Phone className="h-4 w-4" />
          {phoneDisplay}
        </a>
        <p className="mt-2">Transformando negócios locais com soluções digitais. Copyright 2026.</p>
      </footer>
    </div>
  )
}

export default App
