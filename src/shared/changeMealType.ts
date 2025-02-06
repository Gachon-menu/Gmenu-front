export const changeMealType = (type: string) => {
  return type.includes("아침")
    ? type.replace("아침", "조식")
    : type.includes("점심")
    ? type.replace("점심", "중식")
    : type.replace("저녁", "석식");
};
