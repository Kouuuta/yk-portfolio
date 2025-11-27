import React from "react";

interface TechStackCardProps {
  platform: string;
  username: string;
  color: string;
  icon: React.ReactNode;
  textColor?: string;
  iconColor?: string;
  iconBg?: string;
}

export function TechStackCard({
  platform,
  username,
  color,
  icon,
  textColor = "text-white",
  iconColor = "text-white",
  iconBg = "bg-white/20",
}: TechStackCardProps) {
  return (
    <div
      className="relative shrink-0 w-[200px] h-60 rounded-3xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:z-10"
      style={{
        backgroundColor: color,
        boxShadow:
          "20px 20px 60px rgba(0,0,0,0.5), -5px -5px 20px rgba(255,255,255,0.03) inset, 0 0 40px rgba(251, 191, 36, 0.1)",
        transform: "perspective(1000px) rotateY(-12deg) rotateX(5deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(251, 191, 36, 0.2)",
          background:
            "linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${iconBg} backdrop-blur-sm`}
        style={{
          transform: "translateZ(20px)",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(251, 191, 36, 0.1)",
        }}
      >
        <div className={iconColor}>{icon}</div>
      </div>
      <div
        style={{
          transform: "translateZ(10px)",
        }}
      >
        <h3 className={`text-2xl font-bold mb-1 ${textColor} tracking-tight`}>
          {platform}
        </h3>
        <p className={`text-sm font-medium opacity-70 ${textColor}`}>
          {username}
        </p>
      </div>
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-amber-400/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
