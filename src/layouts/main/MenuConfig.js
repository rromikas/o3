import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 24,
  height: 24,
  color: 'white'
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Tjänster',
    path: '/Tjanster',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  },
  {
    title: 'Priser',
    path: '/Pricing',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  },
  {
    title: 'Vår vision',
    path: '/Vision',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  },
  {
    title: 'Kontakt',
    path: '/Kontakt',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />
  }
];

export default menuConfig;
