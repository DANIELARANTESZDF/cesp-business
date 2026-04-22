import {
  Bot,
  CalendarClock,
  ChartColumnIncreasing,
  CircleDollarSign,
  Gauge,
  Globe,
  LineChart,
  MapPinned,
  MessageCircleWarning,
  PhoneCall,
  Quote,
  SearchX,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  SquareDashedBottomCode,
} from 'lucide-react'

export const assetBase = import.meta.env.BASE_URL
export const brandLogo = `${assetBase}cesp-business-logo.svg`
export const brandMark = `${assetBase}cesp-business-mark.svg`

export const phoneDisplay = '(17) 99184-5380'
export const emailDisplay = 'administrativo@cespestagio.com.br'
export const emailHref = 'mailto:administrativo@cespestagio.com.br'
export const whatsappNumberPlaceholder = '55DDDNUMERO'
export const whatsappMessage = 'Olá, quero digitalizar minha empresa'
export const whatsappUrl = `https://wa.me/${whatsappNumberPlaceholder}?text=${encodeURIComponent(whatsappMessage)}`
export const localAuthority = 'Acelerando negócios em Itajubá e região.'
export const whatsappProofAssetName = 'image_18.png'

export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
})

export const heroStats = [
  {
    value: '24h',
    label: 'Captação funcionando mesmo fora do horário comercial',
  },
  {
    value: '3',
    label: 'Frentes integradas: Google, WhatsApp e operação interna',
  },
  {
    value: '1',
    label: 'Parceiro para vender, organizar e acelerar a empresa',
  },
]

export const painPoints = [
  {
    icon: MessageCircleWarning,
    title: 'Vendas escorrendo no WhatsApp',
    description: 'Lead pede orçamento, espera demais e fecha com quem responde primeiro.',
  },
  {
    icon: SquareDashedBottomCode,
    title: 'Controle no papel e no improviso',
    description: 'Caixa, pedidos e rotina viram retrabalho, atraso e falta de visão do lucro.',
  },
  {
    icon: SearchX,
    title: 'Sua empresa some do Google',
    description: 'Quem procura a solução na cidade encontra concorrente, não encontra você.',
  },
]

export const solutionPillars = [
  {
    icon: Gauge,
    title: 'Automação que acelera resposta',
    description: 'Fluxos, atendimento e recuperação de oportunidades sem depender de memória ou correria.',
  },
  {
    icon: CircleDollarSign,
    title: 'Organização que protege o caixa',
    description: 'Processos mais claros para o dono enxergar pedidos, operação e entrada de dinheiro.',
  },
  {
    icon: Globe,
    title: 'Presença digital que gera demanda',
    description: 'Site, catálogo e SEO local para sua empresa ser encontrada e escolhida todos os dias.',
  },
]

export const serviceCards = [
  {
    icon: ShoppingCart,
    title: 'Catálogos e cardápios que vendem',
    description: 'Experiências simples, rápidas e comerciais para transformar visita em pedido no WhatsApp.',
  },
  {
    icon: CalendarClock,
    title: 'Agendamento 24h sem perder cliente',
    description: 'Captação e confirmação contínuas para quem precisa vender mesmo fora do balcão.',
  },
  {
    icon: Bot,
    title: 'Atendimento automatizado com contexto',
    description: 'Fluxos e robôs orientados a conversão, triagem e ganho de tempo para a equipe.',
  },
  {
    icon: ChartColumnIncreasing,
    title: 'Sistemas internos de caixa e operação',
    description: 'Menos retrabalho, mais clareza do que entra, do que sai e do que precisa acontecer.',
  },
]

export const trustSignals = [
  {
    icon: Sparkles,
    title: 'Entrega em ritmo comercial',
    text: 'Sem projeto que se arrasta por meses enquanto a concorrência avança.',
  },
  {
    icon: PhoneCall,
    title: 'Direcionamento simples e direto',
    text: 'Sem jargão técnico. O foco é lucro, velocidade e previsibilidade.',
  },
  {
    icon: MapPinned,
    title: 'Visão local de crescimento',
    text: 'Posicionamento feito para negócios de Itajubá e região venderem mais perto de casa.',
  },
]

export const testimonials = [
  {
    icon: ShoppingBag,
    quoteIcon: Quote,
    name: 'Anderson',
    role: 'Fundador, CasaLúmina Outlet',
    body:
      'Mesmo sendo leigo em tecnologia, a clareza e a transparência do trabalho me deixaram muito tranquilo. A CESP Business não entregou apenas o que combinamos, eles foram muito além e criaram uma estrutura robusta para a minha loja. O resultado ficou tão bom que, antes mesmo de terminar, eu já separei um segundo projeto para fazermos juntos. Nível de profissionalismo altíssimo!',
    highlight: 'Mockup de WhatsApp',
  },
  {
    icon: LineChart,
    quoteIcon: Quote,
    name: 'Claudinei',
    role: 'Fundador, GranilPiso Itajubá',
    body:
      'Confesso que achei que ia ser uma dor de cabeça sem fim colocar minha empresa na internet. O Daniel e a CESP Business não só entregaram o site em tempo recorde, como ficou super fácil de mexer. O melhor de tudo é que os clientes já estão me achando no Google e me chamando no Zap. Valeu cada centavo!',
  },
]