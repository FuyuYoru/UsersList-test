import { IconButton } from '@/shared/ui/IconButton';
import { IconButtonWithCounter } from '@/shared/ui/IconButtonWithCounter';
import clsx from 'clsx';
import { List, ChartNoAxesCombined, ShoppingCart, CircleDollarSign, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <List width={30} height={30} strokeWidth={0.5} /> },
    { name: 'Megabot', path: '/megabot', icon: <ChartNoAxesCombined width={30} height={30} strokeWidth={0.5} /> },
    { name: 'Bot market', path: '/bot-market', icon: <ShoppingCart width={30} height={30} strokeWidth={0.5} /> },
    { name: 'Coin prices', path: '/coin-prices', icon: <CircleDollarSign width={30} height={30} strokeWidth={0.5} /> },
    { name: 'Profile', path: '/profile', icon: <Settings width={30} height={30} strokeWidth={0.5} /> }
  ];

  return (
    <div className='bg-[#18283c] px-4 h-[3rem] flex items-center w-full'>
      <div className="flex flex-row justify-between w-full">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={clsx('flex items-center', location.pathname === link.path && 'text-white')}
          >
            {link.name === 'Profile' ?
              <IconButtonWithCounter icon={link.icon} text={link.name} counterValue={3} />
              : <IconButton icon={link.icon} text={link.name} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};