import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M232.9,99c-3.4,2.7-6.8,5.4-10.2,8.1c-11.4,9-22.8,17.9-34.4,26.6H199c26.6,0,44.2,14.9,44.2,40.6v0.5
            c0,25.9-17.6,40.6-44.2,40.6h-18.1v-75.8l-0.1-0.1c-2.1,1.6-4.1,3.1-6.2,4.6l-38.2,29.2l-48.5,37l48.5-33.8v78.4h61
            c57.8,0,91.5-34.4,91.5-80.7v-0.5C288.9,137.6,268.8,109.7,232.9,99z"
          />
          <path fill="url(#BG2)" d="M180.8,139.4c-2.1,1.6-4.1,3.1-6.2,4.6L180.8,139.4L180.8,139.4z" />
          <path
            fill="url(#BG3)"
            d="M180.9,116.5v-65h-47l-38.3,62.1L57.3,51.5h-47V212h43.6v-91.7l40.8,62.4h0.9l40.8-62.5l0.2-0.3v33.5
            c1.5-1.1,3-2.2,4.4-3.3l39.8-30.4l48.3-36.9L180.9,116.5z"
          />
        </g>
      </svg>
    </Box>
  );
}
