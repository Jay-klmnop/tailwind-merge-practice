interface ThemeColors {
  background: string;
  counterText: string;
  headerText: string;
  border: string;
}

export const themes: Record<string, ThemeColors> = {
  negative3: {
    background: "bg-indigo-300",
    counterText: "text-indigo-950",
    headerText: "text-slate-950",
    border: "border border-indigo-300",
  },

  negative2: {
    background: "bg-indigo-400",
    counterText: "text-indigo-800",
    headerText: "text-slate-800",
    border: "border border-indigo-400",
  },

  negative1: {
    background: "bg-indigo-500",
    counterText: "text-indigo-700",
    headerText: "text-slate-700",
    border: "border border-indigo-500",
  },

  neutral: {
    background: "bg-indigo-600",
    counterText: "text-indigo-600",
    headerText: "text-slate-500",
    border: "border border-indigo-600",
  },

  positive1: {
    background: "bg-indigo-700",
    counterText: "text-indigo-500",
    headerText: "text-slate-400",
    border: "border border-indigo-700",
  },

  positive2: {
    background: "bg-indigo-800",
    counterText: "text-indigo-400",
    headerText: "text-slate-300",
    border: "border border-indigo-800",
  },

  positive3: {
    background: "bg-indigo-900",
    counterText: "text-indigo-300",
    headerText: "text-slate-200",
    border: "border border-indigo-900",
  },
};

export const getThemeByCount = (count: number): ThemeColors => {
  if (count >= 500) return themes.positive3;
  if (count >= 50) return themes.positive2;
  if (count >= 5) return themes.positive1;
  if (count >= -5) return themes.negative1;
  if (count >= -50) return themes.negative2;
  if (count >= -500) return themes.negative3;
  return themes.neutral;
};
