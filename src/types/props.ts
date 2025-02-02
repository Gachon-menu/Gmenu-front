import { MealType, RestaurantId, RestaurantName, Week } from "./type";

export interface MenuProps {
  date: string;
  restaurantId: RestaurantId;
  menu: string;
  dayOfWeek: Week;
  mealType: "아침" | "점심" | "저녁";
}

export interface TodayMenusProps {
  restaurantName: RestaurantName;
  restaurantId: RestaurantId;
  menus: MenuProps[];
}

export interface DayMenusProps {
  date: string;
  dayOfWeek: Week;
  menus: Pick<MenuProps, "mealType" | "menu">[];
}

export interface MenuItemProps {
  type: MealType;
  menu: string;
}
