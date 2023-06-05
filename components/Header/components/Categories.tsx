'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiTreehouse,
  GiPalmTree,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla, MdOutlineHouseboat } from 'react-icons/md';

import Container from '@/components/UI/Container';
import CategoryItem from '@/components/UI/CategoryItem';

export const categories = [
  {
    label: 'Rooms',
    icon: MdOutlineVilla,
    description: 'This property provides accommodation',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This is property has a beautiful pool',
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island',
  },
  {
    label: 'Houseboats',
    icon: MdOutlineHouseboat,
    description: 'This property is on the boat',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is an ancient castle',
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property is in a cave',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities',
  },
  {
    label: 'Treehouses',
    icon: GiTreehouse,
    description: 'This property is on the tree',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert',
  },
  {
    label: 'Tropical',
    icon: GiPalmTree,
    description: 'This property is located in tropical climate area',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
