export interface MenuProps {
  date: string;
  restaurantId: number;
  menu: string;
  dayOfWeek: string;
  mealType: "아침" | "점심" | "저녁";
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
  type: "아침" | "점심" | "저녁";
  menu: string;
}
