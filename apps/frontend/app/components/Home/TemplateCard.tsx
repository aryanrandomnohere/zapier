interface TemplateCardProps {
  icon: string;
  title: string;
  badgeText?: string;
}

export function TemplateCard({ icon, title, badgeText }: TemplateCardProps) {
  return (
    <div className="min-w-[250px] max-w-xs p-4 border rounded-lg shadow-sm bg-white flex-shrink-0 space-y-3">
      <img src={icon} alt="icon" className="w-6 h-6" />
      <p className="text-sm font-medium text-gray-900">{title}</p>
      {badgeText && (
        <span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
          {badgeText}
        </span>
      )}
    </div>
  );
}
