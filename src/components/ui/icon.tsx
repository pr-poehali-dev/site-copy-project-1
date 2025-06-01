import * as LucideIcons from "lucide-react";

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return <LucideIcons.CircleAlert size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
