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
