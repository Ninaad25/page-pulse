import jsPDF from "jspdf";

const COLORS = {
  primary: [37, 99, 235],
  success: [34, 197, 94],
  warning: [245, 158, 11],
  danger: [239, 68, 68],
  dark: [31, 41, 55],
  light: [245, 247, 250],
  border: [220, 220, 220],
};

function drawHeader(pdf) {
  pdf.setFillColor(...COLORS.primary);
  pdf.rect(0, 0, 210, 28, "F");

  pdf.setTextColor(255, 255, 255);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(24);

  pdf.text("PAGE PULSE", 20, 15);

  pdf.setFontSize(11);

  pdf.text("AI Website Audit Report", 20, 22);

  pdf.setFontSize(9);

  pdf.text(new Date().toLocaleString(), 150, 22);
}

function drawCard(pdf, x, y, title, value) {
  pdf.setFillColor(...COLORS.light);

  pdf.roundedRect(x, y, 40, 24, 2, 2, "F");

  pdf.setDrawColor(...COLORS.border);

  pdf.roundedRect(x, y, 40, 24, 2, 2);

  pdf.setFontSize(9);

  pdf.setTextColor(...COLORS.dark);

  pdf.text(title, x + 3, y + 6);

  pdf.setFontSize(16);

  pdf.setFont("helvetica", "bold");

  pdf.text(String(value), x + 3, y + 17);
}

export function generatePdfReport(result, url) {
  const pdf = new jsPDF("p", "mm", "a4");

  drawHeader(pdf);
  drawWebsiteInfo(pdf, url);
  drawSummary(pdf, result);
  drawRecommendations(pdf, result);
  drawFooter(pdf);
  drawCard(pdf, 20, 55, "SEO", 91);
  drawCard(pdf, 65, 55, "STATUS", 200);
  drawCard(pdf, 110, 55, "SPEED", "420 ms");
  drawCard(pdf, 155, 55, "SIZE", "620 KB");

  pdf.save("page-pulse-report.pdf");
}
