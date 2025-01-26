export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  const monthNames = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const month = monthNames[date.getMonth()];

  return `${day} ${month} ${year}`;
}

export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

export const formatDateToArabic = (date: Date | null): string => {
  if (!date) return "";
  return date.toLocaleDateString("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};
