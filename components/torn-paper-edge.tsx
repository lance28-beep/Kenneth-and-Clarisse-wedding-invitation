"use client"

interface TornPaperEdgeProps {
  position?: "top" | "bottom"
  className?: string
  zIndex?: number
}

export function TornPaperEdge({ position = "bottom", className = "", zIndex = 10 }: TornPaperEdgeProps) {
  // Create a realistic torn paper edge with highly irregular, jagged pattern
  // More organic and hand-torn appearance with varying depths and spikes
  const outerEdge = position === "bottom"
    ? "M0,0 L0,32 L8,28 L18,31 L28,25 L38,30 L48,27 L58,32 L68,24 L78,29 L88,26 L98,31 L108,23 L118,28 L128,30 L138,25 L148,32 L158,27 L168,29 L178,24 L188,31 L198,28 L208,30 L218,25 L228,32 L238,27 L248,29 L258,24 L268,31 L278,28 L288,30 L298,25 L308,32 L318,27 L328,29 L338,24 L348,31 L358,28 L368,30 L378,25 L388,32 L398,27 L408,29 L418,24 L428,31 L438,28 L448,30 L458,25 L468,32 L478,27 L488,29 L498,24 L508,31 L518,28 L528,30 L538,25 L548,32 L558,27 L568,29 L578,24 L588,31 L598,28 L608,30 L618,25 L628,32 L638,27 L648,29 L658,24 L668,31 L678,28 L688,30 L698,25 L708,32 L718,27 L728,29 L738,24 L748,31 L758,28 L768,30 L778,25 L788,32 L798,27 L808,29 L818,24 L828,31 L838,28 L848,30 L858,25 L868,32 L878,27 L888,29 L898,24 L908,31 L918,28 L928,30 L938,25 L948,32 L958,27 L968,29 L978,24 L988,31 L1000,29 L1000,0 Z"
    : "M0,32 L0,0 L8,4 L18,1 L28,7 L38,2 L48,5 L58,0 L68,8 L78,3 L88,6 L98,1 L108,9 L118,4 L128,2 L138,7 L148,0 L158,5 L168,3 L178,8 L188,1 L198,4 L208,2 L218,7 L228,0 L238,5 L248,3 L258,8 L268,1 L278,4 L288,2 L298,7 L308,0 L318,5 L328,3 L338,8 L348,1 L358,4 L368,2 L378,7 L388,0 L398,5 L408,3 L418,8 L428,1 L438,4 L448,2 L458,7 L468,0 L478,5 L488,3 L498,8 L508,1 L518,4 L528,2 L538,7 L548,0 L558,5 L568,3 L578,8 L588,1 L598,4 L608,2 L618,7 L628,0 L638,5 L648,3 L658,8 L668,1 L678,4 L688,2 L698,7 L708,0 L718,5 L728,3 L738,8 L748,1 L758,4 L768,2 L778,7 L788,0 L798,5 L808,3 L818,8 L828,1 L838,4 L848,2 L858,7 L868,0 L878,5 L888,3 L898,8 L908,1 L918,4 L928,2 L938,7 L948,0 L958,5 L968,3 L978,8 L988,1 L1000,3 L1000,32 Z"

  // Inner layer edge (lighter, showing through the tear) - more irregular and offset
  const innerEdge = position === "bottom"
    ? "M0,0 L0,30 L6,26 L16,29 L26,23 L36,28 L46,25 L56,30 L66,22 L76,27 L86,24 L96,29 L106,21 L116,26 L126,28 L136,23 L146,30 L156,25 L166,27 L176,22 L186,29 L196,26 L206,28 L216,23 L226,30 L236,25 L246,27 L256,22 L266,29 L276,26 L286,28 L296,23 L306,30 L316,25 L326,27 L336,22 L346,29 L356,26 L366,28 L376,23 L386,30 L396,25 L406,27 L416,22 L426,29 L436,26 L446,28 L456,23 L466,30 L476,25 L486,27 L496,22 L506,29 L516,26 L526,28 L536,23 L546,30 L556,25 L566,27 L576,22 L586,29 L596,26 L606,28 L616,23 L626,30 L636,25 L646,27 L656,22 L666,29 L676,26 L686,28 L696,23 L706,30 L716,25 L726,27 L736,22 L746,29 L756,26 L766,28 L776,23 L786,30 L796,25 L806,27 L816,22 L826,29 L836,26 L846,28 L856,23 L866,30 L876,25 L886,27 L896,22 L906,29 L916,26 L926,28 L936,23 L946,30 L956,25 L966,27 L976,22 L986,29 L1000,27 L1000,0 Z"
    : "M0,32 L0,2 L6,6 L16,3 L26,9 L36,4 L46,7 L56,2 L66,10 L76,5 L86,8 L96,3 L106,11 L116,6 L126,4 L136,9 L146,2 L156,7 L166,5 L176,10 L186,3 L196,6 L206,4 L216,9 L226,2 L236,7 L246,5 L256,10 L266,3 L276,6 L286,4 L296,9 L306,2 L316,7 L326,5 L336,10 L346,3 L356,6 L366,4 L376,9 L386,2 L396,7 L406,5 L416,10 L426,3 L436,6 L446,4 L456,9 L466,2 L476,7 L486,5 L496,10 L506,3 L516,6 L526,4 L536,9 L546,2 L556,7 L566,5 L576,10 L586,3 L596,6 L606,4 L616,9 L626,2 L636,7 L646,5 L656,10 L666,3 L676,6 L686,4 L696,9 L706,2 L716,7 L726,5 L736,10 L746,3 L756,6 L766,4 L776,9 L786,2 L796,7 L806,5 L816,10 L826,3 L836,6 L846,4 L856,9 L866,2 L876,7 L886,5 L896,10 L906,3 L916,6 L926,4 L936,9 L946,2 L956,7 L966,5 L976,10 L986,3 L1000,5 L1000,32 Z"

  return (
    <div className={`absolute ${position === "bottom" ? "bottom-0" : "top-0"} left-0 right-0 w-full h-8 sm:h-10 md:h-12 pointer-events-none ${className}`} style={{ zIndex }}>
      <svg
        viewBox="0 0 1000 32"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Shadow filter for realistic depth */}
          <filter id={`tornShadow-${position}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/>
            <feOffset dx="0" dy={position === "bottom" ? "3" : "-3"} result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.25"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Shadow beneath the torn edge */}
        <path
          d={outerEdge}
          fill="rgba(0,0,0,0.12)"
          transform={position === "bottom" ? "translate(0, 3)" : "translate(0, -3)"}
          style={{ filter: "blur(2px)" }}
        />
        
        {/* Main paper edge (outer layer) - the visible paper color */}
        <path
          d={outerEdge}
          fill="currentColor"
          className="text-[#FAF9F5]"
          filter={`url(#tornShadow-${position})`}
        />
        
        {/* Inner layer/core (lighter color showing through the tear) */}
        <path
          d={innerEdge}
          fill="#F0F0EB"
          opacity="0.95"
        />
      </svg>
    </div>
  )
}

