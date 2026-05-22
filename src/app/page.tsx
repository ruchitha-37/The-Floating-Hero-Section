'use client';

import React from 'react';
import FloatingCard from '@/components/FloatingCard';

// 1. Exact custom SVG icons matching the reference image outline style
const BillingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M12 11v6" />
    <path d="M9.5 13h5a1.5 1.5 0 0 0 0-3h-3a1.5 1.5 0 0 1 0-3h5" />
  </svg>
);

const MattersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 22 7.5 22 16.5 12 22 2 16.5 2 7.5" />
    <path d="m14 13-5 5" />
    <path d="m8.5 7.5-3 3" />
    <path d="m11 10-3 3" />
    <path d="m9.5 6 5.5 5.5-2.5 2.5-5.5-5.5Z" />
  </svg>
);

const TasksIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 5.5 1.5 1.5L8 4" />
    <path d="m3 12.5 1.5 1.5L8 11" />
    <path d="m3 19.5 1.5 1.5L8 18" />
    <line x1="12" x2="20" y1="5" y2="5" />
    <line x1="12" x2="20" y1="12" y2="12" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const DocumentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" x2="16" y1="13" y2="13" />
    <line x1="8" x2="16" y1="17" y2="17" />
  </svg>
);

// 2. High-fidelity Memoji Avatar matches John Doe in the screenshot
const JohnDoeAvatar = () => (
  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#b4c6e7] border-2 border-white shadow-inner flex items-center justify-center shrink-0">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#9faad6" />
      {/* Black Hair */}
      <path d="M12 21C12 12 18 10 24 10C30 10 36 12 36 21C36 22 35 23 34 23C34 23 33 16 24 16C15 16 14 23 14 23C13 23 12 22 12 21Z" fill="#18181b" />
      {/* Brown Skin Face */}
      <circle cx="24" cy="24" r="9" fill="#925c3e" />
      {/* Black Beard */}
      <path d="M15 24C15 30 19 33 24 33C29 33 33 30 33 24H30C30 27.5 27.5 29 24 29C20.5 29 18 27.5 18 24H15Z" fill="#18181b" />
      {/* Glasses */}
      <rect x="17.5" y="21" width="5.5" height="4" rx="1" stroke="#18181b" strokeWidth="1.5" fill="none" />
      <rect x="25" y="21" width="5.5" height="4" rx="1" stroke="#18181b" strokeWidth="1.5" fill="none" />
      <line x1="23" y1="23" x2="25" y2="23" stroke="#18181b" strokeWidth="1.5" />
      {/* Blue shirt */}
      <path d="M14 39C14 34 18 32 24 32C30 32 34 34 34 39V44H14V39Z" fill="#3b82f6" />
    </svg>
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center bg-white overflow-hidden px-4 md:px-8 lg:px-16 py-12 md:py-24">
      


      {/* Background horizontal silhouettes matching the screenshot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Right side shapes */}
        <div className="w-[300px] sm:w-[400px] h-[75px] sm:h-[90px] bg-[#e3eaf2] rounded-full absolute -right-[150px] top-[15%] opacity-70" />
        <div className="w-[380px] sm:w-[480px] h-[75px] sm:h-[90px] bg-[#e3eaf2] rounded-full absolute -right-[80px] top-[32%] opacity-70" />
        <div className="w-[250px] sm:w-[320px] h-[75px] sm:h-[90px] bg-[#e3eaf2] rounded-full absolute -right-[120px] top-[48%] opacity-70" />
        
        {/* Left side shapes */}
        <div className="w-[280px] sm:w-[350px] h-[75px] sm:h-[90px] bg-[#e3eaf2] rounded-full absolute -left-[140px] top-[45%] opacity-60" />
        <div className="w-[320px] sm:w-[420px] h-[75px] sm:h-[90px] bg-[#e3eaf2] rounded-full absolute -left-[100px] top-[74%] opacity-60" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 relative z-10 pt-10">
        
        {/* Top Section: Typography centered */}
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 select-none w-full">
          <div className="space-y-4 md:space-y-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] tracking-tight leading-[1.12] font-bold text-center">
              <span className="block font-normal text-[#6e7e96]">
                A single platform to
              </span>
              <span className="block font-extrabold text-[#2b3a55] mt-1.5">
                manage every part of
              </span>
              <span className="block font-extrabold text-[#385af6] mt-1.5">
                your legal work
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#385af6] max-w-[490px] leading-[1.45] text-center">
              Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
            </p>
          </div>
        </div>

        {/* Middle Section: Scattered overlapping Active Capsules composition */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[560px] flex items-center justify-center">
          <div className="w-full max-w-[550px] aspect-[1.1] relative scale-80 sm:scale-95 lg:scale-100 origin-center mx-auto">
            
            {/* 1. Billing capsule (Blue) - rotated clockwise (slopes down) */}
            <FloatingCard
              color="blue"
              rotation="9deg"
              icon={BillingIcon}
              label="Billing"
              delay={0.15}
              floatingDelay={0}
              className="top-[12%] right-[4%] z-10"
            />

            {/* 2. Matters capsule (Orange) - rotated counter-clockwise (slopes up) */}
            <FloatingCard
              color="orange"
              rotation="-9deg"
              icon={MattersIcon}
              label="Matters"
              delay={0.25}
              floatingDelay={1.5}
              className="top-[44%] left-[2%] z-10"
            />

            {/* 3. Unique John Doe Client Portal capsule (Lavender / Custom Slot) - rotated clockwise (slopes down) */}
            <FloatingCard
              color="lavender"
              rotation="3deg"
              delay={0.05}
              floatingDelay={0.8}
              className="top-[48%] right-[8%] z-20"
            >
              <div className="flex items-center gap-3.5 pr-2 py-0.5 select-none">
                {/* Thick vertical orange bar on the left */}
                <div className="w-[4.5px] h-9 bg-[#e07a2c] rounded-full shrink-0" />
                
                {/* 3D Memoji style avatar */}
                <JohnDoeAvatar />

                {/* Text Content */}
                <div className="text-left leading-tight">
                  <h4 className="font-extrabold text-[#202e4c] text-[16px] tracking-tight">
                    John Doe - Portal
                  </h4>
                  <p className="text-[12px] font-semibold text-[#546889] mt-0.5 max-w-[210px] truncate">
                    Hey! Could you please review a document for me?
                  </p>
                  <p className="text-[10px] font-bold text-[#8698b6] mt-0.5 tracking-wide">
                    MAT-2233 - 2 h ago
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* 4. Tasks capsule (Dark Navy) - rotated clockwise (slopes down) */}
            <FloatingCard
              color="dark"
              rotation="4deg"
              icon={TasksIcon}
              label="Tasks"
              delay={0.35}
              floatingDelay={2.2}
              className="bottom-[18%] left-[26%] z-10"
            />

            {/* 5. Documents capsule (Dark Navy) - rotated counter-clockwise (slopes up) */}
            <FloatingCard
              color="dark"
              rotation="-7deg"
              icon={DocumentsIcon}
              label="Documents"
              delay={0.45}
              floatingDelay={3.1}
              className="bottom-[12%] right-[4%] z-10"
            />

          </div>
        </div>

      </div>
    </main>
  );
}
