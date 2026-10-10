import { Code2, HeartPulse, Database, LineChart, Rocket, Briefcase } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const timeline = [
  { icon: Code2, title: 'Tecnologia', desc: 'Formação e paixão por desenvolvimento de sistemas.' },
  { icon: HeartPulse, title: 'Saúde Pública', desc: 'Atuação prática na Atenção Primária e gestão municipal.' },
  { icon: Database, title: 'Sistemas de Informação', desc: 'Experiência com e-SUS, SIA, SIH e bases de dados do SUS.' },
  { icon: LineChart, title: 'Análise de Dados', desc: 'Transformação de dados brutos em inteligência gerencial.' },
  { icon: Rocket, title: 'Desenvolvimento de Soluções', desc: 'Criação de ferramentas para resolver problemas reais.' },
  { icon: Briefcase, title: 'Kode Saúde', desc: 'Fundação da empresa para unir tecnologia e saúde pública.' },
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
                <strong className="text-slate-900">Kayque da Silva Oliveira</strong> atua na área da saúde pública municipal
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

          {/* Photo Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-200/20 blur-3xl rounded-full transform scale-95" />
            <div className="relative aspect-[3/4] max-h-[600px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center">
              {/* Placeholder for professional photo */}
              <img
                src="/images/kayque.jpg"
                alt="Kayque da Silva Oliveira"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback elegant placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                      <div class="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center">
                        <span class="text-3xl font-black text-slate-400">KO</span>
                      </div>
                      <span class="font-medium">Foto Profissional</span>
                      <span class="text-xs mt-2 opacity-60">/public/images/kayque.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>
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
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
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