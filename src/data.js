/*  
    This data will be filtered through to create different categories for the user to select.

    To add more categories, just add to the categories array below.
*/

export const categories = [
  { category: "Sports", id: 21, colors: generateColor() },
  { category: "Animals", id: 27, colors: generateColor() },
  { category: "Video Games", id: 15, colors: generateColor() },
  { category: "History", id: 23, colors: generateColor() },
  { category: "TV", id: 14, colors: generateColor() },
  { category: "General Knowledge", id: 9, colors: generateColor() },
];

function generateColor() {
  const colors = [
    { background: "#429EA6", color: "#ffffff" },
    { background: "#16F4D0", color: "#1f1f1f" },
    { background: "#CC998D", color: "#1f1f1f" },
    { background: "#ECEBE4", color: "#1f1f1f" },
    { background: "#BCCCE0", color: "#1f1f1f" },
    { background: "#8DDBE0", color: "#1f1f1f" },
    { background: "#F51AA4", color: "#ffffff" },
    { background: "#BD4089", color: "#ffffff" },
    { background: "#683257", color: "#ffffff" },
    { background: "#61988E", color: "#ffffff" },
    { background: "#EABDA8", color: "#1f1f1f" },
    { background: "#DA667B", color: "#ffffff" },
    { background: "#4C956C", color: "#ffffff" },
    { background: "#2C6E49", color: "#ffffff" },
    { background: "#FEFEE3", color: "#1f1f1f" },
    { background: "#FFC9B9", color: "#1f1f1f" },
    { background: "#5DA9E9", color: "#ffffff" },
    { background: "#6D326D", color: "#ffffff" },
    { background: "#C5E99B", color: "#1f1f1f" },
    { background: "#8FBC94", color: "#1f1f1f" },
    { background: "#6DA34D", color: "#ffffff" },
  ];
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
