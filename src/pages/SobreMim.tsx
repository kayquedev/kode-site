import { Code2, HeartPulse, GraduationCap, School, Briefcase, Monitor, Activity, FileText, Database, Server, Users, Shield } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const systems = [
  { name: 'eSUS PEC', icon: Monitor },
  { name: 'eSUS Território', icon: Activity },
  { name: 'eSUS Regulação', icon: FileText },
  { name: 'eSUS AF/SIGAF', icon: FileText },
  { name: 'SIA/SUS', icon: Database },
  { name: 'BPA', icon: FileText },
  { name: 'CNES', icon: Server },
  { name: 'SISPNCD/LOCALIDADE', icon: Activity },
  { name: 'CADSUS/CADWEB', icon: Users },
  { name: 'RNDS', icon: Shield },
  { name: 'TABWIN/TABNET', icon: Database },
];

const timeline = [
  {
    icon: Code2,
    title: 'Tecnologia',
    date: '',
    desc: 'Paixão por desenvolvimento de sistemas.',
    subtitle: ''
  },
  {
    icon: HeartPulse,
    title: 'Saúde Pública',
    date: 'maio de 2023 - o momento',
    desc: 'Atuação prática na Atenção Primária e Sistemas de Informação.',
    subtitle: ''
  },
  {
    icon: School,
    title: 'Formação Técnica',
    date: 'agosto de 2022 - agosto de 2024',
    desc: 'Desenvolvimento de Sistemas',
    subtitle: 'Presencial - Proz Divinópolis MG'
  },
  {
    icon: GraduationCap,
    title: 'Formação Superior',
    date: 'fev. de 2022 – fev. de 2024',
    desc: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    subtitle: 'Faculdade Pitágoras Divinópolis MG'
  },
  {
    icon: Briefcase,
    title: 'Kode Saúde',
    date: '2026',
    desc: 'Fundação da empresa para unir tecnologia e saúde pública.',
    subtitle: ''
  },
];

const SobreMim: React.FC = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionTitle
              subtitle="SOBRE O FUNDADOR"
              title="Quem está por trás da Kode Saúde."
            />

            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                <strong className="text-slate-900">Kayque Oliveira</strong> atua na área da saúde pública municipal
                e possui experiência prática na Atenção Primária à Saúde, sistemas de informação em saúde,
                análise de dados e processos relacionados ao SUS.
              </p>
              <p>
                Possui formação na área de tecnologia, com conhecimento em desenvolvimento de sistemas,
                banco de dados e criação de soluções digitais. Sua experiência profissional dentro dos
                serviços de saúde permitiu identificar problemas reais enfrentados por profissionais e gestores.
              </p>
              <p>
                Essa vivência levou à criação de ferramentas voltadas para facilitar rotinas, melhorar análises
                e apoiar decisões. A Kode Saúde surge da união entre conhecimento em tecnologia e experiência
                prática dentro da saúde pública.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-200/20 blur-3xl rounded-full transform scale-95" />
            <div className="relative aspect-[3/4] max-h-[600px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center">
              <img
                src="/images/kayque-foto2.jpg"
                alt="Kayque Oliveira"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                      <div class="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center">
                        <span class="text-3xl font-black text-slate-400">KO</span>
                      </div>
                      <span class="font-medium">Foto Profissional</span>
                      <span class="text-xs mt-2 opacity-60">/public/images/kayque-foto2.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Social Buttons */}
            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="https://www.youtube.com/@kayque_esus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
                <span>YouTube</span>
              </a>
              <a
                href="https://instagram.com/kayque_esus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemas com Experiência */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <Database size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Sistemas que Kayque tem Experiência</h3>
              <p className="text-sm text-slate-500">Conhecimento prático nos principais sistemas de informação do SUS</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {systems.map((system) => (
              <div
                key={system.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                  <system.icon size={16} className="text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{system.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Trajetória Profissional</h2>
            <p className="text-slate-600">Da tecnologia à saúde pública: uma jornada orientada por propósito.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -ml-px hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={item.title} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content Card */}
                  <div className="flex-1 ml-16 md:ml-0">
                    <div className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.date && (
                        <span className={`inline-block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                          {item.date}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 mb-1">{item.desc}</p>
                      {item.subtitle && (
                        <p className="text-sm text-slate-400 font-medium">{item.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 md:-ml-6 w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white z-10">
                    <item.icon size={20} />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMim;