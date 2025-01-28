import { Star } from "lucide-react";

export const CustomStar = ({ isFilled }: { isFilled: boolean }) => (
  <Star fill={isFilled ? "#ffd700" : "none"} stroke="#ffd700" strokeWidth={2} />
);
