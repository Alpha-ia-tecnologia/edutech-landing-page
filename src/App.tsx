import { motion } from 'motion/react';
import { BookOpen, Brain, LineChart, Users, Sparkles, ChevronRight, Bot, Target, ShieldCheck, Zap, ArrowRight, Smartphone } from 'lucide-react';

const products = [
  {
    id: 'readquest',
    title: 'ReadQuest AI',
    subtitle: 'Sistema de Leitura e Fluência Gamificado',
    description: 'Uma plataforma educacional de nova geração que utiliza Inteligência Artificial para mensurar, acompanhar e desenvolver a fluência de leitura de alunos do Ensino Fundamental.',
    features: [
      { icon: Bot, text: 'Tutor Conversacional (Leko) com IA Generativa' },
      { icon: Zap, text: 'Avaliação de fluência em tempo real com ASR' },
      { icon: Target, text: 'Planos de ação pedagógica automatizados' },
      { icon: Sparkles, text: 'Gamificação adaptativa estilo Duolingo' },
    ],
    image: '/images/readquest-ai.png',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'portal',
    title: 'Portal do Educador',
    subtitle: 'Rede Social Colaborativa e Formação',
    description: 'Um ambiente digital completo para a Rede Municipal de Ensino, unindo comunicação, trilhas de aprendizagem e ferramentas de IA para apoiar o trabalho docente.',
    features: [
      { icon: Users, text: 'Feed social e comunidades de prática' },
      { icon: BookOpen, text: 'Trilhas de formação continuada com certificação' },
      { icon: Brain, text: 'Assistente de IA para planos de aula e avaliações' },
      { icon: LineChart, text: 'Dashboards integrados de indicadores SAEB/IDEB' },
    ],
    image: '/images/portal-educador.png',
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 'gestao',
    title: 'Gestão de Resultados Mobile',
    subtitle: 'Avaliação Inteligente e Tutoria',
    description: 'Plataforma mobile para realização de atividades e identificação de pontos de melhoria, utilizando IA para personalizar o aprendizado e alinhar às diretrizes da BNCC.',
    features: [
      { icon: Target, text: 'Avaliação e atividades adaptativas' },
      { icon: LineChart, text: 'Painéis de controle (dashboards) em tempo real' },
      { icon: Bot, text: 'Chatbots atuando como tutores virtuais 24/7' },
      { icon: Smartphone, text: 'Totalmente responsivo e acessível via mobile' },
    ],
    image: '/images/gestao-resultados.png',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'livros',
    title: 'Pensamento Computacional',
    subtitle: 'Coleção Didática BNCC',
    description: 'Material didático completo focado no desenvolvimento do pensamento computacional, abrangendo desde a Educação Infantil até o 9º ano do Ensino Fundamental.',
    features: [
      { icon: BookOpen, text: 'Alinhamento integral à BNCC' },
      { icon: Brain, text: 'Foco em resolução de problemas e lógica' },
      { icon: Users, text: 'Metodologias ativas de aprendizagem' },
      { icon: Sparkles, text: 'Preparação para o futuro digital' },
    ],
    image: '/images/pensamento-computacional.png',
    color: 'from-orange-500 to-amber-500'
  }
];

const benefits = [
  {
    title: 'Inteligência Artificial',
    description: 'Algoritmos avançados para personalização do ensino, avaliação automatizada e tutoria inteligente.',
    icon: Brain,
  },
  {
    title: 'Alinhamento à BNCC',
    description: 'Todas as soluções são rigorosamente mapeadas e alinhadas às habilidades da Base Nacional Comum Curricular.',
    icon: Target,
  },
  {
    title: 'Decisões Baseadas em Dados',
    description: 'Dashboards intuitivos e análises preditivas para gestores e educadores acompanharem o desempenho em tempo real.',
    icon: LineChart,
  },
  {
    title: 'Engajamento e Gamificação',
    description: 'Mecânicas comprovadas para aumentar a motivação e a retenção dos alunos no processo de aprendizagem.',
    icon: Sparkles,
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 font-display">EduTech Solutions</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Benefícios</a>
            <a href="#produtos" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Produtos</a>
            <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-indigo-600 transition-colors shadow-sm">
              Falar com Consultor
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/education/1920/1080?blur=10')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Inovação em Tecnologia Educacional</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl max-w-4xl mx-auto font-display"
          >
            Transformando a Educação com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Inteligência Artificial</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto"
          >
            Um ecossistema completo de soluções educacionais que unem tecnologia de ponta, gamificação e alinhamento à BNCC para potencializar o ensino e a aprendizagem nos municípios brasileiros.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a href="#produtos" className="px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center gap-2">
              Conhecer Soluções <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display">Nosso Portfólio</h2>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">Ferramentas desenvolvidas para atender aos maiores desafios da educação básica, promovendo equidade e eficiência.</p>
          </div>

          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductSection key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-10 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-6">Pronto para transformar a educação no seu município?</h2>
          <p className="text-indigo-100 text-lg mb-10">Agende uma demonstração gratuita e descubra como nossas soluções podem impulsionar os resultados da sua rede de ensino.</p>
          <button className="px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-slate-50 transition-colors shadow-lg">
            Solicitar Demonstração
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white font-display">EduTech Solutions</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 EduTech Solutions. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProductSection({ product, index }: { product: any, index: number, key?: string }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col gap-12 lg:gap-20 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex-1 w-full"
      >
        {/* Modern image container with decorative elements */}
        <div className="relative group">
          {/* Decorative gradient blob behind the image */}
          <div className={`absolute -inset-4 bg-gradient-to-br ${product.color} rounded-[2.5rem] opacity-15 blur-2xl group-hover:opacity-25 transition-all duration-700 group-hover:scale-105`} />
          
          {/* Main image card */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/40 ring-1 ring-white/60">
            {/* Color overlay with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${product.color} opacity-10 group-hover:opacity-5 transition-opacity duration-500 z-10`} />
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: 'transform 0.7s ease-in-out, opacity 0.3s' }} />
            
            {/* The image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            
            {/* Bottom gradient fade for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent z-10" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`absolute -bottom-3 ${isEven ? '-right-3 lg:-right-5' : '-left-3 lg:-left-5'} px-4 py-2 rounded-2xl bg-white shadow-lg shadow-slate-200/60 border border-slate-100 flex items-center gap-2 z-20`}
          >
            <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${product.color} animate-pulse`} />
            <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{product.subtitle}</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex-1 space-y-8"
      >
        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-indigo-600 mb-3">{product.subtitle}</h3>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl font-display">{product.title}</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        <ul className="space-y-4">
          {product.features.map((feature: any, i: number) => (
            <motion.li 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 group/item"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center mt-0.5 border border-indigo-100/60 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                <feature.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="text-slate-700 font-medium pt-2">{feature.text}</span>
            </motion.li>
          ))}
        </ul>

        <div className="pt-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 font-bold hover:from-indigo-100 hover:to-violet-100 transition-all duration-300 shadow-sm hover:shadow-md group/btn border border-indigo-100/50">
            Saber mais sobre {product.title}
            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}