interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = false }) => {
  return (
    <div className={centered ? 'text-center' : ''}>
      <span className="inline-block text-xs font-black text-brand-600 uppercase tracking-widest mb-2">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;