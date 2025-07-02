import { useTheme } from "@mui/material";

const IconBackend = ({ width = 100, height = 100 }: { width?: number; height?: number }) => {
  const theme = useTheme();

  const gradientId = "borderGradient";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0.259336" stopColor={theme.palette.primary.main} />
          <stop offset="1" stopColor={theme.palette.secondary.main} />
        </linearGradient>
      </defs>

      {/* Server Stack with Gradient Outline */}
      <rect x="10" y="10" width="88" height="20" rx="4" fill={theme.palette.background.default} stroke={`url(#${gradientId})`} strokeWidth="3" />
      <rect x="10" y="35" width="88" height="20" rx="4" fill={theme.palette.background.default} stroke={`url(#${gradientId})`} strokeWidth="3" />
      <rect x="10" y="60" width="88" height="20" rx="4" fill={theme.palette.background.default} stroke={`url(#${gradientId})`} strokeWidth="3" />

      {/* Server Indicators */}
      <circle cx="85" cy="20" r="3" fill={theme.palette.primary.main} />
      <circle cx="85" cy="45" r="3" fill={theme.palette.primary.main} />
      <circle cx="85" cy="70" r="3" fill={theme.palette.primary.main} />

      {/* Connection */}
      <circle cx="50" cy="91.5" r="5" fill={theme.palette.background.default} stroke={`url(#${gradientId})`} strokeWidth="3" />

      {/* Cloud */}
      <path
        d="M75 90H35C30 90 27 85 27 82C27 77 30 74 33 73C33 68 38 64 43 64C46 64 48 65 50 67C52 64 55 62 58 62C63 62 68 66 68 71C72 71 75 74 75 78C75 83 72 90 75 90"
        fill={theme.palette.background.paper}
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
      />
    </svg>
  );
};

export default IconBackend;
