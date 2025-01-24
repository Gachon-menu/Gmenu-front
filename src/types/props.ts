export interface MenuProps {
  date: string;
  restaurantId: number;
  menu: string;
  dayOfWeek: string;
  mealType: string;
}

export interface TodayMenusProps {
  restaurantName?: string;
  restaurantId: number;
  menus: MenuProps[];
}

export interface DayMenusProps {
  date: string;
  dayOfWeek: string;
  menus: Pick<MenuProps, "mealType" | "menu">[];
}

export interface MenuItemProps {
  type: string;
  menu: string;
}
