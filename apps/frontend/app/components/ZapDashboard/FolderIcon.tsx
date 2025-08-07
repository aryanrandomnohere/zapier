import { IconProps } from "@repo/types";

export const FolderIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="18"
    width="18"
    className={className}
  >
    <path
      fill="#6B7280"
      d="M4 5h5.86l1.67 2H20v12H2v2h20V5h-9.53l-1.68-2H2v14h2V5Z"
    ></path>
  </svg>
);

export const BoltIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="18"
    width="18"
    className={className}
  >
    <path
      fill="#F97316"
      d="M9 23.66 20.54 9.91H15V.16L3.46 13.91H9v9.75Z"
    ></path>
  </svg>
);

export const RefreshIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 4H7.1L9.62 1H7L3.65 5L7 9H9.62L7.1 6H12C13.3845 6 14.7378 6.41054 15.889 7.17971C17.0401 7.94888 17.9373 9.04213 18.4672 10.3212C18.997 11.6003 19.1356 13.0078 18.8655 14.3656C18.5954 15.7235 17.9287 16.9708 16.9497 17.9497C15.9708 18.9287 14.7235 19.5954 13.3656 19.8655C12.0078 20.1356 10.6003 19.997 9.32122 19.4672C8.04213 18.9373 6.94888 18.0401 6.17971 16.889C5.41054 15.7378 5 14.3845 5 13H3C3 14.78 3.52784 16.5201 4.51677 18.0001C5.50571 19.4802 6.91131 20.6337 8.55585 21.3149C10.2004 21.9961 12.01 22.1743 13.7558 21.8271C15.5016 21.4798 17.1053 20.6226 18.364 19.364C19.6226 18.1053 20.4798 16.5016 20.8271 14.7558C21.1743 13.01 20.9961 11.2004 20.3149 9.55585C19.6337 7.91131 18.4802 6.50571 17.0001 5.51677C15.5201 4.52784 13.78 4 12 4Z"
      fill="#6B7280"
    />
  </svg>
);

export const BookmarkIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 6V22.73L12 18.11L20 22.73V2H4V4H18V19.27L12 15.8L6 19.27V6H4Z"
      fill="#6B7280"
    />
  </svg>
);
