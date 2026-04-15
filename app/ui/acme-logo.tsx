import clsx from "clsx";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  className?: string;
}

const sizes = {
  sm: { icon: 28, text: "text-base" },
  md: { icon: 36, text: "text-xl"   },
  lg: { icon: 48, text: "text-3xl"  },
};

export default function CargoKuLogo({
  size = "md",
  variant = "full",
  className,
}: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <div className={clsx("flex items-center gap-2 select-none", className)}>
      {/* Icon */}
      <div
        className="flex items-center justify-center rounded-xl bg-[#2E7D32] shadow-md"
        style={{ width: icon, height: icon }}
      >
        <svg
          width={icon * 0.6}
          height={icon * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          {/* Truck body */}
          <rect x="2" y="7" width="14" height="10" rx="2" fill="white" />
          {/* Truck cab */}
          <path d="M16 10h3l3 4v3h-6V10z" fill="white" />
          {/* Wheels */}
          <circle cx="6"  cy="19" r="2" fill="#2E7D32" />
          <circle cx="18" cy="19" r="2" fill="#2E7D32" />
          {/* Speed lines */}
          <path d="M3 5H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M3 3H7"  stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      {/* Wordmark */}
      {variant === "full" && (
        <span className={clsx("font-extrabold tracking-tight leading-none", text)}>
          <span className="text-[#1B5E20]">CargoKu</span>
          <span className="text-[#4CAF50]">Lite</span>
        </span>
      )}
    </div>
  );
}