import dynamic from 'next/dynamic';

export const MainPageAsync = dynamic(() => import('./main-page'));
