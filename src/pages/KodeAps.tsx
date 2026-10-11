import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BarChart3, Users, MapPin, FileCheck, AlertTriangle, FileX,
  SearchX, PieChart, Clock, TrendingUp, ShieldCheck, CheckCircle2, AlertCircle,
  Copy, UserX, UserCheck, Calendar, Stethoscope, ArrowUpRight, Database,
  RefreshCw, ArrowDown, Lock, UserCog, EyeOff, Server, Zap, Lightbulb, Map,
  Activity, LayoutDashboard, FileText, ChevronDown,
  ChevronUp, MessageCircle, Play, X, Syringe, Footprints, Receipt, ScrollText
} from 'lucide-react';

/* ─── Zoomable Image Component ─── */
const ZoomableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className || ''} cursor-zoom-in transition-opacity hover:opacity-90`}
        onClick={() => setIsOpen(true)}
        loading="lazy"
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 text-white/70 text-sm">{alt}</p>
        </div>
      )}
    </>
  );
};

/* ─── Data ─── */
const problems = [
  { icon: FileX, title: 'Planilhas manuais', desc: 'Horas perdidas consolidando dados em planilhas descentralizadas e propensas a erros.' },
  { icon: Users, title: 'Milhares de cadastros', desc: 'Dificuldade para acompanhar e validar milhares de cadastros de cidadãos sem ferramentas adequadas.' },
  { icon: SearchX, title: 'Pendências invisíveis', desc: 'Sem visibilidade clara de quem precisa de acompanhamento, boa prática ou atualização cadastral.' },
  { icon: PieChart, title: 'Relatórios dispersos', desc: 'Informações fragmentadas em diferentes telas do e-SUS, dificultando a visão consolidada.' },
  { icon: Clock, title: 'Análise demorada', desc: 'Tempo excessivo para transformar dados brutos em informações acionáveis para a gestão.' },
  { icon: AlertTriangle, title: 'Inconsistências cadastrais', desc: 'Dados incompletos, duplicados ou desatualizados que comprometem indicadores e repasses.' },
];

const solutionModules = [
  {
    icon: LayoutDashboard,
    title: 'Painel de Atendimento',
    desc: 'Visão geral e consolidada dos registros de atendimentos, com painéis personalizados por ESF/EAP, Odontológico e eMulti, e comparações por unidade/equipe.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    items: [
      'Painéis personalizados por tipo de equipe (ESF/EAP, Odonto, eMulti)',
      'Comparação de produção por unidade e equipe',
      'Visão consolidada de atendimentos',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade Cadastro',
    desc: 'Análise completa da integridade dos cadastros do cidadão, domiciliares e territoriais, com detecção automática de inconsistências e duplicidades.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    items: [
      'Cidadão PEC — Prontuário Cidadão',
      'Cadastros Domiciliares Territoriais',
      'Ficha de Cadastro Individual (FCI) e qualidade FCI',
      'Cidadãos Duplicados e Qualidade Cidadão PEC',
      'Geolocalização de Cadastro Domiciliar',
      'FCI Individual Nominal — Autorreferido ACS',
    ],
  },
  {
    icon: Footprints,
    title: 'Acompanhamento Território',
    desc: 'Monitoramento de visitas domiciliares, cobertura territorial e mapas inteligentes para planejamento das ações dos ACS/ACE.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    items: [
      'Visitas Domiciliares — Consolidado e Nominal',
      'Calendário mensal de visitas ACS/ACE',
      'Mapa Inteligente de Visitas (relevo/satélite)',
      'Cobertura de Visitas vs. metas municipais',
      'Mapa Inteligente Territorial de domicílios',
      'Beneficiários Bolsa Família cruzados com e-SUS',
      'IVCF-20+ para idosos ≥ 60 anos',
      'TRIA — Risco de Insegurança Alimentar',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Indicadores',
    desc: 'Monitoramento quantitativo e qualitativo do desempenho municipal, por equipe e por programas específicos.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    items: [
      'Desempenho Municipal geral',
      'Indicadores ESF/eAP (C1 a C7 + Vínculo)',
      'Indicadores eMULTI e eSB',
      'Indicadores POEPS (MG)',
      'Indicadores PSE — Saúde na Escola',
    ],
  },
  {
    icon: ScrollText,
    title: 'Relatórios',
    desc: 'Listagens nominais e consolidadas de atendimentos, prescrições, vacinação, condições de saúde e sincronizações.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    items: [
      'Atendimento Individual — nominal e consolidado',
      'Prescrição de Medicamentos',
      'Vacinação — Imunos (doses esperadas vs. aplicadas)',
      'Condições de Saúde Ativa (CID/CIAP)',
      'Sincronizações de ACS/ACE/TACS',
    ],
  },
  {
    icon: Receipt,
    title: 'Faturamento',
    desc: 'Extração e validação de procedimentos ambulatoriais do e-SUS PEC para geração do BPA magnético.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    items: [
      'BPA-I e BPA-C contra SIGTAP',
      'Validação de risco de glosa',
      'Geração de arquivo BPA magnético para SIA',
    ],
  },
  {
    icon: UserCog,
    title: 'Gestão e Logs',
    desc: 'Controle de profissionais, lotações, perfis de acesso e histórico completo de auditoria do sistema.',
    color: 'bg-slate-100',
    iconColor: 'text-slate-700',
    items: [
      'Profissionais — lotações, CBO e perfis de acesso',
      'Histórico de acessos e ações (últimos 3 meses)',
      'Auditoria de administradores e gestores',
    ],
  },
];

const cadastroFeatures = [
  { icon: AlertCircle, title: 'Inconsistências cadastrais', desc: 'Identificação automática de dados incompletos, campos obrigatórios não preenchidos e informações conflitantes.', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Copy, title: 'Cadastros duplicados', desc: 'Detecção de cidadãos com múltiplos cadastros no sistema, permitindo unificação e correção.', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: UserX, title: 'Dados desatualizados', desc: 'Alertas para cadastros que precisam de revisão ou atualização periódica pelas equipes.', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: MapPin, title: 'Geolocalização pendente', desc: 'Visualização de domicílios sem coordenadas geográficas registradas para planejamento territorial.', color: 'text-blue-600', bg: 'bg-blue-50' },
];

const steps = [
  { icon: Database, title: 'e-SUS PEC', desc: 'Dados brutos da Atenção Primária registrados pelas equipes no sistema nacional.', color: 'bg-slate-100', iconColor: 'text-slate-600' },
  { icon: BarChart3, title: 'Análise e organização', desc: 'Processamento dos registros em indicadores, cadastros e relatórios estruturados.', color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
  { icon: Users, title: 'Gestão e decisão', desc: 'Equipes e gestores agem com base em dados confiáveis e listas nominais.', color: 'bg-amber-50', iconColor: 'text-amber-600' },
];

const securityFeatures = [
  { icon: Lock, title: 'Acesso controlado', desc: 'Autenticação segura com perfis de usuário e controle de acesso por módulo.' },
  { icon: Database, title: 'Leitura sem alteração', desc: 'O sistema apenas lê os dados do e-SUS PEC, preservando a base original intacta.' },
  { icon: UserCog, title: 'Perfis e permissões', desc: 'Controle granular de acesso por equipe, unidade e função do profissional.' },
  { icon: EyeOff, title: 'Dados protegidos', desc: 'Arquitetura desenvolvida considerando boas práticas de proteção das informações.' },
];

const benefits = [
  { icon: Zap, title: 'Identifique problemas rapidamente', desc: 'Localize pendências sem depender de análises manuais extensas.', color: 'bg-amber-50', iconColor: 'text-amber-600' },
  { icon: Users, title: 'Direcione suas equipes', desc: 'Descubra onde estão os cidadãos que precisam de acompanhamento.', color: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: BarChart3, title: 'Acompanhe resultados', desc: 'Monitore indicadores de forma consolidada por equipe e unidade.', color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { icon: Clock, title: 'Reduza trabalho manual', desc: 'Centralize análises que normalmente dependeriam de várias planilhas.', color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
  { icon: Lightbulb, title: 'Tome decisões com dados', desc: 'Transforme registros do e-SUS em informação gerencial clara.', color: 'bg-orange-50', iconColor: 'text-orange-600' },
  { icon: Map, title: 'Monitore sua APS', desc: 'Tenha visão municipal, por unidade e equipe em um único lugar.', color: 'bg-rose-50', iconColor: 'text-rose-600' },
];


const screens = [
  {
    id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard,
    description: 'Visão geral com KPIs, alertas e acesso rápido aos módulos.',
    image: '/images/dashboards-overview.png',
  },
  {
    id: 'vacinação', label: 'Vacinação — Imunos', icon: Syringe,
    description: 'Doses esperadas vs. aplicadas por imunobiológico e cidadão.',
    image: '/images/vacinacao-imunos.png',
  },
  {
    id: 'nominal', label: 'Relatórios Nominais', icon: FileText,
    description: 'Listas nominais de cidadãos com pendências para ação das equipes.',
    image: '/images/nominal-indicadores.jpeg',
  },
  {
    id: 'nominal-pdf', label: 'Relatórios Nominais PDF', icon: FileCheck,
    description: 'Relatório nominal em PDF — padrão exportável (Indicador C5 Hipertensão).',
    image: '/images/relatorio-nominal-pdf.png',
  },
  {
    id: 'mapa-visitas', label: 'Mapa Inteligente de Visitas', icon: Map,
    description: 'Visualização em mapa das visitas domiciliares registradas com geolocalização.',
    image: '/images/mapa-visitas-acs.png',
  },
];

const faqs = [
  { q: 'O Kode APS substitui o e-SUS PEC?', a: 'Não. O Kode APS é uma plataforma complementar de análise e gestão que lê os dados do e-SUS PEC sem alterá-los, transformando registros brutos em informações gerenciais acionáveis.' },
  { q: 'O Kode APS altera os dados do e-SUS?', a: 'Não. A plataforma opera exclusivamente em modo leitura. Nenhuma informação é modificada, excluída ou inserida na base original do município.' },
  { q: 'É possível acompanhar diferentes equipes?', a: 'Sim. O sistema permite visualizar indicadores, cadastros e relatórios por equipe de Saúde da Família, unidade básica e visão municipal consolidada.' },
  { q: 'Existem relatórios nominais?', a: 'Sim. O Kode APS gera listas nominais de cidadãos com pendências, boas práticas realizadas e situações que exigem acompanhamento pelas equipes.' },
  { q: 'É possível acompanhar indicadores?', a: 'Sim. A plataforma monitora indicadores do Brasil 360, POEPS (MG), PSE e outros, com classificação visual automática e evolução temporal.' },
  { q: 'Como funciona a implantação?', a: 'A implantação é rápida e não exige infraestrutura complexa. Entre em contato para receber uma proposta personalizada conforme o porte do seu município.' },
];


const classifications = [
  { label: 'Regular', color: 'bg-[#c46500]' },
  { label: 'Suficiente', color: 'bg-[#d5ba0a]' },
  { label: 'Bom', color: 'bg-[#38ba38]' },
  { label: 'Ótimo', color: 'bg-[#1212b6]' },
];

/* ═══════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════ */
const KodeAps: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const currentScreen = screens.find((s) => s.id === activeScreen) || screens[0];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Plataforma de Inteligência APS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Gestão inteligente para uma{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">APS orientada por dados</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Transforme os dados do e-SUS APS em informações claras para melhorar cadastros, indicadores e resultados das equipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contato" className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-700/20 hover:shadow-blue-700/30 hover:-translate-y-0.5">
                  Solicitar Demonstração <ArrowRight size={18} />
                </Link>
                <a href="#funcionalidades" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-8 py-4 rounded-xl transition-all hover:border-blue-300">
                  <Play size={18} className="text-blue-600" /> Conhecer a Plataforma
                </a>
              </div>
              <p className="text-sm text-slate-400 max-w-md">Compatível com e-SUS PEC • Dados em tempo real • Sem instalação complexa</p>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">kodeaps.com.br/dashboard</div>
                </div>
                <ZoomableImage src="/images/dashboard-indicadores.png" alt="Dashboard de Indicadores APS" className="w-full h-auto block" />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center"><span className="text-emerald-600 font-black text-sm">✓</span></div>
                  <div><div className="text-xs font-bold text-slate-500 uppercase">Indicador C5</div><div className="text-lg font-black text-slate-900">Ótimo</div></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><span className="text-blue-600 font-black text-sm">📊</span></div>
                  <div><div className="text-xs font-bold text-slate-500 uppercase">Cadastros</div><div className="text-lg font-black text-slate-900">98.5%</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {[
              { icon: Activity, label: 'Análise automatizada' },
              { icon: Users, label: 'Visão por equipe' },
              { icon: FileCheck, label: 'Relatórios nominais' },
              { icon: MapPin, label: 'Monitoramento territorial' },
              { icon: Database, label: 'Dados do e-SUS PEC' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-slate-500 hover:text-blue-700 transition-colors">
                <item.icon size={20} className="text-blue-600" />
                <span className="text-sm font-bold uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">O Desafio</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Seus dados estão no e-SUS. Mas descobrir onde agir ainda exige muito trabalho?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Gestores municipais enfrentam diariamente o desafio de transformar milhões de registros do e-SUS PEC em decisões práticas para melhorar a Atenção Primária.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <p.icon size={24} className="text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION SECTION ── */}
      <section id="funcionalidades" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">A Solução</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">Uma visão completa da Atenção Primária</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O Kode APS transforma os dados do e-SUS PEC em módulos organizados para gestão, monitoramento e análise da qualidade da atenção.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionModules.map((m) => (
              <div key={m.title} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className={`w-14 h-14 ${m.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shrink-0`}>
                  <m.icon size={28} className={m.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{m.desc}</p>
                <ul className="mt-auto space-y-1.5 pt-4 border-t border-slate-100">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CADASTROS SECTION ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-700 uppercase tracking-widest">Qualidade Cadastral</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Cadastros melhores.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Dados mais confiáveis.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A qualidade dos indicadores depende diretamente da qualidade dos cadastros. O Kode APS identifica automaticamente problemas cadastrais antes que eles impactem seus resultados.
              </p>
              <div className="space-y-4">
                {cadastroFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-200 transition-colors">
                    <div className={`w-10 h-10 ${f.bg} rounded-lg flex items-center justify-center shrink-0`}>
                      <f.icon size={20} className={f.color} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">kodeaps.com.br/qualidade-cadastro</div>
                </div>
                <ZoomableImage src="/images/qualidade-cadastro.jpeg" alt="Tela de Qualidade Cadastral" className="w-full h-auto block" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center"><CheckCircle2 size={20} className="text-emerald-600" /></div>
                  <div><div className="text-xs font-bold text-slate-500 uppercase">Qualidade</div><div className="text-lg font-black text-slate-900">92%</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDICATORS SECTION ── */}
      <section id="indicadores" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">kodeaps.com.br/indicadores/dashboard</div>
                </div>
                <ZoomableImage src="/images/Do indicador ao cidadão.jpeg" alt="Relatório do Indicador ao Cidadão" className="w-full h-auto block" />
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center"><Users size={20} className="text-indigo-600" /></div>
                  <div><div className="text-xs font-bold text-slate-500 uppercase">Equipes</div><div className="text-lg font-black text-slate-900">12 ativas</div></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Classificação</div>
                <div className="flex gap-1">
                  {classifications.map((cls) => (
                    <div key={cls.label} className="text-center">
                      <div className={`w-6 h-2 ${cls.color} rounded-full mb-1`} />
                      <div className="text-[8px] font-bold text-slate-500">{cls.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest">Indicadores APS</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Do indicador ao{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">cidadão</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Não acompanhe apenas percentuais. Descubra exatamente onde sua equipe precisa agir com relatórios nominais que identificam cada cidadão com pendência.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, title: 'Boa prática realizada', desc: 'Cidadãos que já cumpriram o critério do indicador' },
                  { icon: AlertCircle, title: 'Pendência identificada', desc: 'Quem ainda precisa de atendimento ou acompanhamento' },
                  { icon: TrendingUp, title: 'Evolução temporal', desc: 'Acompanhe a melhoria dos resultados ao longo do tempo' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contato" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Ver todos os indicadores <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOMINAL REPORTS SECTION ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-widest">Relatórios Nominais</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Saiba exatamente{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">quem precisa de acompanhamento</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                O Kode APS transforma indicadores em listas de trabalho para as equipes. Cada cidadão com pendência é identificado nominalmente, permitindo ação direta e planejada.
              </p>
              <div className="space-y-4">
                {[
                  { icon: UserX, title: 'Pendências por cidadão', desc: 'Lista nominal de quem ainda não cumpriu critérios do indicador' },
                  { icon: UserCheck, title: 'Boas práticas realizadas', desc: 'Acompanhamento dos cidadãos já atendidos pela equipe' },
                  { icon: Calendar, title: 'Último atendimento', desc: 'Data da última consulta ou procedimento registrado no PEC' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-200 transition-colors">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">kodeaps.com.br/relatorios/nominal</div>
                </div>
                <ZoomableImage src="/images/nominal-indicadores.jpeg" alt="Relatório Nominal de Indicadores" className="w-full h-auto block" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><Stethoscope size={20} className="text-blue-600" /></div>
                  <div><div className="text-xs font-bold text-slate-500 uppercase">Profissionais</div><div className="text-lg font-black text-slate-900">8 ativos</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVOLUTION SECTION ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-widest">Evolução</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Acompanhe a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">evolução das equipes</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Visualize o progresso dos indicadores ao longo do tempo. Identifique tendências, sazonalidades e o impacto das ações da gestão nos resultados da APS.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Calendar, title: 'Análise por período', desc: 'Compare resultados mensais, quadrimestrais e anuais' },
                  { icon: TrendingUp, title: 'Tendências claras', desc: 'Identifique se os indicadores estão melhorando ou piorando' },
                  { icon: ArrowUpRight, title: 'Metas e projeções', desc: 'Acompanhe o progresso em relação às metas estabelecidas' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">kodeaps.com.br/indicadores/evolucao</div>
                </div>
                <ZoomableImage src="/images/evolucao-indicadore.jpeg" alt="Gráfico de Evolução dos Indicadores" className="w-full h-auto block" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><Calendar size={20} className="text-blue-600" /></div>
                  <div><div className="text-xs font-bold text-slate-500 uppercase">Período</div><div className="text-lg font-black text-slate-900">Quadrimestre</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">Como Funciona</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Do dado bruto à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">tomada de decisão</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O Kode APS transforma os dados do e-SUS PEC em informações acionáveis através de um fluxo seguro e automatizado.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, i) => (
                <div key={step.title} className={`lg:flex items-center gap-8 ${i > 0 ? 'lg:mt-12' : ''}`}>
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <div className={`flex items-center gap-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shrink-0`}>
                          <step.icon size={24} className={step.iconColor} />
                        </div>
                        <div className={i % 2 === 0 ? 'lg:text-right' : ''}>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-blue-100 rounded-full items-center justify-center z-10" style={{ top: `${i * 80 + 40}px` }}>
                    <span className="text-xs font-black text-blue-600">{i + 1}</span>
                  </div>
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:text-right lg:pr-12'}`}>
                    {i % 2 !== 0 && (
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-4 lg:flex-row-reverse">
                          <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shrink-0`}>
                            <step.icon size={24} className={step.iconColor} />
                          </div>
                          <div className="lg:text-right">
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-2">
                      <ArrowDown size={20} className="text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY SECTION ── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <ShieldCheck size={16} className="text-blue-400" />
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Segurança e Privacidade</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Seus dados em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">boas mãos</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                O Kode APS foi desenvolvido com foco na segurança e integridade dos dados da sua Atenção Primária. A plataforma opera em modo somente leitura, garantindo que nenhuma informação seja alterada no sistema original.
              </p>
              <div className="space-y-4">
                {securityFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <f.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{f.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
                    <Database size={24} className="text-emerald-400 mx-auto mb-2" />
                    <div className="text-xs font-bold text-slate-300">e-SUS PEC</div>
                    <div className="text-[10px] text-slate-500">Base Original</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[10px] font-bold text-blue-400 uppercase">Leitura Segura</div>
                    <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500" />
                    <Lock size={12} className="text-blue-400" />
                  </div>
                  <div className="flex-1 bg-blue-900/30 rounded-xl p-4 border border-blue-500/30 text-center">
                    <Server size={24} className="text-blue-400 mx-auto mb-2" />
                    <div className="text-xs font-bold text-white">Kode APS</div>
                    <div className="text-[10px] text-blue-300">Análise e Gestão</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-700">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-4">Níveis de Acesso</div>
                  <div className="space-y-2">
                    {[
                      { role: 'Administrador', access: 'Gestão + Cadastros Usuários', color: 'bg-purple-500' },
                      { role: 'Coordenador APS', access: 'Todos os módulos', color: 'bg-blue-500' },
                      { role: 'Gestor da Equipe', access: 'Sua Unidade + Equipe', color: 'bg-emerald-500' },
                      { role: 'Enfermeiro Equipe', access: 'Indicadores + Relatórios', color: 'bg-amber-500' },
                    ].map((level) => (
                      <div key={level.role} className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg">
                        <div className={`w-2 h-2 ${level.color} rounded-full`} />
                        <span className="text-sm font-medium text-slate-200 flex-1">{level.role}</span>
                        <span className="text-xs text-slate-500">{level.access}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-3 text-xs text-slate-500">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Arquitetura desenvolvida considerando boas práticas de segurança</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ── */}
      <section id="beneficios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">Benefícios</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Por que escolher o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Kode APS</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Uma plataforma completa para transformar a gestão da Atenção Primária através de dados confiáveis e insights acionáveis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className={`w-14 h-14 ${b.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <b.icon size={28} className={b.iconColor} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ── PLATFORM PREVIEW ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">Interface</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Mais do que um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">dashboard</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Uma plataforma completa que responde às perguntas críticas da gestão: onde agir, quem atender e como evoluir os resultados.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-2">
              {screens.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                    activeScreen === screen.id
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${activeScreen === screen.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                    <screen.icon size={20} className={activeScreen === screen.id ? 'text-white' : 'text-slate-500'} />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{screen.label}</div>
                    <div className={`text-xs mt-0.5 ${activeScreen === screen.id ? 'text-blue-100' : 'text-slate-400'}`}>{screen.description}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-mono ml-2">kodeaps.com.br/{currentScreen.id}</div>
                </div>
                <div className="p-6 min-h-[320px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <currentScreen.icon size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{currentScreen.label}</h3>
                      <p className="text-xs text-slate-500">{currentScreen.description}</p>
                    </div>
                  </div>
                  <ZoomableImage src={currentScreen.image} alt={currentScreen.label} className="w-full h-auto block rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ── FAQ SECTION ── */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">frequentes</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tire suas dúvidas sobre o Kode APS e como ele pode transformar a gestão da sua Atenção Primária.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-blue-200'}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className={`font-bold text-sm pr-4 ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-blue-600 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section id="demonstracao" className="py-20 lg:py-28 bg-gradient-to-br from-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Transforme sua gestão hoje</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            Sua equipe já produz os dados.{' '}
            <br className="hidden sm:block" />
            Agora transforme esses dados em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">resultados</span>.
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tenha uma visão mais clara da Atenção Primária e descubra onde sua gestão precisa agir. Agende uma demonstração personalizada para o seu município.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contato" className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-black/10 hover:-translate-y-0.5 w-full sm:w-auto justify-center">
              Solicitar Demonstração <ArrowRight size={18} />
            </Link>
            <Link to="/contato" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-xl transition-all w-full sm:w-auto justify-center">
              <MessageCircle size={18} /> Falar com Especialista
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-200/70">Sem compromisso • Demonstração gratuita • Implantação rápida</p>
        </div>
      </section>
    </div>
  );
};

export default KodeAps;