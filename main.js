function age() {
  const d1 = document.getElementById("date").value;
  const m1 = document.getElementById("month").value;
  const y1 = document.getElementById("year").value;
  const date = new Date();
  const d2 = date.getDate();
  const m2 = 1 + date.getMonth();
  const y2 = date.getFullYear();
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  const d = d2 - d1;
  const m = m2 - m1;
  const y = y2 - y1;
  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Month " + d + " Days ";
}
