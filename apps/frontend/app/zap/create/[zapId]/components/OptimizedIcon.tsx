import { lazy, memo, Suspense, useEffect, useState } from "react";
import type { LucideProps } from "lucide-react";
import type { IconType } from "react-icons";

// Dynamic icon loader function
type IconLibrary =
  | "lucide"
  | "bs"
  | "ai"
  | "go"
  | "lia"
  | "io5"
  | "rx"
  | "io"
  | "md"
  | "fi"
  | "lu"
  | "pi";

// Icon cache to prevent reloading
const iconCache = new Map<string, React.ComponentType<any>>();
const loadingIcons = new Set<string>();

// Commonly used icons that should be preloaded
const PRELOAD_ICONS: Array<{ library: IconLibrary; name: string }> = [
  { library: "lucide", name: "Grid" },
  { library: "lucide", name: "Share" },
  { library: "lucide", name: "MessageSquare" },
  { library: "lucide", name: "Calendar" },
  { library: "lucide", name: "Clock" },
  { library: "lucide", name: "Settings" },
  { library: "lucide", name: "Play" },
  { library: "rx", name: "RxCross2" },
  { library: "io5", name: "IoHomeOutline" },
  { library: "io5", name: "IoApps" },
];

const loadIcon = async (
  library: IconLibrary,
  iconName: string,
): Promise<React.ComponentType<any>> => {
  const cacheKey = `${library}-${iconName}`;

  // Return cached icon if available
  if (iconCache.has(cacheKey)) {
    return iconCache.get(cacheKey)!;
  }

  // Prevent concurrent loading of same icon
  if (loadingIcons.has(cacheKey)) {
    // Wait for the loading to complete
    while (loadingIcons.has(cacheKey) && !iconCache.has(cacheKey)) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    return iconCache.get(cacheKey)!;
  }

  loadingIcons.add(cacheKey);

  try {
    let iconComponent: React.ComponentType<any>;

    switch (library) {
      case "lucide": {
        const mod = await import("lucide-react");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "bs": {
        const mod = await import("react-icons/bs");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "ai": {
        const mod = await import("react-icons/ai");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "go": {
        const mod = await import("react-icons/go");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "lia": {
        const mod = await import("react-icons/lia");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "io5": {
        const mod = await import("react-icons/io5");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "rx": {
        const mod = await import("react-icons/rx");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "io": {
        const mod = await import("react-icons/io");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "md": {
        const mod = await import("react-icons/md");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "fi": {
        const mod = await import("react-icons/fi");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "lu": {
        const mod = await import("react-icons/lu");
        iconComponent = (mod as any)[iconName];
        break;
      }
      case "pi": {
        const mod = await import("react-icons/pi");
        iconComponent = (mod as any)[iconName];
        break;
      }
      default:
        throw new Error(`Unsupported icon library: '${library}'`);
    }

    if (!iconComponent) {
      throw new Error(`Icon '${iconName}' not found in ${library}`);
    }

    iconCache.set(cacheKey, iconComponent);
    return iconComponent;
  } finally {
    loadingIcons.delete(cacheKey);
  }
};

// Preload commonly used icons
let preloadInitiated = false;
const preloadIcons = async () => {
  if (preloadInitiated) return;
  preloadInitiated = true;

  // Preload after a short delay to not block initial render
  setTimeout(async () => {
    const preloadPromises = PRELOAD_ICONS.map(({ library, name }) =>
      loadIcon(library, name).catch((err) =>
        console.warn(`Failed to preload icon ${library}-${name}:`, err),
      ),
    );
    await Promise.allSettled(preloadPromises);
    console.log("Preloaded common icons");
  }, 100);
};

interface OptimizedIconProps {
  library: IconLibrary;
  name: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

// Icon fallback component
const IconFallback = ({ size = 18 }: { size?: number }) => (
  <div
    className="animate-pulse bg-gray-300 rounded"
    style={{ width: size, height: size }}
  />
);

// Create icon importer function
const createIconImporter = (library: IconLibrary, iconName: string) => {
  return () =>
    loadIcon(library, iconName).then((IconComponent) => ({
      default: IconComponent,
    }));
};

const OptimizedIcon = memo(
  ({
    library,
    name,
    size = 18,
    color,
    className,
    onClick,
  }: OptimizedIconProps) => {
    const [IconComponent, setIconComponent] =
      useState<React.ComponentType<any> | null>(null);
    const [loading, setLoading] = useState(true);

    // Add validation to help debug issues
    if (!library || !name) {
      console.error("OptimizedIcon: Missing required props", { library, name });
      return <IconFallback size={size} />;
    }

    useEffect(() => {
      // Start icon preloading on mount
      preloadIcons();

      let mounted = true;

      const loadIconAsync = async () => {
        try {
          const icon = await loadIcon(library, name);
          if (mounted) {
            setIconComponent(() => icon);
            setLoading(false);
          }
        } catch (error) {
          console.error("OptimizedIcon: Error loading icon", {
            library,
            name,
            error,
          });
          if (mounted) {
            setLoading(false);
          }
        }
      };

      loadIconAsync();

      return () => {
        mounted = false;
      };
    }, [library, name]);

    if (loading || !IconComponent) {
      return <IconFallback size={size} />;
    }

    return (
      <IconComponent
        size={size}
        color={color}
        className={className}
        onClick={onClick}
      />
    );
  },
);

OptimizedIcon.displayName = "OptimizedIcon";

export default OptimizedIcon;
export type { IconLibrary };
